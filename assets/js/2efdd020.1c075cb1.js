"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4248],{24771:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],s={},c=void 0,l={unversionedId:"in_progress/todo/deploy",id:"in_progress/todo/deploy",isDocsHomePage:!1,title:"deploy",description:"Obsolete. To be adjusted to the new version",source:"@site/external/wasp/documentation/docs/in_progress/todo/deploy.md",sourceDirName:"in_progress/todo",slug:"/in_progress/todo/deploy",permalink:"/wasp/in_progress/todo/deploy",version:"current",frontMatter:{}},m=[{value:"The committee",id:"the-committee",children:[{value:"Selecting the committee",id:"selecting-the-committee",children:[]}]},{value:"Deploying a smart contract",id:"deploying-a-smart-contract",children:[]},{value:"Deploy a new instance of <em>DonateWithFeedback</em>",id:"deploy-a-new-instance-of-donatewithfeedback",children:[]},{value:"Deployment process in detail",id:"deployment-process-in-detail",children:[{value:"The owner",id:"the-owner",children:[]},{value:"DKG and the origin transaction",id:"dkg-and-the-origin-transaction",children:[]}]}],h={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Obsolete. To be adjusted to the new version")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"committees-and-deployment-of-the-smart-contract"},"Committees and deployment of the smart contract"),(0,r.kt)("h2",{id:"the-committee"},"The committee"),(0,r.kt)("p",null,"Smart contract instance is a ",(0,r.kt)("em",{parentName:"p"},"dApp"),", a distributed application or program.\nIt is run by a distributed network of Wasp nodes called the ",(0,r.kt)("em",{parentName:"p"},"committee"),".\nA committee, small or big, is behind every smart contract. "),(0,r.kt)("p",null,"Network locations of the committee nodes are usually not a public information.\nThe reason is to protect the committee node from DDoS and similar attacks.\nIn the dashboards of ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," and other PoC smart contracts we display it for demo purposes. "),(0,r.kt)("p",null,"For example, it shows the ",(0,r.kt)("a",{parentName:"p",href:"http://waspdev01.iota.cafe:10000/dwf"},"instance")," of ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback"),"\nis deployed on 5 nodes, ",(0,r.kt)("em",{parentName:"p"},"TokenRegistry")," on 10 and ",(0,r.kt)("em",{parentName:"p"},"FairAuction")," on 15.\nThe committees of those 3 instances overlap. Any Wasp node can participate in many committees\nof many smart contracts."),(0,r.kt)("p",null,"You may think a committee is a distributed processor which runs the smart contract program. "),(0,r.kt)("p",null,"The committee is specific for each SC instance, depending on how SC is ",(0,r.kt)("em",{parentName:"p"},"deployed"),".\nIt may be as small as 2 nodes, or it may have hundreds of nodes. "),(0,r.kt)("p",null,"The committee nodes run the program under the ",(0,r.kt)("em",{parentName:"p"},"distributed consensus"),".\nIn the ISCP each committee has specific number less or equal to the size of the committee called ",(0,r.kt)("em",{parentName:"p"},"quorum")," or\n",(0,r.kt)("em",{parentName:"p"},"quorum factor"),".  The ",(0,r.kt)("em",{parentName:"p"},"quorum")," is always strictly larger than the half of the size of the committee.\nVery often the quorum is equal to 2/3 plus one node."),(0,r.kt)("p",null,"The consensus guarantees that for each computed state update at least the ",(0,r.kt)("em",{parentName:"p"},"quorum")," of any committee nodes\nhave 100% agreement on the computation result.\nThe ",(0,r.kt)("em",{parentName:"p"},"state transition")," can occur only if the condition above is satisfied. "),(0,r.kt)("p",null,"For example, for the demo deployment of ",(0,r.kt)("em",{parentName:"p"},"FairAuction")," smart contract the quorum factor is set to 8.\nIt means at least 8 out of 15 nodes must produce and sign with their private keys bit-by-bit equal computation\nresults for that result to be accepted as a valid smart contract state update. "),(0,r.kt)("p",null,"After the quorum agrees on the result, the opinion of the rest of nodes is unimportant:\nthose nodes may be down, faulty or malicious.\nThe quorum already has consensus on which requests to process and in which order, to where and\nhow to move tokens and update the values of the smart contract state. The quorum agrees on the same view to many things,\nlike the UTXO ledger, which one committee node is a leader for the round, what is the timestamp consistent\nwith the local clocks of each node and which node will receive rewards (if the smart contract instance requires fees)."),(0,r.kt)("p",null,"After the committee runs the program to process the request to the smart contract, it comes to\nthe consensus on the result and posts the result transaction to the Tangle."),(0,r.kt)("p",null,"In order to fake the result, for example to steal iotas (to move them to the attacker\u2019s address), at least\na quorum of committee nodes must be corrupted. It is not feasible in most practical use cases with\ncommittee size and quorum large enough."),(0,r.kt)("h3",{id:"selecting-the-committee"},"Selecting the committee"),(0,r.kt)("p",null,"The committee is crucial for the security of the smart contract. "),(0,r.kt)("p",null,"The topic of committee formation is very broad, and we do not intend to cover it all here."),(0,r.kt)("p",null,"The policies and protocol for committee selection may be centralized or it may be based on\npermissionless participation of nodes in an open market of nodes."),(0,r.kt)("p",null,"Centralized selection of committee nodes is common for corporate setting or in the consortium (in latter case\nit actually will essentially be decentralized)."),(0,r.kt)("p",null,"Committee may be selected in the open market where everyone participates in the parmissionless manner.\nIn this case nodes may be selected (by whoever is forming the committee) based on committment of the node\nowners to SLA and other criteria. Trust to such a committee will be ensured by requiring stakes from the committee\nnodes and setting up automatic punishment, including complete slashing of the stake,\nfor not complying to SLA and other misbehavior.    "),(0,r.kt)("p",null,"Note that at this stage we intentionally leave the committee selection policies and protocols outside of the\nISCP itself because we want variety here. It is an important scope of further development of ISCP. "),(0,r.kt)("h2",{id:"deploying-a-smart-contract"},"Deploying a smart contract"),(0,r.kt)("p",null,"Let's say we have committee nodes already selected (see above). "),(0,r.kt)("p",null,"We have to provide the following input to the deployment process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"program hash")," (see on program hash ",(0,r.kt)("a",{parentName:"li",href:"/wasp/in_progress/todo/dwf"},"here"),"), which points to the program binary  "),(0,r.kt)("li",{parentName:"ul"},"the sorted list of committee nodes")),(0,r.kt)("h2",{id:"deploy-a-new-instance-of-donatewithfeedback"},"Deploy a new instance of ",(0,r.kt)("em",{parentName:"h2"},"DonateWithFeedback")),(0,r.kt)("p",null,"We will deploy ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," program. "),(0,r.kt)("p",null,"For the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," the program hash is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"5ydEfDeAJZX6dh6Fy7tMoHcDeh42gENeqVDASGWuD64X"),".\nIt points to the code statically linked with the Wasp node.\nIn the particular case of PoC smart contracts the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," knows and derives the program hash from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dwf")," keyword\nin the command line.  "),(0,r.kt)("p",null,"The list of committee nodes must be listed in the respective ",(0,r.kt)("inlineCode",{parentName:"p"},"dwf")," section of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli.json"),", in the current directory.\nDownload example of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," via link in the demo dashboard."),(0,r.kt)("p",null,"The balance of the wallet must have at least 2 iotas in order to deploy smart contract. One of these iotas will be\nminted (colored) to a new non-fungible token transferred to the smart contract address.\nIt will remain there for its lifetime. Another iota will be returned back to the owner's balance after\nSC instance will be fully intialized."),(0,r.kt)("p",null,"The following command will deploy an instance of ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract on the committee\nspecified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli.json"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli dwf admin deploy")," "),(0,r.kt)("p",null,"If successful, the program will print the address of the newly deployed instance among other things.\nFrom now on anyone can send ",(0,r.kt)("inlineCode",{parentName:"p"},"donate")," requests to that address. "),(0,r.kt)("h2",{id:"deployment-process-in-detail"},"Deployment process in detail"),(0,r.kt)("h3",{id:"the-owner"},"The owner"),(0,r.kt)("p",null,"The initiator of the deployment process is the owner of the wallet (the private key) and hence the tokens in the\nwallet's address. The owner of the wallet becomes the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner of the SC")," as it performs the deployment\nusing his/her wallet.\nThis ensures that for the smart contract the owner is authenticated and therefore known. "),(0,r.kt)("p",null,"The owner address of the SC becomes a privileged user of the smart contract.\nIt is the only address which can send ",(0,r.kt)("em",{parentName:"p"},"protected requests")," to the smart contract.\nFor the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract, the SC owner is the only one who can withdraw\niotas from its account by sending ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," request. Requests send by any other sender will have no effect."),(0,r.kt)("p",null,"Note that an owner in general doesn't ",(0,r.kt)("em",{parentName:"p"},"own")," anything which belongs to SC account.\nIt is just a privileged user, recognized as such at the base protocol.\nThe smart contract program may or may not treat it as privileged, depending on its algorithms.\nOwnership of the smart contract can be transferred (this feature not implemented yet in PoC).     "),(0,r.kt)("h3",{id:"dkg-and-the-origin-transaction"},"DKG and the origin transaction"),(0,r.kt)("p",null,"Deployment of the smart contract consists of two main steps: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"distributed key generation")," (DKG) "),(0,r.kt)("li",{parentName:"ul"},"creating the ",(0,r.kt)("em",{parentName:"li"},"origin transaction"),".")),(0,r.kt)("h4",{id:"dkg"},"DKG"),(0,r.kt)("p",null,"The purpose of the DKG is to generate a set of private keys among committee nodes in a distributed and secure manner.\nThe process is triggered by the owner of the smart contract during deployment and then it is\nperformed between committee nodes, in a distributed and leaderless manner. "),(0,r.kt)("p",null,"The result is a set of private keys,\nthe master public key and the smart contract address, controlled by the quorum of private keys\n(partial keys or key shares). "),(0,r.kt)("p",null,"The quorum parameter T is an input parameter of the DKG process. The private keys are stored in each node's registry.\nIn the future we plan to use hardware instances with IOTA Stronghold in it."),(0,r.kt)("p",null,"The base scenario of DKG is a completely decentralized one.\nIt results in private keys only known by the committee nodes."),(0,r.kt)("p",null,"However, in many practical situations it may be needed for example to have possibility make backup copies\nof critical data or even take certain decisions on behalf of the committee\n(like move the SC instance to another committee). These situations may be common when we use\ncentralized consensus on the committee during deployment.  "),(0,r.kt)("p",null,"In these alternative situations DKG process may provide master private key or even backup of\nall private keys to the owner of the SC instance in secure manner.\nIn any case, these settings are parameters of the protocol known to each Wasp node which is\nparticipating in DKG, so private keys can only be shared with the consensus of all nodes.  "),(0,r.kt)("h4",{id:"the-origin-transaction-color-of-the-smart-contract"},"The ",(0,r.kt)("em",{parentName:"h4"},"origin transaction"),". Color of the smart contract"),(0,r.kt)("p",null,"After the private keys and the smart contract address are generated and stored by the committee nodes,\nthe ",(0,r.kt)("em",{parentName:"p"},"origin transaction")," of the smart contract must be created on the Tangle. "),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"origin transaction")," is a value transaction with certain data payload (a smart contract transaction)\nsigned by the owner of the smart contract with its private key. "),(0,r.kt)("p",null,"With the origin transaction the owner mints 1 new token and transfers it to the smart contract address.\nThe resulting ",(0,r.kt)("em",{parentName:"p"},"non-fungible")," (unique) token takes the hash of the origin transaction as its ",(0,r.kt)("em",{parentName:"p"},"color code"),"."),(0,r.kt)("p",null,"The new colored token is the ",(0,r.kt)("em",{parentName:"p"},"smart contract token"),". The ",(0,r.kt)("em",{parentName:"p"},"smart contract token")," remains in the smart contract\naddress as long as the smart contract is using this address, i.e. normally for the lifetime."),(0,r.kt)("p",null,"The color code of the ",(0,r.kt)("em",{parentName:"p"},"smart contract token")," is equal to the hash of the origin\ntransaction. It is called ",(0,r.kt)("em",{parentName:"p"},"color of the smart contract"),"."),(0,r.kt)("p",null,"You may find ",(0,r.kt)("em",{parentName:"p"},"color")," of the instance in the demo dashboard of the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract.\nYou will also find exactly 1 token with the color equal to the smart contract color\nin the balances of the smart contract."),(0,r.kt)("p",null,"The non-fungible ",(0,r.kt)("em",{parentName:"p"},"smart contract token")," guarantees there is exactly 1 transaction\nand exactly 1 UTXO with this token on the ledger globally.\nThis property prevents ",(0,r.kt)("em",{parentName:"p"},"forking")," the chain of state updates, i.e. there's always unique and objective SC state. "),(0,r.kt)("p",null,"The color of the smart contract remains the same during the lifetime of the smart contract.\nIn some situations a smart contract with its state may be moved to another address.\nIn that case the address of the smart contract will change, and the ",(0,r.kt)("em",{parentName:"p"},"smart contract token")," will be moved to it.\nSo, the color of the smart contract (the color of the token) will remain the same for its lifetime\neven if the address will change. Therefore, the color of the instance is an ultimate identity of\nit on the global ledger."),(0,r.kt)("p",null,"The owner of the smart contract mints the smart contract token and therefore becomes authenticated and singled\nout participant in the smart contract since the origin.\nThis makes the owner to be a privileged user of the smart contract: the builtin logic of the smart contract will\nprocess privileged request codes only if sent from the owner\u2019s address."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(u,i(i({ref:t},m),{},{components:n})):o.createElement(u,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);