(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),i=(a(0),a(92)),r={id:"doc3",title:"3 - Deeper into CLVM"},l={unversionedId:"doc3",id:"doc3",isDocsHomePage:!1,title:"3 - Deeper into CLVM",description:"This guide directly continues on from part 1 so if you haven't read that, please do so before reading this.",source:"@site/docs/doc3.md",permalink:"/docs/doc3",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/doc3.md",sidebar:"someSidebar",previous:{title:"2 - Coins, Spends and Wallets",permalink:"/docs/doc2"},next:{title:"4 - The High Level Languange, Compiler, and Functions",permalink:"/docs/doc4"}},s=[{value:"Lazy Evaluation in ChiaLisp",id:"lazy-evaluation-in-chialisp",children:[]},{value:"Introduction to Eval",id:"introduction-to-eval",children:[]},{value:"Programs as Parameters",id:"programs-as-parameters",children:[]}],c={rightToc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide directly continues on from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/"}),"part 1")," so if you haven't read that, please do so before reading this."),Object(i.b)("p",null,"This section of the guide will cover how ChiaLisp relates to transactions and coins on the Chia network.\nIf there are any terms that you aren't sure of, be sure to check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/doc5"}),"glossary"),"."),Object(i.b)("h2",{id:"lazy-evaluation-in-chialisp"},"Lazy Evaluation in ChiaLisp"),Object(i.b)("p",null,"As we saw in part 1, programs are often structured around ",Object(i.b)("inlineCode",{parentName:"p"},"(i A B C)")," to control flow.\nChiaLisp evaluates programs as trees, where the leaves are evaluated first.\nThis can cause unexpected problems if you are not aware of it.\nConsider the following program which uses ",Object(i.b)("inlineCode",{parentName:"p"},"x")," which immediately halts and throws an error if it is evaluated."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '(i (q 1) (q 100) (x (q \"still being evaluated\")))'\nFAIL: clvm raise (0x7374696c6c206265696e67206576616c7561746564)\n")),Object(i.b)("p",null,"This is because ChiaLisp evaluates both of the leaves even though it will only follow the path of one."),Object(i.b)("p",null,"To get around this we can use the following design pattern to replace (i A B C)."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"((c (i (A) (q B) (q C)) (a)))\n")),Object(i.b)("p",null,"Applying this to our above example looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c (i (q 1) (q (q 100)) (q (x (q \"still being evaluated\")))) (a)))'\n100\n")),Object(i.b)("p",null,"It is worth keeping this in mind whenever you write an ",Object(i.b)("inlineCode",{parentName:"p"},"(i A B C)"),"."),Object(i.b)("p",null,"If you're wondering how this works (and how the standard transaction from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/doc2"}),"part 2")," worked), then allow me to introduce Eval."),Object(i.b)("h2",{id:"introduction-to-eval"},"Introduction to Eval"),Object(i.b)("p",null,"In ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/"}),"Part 1")," we mentioned that a program is usually a list where the first element is an operator, and every subsequent element is a valid program.\nHowever a Program can also have a program as the first element. This will cause that program to be evaluated as a new puzzle.\nThe solution is then every element after the first in this list."),Object(i.b)("p",null,"This looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"(*(puzzle)* *solution_element_1* *solution_element_2* *solution_element_3* *solution_element_4*)\n")),Object(i.b)("p",null,"In order to create this list we want to use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"((c *(puzzle)* *(solution)*))\n")),Object(i.b)("p",null,"Let's put this into practice."),Object(i.b)("p",null,"Here is a program that evaluates the program ",Object(i.b)("inlineCode",{parentName:"p"},"(+ 2 (q 5)))")," and uses the list ",Object(i.b)("inlineCode",{parentName:"p"},"(70 80 90)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"(80 90 100)")," as the solution."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c (q (+ 2 (q 5))) (q (70 80 90))))' '(20 30 40)'\n75\n\n$ brun '((c (q (+ 2 (q 5))) (q (80 90 100))))' '(20 30 40)'\n85\n\n")),Object(i.b)("p",null,"Notice how the original solution ",Object(i.b)("inlineCode",{parentName:"p"},"(20 30 40)")," does not matter for the new evaluation environment.\nIn this example we use ",Object(i.b)("inlineCode",{parentName:"p"},"q")," to quote both the new puzzle and the new solution to prevent them from being prematurely evaluated."),Object(i.b)("p",null,"A neat trick that we can pull is that we can define the new solution in terms of the outer solution.\nIn this next example we will add the first element of the old solution to our new solution."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c (q (+ 2 (q 5))) (c 2 (q (70 80 90)))))' '(20 30 40)'\n25\n")),Object(i.b)("p",null,"However it's not just the new solution that we can affect using this, we can also pass programs as parameters."),Object(i.b)("h2",{id:"programs-as-parameters"},"Programs as Parameters"),Object(i.b)("p",null,"The core CLVM does not have an operator for creating user defined functions.\nIt does, however, allow programs to be passed as parameters, which can be used for similar results."),Object(i.b)("p",null,"Here is a puzzle that executes the program contained in ",Object(i.b)("inlineCode",{parentName:"p"},"(f (a))")," with the solution ",Object(i.b)("inlineCode",{parentName:"p"},"(12)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c 2 (q (12))))' '((* 2 (q 2)))'\n24\n")),Object(i.b)("p",null,"Taking this further we can make the puzzle run a new evaluation that only uses parameters from its old solution:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lisp"}),"$ brun '((c 2 1))' '((* 5 (q 2))) 10)'\n10\n")),Object(i.b)("p",null,"We can use this technique to implement recursive programs."))}p.isMDXComponent=!0}}]);