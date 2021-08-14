"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4195,9514],{15502:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},26266:function(e,t,n){var a=n(67294),r=n(15502);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},7148:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(67294),r=n(65856),l=n(6832),i=n(22122),o=n(5977),c=n(86010),s=n(51402),u=n(26266),m=[{title:"Learn",link:"docs/learn/about-iota/an-introduction-to-iota",description:a.createElement(a.Fragment,null,"Why IOTA? Basics to deeper topics: Learn about the tangle, industry applications and networks.")},{title:"Use",link:"docs/use/use-cases/industry-applications",description:a.createElement(a.Fragment,null,"Learn about IOTAs solutions and how they can be applied in the real world.")},{title:"Develop",link:"docs/develop/getting-started/architecture",description:a.createElement(a.Fragment,null,"Follow our tutorials and documentation to build your own projects. IOTA supports Rust, C, Go, Java, and Python.")}];function d(e){var t=e.title,n=e.link,r=e.description,l=(0,a.useState)(!1),i=l[0],s=l[1],u=(0,o.k6)();return a.createElement("div",{className:"col col--4 margin-vert--md"},a.createElement("div",{className:"action padding--lg",onClick:function(e){e.preventDefault(),u.push(n)},onMouseOver:function(){return s(!0)},onMouseOut:function(){return s(!1)}},a.createElement("div",{className:"action__header"},a.createElement("span",{className:"action__title"},t),a.createElement("div",{href:n,className:"action__button"},a.createElement("span",{className:"action__icon material-icons"},"navigate_next"))),a.createElement("div",{className:(0,c.Z)("headline-stick",{"size-m":i,"size-s":!i})}),a.createElement("div",{className:"action__description"},r)))}var v=function(){var e=(0,l.Z)().siteConfig,t=(0,u.Z)().isDarkTheme;return a.createElement("header",{className:"header padding-vert--xl"},a.createElement("div",{className:"title margin-horiz--sm"},a.createElement("img",{className:"title__image",src:t?(0,s.Z)("/img/globe_dark.svg"):(0,s.Z)("/img/globe_light.svg")}),a.createElement("div",null,a.createElement("h1",{className:"title__text"},e.title),a.createElement("span",{className:"title__subtext grey"},e.tagline))),a.createElement("div",{className:"margin-top--xl"},a.createElement("div",{className:"section-header text--center margin-bottom--sm"},"Get started, right away"),a.createElement("div",{className:"actionlist row"},m.map((function(e,t){return a.createElement(d,(0,i.Z)({key:t},e))})))))};function f(){var e=(0,l.Z)().siteConfig;return a.createElement(r.Z,{title:""+e.title,description:""+e.tagline},a.createElement(v,null))}},91148:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(22122),r=n(19756),l=n(67294),i=n(86010),o=n(51384),c=n(63382),s=n(51402),u=n(34455),m="socialBar_2nY3",d="socialLink_1As6",v="socialImage_2plZ",f="socialTitle_3JEm",g=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"#18243C"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#24314A"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#303C56"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#3B4862"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#47546F"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#52607B"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#5E6B87"}];function b(e){var t=e.title,n=e.imageUrl,a=e.url,r=e.backgroundColor;return l.createElement("a",{className:(0,i.Z)("padding-horiz--sm padding-vert--md",d),style:{backgroundColor:r},href:a},l.createElement("img",{className:(0,i.Z)(v),src:(0,s.Z)(n)}),l.createElement("div",{className:(0,i.Z)(f)},t))}var h=function(){return l.createElement("div",{className:(0,i.Z)(m)},g.map((function(e,t){return l.createElement(b,(0,a.Z)({key:t},e))})))},p=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,n=e.href,i=e.label,c=e.prependBaseUrlToHref,u=(0,r.Z)(e,p),m=(0,s.Z)(t),d=(0,s.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?d:n}:{to:m},u),i)}var _=function(e){var t=e.sources,n=e.alt;return l.createElement(u.Z,{className:"footer__logo",alt:n,sources:t})};var k=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,d={light:(0,s.Z)(m.src),dark:(0,s.Z)(m.srcDark||m.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,i.Z)("footer","padding--none","padding-top--xl",{"footer--dark":"dark"===e.style})},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(E,e))}))):null)}))),(m||n)&&l.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},m&&(m.src||m.srcDark)&&l.createElement("div",null,m.href?l.createElement(o.Z,{href:m.href},l.createElement(_,{alt:m.alt,sources:d})):l.createElement(_,{alt:m.alt,sources:d})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null),l.createElement(h,null))):null}},65660:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(22122),r=n(67294),l=n(86010),i=n(54416),o=n(78239),c=n(63382),s=n(6832),u={toggle:"toggle_3D-N"},m=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,l.Z)(u.toggle,u.dark),style:n},t)},d=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,l.Z)(u.toggle,u.light),style:n},t)},v=(0,r.memo)((function(e){var t=e.className,n=e.icons,a=e.checked,i=e.disabled,o=e.onChange,c=(0,r.useState)(a),s=c[0],u=c[1],m=(0,r.useState)(!1),d=m[0],v=m[1],f=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(e){var t=f.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("input",{ref:f,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:o,onFocus:function(){return v(!0)},onBlur:function(){return v(!1)}}))}));function f(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,i=t.lightIcon,o=t.lightIconStyle,u=(0,s.Z)().isClient;return r.createElement(v,(0,a.Z)({disabled:!u,icons:{checked:r.createElement(m,{icon:n,style:l}),unchecked:r.createElement(d,{icon:i,style:o})}},e))}var g=n(26266),b=n(98565),h=n(74909),p=n(27213),E=n(85275),_=n(90974),k=n(3089),Z="toggle_2xs0",N="navbarHideable_1VR7",w="navbarHidden_1FmO",y="right";function C(){return(0,c.LU)().navbar.items}function I(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,g.Z)(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function D(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,h.Z)(t);var o=C(),s=I(),u=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),i=(0,c.D9)(l),o=(0,r.useState)((function(){return!1})),s=o[0],u=o[1];(0,r.useEffect)((function(){l&&!i&&u(!0)}),[l,i]);var m=!!l;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(f,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(E.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var x=function(){var e,t,n,i,s,u,m,d=(0,c.LU)().navbar,v=d.hideOnScroll,g=d.style,h=(t=(0,p.Z)(),n="mobile"===t,i=(0,r.useState)(!1),s=i[0],u=i[1],m=(0,r.useCallback)((function(){u((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&u(!1)}),[t]),{shouldRender:n,toggle:m,shown:s}),x=I(),S=(0,b.Z)(v),L=S.navbarRef,B=S.isNavbarVisible,A=C(),U=A.some((function(e){return"search"===e.type})),T=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:y)}))}}(A),R=T.leftItems,V=T.rightItems;return r.createElement("nav",{ref:L,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===g,"navbar--primary":"primary"===g,"navbar-sidebar--show":h.shown},e[N]=v,e[w]=v&&!B,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),R.map((function(e,t){return r.createElement(E.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},V.map((function(e,t){return r.createElement(E.Z,(0,a.Z)({},e,{key:t}))})),!U&&r.createElement(o.Z,null),!x.disabled&&r.createElement(f,{className:Z,checked:x.isDarkTheme,onChange:x.toggle}),(null==A?void 0:A.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:h.toggle,onKeyDown:h.toggle},r.createElement(k.Z,null)))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:h.toggle}),h.shouldRender&&r.createElement(D,{sidebarShown:h.shown,toggleSidebar:h.toggle}))}},78358:function(e,t,n){n.d(t,{O:function(){return g}});var a=n(22122),r=n(19756),l=n(67294),i=n(86010),o=n(51384),c=n(51402),s=n(78168),u=n(71699),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],v=["className","isDropdownItem"],f=["mobile","position"];function g(e){var t=e.activeBasePath,n=e.activeBaseRegex,i=e.to,d=e.href,v=e.label,f=e.activeClassName,g=void 0===f?"navbar__link--active":f,b=e.prependBaseUrlToHref,h=(0,r.Z)(e,m),p=(0,c.Z)(i),E=(0,c.Z)(t),_=(0,c.Z)(d,{forcePrependBaseUrl:!0}),k=v&&d&&!(0,u.Z)(d),Z="dropdown__link--active"===g;return l.createElement(o.Z,(0,a.Z)({},d?{href:b?_:d}:Object.assign({isNavLink:!0,activeClassName:g,to:p},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(E)}}:null),h),k?l.createElement("span",null,v,l.createElement(s.Z,Z&&{width:12,height:12})):v)}function b(e){var t=e.className,n=e.isDropdownItem,o=void 0!==n&&n,c=(0,r.Z)(e,d),s=l.createElement(g,(0,a.Z)({className:(0,i.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},c));return o?l.createElement("li",null,s):s}function h(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,v));return l.createElement("li",{className:"menu__list-item"},l.createElement(g,(0,a.Z)({className:(0,i.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.position,(0,r.Z)(e,f)),i=n?h:b;return l.createElement(i,a)}},16679:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),l=n(67294),i=n(78358),o=n(57617),c=n(86010),s=n(63382),u=n(79861),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,v=e.label,f=e.docsPluginId,g=(0,r.Z)(e,m),b=(0,o.useActiveDocContext)(f),h=b.activeVersion,p=b.activeDoc,E=(0,s.J)(f).preferredVersion,_=(0,o.useLatestVersion)(f),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,u.uniq)([h,E,_].filter(Boolean)),n);return l.createElement(i.Z,(0,a.Z)({exact:!0},g,{className:(0,c.Z)(g.className,(t={},t[d]=p&&p.sidebar===k.sidebar,t)),label:null!=v?v:k.id,to:k.path}))}},68510:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),l=n(67294),i=n(78358),o=n(61142),c=n(57617),s=n(63382),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,v=e.docsPluginId,f=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,h=(0,r.Z)(e,u),p=(0,c.useActiveDocContext)(v),E=(0,c.useVersions)(v),_=(0,c.useLatestVersion)(v),k=(0,s.J)(v),Z=k.preferredVersion,N=k.savePreferredVersionName;var w,y=(w=E.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){N(e.name)}}})),[].concat(g,w,b)),C=null!=(t=null!=(n=p.activeVersion)?n:Z)?t:_,I=d&&y?"Versions":C.label,D=d&&y?void 0:m(C).path;return y.length<=1?l.createElement(i.Z,(0,a.Z)({},h,{mobile:d,label:I,to:D,isActive:f?function(){return!1}:void 0})):l.createElement(o.Z,(0,a.Z)({},h,{mobile:d,label:I,to:D,items:y,isActive:f?function(){return!1}:void 0}))}},18384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(22122),r=n(19756),l=n(67294),i=n(78358),o=n(57617),c=n(63382),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),v=(0,o.useActiveVersion)(m),f=(0,c.J)(m).preferredVersion,g=(0,o.useLatestVersion)(m),b=null!=(t=null!=v?v:f)?t:g,h=null!=n?n:b.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return l.createElement(i.Z,(0,a.Z)({},d,{label:h,to:p}))}},61142:function(e,t,n){var a=n(22122),r=n(19756),l=n(67294),i=n(86010),o=n(63382),c=n(78358),s=n(85275),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function v(e,t){return!!(0,o.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function f(e){var t,n=e.items,m=e.position,d=e.className,f=(0,r.Z)(e,u),g=(0,l.useRef)(null),b=(0,l.useRef)(null),h=(0,l.useState)(!1),p=h[0],E=h[1],_=function(e,t,n){var a=t.filter((function(e){return v(e,(0,o.be)())})),r=e;return a.length&&(r=Object.assign({},a[0],{label:e.label+" > "+a[0].label})),r}(f,n,(0,o.be)());return console.log(typeof _),(0,l.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),l.createElement("div",{ref:g,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===m,"dropdown--show":p})},l.createElement(c.O,(0,a.Z)({className:(0,i.Z)("navbar__item navbar__link",d)},_,{onClick:f.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),E(!p))}}),null!=(t=f.children)?t:f.label),l.createElement("ul",{ref:b,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),E(!1);var a=g.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function g(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),f=(0,o.be)(),g=function(e,t){return e.some((function(e){return v(e,t)}))}(n,f),b=(0,o.uR)({initialState:function(){return!g}}),h=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,l.useEffect)((function(){g&&E(!g)}),[f,g]),l.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":h})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),l.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),i=n?g:f;return l.createElement(i,a)}},85275:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(19756),r=n(67294),l=n(78358),i=n(61142),o=n(22122),c=n(4194),s=n(6832),u=n(63382),m=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function d(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,d=(0,a.Z)(e,m),v=(0,s.Z)().i18n,f=v.currentLocale,g=v.locales,b=v.localeConfigs,h=(0,u.l5)();function p(e){return b[e].label}var E=g.map((function(e){var t="pathname://"+h.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===f?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(n,E,l),k=t?"Languages":p(f);return r.createElement(i.Z,(0,o.Z)({},d,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(c.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,k)),items:_}))}var v=n(78239);function f(e){return e.mobile?null:r.createElement(v.Z,null)}var g=["type"],b={default:function(){return l.Z},localeDropdown:function(){return d},search:function(){return f},dropdown:function(){return i.Z},docsVersion:function(){return n(18384).Z},docsVersionDropdown:function(){return n(68510).Z},doc:function(){return n(16679).Z}};function h(e){var t=e.type,n=(0,a.Z)(e,g),l=function(e){var t=b[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(l,n)}},78239:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(63382),l=n(86010),i="toggle_10iL",o=(0,a.memo)((function(){var e=(0,r.LU)().searchMode.switchConfig,t=e.closeIcon,n=e.closeIconStyle,o=e.searchIcon,c=e.searchIconStyle,s=(0,a.useState)(!1),u=s[0],m=s[1],d=(0,a.useRef)(null),v=function(e){var t=d.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)};return a.createElement(a.Fragment,null,a.createElement("div",{className:(0,l.Z)("wiki-search",{"wiki-search--checked":u}),role:"button",tabIndex:-1,onClick:v},a.createElement("div",{className:"wiki-search-opened"},a.createElement("span",{className:(0,l.Z)(i),style:n},t)),a.createElement("div",{className:"wiki-search-closed"},a.createElement("span",{className:(0,l.Z)(i),style:c},o)),a.createElement("input",{ref:d,checked:u,type:"checkbox",className:"wiki-search-screenreader-only","aria-label":"Open and close search",onChange:v})),a.createElement("div",{className:(0,l.Z)("wiki-search-page",{"wiki-search-page--checked":u})},a.createElement("div",{className:"wiki-search-header"}),a.createElement("div",{className:"wiki-search-main"},a.createElement("div",{className:"wiki-search-bar"},a.createElement("div",{className:"wiki-search-logo"},a.createElement("span",{className:(0,l.Z)(i),style:c},o)),a.createElement("input",{className:"wiki-search-input",type:"text"})))))}))}}]);