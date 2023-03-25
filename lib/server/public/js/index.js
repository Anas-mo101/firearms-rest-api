(()=>{"use strict";const t=class extends Anmo.AbstractView{constructor(){super(),this.isLoading=!1}getComponentHTML(){try{return Anmo.BuildElement({tag:"section",id:"lineCanvas",style:{height:"85%",position:"relative","z-index":"1",display:Anmo.Utils.Responsiveness.setByScreen("grid","block","block"),"grid-template-columns":"1fr 1.5fr","align-items":"center"},content:[Anmo.BuildElement({tag:"script",attributes:[{attribute:"defer",value:["true"]}],content:'\n\nconst S = 620;\nvar x = 50 , speed = 50;\nvar y = Math.floor(Math.random() * S)\nbulletSize = {w: 50, h: 10}\n\nfunction setup() {\n    let canvas = createCanvas(windowWidth-30, S).parent("lineCanvas");\n    canvas.position(0, 0);\n}\n\nfunction draw() {\n    background(255);\n    fill(0,0,0);\n    rectMode(CENTER)\n\n    rect(x, y, bulletSize.w , bulletSize.h);\n\n    if(speed < 0){\n        ellipse(x - (bulletSize.w / 2), y, bulletSize.w , bulletSize.h);\n    }else{\n        ellipse(x + (bulletSize.w / 2), y, bulletSize.w , bulletSize.h);\n    }\n\n    x = x + speed;\n    if(x + 25 >= width || x - 25 <= 0){\n        speed = -speed;\n        y = Math.floor(Math.random() * S)\n        const sizeFactor = Math.floor(Math.random() * 100) + 50;\n        bulletSize.w = sizeFactor;\n        bulletSize.h = sizeFactor / 5;\n    }\n\n}\n\n'}),Anmo.BuildElement({tag:"div",id:this.id,attributes:[{attribute:"class",value:["relative py-8 flex justify-center flex-col h-full","px-10","mx-auto","max-w-screen-xl","lg:py-16","lg:px-12"]}],content:[Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["text-left relative my-8 font-extrabold tracking-tight leading-none text-4xl md:text-5xl lg:text-6xl dark:text-white"]}],style:{"z-index":"2"},content:"Firearms REST API"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["text-left mb-2 relative","font-normal","text-gray-500","text-lg","lg:text-xl"]}],style:{"z-index":"2","padding-right":Anmo.Utils.Responsiveness.setByScreen("0","0","5px")},content:["Lock and load with our Firearms REST API"]})]}),Anmo.Utils.Responsiveness.isDesktop()?Anmo.BuildElement({tag:"img",style:{height:"350px","z-index":"1"},attributes:[{attribute:"src",value:"./media/banner_gun.png"}]}):null]})}catch(t){return console.log(t),this.componentError(t)}}},e=class extends Anmo.AbstractView{constructor(t){super(),this.navbar=t}getComponentHTML(){try{return Anmo.BuildElement({tag:"section",attributes:[{attribute:"class",value:["relative shadow-lg h-20 flex w-full justify-between bg-black items-center"]}],style:{"z-index":"5"},content:[Anmo.BuildElement({tag:"div",id:"logo",attributes:[{attribute:"class",value:["mx-5"]}],content:Anmo.BuildElement({tag:"a",attributes:[{attribute:"href",value:"/"},{attribute:"data-link"}],content:Anmo.BuildElement({tag:"img",style:{"max-width":Anmo.Utils.Responsiveness.setByScreen("100%","100%","70%")},attributes:[{attribute:"src",value:"./media/logo.png"},{attribute:"width",value:"150"},{attribute:"height",value:"30"}]})})}),this.navbar.getComponentHTML()]})}catch(t){return console.log(t),this.componentError(t)}}},n=t=>{const e=Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5 bg-white","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]}],content:[Anmo.BuildElement({tag:"p",content:t})]});Anmo.Utils.Responsiveness.setByScreen("topRight","topRight","topCenter"),new Anmo.Utils.NotificationIncubator(2e3,Anmo.Utils.Responsiveness.setByScreen("topRight","topRight","topCenter")).displaynotification(e)};class a extends Anmo.AbstractView{constructor(t){super(),this.snippet=t,this.snippetCode=t.split("\n")}getComponentHTML(){try{const t=this.snippetCode.map((t=>Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-left"]}],content:t})));return Anmo.BuildElement({tag:"div",id:this.id,attributes:[{attribute:"class",value:["relative overflow-x-auto w-full lg:w-1/2 shadow-lg py-10 px-6 bg-black text-gray-300 rounded-lg"]}],content:[Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["absolute font-bold my-auto top-2 right-2 px-2 py-1 border border-gray-300 text-gray-900 text-sm bg-gray-300 rounded-lg "]}],onTap:async()=>{try{await navigator.clipboard.writeText(this.snippet),n("Copied to Clipboard")}catch(t){console.error("Failed to copy: ",t)}},content:["Copy"]}),Anmo.BuildElement({tag:"pre",style:{"white-space":"break-spaces"},attributes:[{attribute:"class",value:["text-xs lg:text-sm "]}],content:[...t]})]})}catch(t){return this.componentError(t)}}}const i=class extends Anmo.AbstractView{constructor(){super()}getComponentHTML(){try{return Anmo.BuildElement({tag:"div",id:this.id,attributes:[{attribute:"class",value:["relative flex flex-col lg:flex-row gap-24 w-full my-24 justify-around items-center"]}],content:[Anmo.BuildElement({tag:"div",id:this.id,attributes:[{attribute:"class",value:["relative rounded-lg shadow-xl h-48 w-48 flex flex-col justify-center items-center"]}],content:[Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-center text-black"]}],content:"free"}),Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["text-center font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl"]}],content:"5000"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-center text-black"]}],content:"calls/month"})]}),Anmo.BuildElement({tag:"div",id:this.id,attributes:[{attribute:"class",value:["relative rounded-lg shadow-xl h-48 w-48 flex flex-col justify-center items-center"]}],content:[Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["text-center font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl"]}],content:"+1200"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-center text-black"]}],content:"firearms"})]}),Anmo.BuildElement({tag:"div",id:this.id,attributes:[{attribute:"class",value:["relative rounded-lg shadow-xl h-48 w-48 flex flex-col justify-center items-center"]}],content:[Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["text-center font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl"]}],content:"+5"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-center text-black"]}],content:"classifications"})]})]})}catch(t){return this.componentError(t)}}},r=class extends Anmo.AbstractView{constructor(t){super(),this.params=t}getComponentHTML(){try{const t=this.params.map((t=>Anmo.BuildElement({tag:"tr",attributes:[{attribute:"class",value:["my-4"]}],content:[Anmo.BuildElement({tag:"td",attributes:[{attribute:"class",value:["border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"]}],content:t.parameter}),Anmo.BuildElement({tag:"td",attributes:[{attribute:"class",value:["border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"]}],content:t.type}),Anmo.BuildElement({tag:"td",attributes:[{attribute:"class",value:["border-t-0 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"]}],content:t.desc})]})));return Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["relative overflow-x-auto"]}],content:Anmo.BuildElement({tag:"table",id:this.id,attributes:[{attribute:"class",value:["table-auto w-full"]}],content:[Anmo.BuildElement({tag:"thead",attributes:[{attribute:"class",value:["border-b-2"]}],content:[Anmo.BuildElement({tag:"tr",content:[Anmo.BuildElement({tag:"th",attributes:[{attribute:"class",value:["p-4"]}],content:"Parameter"}),Anmo.BuildElement({tag:"th",attributes:[{attribute:"class",value:["p-4"]}],content:"Type"}),Anmo.BuildElement({tag:"th",attributes:[{attribute:"class",value:["p-4"]}],content:"Description"})]})]}),Anmo.BuildElement({tag:"tbody",content:[...t]})]})})}catch(t){return this.componentError(t)}}},l=['[\n    {\n        "id": 1,\n        "name": "Heckler & Koch HK SL8",\n        "classification": "Semi-Automatic Rifle",\n        "service_year": "1998",\n        "origins": "Germany",\n        "operators": "Australia; Germany; United Kingdom; United States",\n        "manufactuers": "Heckler & Koch - Germany",\n        "overall_length": "980 mm",\n        "roles": "Sights",\n        "empty_weight": "4.00 kg",\n        "barrel_length": "20.08 in",\n        "sights": "Iron Front and Rear; Optics Supported.",\n        "caliber": "5.56x45mm NATO; .233 Remington",\n        "rounds": "10-round detachable box magazine",\n        "variants": "",\n        "action": "Gas-Operated; Semi-Automatic; Short Stroke Piston" \n    },\n    {\n        "id": 2,\n        "name": "Mk II  (Mills Grenade / Mills Bomb)",\n        "classification": "Infantry Hand Grenade",\n        "service_year": "1915",\n        "origins": "United Kingdom",\n        "operators": "",\n        "manufactuers": "",\n        "overall_length": "",\n        "roles": "Fire Support",\n        "empty_weight": "0.77 kg",\n        "barrel_length": "3.74 in",\n        "sights": "",\n        "caliber": "Not Applicable",\n        "rounds": "Single Use",\n        "variants": "",\n        "action": "Manually-Actuated; Thrown"\n    },\n]','{\n    "id": 1,\n    "name": "Heckler & Koch HK SL8",\n    "classification": "Semi-Automatic Rifle",\n    "service_year": "1998",\n    "origins": "Germany",\n    "operators": "Australia; Germany; United Kingdom; United States",\n    "manufactuers": "Heckler & Koch - Germany",\n    "overall_length": "980 mm",\n    "roles": "Sights",\n    "empty_weight": "4.00 kg",\n    "barrel_length": "20.08 in",\n    "sights": "Iron Front and Rear; Optics Supported.",\n    "caliber": "5.56x45mm NATO; .233 Remington",\n    "rounds": "10-round detachable box magazine",\n    "variants": "",\n    "action": "Gas-Operated; Semi-Automatic; Short Stroke Piston" \n}','[\n    {\n        "id": 1,\n        "name": "Semi-Automatic Rifle",\n    },\n    {\n        "id": 2,\n        "name": "Infantry Hand Grenade",\n    },\n]','{\n    "id": 1,\n    "name": "Semi-Automatic Rifle",\n}\n','\nvar myHeaders = new Headers();\nmyHeaders.append("x-api-key", "XXXXX");\n\nvar requestOptions = {\n  method: \'GET\',\n  headers: myHeaders,\n};\n\nfetch("/api/v1/xxx", requestOptions)\n  .then(response => response.json())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'],o=t=>l[t],s=JSON.parse('{"a":[{"parameter":"search","type":"string","desc":"Limit results to those matching a string."},{"parameter":"page","type":"string","desc":"Current page of the collection. Default is 0"},{"parameter":"limit","type":"string","desc":"Maximum number of items to be returned in result set. Default is 10"},{"parameter":"classification","type":"string","desc":"Limit results to those with matching classification"},{"parameter":"order","type":"string","desc":"Order sort attribute ascending or descending. Options: asc and desc."}],"K":[{"parameter":"search","type":"string","desc":"Limit results to those matching a string."},{"parameter":"page","type":"string","desc":"Current page of the collection. Default is 0"},{"parameter":"limit","type":"string","desc":"Maximum number of items to be returned in result set. Default is 10"},{"parameter":"order","type":"string","desc":"Order sort attribute ascending or descending. Options: asc and desc."}]}'),u=class extends Anmo.AbstractView{constructor(){super(),this.loading=!1,this.emailID=Anmo.AbstractView.generateID(),this.passID=Anmo.AbstractView.generateID()}getFormVals(){const t=document.getElementById(this.emailID).value.trim(),e=document.getElementById(this.passID).value.trim();return""==t?(n("username cant be empty"),!1):e.length<8?(n("password needs to be more that 8 characters"),!1):{email:t,password:e}}async login(){try{this.loading=!0,this.update();const t=this.getFormVals();if(!t)return;const e=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&"),n=new URL("http://localhost:3000/api/login");await fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e}).then((t=>t.json())),Anmo.Router.navigateTo("/user")}catch(t){console.log(t)}this.loading=!1,this.update()}getComponentHTML(){try{return Anmo.BuildElement({tag:"form",attributes:[{attribute:"class",value:["flex flex-col justify-center items-center"]}],content:[Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["m-2 text-center"]}],content:"Login"}),Anmo.BuildElement({tag:"input",id:this.emailID,attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"email"},{attribute:"placeholder",value:"email"}]}),Anmo.BuildElement({tag:"input",id:this.passID,attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"text"},{attribute:"placeholder",value:"password"}]}),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["cursor-pointer","pt-2 my-2 pb-2.5 px-5 w-full","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"button"}],onTap:()=>this.login(),content:"Login"}),Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["m-2 text-center"]}],content:"or"}),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["cursor-pointer","pt-2 my-2 pb-2.5 px-5 w-full","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"button"}],onTap:()=>{this.popupInc=new Anmo.Utils.PopupIncubator;const t=Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-3/4 lg:w-1/4 h-2/3 bg-white rounded-lg flex flex-col justify-center items-center"]}],content:[(new c).getComponentHTML(),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["absolute top-1 left-3"]}],onTap:()=>this.popupInc.hidePopup(),content:"x"})]});this.popupInc.displayPopup(t)},content:"Register"})]})}catch(t){return console.log(t),this.componentError(t)}}},c=class extends Anmo.AbstractView{constructor(){super(),this.loading=!1,this.emailID=Anmo.AbstractView.generateID(),this.usernameID=Anmo.AbstractView.generateID(),this.passID=Anmo.AbstractView.generateID(),this.confrimPassID=Anmo.AbstractView.generateID()}isValidEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}getFormVals(){const t=document.getElementById(this.emailID).value.trim(),e=document.getElementById(this.usernameID).value.trim(),a=document.getElementById(this.passID).value.trim(),i=document.getElementById(this.confrimPassID).value.trim();return this.isValidEmail(t)?""==e?(n("username cant be empty"),!1):a!==i?(n("password does not match"),!1):a.length<8?(n("password needs to be more that 8 characters"),!1):{email:t,username:e,password:a}:(n("enter a valid email"),!1)}async reg(){this.loading=!0,this.update();try{const t=this.getFormVals();if(!t)return;const e=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&"),n=new URL("http://localhost:3000/api/signup");await fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e}).then((t=>t.json())),this.showLoginDialog()}catch(t){this.errorMessage="Registeration Error"}this.loading=!1,this.update()}getComponentHTML(){try{return Anmo.BuildElement({tag:"form",id:this.id,attributes:[{attribute:"class",value:["flex flex-col justify-center items-center"]}],content:[Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["m-2 text-center"]}],content:"Register"}),this.errorMessage?Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["m-2 text-center text-red"]}],content:this.errorMessage}):null,Anmo.BuildElement({tag:"input",id:this.emailID,attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"text"},{attribute:"placeholder",value:"email"}]}),Anmo.BuildElement({tag:"input",id:this.usernameID,attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"text"},{attribute:"placeholder",value:"username"}]}),Anmo.BuildElement({tag:"input",id:this.passID,attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"text"},{attribute:"placeholder",value:"password"}]}),Anmo.BuildElement({tag:"input",id:this.confrimPassID,attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"password"},{attribute:"placeholder",value:"confrim password"}]}),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["cursor-pointer","pt-2 my-2 pb-2.5 px-5 w-full","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"button"}],onTap:()=>this.reg(),content:"Register"}),Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["m-2 text-center"]}],content:"or"}),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["cursor-pointer","pt-2 my-2 pb-2.5 px-5 w-full","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]},{attribute:"type",value:"button"}],onTap:()=>this.showLoginDialog(),content:"Login"})]})}catch(t){return console.log(t),this.componentError(t)}}showLoginDialog(){this.popupInc=new Anmo.Utils.PopupIncubator;const t=Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-3/4 lg:w-1/4 h-1/2 bg-white rounded-lg flex flex-col justify-center items-center"]}],content:[(new u).getComponentHTML(),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["absolute top-1 left-3"]}],onTap:()=>this.popupInc.hidePopup(),content:"x"})]});this.popupInc.displayPopup(t)}},m=class extends Anmo.AbstractView{constructor(){super()}getPopup(){this.popupInc=new Anmo.Utils.PopupIncubator;const t=Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-3/4 lg:w-1/4 h-2/3 bg-white rounded-lg flex flex-col justify-center items-center"]}],content:[(new c).getComponentHTML(),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["absolute top-1 left-3"]}],onTap:()=>this.popupInc.hidePopup(),content:"x"})]});this.popupInc.displayPopup(t)}getComponentHTML(){try{return Anmo.BuildElement({tag:"section",id:this.id,content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-full my-7 px-6 lg:px-80 relative flex justify-center items-center"]}],content:[Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-center text-black"]}],content:"Your ultimate source for blazing-fast access to comprehensive firearm data! Whether you need to retrieve firearm details, search for specific models, or manage user accounts, our API has you covered. With top-notch security and reliable performance, our API is the perfect solution for firearm enthusiasts, law enforcement agencies, and businesses alike. Get your hands on our Firearms REST API today and hit the target every time!"})]}),(new i).getComponentHTML(),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-full my-7 relative flex justify-center items-center"]}],content:[Anmo.BuildElement({tag:"button",onTap:()=>this.getPopup(),attributes:[{attribute:"class",value:["cursor-pointer ","justify-center","items-center","pt-2 pb-2.5 px-5","text-base","font-medium","text-center","text-black","border","border-gray-300"]}],content:"Get a Free API Key Now !"})]}),Anmo.BuildElement({tag:"h1",attributes:[{attribute:"class",value:["text-center my-16 font-extrabold tracking-tight leading-none text-black text-4xl md:text-5xl lg:text-6xl"]}],content:"Documentation"}),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center"]}],content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-full text-left lg:w-1/2 lg:px-6 relative"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["font-bold text-xl text-black"]}],content:"Authentication"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["text-black"]}],content:"Authenticate requests headers using Auth Key provided"}),Anmo.BuildElement({tag:"br"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-black"]}],content:"Example: JavaScript - Fetch"})]}),new a(o(4)).getComponentHTML()]}),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center"]}],content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-full text-left lg:w-1/2 lg:px-6 relative"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["font-bold text-xl text-black"]}],content:"Firearms"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["text-black"]}],content:"Retreive list of Firearms"}),Anmo.BuildElement({tag:"br"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-black"]}],content:"GET: /v1/api/firearms"}),Anmo.BuildElement({tag:"br"}),new r(s.a).getComponentHTML()]}),new a(o(0)).getComponentHTML()]}),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center"]}],content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-full text-left lg:w-1/2 lg:px-6 relative"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["font-bold text-xl text-black"]}],content:"Firearm"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["text-black"]}],content:"Retreive a Firearms"}),Anmo.BuildElement({tag:"br"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-black"]}],content:"GET: /v1/api/firearms/:id"}),Anmo.BuildElement({tag:"br"})]}),new a(o(1)).getComponentHTML()]}),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center"]}],content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-full text-left lg:w-1/2 lg:px-6 relative"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["font-bold text-xl text-black"]}],content:"Classification"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["text-black"]}],content:"Retreive list of firearms Classifications"}),Anmo.BuildElement({tag:"br"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-black"]}],content:"GET: /v1/api/classification"}),Anmo.BuildElement({tag:"br"}),new r(s.K).getComponentHTML()]}),new a(o(2)).getComponentHTML()]}),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex my-8 px-10 py-4 flex-col gap-6 lg:gap-0 lg:flex-row justify-center"]}],content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-full text-left lg:w-1/2 lg:px-6 relative"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["font-bold text-xl text-black"]}],content:"Firearm"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["text-black"]}],content:"Retreive a Classification"}),Anmo.BuildElement({tag:"br"}),Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-black"]}],content:"GET: /v1/api/classification/:id"}),Anmo.BuildElement({tag:"br"})]}),new a(o(3)).getComponentHTML()]})]})}catch(t){return console.log(t),this.componentError(t)}}},d=class extends Anmo.AbstractView{constructor(){super()}getComponentHTML(){try{return Anmo.BuildElement({tag:"section",attributes:[{attribute:"class",value:["relative shadow-lg h-20 flex w-full justify-center bg-black items-center"]}],style:{"z-index":"5"},content:[Anmo.BuildElement({tag:"div",id:"logo",attributes:[{attribute:"class",value:["mx-5"]}],content:Anmo.BuildElement({tag:"a",attributes:[{attribute:"href",value:"https://anmo.space"},{attribute:"data-link"}],content:Anmo.BuildElement({tag:"p",attributes:[{attribute:"class",value:["font-bold text-center text-white"]}],content:"Powered by ANMO"})})})]})}catch(t){return console.log(t),this.componentError(t)}}},p=class extends Anmo.AbstractView{getComponentHTML(){try{return Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex justify-end px-8 items-center gap-7"]}],content:[Anmo.BuildElement({tag:"button",onTap:()=>{this.popupInc=new Anmo.Utils.PopupIncubator;const t=Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-3/4 lg:w-1/4 h-2/3 bg-white rounded-lg flex flex-col justify-center items-center"]}],content:[(new u).getComponentHTML(),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["absolute top-1 left-3"]}],onTap:()=>this.popupInc.hidePopup(),content:"x"})]});this.popupInc.displayPopup(t)},attributes:[{attribute:"class",value:["cursor-pointer  text-white"]},{attribute:"href",value:["cursor-pointer  text-white"]}],content:Anmo.BuildElement({tag:"img",attributes:[{attribute:"class",value:["flex justify-end px-8 items-center gap-7"]},{attribute:"src",value:["./media/box-arrow-in-right.svg"]}]})})]})}catch(t){return console.log(t),this.componentError(t)}}},b=class extends Anmo.AbstractView{constructor(){super({style:{height:"100%"}}),this.setTitle("Firearms - Home")}getComponentHTML(){try{this.appendHTMLComponent(new e(new p).getComponentHTML()),this.appendHTMLComponent((new t).getComponentHTML()),this.appendHTMLComponent((new m).getComponentHTML()),this.appendHTMLComponent((new d).getComponentHTML())}catch(t){return console.log(t),this.componentError(t)}return this.getComponent_()}},g=class extends Anmo.AbstractView{constructor(){super(),this.authKey="XXXX-XXXX-XXXX-XXXX",this.limitCount="XX",this.userType="XX",this.userEmail="XX",this.username="XX",this.isLoading=!0,this.init()}async init(){try{const t=new URL("http://localhost:3000/api/info"),e=await fetch(t,{method:"GET"}).then((t=>t.json()));this.authKey=e.authKey,this.limitCount=e.limitCount,this.userType=e.userType,this.userEmail=e.userEmail,this.username=e.username}catch(t){console.log(t),Anmo.Router.navigateTo("/"),this.errorMessage="Initializing Error"}this.loading=!1,this.update()}getPopup(){this.popupInc=new Anmo.Utils.PopupIncubator;const t=Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-3/4 lg:w-1/4 bg-white rounded-lg flex flex-col justify-center items-center"]}],content:[new updateDialog(this.userEmail,this.username).getComponentHTML(),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["absolute top-1 left-3"]}],onTap:()=>this.popupInc.hidePopup(),content:"x"})]});this.popupInc.displayPopup(t)}getPremiumPopup(){this.popupInc=new Anmo.Utils.PopupIncubator;const t=Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["w-3/4 lg:w-1/4 h-1/4 bg-white rounded-lg flex flex-col justify-center items-center"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["text-lg text-black"]}],content:"Coming Soon"}),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["absolute top-1 left-3"]}],onTap:()=>this.popupInc.hidePopup(),content:"x"})]});this.popupInc.displayPopup(t)}getComponentHTML(){try{return Anmo.BuildElement({tag:"section",id:this.id,style:{height:"85%",position:"relative","z-index":"1",display:Anmo.Utils.Responsiveness.setByScreen("grid","block","block"),"grid-template-columns":"1fr 4fr"},content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex flex-col items-center border-r-2 border-r-2 border-b-2 lg:border-r-2"]}],content:[Anmo.BuildElement({tag:"img",style:{width:"100%"},attributes:[{attribute:"src",value:"./media/profile.png"},{attribute:"width",value:"150"},{attribute:"height",value:"30"}]}),Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["font-bold text-xl text-black"]}],content:this.username}),Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["text-lg text-black"]}],content:` - ${this.userType} teir -`}),"free"!=this.userType?null:Anmo.BuildElement({tag:"button",onTap:()=>this.getPremiumPopup(),attributes:[{attribute:"class",value:["cursor-pointer w-2/3","justify-center","items-center","my-4 pt-2 pb-2.5 px-5","text-base","font-medium","text-center","text-black","border","border-gray-300"]}],content:"Update to PREMUIM"})]}),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["p-8"]}],content:[Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex gap-3 items-center"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["text-lg text-black"]}],content:"Auth Key:"}),Anmo.BuildElement({tag:"dive",id:this.passID,attributes:[{attribute:"class",value:["pt-2 my-2 pb-2.5 px-5","text-base","font-medium","text-center","text-gray-900","rounded-lg","border","border-gray-300"]}],content:this.authKey}),Anmo.BuildElement({tag:"button",attributes:[{attribute:"class",value:["font-bold my-auto px-2 py-1 border border-gray-300 text-gray-900 bg-gray-300 text-sm rounded-lg "]}],onTap:async()=>{try{await navigator.clipboard.writeText(this.authKey),n("key copied")}catch(t){console.error("Failed to copy: ",t)}},content:"Copy"})]}),Anmo.BuildElement({tag:"br"}),Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex gap-3 justify-center lg:justify-start items-center"]}],content:[Anmo.BuildElement({tag:"h2",attributes:[{attribute:"class",value:["text-lg text-black"]}],content:`Monthly Limit: ${this.limitCount}/5000`})]})]})]})}catch(t){return console.log(t),this.componentError(t)}}},h=class extends Anmo.AbstractView{getComponentHTML(){try{return Anmo.BuildElement({tag:"div",attributes:[{attribute:"class",value:["flex justify-end px-2 lg:px-8 items-center gap-7"]}],content:[Anmo.BuildElement({tag:"a",attributes:[{attribute:"class",value:["cursor-pointer  text-white"]},{attribute:"href",value:"./api/logout"}],content:Anmo.BuildElement({tag:"img",attributes:[{attribute:"class",value:["flex justify-end px-8 items-center gap-7"]},{attribute:"src",value:["./media/box-arrow-left.svg"]}]})})]})}catch(t){return console.log(t),this.componentError(t)}}},x=class extends Anmo.AbstractView{constructor(){super({style:{height:"100%"}}),this.setTitle("User Profile")}getComponentHTML(){try{this.appendHTMLComponent(new e(new h).getComponentHTML()),this.appendHTMLComponent((new g).getComponentHTML()),this.appendHTMLComponent((new d).getComponentHTML())}catch(t){return console.log(t),this.componentError(t)}return this.getComponent_()}};Anmo.setBreakPoints({mobile:450,tablet:850}),Anmo.setMainContainer("body"),Anmo.initApp([{path:"/",view:b},{path:"/user",view:x}])})();