(function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],p=0,u=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"560d":function(e,t,n){"use strict";n("aa59")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",{staticClass:"word-container"},[r("el-row",{staticClass:"word-text",attrs:{type:"flex",justify:"center"}},[r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:20}},[e._v(e._s(e.wordObjects[e.currentIndex].word))]),r("el-col",{attrs:{span:2}},[r("img",{attrs:{src:n("c781")},on:{click:e.readWord}})])],1),r("el-row",{staticClass:"explain-text",attrs:{type:"flex",justify:"center"}},[r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[e._v(e._s(e.wordObjects[e.currentIndex].explain))])],1)],1),r("el-row",{staticStyle:{"margin-top":"1rem"},attrs:{type:"flex"}},[r("el-col",{staticStyle:{"margin-left":"1rem"}},[r("el-button",{on:{click:e.lastWord}},[e._v("上一个")])],1),r("el-col",{staticStyle:{"text-align":"right","margin-right":"1rem"}},[r("el-button",{on:{click:e.nextWord}},[e._v("下一个")])],1)],1),r("button",{attrs:{type:"success"},on:{click:function(t){return e.speakEng("englist")}}},[e._v("朗读所有单词")]),r("button",{attrs:{type:"success"},on:{click:function(t){return e.speakEng("explain")}}},[e._v("朗读英文和含义")]),r("button",{attrs:{type:"success"},on:{click:function(t){return e.speakEng("split")}}},[e._v(" 朗读英文且拆分字符 ")])],1)},l=[],s=n("1da1"),c=(n("96cf"),n("ac1f"),n("1276"),n("d3b7"),n("ddb0"),n("d81d"),n("f425")),d=n.n(c),p=[{part:"第二天",content:[{word:"Light",explain:"点火，照亮，光亮的"},{word:"together",explain:"共同，一起，合起来"},{word:"quite",explain:"完全，十分"},{word:"keep",explain:"保持，坚持"},{word:"door",explain:"门，通道"},{word:"belive",explain:"相信，认为"},{word:"use",explain:"使用，利用，应用"},{word:"state",explain:"情况，州，国家，说明，陈述"},{word:"power",explain:"权利，能力，电源"},{word:"alone",explain:"单独的，独一无二的，孤独的"},{word:"present",explain:"礼物，赠送物"},{word:"above",explain:"上面的，上述的"},{word:"voice",explain:"声音，意见，发言权，表达"},{word:"fact",explain:"事实，实际"},{word:"poor",explain:"贫穷的，缺乏的"},{word:"hear",explain:"听，听说，得知"},{word:"form",explain:"形状，表格，形成"},{word:"indeed",explain:"真正地，确实"},{word:"body",explain:"身体，主体，尸体"},{word:"therefore",explain:"因此，所以"},{word:"along",explain:"沿着，向前地"},{word:"free",explain:"免费的，自由的，不受约束的"},{word:"leave",explain:"离开"},{word:"during",explain:"在...期间"},{word:"nature",explain:"大自然，性质，天性"},{word:"several",explain:"若干，几个"},{word:"eigher",explain:"两者之一"},{word:"business",explain:"商业，事业，生意"},{word:"lay",explain:"放，趟，放置"},{word:"manner",explain:"方式，举止，风度，礼貌"},{word:"wish",explain:"愿望，请求"},{word:"reason",explain:"原因，理由，理智"},{word:"fire",explain:"火，火灾，解雇"},{word:"united",explain:"一致的，统一的"},{word:"speak",explain:"说，说话"},{word:"call",explain:"把...叫做"},{word:"general",explain:"军队，一般的，普通的"},{word:"family",explain:"家，家庭成员，家庭"},{word:"behind",explain:"在...后面"},{word:"soul",explain:"灵魂，心灵，精神"},{word:"become",explain:"变得；成为"},{word:"spirit",explain:"精神，心灵，志气"},{word:"dead",explain:"死的"},{word:"question",explain:"问题，疑问，发问，询问"},{word:"earth",explain:"地球，陆地，地面"},{word:"care",explain:"关心，介意，小心"},{word:"boy",explain:"男孩，少年，家伙"},{word:"truth",explain:"真理，真想，真实"},{word:"lost",explain:"失去的，丧失的，迷惑的"},{word:"ground",explain:"地面，土壤，场地，原因"},{word:"forth",explain:"向前，向外，往外"},{word:"really",explain:"真正地，到底，确实"},{word:"thousand",explain:"一千，许多，无数"},{word:"rest",explain:"休息，静止"}]}],u={name:"HelloWorld",data:function(){return{speech:null,readContent:p,wordObjects:[],currentIndex:0,autoRead:!1,readRate:1}},mounted:function(){this.speechInit()},methods:{speechInit:function(){this.speech=new d.a,this.speech.init().then((function(){}))},speakEng:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,l,s,c,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r="zh-CN",a="en-US",n.t0=regeneratorRuntime.keys(t.readContent);case 3:if((n.t1=n.t0()).done){n.next=37;break}o=n.t1.value,i=t.readContent[o],t.speak(r,i.part,1),n.t2=regeneratorRuntime.keys(i.content);case 8:if((n.t3=n.t2()).done){n.next=35;break}return l=n.t3.value,s=i.content[l],n.next=13,t.sleep(2e3);case 13:if(t.speak(a,s.word,.6),"explain"!==e){n.next=20;break}return n.next=17,t.sleep(2e3);case 17:t.speak(r,s.explain,.8),n.next=33;break;case 20:if("split"!==e){n.next=33;break}c=s.word.split(""),n.t4=regeneratorRuntime.keys(c);case 23:if((n.t5=n.t4()).done){n.next=30;break}return d=n.t5.value,n.next=27,t.sleep(1e3);case 27:t.speak(a,c[d],1),n.next=23;break;case 30:return n.next=32,t.sleep(2e3);case 32:t.speak(r,s.explain,.8);case 33:n.next=8;break;case 35:n.next=3;break;case 37:case"end":return n.stop()}}),n)})))()},speak:function(e,t,n){console.log(e,t,n),this.speech.setRate(n),this.speech.setLanguage(e),this.speech.speak({text:t})},sleep:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){setTimeout((function(){t()}),e)}))},readWord:function(){this.speak("en-US",this.wordObjects[this.currentIndex].word,1)},rand:function(e){for(var t=e.length-1;t>=0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[n];e[n]=e[t],e[t]=r}return e},randomContent:function(){var e=this;this.readContent.map((function(t){e.rand(t.content),e.wordObjects=t.content})),console.log(this.wordObjects)},lastWord:function(){0===this.currentIndex?this.currentIndex=this.wordObjects.length-1:this.currentIndex--,this.readWord()},nextWord:function(){this.currentIndex>this.wordObjects.length?this.currentIndex=0:this.currentIndex++,this.readWord()},changeReadRate:function(){}},created:function(){this.randomContent()}},x=u,f=(n("560d"),n("2877")),w=Object(f["a"])(x,i,l,!1,null,"1f0582f6",null),h=w.exports,g={name:"App",components:{HelloWorld:h}},b=g,y=Object(f["a"])(b,a,o,!1,null,null,null),v=y.exports,k=n("5c96"),A=n.n(k);n("0fae");r["default"].config.productionTip=!1,r["default"].use(A.a),new r["default"]({render:function(e){return e(v)}}).$mount("#app")},aa59:function(e,t,n){},c781:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAqJJREFUSEu9lU9o1EAUxr83sa3Fqrvp6kFElG5UrPgPD4paehApiPYg9eKh9qDQxKJoQRCh9eLBP63UJt1e1qKeeipVKHgRBD1aPBTcTUCh4GXZBEEWFZsnye5K3G63WQzOKYR57zfzfTPfEP7DoHoYcsrcgyW+DdCUrSmvwtaGhsi6eQqEEQDtAH221eSOSCGthjXA4LFgU1tVQi+w5sT1k5lEgyvdBfOlylVHAolNmAcF4wmA/dVkqYTEHpudQridSyxmv15R3gdrqu4kbmROEKSnAG9fSfdKiKxnhkFiiIEfgmkwryXHy7XLIHLK6oLLzwAkahlbCWkZMzc1NuANGLv9OqZjtpZ8533+gRS3iwSIvB00r3Zyqnkip8yjcDEDYDOABYl/Hslp7d8oNvopJpp+Oas1rWV83LAuA1h01ORc3MieJsYMiNaA3Tu2tmuYylr+C0Q2TC4qRMed/uRb2bCmAO4F8EVIDYejgkwD6GFg1lGVblnPXgXRI98PIc5FA/HixsWCJ5mtKttievaAIJr3IUQDkUC8ZkXJqGCryXVbRxabC2u/F0on61YkkLKvBMznVeVQ3Pi4jyB98CHMfdFAysYz33S0nfdk3boB4gclT05Sq569yERefNQ1gvckbpivCcjZqnK+JN0cgC4CXuRV5ax/Gb1zTry0xaeQGApDWykgg1eCSZxx+tteLouVViPTy6BxgFrqiZXSDkYBXCvGSvEi/hUrwYax8WyHEKQD2Bs2IOMT5gViPPf7M3KOpnjRUhRnpSYbJ802yUUajI5qc5alsGH2AJhmhuFoihasqflobRhZkKWmxjQRuitBkTxawaayYaYB9AX/RQ4pmfoQwHVfc8ByVEUJcwprelKtgaxbgyC+zxD9jtqWCgv5DVOECUXDCyADAAAAAElFTkSuQmCC"}});