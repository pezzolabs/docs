"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,y=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Step 1: Project Setup",p={unversionedId:"tutorial/create-project",id:"tutorial/create-project",title:"Step 1: Project Setup",description:"This tutorial requires an OpenAI API key. Click here to view your OpenAI API keys and create a new one (or sign up if you haven't already).",source:"@site/docs/tutorial/create-project.mdx",sourceDirName:"tutorial",slug:"/tutorial/create-project",permalink:"/docs/tutorial/create-project",draft:!1,editUrl:"https://github.com/pezzolabs/pezzo/tree/main/docs/tutorial/create-project.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The Demo App",permalink:"/docs/tutorial/introduction"},next:{title:"Step 2: OpenAI API Key (Optional) ",permalink:"/docs/tutorial/provide-openai-api-key"}},c={},l=[{value:"Sign in to Pezzo",id:"sign-in-to-pezzo",level:2},{value:"Create a new project",id:"create-a-new-project",level:2}],u={toc:l},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-1-project-setup"},"Step 1: Project Setup"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial requires an OpenAI API key. ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"Click here")," to view your OpenAI API keys and create a new one (or sign up if you haven't already).")),(0,o.kt)("h2",{id:"sign-in-to-pezzo"},"Sign in to Pezzo"),(0,o.kt)("p",null,"The easiest way to get started is by using ",(0,o.kt)("a",{parentName:"p",href:"https://app.pezzo.ai"},"Pezzo Cloud"),"."),(0,o.kt)("p",null,"Do you prefer to run your own instance of Pezzo? Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/self-hosting"},"self-hosted installation guide"),"."),(0,o.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,o.kt)("p",null,"Create a new project and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"Taskly"),"."))}d.isMDXComponent=!0}}]);