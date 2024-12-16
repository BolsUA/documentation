"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[443],{8798:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(4848),t=n(8453);const r={sidebar_position:3},o="Architecture",a={id:"architecture",title:"Architecture",description:"Description",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/documentation/docs/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Definition of Done",permalink:"/documentation/docs/definitions/definition-of-done"},next:{title:"Database Documentation",permalink:"/documentation/docs/database"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Backend",id:"backend",level:2},{value:"API Gateway",id:"api-gateway",level:3},{value:"Microservices",id:"microservices",level:3},{value:"Message Queue",id:"message-queue",level:3},{value:"Deployment",id:"deployment",level:2}];function l(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The architecture is built around a microservices-based model, allowing each core functionality to be decoupled and handled independently. The platform is designed with ",(0,i.jsx)(s.strong,{children:"high scalability, fault tolerance, and ease of deployment"})," in mind, using modern tools such as ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://nextjs.org/",children:"Next.js"})}),", ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://fastapi.tiangolo.com/",children:"FastAPI"})}),", ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://www.docker.com/",children:"Docker"})}),", ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://www.mysql.com/",children:"MySQL"})}),", and ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://www.rabbitmq.com/",children:"RabbitMQ"})})," for asynchronous communication."]}),"\n",(0,i.jsx)(s.h2,{id:"workflow",children:"Workflow"}),"\n",(0,i.jsx)(s.p,{children:"The platform is designed to facilitate the following workflow:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Workflow Diagram",src:n(4038).A+"",width:"847",height:"2241"})}),"\n",(0,i.jsx)(s.h2,{id:"frontend",children:"Frontend"}),"\n",(0,i.jsxs)(s.p,{children:["The frontend is built using ",(0,i.jsx)(s.strong,{children:"Next.js"}),", which serves as the user interface for four key actors: ",(0,i.jsx)(s.strong,{children:"Students"}),", ",(0,i.jsx)(s.strong,{children:"Proposers"}),", ",(0,i.jsx)(s.strong,{children:"Secretaries"}),", and ",(0,i.jsx)(s.strong,{children:"Jury"})," members. It communicates with backend microservices via RESTful APIs and is secured using ",(0,i.jsx)(s.strong,{children:"AWS Cognito"})," for authentication through ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://authjs.dev/",children:"Auth.js"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"backend",children:"Backend"}),"\n",(0,i.jsx)(s.h3,{id:"api-gateway",children:"API Gateway"}),"\n",(0,i.jsx)(s.p,{children:"The API Gateway manages incoming requests from the frontend and routes them to the appropriate microservices. It centralizes authentication, request validation, and routing, ensuring that only valid requests reach the backend."}),"\n",(0,i.jsx)(s.h3,{id:"microservices",children:"Microservices"}),"\n",(0,i.jsxs)(s.p,{children:["All backend services are built using ",(0,i.jsx)(s.strong,{children:"FastAPI"}),", using ",(0,i.jsx)(s.strong,{children:"Docker"})," for containerization and ",(0,i.jsx)(s.strong,{children:"MySQL"})," for data storage. The backend is divided into four microservices:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Manage People"}),": This microservice is responsible for managing the platform's users, including ",(0,i.jsx)(s.strong,{children:"Students"}),", ",(0,i.jsx)(s.strong,{children:"Proposers"}),", ",(0,i.jsx)(s.strong,{children:"Secretaries"}),", and ",(0,i.jsx)(s.strong,{children:"Jury"})," members. It also manages user notifications, which are sent through ",(0,i.jsx)(s.strong,{children:"RabbitMQ"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Manage Scholarships"}),": This service is responsible for creating, updating, and managing scholarships. Once a scholarship is proposed, it needs validation from the Secretary before becoming available for applications."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Manage Applications"}),": This service allows students to apply for available scholarships, submit the required documents, and track their application status."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Manage Grading and Selection"}),": After a scholarship is closed, this service facilitates the grading of applications by the jury, selection of candidates, and publication of results."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Notifications"}),": This service listens for various events (such as the submission of applications or announcement of results) and sends notifications to relevant actors (e.g., students, proposers, and jury members)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"message-queue",children:"Message Queue"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"RabbitMQ"})," acts as the asynchronous communication layer, decoupling the services and ensuring that tasks like notification delivery and application processing happen without blocking other processes. This approach helps manage processes that do not need immediate synchronous responses and ensures scalability and resilience."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Architecture Diagram",src:n(152).A+"",width:"1592",height:"982"})}),"\n",(0,i.jsx)(s.h2,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"AWS Deployment Diagram",src:n(696).A+"",width:"1311",height:"1351"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},696:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/AWS-Architecture-5ce353adba988f98fce2c97b0d76435b.jpg"},152:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/Architecture-54b5b7d26f57faa57cae176381614b2e.jpg"},4038:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/Workflow-e53e4ffddc280fd65c91e887f0fb2b1e.jpg"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var i=n(6540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);