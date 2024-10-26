import{b as j}from"./chunk-XP6OA2RL.mjs";import{a as i,b as P,e as ie}from"./chunk-GTKDMUJJ.mjs";var X=P((at,Q)=>{"use strict";var b=1e3,v=b*60,E=v*60,y=E*24,he=y*7,Ce=y*365.25;Q.exports=function(e,o){o=o||{};var t=typeof e;if(t==="string"&&e.length>0)return xe(e);if(t==="number"&&isFinite(e))return o.long?we(e):Ie(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function xe(e){if(e=String(e),!(e.length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(o){var t=parseFloat(o[1]),n=(o[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return t*Ce;case"weeks":case"week":case"w":return t*he;case"days":case"day":case"d":return t*y;case"hours":case"hour":case"hrs":case"hr":case"h":return t*E;case"minutes":case"minute":case"mins":case"min":case"m":return t*v;case"seconds":case"second":case"secs":case"sec":case"s":return t*b;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}i(xe,"parse");function Ie(e){var o=Math.abs(e);return o>=y?Math.round(e/y)+"d":o>=E?Math.round(e/E)+"h":o>=v?Math.round(e/v)+"m":o>=b?Math.round(e/b)+"s":e+"ms"}i(Ie,"fmtShort");function we(e){var o=Math.abs(e);return o>=y?D(e,o,y,"day"):o>=E?D(e,o,E,"hour"):o>=v?D(e,o,v,"minute"):o>=b?D(e,o,b,"second"):e+" ms"}i(we,"fmtLong");function D(e,o,t,n){var r=o>=t*1.5;return Math.round(e/t)+" "+n+(r?"s":"")}i(D,"plural")});var ee=P((lt,Y)=>{"use strict";function Fe(e){t.debug=t,t.default=t,t.coerce=h,t.disable=c,t.enable=r,t.enabled=f,t.humanize=X(),t.destroy=C,Object.keys(e).forEach(s=>{t[s]=e[s]}),t.names=[],t.skips=[],t.formatters={};function o(s){let a=0;for(let p=0;p<s.length;p++)a=(a<<5)-a+s.charCodeAt(p),a|=0;return t.colors[Math.abs(a)%t.colors.length]}i(o,"selectColor"),t.selectColor=o;function t(s){let a,p=null,w,T;function m(...u){if(!m.enabled)return;let I=m,F=Number(new Date),x=F-(a||F);I.diff=x,I.prev=a,I.curr=F,a=F,u[0]=t.coerce(u[0]),typeof u[0]!="string"&&u.unshift("%O");let d=0;u[0]=u[0].replace(/%([a-zA-Z%])/g,(M,re)=>{if(M==="%%")return"%";d++;let H=t.formatters[re];if(typeof H=="function"){let ne=u[d];M=H.call(I,ne),u.splice(d,1),d--}return M}),t.formatArgs.call(I,u),(I.log||t.log).apply(I,u)}return i(m,"debug"),m.namespace=s,m.useColors=t.useColors(),m.color=t.selectColor(s),m.extend=n,m.destroy=t.destroy,Object.defineProperty(m,"enabled",{enumerable:!0,configurable:!1,get:i(()=>p!==null?p:(w!==t.namespaces&&(w=t.namespaces,T=t.enabled(s)),T),"get"),set:i(u=>{p=u},"set")}),typeof t.init=="function"&&t.init(m),m}i(t,"createDebug");function n(s,a){let p=t(this.namespace+(typeof a>"u"?":":a)+s);return p.log=this.log,p}i(n,"extend");function r(s){t.save(s),t.namespaces=s,t.names=[],t.skips=[];let a,p=(typeof s=="string"?s:"").split(/[\s,]+/),w=p.length;for(a=0;a<w;a++)p[a]&&(s=p[a].replace(/\*/g,".*?"),s[0]==="-"?t.skips.push(new RegExp("^"+s.slice(1)+"$")):t.names.push(new RegExp("^"+s+"$")))}i(r,"enable");function c(){let s=[...t.names.map(l),...t.skips.map(l).map(a=>"-"+a)].join(",");return t.enable(""),s}i(c,"disable");function f(s){if(s[s.length-1]==="*")return!0;let a,p;for(a=0,p=t.skips.length;a<p;a++)if(t.skips[a].test(s))return!1;for(a=0,p=t.names.length;a<p;a++)if(t.names[a].test(s))return!0;return!1}i(f,"enabled");function l(s){return s.toString().substring(2,s.toString().length-2).replace(/\.\*\?$/,"*")}i(l,"toNamespace");function h(s){return s instanceof Error?s.stack||s.message:s}i(h,"coerce");function C(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return i(C,"destroy"),t.enable(t.load()),t}i(Fe,"setup");Y.exports=Fe});var te=P((g,A)=>{"use strict";g.formatArgs=Se;g.save=be;g.load=ve;g.useColors=ye;g.storage=Ee();g.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})();g.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function ye(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}i(ye,"useColors");function Se(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+A.exports.humanize(this.diff),!this.useColors)return;let o="color: "+this.color;e.splice(1,0,o,"color: inherit");let t=0,n=0;e[0].replace(/%[a-zA-Z%]/g,r=>{r!=="%%"&&(t++,r==="%c"&&(n=t))}),e.splice(n,0,o)}i(Se,"formatArgs");g.log=console.debug||console.log||(()=>{});function be(e){try{e?g.storage.setItem("debug",e):g.storage.removeItem("debug")}catch{}}i(be,"save");function ve(){let e;try{e=g.storage.getItem("debug")}catch{}return!e&&typeof process<"u"&&"env"in process&&(e=process.env.DEBUG),e}i(ve,"load");function Ee(){try{return localStorage}catch{}}i(Ee,"localstorage");A.exports=ee()(g);var{formatters:Te}=A.exports;Te.j=function(e){try{return JSON.stringify(e)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}}});var se=Object.freeze({left:0,top:0,width:16,height:16}),S=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),L=Object.freeze({...se,...S}),J=Object.freeze({...L,body:"",hidden:!1});var ce=Object.freeze({width:null,height:null}),B=Object.freeze({...ce,...S});var O=/^[a-z0-9]+(-[a-z0-9]+)*$/,V=i((e,o,t,n="")=>{let r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;n=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){let l=r.pop(),h=r.pop(),C={provider:r.length>0?r[0]:n,prefix:h,name:l};return o&&!k(C)?null:C}let c=r[0],f=c.split("-");if(f.length>1){let l={provider:n,prefix:f.shift(),name:f.join("-")};return o&&!k(l)?null:l}if(t&&n===""){let l={provider:n,prefix:"",name:c};return o&&!k(l,t)?null:l}return null},"stringToIcon"),k=i((e,o)=>e?!!((e.provider===""||e.provider.match(O))&&(o&&e.prefix===""||e.prefix.match(O))&&e.name.match(O)):!1,"validateIconName");function K(e,o){let t={};!e.hFlip!=!o.hFlip&&(t.hFlip=!0),!e.vFlip!=!o.vFlip&&(t.vFlip=!0);let n=((e.rotate||0)+(o.rotate||0))%4;return n&&(t.rotate=n),t}i(K,"mergeIconTransformations");function G(e,o){let t=K(e,o);for(let n in J)n in S?n in e&&!(n in t)&&(t[n]=S[n]):n in o?t[n]=o[n]:n in e&&(t[n]=e[n]);return t}i(G,"mergeIconData");function W(e,o){let t=e.icons,n=e.aliases||Object.create(null),r=Object.create(null);function c(f){if(t[f])return r[f]=[];if(!(f in r)){r[f]=null;let l=n[f]&&n[f].parent,h=l&&c(l);h&&(r[f]=[l].concat(h))}return r[f]}return i(c,"resolve"),(o||Object.keys(t).concat(Object.keys(n))).forEach(c),r}i(W,"getIconsTree");function Z(e,o,t){let n=e.icons,r=e.aliases||Object.create(null),c={};function f(l){c=G(n[l]||r[l],c)}return i(f,"parse"),f(o),t.forEach(f),G(e,c)}i(Z,"internalGetIconData");function z(e,o){if(e.icons[o])return Z(e,o,[]);let t=W(e,[o])[o];return t?Z(e,o,t):null}i(z,"getIconData");var ae=/(-?[0-9.]*[0-9]+[0-9.]*)/g,fe=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function N(e,o,t){if(o===1)return e;if(t=t||100,typeof e=="number")return Math.ceil(e*o*t)/t;if(typeof e!="string")return e;let n=e.split(ae);if(n===null||!n.length)return e;let r=[],c=n.shift(),f=fe.test(c);for(;;){if(f){let l=parseFloat(c);isNaN(l)?r.push(c):r.push(Math.ceil(l*o*t)/t)}else r.push(c);if(c=n.shift(),c===void 0)return r.join("");f=!f}}i(N,"calculateSize");function le(e,o="defs"){let t="",n=e.indexOf("<"+o);for(;n>=0;){let r=e.indexOf(">",n),c=e.indexOf("</"+o);if(r===-1||c===-1)break;let f=e.indexOf(">",c);if(f===-1)break;t+=e.slice(r+1,c).trim(),e=e.slice(0,n).trim()+e.slice(f+1)}return{defs:t,content:e}}i(le,"splitSVGDefs");function ue(e,o){return e?"<defs>"+e+"</defs>"+o:o}i(ue,"mergeDefsAndContent");function _(e,o,t){let n=le(e);return ue(n.defs,o+n.content+t)}i(_,"wrapSVGContent");var pe=i(e=>e==="unset"||e==="undefined"||e==="none","isUnsetKeyword");function $(e,o){let t={...L,...e},n={...B,...o},r={left:t.left,top:t.top,width:t.width,height:t.height},c=t.body;[t,n].forEach(m=>{let u=[],I=m.hFlip,F=m.vFlip,x=m.rotate;I?F?x+=2:(u.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),u.push("scale(-1 1)"),r.top=r.left=0):F&&(u.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),u.push("scale(1 -1)"),r.top=r.left=0);let d;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:d=r.height/2+r.top,u.unshift("rotate(90 "+d.toString()+" "+d.toString()+")");break;case 2:u.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:d=r.width/2+r.left,u.unshift("rotate(-90 "+d.toString()+" "+d.toString()+")");break}x%2===1&&(r.left!==r.top&&(d=r.left,r.left=r.top,r.top=d),r.width!==r.height&&(d=r.width,r.width=r.height,r.height=d)),u.length&&(c=_(c,'<g transform="'+u.join(" ")+'">',"</g>"))});let f=n.width,l=n.height,h=r.width,C=r.height,s,a;f===null?(a=l===null?"1em":l==="auto"?C:l,s=N(a,h/C)):(s=f==="auto"?h:f,a=l===null?N(s,C/h):l==="auto"?C:l);let p={},w=i((m,u)=>{pe(u)||(p[m]=u.toString())},"setAttr");w("width",s),w("height",a);let T=[r.left,r.top,h,C];return p.viewBox=T.join(" "),{attributes:p,viewBox:T,body:c}}i($,"iconToSVG");var me=/\sid="(\S+)"/g,de="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16),ge=0;function U(e,o=de){let t=[],n;for(;n=me.exec(e);)t.push(n[1]);if(!t.length)return e;let r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return t.forEach(c=>{let f=typeof o=="function"?o(c):o+(ge++).toString(),l=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+f+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}i(U,"replaceIDs");function q(e,o){let t=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(let n in o)t+=" "+n+'="'+o[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}i(q,"iconToHTML");var mt=ie(te(),1);var je={body:'<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',height:80,width:80},R=new Map,oe=new Map,yt=i(e=>{for(let o of e){if(!o.name)throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');if(j.debug("Registering icon pack:",o.name),"loader"in o)oe.set(o.name,o.loader);else if("icons"in o)R.set(o.name,o.icons);else throw j.error("Invalid icon loader:",o),new Error('Invalid icon loader. Must have either "icons" or "loader" property.')}},"registerIconPacks"),Oe=i(async(e,o)=>{let t=V(e,!0,o!==void 0);if(!t)throw new Error(`Invalid icon name: ${e}`);let n=t.prefix||o;if(!n)throw new Error(`Icon name must contain a prefix: ${e}`);let r=R.get(n);if(!r){let f=oe.get(n);if(!f)throw new Error(`Icon set not found: ${t.prefix}`);try{r={...await f(),prefix:n},R.set(n,r)}catch(l){throw j.error(l),new Error(`Failed to load icon set: ${t.prefix}`)}}let c=z(r,t.name);if(!c)throw new Error(`Icon not found: ${e}`);return c},"getRegisteredIconData");var St=i(async(e,o)=>{let t;try{t=await Oe(e,o?.fallbackPrefix)}catch(c){j.error(c),t=je}let n=$(t,o);return q(U(n.body),n.attributes)},"getIconSVG");export{je as a,yt as b,St as c};