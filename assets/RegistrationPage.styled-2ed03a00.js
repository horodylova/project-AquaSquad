import{u as t,v as i}from"./index-a3a6a891.js";const o="/project-AquaSquad/assets/back_desktop@1x-88afa2b3.png",a="/project-AquaSquad/assets/back_desktop@2x-17852ecc.png",r="/project-AquaSquad/assets/back_tablet@1x-4801cdc6.png",n="/project-AquaSquad/assets/back_tablet@2x-fab874dc.png",p="/project-AquaSquad/assets/back_mobile@1x-181c5578.png",s="/project-AquaSquad/assets/back_mobile@2x-717c2be2.png",d="/project-AquaSquad/assets/bottle_mobile@1x-d4b37871.png",c="/project-AquaSquad/assets/bottle_mobile@2x-a0ca8e07.png",l="/project-AquaSquad/assets/bottle_tablet@1x-19a9a0a2.png",x="/project-AquaSquad/assets/bottle_tablet@2x-c57bb685.png",g="/project-AquaSquad/assets/bottle_desktop@1x-ee6779c2.png",m="/project-AquaSquad/assets/bottle_desktop@2x-911dccf4.png",u=t.div`
  color: var(--red-color);
  border-color: var(--red-color) !important;
  color: var(--red-color);
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
  }
`,h=t.input`
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  min-width: 280px;
  font-size: 16px;
  padding: 12px 10px;
  line-height: 20px;

  &::placeholder {
    color: var(--light-blue-color);
  }
  color: ${e=>e.$errors?"var(--red-color)":"var(--light-blue-color)"};
  outline: none;
  border: 2px solid var(--light-grey-color);

  border-radius: 6px;
  padding: 12px 10px;
  ${({$errors:e})=>e?"border: 1px solid var(--red-color);":""} /* margin-top: 8px; */

    @media screen and (min-width: 768px) {
    min-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`,f=t.div`
  position: relative;
  display: inline-block;
`,k=t.div`
  font-size: 18px;
  line-height: 1.33;
  color: rgb(47, 47, 47);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`,w=t.label`
  font-family: 'roboto', sans-serif;
  color: var(--primary-txt-color);
  display: block;
  font-size: 18px;
  line-height: 24px;
`,v=t.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`,q=t.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-right: auto;
    width: 336px;
    position: absolute;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    padding-top: 113px;
    margin-right: -190px;
  }
`,y=t.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 320px;
  padding-top: 20px;
  // not right, but works

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 112px;
    padding-right: 112px;
  }
`,B=t.h1`
  font-family: 'robot', sans-serif;
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;

  color: var(--primary-txt-color);
`,S=t(i)`
  color: var(--primary-color);
  line-height: 20px;
  font-size: 16px;
  font-family: 'roboto', sans-serif;
  font-weight: 400;
`,$=t.button`
  font-family: 'roboto', sans-serif;
  font-weight: var(--medium);
  font-size: 16px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;
  margin-bottom: 16px;
  width: 100%;

  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: white;
  ${e=>e.disabled?"cursor: default;":""}

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }
`,j=t.div`
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 80vh;
  background-position: center bottom;

  @media (max-width: 767px) {
    background-image: image-set(
      url(${d}) 1x,
      url(${c}) 2x
    );
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: image-set(
      url(${l}) 1x,
      url(${x}) 2x
    );
    background-position: 80px center;
    width: 736px;
    height: 548px;
  }

  @media (min-width: 1440px) {
    background-image: image-set(url(${g}) 1x, url(${m}) 2x);
    margin-top: 0;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
  }
`,A=t.section`
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 767px) {
    background-image: image-set(url(${p}) 1x, url(${s}) 2x);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: image-set(url(${r}) 1x, url(${n}) 2x);
  }

  @media (min-width: 1024px) {
    background-image: image-set(url(${o}) 1x, url(${a}) 2x);
  }
`,_=t.svg`
  cursor: pointer;
  stroke: var(--primaryBlue);
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  fill: none;
  width: 16px;
  height: 16px;
  margin-top: 5px;
`,z=t.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 990;
`;t.h3``;export{j as B,_ as E,v as F,h as I,k as L,B as M,S as P,y as R,A as S,q as a,w as b,u as c,f as d,$ as e,z as f};
