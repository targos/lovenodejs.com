(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(157),c=n(158),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u;var l="1097489062"},153:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(32),c=n.n(s);n.d(e,"a",function(){return c.a});n(155);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});var a=n(165),r=n.n(a),o=n(166),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var s=new r.a(i.a);var c=s.rhythm,u=s.scale},155:function(t,e,n){var a;t.exports=(a=n(156))&&a.default||a},156:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(54),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},157:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(153),c=n(154),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null,i.a.createElement("a",{href:"https://twitter.com/targos89"},"Twitter")," •"," ",i.a.createElement("a",{href:"https://github.com/targos"},"GitHub")))},e}(i.a.Component);e.a=u},158:function(t,e,n){"use strict";var a=n(159),r=n(0),o=n.n(r),i=n(4),s=n.n(i),c=n(167),u=n.n(c),l=n(153);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,s=t.title,c=t.titleTemplate;return o.a.createElement(l.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:c||"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="1025518380"},159:function(t){t.exports={data:{site:{siteMetadata:{title:"Love Node.js",description:"A blog where I write about things that happen in the Node.js universe.",author:"Michaël Zasso"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-708e9dd4671f1c2379a4.js.map