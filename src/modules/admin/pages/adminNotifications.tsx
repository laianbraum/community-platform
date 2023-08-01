import styled from '@emotion/styled'
import { observer } from 'mobx-react'
import { NotificationItem } from 'oa-components'
import { useCallback, useEffect, useState } from 'react'
import { Box, Button, Text } from 'theme-ui'
import { useDB } from 'src/App'
import type { INotification, IPendingEmails, IUserPP } from 'src/models'
import { getFormattedNotificationMessage } from 'src/pages/common/Header/getFormattedNotifications'
import Table from '../components/Table/Table'
import type { ICellRenderProps, ITableProps } from '../components/Table/Table'
import { functions } from 'src/utils/firebase'
import { useCommonStores } from 'src'

type IPendingEmailsDBDoc = Record<string, IPendingEmails>

const EMAILS_PENDING_COLUMNS: ITableProps<IPendingEmails>['columns'] = [
  {
    Header: 'User ID',
    accessor: 'displayName',
  },
  {
    Header: 'Frequency',
    accessor: 'emailFrequency',
  },
  {
    Header: 'Notifications',
    accessor: 'notifications',
  },
]
const NotificationListContainer = styled(Box)`
  overflow: auto;
  height: 6rem;
`

const AdminNotifications = observer(() => {
  const { db } = useDB()
  const { userStore } = useCommonStores().stores
  const [emailsPending, setEmailsPending] = useState<
    Array<IPendingEmails & Pick<IUserPP, 'displayName'>>
  >([])

  const [triggerEmailState, setTriggerEmailState] = useState<string>(
    'Click the button to trigger emails.',
  )

  // Load list of pending approvals on mount only, dependencies empty to avoid reloading
  useEffect(() => {
    getPendingEmails()
  }, [])

  const getPendingEmails = useCallback(async () => {
    db.collection<IPendingEmailsDBDoc>('user_notifications')
      .doc('emails_pending')
      .stream()
      .subscribe(async (emailsPending) => {
        if (emailsPending) {
          const values = await Promise.all(
            Object.values(emailsPending).map(async (value) => {
              const { displayName } = await userStore.getUserProfile(
                value._authID,
              )
              return { ...value, displayName }
            }),
          )
          if (values.length > 0) {
            setEmailsPending(values)
          }
        }
      })
  }, [])

  const triggerEmails = async () => {
    setTriggerEmailState('Sending...')
    try {
      await functions.httpsCallable('emailNotifications-sendOnce')()
      setTriggerEmailState('Emails sent successfully.')
    } catch (error) {
      setTriggerEmailState(`Error sending emails: \n ${error}`)
    }
  }

  /** Function applied to render each table row cell */
  const RenderContent = (props: ICellRenderProps) => {
    const { col } = props
    const { field, value } = col
    const tableField = field as keyof IPendingEmails
    if (!value) return null
    if (tableField === 'notifications') {
      const notifications = value as INotification[]
      return (
        <NotificationListContainer>
          {notifications.map((n) => (
            <NotificationItem key={n._id} type={n.type}>
              {getFormattedNotificationMessage(n)}
            </NotificationItem>
          ))}
        </NotificationListContainer>
      )
    }
    return <Text>{`${value}`}</Text>
  }

  return (
    <>
      <h2>Admin Notifications</h2>
      <h4>Pending Emails</h4>
      <Button onClick={triggerEmails}>Trigger Test Emails</Button>
      {triggerEmailState && <p>{triggerEmailState}</p>}
      <Table
        data={emailsPending}
        columns={EMAILS_PENDING_COLUMNS}
        rowComponent={RenderContent}
      />
    </>
  )
})
export default AdminNotifications
