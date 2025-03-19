"use strict";(self.webpackChunkcare_track=self.webpackChunkcare_track||[]).push([[54],{7071:(e,l,a)=>{a.d(l,{Cj:()=>i,DO:()=>t,_q:()=>o,an:()=>d,cA:()=>s,qg:()=>r});const i=[{id:1,label:"Cardiology",value:"Cardiology"},{id:2,label:"Dermatology",value:"Dermatology"},{id:3,label:"Pediatrics",value:"Pediatrics"},{id:4,label:"Orthopedics",value:"Orthopedics"},{id:5,label:"Neurology",value:"Neurology"},{id:6,label:"Ophthalmology",value:"Ophthalmology"},{id:7,label:"Obstetrics and Gynecology",value:"Obstetrics and Gynecology"},{id:8,label:"Psychiatry",value:"Psychiatry"},{id:9,label:"General Surgery",value:"General Surgery"},{id:10,label:"Internal Medicine",value:"Internal Medicine"},{id:11,label:"Anesthesiology",value:"Anesthesiology"},{id:12,label:"Radiology",value:"Radiology"},{id:13,label:"Urology",value:"Urology"},{id:14,label:"Oncology",value:"Oncology"},{id:15,label:"Pulmonology",value:"Pulmonology"},{id:16,label:"Gastroenterology",value:"Gastroenterology"},{id:17,label:"Endocrinology",value:"Endocrinology"},{id:18,label:"Nephrology",value:"Nephrology"},{id:19,label:"Otolaryngology (ENT)",value:"Otolaryngology (ENT)"},{id:20,label:"Rheumatology",value:"Rheumatology"},{id:21,label:"Hematology",value:"Hematology"},{id:22,label:"Allergy and Immunology",value:"Allergy and Immunology"},{id:23,label:"Infectious Disease",value:"Infectious Disease"},{id:24,label:"Physical Medicine and Rehabilitation",value:"Physical Medicine and Rehabilitation"},{id:25,label:"Emergency Medicine",value:"Emergency Medicine"},{id:26,label:"Pathology",value:"Pathology"},{id:27,label:"Plastic Surgery",value:"Plastic Surgery"},{id:28,label:"Thoracic Surgery",value:"Thoracic Surgery"},{id:29,label:"Vascular Surgery",value:"Vascular Surgery"},{id:30,label:"Dentistry",value:"Dentistry"}],o=[{label:"Patient",value:"patient"},{label:"Doctor",value:"doctor"},{label:"Nurse",value:"nurse"}],t=[{id:1,value:"A+",label:"A+"},{id:2,value:"A-",label:"A-"},{id:3,value:"B+",label:"B+"},{id:4,value:"B-",label:"B-"},{id:5,value:"O+",label:"O+"},{id:6,value:"O-",label:"O-"},{id:7,value:"AB+",label:"AB+"},{id:8,value:"AB-",label:"AB-"}],r=[{id:1,value:"doctor",label:"Doctor"},{id:2,value:"nurse",label:"Nurse"},{id:3,value:"donator",label:"Blood Donator"},{id:4,value:"donation_request",label:"Blood Request"}],s=[{id:0,label:"All",value:"All"},{id:1,label:"Cairo",value:"Cairo"},{id:2,label:"Alexandria",value:"Alexandria"},{id:3,label:"Giza",value:"Giza"},{id:4,label:"6th of October City",value:"6th of October City"},{id:5,label:"Port Said",value:"Port Said"},{id:6,label:"Suez",value:"Suez"},{id:7,label:"Luxor",value:"Luxor"},{id:8,label:"Asyut",value:"Asyut"},{id:9,label:"Mansoura",value:"Mansoura"},{id:10,label:"Tanta",value:"Tanta"},{id:11,label:"Zagazig",value:"Zagazig"},{id:12,label:"Faiyum",value:"Faiyum"},{id:13,label:"Ismailia",value:"Ismailia"},{id:14,label:"Aswan",value:"Aswan"},{id:15,label:"Minya",value:"Minya"},{id:16,label:"Hurghada",value:"Hurghada"},{id:17,label:"Shubra El-Kheima",value:"Shubra El-Kheima"},{id:18,label:"Qena",value:"Qena"},{id:19,label:"Sohag",value:"Sohag"},{id:20,label:"Banha",value:"Banha"}],d=[{label:"Sunday",value:0},{label:"Monday",value:1},{label:"Tuesday",value:2},{label:"Wednesday",value:3},{label:"Thursday",value:4},{label:"Friday",value:5},{label:"Saturday",value:6}]},2088:(e,l,a)=>{a.d(l,{Z:()=>m});var i=a(8381),o=a(3949),t=a(9459),r=a(1935),s=a.n(r),d=(a(5665),a(7071)),n=a(2264),u=a(1546),c=a(5361),b=a(825),y=a(6116),v=a(9343);const m=function(e){let{isRequest:l}=e;const{city:a}=(0,o.v9)((e=>e.authedUser.user)),[r,m]=(0,i.useState)({bloodType:null,city:null,date:null}),[g,h]=(0,i.useState)(!1);return(0,v.jsxs)(u.Z,{onSubmit:async e=>{if(e.preventDefault(),r.bloodType&&r.city&&r.date||(y.Am.error("Please fill all required fields"),0)){h(!0);try{await y.Am.promise((0,n._d)({isRequest:l,bloodType:r.bloodType.value,city:r.city.value,date:new Date(r.date).getTime()}),{pending:l?"Creating blood request...":"Creating Blood Donation Request...",success:"Blood request created successfully!",error:{render(e){let{data:l}=e;return null!==l&&void 0!==l&&l.message,"Failed to create blood request"}}})}catch(a){console.error("Submission error:",a)}finally{h(!1)}}},className:"border p-4 rounded-3 shadow-sm bg-white",children:[(0,v.jsxs)("h2",{className:"mb-4 text-center",children:[l?"Donation Request":"Blood Donation"," "]}),(0,v.jsx)(u.Z.Group,{className:"mb-4",children:(0,v.jsx)(s(),{selected:r.date,onChange:e=>m((l=>({...l,date:e}))),minDate:new Date,className:"form-control",placeholderText:"Select Date",showIcon:!0,required:!0})}),(0,v.jsx)(u.Z.Group,{className:"mb-4",children:(0,v.jsx)(t.ZP,{options:d.DO,placeholder:"Select Blood Type",onChange:e=>m((l=>({...l,bloodType:e}))),classNamePrefix:"react-select",value:r.bloodType,required:!0})}),(0,v.jsx)(u.Z.Group,{className:"mb-4",children:(0,v.jsx)(t.ZP,{options:d.cA,placeholder:"Select City",onChange:e=>m((l=>({...l,city:e}))),defaultValue:a,classNamePrefix:"react-select",value:r.city,required:!0})}),(0,v.jsx)("div",{className:"d-grid",children:(0,v.jsx)(c.Z,{variant:"primary",type:"submit",disabled:g,size:"lg",children:g?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.Z,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),(0,v.jsx)("span",{className:"ms-2",children:"Submitting..."})]}):"Submit Request"})})]})}},54:(e,l,a)=>{a.r(l),a.d(l,{default:()=>d});var i=a(8381),o=a(8023),t=a(6893),r=a(2088),s=a(9343);const d=function(){return(0,i.useEffect)((()=>{document.title="Blood Donation"}),[]),(0,s.jsx)(o.Z,{className:"py-5 justify-content-center",children:(0,s.jsx)(t.Z,{xs:12,md:8,lg:6,children:(0,s.jsx)(r.Z,{isRequest:!1})})})}},1546:(e,l,a)=>{a.d(l,{Z:()=>T});var i=a(5809),o=a.n(i),t=a(4860),r=a.n(t),s=a(8381),d=a(8708),n=(a(2483),a(3341)),u=a(7122),c=a(4169),b=a(9343);const y=s.forwardRef(((e,l)=>{let{bsPrefix:a,type:i,size:t,htmlSize:r,id:d,className:n,isValid:y=!1,isInvalid:v=!1,plaintext:m,readOnly:g,as:h="input",...f}=e;const{controlId:p}=(0,s.useContext)(u.Z);return a=(0,c.vE)(a,"form-control"),(0,b.jsx)(h,{...f,type:i,size:r,ref:l,readOnly:g,id:d||p,className:o()(n,m?`${a}-plaintext`:a,t&&`${a}-${t}`,"color"===i&&`${a}-color`,y&&"is-valid",v&&"is-invalid")})}));y.displayName="FormControl";const v=Object.assign(y,{Feedback:n.Z}),m=s.forwardRef(((e,l)=>{let{className:a,bsPrefix:i,as:t="div",...r}=e;return i=(0,c.vE)(i,"form-floating"),(0,b.jsx)(t,{ref:l,className:o()(a,i),...r})}));m.displayName="FormFloating";const g=m;var h=a(4763),f=a(946);const p=s.forwardRef(((e,l)=>{let{bsPrefix:a,className:i,id:t,...r}=e;const{controlId:d}=(0,s.useContext)(u.Z);return a=(0,c.vE)(a,"form-range"),(0,b.jsx)("input",{...r,type:"range",ref:l,className:o()(i,a),id:t||d})}));p.displayName="FormRange";const x=p,N=s.forwardRef(((e,l)=>{let{bsPrefix:a,size:i,htmlSize:t,className:r,isValid:d=!1,isInvalid:n=!1,id:y,...v}=e;const{controlId:m}=(0,s.useContext)(u.Z);return a=(0,c.vE)(a,"form-select"),(0,b.jsx)("select",{...v,size:t,ref:l,className:o()(r,a,i&&`${a}-${i}`,d&&"is-valid",n&&"is-invalid"),id:y||m})}));N.displayName="FormSelect";const S=N,j=s.forwardRef(((e,l)=>{let{bsPrefix:a,className:i,as:t="small",muted:r,...s}=e;return a=(0,c.vE)(a,"form-text"),(0,b.jsx)(t,{...s,ref:l,className:o()(i,a,r&&"text-muted")})}));j.displayName="FormText";const P=j,Z=s.forwardRef(((e,l)=>(0,b.jsx)(d.Z,{...e,ref:l,type:"switch"})));Z.displayName="Switch";const A=Object.assign(Z,{Input:d.Z.Input,Label:d.Z.Label}),O=s.forwardRef(((e,l)=>{let{bsPrefix:a,className:i,children:t,controlId:r,label:s,...d}=e;return a=(0,c.vE)(a,"form-floating"),(0,b.jsxs)(h.Z,{ref:l,className:o()(i,a),controlId:r,...d,children:[t,(0,b.jsx)("label",{htmlFor:r,children:s})]})}));O.displayName="FloatingLabel";const R=O,w={_ref:r().any,validated:r().bool,as:r().elementType},C=s.forwardRef(((e,l)=>{let{className:a,validated:i,as:t="form",...r}=e;return(0,b.jsx)(t,{...r,ref:l,className:o()(a,i&&"was-validated")})}));C.displayName="Form",C.propTypes=w;const T=Object.assign(C,{Group:h.Z,Control:v,Floating:g,Check:d.Z,Switch:A,Label:f.Z,Text:P,Range:x,Select:S,FloatingLabel:R})}}]);
//# sourceMappingURL=54.30d2c71d.chunk.js.map