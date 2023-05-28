"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(g,p(p({ref:t},m),{},{components:n})):r.createElement(g,p({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(4622);const p={sidebar_position:3},i="Step 2: Prompt Engineering",l={unversionedId:"getting-started/task-generator-example/prompt-engineering",id:"getting-started/task-generator-example/prompt-engineering",title:"Step 2: Prompt Engineering",description:"Create a new project and prompt",source:"@site/docs/getting-started/task-generator-example/prompt-engineering.mdx",sourceDirName:"getting-started/task-generator-example",slug:"/getting-started/task-generator-example/prompt-engineering",permalink:"/docs/getting-started/task-generator-example/prompt-engineering",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/task-generator-example/prompt-engineering.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Step 1: Project Setup",permalink:"/docs/getting-started/task-generator-example/create-project"}},s={},m=[{value:"Create a new project and prompt",id:"create-a-new-project-and-prompt",level:2},{value:"Prompt Engineering \ud83d\udd27",id:"prompt-engineering-",level:2},{value:"Prompt Body",id:"prompt-body",level:3},{value:"Prompt Settings",id:"prompt-settings",level:3},{value:"Testing (Optional)",id:"testing-optional",level:3},{value:"Commit &amp; Publish",id:"commit--publish",level:3},{value:"Step 2: Clone the example app",id:"step-2-clone-the-example-app",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...p}=e;return(0,a.kt)(u,(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"step-2-prompt-engineering"},"Step 2: Prompt Engineering"),(0,a.kt)("h2",{id:"create-a-new-project-and-prompt"},"Create a new project and prompt"),(0,a.kt)("p",null,"Follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign in to Pezzo at ",(0,a.kt)("a",{parentName:"li",href:"https://localhost:4200"},"https://localhost:4200"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a new project. You can name it whatever you want, but for this tutorial we'll call it ",(0,a.kt)("inlineCode",{parentName:"li"},"Taskly"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a new prompt. Choose OpenAI as the provider, and name it ",(0,a.kt)("inlineCode",{parentName:"li"},"GenerateTasks"),"."),(0,a.kt)("li",{parentName:"ol"},"Navigate to the Editor tab.")),(0,a.kt)("h2",{id:"prompt-engineering-"},"Prompt Engineering \ud83d\udd27"),(0,a.kt)("p",null,"It's time to engineer our prompt to produce the desired output. In our case, we want to generate a list of tasks to achieve a goal. We also want the goals to produce a JSON response, so we can process it in our example app."),(0,a.kt)("h3",{id:"prompt-body"},"Prompt Body"),(0,a.kt)("p",null,"In the body of the prompt, copy and paste the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'You are a talented task generator.\n\nYou\'ll help me generate tasks to achieve the following goal: "{goal}".\nYou must generate exactly {numTasks} tasks.\n\nYou must respond in valid JSON, strictly adhering to the following schema:\n\n{\n  tasks: string[];\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can interpolate variables in the prompt body by wrapping them in double curly braces. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"{{goal}}"),".")),(0,a.kt)("h3",{id:"prompt-settings"},"Prompt Settings"),(0,a.kt)("p",null,"Feel free to modify the settings to your liking. For this tutorial, we strongly recommend the following adjustments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Temperature"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Max Response Length"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"1000"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When expecting a JSON response, it's best to set the temperature to 0. This minimizes the chance of the response being invalid.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pezzo Editor",src:n(466).Z,width:"3008",height:"1718"})),(0,a.kt)("h3",{id:"testing-optional"},"Testing (Optional)"),(0,a.kt)("p",null,"If you have configured your OpenAI API key, you may now use the Test button to see the result of your prompt."),(0,a.kt)("h3",{id:"commit--publish"},"Commit & Publish"),(0,a.kt)("p",null,"Now we're ready to commit and publish our prompt. You can find the Commit & Publish button in the top right corner of the Editor tab."),(0,a.kt)("img",{src:o.Z,style:{width:400}}),(0,a.kt)("h2",{id:"step-2-clone-the-example-app"},"Step 2: Clone the example app"),(0,a.kt)("p",null,"All demo apps can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pezzolabs/examples"},"examples GitHub repository"),"."),(0,a.kt)("p",null,"Open up a terminal and clone the app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit https://github.com/pezzolabs/examples/task-generator-app task-generator-app\n")),(0,a.kt)("p",null,"Now, navigate to the app directory and install dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd task-generator-app\nnpm install\n")))}d.isMDXComponent=!0},4622:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/buttons-c7b7b7116b8df842d701db1116d1209a.png"},466:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/editor-450c64ae6b1fdecc4c869c66612cabd5.png"}}]);