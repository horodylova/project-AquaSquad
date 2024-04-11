import{u as n,a as d,j as e}from"./index-a3a6a891.js";import{s as t}from"./iconSprite-4fb6f3b3.js";const c="/project-AquaSquad/assets/Mobile-5fe6b51a.png",x="/project-AquaSquad/assets/Tablet-35ea9a82.png",p="/project-AquaSquad/assets/bg_main_page-3f3e4f1c.png",l="/project-AquaSquad/assets/bg_el_main_page-9802d73b.png",h=n.div`
padding-bottom: 40px;

@media screen and (min-width: 768px) {
  padding-bottom: 50px;
}

@media screen and (min-width: 1440px) {
  display: flex;
  justify-content: center;
  padding: 109px 80px 0 86px;
}

`,m=n.section`
  min-height: 100vh;

  background-image: url(${c});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${x});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${l}), url(${p});
    background-blend-mode: multiply;
  }
`,g=n.ul`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
 
`,r=n.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px), screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`,b=n.p`
  font-size: 24px;
  line-height: 1.25;
  color: var(--primary-txt-color);
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.14;
  }
`,u=n.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 26px;
    margin-right: 81px;
    margin-bottom: 0;
  }
`,f=n.h1`
  font-size: 36px;
  line-height: 1.17;
  color: var(--primary-txt-color);

  margin-bottom: 16px;

  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 1.14;
  }
`,j=n.h2`
  font-size: 18px;
  line-height: 1.11;
  margin-bottom: 12px;
  color: var(--primary-txt-color);
`,o=n.svg`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: none;
  @media screen and (min-width: 768px) {
  width: 40px;
  height: 40px;

  }
`,w=n.button`
  padding-right: 100px;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: var(--primary-color);
  width: 100%;
  border-radius: 10px;
  border: none;
  max-width: 280px;
  padding: 8px 30px;
  color: var(--white-color);
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px #407bff;
  transition: box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px #407bff;
  
  }
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    min-width: 336px;
    line-height: 24px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`,y=()=>{const a=d();function s(){a("/register")}return e.jsxs(u,{children:[e.jsx(f,{children:"Water consumption tracker"}),e.jsx(b,{children:"Record daily water intake and track"}),e.jsx(j,{children:"Tracker Benefits"}),e.jsxs(g,{children:[e.jsxs(r,{children:[e.jsx(o,{children:e.jsx("use",{href:t+"#icon-calendar"})}),"Habit drive"]}),e.jsxs(r,{children:[e.jsx(o,{children:e.jsx("use",{href:t+"#icon-statistics"})}),"View statistics"]}),e.jsxs(r,{children:[e.jsx(o,{children:e.jsx("use",{href:t+"#icon-setting"})}),"Personal rate setting"]})]}),e.jsx(w,{type:"button",onClick:s,children:"Try tracker"})]})},k=n.div`
  background-color: var(--second-background-color);
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 446px;
  }
  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
    margin-top: 34px;
  }
`,v=n.h2`
  font-size: 18px;
  line-height: 1.11;

  margin-bottom: 12px;
  color: #2F2F2F;
`,i=n.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 20px;

  &::before {
    content: '';
    border-color: var(--primary-color);
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,z=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(k,{children:[e.jsx(v,{children:"Why drink water"}),e.jsxs("ul",{children:[e.jsx(i,{children:"Supply of nutrients to all organs"}),e.jsx(i,{children:"Providing oxygen to the lungs"}),e.jsx(i,{children:"Maintaining the work of the heart"}),e.jsx(i,{children:"Release of processed substances"}),e.jsx(i,{children:"Ensuring the stability of the internal environment"}),e.jsx(i,{children:"Maintaining within the normal temperature"}),e.jsx(i,{children:"Maintaining an immune system capable of resisting disease"})]})]})})}),W=()=>e.jsx(m,{className:"background",children:e.jsxs(h,{className:"container",children:[e.jsx(y,{}),e.jsx(z,{})]})});export{W as WelcomePage,W as default};
