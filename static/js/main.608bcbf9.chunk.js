(this["webpackJsonpsit-pc"]=this["webpackJsonpsit-pc"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"name":"\u6a5f\u68b0\u5de5","kind":"a","display":-1,"os":"Win10","cpu":"2.5GHz","ram":16,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":false,"m1_mac":false},{"name":"\u6a5f\u68b0\u6a5f\u80fd\u5de5","kind":"b","display":-1,"os":"Win10","cpu":"i5","ram":8,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":true,"m1_mac":false},{"name":"\u6750\u6599\u5de5","kind":"c","display":-2,"os":"Win10","cpu":"i5","ram":16,"ssd":-1,"weight":-1,"wifi":5,"intel_mac":true,"m1_mac":true},{"name":"\u5fdc\u7528\u5316\u5b66","kind":"d","display":-1,"os":"Win10","cpu":"i5","ram":16,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":true,"m1_mac":false},{"name":"\u96fb\u6c17\u5de5","kind":"e","display":-1,"os":"Win10","cpu":"i5","ram":16,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":true,"m1_mac":false},{"name":"\u96fb\u5b50\u5de5","kind":"g","display":12,"os":"Win10","cpu":"4core","ram":8,"ssd":128,"weight":1.5,"wifi":5,"intel_mac":true,"m1_mac":false},{"name":"\u901a\u4fe1\u5de5","kind":"f","display":13,"os":"Win10","cpu":"i5","ram":16,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":false,"m1_mac":false},{"name":"\u60c5\u5831\u5de5","kind":"l","display":-1,"os":"Win10","cpu":"i5","ram":16,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":true,"m1_mac":false},{"name":"\u571f\u6728\u5de5","kind":"h","display":13,"os":"Win10&MacOS","cpu":"i5","ram":16,"ssd":256,"weight":2,"wifi":5,"intel_mac":true,"m1_mac":true},{"name":"\u96fb\u60c5","kind":"p","display":-1,"os":"Win10","cpu":"i5","ram":8,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":true,"m1_mac":false},{"name":"\u6a5f\u68b0\u5236\u5fa1","kind":"q","display":13,"os":"Win10","cpu":"i5","ram":8,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":false,"m1_mac":false},{"name":"\u751f\u547d","kind":"n","display":-1,"os":"Win10","cpu":"i5","ram":8,"ssd":256,"weight":1.5,"wifi":5,"intel_mac":false,"m1_mac":false},{"name":"\u6570\u7406","kind":"v","display":12,"os":"Win10","cpu":"i5","ram":16,"ssd":128,"weight":1.5,"wifi":5,"intel_mac":true,"m1_mac":false}]')},24:function(e,i,t){},28:function(e,i,t){"use strict";t.r(i);var c=t(1),s=t(0),n=t.n(s),a=t(8),d=t.n(a),r=(t(24),t(14)),j=t(33),l=t(31),h=t(32),m=t(34),b=t(35),O=t(30),o=function(e){return Object(s.useEffect)((function(){console.log(e.jsonObj)}),[]),Object(c.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"}),Object(c.jsx)("th",{children:"OS"}),Object(c.jsx)("th",{children:"CPU"}),Object(c.jsx)("th",{children:"\u30e1\u30e2\u30ea\u30fc"}),Object(c.jsx)("th",{children:"\u30b9\u30c8\u30ec\u30fc\u30b8"}),Object(c.jsx)("th",{children:"\u91cd\u3055"}),Object(c.jsx)("th",{children:"WiFi"}),Object(c.jsx)("th",{children:"Mac\u306b\u95a2\u3057\u3066"})]})}),Object(c.jsx)("tbody",{children:e.jsonObj.map((function(i){return Object(c.jsxs)("tr",{className:i.kind==e.kind?"table-success":"",children:[Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:"https://mogami.dev/sit-pc?kind="+i.kind,children:i.name})}),-1==i.display?Object(c.jsx)("td",{children:"\u6307\u5b9a\u7121\u3057"}):-2==i.display?Object(c.jsx)("td",{children:"\u30bf\u30d6\u30ec\u30c3\u30c8\u4e0d\u53ef"}):Object(c.jsxs)("td",{children:[i.display,"\uff72\uff9d\uff81\u4ee5\u4e0a"]}),Object(c.jsx)("td",{children:i.os}),Object(c.jsxs)("td",{children:[i.cpu,"\u4ee5\u4e0a"]}),Object(c.jsxs)("td",{children:[i.ram,"GB\u4ee5\u4e0a"]}),-1!=i.ssd?Object(c.jsxs)("td",{children:[i.ssd,"GB\u4ee5\u4e0a"]}):Object(c.jsx)("td",{children:"\u6307\u5b9a\u7121\u3057"}),Object(c.jsxs)("td",{children:[i.weight,"kg\u4ee5\u4e0b"]}),Object(c.jsxs)("td",{children:["WiFi",i.wifi,"\u4ee5\u4e0a"]}),Object(c.jsx)("td",{children:i.intel_mac?Object(c.jsx)("div",{children:i.m1_mac?Object(c.jsx)("div",{children:"M1 Mac\u3082OK"}):Object(c.jsx)("div",{children:"intel Mac\u306e\u307f"})}):Object(c.jsx)("div",{children:"Mac\u4e0d\u53ef"})})]})}))})]})};var u=function(){var e=Object(s.useState)([]),i=Object(r.a)(e,2),n=(i[0],i[1]),a=Object(s.useState)(""),d=Object(r.a)(a,2),O=d[0],u=d[1];return Object(s.useEffect)((function(){var e=t(15);n(e);var i=window.location.search;i&&(i=i.substring(1)).split("&").forEach((function(e){var i=e.split("=");"kind"===i[0]&&u(i[1])}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(c.jsx)(j.a.Brand,{href:"",children:"\u829d\u6d66\u5de5\u696d\u5927\u5b66 \u975e\u516c\u5f0f \u65b0\u5165\u751f\u5411\u3051PC\u7d39\u4ecb\u30b5\u30a4\u30c8"})}),Object(c.jsxs)(l.a,{children:[Object(c.jsx)(h.a,{children:Object(c.jsx)("h3",{children:"\u3053\u306e\u30b5\u30a4\u30c8\u306f\uff1f"})}),Object(c.jsxs)(h.a,{children:["\u3068\u3042\u308b\u829d\u6d66\u751f\u304c\u307e\u3068\u3081\u305f\u65b0\u5165\u751f\u5411\u3051\u306ePC\u7d39\u4ecb\u30b5\u30a4\u30c8\u3067\u3059\u3002",Object(c.jsx)("br",{}),"\u3053\u306e\u30b5\u30a4\u30c8\u3092\u898b\u3066\u3082\u6c7a\u307e\u3089\u306a\u3044\u5834\u5408\u306f",Object(c.jsx)("a",{href:"https://twitter.com/MogamiTsuchikaw",children:"Twitter"}),"\u306b\u3066\u79c1\u306b\u8cea\u554f\u3057\u3066OK\u3067\u3059\u3002"]}),Object(c.jsx)(h.a,{children:Object(c.jsx)("h3",{children:"\u5404\u5b66\u79d1\u306ePC\u5fc5\u8981\u30b9\u30da\u30c3\u30af"})}),Object(c.jsxs)(h.a,{children:[Object(c.jsx)("a",{href:"https://www.shibaura-it.ac.jp/examinee/undergraduate/pcspec.html",children:"\u829d\u6d66\u5de5\u696d\u5927\u5b66\u516c\u5f0f\u30b5\u30a4\u30c8"}),"\u3088\u308a",Object(c.jsx)("br",{})]}),Object(c.jsx)(h.a,{children:Object(c.jsxs)(m.a,{defaultActiveKey:"0",children:[Object(c.jsx)(m.a.Toggle,{as:b.a,variant:"link",eventKey:"0",children:"Open or Close"}),Object(c.jsx)("br",{}),Object(c.jsx)(m.a.Collapse,{eventKey:"0",children:Object(c.jsx)(o,{jsonObj:t(15),kind:O})})]})})]})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(i){var t=i.getCLS,c=i.getFID,s=i.getFCP,n=i.getLCP,a=i.getTTFB;t(e),c(e),s(e),n(e),a(e)}))};d.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.608bcbf9.chunk.js.map