(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{5275:function(t,e,n){"use strict";n("ba0b")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),a="["+r+"]",c=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,c;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(c=a.prototype)&&c!==n.prototype&&r(t,c),t}},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("94ca"),c=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),b=n("241c").f,p=n("06cf").f,h=n("9bf2").f,N=n("58a8").trim,v="Number",m=r[v],I=m.prototype,g=o(d(I))==v,O=function(t){var e,n,i,r,a,c,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=N(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(a=u.slice(2),c=a.length,s=0;s<c;s++)if(o=a.charCodeAt(s),o<48||o>r)return NaN;return parseInt(a,i)}return+u};if(a(v,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var j,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(g?f((function(){I.valueOf.call(n)})):o(n)!=v)?u(new m(O(e)),n,y):O(e)},E=i?b(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;E.length>x;x++)s(m,j=E[x])&&!s(y,j)&&h(y,j,p(m,j));y.prototype=I,I.constructor=y,c(r,v,y)}},ba0b:function(t,e,n){},c84b:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),r={class:"special-html-content"},a={class:"nr-main"},c=Object(i["o"])("div",{class:"nr-img"},null,-1),s={class:"nr-text"},o={class:"nr-text-main"},u={class:"text-sub-w"},l={class:"text-sub-z"},f={class:"text-sub-n"},d=Object(i["o"])("div",{class:"sub-line"},null,-1);function b(t,e,n,b,p,h){return Object(i["F"])(),Object(i["j"])("div",null,[Object(i["o"])("div",r,[Object(i["o"])("div",a,[c,Object(i["o"])("div",s,[Object(i["o"])("div",o,[Object(i["o"])("div",u,[Object(i["o"])("div",l,[Object(i["o"])("div",f,Object(i["S"])(p.title),1)]),d]),Object(i["o"])("div",{style:{"text-align":"left","margin-bottom":"15px"},innerHTML:p.detailData},null,8,["innerHTML"])])])])])])}n("a9e3");var p=n("e876"),h={data:function(){return{detailData:"",id:"",typeName:"",title:""}},mounted:function(){this.id=this.$route.query.id,this.typeName=this.$route.query.typeName,this.title=this.$route.query.title,this.getDetail(),document.title=this.title},methods:{getDetail:function(){var t=this;Object(p["h"])({typeName:this.typeName,id:Number(this.id)}).then((function(e){t.detailData=e}))}}};n("5275");h.render=b;e["default"]=h}}]);
//# sourceMappingURL=detail.a6f8cfb6.js.map