import{r as t,j as e,F as v,b as N,L as C}from"./index-3f8edf70.js";import{l as S,d as E}from"./done-23043ded.js";import{U as d}from"./user.context-707a8256.js";const y={subject:"",body:"",to:""};function U(u){const{currentUser:s,setCurrentUser:o}=t.useContext(d),[n,c]=t.useState(y),{subject:m,body:p,to:w}=n,x=l=>{const{name:r,value:a}=l.target;c({...n,[r]:a})},[h,f]=t.useState(""),[j,b]=t.useState(!1),[i,g]=t.useState(!1);t.useEffect(()=>{S.loadAnimation({container:document.getElementById("animated"),renderer:"svg",loop:!0,autoplay:!0,animationData:E})},[i]);const B=async l=>{l.preventDefault(),f("");try{b(!0);let r={subject:m,body:p},a;try{console.log(s),a=await fetch("https://localhost:7245/api/Email/Broadcast",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Authorization:"Bearer "+s}})}catch{if(a==null)throw"Broadcast failed, please contact support center."}if(a.status==200)g(!0);else throw a.status==400?"Broadcast failed, please check your email information":"Broadcast failed, please contact support center."}catch(r){f(r)}finally{setTimeout(function(){g(!1)},5e3),b(!1),c(y)}};return e.jsxs("div",{className:"message-broadcast",children:[i?e.jsx("div",{className:"success-svg",id:"animated"}):e.jsx(e.Fragment,{}),e.jsx("div",{className:"background"}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"header",children:e.jsx("h3",{children:"Broadcast Email"})}),e.jsxs("form",{style:i?{visibility:"hidden"}:{},onSubmit:B,children:[h!==""&&e.jsx("div",{className:"error-message",children:e.jsx("p",{className:"error-text",children:h})}),e.jsx(v,{label:"subject",required:!0,type:"text",value:m,name:"subject",onChange:x}),e.jsx(v,{required:!0,type:"textarea",value:p,name:"body",placeholder:"Email body",onChange:x}),e.jsxs("div",{className:"button-container",children:[e.jsx("button",{type:"submit",disabled:j,children:"Broadcast"}),e.jsx("button",{type:"button",disabled:j,children:"Test"})]})]})]})]})}const F="/assets/rise-logo-png-text-8ddf1a20.png";function k(u){const s=N(),{currentUser:o,setCurrentUser:n}=t.useContext(d),c=()=>{n(null),s("/")};return e.jsxs("nav",{className:"admin-navbar",children:[e.jsx("div",{className:"nav-logo",children:e.jsx("img",{src:F,alt:""})}),e.jsx("ul",{children:e.jsx("li",{onClick:c,children:e.jsx(C,{children:"Logout"})})})]})}function L(u){const s=N(),{currentUser:o,setCurrentUser:n}=t.useContext(d);return t.useEffect(()=>{o==null&&s("/admin/login")},[o]),e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(U,{})]})}export{L as default};