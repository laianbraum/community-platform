import { Box, Card, Text, Image, AspectRatio } from 'theme-ui'
import { InternalLink } from '../InternalLink/InternalLink'
import { Username } from '../Username/Username'

export interface Props {
  loading?: boolean
  imageUrl: string
  description: string
  user: {
    isVerified: boolean
    username: string
    country: string | null
  }
  heading: string
  isEditable: boolean
}

import { keyframes } from '@emotion/react'

const wave = keyframes`
  from {
    background: lightgrey;
  }
  to {
    background: grey;
  }
`

export const MapMemberCard = (props: Props) => {
  const { imageUrl, description, user, heading } = props
  return (
    <Card sx={{ maxWidth: '230px' }} data-cy="MapMemberCard">
      <InternalLink to={`/u/${user.username}`}>
        {!!props.loading && (
          <>
            <AspectRatio
              ratio={230 / 120}
              sx={{
                background: 'lightgrey',
                animation: `${wave} 800ms ease infinite`,
              }}
            />
            <Box sx={{ p: 2, height: '109px' }} />
          </>
        )}
        {!props.loading && (
          <>
            <AspectRatio
              ratio={230 / 120}
              sx={{
                background: 'lightgrey',
              }}
            >
              <Image
                src={imageUrl}
                sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </AspectRatio>
            <Box sx={{ p: 2 }}>
              <Text mb={2} sx={{ fontSize: '12px', color: 'blue' }}>
                {heading}
              </Text>
              <div>
                <Username
                  isVerified={!!user.isVerified}
                  user={{
                    userName: user.username,
                    countryCode: user.country,
                  }}
                />
              </div>
              <Text
                mb={2}
                sx={{
                  wordBreak: 'break-word',
                  fontSize: 1,
                  display: 'block',
                  color: 'black',
                }}
              >
                {description}
              </Text>
            </Box>
          </>
        )}
      </InternalLink>
    </Card>
  )
}
