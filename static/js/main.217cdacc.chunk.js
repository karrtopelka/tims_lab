(this["webpackJsonpfirst-lab"]=this["webpackJsonpfirst-lab"]||[]).push([[0],{127:function(e,t,r){},133:function(e,t,r){},461:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),s=r(20),i=r.n(s),a=(r(127),r(63)),j=r(11),l=(r(133),r(6)),o=function(e){var t=e.children,r=Object(j.useMediaQuery)("sm",{match:"down"});return Object(l.jsxs)(j.Row,{children:[!r&&Object(l.jsx)(j.Col,{span:6}),Object(l.jsx)(j.Col,{children:t}),!r&&Object(l.jsx)(j.Col,{span:6})]})},h=r(17),d=r(35),b=r(122),u=function(e){var t=e.title,r=e.placeholder,n=e.type,c=e.query,s=e.setQuery,i=e.dispatch,a=e.setDone,o=Object(b.a)(e,["title","placeholder","type","query","setQuery","dispatch","setDone"]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.Grid.Container,{gap:1,justify:"space-between",children:[Object(l.jsx)(j.Grid,{children:Object(l.jsx)(j.Text,{p:!0,style:{margin:0},children:t})}),Object(l.jsx)(j.Grid,{children:Object(l.jsx)(j.Input,Object(d.a)({type:n,placeholder:r,onChange:function(e){i(s(parseInt(e.target.value))),a(!1)},value:c},o))})]})})},x=r(34),O=Object(x.b)({name:"inputs",initialState:{n:0,a:0,b:0,r:0},reducers:{changeN:function(e,t){e.n=t.payload},changeA:function(e,t){e.a=t.payload},changeB:function(e,t){e.b=t.payload},changeR:function(e,t){e.r=t.payload}}}),y=O.actions,p=y.changeN,g=y.changeA,m=y.changeB,f=y.changeR,v=function(e){return e.inputs.n},T=function(e){return e.inputs.a},w=function(e){return e.inputs.b},F=function(e){return e.inputs.r},M=O.reducer,C=function(e,t,r){return t=Math.ceil(t),r=Math.floor(r),Array.from({length:e},(function(){return Math.floor(Math.random()*(r-t+1)+t)}))},k=Object(x.b)({name:"generator",initialState:{gen:[]},reducers:{changeGenerator:function(e,t){e.gen=t.payload}}}),q=k.actions.changeGenerator,D=function(e){return e.generator.gen},G=k.reducer,B=function(e){var t=e.setDone,r=Object(h.c)(v),n=Object(h.c)(T),c=Object(h.c)(w),s=Object(h.c)(F),i=Object(h.b)();return Object(l.jsx)(j.Card,{shadow:!0,children:Object(l.jsxs)("form",{children:[Object(l.jsx)(u,{title:Object(l.jsxs)(l.Fragment,{children:[r<50&&Object(l.jsx)(j.Dot,{type:"error"}),"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0447\u0438\u0441\u0435\u043b (>= 50)"]}),placeholder:"55",type:"number",query:r,setQuery:p,dispatch:i,setDone:t}),Object(l.jsx)(u,{title:"\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",placeholder:"0",type:"number",query:n,setQuery:g,dispatch:i,setDone:t}),Object(l.jsx)(u,{title:Object(l.jsxs)(l.Fragment,{children:[c<=n&&Object(l.jsx)(j.Dot,{type:"error"}),"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f"]}),placeholder:"25",type:"number",query:c,setQuery:m,dispatch:i,setDone:t}),Object(l.jsx)(u,{title:Object(l.jsxs)(l.Fragment,{children:[s<=1&&Object(l.jsx)(j.Dot,{type:"error"}),"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0440\u043e\u0437\u0431\u0438\u0442\u0442\u0456\u0432"]}),placeholder:"5",type:"number",query:s,setQuery:f,dispatch:i,setDone:t}),Object(l.jsxs)(j.Row,{style:{paddingTop:10},children:[Object(l.jsx)(j.Col,{}),Object(l.jsx)(j.Col,{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(j.Button,{disabled:(parseInt(r)<50||isNaN(r)||isNaN(n)||isNaN(c)||n>=c||s<=1)&&!0,auto:!0,type:"success-light",htmlType:"submit",onClick:function(e){e.preventDefault(),i(q(C(r,n,c))),t(!0)},children:"\u0413\u043e\u0442\u043e\u0432\u043e"})}),Object(l.jsx)(j.Col,{})]})]})})},R=r(15),N=function(e,t){return{moda:Object.keys(t).filter((function(e){return t[e]===Math.max.apply(Math,Object(R.a)(Object.values(t)))})),dmedian:e.length%2===0?(e[Math.ceil(e.length/2)]+e[Math.ceil(e.length/2)-1])/2:e[Math.ceil(e.length/2)-1],dserAr:(e.reduce((function(e,t){return e+t}))/e.length).toFixed(2)}},S=r(40),A=function(e,t){for(var r=Object(S.a)({},Object.keys(e)[0],"0"),n=Object(S.a)({},Object.keys(e)[Object.keys(e).length-1],"1"),c={},s=1;s<Object.keys(e).length-1;s++){for(var i=0,a=0;a<s;a++)i+=Object.values(e)[a];c[Object.keys(e)[s]]=(i/t).toFixed(2)}var j=Object(d.a)(Object(d.a)(Object(d.a)({},r),c),n);return Object.keys(j).sort().reduce((function(e,t){return e[t]=j[t],e}),{})},Q=function(e){return e.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})},I=function(e){var t=e.vr,r=e.tho,n=e.tht,c=Object(R.a)(t.keys()),s=Object(R.a)(t.values());return Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{style:{padding:".35em"},children:[Object(l.jsx)("th",{style:{borderRight:"1px solid #ccc",borderBottom:"1px solid #ccc",padding:".625em"},children:Object(l.jsx)("i",{children:r})}),c.map((function(e,t){return Object(l.jsx)("td",{style:{borderBottom:"1px solid #ccc",padding:".625em"},children:Object(l.jsx)("strong",{children:Object(l.jsx)("i",{children:e})})},t)}))]}),Object(l.jsxs)("tr",{style:{padding:".35em"},children:[Object(l.jsx)("th",{style:{borderRight:"1px solid #ccc",padding:".625em"},children:n}),s.map((function(e,t){return Object(l.jsx)("td",{style:{padding:".625em"},children:e},t)}))]})]})})},P=r(121),E=r.n(P),z=function(e){var t=e.vr,r=e.name,n=e.line,c=e.themeType,s=e.m,i=e.type,a=e.mode;return Object(l.jsx)(E.a,{data:[{x:s?Object(R.a)(t.keys()):Object.keys(t),y:s?Object(R.a)(t.values()):Object.values(t),type:i||"scatter",mode:a,name:{name:r},line:n&&{shape:n}}],layout:{hovermode:"closest",autosize:!0,width:670,modebar:{orientation:"v",activecolor:"#9ED3CD"},plot_bgcolor:"light"===c?"white":"black",paper_bgcolor:"light"===c?"white":"black"},config:{displaylogo:!1,modeBarButtonsToRemove:["autoScale2d","hoverCompareCartesian"]}})},H=function(e){var t=function(e){var t=Object.keys(e).length;return Object.values(e).reduce((function(e,t){return e+t}),0)/t}(e),r=0;return Object.values(e).forEach((function(e){r+=Math.round(Math.pow(e-t,2))})),(r/Object.keys(e).length).toFixed(2)},J=function(e){return Math.sqrt(e,2).toFixed(2)},L=function(e,t){return(e/t).toFixed(2)},W=function(e){var t=e.title,r=e.children,n=e.g,c=e.j;return Object(l.jsx)(j.Display,{width:"auto",shadow:!0,caption:t,children:Object(l.jsx)(j.Row,{justify:c&&"space-around",style:{padding:10,overflowY:"auto",maxHeight:n?"auto":350},children:r})})},X=function(e){var t=e.title,r=e.j,n=e.g,c=e.children;return Object(l.jsx)(o,{children:Object(l.jsx)(W,{title:t,j:r,g:n,children:c})})},Y=function(e,t){for(var r=Math.min.apply(Math,Object(R.a)(Object.keys(e))),n=Math.max.apply(Math,Object(R.a)(Object.keys(e))),c=parseFloat(((n-r)/t).toFixed(2)),s=[r+c],i=1;i<t-1;i++)s.push(parseFloat((s[s.length-1]+c).toFixed(2)));s.push(n);var a=new Map;s.forEach((function(e){return a.set(e,0)}));for(var j=0;j<Object.keys(e).length;j++)for(var l=Object.keys(e)[j],o=0;o<s.length;o++){var h=s[o];if(l<=h){a.set(h,a.get(h)+parseInt(Object.values(e)[j]));break}}return{frequency:a,xMin:r,xMax:n,r:t}},_=function(e){for(var t=e.length,r=parseFloat((e.reduce((function(e,t){return e+t}),0)/t).toFixed(2)),n=[0],c=[r],s=function(s){n.push(parseFloat((e.map((function(e){return Math.pow(e-r,s)})).reduce((function(e,t){return e+t}),0)/t).toFixed(2))),c.push(parseFloat((e.map((function(e){return Math.pow(e,s)})).reduce((function(e,t){return e+t}),0)/t).toFixed(2)))},i=2;i<5;i++)s(i);var a=parseFloat((n[2]/Math.pow(n[1],1.5)).toFixed(2)),j=parseFloat((n[3]/Math.pow(n[1],2)-3).toFixed(2));return{asymetry:a,exsces:j,am:a<0?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u0441\u043a\u043e\u0448\u0435\u043d\u0438\u0439 \u0432\u043b\u0456\u0432\u043e":a>0?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u0441\u043a\u043e\u0448\u0435\u043d\u0438\u0439 \u0432\u043f\u0440\u0430\u0432\u043e":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u0441\u0438\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0438\u0439",em:j<0?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u043d\u0438\u0437\u044c\u043a\u043e\u0432\u0435\u0440\u0448\u0438\u043d\u043d\u0438\u0439":a>0?"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u0432\u0438\u0441\u043e\u043a\u043e\u0432\u0435\u0440\u0448\u0438\u043d\u043d\u0438\u0439":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0432\u0435\u0440\u0448\u0438\u043d\u043d\u0438\u0439"}},K=function(e){for(var t=[parseFloat(((e.xMin+Object(R.a)(e.frequency)[0][0])/2).toFixed(2))],r=1;r<e.r;r++)t.push(parseFloat(((Object(R.a)(e.frequency)[r-1][0]+Object(R.a)(e.frequency)[r][0])/2).toFixed(2)));return t},$=function(e,t,r){var n=function(e){for(var t=[[e.xMin,Object(R.a)(e.frequency)[0][0],e.frequency.get(Object(R.a)(e.frequency)[0][0])]],r=1;r<e.frequency.size;r++)t.push([Object(R.a)(e.frequency)[r-1][0],Object(R.a)(e.frequency)[r][0],e.frequency.get(Object(R.a)(e.frequency)[r][0])]);return t}(e),c=parseFloat(((e.xMax-e.xMin)/e.r).toFixed(2));return{moda:function(e,t,r){for(var n=Math.max.apply(Math,Object(R.a)(e.frequency.values())),c=0,s=0;s<e.r;s++){if(t[s][2]===n){if(0!==c)return"\u0420\u043e\u0437\u043f\u043e\u0434\u0456\u043b \u043c\u0443\u043b\u044c\u0442\u0438\u043c\u043e\u0434\u0430\u043b\u044c\u043d\u0438\u0439. \u0421\u0443\u043a\u0443\u043f\u043d\u0456\u0441\u0442\u044c \u043d\u0435\u043e\u0434\u043d\u043e\u0440\u0456\u0434\u043d\u0430";if(0===s||s===e.r-1)return"\u041f\u0435\u0440\u0448\u0438\u0439 \u0430\u0431\u043e \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0438 - \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u0456";c=t[s][0]+r*(t[s][2]-t[s-1][2])/(2*t[s][2]-t[s-1][2]-t[s+1][2])}if(s===e.r-1)return"".concat(Math.round(c,2))}}(e,n,c),serAr:function(e,t,r){for(var n=0,c=0;c<e.r;c++)n+=t[c]*Object(R.a)(e.frequency)[c][1];return parseFloat((n/r).toFixed(2))}(e,t,r),median:function(e,t,r,n){for(var c=[t[0][2]],s=1;s<e.r;s++)if(c.push(c[s-1]+t[s][2]),c[s]>=r/2)return c[0]>=r/2?"\u041c\u0435\u0434\u0456\u0430\u043d\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043f\u0435\u0440\u0448\u0438\u0439. \u041e\u0431\u0447\u0438\u0441\u043b\u0438\u0442\u0438 \u043d\u0435 \u0432\u0434\u0430\u0441\u0442\u0441\u044f":"".concat(parseFloat((t[s][0]+n*(.5*r-c[s-1])/t[s][2]).toFixed(2)));return 0}(e,n,r,c)}},U=function(e,t){for(var r=[],n=0;n<t.r;n++)for(var c=0;c<Object(R.a)(t.frequency)[n][1];c++)r.push(e[n]);return r},V=function(e){var t={4:{name:"\u041a\u0432\u0430\u0440\u0442\u0438\u043b",arr:[]},8:{name:"\u041e\u043a\u0442\u0438\u043b",arr:[]},10:{name:"\u0414\u0435\u0446\u0438\u043b",arr:[]},100:{name:"\u0426\u0435\u043d\u0442\u0438\u043b",arr:[]},1e3:{name:"\u041c\u0456\u043b\u0456\u043b",arr:[]}};for(var r in t)if(e.length%r===0)for(var n=0;n<r-1;n++)t[r].arr.push(e[parseInt(e.length/r*(n+1))]);return t},Z=function(e){var t=e.themeType,r=Object(h.c)(D),n=Object(h.c)(v),c=Object(h.c)(T),s=Object(h.c)(w),i=Object(h.c)(F),a=Q(Object.values(r)),o=A(a,n),d=N(Object.values(r).sort((function(e,t){return e-t})),a),b=d.dmedian,u=d.dserAr,x=d.moda,O=_(Object.values(r).sort((function(e,t){return e-t}))),y=Object.keys(a)[Object.keys(a).length-1]-Object.keys(a)[0],p=H(a),g=J(p),m=L(g,u),f=V(a),M=Y(a,i),C=K(M),k=$(M,C,n),q=k.median,G=k.serAr,B=k.moda,R=U(C,M),S=parseFloat((R[R.length-1]-R[0]).toFixed(2)),P=H(R),E=J(P),W=L(E,G),Z=_(R);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(X,{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",j:!0,children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["N: ",n]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["a: ",c]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["b: ",s]})]}),Object(l.jsx)(X,{title:"\u041d\u0430\u0432\u043c\u0430\u043d\u043d\u044f \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0456 \u0447\u0438\u0441\u043b\u0430",children:Object(l.jsx)(j.Text,{children:r.join(", ")})}),Object(l.jsx)(X,{title:"\u0412\u0430\u0440\u0456\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u0440\u044f\u0434",children:Object(l.jsx)(j.Text,{children:Object.values(r).sort((function(e,t){return e-t})).join(", ")})}),Object(l.jsx)(X,{title:"\u0427\u0430\u0441\u0442\u043e\u0442\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044f",children:Object(l.jsx)(I,{vr:new Map(Object.entries(a)),tho:"Xi",tht:"Ni"})}),Object(l.jsx)(X,{title:"\u0413\u0440\u0430\u0444\u0456\u0447\u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0447\u0430\u0441\u0442\u043e\u0442\u043d\u043e\u0457 \u0442\u0430\u0431\u043b\u0438\u0446\u0456",g:!0,children:Object(l.jsx)(z,{vr:a,name:"\u0427\u0430\u0441\u0442\u043e\u0442",themeType:t,mode:"lines+markers"})}),Object(l.jsx)(X,{title:"\u0415\u043c\u043f\u0456\u0440\u0438\u0447\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443",g:!0,children:Object(l.jsx)(I,{vr:new Map(Object.entries(o)),tho:"F(x)",tht:"Xi"})}),Object(l.jsx)(X,{title:"\u0413\u0440\u0430\u0444\u0456\u0447\u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0435\u043c\u043f\u0456\u0440\u0438\u0447\u043d\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457",g:!0,children:Object(l.jsx)(z,{vr:o,name:"\u0427\u0430\u0441\u0442\u043e\u0442",line:"vh",themeType:t,mode:"lines"})}),Object(l.jsxs)(X,{title:"\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0457 \u0442\u0435\u043d\u0434\u0435\u043d\u0446\u0456\u0457",j:!0,children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u041c\u043e\u0434\u0430: ",x.join(", ")]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u041c\u0435\u0434\u0456\u0430\u043d\u0430: ",b]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0421\u0435\u0440. \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0435: ",u]})]}),Object(l.jsxs)(X,{title:"\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0440\u043e\u0437\u0441\u0456\u044f\u043d\u043d\u044f",j:!0,children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0420\u043e\u0437\u043c\u0430\u0445: ",y]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0412\u0430\u0440\u0456\u0430\u043d\u0441\u0430: ",p]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["C\u0442\u0430\u043d\u0434\u0430\u0440\u0442: ",g]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0412\u0430\u0440\u0456\u0430\u0446\u0456\u044f: ",m]})]}),(f[10].arr.length>0||f[100].arr.length>0||f[1e3].arr.length>0||f[4].arr.length>0||f[8].arr.length>0)&&Object(l.jsxs)(X,{title:"\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0457 \u0442\u0435\u043d\u0434\u0435\u043d\u0446\u0456\u0457",j:!0,children:[f[4].arr.length>0&&Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["4: ",f[4].arr.join(", ")]}),f[8].arr.length>0&&Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["8: ",f[8].arr.join(", ")]}),f[10].arr.length>0&&Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["10: ",f[10].arr.join(", ")]}),f[100].arr.length>0&&Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["100: ",f[100].arr.join(", ")]}),f[1e3].arr.length>0&&Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["1000: ",f[1e3].arr.join(", ")]})]}),Object(l.jsx)(X,{title:"\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0444\u043e\u0440\u043c\u0438",children:Object(l.jsxs)(j.Grid.Container,{children:[Object(l.jsxs)(j.Grid,{xs:24,style:{justifyContent:"space-between"},children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0410\u0441\u0438\u043c\u0435\u0442\u0440\u0456\u044f: ",O.asymetry]}),Object(l.jsx)(j.Text,{h4:!0,style:{margin:0},children:O.am})]}),Object(l.jsxs)(j.Grid,{xs:24,style:{justifyContent:"space-between"},children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0415\u043a\u0441\u0446\u0435\u0441: ",O.exsces]}),Object(l.jsx)(j.Text,{h4:!0,style:{margin:0},children:O.em})]})]})}),Object(l.jsx)(j.Divider,{children:"2 \u0447\u0430\u0441\u0442\u0438\u043d\u0430"}),Object(l.jsx)(X,{title:"\u0406\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044c\u043d\u0438\u0439 \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b",j:!0,children:Object(l.jsx)(I,{vr:M.frequency,tho:"n[i]",tht:"x[i]"})}),Object(l.jsx)(X,{title:"\u0413\u0456\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u0430 \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443",g:!0,children:Object(l.jsx)(z,{vr:M.frequency,name:"\u0413\u0456\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u0430 \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443",type:"bar",themeType:t,m:!0,mode:"lines+markers"})}),Object(l.jsx)(X,{title:"\u0421\u0435\u0440\u0435\u0434\u043d\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0456\u0432",j:!0,children:Object(l.jsx)(j.Text,{h4:!0,style:{margin:0},children:C.join(", ")})}),Object(l.jsx)(X,{title:"\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0457 \u0442\u0435\u043d\u0434\u0435\u043d\u0446\u0456\u0457 \u0434\u043b\u044f \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443",j:!0,children:Object(l.jsxs)(j.Grid.Container,{children:[Object(l.jsx)(j.Grid,{xs:24,style:{justifyContent:"center"},children:Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u041c\u043e\u0434\u0430: ",B]})}),Object(l.jsx)(j.Grid,{xs:24,style:{justifyContent:"center"},children:Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u041c\u0435\u0434\u0456\u0430\u043d\u0430: ",q]})}),Object(l.jsx)(j.Grid,{xs:24,style:{justifyContent:"center"},children:Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0421\u0435\u0440. \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0435: ",G]})})]})}),Object(l.jsxs)(X,{title:"\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0440\u043e\u0437\u0441\u0456\u044f\u043d\u043d\u044f \u0434\u043b\u044f \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443",j:!0,children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0420\u043e\u0437\u043c\u0430\u0445: ",S]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0412\u0430\u0440\u0456\u0430\u043d\u0441\u0430: ",P]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["C\u0442\u0430\u043d\u0434\u0430\u0440\u0442: ",E]}),Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0412\u0430\u0440\u0456\u0430\u0446\u0456\u044f: ",W]})]}),Object(l.jsx)(X,{title:"\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0444\u043e\u0440\u043c\u0438",children:Object(l.jsxs)(j.Grid.Container,{children:[Object(l.jsxs)(j.Grid,{xs:24,style:{justifyContent:"space-between"},children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0410\u0441\u0438\u043c\u0435\u0442\u0440\u0456\u044f: ",Z.asymetry]}),Object(l.jsx)(j.Text,{h4:!0,style:{margin:0},children:Z.am})]}),Object(l.jsxs)(j.Grid,{xs:24,style:{justifyContent:"space-between"},children:[Object(l.jsxs)(j.Text,{h4:!0,style:{margin:0},children:["\u0415\u043a\u0441\u0446\u0435\u0441: ",Z.exsces]}),Object(l.jsx)(j.Text,{h4:!0,style:{margin:0},children:Z.em})]})]})})]})},ee=function(e){var t=e.themeType,r=Object(j.useMediaQuery)("sm",{match:"down"}),c=Object(n.useState)(!1),s=Object(a.a)(c,2),i=s[0],h=s[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(j.Row,{children:[!r&&Object(l.jsx)(j.Col,{span:6}),Object(l.jsx)(j.Col,{children:Object(l.jsx)(B,{setDone:h})}),!r&&Object(l.jsx)(j.Col,{span:6})]}),Object(l.jsx)(j.Spacer,{y:1}),i&&Object(l.jsx)(j.Divider,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),i?Object(l.jsx)(Z,{themeType:t}):Object(l.jsx)(o,{isSM:r,children:Object(l.jsx)(j.Card,{shadow:!0,children:Object(l.jsx)(j.Loading,{type:"warning",children:"\u0427\u0435\u043a\u0430\u044e \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f"})})})]})},te=function(){return Object(l.jsxs)(j.Row,{gap:2,justify:"space-between",style:{paddingBottom:10},children:[Object(l.jsx)(j.Col,{children:Object(l.jsx)(j.Text,{p:!0,style:{margin:0},children:(new Date).getFullYear()})}),Object(l.jsx)(j.Col,{style:{textAlign:"right"},children:Object(l.jsx)(j.Text,{p:!0,style:{margin:0},children:"TIMS Lab 1"})})]})},re=r(70),ne=function(e){var t=e.switchThemes,r=e.themeType;return Object(l.jsxs)(j.Row,{justify:"space-between",style:{paddingTop:10},children:[Object(l.jsx)(j.Col,{children:Object(l.jsx)(j.Text,{h4:!0,style:{margin:0},children:"Karrtopelka"})}),Object(l.jsx)(j.Col,{style:{textAlign:"right"},children:Object(l.jsx)(j.Button,{type:"light"===r?"success":"warning",ghost:!0,iconRight:"light"===r?Object(l.jsx)(re.Moon,{}):Object(l.jsx)(re.Sun,{}),auto:!0,size:"small",onClick:t})})]})},ce=function(e){var t=e.switchThemes,r=e.themeType,n=Object(j.useMediaQuery)("xs",{match:"down"});return Object(l.jsxs)(j.Page,{children:[Object(l.jsx)(j.Page.Header,{children:Object(l.jsx)(ne,{switchThemes:t,themeType:r})}),Object(l.jsx)(j.Page.Content,{children:Object(l.jsx)(ee,{themeType:r})}),!n&&Object(l.jsx)(j.Page.Footer,{children:Object(l.jsx)(te,{})})]})},se=function(){var e=Object(n.useState)("light"),t=Object(a.a)(e,2),r=t[0],c=t[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(j.GeistProvider,{themeType:r,children:[Object(l.jsx)(j.CssBaseline,{}),Object(l.jsx)(ce,{switchThemes:function(){c((function(e){return"dark"===e?"light":"dark"}))},themeType:r})]})})},ie=Object(x.a)({reducer:{inputs:M,generator:G}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h.a,{store:ie,children:Object(l.jsx)(se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[461,1,2]]]);
//# sourceMappingURL=main.217cdacc.chunk.js.map