(self.webpackChunkllvm_notas=self.webpackChunkllvm_notas||[]).push([[72],{7577:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var l=t(2122),n=t(9756),r=(t(7294),t(3905)),u=["components"],i={},o="B\xe1sico",s={unversionedId:"basic",id:"basic",isDocsHomePage:!1,title:"B\xe1sico",description:"Obtener un valor de una variable",source:"@site/docs/basic.md",sourceDirName:".",slug:"/basic",permalink:"/notas-llvm/docs/basic",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Introducci\xf3n",permalink:"/notas-llvm/docs/intro"}},c=[{value:"Obtener un valor de una variable",id:"obtener-un-valor-de-una-variable",children:[]},{value:"Guardar valor en una variable",id:"guardar-valor-en-una-variable",children:[]},{value:"Casting",id:"casting",children:[{value:"Castear de entero a entero",id:"castear-de-entero-a-entero",children:[]},{value:"Castear de flotante a entero",id:"castear-de-flotante-a-entero",children:[]},{value:"Castear de entero a flotante",id:"castear-de-entero-a-flotante",children:[]},{value:"Castear de flotante a flotante",id:"castear-de-flotante-a-flotante",children:[]}]}],p={toc:c};function d(e){var a=e.components,t=(0,n.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"b\xe1sico"},"B\xe1sico"),(0,r.kt)("h2",{id:"obtener-un-valor-de-una-variable"},"Obtener un valor de una variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"llvm::Value* variablePtr;\nllvm::Value* variableValue;\n\nvariableValue = builder.CreateLoad(variablePtr);\n")),(0,r.kt)("h2",{id:"guardar-valor-en-una-variable"},"Guardar valor en una variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"llvm::Value* variablePtr;\nllvm::Value* variableValue;\n\n// ...\nbuilder.CreateStore(variableValue, variablePtr);\n")),(0,r.kt)("h2",{id:"casting"},"Casting"),(0,r.kt)("h3",{id:"castear-de-entero-a-entero"},"Castear de entero a entero"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 8-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt8Ty(), true);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 8-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt8Ty(), false);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 16-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt16Ty(), true);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 16-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt16Ty(), false);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 32-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt32Ty(), true);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 32-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt32Ty(), false);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 64-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt64Ty(), true);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero a entero de 64-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateIntCast(value, builder.getInt64Ty(), false);\n")),(0,r.kt)("h3",{id:"castear-de-flotante-a-entero"},"Castear de flotante a entero"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 8-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToSI(value, builder.getInt8Ty());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 8-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToUI(value, builder.getInt8Ty());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 16-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToSI(value, builder.getInt16Ty());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 16-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToUI(value, builder.getInt16Ty());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 32-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToSI(value, builder.getInt32Ty());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 32-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToUI(value, builder.getInt32Ty());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 64-bit con signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToSI(value, builder.getInt64Ty());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a un entero de 64-bit sin signo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPToUI(value, builder.getInt64Ty());\n")),(0,r.kt)("h3",{id:"castear-de-entero-a-flotante"},"Castear de entero a flotante"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero con signo a flotante de 32-bit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateSIToFP(value, builder.getFloatTy());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero sin signo a flotante de 32-bit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateUIToFP(value, builder.getFloatTy());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero con signo a flotante de 64-bit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateSIToFP(value, builder.getDoubleTy());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier entero sin signo a flotante de 64-bit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateUIToFP(value, builder.getDoubleTy());\n")),(0,r.kt)("h3",{id:"castear-de-flotante-a-flotante"},"Castear de flotante a flotante"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a flotante de 32-bit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPCast(value, builder.getFloatTy());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Castear cualquier flotante a flotante de 64-bit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"builder.CreateFPCast(value, builder.getDoubleTy());\n")))}d.isMDXComponent=!0}}]);