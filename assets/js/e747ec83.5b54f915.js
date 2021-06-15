(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(92)),o={id:"glossary",title:"The Great Chia Glossary"},s={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"The Great Chia Glossary",description:"This guide will act as a glossary for many of the concepts utilized in Chia.",source:"@site/docs/glossary.md",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/glossary.md",version:"current",sidebar:"someSidebar",previous:{title:"6 - The Standard Transaction",permalink:"/docs/standard_transaction"},next:{title:"CLVM Reference Manual",permalink:"/docs/ref/clvm"}},c=[],l={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"This guide will act as a glossary for many of the concepts utilized in Chia.\nIf you are familiar with how Bitcoin transactions work, a lot of this will be familiar."),Object(r.a)("hr",null),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Coin (TXO/transaction output)")," - A coin stores value. All coins are generated as the output of a transaction or a coinbase reward or fee target. A coin is spent exactly once, allowing its value to go into other coins, and is then permanently destroyed. Each unspent coin is locked with a ChiaLisp program which is that coin\u2019s puzzle, and whoever has the information to solve that puzzle is the person who can spend that coin. The most basic puzzle has a public key and accepts a solution which contains a list of conditions signed by the corresponding private key, so only the owner of the private key can unlock the coin and spend it.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Unspent Coin (UTXO/unspent transaction output)")," - A coin which has been created but not yet spent and hence is storing value.\nUnspents (UTXO set/unspent transaction output set) - This is the set of all unspent coins on the network. It is used to check if a transaction is valid, acting as a lookup for the puzzles. It maps a coin ID to a birthdate in blockheight. A transaction must contain a reveal of the information used to calculate the ID in order for it to be possible to validate because the unspents doesn\u2019t contain that information, only hashes which can be used to validate it.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Coin ID/CoinName (TXO ID/transaction output ID)")," - The ID of a coin in Chia is generated by hashing the primary input ID, puzzle hash, and amount concatenated in that order. This is very different from Bitcoin which uses much more data to form the TXO ID, restricting what smart contracts are capable of. (See also: ",Object(r.a)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SegWit"},"SegWit"),")")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Primary Input/Parent")," - When a coin is created the coin that was used as input in the transaction is designated as the primary input. This is used to create the coin ID. If more that one coin is used up as an input in a transaction then one of the coins is designated the primary input, and the others simply reinforce the transaction.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Spend/CoinSolution")," - A spend is a reveal of a coin's ID, along with the full puzzle code, and a solution to be ran with the puzzle. The result of a spend is determined by the returned Op Constraints after running the puzzle with the solution.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Spend Bundle")," - A spend bundle is a collection of spends grouped together with an aggregated signature to be sent to the network.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"ChiaLisp")," - ChiaLisp is the Turing-complete functional language which the puzzles for spending coin are programmed in. For more information see our ",Object(r.a)("a",{parentName:"p",href:"/docs/"},"CLVM Guide"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Puzzle (Scriptpubkey)")," - A ChiaLisp program which specifies the behaviour of a coin when it is spent. A puzzle can either reject a solution or output a set of constraints.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Solution (Scriptsig)")," - This is some ChiaLisp which is passed to the puzzle for evaluation when a transaction is submitted. For more information about how transactions work, and how solutions can generate new coins check out this ",Object(r.a)("a",{parentName:"p",href:"/docs/coins_spends_and_wallets"},"guide"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"CLVM")," - The CLVM is the ChiaLisp Virtual Machine which is the sandboxed environment that puzzles and solutions are run in. The CLVM only runs the compiled minimal version of ChiaLisp, though a compiler can convert the higher level ChiaLisp to the compiled minimal version. See more about that ",Object(r.a)("a",{parentName:"p",href:"/docs/high_level_lang"},"here"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Aggregated Signature/AggSig")," - Aggregated Signatures allow us to condense multiple signatures into a single aggregated signature, such that if we know a public key and value we can verify if it exists inside of the single aggregate. This uses BLS non-interactive aggregation.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Prepend Signature")," - Prepend signatures are used so that we can retain metadata about the structure of an aggregated signature. TODO: Expand")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Op Constraints/Conditions")," - Constraints are returned by the puzzle when it\u2019s passed the solution. If all of the returned conditions are met then a transaction is valid.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Wallet")," - Software written to interact with transactions. Chia uses Hierarchical Deterministic Wallets (HD Wallets). This means that they can generate many different public keys that are all valid and verifiable as unique to that wallet. A wallet contains a coin if it possesses the information necessary to unlock that coin and create a transaction which spends it.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Puzzle Generator")," - A wallet will use a Puzzle Generator to define how it wants to receive transactions. Most wallets will want to generate the standard transaction, however by storing a ChiaLisp program that generate a puzzle, all a Sending Wallet needs to do is ask the Recipient Wallet what its Program Generator is and then run that to create the puzzle to lock the coin up with.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Puzzle Generator ID")," - This is the hash of a wallet's puzzle generator. A wallet can do a hash-lookup and see if it already knows the source code for that puzzle generator. If not, it will request the full source code and store that information in its lookup table.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Smart Contract")," - A smart contract is a specialised ChiaLisp puzzle which locks a coin up and enables complex blockchain interactions.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Coloured Coins")," - Coloured Coins are a special kind of chia coin which are created by users. A coloured coin is a uniquely marked subset of chia which can't be forged and can be linked to other assets.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Authorized Payees")," - Authorized Payees is a smart contract that means that Wallet A can give Wallet B some money, but Wallet B is only allowed to spend that money in ways that Wallet A has explicitly authorised.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Decentralised ID")," - A decentralised ID is a smart contract that enables a wallet to act as an ID which can create messages to other IDs. Based on the work of the ",Object(r.a)("a",{parentName:"p",href:"https://identity.foundation/"},"identity foundation"),"."))))}p.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||r;return a?i.a.createElement(m,s(s({ref:t},l),{},{components:a})):i.a.createElement(m,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);