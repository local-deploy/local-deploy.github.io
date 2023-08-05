"use strict";(self.webpackChunkdl_docs=self.webpackChunkdl_docs||[]).push([[360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5,sidebar_label:"Troubleshooting"},a="Troubleshooting",s={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"debug flag",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/local-deploy/docs/edit/master/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Available commands",permalink:"/commands"}},l={},p=[{value:"debug flag",id:"debug-flag",level:2},{value:"mysqldump error",id:"mysqldump-error",level:2},{value:"Error determining hash in known_hosts",id:"error-determining-hash-in-known_hosts",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Safari",id:"safari",level:3},{value:"Docker Desktop",id:"docker-desktop",level:3}],u={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"debug-flag"},"debug flag"),(0,o.kt)("p",null,"For any errors or malfunctions, run the command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug")," flag. The flag enables debugging mode, in which debugging information is output to the terminal."),(0,o.kt)("h2",{id:"mysqldump-error"},"mysqldump error"),(0,o.kt)("p",null,"When deploying the database, an error may be displayed: ",(0,o.kt)("inlineCode",{parentName:"p"},"Table 'db.some_table' doesn't exist"),"."),(0,o.kt)("p",null,"Try running the mysqldump command in the console manually. If the screen shows an error like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"mysqldump: Couldn't execute 'SELECT COLUMN_NAME, ..... \n    FROM information_schema.COLUMN_STATISTICS .... : \n    Unknown table 'COLUMN_STATISTICS' in information_schema (1109)\n")),(0,o.kt)("p",null,"So you have incorrectly set the MySQL version in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. The local version and the version on the server must match.",(0,o.kt)("br",{parentName:"p"}),"\n","The problem is solved by the additional parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--column-statistics=0"),", which is automatically set when dumping if the version of mysql is 8.0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The full command that dl executes on the server can be seen in debug mode.")),(0,o.kt)("h2",{id:"error-determining-hash-in-known_hosts"},"Error determining hash in known_hosts"),(0,o.kt)("p",null,"Sometimes you may get an error when running the ",(0,o.kt)("inlineCode",{parentName:"p"},"dl deploy")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ssh: handshake failed: knownhosts: key mismatch\n")),(0,o.kt)("p",null,"The error notifies that the server key is present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/known_hosts")," file, but the hash on the server name does not match the one specified in your ",(0,o.kt)("inlineCode",{parentName:"p"},"SERVER")," variable."),(0,o.kt)("p",null,"For example, when accessing the server via ssh, you specify the domain (",(0,o.kt)("inlineCode",{parentName:"p"},"ssh user@site.com"),"), and in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SERVER")," variable, you specify the IP address. In this case, the SSH client sees the same key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/known_hosts")," file, but with a completely different domain hash."),(0,o.kt)("p",null,"Try to access the server via ssh manually, with the same access that you specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, the system should give an error and prompt you to delete the extra line."),(0,o.kt)("p",null,"The cardinal solution to the problem, if all else fails: delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/known_hosts")," file."),(0,o.kt)("h2",{id:"known-issues"},"Known Issues"),(0,o.kt)("h3",{id:"safari"},"Safari"),(0,o.kt)("p",null,"On MacOS, Safari does not recognize the ",(0,o.kt)("inlineCode",{parentName:"p"},".localhost")," domain"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},".nip.io")," domain to open the project. Other browsers don't have this problem."),(0,o.kt)("h3",{id:"docker-desktop"},"Docker Desktop"),(0,o.kt)("p",null,"On some Linux distributions, there may be an issue with service containers if Docker is installed on the Desktop edition. Now there is no solution to the problem. The only way out is to uninstall Desktop and install the Engine version.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install"},"Install Docker Engine")))}h.isMDXComponent=!0}}]);