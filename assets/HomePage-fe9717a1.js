import{u as t,b as R,c as S,s as pe,r as n,j as e,M as k,S as q,d as O,w as de,e as ce,B as F,R as H,f as K,g as Z,h as P,i as xe,k as he,l as ge,m as me}from"./index-bb6e3f84.js";import{s as L}from"./iconSprite-e65040ef.js";const ue=t.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 24px 12px;

  @media (min-width: 768px) {
    min-width: 704px;
    padding: 32px 24px;
    overflowy: 'auto';
  }

  @media (min-width: 1440px) {
    min-width: 592px;
  }
`,fe=t.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  button {
    padding: 6px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
`,be=t.h2`
  color: var(--primary-txt-color);
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 24px;
`,_=t.span`
  color: var(--primary-color);
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`,we=t.span`
  color: var(--primary-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,V=t.p`
  color: var(--primary-txt-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,ye=t.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`,ve=t.div`
  display: flex;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid var(--light-grey-color);
  margin-bottom: 24px;
`,Ce=t.p`
  color: #8f8f8f;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,je=t.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: relative;
  margin-bottom: 24px;
`,ke=t.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
`,Me=t.h3`
  color: var(--primary-txt-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,$=t.label`
  color: var(--primary-txt-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,Y=t.input`
  margin-right: 8px;
`,I=t.input`
  border-radius: 6px;
  border: 1px solid var(--light-grey-color);
  padding: 12px 10px;
  display: flex;
  width: 100%;
  margin-top: 8px;
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: var(--primary-color);
  }
`,De=t.strong`
  color: var(--primary-color);
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
`,Se=t.div`
  display: flex;
  align-items: baseline;
`,ze=t.p`
  display: flex;
  color: var(--primary-txt-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
  max-width: 190px;

  @media (min-width: 768px) {
    max-width: 100%;

    margin-right: 6px;
  }
`,We=t.label`
  color: var(--primary-txt-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,Ee=t.button`
  margin-left: auto;
  width: 100%;
  padding: 8px 30px;
  color: var(--white-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  // margin-top: 8px;
  border: none;
  border-radius: 10px;
  background: var(--primary-color);

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`,Te=({isOpen:o,onRequestClose:r})=>{const p={overlay:{backgroundColor:"rgba(0, 0, 0, 0.80)",display:"flex",justifyContent:"center",alignItems:"center"},content:{padding:"0",position:"initial",borderRadius:"10px",background:"var(--white-color)",boxShadow:"0px 4px 4px 0px rgba(64, 123, 255, 0.30)",maxHeight:"95vh",overflowY:"auto"}},i=R(),{gender:a,dailyNorma:x}=S(pe),[l,h]=n.useState(a),[u,j]=n.useState(""),[y,g]=n.useState(""),[v,f]=n.useState((x/1e3).toFixed(1)),[m,z]=n.useState(""),c=n.useCallback(()=>{if(!u||!y)return;const w=l==="woman"?.03:.04,W=l==="woman"?.4:.6,M=(u*w+y/60*W).toFixed(2);f(M)},[l,u,y]);n.useEffect(()=>{c()},[c]);const d=w=>{const W=w.target.value,M=parseFloat(W);!isNaN(M)&&M>=1?z(M):W===""&&z("")},T=w=>{w.preventDefault();const W=Number(w.target.water.value)*1e3,M=O().date;i(de({date:M,waterRate:W})),r()};return e.jsx(k,{isOpen:o,onRequestClose:r,style:p,children:e.jsxs(ue,{children:[e.jsxs(fe,{children:[e.jsx(be,{children:"My daily norma"}),e.jsx("button",{onClick:r,children:e.jsx(q,{width:"24",height:"24"})})]}),e.jsxs(ye,{children:[e.jsxs(V,{children:["For woman:",e.jsx(_,{children:" V=(M*0,03) + (T*0,4)"})]}),e.jsxs(V,{children:["For man:",e.jsx(_,{children:" V=(M*0,04) + (T*0,6)"})]})]}),e.jsx(ve,{children:e.jsxs(Ce,{children:[e.jsx(we,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"," "]})}),e.jsxs(je,{onSubmit:T,children:[e.jsx(Me,{children:"Calculate your rate:"}),e.jsxs(ke,{children:[e.jsxs($,{children:[e.jsx(Y,{type:"radio",name:"gender",value:"woman",checked:l==="woman",onChange:()=>h("woman")}),"For woman"]}),e.jsxs($,{children:[e.jsx(Y,{type:"radio",name:"gender",value:"man",checked:l==="man",onChange:()=>h("man")}),"For man"]})]}),e.jsxs($,{children:["Your weight in kilograms:",e.jsx(I,{type:"number",name:"weight",min:"0",max:"250",placeholder:"0",value:u,onChange:w=>j(w.target.value)})]}),e.jsxs($,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",e.jsx(I,{type:"number",name:"time",min:"0",placeholder:"0",value:y,onChange:w=>g(w.target.value)})]}),e.jsxs(Se,{children:[e.jsxs(ze,{children:["The required amount of water in liters per day:"," "]}),e.jsxs(De,{children:[" ",parseFloat(v).toFixed(1)," L"]})]}),e.jsxs(We,{children:["Write down how much water you will drink:",e.jsx(I,{required:!0,type:"number",name:"water",placeholder:0,value:m,onChange:d})]}),e.jsx(Ee,{type:"submit",children:"Save"})]})]})})},Re=t.div` 
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid var(--second-background-color);
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  padding: 8px 20px;
  
  position:static;

@media (min-width: 768px){
position:absolute;    
  }
`,Le=t.p`
margin-bottom: 12px;
font-size: 18px;
line-height: 1.3;
font-weight: 500;
color: var(--primary-txt-color);
`,$e=t.p`
font-size: 24px;
line-height: 1;
font-weight: 700;
color: var(--primary-color);
`,Fe=t.button`
padding: 0;
font-size: 16px;
line-height: 1.3;
font-weight: 400;
color: #8BAEFF;
border: none;
background-color:var(--white-color);
outline: none;
span {
    color: transparent;
    overflow: hidden;

    background: linear-gradient(
      90deg,
      var(--orange-color) 0%,
      var(--orange-color) 50%,
      var(--light-blue-color) 50%,
      var(--light-blue-color) 100%
    );

    background-size: 200% 100%;
    background-position: 100%;

    -webkit-background-clip: text;
    background-clip: text;
  }

  &:hover {
    & span {
      background-position: 0 100%;
    }
  }
`,Be=t.div`
display: flex;
gap: 12px;
align-items: baseline;
`;t.div`
margin-bottom: 12px;
font-size: 18px;
line-height: 1.3;
color: var(--primary-txt-color);
`;k.setAppElement("#root");const Ie=()=>{const o=S(x=>x.auth.user.dailyNorma),[r,p]=n.useState(!1),i=o?(o/1e3).toFixed(1):"0",a=()=>{p(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(Re,{children:[e.jsx(Le,{children:"My daily norma"}),e.jsxs(Be,{children:[e.jsxs($e,{children:[i||2," L"]}),e.jsx(Fe,{type:"button",onClick:a,children:e.jsx("span",{children:"Edit"})})]})]}),e.jsx(Te,{isOpen:r,onRequestClose:()=>p(!1)})]})},Ne=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 24px;
    align-items: center;
  }
  @media (min-width: 1440px) {
    gap: 28px;
    margin-bottom: 0px;
  }
`,Ae=t.div`
  width: 280px;
  @media (min-width: 768px) {
    width: 356px;
  }
  @media (min-width: 768px) {
    width: 391px;
  }
`,Oe=t.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 8px;
  color: var(--primary-color);
  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`,Pe=t.input`
  -webkit-appearance: none;
  appearance: none;
  /* width: 258px; */
  width: 100%;
  cursor: default;
  outline: none;
  border-radius: 15px;
  margin-bottom: 16px;
  margin-left: 9px;
  margin-right: 13px;
  display: block;
  height: 8px;
  background: var(--light-grey-colo);
  @media (min-width: 320px) {
    width: 258px;
  }
  @media (min-width: 768px) {
    width: 334px;
  }
  @media (min-width: 1440px) {
    width: 360px;
  }

  /* Thumb: webkit */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 14px;
    width: 14px;
    background-color: var(--white-color);
    border-radius: 50%;
    border: 1px solid var(--light-blue-color);
  }

  /* Thumb: Firefox */
  &::-moz-range-thumb {
    height: 14px;
    width: 14px;
    background-color: var(--white-color);
    border-radius: 50%;
    border: 1px solid var(--light-blue-color);
  }
`,N=t.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--light-blue-color);
  left: 4px;
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    width: 1px;
    height: 8px;
    background-color: var(--light-grey-color);
  }
`,qe=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--primary-color);
`,He=t.div`
  display: flex;
  justify-content: space-between;
  flex-basis: auto;
`,Ze=t.button`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: var(--primary-color);
  color: var(--white-color);
  box-shadow: 0px 4px 8px 0px #407bff57;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px #407bff;
  }
  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98) 0s;
  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    padding: 8px 90px;
    width: 336px;
    height: 44px;
  }

  @media (min-width: 1440px) {
    width: 182px;
    padding: 10px 29px 10px 29px;
  }
`,_e=t.svg`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: var(--white-color);
  stroke-width: 2;
`,Q=o=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...o},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12Z",fill:"#407BFF"})),X=o=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...o},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.1989 5.25 12.3897 5.32902 12.5303 5.46967C12.671 5.61032 12.75 5.80109 12.75 6V11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H11.25V6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25Z",fill:"#407BFF"})),Ve=t.div`
  background-color: var(--white-color);
  width: 280px;
  height: 540px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 24px 12px;

  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    gap: 24px;
    padding: 32px 24px;
    width: 704px;
    height: 504px;
  }

  @media (min-width: 1440px) {
    width: 504px;
  }
`,Ye=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  @media (min-width: 768px) {
    justify-content: space-between;
    gap: 248px;
  }

  @media (min-width: 1440px) {
    justify-content: space-between;
    gap: 136px;
  }

  p {
    color: var(--primary-txt-color);

    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 123.077% */
  }
  button {
    width: 24px;
    height: 24px;

    cursor: pointer;
    top: 13px;
    right: 10px;
    background-color: transparent;
    border: 0;
  }
`,Ge=t.div`
  width: 254px;

  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 12px;

  border-radius: 10px;
  background: var(--Secondary-color-2, #ecf2ff);

  .ml {
    width: 60px;

    color: var(--primary-color);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
  .time {
    width: 82px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 200% */
  }
`,Ue=t.div`
  max-width: 194px;

  p {
    color: var(--primary-txt-color);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    line-height: 20px;
  }
  button {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 30px;
    border: 1px solid #9ebbff;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }
  button:focus,
  button:hover {
    outline: 1px solid var(--primary-color);
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  button:disabled:focus,
  button:disabled:hover {
    outline: none;
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    line-height: 111.111%;
    padding-bottom: 16px;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    padding-bottom: 12px;
  }
  .waterControllers {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
  .ml {
    min-width: 92px;
    height: 36px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--primary-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */

    border-radius: 40px;
    background: #d7e3ff;
  }
`,Je=t.label`
  display: flex;
  flex-direction: column;
  gap: ${o=>o.isLarge?"16px":"12px"};

  font-size: ${o=>o.isLarge?"18px":"16px"};
  font-weight: ${o=>o.isLarge?"500":"400"};
  width: ${o=>o.isLarge?"256":"182"};
  color: var(--primary-txt-color);
  font-family: Roboto;
  font-style: normal;
  line-height: 20px;

  @media (min-width: 768px) {
    width: ${o=>o.isLarge?"348":"182"};
  }
`,Ke=t.input`
  padding: 12px 10px;

  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  border-radius: 6px;
  border: 1px solid var(--light-grey-color);

  &:focus {
    outline: 1px solid var(--primary-color);
  }
`,Qe=t.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  p {
    width: 72px;
    color: var(--primary-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }

  button {
    width: 256px;

    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    

    color: var(--white-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    outline: none;
    border: 0;

    border-radius: 10px;
    background: var(--primary-color);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }
  button:focus {
    outline: 1px solid var(--primary-color);
  }
  button:hover {
    cursor: pointer;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;

    margin-left: auto;
  }
`,E={Container:Ve,TitleContainer:Ye,EnteredData:Ue,Label:Je,Input:Ke,SaveButtonWrapper:Qe,WaterPortionWrapper:Ge},Xe={overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)"},content:{padding:"0",position:"initial",width:"100%"}},ee=({isOpen:o,onRequestClose:r})=>{k.setAppElement("#root");const p=R(),[i,a]=n.useState(50),[x,l]=n.useState(O().time),h=g=>{const{name:v,value:f}=g.currentTarget;switch(v){case"time":l(f);break;case"ml":!isNaN(f)&&f>0&&f<1e4&&a(f);break;default:console.log("ERROR")}},u=()=>{i>=100&&a(Number(i)-50),i<100&&a(50)},j=()=>{a(Number(i)+50)},y=async g=>{g.preventDefault(),r();let v={date:O().date,time:g.target.time.value,value:Number(g.target.ml.value)};try{await p(ce(v)).unwrap(),F.success("Added your new entry!")}catch(f){F.error(f)}};return e.jsx(k,{isOpen:o,onRequestClose:r,style:Xe,contentLabel:"Add Water Modal",children:e.jsx("form",{onSubmit:y,children:e.jsxs(E.Container,{children:[e.jsxs(E.TitleContainer,{children:[e.jsx("p",{children:"Add Water"}),e.jsx("button",{onClick:r,children:e.jsx(q,{width:"24",height:"24"})})]}),e.jsxs(E.EnteredData,{children:[e.jsx("p",{className:"title",children:"Choose a value:"}),e.jsx("p",{className:"subtitle",children:"Amount of water:"}),e.jsxs("div",{className:"waterControllers",children:[e.jsx("button",{type:"button",onClick:u,disabled:i<=50,children:e.jsx(Q,{width:"24",height:"24"})}),e.jsxs("div",{className:"ml",children:[i," ml"]}),e.jsx("button",{type:"button",onClick:j,disabled:i>=9950,children:e.jsx(X,{width:"24",height:"24"})})]})]}),e.jsxs(E.Label,{children:["Recording time:",e.jsx(E.Input,{type:"time",name:"time",value:x,onChange:h})]}),e.jsxs(E.Label,{children:["Enter the value of the water used:",e.jsx(E.Input,{type:"number",name:"ml",value:i,min:"1",minLength:"1",maxLength:"4",onChange:h})]}),e.jsxs(E.SaveButtonWrapper,{children:[e.jsxs("p",{style:{minWidth:"50px"},children:[i,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})})})},te=o=>o.calendarWater.dayWater.takingWater,et=o=>o.calendarWater.monthWater,tt=o=>o.calendarWater.percent,oe=H.memo(()=>{const o=S(tt),[r,p]=n.useState(!1),i=o/100*100,a={background:`linear-gradient(to right, #9EBBFF ${i}%, #D7E3FF ${i}%)`};n.useEffect(()=>{},[o]);const x=()=>{p(!0),console.log(open)},l=()=>{p(!1)};return e.jsxs(Ne,{children:[e.jsxs(Ae,{children:[e.jsx(Oe,{children:"Today"}),e.jsx(Pe,{type:"range",min:"0",max:"100",value:o,style:a,readOnly:!0}),e.jsxs(He,{children:[e.jsx(N,{children:"0%"}),e.jsx(N,{children:e.jsxs(qe,{children:[Math.ceil(o),"%"]})}),e.jsx(N,{children:"100%"})]})]}),e.jsxs(Ze,{onClick:x,children:[e.jsx(_e,{children:e.jsx("use",{href:L+"#icon-plus-button"})}),"Add Water"]}),e.jsx(ee,{onRequestClose:l,isOpen:r})]})});oe.displayName="WaterRatioPanel";const ot=t.div`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  color: var(--primary-txt-color);
  line-height: 1.25;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`,nt=t.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  gap: auto;
  margin-bottom: 16px;
`,it=t.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  list-style: none;
  gap: 12px;
`,rt=t.span`
  font-size: 16px;
  font-style: normal;
  font-weight: var(--regular);
  font-family: Roboto;
  line-height: 1.25;
  color: var(--primary-color);
  min-width: 120px;
  display: block;
  text-align: center;
`,at=t.div`
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;
  position: relative;

  @media screen and (min-width: 768px) {
    row-gap: 20px;
    column-gap: 34px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 20px;
    column-gap: 22px;
  }
`,G=t.button`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
`,lt=t.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`,st=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  min-width: 32px;
  height: 32px;
  border: 1px solid orange;
  border-radius: 20px;
  background-color: var(--white-color);
  border: 1px solid var(--orange-color);
  margin-bottom: 4px;

  &:hover,
  &:focus {
    background-color: var(--light-blue-color);
    outline: inherit;
  }
  ${o=>o.$percent>=100?"border: none;":""}
`,pt=t.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--light-blue-color);
  margin-top: 4px;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 10px;
    line-height: 1.6;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    gap: 34px;
  }
`,dt=o=>n.createElement("svg",{width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.497 7.31a.438.438 0 0 0 0-.62L5.122 2.317a.437.437 0 1 0-.619.618L8.57 7l-4.066 4.066a.438.438 0 1 0 .619.618L9.497 7.31Z",fill:"#407BFF"})),ct=o=>n.createElement("svg",{width:6,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M.503 5.31a.437.437 0 0 1 0-.62L4.878.317a.437.437 0 1 1 .619.618L1.43 5l4.066 4.066a.437.437 0 1 1-.619.618L.503 5.31Z",fill:"#407BFF"}));t.div`
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);
`;const xt=t.div`
  display: inline-flex;
  padding: 24px 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 auto;

  @media (min-width: 767px) {
    padding: 24px 16px;
  }
`,A=t.p`
gap: 6px;
white-space: nowrap;

`,ht=t.span`
  width: 90px;
  color: var(--primary-txt-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: var(--regular);
  font-weight: 400;
  line-height: 1.25;
`,gt=t.span`
  width: 50px;
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.33;
`,mt=t.p`
  width: 204px;
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: var(--regular);
  line-height: 1.25;
`,ut=t.span`
  width: 204px;
  color: var(--primary-txt-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: var(--regular);
  font-weight: 400;
  line-height: 1.25;`,ft=t.span`
width:44px;
color: var(--primary-color);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: var(--medium);
line-height: 1.33;
`,bt=t.span`
  width: 208px;
  color: var(--primary-txt-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: var(--regular);
  font-weight: 400;
  line-height: 1.25;`,wt=t.span`
width:50px;
color: var(--primary-color);
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: var(--medium);
line-height: 1.33;
`,yt=({isOpen:o,onRequestClose:r,currentDate:p,selectedDay:i,obj:a})=>{const x={overlay:{backgroundColor:"transparent",display:"flex",justifyContent:"center",alignItems:"center"},content:{padding:"0",position:"initial",maxWidth:"260px",borderRadius:"10px",background:"var(--white-color)",boxShadow:"0px 4px 4px 0px rgba(64, 123, 255, 0.30)"}};return e.jsx(k,{isOpen:o,onRequestClose:r,contentLabel:"Day Details",style:x,children:e.jsxs(xt,{children:[e.jsx(mt,{children:i?`${i}, ${p.toLocaleString("en",{month:"long"})}`:""})," ",e.jsxs(A,{children:[e.jsx(ht,{children:"Daily norma: "}),e.jsxs(gt,{children:[a.dayWaterRate," L"]})]})," ",e.jsxs(A,{children:[e.jsx(ut,{children:"Fulfillment of the daily norm:"})," ",e.jsxs(ft,{children:[a.percent,"%"]})]}),e.jsxs(A,{children:[e.jsx(bt,{children:"Water consumed:"})," ",e.jsx(wt,{children:a.count})]})]})})};K("SET_SELECTED_DATE");K("SET_WATER_CONSUMED");const ne=o=>o.water;k.setAppElement("#root");const ie=H.memo(({dailyNorma:o,fulfillmentPercentage:r,waterConsumed:p})=>{const[i,a]=n.useState(new Date),[x,l]=n.useState(null),[h,u]=n.useState(!1),[j,y]=n.useState({}),g=R(),v=S(et),f=S(ne),m=s=>{const b=s.getFullYear(),C=s.getMonth();return new Date(b,C+1,0).getDate()},z=()=>{const s=new Date(i);s.setMonth(s.getMonth()-1),s.setDate(1);const b=s.toISOString();g(Z.selectDayAction(b));const[C,B]=b.split("-");g(P({year:C,month:B})),a(s)},c=()=>{const s=new Date(i);s.setMonth(s.getMonth()+1),s.setDate(1);const b=String(s.getFullYear()),C=String(s.getMonth()+1).padStart(2,"0"),B=String(s.getDate()).padStart(2,"0"),se=`${b}-${C}-${B}`;g(Z.selectDayAction(se)),g(P({year:b,month:C})),a(s)};n.useEffect(()=>{const s=setInterval(()=>a(new Date),6e4);return()=>clearInterval(s)},[]);const d=(s,b)=>{try{l(s),u(!0),y(b)}catch(C){console.log(C)}},T=m(i),w=i.toLocaleString("en",{month:"long"}),W=i.getFullYear(),M=new Date().getMonth()+1,ae=f.selectedDate.split("-")[1],le=String(M).padStart(2,"0");return e.jsxs("div",{children:[e.jsxs(nt,{children:[e.jsx(ot,{children:"Month"}),e.jsxs(it,{children:[e.jsx(G,{onClick:z,children:e.jsx(ct,{})}),e.jsx(rt,{children:`${w}, ${W}`}),e.jsx(G,{disabled:le===ae,onClick:c,children:e.jsx(dt,{})})]})]}),e.jsx(at,{children:Array.from({length:T},(s,b)=>b+1).map(s=>{const b=v[s],C=b?b.percent:0;return e.jsxs(lt,{onClick:()=>d(s,b),children:[e.jsx(st,{$percent:C,children:s}),e.jsxs(pt,{children:[C,"%"]})]},s)})}),e.jsx(yt,{obj:j,isOpen:h,onRequestClose:()=>u(!1),currentDate:i,selectedDay:x,dailyNorma:o,fulfillmentPercentage:r,waterConsumed:p})]})});ie.displayName="Calendar";const vt=t.div`
// margin-bottom: 24px;

  @media screen and (min-width: 320px) {
       width: 264px;
        }

        @media screen and (min-width: 768px) {
        width: 656px;
        }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`,Ct=t.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
        font-size: 26px
        }

    @media screen and (min-width: 1440px) {
       
    }
`,jt=t.button`
  display: flex;
  padding-top: 12px;
  border: 0;
  background-color: inherit;
  font-size: 18px;
  line-height: 1.25;
  color: var(--primary-color);
  font-weight: 500;
  transition: color 0ms linear;
  align-items: center;
  &:hover {
    color: var(--orange-color);
  }

  & span {
    color: transparent;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      var(--orange-color) 0%,
      var(--orange-color) 50%,
      var(--primary-color) 50%,
      var(--primary-color) 100%
    );
    background-size: 200% 100%;
    background-position: 100%;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &:hover {
    & span {
      background-position: 0 100%;
    }
  }

  @media screen and (min-width: 320px) {
    width: 111px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 129px;
    font-size: 18px;
  }
`,kt=t.svg`
width: 16px;
height: 16px;
margin-right: 8px;
stroke: currentColor;
fill: currentColor;
&:hover {
  color: var(--orange-color);
}

@media screen and (min-width: 768px) {
       width: 24px;
height: 24px;
        }

    @media screen and (min-width: 1440px) {
        width: 24px;
height: 24px;
    }
`,Mt=t.ul`
display: flex;
flex-direction: column;
   list-style: none;
   margin: 0;
padding: 0;
height: 212px;
overflow-y: scroll;
overflow-x: hidden;

&::-webkit-scrollbar {
  width: 4px; 
 
}

&::-webkit-scrollbar-track {
  background-color: var(--second-background-color);
 border: 1px solid transparent;
    background-clip: content-box;
}

&::-webkit-scrollbar-thumb {
  height: 100px;
  background-color: var(--light-blue-color);
  border-radius: 8px; 
}
`,Dt=t.li`
   display: flex;
   height: 50px;
   width: 100%;
   padding: 12px 0;
   align-items: center;
   border-bottom: 1px solid var(--second-background-color);
 

   @media screen and (min-width: 320px) {
       width: 254px;
        }

        @media screen and (min-width: 768px) {
        width: 646px;
        }

    @media screen and (min-width: 1440px) {
        width: 534px;
    }
`,St=t.svg`
   width: 26px;
   height: 26px;
   fill: var(--primary-color);

  @media screen and (min-width: 768px) {
       width: 36px;
   height: 36px;
        }
`,zt=t.p`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 400;
  color: var(--primary-color);
  margin-left: 12px;
`,Wt=t.p`
font-size: 12px;
  line-height: 2;
  font-weight: 400;
  color: var(--primary-txt-color);
  margin-left: 12px;

   @media screen and (min-width: 768px) {
       margin-left: 16px;
        }
`,Et=t.svg`
width: 16px;
height: 16px;
fill: currentColor;
`,Tt=t.svg`
width: 16px;
height: 16px;
fill: currentColor;
`,Rt=t.div`
display: flex;
width: 50px;
margin-left: auto;
gap: 18px;
`,Lt=t.button`
   border: 0;
   background-color: inherit;
   margin: 0;
   padding: 0;
   position: relative;
   color: var(--light-blue-color);
   width: 16px;
  height: 16px;

   &::before {
  content: "";
    position: absolute;
  width: 16px;
  height: 1px;
  background-color: var(--light-blue-color);
  bottom: -3px;
  opacity: 0;
  transition: opacity 200ms ease-in;
}

&:hover {
  &::before {
    opacity: 1;
  }
}
`,$t=t.button`
   border: 0;
   background-color: inherit;
   margin: 0;
   padding: 0;
   position: relative;
   color: var(--red-color);
   width: 16px;
  height: 16px;

   &::before {
  content: "";
    position: absolute;
  width: 16px;
  height: 1px;
  background-color: var(--red-color);
  bottom: -3px;
  opacity: 0;
  transition: opacity 200ms ease-in;
}

&:hover {
  &::before {
    opacity: 1;
  }
}
`,Ft=`${L}#icon-pencil`,Bt=`${L}#icon-trash`,It=`${L}#icon-cup`,Nt=({id:o,water:r,time:p,onEditButtonClick:i,handleDeletebutton:a})=>e.jsxs(Dt,{children:[e.jsx(St,{children:e.jsx("use",{href:It})}),e.jsx(zt,{children:`${r} ml`}),e.jsx(Wt,{children:p}),e.jsxs(Rt,{children:[e.jsx(Lt,{onClick:()=>i(o),children:e.jsx(Et,{children:e.jsx("use",{href:Ft})})}),e.jsx($t,{onClick:()=>a(o),children:e.jsx(Tt,{children:e.jsx("use",{href:Bt})})})]})]}),At=t.div`
  background-color: var(--white-color);
  width: 280px;
  height: 648px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 24px 12px;

  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    gap: 24px;
    padding: 32px 24px;
    width: 704px;
    height: 580px;
  }

  @media (min-width: 1440px) {
    width: 592px;
  }
`,Ot=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  @media (min-width: 768px) {
    justify-content: space-between;
    gap: 248px;
  }

  @media (min-width: 1440px) {
    justify-content: space-between;
    gap: 136px;
  }

  p {
    color: var(--primary-txt-color);

    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 123.077% */
  }
  button {
    width: 24px;
    height: 24px;

    cursor: pointer;
    top: 13px;
    right: 10px;
    background-color: transparent;
    border: 0;
  }
`,Pt=t.div`
  width: 254px;

  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 12px;

  border-radius: 10px;
  background: var(--Secondary-color-2, #ecf2ff);

  .ml {
    width: 60px;

    color: var(--primary-color);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
  .time {
    width: 82px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 200% */
  }
`,qt=t.div`
  max-width: 194px;

  p {
    color: var(--primary-txt-color);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    line-height: 20px;
  }
  button {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 30px;
    border: 1px solid #9ebbff;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }
  button:focus,
  button:hover {
    outline: 1px solid var(--primary-color);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  button:disabled:focus,
  button:disabled:hover {
    outline: none;
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    line-height: 111.111%;
    padding-bottom: 16px;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    padding-bottom: 12px;
  }
  .waterControllers {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
  .ml {
    min-width: 92px;
    height: 36px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--primary-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */

    border-radius: 40px;
    background: #d7e3ff;
  }
`,Ht=t.label`
  display: flex;
  flex-direction: column;
  gap: ${o=>o.size==="large"?"16px":"12px"};

  font-size: ${o=>o.size==="large"?"18px":"16px"};
  font-weight: ${o=>o.size==="large"?"500":"400"};
  width: ${o=>o.size==="large"?"256":"182"};
  color: var(--primary-txt-color);
  font-family: Roboto;
  font-style: normal;
  line-height: 20px;

  @media (min-width: 768px) {
    width: ${o=>o.size==="large"?"348":"182"};
  }
`,Zt=t.input`
  padding: 12px 10px;

  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  border-radius: 6px;
  border: 1px solid var(--light-grey-color);
  background: var(--white-color);

  &:focus {
    outline: 1px solid var(--primary-color);
  }
`,_t=t.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  p {
    width: 72px;
    color: var(--primary-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }

  button {
    width: 256px;

    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--white-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    outline: none;
    border: 0;

    border-radius: 10px;
    background: var(--primary-color);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }
  button:focus {
    outline: 1px solid var(--primary-color);
  }
  button:hover {
    cursor: pointer;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;

    margin-left: auto;
  }
`,D={Container:At,TitleContainer:Ot,EnteredData:qt,Label:Ht,Input:Zt,SaveButtonWrapper:_t,WaterPortionWrapper:Pt},Vt=o=>n.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},n.createElement("path",{d:"M6.26099 3.13043L8.39972 32.7888V32.8696H26.8122L28.9509 3.22275V3.13043H6.26099ZM26.0557 32.0387H9.16193L7.55788 9.82376H8.43954L9.89002 29.4017C9.89851 29.5048 9.94461 29.601 10.0193 29.6714C10.094 29.7418 10.1919 29.7815 10.2939 29.7826H10.328C10.3811 29.7789 10.4329 29.7646 10.4806 29.7406C10.5282 29.7165 10.5707 29.6832 10.6056 29.6424C10.6404 29.6017 10.667 29.5544 10.6838 29.5031C10.7006 29.4519 10.7073 29.3979 10.7034 29.344L9.25294 9.82376H27.6597L26.0557 32.0387ZM27.7166 8.99286H9.19037L8.87184 4.66528C8.86183 4.5597 8.81293 4.46184 8.7349 4.39125C8.65687 4.32065 8.55546 4.28251 8.45092 4.28445C8.34378 4.29473 8.24477 4.34679 8.17474 4.42968C8.1047 4.51256 8.06913 4.61978 8.0755 4.72875L8.39404 8.99863H7.501L7.13696 3.95556H28.0807L27.7166 8.99286Z",fill:"#407BFF"}),n.createElement("path",{d:"M12.7797 13.9321C13.0452 13.9321 13.3047 13.8522 13.5255 13.7026C13.7462 13.553 13.9183 13.3403 14.0199 13.0914C14.1215 12.8426 14.1481 12.5688 14.0963 12.3047C14.0445 12.0405 13.9166 11.7979 13.7289 11.6074C13.5411 11.417 13.3019 11.2873 13.0415 11.2348C12.7811 11.1822 12.5112 11.2092 12.2659 11.3122C12.0206 11.4153 11.811 11.5898 11.6635 11.8138C11.516 12.0377 11.4373 12.301 11.4373 12.5703C11.4373 12.9315 11.5787 13.2779 11.8304 13.5332C12.0822 13.7886 12.4236 13.9321 12.7797 13.9321ZM12.7797 12.0337C12.8843 12.0337 12.9866 12.0652 13.0735 12.1241C13.1605 12.1831 13.2283 12.2669 13.2684 12.365C13.3084 12.463 13.3189 12.5709 13.2985 12.675C13.2781 12.7791 13.2277 12.8747 13.1537 12.9498C13.0797 13.0248 12.9855 13.0759 12.8829 13.0966C12.7802 13.1173 12.6739 13.1067 12.5772 13.0661C12.4806 13.0255 12.3979 12.9567 12.3398 12.8685C12.2817 12.7802 12.2507 12.6765 12.2507 12.5703C12.2507 12.428 12.3064 12.2915 12.4056 12.1909C12.5048 12.0902 12.6394 12.0337 12.7797 12.0337Z",fill:"#407BFF"}),n.createElement("path",{d:"M12.7738 18.3577C12.7772 18.6265 12.8589 18.8883 13.0087 19.1101C13.1585 19.3319 13.3696 19.5037 13.6155 19.6039C13.8614 19.7042 14.1311 19.7284 14.3905 19.6734C14.6499 19.6185 14.8875 19.4868 15.0733 19.2952C15.2591 19.1035 15.3848 18.8603 15.4346 18.5962C15.4844 18.3322 15.456 18.0591 15.353 17.8114C15.2501 17.5637 15.0772 17.3524 14.856 17.2042C14.6349 17.056 14.3755 16.9776 14.1105 16.9787C13.9332 16.9794 13.7579 17.0158 13.5946 17.0856C13.4312 17.1555 13.2832 17.2575 13.1589 17.3857C13.0346 17.5139 12.9366 17.6658 12.8705 17.8326C12.8044 17.9995 12.7715 18.1779 12.7738 18.3577ZM14.6395 18.3577C14.6395 18.4639 14.6085 18.5676 14.5503 18.6559C14.4922 18.7441 14.4096 18.8129 14.3129 18.8535C14.2163 18.8941 14.1099 18.9047 14.0073 18.884C13.9047 18.8633 13.8104 18.8122 13.7364 18.7372C13.6625 18.6621 13.6121 18.5665 13.5917 18.4624C13.5713 18.3583 13.5817 18.2504 13.6218 18.1524C13.6618 18.0543 13.7296 17.9705 13.8166 17.9116C13.9036 17.8526 14.0059 17.8211 14.1105 17.8211C14.2508 17.8211 14.3854 17.8777 14.4846 17.9783C14.5838 18.0789 14.6395 18.2154 14.6395 18.3577Z",fill:"#407BFF"}),n.createElement("path",{d:"M22.3129 18.3924C22.5784 18.3924 22.8379 18.3125 23.0587 18.1629C23.2794 18.0132 23.4515 17.8006 23.5531 17.5517C23.6547 17.3029 23.6813 17.0291 23.6295 16.765C23.5777 16.5008 23.4498 16.2582 23.2621 16.0677C23.0743 15.8773 22.8351 15.7476 22.5747 15.6951C22.3143 15.6425 22.0444 15.6695 21.7991 15.7725C21.5539 15.8756 21.3442 16.0501 21.1967 16.2741C21.0492 16.498 20.9705 16.7613 20.9705 17.0306C20.9705 17.3918 21.1119 17.7382 21.3636 17.9935C21.6154 18.2489 21.9568 18.3924 22.3129 18.3924ZM22.3129 16.4998C22.4177 16.4998 22.5202 16.5314 22.6073 16.5906C22.6944 16.6499 22.7622 16.734 22.8021 16.8324C22.842 16.9308 22.8521 17.039 22.8312 17.1432C22.8104 17.2475 22.7594 17.3431 22.6849 17.4179C22.6103 17.4927 22.5155 17.5434 22.4125 17.5634C22.3095 17.5835 22.203 17.572 22.1064 17.5305C22.0099 17.489 21.9277 17.4193 21.8702 17.3303C21.8128 17.2413 21.7827 17.137 21.7839 17.0306C21.7854 16.8893 21.8418 16.7543 21.9408 16.6549C22.0398 16.5555 22.1735 16.4998 22.3129 16.4998Z",fill:"#407BFF"}),n.createElement("path",{d:"M17.6373 15.8247C17.9028 15.8247 18.1624 15.7448 18.3831 15.5952C18.6039 15.4455 18.7759 15.2329 18.8775 14.984C18.9791 14.7352 19.0057 14.4614 18.9539 14.1972C18.9021 13.9331 18.7743 13.6905 18.5865 13.5C18.3988 13.3096 18.1596 13.1799 17.8992 13.1273C17.6388 13.0748 17.3689 13.1018 17.1236 13.2048C16.8783 13.3079 16.6687 13.4824 16.5212 13.7064C16.3737 13.9303 16.2949 14.1936 16.2949 14.4629C16.2949 14.8241 16.4364 15.1704 16.6881 15.4258C16.9399 15.6812 17.2813 15.8247 17.6373 15.8247ZM17.6373 13.9263C17.7419 13.9263 17.8442 13.9578 17.9312 14.0167C18.0182 14.0757 18.086 14.1595 18.126 14.2576C18.1661 14.3556 18.1766 14.4635 18.1562 14.5676C18.1357 14.6717 18.0854 14.7673 18.0114 14.8424C17.9374 14.9174 17.8431 14.9685 17.7405 14.9892C17.6379 15.0099 17.5315 14.9993 17.4349 14.9587C17.3382 14.9181 17.2556 14.8493 17.1975 14.761C17.1394 14.6728 17.1083 14.569 17.1083 14.4629C17.1045 14.3901 17.1153 14.3172 17.1401 14.2487C17.165 14.1802 17.2033 14.1176 17.2528 14.0647C17.3024 14.0117 17.362 13.9696 17.4281 13.9409C17.4942 13.9121 17.5654 13.8973 17.6373 13.8974V13.9263Z",fill:"#407BFF"}),n.createElement("path",{d:"M15.0776 23.5451C15.0832 23.7663 15.153 23.9809 15.2782 24.1621C15.4035 24.3433 15.5786 24.483 15.7817 24.5638C15.9848 24.6446 16.2069 24.6628 16.4201 24.6161C16.6334 24.5695 16.8283 24.4602 16.9806 24.3017C17.1329 24.1433 17.2358 23.9428 17.2763 23.7253C17.3169 23.5079 17.2933 23.2832 17.2086 23.0792C17.1239 22.8753 16.9817 22.7013 16.8 22.5789C16.6183 22.4564 16.405 22.3911 16.1868 22.3911C15.8901 22.3986 15.608 22.5235 15.4007 22.7391C15.1935 22.9547 15.0775 23.2439 15.0776 23.5451ZM16.1868 23.245C16.2453 23.245 16.3025 23.2626 16.3512 23.2956C16.3998 23.3286 16.4377 23.3754 16.4601 23.4302C16.4825 23.4851 16.4883 23.5454 16.4769 23.6036C16.4655 23.6618 16.4373 23.7153 16.396 23.7572C16.3546 23.7992 16.3019 23.8278 16.2445 23.8394C16.1872 23.8509 16.1277 23.845 16.0736 23.8223C16.0196 23.7996 15.9734 23.7611 15.9409 23.7118C15.9084 23.6624 15.891 23.6044 15.891 23.5451C15.891 23.4655 15.9222 23.3892 15.9777 23.3329C16.0331 23.2766 16.1084 23.245 16.1868 23.245Z",fill:"#407BFF"}),n.createElement("path",{d:"M20.4414 22.2929C20.6691 22.301 20.894 22.2394 21.0868 22.1163C21.2797 21.9932 21.4317 21.8142 21.523 21.6024C21.6144 21.3907 21.641 21.1559 21.5994 20.9287C21.5577 20.7014 21.4497 20.4921 21.2894 20.3278C21.1292 20.1635 20.9239 20.0519 20.7003 20.0073C20.4767 19.9627 20.2451 19.9872 20.0354 20.0777C19.8258 20.1682 19.6477 20.3205 19.5244 20.5149C19.401 20.7092 19.338 20.9367 19.3436 21.1678C19.3507 21.4619 19.4683 21.7423 19.6723 21.9514C19.8764 22.1606 20.1515 22.2827 20.4414 22.2929ZM20.4414 20.8677C20.5199 20.8677 20.5951 20.8993 20.6506 20.9556C20.706 21.0119 20.7372 21.0882 20.7372 21.1678C20.7372 21.2474 20.706 21.3237 20.6506 21.3799C20.5951 21.4362 20.5199 21.4678 20.4414 21.4678C20.3624 21.4678 20.2866 21.4364 20.2302 21.3803C20.1738 21.3242 20.1414 21.2479 20.1399 21.1678C20.1399 21.1279 20.1478 21.0884 20.163 21.0516C20.1782 21.0148 20.2005 20.9815 20.2286 20.9535C20.2566 20.9256 20.2899 20.9036 20.3265 20.8889C20.363 20.8742 20.4021 20.867 20.4414 20.8677Z",fill:"#407BFF"}),n.createElement("path",{d:"M22.7851 12.98C23.0101 12.98 23.23 12.9123 23.4171 12.7855C23.6042 12.6587 23.75 12.4785 23.8361 12.2676C23.9222 12.0567 23.9448 11.8247 23.9009 11.6008C23.857 11.377 23.7486 11.1714 23.5895 11.01C23.4304 10.8486 23.2277 10.7387 23.007 10.6941C22.7863 10.6496 22.5576 10.6725 22.3497 10.7598C22.1419 10.8472 21.9642 10.9951 21.8392 11.1848C21.7142 11.3746 21.6475 11.5977 21.6475 11.826C21.6475 12.1321 21.7673 12.4256 21.9807 12.642C22.194 12.8584 22.4834 12.98 22.7851 12.98ZM22.7851 11.5548C22.8291 11.542 22.8754 11.5398 22.9205 11.5483C22.9655 11.5568 23.0079 11.5758 23.0445 11.6038C23.081 11.6317 23.1107 11.6679 23.1311 11.7095C23.1515 11.7511 23.1621 11.7969 23.1621 11.8433C23.1621 11.8897 23.1515 11.9355 23.1311 11.9771C23.1107 12.0187 23.081 12.0549 23.0445 12.0828C23.0079 12.1108 22.9655 12.1298 22.9205 12.1383C22.8754 12.1468 22.8291 12.1446 22.7851 12.1318C22.7411 12.1446 22.6947 12.1468 22.6497 12.1383C22.6047 12.1298 22.5623 12.1108 22.5257 12.0828C22.4892 12.0549 22.4595 12.0187 22.4391 11.9771C22.4187 11.9355 22.4081 11.8897 22.4081 11.8433C22.4081 11.7969 22.4187 11.7511 22.4391 11.7095C22.4595 11.6679 22.4892 11.6317 22.5257 11.6038C22.5623 11.5758 22.6047 11.5568 22.6497 11.5483C22.6947 11.5398 22.7411 11.542 22.7851 11.5548Z",fill:"#407BFF"}),n.createElement("path",{d:"M11.6646 30.5904C11.6136 30.6142 11.568 30.6485 11.5306 30.691C11.4931 30.7335 11.4647 30.7834 11.4471 30.8375C11.4295 30.8916 11.4231 30.9488 11.4282 31.0056C11.4333 31.0623 11.4499 31.1174 11.4769 31.1674C11.5119 31.2348 11.5642 31.2913 11.6283 31.3309C11.6924 31.3705 11.7659 31.3918 11.841 31.3924C11.904 31.3942 11.9665 31.3803 12.023 31.352C13.7609 30.4488 15.6845 29.9744 17.6372 29.9672C19.7037 29.9977 21.7414 30.4634 23.6211 31.3347C23.6955 31.3741 23.78 31.3894 23.8632 31.3785C23.9464 31.3675 24.0243 31.331 24.0863 31.2737C24.1484 31.2164 24.1916 31.1412 24.2101 31.0582C24.2286 30.9752 24.2216 30.8884 24.1899 30.8096C24.1499 30.7073 24.0724 30.6246 23.9738 30.5788C21.9837 29.6554 19.8254 29.164 17.6372 29.1363C15.5614 29.1381 13.5152 29.6363 11.6646 30.5904Z",fill:"#407BFF"})),Yt={overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)"},content:{padding:"0",position:"initial",width:"100%"}},Gt=({isOpen:o,onRequestClose:r,waterId:p})=>{const i=R(),x=S(te).find(c=>c._id===p),[l,h]=n.useState(Number(x.value)),[u,j]=n.useState(x.time),y=c=>{let[d,T]=c.split(":"),w=d>=12?"PM":"AM";return d=d>=13?d-12:d,`${d}:${T} ${w}`},g=c=>{const{value:d}=c.currentTarget;!isNaN(d)&&d>0&&d<5001&&h(d)},v=c=>{j(c.currentTarget.value)},f=()=>{l>=100&&h(Number(l)-50),l<100&&h(50)},m=()=>{l>4950?h(5e3):h(Number(l)+50)},z=async c=>{c.preventDefault(),r();const d={id:p,value:Number(c.target.ml.value),time:c.target.time.value};try{await i(xe(d)).unwrap(),F.success("Your entry was changed")}catch(T){F.error(T)}};return e.jsx(k,{onRequestClose:r,isOpen:o,style:Yt,contentLabel:"EditWater Modal",children:e.jsx("form",{onSubmit:z,children:e.jsxs(D.Container,{children:[e.jsxs(D.TitleContainer,{children:[e.jsx("p",{children:"Edit the entered amount of water"}),e.jsx("button",{onClick:r,children:e.jsx(q,{width:"24",height:"24"})})]}),e.jsxs(D.WaterPortionWrapper,{children:[e.jsx(Vt,{width:"36",height:"36"}),e.jsxs("p",{className:"ml",children:[l,"ml"]}),e.jsx("p",{className:"time",children:y(u)})]}),e.jsxs(D.EnteredData,{children:[e.jsx("p",{className:"title",children:"Correct entered data:"}),e.jsx("p",{className:"subtitle",children:"Amount of water:"}),e.jsxs("div",{className:"waterControllers",children:[e.jsx("button",{type:"button",onClick:f,disabled:l<=50,children:e.jsx(Q,{width:"24",height:"24"})}),e.jsxs("div",{className:"ml",children:[l," ml"]}),e.jsx("button",{type:"button",onClick:m,disabled:l>=5e3,children:e.jsx(X,{width:"24",height:"24"})})]})]}),e.jsxs(D.Label,{children:["Recording time:",e.jsx(D.Input,{type:"time",name:"time",value:u,step:"300",onChange:v})]}),e.jsxs(D.Label,{size:"large",children:["Enter the value of the water used:",e.jsx(D.Input,{type:"number",name:"ml",value:l,min:"1",minLength:"1",maxLength:"4",onChange:g})]}),e.jsxs(D.SaveButtonWrapper,{children:[e.jsxs("p",{style:{minWidth:"50px"},children:[l,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})})})},Ut=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Jt=t.h2`
  font-family: 'roboto', sans-serif;
  color: var(--primary-txt-color);
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;
`,Kt=t.button`
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 20px;
  padding: 8px 30px;
  background: var(--red-color);
  border: none;
  color: var(--white-color);
  border-radius: 10px;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`,Qt=t.button`
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 20px;
  padding: 8px 30px;
  background: var(--light-grey-color);
  border: none;
  color: var(--primary-color);
  border-radius: 10px;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`,Xt=t.div`
  display: flex;
  justify-content: space-between;
`,eo=t.p`
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 20px;
  color: var(--primary-txt-color);
`,to=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`,oo="_Modal_183m8_1",no="_Overlay_183m8_23",U={Modal:oo,Overlay:no},io=({isOpen:o,onRequestClose:r,waterId:p})=>{const i=R(),a=()=>{i(ge(p)),r()};return k.setAppElement("#root"),e.jsx(k,{isOpen:o,overlayClassName:U.Overlay,className:U.Modal,onRequestClose:r,contentLabel:"Example Modal",children:e.jsxs(Ut,{children:[e.jsxs(Xt,{children:[e.jsx(Jt,{children:"Delete entry"}),e.jsx("svg",{onClick:r,width:"24",height:"24",cursor:"pointer",children:e.jsx("use",{href:`${he}#icon-close-cross`})})]}),e.jsx(eo,{children:"Are you sure you want to delete the entry?"}),e.jsxs(to,{children:[e.jsx(Kt,{onClick:a,children:"Delete"}),e.jsx(Qt,{onClick:r,children:"Cancel"})]})]})})};k.setAppElement("#root");const ro=`${L}#icon-plus-blue`,re=H.memo(()=>{const o=S(te)||[],r=o.length>0?o.slice().sort((m,z)=>{const c=m.time.split(":").map(Number),d=z.time.split(":").map(Number);return c[0]!==d[0]?c[0]-d[0]:c[1]-d[1]}):o,[p,i]=n.useState(!1),[a,x]=n.useState(!1),[l,h]=n.useState(!1),[u,j]=n.useState(0),y=()=>{i(!0)},g=()=>{i(!1)},v=m=>{j(m),x(!0)},f=m=>{j(m),h(!0)};return e.jsxs(vt,{children:[e.jsx(Ct,{children:"Today"}),e.jsx(Mt,{children:r&&r.map(m=>e.jsx(Nt,{water:m.value,time:m.time,id:m._id,onEditButtonClick:v,handleDeletebutton:f},m._id))}),e.jsxs(jt,{onClick:y,children:[e.jsx(kt,{children:e.jsx("use",{xlinkHref:ro})}),e.jsx("span",{children:"Add water"})]}),e.jsx(ee,{onRequestClose:g,isOpen:p}),a&&e.jsx(Gt,{isOpen:a,onRequestClose:()=>x(!1),waterId:u}),l&&e.jsx(io,{isOpen:l,onRequestClose:()=>h(!1),waterId:u})]})});re.displayName="TodayList";const ao=t.div`
margin-bottom: 35px;
width: 100%;

margin-left: auto;
margin-right: auto;
z-index: -1;
position: relative;

img {
  width: 100%;
  height: auto;
}

@media (min-width: 320px) {
  width: 280px;
  height: 208px;


}
@media (min-width: 768px) {
  width: 518px;
  height: 386px;

}

@media (min-width: 1440px) {
  width: 738px;
  height: 548px;
  margin-bottom: 24px;
  img {
    position: relative;
    left: -50px;
  }
}
`,J="/project-AquaSquad/assets/Mobile-Bottle-home-screen@1x-40823e6e.png",lo="/project-AquaSquad/assets/Mobile-Bottle-home-screen@2x-6bf25102.png",so="/project-AquaSquad/assets/Tablet-Bottle-Home-Screen@1x-15e31eb4.png",po="/project-AquaSquad/assets/Tablet-Bottle-Home-Screen@2x-27cd4c82.png",co="/project-AquaSquad/assets/Desk-Botle-Home-screen@1x-b43174f4.png",xo="/project-AquaSquad/assets/Desk-Botle-Home-screen@2x-d7419d88.png",ho=()=>e.jsx(ao,{children:e.jsx("img",{srcSet:`${J} 1x, ${lo} 2x, 
                         ${so} 1x, ${po} 2x, 
                         ${co} 1x, ${xo} 2x`,src:J,alt:"bottle"})}),go="/project-AquaSquad/assets/back_desktop@1x-88afa2b3.png",mo="/project-AquaSquad/assets/back_desktop@2x-17852ecc.png",uo="/project-AquaSquad/assets/back_tablet@1x-79e75131.png",fo="/project-AquaSquad/assets/back_tablet@2x-c9456ce0.png",bo="/project-AquaSquad/assets/back_mobile@1x-a5bd490b.png",wo="/project-AquaSquad/assets/back_mobile@2x-82cfa4ff.png",yo=t.section`
position: relative;
background-color: var(--white-color);
background-size: cover;
position: relative;
background-position: 0% -5%;
background-repeat: no-repeat;
height: 100%;
z-index: 0;
 
  @media (max-width: 767px) {
    background-image: image-set(
      url(${bo}) 1x,
      url(${wo}) 2x
    );
   
  }

  @media (min-width: 768px) {
    background-image: image-set(
      url(${uo}) 1x,
      url(${fo}) 2x
    );
    background-size: cover;
    background-position: 0% 0%;
    background-repeat: no-repeat;

  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url(${go}) 1x,
      url(${mo}) 2x
    );
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    
  }
`,vo=t.div`
@media (min-width: 1440px) {
  display: flex;
  gap: 32px;
  height: 680px;
}

@media only screen and (max-width: 1439px) {
  padding-bottom: 40px;
}

`,Co=t.div`

@media (min-width: 1440px){
  padding-bottom: 33.5px;
  width:592px;
}

`,jo=t.div`
background-color: #d7e3ff;
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
    padding: 24px 8px;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0px 4px 14px rgb(64, 123, 255, 0.3);

    @media screen and (min-width: 320px) {
        width: 280px;
        }

    @media screen and (min-width: 768px) {
        width: 704px;
        padding: 32px 24px;
        }

    @media screen and (min-width: 1440px) {
         width: 592px;
        padding-bottom:0px;
    }
`,ko=o=>o.water.selectDate,So=()=>{const o=R(),r=S(ne),p=S(ko),[i,a]=r.selectedDate.split("-");return n.useEffect(()=>{o(me())},[]),n.useEffect(()=>{o(P({year:i,month:a}))},[p]),e.jsx(yo,{className:"background",children:e.jsx("div",{className:"container",children:e.jsxs(vo,{children:[e.jsxs(Co,{children:[e.jsx(Ie,{}),e.jsx(ho,{}),e.jsx(oe,{})]}),e.jsxs(jo,{children:[e.jsx(re,{}),e.jsx(ie,{})]})]})})})};export{So as default};
