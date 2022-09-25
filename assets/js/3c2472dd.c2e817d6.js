"use strict";(self.webpackChunkdl_docs=self.webpackChunkdl_docs||[]).push([[997],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5862:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={sidebar_position:3},p="Available commands",s={unversionedId:"commands",id:"commands",title:"Available commands",description:"dl",source:"@site/docs/commands.md",sourceDirName:".",slug:"/commands",permalink:"/commands",editUrl:"https://github.com/local-deploy/docs/edit/master/docs/commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/getting-started/env"}},d=[{value:"dl",id:"dl",children:[],level:2},{value:"completion",id:"completion",children:[],level:2},{value:"config",id:"config",children:[],level:2},{value:"config repo",id:"config-repo",children:[],level:2},{value:"env",id:"env",children:[],level:2},{value:"deploy",id:"deploy",children:[],level:2},{value:"up",id:"up",children:[],level:2},{value:"down",id:"down",children:[],level:2},{value:"recreate",id:"recreate",children:[],level:2},{value:"bash",id:"bash",children:[],level:2},{value:"service",id:"service",children:[{value:"service up",id:"service-up",children:[],level:3},{value:"service down",id:"service-down",children:[],level:3},{value:"service recreate",id:"service-recreate",children:[],level:3},{value:"service restart",id:"service-restart",children:[],level:3}],level:2},{value:"self-update",id:"self-update",children:[],level:2},{value:"version",id:"version",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"available-commands"},"Available commands"),(0,r.kt)("h2",{id:"dl"},"dl"),(0,r.kt)("p",null,"Displays a short description and a list of available commands."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl\n")),(0,r.kt)("h2",{id:"completion"},"completion"),(0,r.kt)("p",null,"Displays instructions for enabling auto-completion in the console."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl completion [bash|zsh]\n")),(0,r.kt)("h2",{id:"config"},"config"),(0,r.kt)("p",null,"Application settings."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl config\n")),(0,r.kt)("h2",{id:"config-repo"},"config repo"),(0,r.kt)("p",null,"Menu for setting up the images source repository."),(0,r.kt)("p",null,"The default is the GitHub repository (ghcr.io). If you have problems downloading images, you can switch the source to the RedHat mirror (quay.io)"),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl config repo\n")),(0,r.kt)("h2",{id:"env"},"env"),(0,r.kt)("p",null,"Create or replace the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file. If a ",(0,r.kt)("inlineCode",{parentName:"p"},".env.example")," file exists in the root of the project, it will be used instead of the default file."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl env\n")),(0,r.kt)("h2",{id:"deploy"},"deploy"),(0,r.kt)("p",null,"Downloading files and databases from the server.",(0,r.kt)("br",{parentName:"p"}),"\n","Without specifying the flag, files and the database are downloaded by default.",(0,r.kt)("br",{parentName:"p"}),"\n","If you specify a flag, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"-d"),", only the database will be downloaded."),(0,r.kt)("p",null,"Directories that are loaded by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bitrix CMS: ",(0,r.kt)("inlineCode",{parentName:"li"},"bitrix")),(0,r.kt)("li",{parentName:"ul"},"WordPress: ",(0,r.kt)("inlineCode",{parentName:"li"},"wp-admin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"wp-includes")),(0,r.kt)("li",{parentName:"ul"},"Laravel: only the database is loaded")),(0,r.kt)("p",null,"Available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d, --database")," dump only the database from the server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f, --files")," only download files from server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o, --override")," override boot directories (comma separated values)")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl deploy\ndl deploy -d\ndl deploy -f -o bitrix, upload\n")),(0,r.kt)("h2",{id:"up"},"up"),(0,r.kt)("p",null,"Run the project and place the files of the current directory in the container. When finished, displays the local links to the project.",(0,r.kt)("br",{parentName:"p"}),"\n","Analogue of the command ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl up\n")),(0,r.kt)("h2",{id:"down"},"down"),(0,r.kt)("p",null,"Stop and delete running project containers and the network.",(0,r.kt)("br",{parentName:"p"}),"\n","Analogue of the command ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose down"),"."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl down\n")),(0,r.kt)("h2",{id:"recreate"},"recreate"),(0,r.kt)("p",null,"Stop project containers and restart.",(0,r.kt)("br",{parentName:"p"}),"\n","An alias for sequential execution of ",(0,r.kt)("inlineCode",{parentName:"p"},"dl down && dl up")," commands."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl recreate\n")),(0,r.kt)("h2",{id:"bash"},"bash"),(0,r.kt)("p",null,"Login to PHP container as www-data or root and start bash shell."),(0,r.kt)("p",null,"Available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r, --root")," enter the container as root")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl bash\ndl bash -r\n")),(0,r.kt)("h2",{id:"service"},"service"),(0,r.kt)("p",null,"Management of service containers (portainer, mailcatcher, traefik)."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl service\n")),(0,r.kt)("h3",{id:"service-up"},"service up"),(0,r.kt)("p",null,"Launches the portainer, mailcatcher and traefik containers.",(0,r.kt)("br",{parentName:"p"}),"\n","Valid parameters for the --service flag: ",(0,r.kt)("inlineCode",{parentName:"p"},"portainer"),",",(0,r.kt)("inlineCode",{parentName:"p"}," mail"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik")),(0,r.kt)("p",null,"Available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r, --restart")," restart running containers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s, --service")," start one container")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl service up\ndl service up -r\ndl service up -s portainer\n")),(0,r.kt)("h3",{id:"service-down"},"service down"),(0,r.kt)("p",null,"Stops and removes the portainer, mailcatcher and traefik containers.",(0,r.kt)("br",{parentName:"p"}),"\n","Valid parameters for the --service flag: ",(0,r.kt)("inlineCode",{parentName:"p"},"portainer"),",",(0,r.kt)("inlineCode",{parentName:"p"}," mail"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik")),(0,r.kt)("p",null,"Available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r, --restart")," restart running containers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s, --service")," start one container")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl service down\ndl service down -r\ndl service down -s portainer\n")),(0,r.kt)("h3",{id:"service-recreate"},"service recreate"),(0,r.kt)("p",null,"Stops, removes and restarts the portainer, mailcatcher and traefik containers.",(0,r.kt)("br",{parentName:"p"}),"\n","Valid parameters for the --service flag: ",(0,r.kt)("inlineCode",{parentName:"p"},"portainer"),",",(0,r.kt)("inlineCode",{parentName:"p"}," mail"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik")),(0,r.kt)("p",null,"Available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s, --service")," restart one container")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl service recreate\ndl service recreate -s portainer\n")),(0,r.kt)("h3",{id:"service-restart"},"service restart"),(0,r.kt)("p",null,"Restarts all service containers without deleting.",(0,r.kt)("br",{parentName:"p"}),"\n","Command alias ",(0,r.kt)("inlineCode",{parentName:"p"},"dl service --restart")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl service restart\n")),(0,r.kt)("h2",{id:"self-update"},"self-update"),(0,r.kt)("p",null,"Downloading the latest stable dl release from the repository and updating the application version."),(0,r.kt)("p",null,"Available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-n, --no-overwrite")," do not overwrite config files")),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl self-update\ndl self-update -n\n")),(0,r.kt)("h2",{id:"version"},"version"),(0,r.kt)("p",null,"Display the current version."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dl version\n")))}u.isMDXComponent=!0}}]);