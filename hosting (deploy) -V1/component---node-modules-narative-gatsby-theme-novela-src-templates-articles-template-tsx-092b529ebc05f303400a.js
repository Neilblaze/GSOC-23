(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/j2g":function(t,e,n){"use strict";var r,a,o,i=n("MUpH"),s=n("KQm4"),c=n("vuIU"),l=n("dI71"),p=n("wTIg"),u=n("q1tI"),b=n.n(u),d=n("qKvR"),g=n("Wbzz"),h=n("TJpk"),x=n("sjHn"),j=n("1AOi"),f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).maxPages=3,e.count=e.props.pageCount,e.current=e.props.index,e.pageRoot=e.props.pathPrefix,e.getFullPath=function(t){return"/"===e.pageRoot?1===t?e.pageRoot:e.pageRoot+"page/"+t:1===t?e.pageRoot:e.pageRoot+"/page/"+t},e}return Object(l.a)(e,t),e.prototype.render=function(){var t=this.count,e=this.current;if(t<=1)return null;var n=this.previousPath,r=this.nextPath,a=this.current<this.count,o=this.current>1;return Object(d.jsx)(b.a.Fragment,null,Object(d.jsx)(h.Helmet,null,o&&Object(d.jsx)("link",{rel:"prev",href:n}),a&&Object(d.jsx)("link",{rel:"next",href:r})),Object(d.jsx)(k,null,o&&Object(d.jsx)(O,{to:n},"Prev"),this.getPageLinks,Object(d.jsx)(v,{"aria-hidden":"true"},Object(d.jsx)("em",null,e)," of ",t),a&&Object(d.jsx)(O,{to:r},"Next")))},Object(c.a)(e,[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,e=this.current,n=this.count,r=this.maxPages,a=1===e?e:e-1,o=Object(j.i)(a,n+1-a),i=o.slice(0,r);return o[0]>2&&i.unshift(null),o[0]>1&&i.unshift(1),o[0]+1===n&&o[0]-1>0&&i.splice(o.length-1-r,0,o[0]-1),o[0]+r<n&&i.push(null),o[0]+r-1<n&&i.push(n),Object(s.a)(new Set(i)).map((function(n,r){return null===n?Object(d.jsx)(y,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(d.jsx)(w,{key:"PaginatorPage_"+n,to:t.getFullPath(n),style:{opacity:e===n?1:.3},className:"Paginator__pageLink"},n)}))}}]),e}(u.Component);e.a=f;var m=function(t){return Object(d.css)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",x.a.desktop_up(r||(r=Object(i.a)(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]))))},O=Object(p.a)(g.Link,{target:"e5lnzj40"})("font-weight:600;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",m," &:hover,&:focus{opacity:1;text-decoration:underline;}"),w=Object(p.a)(g.Link,{target:"e5lnzj41"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",m," &:hover,&:focus{opacity:1;text-decoration:underline;}"),y=Object(p.a)("span",{target:"e5lnzj42"})("opacity:0.3;",m,' &::before{content:"...";}'),v=Object(p.a)("span",{target:"e5lnzj43"})("font-weight:400;",m," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),k=Object(p.a)("nav",{target:"e5lnzj44"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",x.a.tablet(a||(a=Object(i.a)(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "])),y)," ",x.a.desktop_up(o||(o=Object(i.a)(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "])),v))},"6Ras":function(t,e,n){"use strict";var r,a,o,i,s,c,l,p,u,b,d,g,h,x,j,f,m,O,w=n("MUpH"),y=n("wTIg"),v=n("q1tI"),k=n("qKvR"),z=n("Wbzz"),L=n("gZs9"),P=n("joFz"),R=n("sjHn"),_=n("ZtNh");e.a=function(t){var e=t.articles,n=t.alwaysShowAllDetails;if(!e)return null;var r=1===e.length,a=Object(v.useContext)(_.a),o=a.gridLayout,i=void 0===o?"tiles":o,s=a.hasSetGridLayout,c=a.getGridLayout,l=e.reduce((function(t,e,n,r){return n%2==0&&t.push(r.slice(n,n+2)),t}),[]);return Object(v.useEffect)((function(){return c()}),[]),Object(k.jsx)(C,{style:{opacity:s?1:0},alwaysShowAllDetails:n},l.map((function(t,e){var n=e%2!=0,a=e%2!=1;return Object(k.jsx)(F,{key:e,gridLayout:i,hasOnlyOneArticle:r,reverse:n},Object(k.jsx)(S,{article:t[0],narrow:n}),Object(k.jsx)(S,{article:t[1],narrow:a}))})))};var S=function(t){var e=t.article,n=t.narrow;if(!e)return null;var r=Object(v.useContext)(_.a).gridLayout,a=n&&e.title.length>35,o=n?e.hero.narrow:e.hero.regular,i=o&&0!==Object.keys(o).length&&o.constructor===Object;return Object(k.jsx)(D,{to:e.slug,"data-a11y":"false"},Object(k.jsx)(W,{gridLayout:r},Object(k.jsx)(N,{narrow:n,gridLayout:r},i?Object(k.jsx)(P.c,{src:o}):Object(k.jsx)(P.a,null)),Object(k.jsx)("div",null,Object(k.jsx)(G,{dark:!0,hasOverflow:a,gridLayout:r},e.title),Object(k.jsx)(K,{narrow:n,hasOverflow:a,gridLayout:r},e.excerpt),Object(k.jsx)(U,null,e.date," · ",e.timeToRead," min read"))))},H=Object(k.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",R.a.phablet(r||(r=Object(w.a)(["\n    -webkit-line-clamp: 3;\n  "])))),A={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},C=Object(y.a)("div",{target:"e14bbv6l0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&A})),I=function(t){return Object(k.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",R.a.desktop_medium(a||(a=Object(w.a)(["\n    grid-template-columns: 1fr 1fr;\n  "])))," ",R.a.tablet(o||(o=Object(w.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]))))},T=function(t){return Object(k.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",R.a.desktop(i||(i=Object(w.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "])))," ",R.a.tablet(s||(s=Object(w.a)(["\n    grid-template-columns: 1fr;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",R.a.phablet(c||(c=Object(w.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))))},q=function(t){return Object(k.css)("position:relative;",R.a.tablet(l||(l=Object(w.a)(["\n    margin-bottom: 60px;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",R.a.phablet(p||(p=Object(w.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))))},M=function(t){return Object(k.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},F=Object(y.a)("div",{target:"e14bbv6l1"})((function(t){return"tiles"===t.gridLayout?I:M})),W=Object(y.a)("div",{target:"e14bbv6l2"})((function(t){return"rows"===t.gridLayout?T:q})),N=Object(y.a)("div",{target:"e14bbv6l3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",R.a.tablet(u||(u=Object(w.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "])))," ",R.a.phablet(b||(b=Object(w.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "])))),G=Object(y.a)(L.a.h2,{target:"e14bbv6l4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",H,";",R.a.desktop(d||(d=Object(w.a)(["\n    margin-bottom: 15px;\n  "])))," ",R.a.tablet(g||(g=Object(w.a)(["\n    font-size: 24px;  \n  "])))," ",R.a.phablet(h||(h=Object(w.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "])))),K=Object(y.a)("p",{target:"e14bbv6l5"})(H,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",R.a.desktop(x||(x=Object(w.a)(["\n    display: -webkit-box;\n  "])))," ",R.a.phablet(j||(j=Object(w.a)(["\n    margin-bottom; 15px;\n  "])))," ",R.a.phablet(f||(f=Object(w.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "])))),U=Object(y.a)("div",{target:"e14bbv6l6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",R.a.phablet(m||(m=Object(w.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "])))),D=Object(y.a)(z.Link,{target:"e14bbv6l7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",N,",&:focus ",N,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",R.a.phablet(O||(O=Object(w.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "])),N))},R1uw:function(t,e,n){"use strict";n.r(e);var r,a,o,i,s,c,l,p,u=n("wTIg"),b=n("q1tI"),d=n("noox"),g=n("WsIH"),h=n("dH/O"),x=n("/j2g"),j=n("MUpH"),f=n("Wbzz"),m=n("joFz"),O=n("qKvR"),w=function(t){var e=t.author;return Object(O.jsx)(y,null,Object(O.jsx)(v,{as:e.authorsPage?f.Link:"div",to:e.slug,"data-a11y":"false","aria-label":"Author's bio"},Object(O.jsx)(z,null,Object(O.jsx)(k,{src:e.avatar.medium}))),Object(O.jsx)(L,{dangerouslySetInnerHTML:{__html:e.bio}}))},y=Object(u.a)("div",{target:"eig4wgl0"})({name:"3j1lrl",styles:"display:flex;align-items:center;position:relative;left:-10px;"}),v=Object(u.a)("div",{target:"eig4wgl1"})("display:block;position:relative;height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;margin:10px 26px 10px 10px;&::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,0.25);}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),k=Object(u.a)(m.c,{target:"eig4wgl2"})({name:"uodor8",styles:"border-radius:50%;"}),z=Object(u.a)("div",{target:"eig4wgl3"})({name:"wibiw4",styles:"height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;overflow:hidden;"}),L=Object(u.a)("p",{target:"eig4wgl4"})("max-width:430px;font-size:14px;line-height:1.45;color:",(function(t){return t.theme.colors.grey}),";a{color:",(function(t){return t.theme.colors.grey}),";text-decoration:underline;}"),P=n("pylL"),R=n("sjHn"),_=n("ZtNh"),S=function(t){var e=t.authors,n=Object(b.useContext)(_.a),r=n.gridLayout,a=void 0===r?"tiles":r,o=n.hasSetGridLayout,i=n.setGridLayout,s=Object(f.useStaticQuery)("3372861117").site.edges[0].node.siteMetadata.hero,c=o&&"tiles"===a,l=e.find((function(t){return t.featured}));if(!l)throw new Error("\n      No featured Author found.\n      Please ensure you have at least featured Author.\n  ");return Object(O.jsx)(d.a,{relative:!0,id:"Articles__Hero"},Object(O.jsx)(C,{style:{maxWidth:s.maxWidth+"px"}},Object(O.jsx)(I,{dangerouslySetInnerHTML:{__html:s.heading}})),Object(O.jsx)(H,null,Object(O.jsx)(w,{author:l}),Object(O.jsx)(A,null,Object(O.jsx)(T,{onClick:function(){return i("tiles")},active:c,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(O.jsx)(P.a.Tiles,null)),Object(O.jsx)(T,{onClick:function(){return i("rows")},active:!c,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(O.jsx)(P.a.Rows,null)),Object(O.jsx)("img",{src:"https://neilblaze-spotify-live.vercel.app/api/now-playing",onClick:"this.src='https://neilblaze-spotify-live.vercel.app/api/now-playing?rand='+Math.random();"}))))},H=Object(u.a)("div",{target:"e13os0gm0"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",R.a.desktop(r||(r=Object(j.a)(["\n    margin-bottom: 80px;\n  "]))),";",R.a.tablet(a||(a=Object(j.a)(["\n    margin-bottom: 60px;\n  "]))),";"),A=Object(u.a)("div",{target:"e13os0gm1"})("display:flex;align-items:center;",R.a.tablet(o||(o=Object(j.a)(["\n    display: none;\n  "]))),";"),C=(Object(u.a)("div",{target:"e13os0gm2"})("position:relative;left:955px;top:-37px;outline:none;text-decoration:none;border-radius:5px;display:flex;justify-content:center;align-items:center;cursor:pointer;height:30px;width:47px;opacity:1;overflow:hidden;color:",(function(t){return t.theme.colors.primary}),";a{color:",(function(t){return t.theme.colors.accent}),";}border:1px solid rgba(22,76,167,0.6);border-width:1.2px;"),Object(u.a)("div",{target:"e13os0gm3"})("margin:100px 0;",R.a.desktop(i||(i=Object(j.a)(["\n    width: 80%;\n  "])))," ",R.a.tablet(s||(s=Object(j.a)(["\n    width: 100%;\n  "])))," ",R.a.phablet(c||(c=Object(j.a)(["\n    margin: 40px 0;\n  "]))))),I=Object(u.a)("h1",{target:"e13os0gm4"})("font-style:normal;font-weight:600;font-size:52px;line-height:1.15;color:",(function(t){return t.theme.colors.primary}),";a{color:",(function(t){return t.theme.colors.accent}),";}",R.a.desktop(l||(l=Object(j.a)(["\n    font-size: 38px\n  "])))," ",R.a.phablet(p||(p=Object(j.a)(["\n    font-size: 32px;\n  "])))),T=Object(u.a)("button",{target:"e13os0gm5"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}"),q=n("6Ras"),M=(e.default=function(t){var e=t.location,n=t.pageContext,r=n.group,a=n.additionalContext.authors;return Object(O.jsx)(h.a,null,Object(O.jsx)(g.a,{pathname:e.pathname}),Object(O.jsx)(S,{authors:a}),Object(O.jsx)(d.a,{narrow:!0},Object(O.jsx)(q.a,{articles:r}),Object(O.jsx)(F,{show:n.pageCount>1},Object(O.jsx)(x.a,n))),Object(O.jsx)(M,null))},Object(u.a)("div",{target:"e1bswbkw0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";")),F=Object(u.a)("div",{target:"e1bswbkw1"})((function(t){return t.show&&"margin-top: 95px;"}))}}]);
//# sourceMappingURL=component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx-092b529ebc05f303400a.js.map