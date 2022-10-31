"use strict";(self.webpackChunkdl_docs=self.webpackChunkdl_docs||[]).push([[854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,m=c["".concat(o,".").concat(k)]||c[k]||s[k]||r;return n?l.createElement(m,p(p({ref:t},d),{},{components:n})):l.createElement(m,p({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<r;u++)p[u]=n[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},p="\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",i={unversionedId:"commands",id:"commands",title:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",description:"dl",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/commands.md",sourceDirName:".",slug:"/commands",permalink:"/ru/commands",draft:!1,editUrl:"https://github.com/local-deploy/docs/edit/master/docs/commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",permalink:"/ru/intro"},next:{title:"\u0423\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0435\u0439",permalink:"/ru/troubleshooting"}},o={},u=[{value:"dl",id:"dl",level:2},{value:"completion",id:"completion",level:2},{value:"config",id:"config",level:2},{value:"config repo",id:"config-repo",level:2},{value:"env",id:"env",level:2},{value:"deploy",id:"deploy",level:2},{value:"up",id:"up",level:2},{value:"down",id:"down",level:2},{value:"recreate",id:"recreate",level:2},{value:"bash",id:"bash",level:2},{value:"exec",id:"exec",level:2},{value:"service",id:"service",level:2},{value:"service up",id:"service-up",level:3},{value:"service down",id:"service-down",level:3},{value:"service recreate",id:"service-recreate",level:3},{value:"service restart",id:"service-restart",level:3},{value:"self-update",id:"self-update",level:2},{value:"ps",id:"ps",level:2},{value:"version",id:"version",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435-\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("h2",{id:"dl"},"dl"),(0,a.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl\n")),(0,a.kt)("h2",{id:"completion"},"completion"),(0,a.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u043f\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044e \u0430\u0432\u0442\u043e\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u0438."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl completion [bash|zsh]\n")),(0,a.kt)("h2",{id:"config"},"config"),(0,a.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl config\n")),(0,a.kt)("h2",{id:"config-repo"},"config repo"),(0,a.kt)("p",null,"\u041c\u0435\u043d\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u043e\u0431\u0440\u0430\u0437\u043e\u0432."),(0,a.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 GitHub (ghcr.io). \u041f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441\u043e \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u0432, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043d\u0430 \u0437\u0435\u0440\u043a\u0430\u043b\u043e RedHat (quay.io)"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl config repo\n")),(0,a.kt)("h2",{id:"env"},"env"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),". \u0415\u0441\u043b\u0438 \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example"),", \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432\u043c\u0435\u0441\u0442\u043e \u0444\u0430\u0439\u043b\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl env\n")),(0,a.kt)("h2",{id:"deploy"},"deploy"),(0,a.kt)("p",null,"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 \u0438 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0411\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0444\u043b\u0430\u0433\u0430 \u0444\u0430\u0439\u043b\u044b \u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0415\u0441\u043b\u0438 \u0432\u044b \u0443\u043a\u0430\u0436\u0435\u0442\u0435 \u0444\u043b\u0430\u0433, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"-d"),", \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u041a\u0430\u0442\u0430\u043b\u043e\u0433\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0411\u0438\u0442\u0440\u0438\u043a\u0441 CMS: ",(0,a.kt)("inlineCode",{parentName:"li"},"bitrix")),(0,a.kt)("li",{parentName:"ul"},"WordPress: ",(0,a.kt)("inlineCode",{parentName:"li"},"wp-admin")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"wp-includes")),(0,a.kt)("li",{parentName:"ul"},"Laravel: \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-d, --database")," \u0434\u0430\u043c\u043f \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-f, --files")," \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o, --override")," \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c\u044b\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 (\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438)")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl deploy\ndl deploy -d\ndl deploy -f -o bitrix,upload\n")),(0,a.kt)("h2",{id:"up"},"up"),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440. \u041f\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0410\u043d\u0430\u043b\u043e\u0433 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl up\n")),(0,a.kt)("h2",{id:"down"},"down"),(0,a.kt)("p",null,"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0441\u0435\u0442\u044c.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0410\u043d\u0430\u043b\u043e\u0433 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose down"),"."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl down\n")),(0,a.kt)("h2",{id:"recreate"},"recreate"),(0,a.kt)("p",null,"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e.",(0,a.kt)("br",{parentName:"p"}),"\n","\u041f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"dl down && dl up"),"."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl recreate\n")),(0,a.kt)("h2",{id:"bash"},"bash"),(0,a.kt)("p",null,"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 PHP \u043f\u043e\u0434 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c www-data \u0438\u043b\u0438 root \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0443 bash."),(0,a.kt)("p",null,"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043c\u044f \u0438\u043b\u0438 ID \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 docker.",(0,a.kt)("br",{parentName:"p"}),"\n","\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 PHP."),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-r, --root")," \u0432\u043e\u0439\u0442\u0438 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043f\u043e\u0434 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c root")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl bash\ndl bash -r\ndl bash site.com_db\ndl bash fcb13f1a3ea7\n")),(0,a.kt)("h2",{id:"exec"},"exec"),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u044b bash \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435 PHP \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f www-data"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dl exec composer install\ndl exec "ls -la"\n')),(0,a.kt)("h2",{id:"service"},"service"),(0,a.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u043c\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 (portainer, mailcatcher, traefik)."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl service\n")),(0,a.kt)("h3",{id:"service-up"},"service up"),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b portainer, mailcatcher \u0438 traefik.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u0444\u043b\u0430\u0433\u0430 --service: ",(0,a.kt)("inlineCode",{parentName:"p"},"portainer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mail"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-r, --restart")," \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-s, --service")," \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0434\u0438\u043d \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl service up\ndl service up -r\ndl service up -s portainer\n")),(0,a.kt)("h3",{id:"service-down"},"service down"),(0,a.kt)("p",null,"\u041e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b portainer, mailcatcher \u0438 traefik.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u0444\u043b\u0430\u0433\u0430 --service: ",(0,a.kt)("inlineCode",{parentName:"p"},"portainer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mail"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-r, --restart")," \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-s, --service")," \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0434\u0438\u043d \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl service down\ndl service down -r\ndl service down -s portainer\n")),(0,a.kt)("h3",{id:"service-recreate"},"service recreate"),(0,a.kt)("p",null,"\u041e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442, \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0437\u0430\u043d\u043e\u0432\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b portainer, mailcatcher \u0438 traefik.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043b\u044f \u0444\u043b\u0430\u0433\u0430 --service: ",(0,a.kt)("inlineCode",{parentName:"p"},"portainer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mail"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"traefik")),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-s, --service")," \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0434\u0438\u043d \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl service recreate\ndl service recreate -s portainer\n")),(0,a.kt)("h3",{id:"service-restart"},"service restart"),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0432\u0441\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0431\u0435\u0437 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.",(0,a.kt)("br",{parentName:"p"}),"\n","\u041f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"dl service --restart")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl service restart\n")),(0,a.kt)("h2",{id:"self-update"},"self-update"),(0,a.kt)("p",null,"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0441 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u043b\u0438\u0437\u0430 dl \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-n, --no-overwrite")," \u043d\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl self-update\ndl self-update -n\n")),(0,a.kt)("h2",{id:"ps"},"ps"),(0,a.kt)("p",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,a.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u0445\u043e\u0436\u0430 \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps"),", \u043d\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b, \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl ps\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u0432\u043e\u0434\u0430:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"State"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"),(0,a.kt)("th",{parentName:"tr",align:null},"Ports"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aa2b362ea773"),(0,a.kt)("td",{parentName:"tr",align:null},"site.com_php"),(0,a.kt)("td",{parentName:"tr",align:null},"running"),(0,a.kt)("td",{parentName:"tr",align:null},"172.25.0.3"),(0,a.kt)("td",{parentName:"tr",align:null},"80/tcp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bbe79a746fe0"),(0,a.kt)("td",{parentName:"tr",align:null},"site.com_db"),(0,a.kt)("td",{parentName:"tr",align:null},"running"),(0,a.kt)("td",{parentName:"tr",align:null},"172.25.0.2"),(0,a.kt)("td",{parentName:"tr",align:null},"3306/tcp")))),(0,a.kt)("h2",{id:"version"},"version"),(0,a.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dl version\n")))}s.isMDXComponent=!0}}]);