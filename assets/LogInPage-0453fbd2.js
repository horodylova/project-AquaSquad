import{b,c as E,n as y,r as v,o as I,j as s,k as t,L as P,t as T,B as l,q as $}from"./index-bb6e3f84.js";import{S as k,R as q,B as F,F as B,a as C,M as z,L as d,b as c,I as m,c as h,d as M,E as g,e as R,P as W,f as O}from"./RegistrationPage.styled-5a6daca5.js";const U=/^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/,D=()=>{const i=b(),p=E(y),[o,u]=v.useState(!1),{register:n,formState:{errors:e,isValid:x},handleSubmit:j,reset:w}=I({mode:"onChange"}),L=r=>{u(a=>({...a,[r]:!a[r]}))},f=async({email:r,password:a})=>{try{await i(T({email:r,password:a})).unwrap(),l.success("Login successful. Welcome aboard!"),await i($()).unwrap(),w()}catch(S){l.error(S)}};return s.jsxs(k,{className:"background",children:[s.jsx(q,{children:s.jsx(F,{children:s.jsx(B,{children:s.jsxs(C,{onSubmit:j(f),children:[s.jsx(z,{children:"Sign In"}),s.jsxs(d,{children:[s.jsx(c,{id:"email",$err:e.email,children:"Enter your email"}),s.jsx(m,{id:"email",type:"email",placeholder:"E-mail",...n("email",{required:"This field is required",minLength:{value:3,message:"Too short!"},maxLength:{value:64,message:"Too long!"},pattern:{value:U,message:"Enter a correct email, example@gmail.com"}}),$errors:e.email}),s.jsx("div",{children:e.email&&s.jsx(h,{children:e.email.message||"Error!"})})]}),s.jsxs(d,{children:[s.jsxs(c,{id:"password",$errors:e.password,children:["Enter your password"," "]}),s.jsxs(M,{children:[s.jsx(m,{placeholder:"Password",id:"password",type:o.password?"text":"password",...n("password",{required:"This field is required!",minLength:{value:3,message:"Too short!"},maxLength:{value:64,message:"Too long!"}}),$errors:e.password}),s.jsx("div",{onClick:()=>L("password"),children:o.password?s.jsx(g,{children:s.jsx("use",{href:`${t}#icon-outlineOn`})}):s.jsx(g,{children:s.jsx("use",{href:`${t}#icon-outlineOff`})})})]}),s.jsx("div",{children:e.password&&s.jsx(h,{children:e.password.message||"Error!"})})]}),s.jsx(R,{type:"submit",disabled:!x,children:"Sign In"}),s.jsx(W,{to:"/register",children:"Sign Up"})]})})})}),p&&s.jsx(O,{children:s.jsx(P,{})})]})};export{D as default};
