"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4166],{9850:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],o={},p="Manual Peering API methods",s={unversionedId:"apis/manual_peering",id:"apis/manual_peering",isDocsHomePage:!1,title:"Manual Peering API methods",description:"The manual peering APIs allow managing the list of known peers of the node.",source:"@site/external/goshimmer/documentation/docs/apis/manual_peering.md",sourceDirName:"apis",slug:"/apis/manual_peering",permalink:"/goshimmer/apis/manual_peering",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Peering API Methods",permalink:"/goshimmer/apis/autopeering"},next:{title:"Communication Layer APIs",permalink:"/goshimmer/apis/communication"}},d=[{value:"POST <code>/manualpeering/peers</code>",id:"post-manualpeeringpeers",children:[{value:"Request Body",id:"request-body",children:[]},{value:"Response",id:"response",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Client library",id:"client-library",children:[]}]},{value:"GET <code>/manualpeering/peers</code>",id:"get-manualpeeringpeers",children:[{value:"Request Body",id:"request-body-1",children:[]},{value:"Response",id:"response-1",children:[]},{value:"Examples",id:"examples-1",children:[]},{value:"Client library",id:"client-library-1",children:[]}]},{value:"DELETE <code>/manualpeering/peers</code>",id:"delete-manualpeeringpeers",children:[{value:"Request Body",id:"request-body-2",children:[]},{value:"Response",id:"response-2",children:[]},{value:"Examples",id:"examples-2",children:[]},{value:"Client library",id:"client-library-2",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"manual-peering-api-methods"},"Manual Peering API methods"),(0,l.kt)("p",null,"The manual peering APIs allow managing the list of known peers of the node."),(0,l.kt)("p",null,"HTTP APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"POST ",(0,l.kt)("a",{parentName:"li",href:"#post-manualpeeringpeers"},"/manualpeering/peers")),(0,l.kt)("li",{parentName:"ul"},"GET ",(0,l.kt)("a",{parentName:"li",href:"#get-manualpeeringpeers"},"/manualpeering/peers")),(0,l.kt)("li",{parentName:"ul"},"DELETE ",(0,l.kt)("a",{parentName:"li",href:"#delete-manualpeeringpeers"},"/manualpeering/peers"))),(0,l.kt)("p",null,"Client lib APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addmanualpeers"},"AddManualPeers()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getmanualpeers"},"GetManualPeers()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#removemanualpeers"},"RemoveManualPeers()"))),(0,l.kt)("h2",{id:"post-manualpeeringpeers"},"POST ",(0,l.kt)("inlineCode",{parentName:"h2"},"/manualpeering/peers")),(0,l.kt)("p",null,"Add peers to the list of known peers of the node."),(0,l.kt)("h3",{id:"request-body"},"Request Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3",\n    "address": "127.0.0.1:14666"\n  }\n]\n')),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Public key of the peer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IP address of the peer's node and its gossip port.")))),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"HTTP status code: 204 No Content"),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"curl"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/manualpeering/peers\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'[\n    {\n        "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3",\n        "address": "172.19.0.3:14666"\n    }\n]\'\n')),(0,l.kt)("h3",{id:"client-library"},"Client library"),(0,l.kt)("h4",{id:"addmanualpeers"},(0,l.kt)("inlineCode",{parentName:"h4"},"AddManualPeers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/goshimmer/packages/manualpeering"\n\npeersToAdd := []*manualpeering.KnownPeerToAdd{{PublicKey: publicKey, Address: address}}\nerr := goshimAPI.AddManualPeers(peersToAdd)\nif err != nil {\n// return error\n}\n')),(0,l.kt)("h2",{id:"get-manualpeeringpeers"},"GET ",(0,l.kt)("inlineCode",{parentName:"h2"},"/manualpeering/peers")),(0,l.kt)("p",null,"Get the list of all known peers of the node."),(0,l.kt)("h3",{id:"request-body-1"},"Request Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "onlyConnected": true\n}\n')),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"onlyConnected")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Optional, if set to true only peers with established connection will be returned.")))),(0,l.kt)("h3",{id:"response-1"},"Response"),(0,l.kt)("p",null,"HTTP status code: 200 OK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3",\n    "address": "127.0.0.1:14666",\n    "connectionDirection": "inbound",\n    "connectionStatus": "connected"\n  }\n]\n')),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The public key of the peer node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IP address of the peer's node and its gossip port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"connectionDirection")),(0,l.kt)("td",{parentName:"tr",align:"left"},'Enum, possible values: "inbound", "outbound". Inbound means that the local node accepts the connection. On the other side, the other peer node dials, and it will have "outbound" connectionDirection.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"connectionStatus")),(0,l.kt)("td",{parentName:"tr",align:"left"},'Enum, possible values: "disconnected", "connected". Whether the actual TCP connection has been established between peers.')))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("h4",{id:"curl-1"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'http://localhost:8080/manualpeering/peers' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"onlyConnected\": true\n}'\n")),(0,l.kt)("h3",{id:"client-library-1"},"Client library"),(0,l.kt)("h4",{id:"getmanualpeers"},(0,l.kt)("inlineCode",{parentName:"h4"},"GetManualPeers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/goshimmer/packages/manualpeering"\n\npeers, err := goshimAPI.GetManualPeers(manualpeering.WithOnlyConnectedPeers())\nif err != nil {\n// return error\n}\nfmt.Println(peers)\n')),(0,l.kt)("h2",{id:"delete-manualpeeringpeers"},"DELETE ",(0,l.kt)("inlineCode",{parentName:"h2"},"/manualpeering/peers")),(0,l.kt)("p",null,"Remove peers from the list of known peers of the node."),(0,l.kt)("h3",{id:"request-body-2"},"Request Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "publicKey": "CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3"\n  }\n]\n')),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Public key of the peer to remove from the list.")))),(0,l.kt)("h3",{id:"response-2"},"Response"),(0,l.kt)("p",null,"HTTP status code: 204 No Content"),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("h4",{id:"curl-2"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'http://localhost:8080/manualpeering/peers' \\\n--header 'Content-Type: application/json' \\\n--data-raw '[\n    {\n        \"publicKey\": \"8qN1yD95fhbfDZtKX49RYFEXqej5fvsXJ2NPmF1LCqbd\"\n    }\n]'\n")),(0,l.kt)("h3",{id:"client-library-2"},"Client library"),(0,l.kt)("h4",{id:"removemanualpeers"},(0,l.kt)("inlineCode",{parentName:"h4"},"RemoveManualPeers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/hive.go/crypto/ed25519"\nimport "github.com/iotaledger/goshimmer/packages/manualpeering"\n\npublicKeysToRemove := []ed25519.PublicKey{publicKey1, publicKey2}\nerr := goshimAPI.RemoveManualPeers(publicKeysToRemove)\nif err != nil {\n// return error\n}\n')))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);