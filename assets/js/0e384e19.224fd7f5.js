"use strict";(self.webpackChunkdl_docs=self.webpackChunkdl_docs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(k,a(a({ref:t},s),{},{components:r})):n.createElement(k,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Deploy Local \u2014 is a command line interface designed to help developers quickly deploy projects to their local machine.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/intro",draft:!1,editUrl:"https://github.com/local-deploy/docs/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/getting-started/install"}},u={},c=[{value:"Features",id:"features",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Contributing",id:"contributing",level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Deploy Local \u2014 is a command line interface designed to help developers quickly deploy projects to their local machine."),(0,o.kt)("p",null,"DL is a wrapper on top of Docker and docker-compose, no additional software or libraries are required to install."),(0,o.kt)("p",null,"Supported OS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux (debian, ubuntu, linux mint, etc)"),(0,o.kt)("li",{parentName:"ul"},"macOS (beta)")),(0,o.kt)("p",null,"Supported architectures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x64"),(0,o.kt)("li",{parentName:"ul"},"arm64")),(0,o.kt)("p",null,"Supported frameworks and CMS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bitrix"),(0,o.kt)("li",{parentName:"ul"},"Laravel"),(0,o.kt)("li",{parentName:"ul"},"WordPress")),(0,o.kt)("p",null,"Supported SHELL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"bash"),(0,o.kt)("li",{parentName:"ul"},"zsh")),(0,o.kt)("p",null,"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"docker"),(0,o.kt)("li",{parentName:"ul"},"docker-compose v2")),(0,o.kt)("p",null,"The docker compose (as plugin) supported"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for PHP versions (apache and php-fpm) 7.3, 7.4, 8.0, 8.1"),(0,o.kt)("li",{parentName:"ul"},"Support for MySQL versions 5.7, 8.0"),(0,o.kt)("li",{parentName:"ul"},"Downloading the database and files from the production server"),(0,o.kt)("li",{parentName:"ul"},"Redis"),(0,o.kt)("li",{parentName:"ul"},"Memcached"),(0,o.kt)("li",{parentName:"ul"},"Nginx"),(0,o.kt)("li",{parentName:"ul"},"Cross-platform"),(0,o.kt)("li",{parentName:"ul"},"Interception of mail sent via php"),(0,o.kt)("li",{parentName:"ul"},"Portainer - docker container management system"),(0,o.kt)("li",{parentName:"ul"},"Does not require root access"),(0,o.kt)("li",{parentName:"ul"},"Accessing sites from the browser via ",(0,o.kt)("inlineCode",{parentName:"li"},".localhost")," or",(0,o.kt)("inlineCode",{parentName:"li"}," .nip.io")),(0,o.kt)("li",{parentName:"ul"},"Ability to add custom docker-compose.yaml files to DL configuration")),(0,o.kt)("h2",{id:"how-it-works"},"How it works?"),(0,o.kt)("p",null,"After installing the utility, 3 service docker containers will be launched on your computer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Traefik (proxy server for interacting with installed projects)"),(0,o.kt)("li",{parentName:"ul"},"Mailhog (lightweight service for intercepting emails sent from a local site)"),(0,o.kt)("li",{parentName:"ul"},"and Portainer (a web interface for working with Docker)")),(0,o.kt)("p",null,"Sites that you run through DL are in their own virtual network, you can run several projects at the same time, each will have its own URL.\nWhen the project starts, all the source code (in the directory where DL is launched) is mounted in a docker container, which allows you to edit the code and immediately test the functionality in the browser."),(0,o.kt)("p",null,"Using the variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, you can set the necessary settings that are required for a specific project, as well as add or completely override the launched images to your own. For ease of launch (and modification) the file ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," is used."),(0,o.kt)("h2",{id:"licensing"},"Licensing"),(0,o.kt)("p",null,"All source code is distributed under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/local-deploy/dl/blob/master/LICENSE"},"MIT")," license."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Please make sure the following is done when submitting your Pull Request:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork the repository and create your own branch from master."),(0,o.kt)("li",{parentName:"ul"},"Be sure to test your changes!"),(0,o.kt)("li",{parentName:"ul"},"Make sure your code is in accordance with generally accepted standards.")))}p.isMDXComponent=!0}}]);