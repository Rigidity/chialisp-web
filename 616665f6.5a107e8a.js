(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(91)),i={id:"doc3",title:"3 - Deeper into CLVM"},l={unversionedId:"doc3",id:"doc3",isDocsHomePage:!1,title:"3 - Deeper into CLVM",description:"This guide directly continues on from part 1 so if you haven't read that, please do so before reading this.",source:"@site/docs/doc3.md",slug:"/doc3",permalink:"/docs/doc3",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/doc3.md",version:"current",sidebar:"someSidebar",previous:{title:"2 - Coins, Spends and Wallets",permalink:"/docs/doc2"},next:{title:"4 - The High Level Languange, Compiler, and Functions",permalink:"/docs/doc4"}},s=[{value:"Lazy Evaluation in ChiaLisp",id:"lazy-evaluation-in-chialisp",children:[]},{value:"Introduction to Eval",id:"introduction-to-eval",children:[]},{value:"Programs as Parameters",id:"programs-as-parameters",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide directly continues on from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/"}),"part 1")," so if you haven't read that, please do so before reading this."),Object(o.b)("p",null,"This section of the guide will cover how ChiaLisp relates to transactions and coins on the Chia network.\nIf there are any terms that you aren't sure of, be sure to check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/doc5"}),"glossary"),"."),Object(o.b)("h2",{id:"lazy-evaluation-in-chialisp"},"Lazy Evaluation in ChiaLisp"),Object(o.b)("p",null,"As we saw in part 1, programs are often structured around ",Object(o.b)("inlineCode",{parentName:"p"},"(i A B C)")," to control flow.\nChiaLisp evaluates programs as trees, where the leaves are evaluated first.\nThis can cause unexpected problems if you are not aware of it.\nConsider the following program which uses ",Object(o.b)("inlineCode",{parentName:"p"},"x")," which immediately halts and throws an error if it is evaluated."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '(i (q 1) (q 100) (x (q \"still being evaluated\")))'\nFAIL: clvm raise (0x7374696c6c206265696e67206576616c7561746564)\n")),Object(o.b)("p",null,"This is because ChiaLisp evaluates both of the leaves even though it will only follow the path of one."),Object(o.b)("p",null,"To get around this we can use the following design pattern to replace (i A B C)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"((c (i (A) (q B) (q C)) (a)))\n")),Object(o.b)("p",null,"Applying this to our above example looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c (i (q 1) (q (q 100)) (q (x (q \"still being evaluated\")))) (a)))'\n100\n")),Object(o.b)("p",null,"It is worth keeping this in mind whenever you write an ",Object(o.b)("inlineCode",{parentName:"p"},"(i A B C)"),"."),Object(o.b)("p",null,"If you're wondering how this works (and how the standard transaction from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/doc2"}),"part 2")," worked), then allow me to introduce Eval."),Object(o.b)("h2",{id:"introduction-to-eval"},"Introduction to Eval"),Object(o.b)("p",null,"In ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/"}),"Part 1")," we mentioned that a program is usually a list where the first element is an operator, and every subsequent element is a valid program.\nHowever a Program can also have a program as the first element. This will cause that program to be evaluated as a new puzzle.\nThe solution is then every element after the first in this list."),Object(o.b)("p",null,"This looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"(*(puzzle)* *solution_element_1* *solution_element_2* *solution_element_3* *solution_element_4*)\n")),Object(o.b)("p",null,"In order to create this list we want to use:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"((c *(puzzle)* *(solution)*))\n")),Object(o.b)("p",null,"Let's put this into practice."),Object(o.b)("p",null,"Here is a program that evaluates the program ",Object(o.b)("inlineCode",{parentName:"p"},"(+ 2 (q 5)))")," and uses the list ",Object(o.b)("inlineCode",{parentName:"p"},"(70 80 90)")," or ",Object(o.b)("inlineCode",{parentName:"p"},"(80 90 100)")," as the solution."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c (q (+ 2 (q 5))) (q (70 80 90))))' '(20 30 40)'\n75\n\n$ brun '((c (q (+ 2 (q 5))) (q (80 90 100))))' '(20 30 40)'\n85\n\n")),Object(o.b)("p",null,"Notice how the original solution ",Object(o.b)("inlineCode",{parentName:"p"},"(20 30 40)")," does not matter for the new evaluation environment.\nIn this example we use ",Object(o.b)("inlineCode",{parentName:"p"},"q")," to quote both the new puzzle and the new solution to prevent them from being prematurely evaluated."),Object(o.b)("p",null,"A neat trick that we can pull is that we can define the new solution in terms of the outer solution.\nIn this next example we will add the first element of the old solution to our new solution."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c (q (+ 2 (q 5))) (c 2 (q (70 80 90)))))' '(20 30 40)'\n25\n")),Object(o.b)("p",null,"However it's not just the new solution that we can affect using this, we can also pass programs as parameters."),Object(o.b)("h2",{id:"programs-as-parameters"},"Programs as Parameters"),Object(o.b)("p",null,"The core CLVM does not have an operator for creating user defined functions.\nIt does, however, allow programs to be passed as parameters, which can be used for similar results."),Object(o.b)("p",null,"Here is a puzzle that executes the program contained in ",Object(o.b)("inlineCode",{parentName:"p"},"(f (a))")," with the solution ",Object(o.b)("inlineCode",{parentName:"p"},"(12)"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c 2 (q (12))))' '((* 2 (q 2)))'\n24\n")),Object(o.b)("p",null,"Taking this further we can make the puzzle run a new evaluation that only uses parameters from its old solution:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c 2 1))' '((* 5 (q 2))) 10)'\n10\n")),Object(o.b)("p",null,"We can use this technique to implement recursive programs."))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);