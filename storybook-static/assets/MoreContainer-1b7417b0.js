import{a as o}from"./jsx-runtime-913be41c.js";import{n as i}from"./emotion-styled.browser.esm-09c6e9f5.js";import{u as a}from"./theme-ui-css.esm-b19fe7ec.js";import{a as d}from"./theme-ui-components.esm-a8d58c50.js";const s=""+new URL("white-bubble_0-677989a8.svg",import.meta.url).href,m=""+new URL("white-bubble_1-d7f330dc.svg",import.meta.url).href,b=""+new URL("white-bubble_2-22fffed4.svg",import.meta.url).href,c=""+new URL("white-bubble_2-22fffed4.svg",import.meta.url).href,r=t=>{const e=a(),n=i(d)`
    position: relative;
    max-width: 780px;
    z-index: 1;
    &:after {
      content: '';
      background-image: url(${s});
      width: 100%;
      height: 100%;
      z-index: ${e.zIndex.behind};
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: 59%;
      transform: translate(-50%, -50%);
      left: 50%;
      max-width: 850px;
      background-position: center 10%;
    }
    @media only screen and (min-width: ${e.breakpoints[0]}) {
      &:after {
        background-image: url(${m});
      }
    }
    @media only screen and (min-width: ${e.breakpoints[1]}) {
      &:after {
        background-image: url(${b});
      }
    }

    @media only screen and (min-width: ${e.breakpoints[2]}) {
      &:after {
        background-image: url(${c});
      }
    }
  `;return o(n,{...t,children:t.children})};try{r.displayName="MoreContainer",r.__docgenInfo={description:"",displayName:"MoreContainer",props:{}}}catch{}export{r as M};
//# sourceMappingURL=MoreContainer-1b7417b0.js.map
