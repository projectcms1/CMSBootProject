(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.simpleDatatables = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";const t=t=>"[object Object]"===Object.prototype.toString.call(t),e=e=>{let s=!1;try{s=JSON.parse(e)}catch(t){return!1}return!(null===s||!Array.isArray(s)&&!t(s))&&s},s=(t,e)=>{const s=document.createElement(t);if(e&&"object"==typeof e)for(const t in e)"html"===t?s.innerHTML=e[t]:s.setAttribute(t,e[t]);return s},i=t=>["#text","#comment"].includes(t.nodeName)?t.data:t.childNodes?t.childNodes.map((t=>i(t))).join(""):"",n=t=>{if(null==t)return"";if(t.hasOwnProperty("text")||t.hasOwnProperty("data")){const e=t;return e.text??n(e.data)}return t.hasOwnProperty("nodeName")?i(t):String(t)},a=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},o=function(t,e){let s=0,i=0;for(;s<t+1;){e[i].hidden||(s+=1),i+=1}return i-1},r=function(t){const e={};if(t)for(const s of t)e[s.name]=s.value;return e},l=t=>t?t.trim().split(" ").map((t=>`.${t}`)).join(""):null,d=(t,e)=>{const s=e?.split(" ").some((e=>!t.classList.contains(e)));return!s},c=(t,e)=>t?e?`${t} ${e}`:t:e||"";var h=function(){return h=Object.assign||function(t){for(var e,s=arguments,i=1,n=arguments.length;i<n;i++)for(var a in e=s[i])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},h.apply(this,arguments)};function u(t,e,s){if(s||2===arguments.length)for(var i,n=0,a=e.length;n<a;n++)!i&&n in e||(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var p=function(){function t(t){void 0===t&&(t={});var e=this;Object.entries(t).forEach((function(t){var s=t[0],i=t[1];return e[s]=i}))}return t.prototype.toString=function(){return JSON.stringify(this)},t.prototype.setValue=function(t,e){return this[t]=e,this},t}();function f(t){for(var e=arguments,s=[],i=1;i<arguments.length;i++)s[i-1]=e[i];return null!=t&&s.some((function(e){var s,i;return"function"==typeof(null===(i=null===(s=null==t?void 0:t.ownerDocument)||void 0===s?void 0:s.defaultView)||void 0===i?void 0:i[e])&&t instanceof t.ownerDocument.defaultView[e]}))}function m(t,e,s){var i;return"#text"===t.nodeName?i=s.document.createTextNode(t.data):"#comment"===t.nodeName?i=s.document.createComment(t.data):(e?(i=s.document.createElementNS("http://www.w3.org/2000/svg",t.nodeName),"foreignObject"===t.nodeName&&(e=!1)):"svg"===t.nodeName.toLowerCase()?(i=s.document.createElementNS("http://www.w3.org/2000/svg","svg"),e=!0):i=s.document.createElement(t.nodeName),t.attributes&&Object.entries(t.attributes).forEach((function(t){var e=t[0],s=t[1];return i.setAttribute(e,s)})),t.childNodes&&t.childNodes.forEach((function(t){return i.appendChild(m(t,e,s))})),s.valueDiffing&&(t.value&&f(i,"HTMLButtonElement","HTMLDataElement","HTMLInputElement","HTMLLIElement","HTMLMeterElement","HTMLOptionElement","HTMLProgressElement","HTMLParamElement")&&(i.value=t.value),t.checked&&f(i,"HTMLInputElement")&&(i.checked=t.checked),t.selected&&f(i,"HTMLOptionElement")&&(i.selected=t.selected))),i}var g=function(t,e){for(e=e.slice();e.length>0;){var s=e.splice(0,1)[0];t=t.childNodes[s]}return t};function b(t,e,s){var i,n,a,o=e[s._const.action],r=e[s._const.route];[s._const.addElement,s._const.addTextElement].includes(o)||(i=g(t,r));var l={diff:e,node:i};if(s.preDiffApply(l))return!0;switch(o){case s._const.addAttribute:if(!i||!f(i,"Element"))return!1;i.setAttribute(e[s._const.name],e[s._const.value]);break;case s._const.modifyAttribute:if(!i||!f(i,"Element"))return!1;i.setAttribute(e[s._const.name],e[s._const.newValue]),f(i,"HTMLInputElement")&&"value"===e[s._const.name]&&(i.value=e[s._const.newValue]);break;case s._const.removeAttribute:if(!i||!f(i,"Element"))return!1;i.removeAttribute(e[s._const.name]);break;case s._const.modifyTextElement:if(!i||!f(i,"Text"))return!1;s.textDiff(i,i.data,e[s._const.oldValue],e[s._const.newValue]),f(i.parentNode,"HTMLTextAreaElement")&&(i.parentNode.value=e[s._const.newValue]);break;case s._const.modifyValue:if(!i||void 0===i.value)return!1;i.value=e[s._const.newValue];break;case s._const.modifyComment:if(!i||!f(i,"Comment"))return!1;s.textDiff(i,i.data,e[s._const.oldValue],e[s._const.newValue]);break;case s._const.modifyChecked:if(!i||void 0===i.checked)return!1;i.checked=e[s._const.newValue];break;case s._const.modifySelected:if(!i||void 0===i.selected)return!1;i.selected=e[s._const.newValue];break;case s._const.replaceElement:var d="svg"===e[s._const.newValue].nodeName.toLowerCase()||"http://www.w3.org/2000/svg"===i.parentNode.namespaceURI;i.parentNode.replaceChild(m(e[s._const.newValue],d,s),i);break;case s._const.relocateGroup:u([],new Array(e[s._const.groupLength]),!0).map((function(){return i.removeChild(i.childNodes[e[s._const.from]])})).forEach((function(t,n){0===n&&(a=i.childNodes[e[s._const.to]]),i.insertBefore(t,a||null)}));break;case s._const.removeElement:i.parentNode.removeChild(i);break;case s._const.addElement:var c=(p=r.slice()).splice(p.length-1,1)[0];if(!f(i=g(t,p),"Element"))return!1;i.insertBefore(m(e[s._const.element],"http://www.w3.org/2000/svg"===i.namespaceURI,s),i.childNodes[c]||null);break;case s._const.removeTextElement:if(!i||3!==i.nodeType)return!1;var h=i.parentNode;h.removeChild(i),f(h,"HTMLTextAreaElement")&&(h.value="");break;case s._const.addTextElement:var p;c=(p=r.slice()).splice(p.length-1,1)[0];if(n=s.document.createTextNode(e[s._const.value]),!(i=g(t,p)).childNodes)return!1;i.insertBefore(n,i.childNodes[c]||null),f(i.parentNode,"HTMLTextAreaElement")&&(i.parentNode.value=e[s._const.value]);break;default:console.log("unknown action")}return s.postDiffApply({diff:l.diff,node:l.node,newNode:n}),!0}function v(t,e,s){var i=t[e];t[e]=t[s],t[s]=i}function _(t,e,s){(e=e.slice()).reverse(),e.forEach((function(e){!function(t,e,s){switch(e[s._const.action]){case s._const.addAttribute:e[s._const.action]=s._const.removeAttribute,b(t,e,s);break;case s._const.modifyAttribute:v(e,s._const.oldValue,s._const.newValue),b(t,e,s);break;case s._const.removeAttribute:e[s._const.action]=s._const.addAttribute,b(t,e,s);break;case s._const.modifyTextElement:case s._const.modifyValue:case s._const.modifyComment:case s._const.modifyChecked:case s._const.modifySelected:case s._const.replaceElement:v(e,s._const.oldValue,s._const.newValue),b(t,e,s);break;case s._const.relocateGroup:v(e,s._const.from,s._const.to),b(t,e,s);break;case s._const.removeElement:e[s._const.action]=s._const.addElement,b(t,e,s);break;case s._const.addElement:e[s._const.action]=s._const.removeElement,b(t,e,s);break;case s._const.removeTextElement:e[s._const.action]=s._const.addTextElement,b(t,e,s);break;case s._const.addTextElement:e[s._const.action]=s._const.removeTextElement,b(t,e,s);break;default:console.log("unknown action")}}(t,e,s)}))}var w=function(t){var e=[];return e.push(t.nodeName),"#text"!==t.nodeName&&"#comment"!==t.nodeName&&t.attributes&&(t.attributes.class&&e.push("".concat(t.nodeName,".").concat(t.attributes.class.replace(/ /g,"."))),t.attributes.id&&e.push("".concat(t.nodeName,"#").concat(t.attributes.id))),e},y=function(t){var e={},s={};return t.forEach((function(t){w(t).forEach((function(t){var i=t in e;i||t in s?i&&(delete e[t],s[t]=!0):e[t]=!0}))})),e},D=function(t,e){var s=y(t),i=y(e),n={};return Object.keys(s).forEach((function(t){i[t]&&(n[t]=!0)})),n},M=function(t){return delete t.outerDone,delete t.innerDone,delete t.valueDone,!t.childNodes||t.childNodes.every(M)},N=function(t){if(Object.prototype.hasOwnProperty.call(t,"data"))return{nodeName:"#text"===t.nodeName?"#text":"#comment",data:t.data};var e={nodeName:t.nodeName};return Object.prototype.hasOwnProperty.call(t,"attributes")&&(e.attributes=h({},t.attributes)),Object.prototype.hasOwnProperty.call(t,"checked")&&(e.checked=t.checked),Object.prototype.hasOwnProperty.call(t,"value")&&(e.value=t.value),Object.prototype.hasOwnProperty.call(t,"selected")&&(e.selected=t.selected),Object.prototype.hasOwnProperty.call(t,"childNodes")&&(e.childNodes=t.childNodes.map((function(t){return N(t)}))),e},x=function(t,e){if(!["nodeName","value","checked","selected","data"].every((function(s){return t[s]===e[s]})))return!1;if(Object.prototype.hasOwnProperty.call(t,"data"))return!0;if(Boolean(t.attributes)!==Boolean(e.attributes))return!1;if(Boolean(t.childNodes)!==Boolean(e.childNodes))return!1;if(t.attributes){var s=Object.keys(t.attributes),i=Object.keys(e.attributes);if(s.length!==i.length)return!1;if(!s.every((function(s){return t.attributes[s]===e.attributes[s]})))return!1}if(t.childNodes){if(t.childNodes.length!==e.childNodes.length)return!1;if(!t.childNodes.every((function(t,s){return x(t,e.childNodes[s])})))return!1}return!0},O=function(t,e,s,i,n){if(void 0===n&&(n=!1),!t||!e)return!1;if(t.nodeName!==e.nodeName)return!1;if(["#text","#comment"].includes(t.nodeName))return!!n||t.data===e.data;if(t.nodeName in s)return!0;if(t.attributes&&e.attributes){if(t.attributes.id){if(t.attributes.id!==e.attributes.id)return!1;if("".concat(t.nodeName,"#").concat(t.attributes.id)in s)return!0}if(t.attributes.class&&t.attributes.class===e.attributes.class)if("".concat(t.nodeName,".").concat(t.attributes.class.replace(/ /g,"."))in s)return!0}if(i)return!0;var a=t.childNodes?t.childNodes.slice().reverse():[],o=e.childNodes?e.childNodes.slice().reverse():[];if(a.length!==o.length)return!1;if(n)return a.every((function(t,e){return t.nodeName===o[e].nodeName}));var r=D(a,o);return a.every((function(t,e){return O(t,o[e],r,!0,!0)}))},E=function(t,e){return u([],new Array(t),!0).map((function(){return e}))},V=function(t,e){for(var s=t.childNodes?t.childNodes:[],i=e.childNodes?e.childNodes:[],n=E(s.length,!1),a=E(i.length,!1),o=[],r=function(){return arguments[1]},l=!1,d=function(){var t=function(t,e,s,i){var n=0,a=[],o=t.length,r=e.length,l=u([],new Array(o+1),!0).map((function(){return[]})),d=D(t,e),c=o===r;c&&t.some((function(t,s){var i=w(t),n=w(e[s]);return i.length!==n.length?(c=!1,!0):(i.some((function(t,e){if(t!==n[e])return c=!1,!0})),!c||void 0)}));for(var h=0;h<o;h++)for(var p=t[h],f=0;f<r;f++){var m=e[f];s[h]||i[f]||!O(p,m,d,c)?l[h+1][f+1]=0:(l[h+1][f+1]=l[h][f]?l[h][f]+1:1,l[h+1][f+1]>=n&&(n=l[h+1][f+1],a=[h+1,f+1]))}return 0!==n&&{oldValue:a[0]-n,newValue:a[1]-n,length:n}}(s,i,n,a);t?(o.push(t),u([],new Array(t.length),!0).map(r).forEach((function(e){return function(t,e,s,i){t[s.oldValue+i]=!0,e[s.newValue+i]=!0}(n,a,t,e)}))):l=!0};!l;)d();return t.subsets=o,t.subsetsAge=100,o},$=function(){function t(){this.list=[]}return t.prototype.add=function(t){var e;(e=this.list).push.apply(e,t)},t.prototype.forEach=function(t){this.list.forEach((function(e){return t(e)}))},t}();function C(t,e){var s,i,n=t;for(e=e.slice();e.length>0;)i=e.splice(0,1)[0],s=n,n=n.childNodes?n.childNodes[i]:void 0;return{node:n,parentNode:s,nodeIndex:i}}function S(t,e,s){return e.forEach((function(e){!function(t,e,s){var i,n,a,o;if(![s._const.addElement,s._const.addTextElement].includes(e[s._const.action])){var r=C(t,e[s._const.route]);n=r.node,a=r.parentNode,o=r.nodeIndex}var l,d,c=[],h={diff:e,node:n};if(s.preVirtualDiffApply(h))return!0;switch(e[s._const.action]){case s._const.addAttribute:n.attributes||(n.attributes={}),n.attributes[e[s._const.name]]=e[s._const.value],"checked"===e[s._const.name]?n.checked=!0:"selected"===e[s._const.name]?n.selected=!0:"INPUT"===n.nodeName&&"value"===e[s._const.name]&&(n.value=e[s._const.value]);break;case s._const.modifyAttribute:n.attributes[e[s._const.name]]=e[s._const.newValue];break;case s._const.removeAttribute:delete n.attributes[e[s._const.name]],0===Object.keys(n.attributes).length&&delete n.attributes,"checked"===e[s._const.name]?n.checked=!1:"selected"===e[s._const.name]?delete n.selected:"INPUT"===n.nodeName&&"value"===e[s._const.name]&&delete n.value;break;case s._const.modifyTextElement:n.data=e[s._const.newValue],"TEXTAREA"===a.nodeName&&(a.value=e[s._const.newValue]);break;case s._const.modifyValue:n.value=e[s._const.newValue];break;case s._const.modifyComment:n.data=e[s._const.newValue];break;case s._const.modifyChecked:n.checked=e[s._const.newValue];break;case s._const.modifySelected:n.selected=e[s._const.newValue];break;case s._const.replaceElement:l=N(e[s._const.newValue]),a.childNodes[o]=l;break;case s._const.relocateGroup:n.childNodes.splice(e[s._const.from],e[s._const.groupLength]).reverse().forEach((function(t){return n.childNodes.splice(e[s._const.to],0,t)})),n.subsets&&n.subsets.forEach((function(t){if(e[s._const.from]<e[s._const.to]&&t.oldValue<=e[s._const.to]&&t.oldValue>e[s._const.from])t.oldValue-=e[s._const.groupLength],(i=t.oldValue+t.length-e[s._const.to])>0&&(c.push({oldValue:e[s._const.to]+e[s._const.groupLength],newValue:t.newValue+t.length-i,length:i}),t.length-=i);else if(e[s._const.from]>e[s._const.to]&&t.oldValue>e[s._const.to]&&t.oldValue<e[s._const.from]){var i;t.oldValue+=e[s._const.groupLength],(i=t.oldValue+t.length-e[s._const.to])>0&&(c.push({oldValue:e[s._const.to]+e[s._const.groupLength],newValue:t.newValue+t.length-i,length:i}),t.length-=i)}else t.oldValue===e[s._const.from]&&(t.oldValue=e[s._const.to])}));break;case s._const.removeElement:a.childNodes.splice(o,1),a.subsets&&a.subsets.forEach((function(t){t.oldValue>o?t.oldValue-=1:t.oldValue===o?t.delete=!0:t.oldValue<o&&t.oldValue+t.length>o&&(t.oldValue+t.length-1===o?t.length--:(c.push({newValue:t.newValue+o-t.oldValue,oldValue:o,length:t.length-o+t.oldValue-1}),t.length=o-t.oldValue))})),n=a;break;case s._const.addElement:var u=(d=e[s._const.route].slice()).splice(d.length-1,1)[0];n=null===(i=C(t,d))||void 0===i?void 0:i.node,l=N(e[s._const.element]),n.childNodes||(n.childNodes=[]),u>=n.childNodes.length?n.childNodes.push(l):n.childNodes.splice(u,0,l),n.subsets&&n.subsets.forEach((function(t){if(t.oldValue>=u)t.oldValue+=1;else if(t.oldValue<u&&t.oldValue+t.length>u){var e=t.oldValue+t.length-u;c.push({newValue:t.newValue+t.length-e,oldValue:u+1,length:e}),t.length-=e}}));break;case s._const.removeTextElement:a.childNodes.splice(o,1),"TEXTAREA"===a.nodeName&&delete a.value,a.subsets&&a.subsets.forEach((function(t){t.oldValue>o?t.oldValue-=1:t.oldValue===o?t.delete=!0:t.oldValue<o&&t.oldValue+t.length>o&&(t.oldValue+t.length-1===o?t.length--:(c.push({newValue:t.newValue+o-t.oldValue,oldValue:o,length:t.length-o+t.oldValue-1}),t.length=o-t.oldValue))})),n=a;break;case s._const.addTextElement:var p=(d=e[s._const.route].slice()).splice(d.length-1,1)[0];l={nodeName:"#text",data:e[s._const.value]},(n=C(t,d).node).childNodes||(n.childNodes=[]),p>=n.childNodes.length?n.childNodes.push(l):n.childNodes.splice(p,0,l),"TEXTAREA"===n.nodeName&&(n.value=e[s._const.newValue]),n.subsets&&n.subsets.forEach((function(t){if(t.oldValue>=p&&(t.oldValue+=1),t.oldValue<p&&t.oldValue+t.length>p){var e=t.oldValue+t.length-p;c.push({newValue:t.newValue+t.length-e,oldValue:p+1,length:e}),t.length-=e}}));break;default:console.log("unknown action")}n.subsets&&(n.subsets=n.subsets.filter((function(t){return!t.delete&&t.oldValue!==t.newValue})),c.length&&(n.subsets=n.subsets.concat(c))),s.postVirtualDiffApply({node:h.node,diff:h.diff,newNode:l})}(t,e,s)})),!0}function k(t,e){void 0===e&&(e={valueDiffing:!0});var s={nodeName:t.nodeName};if(f(t,"Text","Comment"))s.data=t.data;else{if(t.attributes&&t.attributes.length>0)s.attributes={},Array.prototype.slice.call(t.attributes).forEach((function(t){return s.attributes[t.name]=t.value}));if(t.childNodes&&t.childNodes.length>0)s.childNodes=[],Array.prototype.slice.call(t.childNodes).forEach((function(t){return s.childNodes.push(k(t,e))}));e.valueDiffing&&(f(t,"HTMLTextAreaElement")&&(s.value=t.value),f(t,"HTMLInputElement")&&["radio","checkbox"].includes(t.type.toLowerCase())&&void 0!==t.checked?s.checked=t.checked:f(t,"HTMLButtonElement","HTMLDataElement","HTMLInputElement","HTMLLIElement","HTMLMeterElement","HTMLOptionElement","HTMLProgressElement","HTMLParamElement")&&(s.value=t.value),f(t,"HTMLOptionElement")&&(s.selected=t.selected))}return s}var T=/<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g,A=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function L(t){return t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}var P={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuItem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},R=function(t,e){var s={nodeName:"",attributes:{}},i=!1,n=t.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(s.nodeName=e||"svg"===n[1]?n[1]:n[1].toUpperCase(),(P[n[1]]||"/"===t.charAt(t.length-2))&&(i=!0),s.nodeName.startsWith("!--"))){var a=t.indexOf("--\x3e");return{type:"comment",node:{nodeName:"#comment",data:-1!==a?t.slice(4,a):""},voidElement:i}}for(var o=new RegExp(A),r=null,l=!1;!l;)if(null===(r=o.exec(t)))l=!0;else if(r[0].trim())if(r[1]){var d=r[1].trim(),c=[d,""];d.indexOf("=")>-1&&(c=d.split("=")),s.attributes[c[0]]=c[1],o.lastIndex--}else r[2]&&(s.attributes[r[2]]=r[3].trim().substring(1,r[3].length-1));return{type:"tag",node:s,voidElement:i}},H=function(t,e){void 0===e&&(e={valueDiffing:!0,caseSensitive:!1});var s,i=[],n=-1,a=[],o=!1;if(0!==t.indexOf("<")){var r=t.indexOf("<");i.push({nodeName:"#text",data:-1===r?t:t.substring(0,r)})}return t.replace(T,(function(r,l){var d="/"!==r.charAt(1),c=r.startsWith("\x3c!--"),h=l+r.length,u=t.charAt(h);if(c){var p=R(r,e.caseSensitive).node;if(n<0)return i.push(p),"";var f=a[n];return f&&p.nodeName&&(f.node.childNodes||(f.node.childNodes=[]),f.node.childNodes.push(p)),""}if(d){if("svg"===(s=R(r,e.caseSensitive||o)).node.nodeName&&(o=!0),n++,!s.voidElement&&u&&"<"!==u){s.node.childNodes||(s.node.childNodes=[]);var m=L(t.slice(h,t.indexOf("<",h)));s.node.childNodes.push({nodeName:"#text",data:m}),e.valueDiffing&&"TEXTAREA"===s.node.nodeName&&(s.node.value=m)}0===n&&s.node.nodeName&&i.push(s.node);var g=a[n-1];g&&s.node.nodeName&&(g.node.childNodes||(g.node.childNodes=[]),g.node.childNodes.push(s.node)),a[n]=s}if((!d||s.voidElement)&&(n>-1&&(s.voidElement||e.caseSensitive&&s.node.nodeName===r.slice(2,-1)||!e.caseSensitive&&s.node.nodeName.toUpperCase()===r.slice(2,-1).toUpperCase())&&--n>-1&&("svg"===s.node.nodeName&&(o=!1),s=a[n]),"<"!==u&&u)){var b=-1===n?i:a[n].node.childNodes||[],v=t.indexOf("<",h);m=L(t.slice(h,-1===v?void 0:v));b.push({nodeName:"#text",data:m})}return""})),i[0]},I=function(){function t(t,e,s){this.options=s,this.t1="undefined"!=typeof Element&&f(t,"Element")?k(t,this.options):"string"==typeof t?H(t,this.options):JSON.parse(JSON.stringify(t)),this.t2="undefined"!=typeof Element&&f(e,"Element")?k(e,this.options):"string"==typeof e?H(e,this.options):JSON.parse(JSON.stringify(e)),this.diffcount=0,this.foundAll=!1,this.debug&&(this.t1Orig="undefined"!=typeof Element&&f(t,"Element")?k(t,this.options):"string"==typeof t?H(t,this.options):JSON.parse(JSON.stringify(t)),this.t2Orig="undefined"!=typeof Element&&f(e,"Element")?k(e,this.options):"string"==typeof e?H(e,this.options):JSON.parse(JSON.stringify(e))),this.tracker=new $}return t.prototype.init=function(){return this.findDiffs(this.t1,this.t2)},t.prototype.findDiffs=function(t,e){var s;do{if(this.options.debug&&(this.diffcount+=1,this.diffcount>this.options.diffcap))throw new Error("surpassed diffcap:".concat(JSON.stringify(this.t1Orig)," -> ").concat(JSON.stringify(this.t2Orig)));0===(s=this.findNextDiff(t,e,[])).length&&(x(t,e)||(this.foundAll?console.error("Could not find remaining diffs!"):(this.foundAll=!0,M(t),s=this.findNextDiff(t,e,[])))),s.length>0&&(this.foundAll=!1,this.tracker.add(s),S(t,s,this.options))}while(s.length>0);return this.tracker.list},t.prototype.findNextDiff=function(t,e,s){var i,n;if(this.options.maxDepth&&s.length>this.options.maxDepth)return[];if(!t.outerDone){if(i=this.findOuterDiff(t,e,s),this.options.filterOuterDiff&&(n=this.options.filterOuterDiff(t,e,i))&&(i=n),i.length>0)return t.outerDone=!0,i;t.outerDone=!0}if(Object.prototype.hasOwnProperty.call(t,"data"))return[];if(!t.innerDone){if((i=this.findInnerDiff(t,e,s)).length>0)return i;t.innerDone=!0}if(this.options.valueDiffing&&!t.valueDone){if((i=this.findValueDiff(t,e,s)).length>0)return t.valueDone=!0,i;t.valueDone=!0}return[]},t.prototype.findOuterDiff=function(t,e,s){var i,n,a,o,r,l,d=[];if(t.nodeName!==e.nodeName){if(!s.length)throw new Error("Top level nodes have to be of the same kind.");return[(new p).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,N(t)).setValue(this.options._const.newValue,N(e)).setValue(this.options._const.route,s)]}if(s.length&&this.options.diffcap<Math.abs((t.childNodes||[]).length-(e.childNodes||[]).length))return[(new p).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,N(t)).setValue(this.options._const.newValue,N(e)).setValue(this.options._const.route,s)];if(Object.prototype.hasOwnProperty.call(t,"data")&&t.data!==e.data)return"#text"===t.nodeName?[(new p).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,s).setValue(this.options._const.oldValue,t.data).setValue(this.options._const.newValue,e.data)]:[(new p).setValue(this.options._const.action,this.options._const.modifyComment).setValue(this.options._const.route,s).setValue(this.options._const.oldValue,t.data).setValue(this.options._const.newValue,e.data)];for(n=t.attributes?Object.keys(t.attributes).sort():[],a=e.attributes?Object.keys(e.attributes).sort():[],o=n.length,l=0;l<o;l++)i=n[l],-1===(r=a.indexOf(i))?d.push((new p).setValue(this.options._const.action,this.options._const.removeAttribute).setValue(this.options._const.route,s).setValue(this.options._const.name,i).setValue(this.options._const.value,t.attributes[i])):(a.splice(r,1),t.attributes[i]!==e.attributes[i]&&d.push((new p).setValue(this.options._const.action,this.options._const.modifyAttribute).setValue(this.options._const.route,s).setValue(this.options._const.name,i).setValue(this.options._const.oldValue,t.attributes[i]).setValue(this.options._const.newValue,e.attributes[i])));for(o=a.length,l=0;l<o;l++)i=a[l],d.push((new p).setValue(this.options._const.action,this.options._const.addAttribute).setValue(this.options._const.route,s).setValue(this.options._const.name,i).setValue(this.options._const.value,e.attributes[i]));return d},t.prototype.findInnerDiff=function(t,e,s){var i=t.childNodes?t.childNodes.slice():[],n=e.childNodes?e.childNodes.slice():[],a=Math.max(i.length,n.length),o=Math.abs(i.length-n.length),r=[],l=0;if(!this.options.maxChildCount||a<this.options.maxChildCount){var d=Boolean(t.subsets&&t.subsetsAge--),c=d?t.subsets:t.childNodes&&e.childNodes?V(t,e):[];if(c.length>0&&(r=this.attemptGroupRelocation(t,e,c,s,d)).length>0)return r}for(var h=0;h<a;h+=1){var u=i[h],f=n[h];o&&(u&&!f?"#text"===u.nodeName?(r.push((new p).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.value,u.data)),l-=1):(r.push((new p).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.element,N(u))),l-=1):f&&!u&&("#text"===f.nodeName?r.push((new p).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.value,f.data)):r.push((new p).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.element,N(f))))),u&&f&&(!this.options.maxChildCount||a<this.options.maxChildCount?r=r.concat(this.findNextDiff(u,f,s.concat(l))):x(u,f)||(i.length>n.length?("#text"===u.nodeName?r.push((new p).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,s.concat(l)).setValue(this.options._const.value,u.data)):r.push((new p).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.element,N(u)).setValue(this.options._const.route,s.concat(l))),i.splice(h,1),h-=1,l-=1,o-=1):i.length<n.length?(r=r.concat([(new p).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.element,N(f)).setValue(this.options._const.route,s.concat(l))]),i.splice(h,0,N(f)),o-=1):r=r.concat([(new p).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,N(u)).setValue(this.options._const.newValue,N(f)).setValue(this.options._const.route,s.concat(l))]))),l+=1}return t.innerDone=!0,r},t.prototype.attemptGroupRelocation=function(t,e,s,i,n){for(var a,o,r,l,d,c=function(t,e,s){var i=t.childNodes?E(t.childNodes.length,!0):[],n=e.childNodes?E(e.childNodes.length,!0):[],a=0;return s.forEach((function(t){for(var e=t.oldValue+t.length,s=t.newValue+t.length,o=t.oldValue;o<e;o+=1)i[o]=a;for(o=t.newValue;o<s;o+=1)n[o]=a;a+=1})),{gaps1:i,gaps2:n}}(t,e,s),h=c.gaps1,u=c.gaps2,f=t.childNodes.slice(),m=e.childNodes.slice(),g=Math.min(h.length,u.length),b=[],v=0,_=0;v<g;_+=1,v+=1)if(!n||!0!==h[v]&&!0!==u[v]){if(!0===h[_])if("#text"===(l=f[_]).nodeName)if("#text"===m[v].nodeName){if(l.data!==m[v].data){for(var w=_;f.length>w+1&&"#text"===f[w+1].nodeName;)if(w+=1,m[v].data===f[w].data){d=!0;break}d||b.push((new p).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,i.concat(_)).setValue(this.options._const.oldValue,l.data).setValue(this.options._const.newValue,m[v].data))}}else b.push((new p).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,i.concat(_)).setValue(this.options._const.value,l.data)),h.splice(_,1),f.splice(_,1),g=Math.min(h.length,u.length),_-=1,v-=1;else!0===u[v]?b.push((new p).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,N(l)).setValue(this.options._const.newValue,N(m[v])).setValue(this.options._const.route,i.concat(_))):(b.push((new p).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,i.concat(_)).setValue(this.options._const.element,N(l))),h.splice(_,1),f.splice(_,1),g=Math.min(h.length,u.length),_-=1,v-=1);else if(!0===u[v])"#text"===(l=m[v]).nodeName?(b.push((new p).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,i.concat(_)).setValue(this.options._const.value,l.data)),h.splice(_,0,!0),f.splice(_,0,{nodeName:"#text",data:l.data}),g=Math.min(h.length,u.length)):(b.push((new p).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,i.concat(_)).setValue(this.options._const.element,N(l))),h.splice(_,0,!0),f.splice(_,0,N(l)),g=Math.min(h.length,u.length));else if(h[_]!==u[v]){if(b.length>0)return b;if(r=s[h[_]],(o=Math.min(r.newValue,f.length-r.length))!==r.oldValue){a=!1;for(var y=0;y<r.length;y+=1)O(f[o+y],f[r.oldValue+y],{},!1,!0)||(a=!0);if(a)return[(new p).setValue(this.options._const.action,this.options._const.relocateGroup).setValue(this.options._const.groupLength,r.length).setValue(this.options._const.from,r.oldValue).setValue(this.options._const.to,o).setValue(this.options._const.route,i)]}}}else;return b},t.prototype.findValueDiff=function(t,e,s){var i=[];return t.selected!==e.selected&&i.push((new p).setValue(this.options._const.action,this.options._const.modifySelected).setValue(this.options._const.oldValue,t.selected).setValue(this.options._const.newValue,e.selected).setValue(this.options._const.route,s)),(t.value||e.value)&&t.value!==e.value&&"OPTION"!==t.nodeName&&i.push((new p).setValue(this.options._const.action,this.options._const.modifyValue).setValue(this.options._const.oldValue,t.value||"").setValue(this.options._const.newValue,e.value||"").setValue(this.options._const.route,s)),t.checked!==e.checked&&i.push((new p).setValue(this.options._const.action,this.options._const.modifyChecked).setValue(this.options._const.oldValue,t.checked).setValue(this.options._const.newValue,e.checked).setValue(this.options._const.route,s)),i},t}(),Y={debug:!1,diffcap:10,maxDepth:!1,maxChildCount:50,valueDiffing:!0,textDiff:function(t,e,s,i){t.data=i},preVirtualDiffApply:function(){},postVirtualDiffApply:function(){},preDiffApply:function(){},postDiffApply:function(){},filterOuterDiff:null,compress:!1,_const:!1,document:!("undefined"==typeof window||!window.document)&&window.document,components:[]},j=function(){function t(t){if(void 0===t&&(t={}),Object.entries(Y).forEach((function(e){var s=e[0],i=e[1];Object.prototype.hasOwnProperty.call(t,s)||(t[s]=i)})),!t._const){var e=["addAttribute","modifyAttribute","removeAttribute","modifyTextElement","relocateGroup","removeElement","addElement","removeTextElement","addTextElement","replaceElement","modifyValue","modifyChecked","modifySelected","modifyComment","action","route","oldValue","newValue","element","group","groupLength","from","to","name","value","data","attributes","nodeName","childNodes","checked","selected"],s={};t.compress?e.forEach((function(t,e){return s[t]=e})):e.forEach((function(t){return s[t]=t})),t._const=s}this.options=t}return t.prototype.apply=function(t,e){return function(t,e,s){return e.every((function(e){return b(t,e,s)}))}(t,e,this.options)},t.prototype.undo=function(t,e){return _(t,e,this.options)},t.prototype.diff=function(t,e){return new I(t,e,this.options).init()},t}();const F=(t,e,s,{classes:i,format:n,hiddenHeader:a,sortable:o,scrollY:r,type:l},{noColumnWidths:d,unhideHeader:h})=>({nodeName:"TR",childNodes:t.map(((t,u)=>{const p=e[u]||{type:l,format:n,sortable:!0,searchable:!0};if(p.hidden)return;const f=t.attributes?{...t.attributes}:{};if(p.sortable&&o&&(!r.length||h)&&(p.filter?f["data-filterable"]="true":f["data-sortable"]="true"),p.headerClass&&(f.class=c(f.class,p.headerClass)),s.sort&&s.sort.column===u){const t="asc"===s.sort.dir?i.ascending:i.descending;f.class=c(f.class,t),f["aria-sort"]="asc"===s.sort.dir?"ascending":"descending"}else s.filters[u]&&(f.class=c(f.class,i.filterActive));if(s.widths[u]&&!d){const t=`width: ${s.widths[u]}%;`;f.style=c(f.style,t)}if(r.length&&!h){const t="padding-bottom: 0;padding-top: 0;border: 0;";f.style=c(f.style,t)}const m="html"===t.type?t.data:[{nodeName:"#text",data:t.text??String(t.data)}];return{nodeName:"TH",attributes:f,childNodes:!a&&!r.length||h?p.sortable&&o?[{nodeName:"BUTTON",attributes:{class:p.filter?i.filter:i.sorter},childNodes:m}]:m:[{nodeName:"#text",data:""}]}})).filter((t=>t))}),q=(t,e,s,i,a,o,{classes:r,hiddenHeader:l,header:d,footer:h,format:u,sortable:p,scrollY:f,type:m,rowRender:g,tabIndex:b},{noColumnWidths:v,unhideHeader:_,renderHeader:w},y,D)=>{const M={nodeName:"TABLE",attributes:{...t},childNodes:[{nodeName:"TBODY",childNodes:s.map((({row:t,index:e})=>{const s={nodeName:"TR",attributes:{...t.attributes,"data-index":String(e)},childNodes:t.cells.map(((t,s)=>{const o=i[s]||{type:m,format:u,sortable:!0,searchable:!0};if(o.hidden)return;const r={nodeName:"TD",attributes:t.attributes?{...t.attributes}:{},childNodes:"html"===o.type?t.data:[{nodeName:"#text",data:n(t)}]};if(d||h||!a.widths[s]||v||(r.attributes.style=c(r.attributes.style,`width: ${a.widths[s]}%;`)),o.cellClass&&(r.attributes.class=c(r.attributes.class,o.cellClass)),o.render){const i=o.render(t.data,r,e,s);if(i){if("string"!=typeof i)return i;{const t=H(`<td>${i}</td>`);1===t.childNodes.length&&["#text","#comment"].includes(t.childNodes[0].nodeName)?r.childNodes[0].data=i:r.childNodes=t.childNodes}}}return r})).filter((t=>t))};if(e===o&&(s.attributes.class=c(s.attributes.class,r.cursor)),g){const i=g(t,s,e);if(i){if("string"!=typeof i)return i;{const t=H(`<tr>${i}</tr>`);!t.childNodes||1===t.childNodes.length&&["#text","#comment"].includes(t.childNodes[0].nodeName)?s.childNodes[0].data=i:s.childNodes=t.childNodes}}}return s}))}]};if(M.attributes.class=c(M.attributes.class,r.table),d||h||w){const t=F(e,i,a,{classes:r,hiddenHeader:l,sortable:p,scrollY:f},{noColumnWidths:v,unhideHeader:_});if(d||w){const e={nodeName:"THEAD",childNodes:[t]};!f.length&&!l||_||(e.attributes={style:"height: 0px;"}),M.childNodes.unshift(e)}if(h){const e={nodeName:"TFOOT",childNodes:[d?structuredClone(t):t]};!f.length&&!l||_||(e.attributes={style:"height: 0px;"}),M.childNodes.push(e)}}return y.forEach((t=>M.childNodes.push(t))),D.forEach((t=>M.childNodes.push(t))),!1!==b&&(M.attributes.tabindex=String(b)),M};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function B(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z={exports:{}},U=B(z.exports=function(){var t=1e3,e=6e4,s=36e5,i="millisecond",n="second",a="minute",o="hour",r="day",l="week",d="month",c="quarter",h="year",u="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],s=t%100;return"["+t+(e[(s-20)%10]||e[s]||e[0])+"]"}},b=function(t,e,s){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(s)+t},v={s:b,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),i=Math.floor(s/60),n=s%60;return(e<=0?"+":"-")+b(i,2,"0")+":"+b(n,2,"0")},m:function t(e,s){if(e.date()<s.date())return-t(s,e);var i=12*(s.year()-e.year())+(s.month()-e.month()),n=e.clone().add(i,d),a=s-n<0,o=e.clone().add(i+(a?-1:1),d);return+(-(i+(s-n)/(a?n-o:o-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:d,y:h,w:l,d:r,D:u,h:o,m:a,s:n,ms:i,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",w={};w[_]=g;var y="$isDayjsObject",D=function(t){return t instanceof O||!(!t||!t[y])},M=function t(e,s,i){var n;if(!e)return _;if("string"==typeof e){var a=e.toLowerCase();w[a]&&(n=a),s&&(w[a]=s,n=a);var o=e.split("-");if(!n&&o.length>1)return t(o[0])}else{var r=e.name;w[r]=e,n=r}return!i&&n&&(_=n),n||!i&&_},N=function(t,e){if(D(t))return t.clone();var s="object"==typeof e?e:{};return s.date=t,s.args=arguments,new O(s)},x=v;x.l=M,x.i=D,x.w=function(t,e){return N(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function g(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[y]=!0}var b=g.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var n=i[2]-1||0,a=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return x},b.isValid=function(){return!(this.$d.toString()===p)},b.isSame=function(t,e){var s=N(t);return this.startOf(e)<=s&&s<=this.endOf(e)},b.isAfter=function(t,e){return N(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<N(t)},b.$g=function(t,e,s){return x.u(t)?this[e]:this.set(s,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,e){var s=this,i=!!x.u(e)||e,c=x.p(t),p=function(t,e){var n=x.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return i?n:n.endOf(r)},f=function(t,e){return x.w(s.toDate()[t].apply(s.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},m=this.$W,g=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case h:return i?p(1,0):p(31,11);case d:return i?p(1,g):p(0,g+1);case l:var _=this.$locale().weekStart||0,w=(m<_?m+7:m)-_;return p(i?b-w:b+(6-w),g);case r:case u:return f(v+"Hours",0);case o:return f(v+"Minutes",1);case a:return f(v+"Seconds",2);case n:return f(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(t,e){var s,l=x.p(t),c="set"+(this.$u?"UTC":""),p=(s={},s[r]=c+"Date",s[u]=c+"Date",s[d]=c+"Month",s[h]=c+"FullYear",s[o]=c+"Hours",s[a]=c+"Minutes",s[n]=c+"Seconds",s[i]=c+"Milliseconds",s)[l],f=l===r?this.$D+(e-this.$W):e;if(l===d||l===h){var m=this.clone().set(u,1);m.$d[p](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[x.p(t)]()},b.add=function(i,c){var u,p=this;i=Number(i);var f=x.p(c),m=function(t){var e=N(p);return x.w(e.date(e.date()+Math.round(t*i)),p)};if(f===d)return this.set(d,this.$M+i);if(f===h)return this.set(h,this.$y+i);if(f===r)return m(1);if(f===l)return m(7);var g=(u={},u[a]=e,u[o]=s,u[n]=t,u)[f]||1,b=this.$d.getTime()+i*g;return x.w(b,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this,s=this.$locale();if(!this.isValid())return s.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=x.z(this),a=this.$H,o=this.$m,r=this.$M,l=s.weekdays,d=s.months,c=s.meridiem,h=function(t,s,n,a){return t&&(t[s]||t(e,i))||n[s].slice(0,a)},u=function(t){return x.s(a%12||12,t,"0")},f=c||function(t,e,s){var i=t<12?"AM":"PM";return s?i.toLowerCase():i};return i.replace(m,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return r+1;case"MM":return x.s(r+1,2,"0");case"MMM":return h(s.monthsShort,r,d,3);case"MMMM":return h(d,r);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(s.weekdaysMin,e.$W,l,2);case"ddd":return h(s.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(a);case"HH":return x.s(a,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return f(a,o,!0);case"A":return f(a,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return n}return null}(t)||n.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(i,u,p){var f,m=this,g=x.p(u),b=N(i),v=(b.utcOffset()-this.utcOffset())*e,_=this-b,w=function(){return x.m(m,b)};switch(g){case h:f=w()/12;break;case d:f=w();break;case c:f=w()/3;break;case l:f=(_-v)/6048e5;break;case r:f=(_-v)/864e5;break;case o:f=_/s;break;case a:f=_/e;break;case n:f=_/t;break;default:f=_}return p?f:x.a(f)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return w[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),i=M(t,e,!0);return i&&(s.$L=i),s},b.clone=function(){return x.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),E=O.prototype;return N.prototype=E,[["$ms",i],["$s",n],["$m",a],["$H",o],["$W",r],["$M",d],["$y",h],["$D",u]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),N.extend=function(t,e){return t.$i||(t(e,O,N),t.$i=!0),N},N.locale=M,N.isDayjs=D,N.unix=function(t){return N(1e3*t)},N.en=w[_],N.Ls=w,N.p={},N}()),J={exports:{}},W=B(J.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,i=/\d\d?/,n=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},r=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),s=60*e[1]+(+e[2]||0);return 0===s?0:"+"===e[0]?-s:s}(t)}],d=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},c=function(t,e){var s,i=a.meridiem;if(i){for(var n=1;n<=24;n+=1)if(t.indexOf(i(n,0,e))>-1){s=n>12;break}}else s=t===(e?"pm":"PM");return s},h={A:[n,function(t){this.afternoon=c(t,!1)}],a:[n,function(t){this.afternoon=c(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[s,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,r("seconds")],ss:[i,r("seconds")],m:[i,r("minutes")],mm:[i,r("minutes")],H:[i,r("hours")],h:[i,r("hours")],HH:[i,r("hours")],hh:[i,r("hours")],D:[i,r("day")],DD:[s,r("day")],Do:[n,function(t){var e=a.ordinal,s=t.match(/\d+/);if(this.day=s[0],e)for(var i=1;i<=31;i+=1)e(i).replace(/\[|\]/g,"")===t&&(this.day=i)}],M:[i,r("month")],MM:[s,r("month")],MMM:[n,function(t){var e=d("months"),s=(d("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(s<1)throw new Error;this.month=s%12||s}],MMMM:[n,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,r("year")],YY:[s,function(t){this.year=o(t)}],YYYY:[/\d{4}/,r("year")],Z:l,ZZ:l};function u(s){var i,n;i=s,n=a&&a.formats;for(var o=(s=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,s,i){var a=i&&i.toUpperCase();return s||n[i]||t[i]||n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,s){return e||s.slice(1)}))}))).match(e),r=o.length,l=0;l<r;l+=1){var d=o[l],c=h[d],u=c&&c[0],p=c&&c[1];o[l]=p?{regex:u,parser:p}:d.replace(/^\[|\]$/g,"")}return function(t){for(var e={},s=0,i=0;s<r;s+=1){var n=o[s];if("string"==typeof n)i+=n.length;else{var a=n.regex,l=n.parser,d=t.slice(i),c=a.exec(d)[0];l.call(e,c),t=t.replace(c,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var s=t.hours;e?s<12&&(t.hours+=12):12===s&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,s){s.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var i=e.prototype,n=i.parse;i.parse=function(t){var e=t.date,i=t.utc,o=t.args;this.$u=i;var r=o[1];if("string"==typeof r){var l=!0===o[2],d=!0===o[3],c=l||d,h=o[2];d&&(h=o[2]),a=this.$locale(),!l&&h&&(a=s.Ls[h]),this.$d=function(t,e,s){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var i=u(e)(t),n=i.year,a=i.month,o=i.day,r=i.hours,l=i.minutes,d=i.seconds,c=i.milliseconds,h=i.zone,p=new Date,f=o||(n||a?1:p.getDate()),m=n||p.getFullYear(),g=0;n&&!a||(g=a>0?a-1:p.getMonth());var b=r||0,v=l||0,_=d||0,w=c||0;return h?new Date(Date.UTC(m,g,f,b,v,_,w+60*h.offset*1e3)):s?new Date(Date.UTC(m,g,f,b,v,_,w)):new Date(m,g,f,b,v,_,w)}catch(t){return new Date("")}}(e,r,i),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),c&&e!=this.format(r)&&(this.$d=new Date("")),a={}}else if(r instanceof Array)for(var p=r.length,f=1;f<=p;f+=1){o[1]=r[f-1];var m=s.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}f===p&&(this.$d=new Date(""))}else n.call(this,t)}}}());U.extend(W);const Q=(t,e)=>{let s;if(e)switch(e){case"ISO_8601":s=t;break;case"RFC_2822":s=U(t.slice(5),"DD MMM YYYY HH:mm:ss ZZ").unix();break;case"MYSQL":s=U(t,"YYYY-MM-DD hh:mm:ss").unix();break;case"UNIX":s=U(t).unix();break;default:s=U(t,e,!0).valueOf()}return s},X=(t,e)=>{if(t?.constructor===Object&&Object.prototype.hasOwnProperty.call(t,"data")&&!Object.keys(t).find((t=>!["text","order","data","attributes"].includes(t))))return t;const s={data:t};switch(e.type){case"string":"string"!=typeof t&&(s.text=String(s.data),s.order=s.text);break;case"date":e.format&&(s.order=Q(String(s.data),e.format));break;case"number":s.text=String(s.data),s.data=parseFloat(s.data),s.order=s.data;break;case"html":{const t=Array.isArray(s.data)?{nodeName:"TD",childNodes:s.data}:H(`<td>${String(s.data)}</td>`);s.data=t.childNodes||[];const e=i(t);s.text=e,s.order=e;break}case"boolean":"string"==typeof s.data&&(s.data=s.data.toLowerCase().trim()),s.data=!["false",!1,null,void 0,0].includes(s.data),s.order=s.data?1:0,s.text=String(s.data);break;case"other":s.text="",s.order=0;break;default:s.text=JSON.stringify(s.data)}return s},Z=t=>{if(t instanceof Object&&t.constructor===Object&&t.hasOwnProperty("data")&&("string"==typeof t.text||"string"==typeof t.data))return t;const e={data:t};if("string"==typeof t){if(t.length){const s=H(`<th>${t}</th>`);if(s.childNodes&&(1!==s.childNodes.length||"#text"!==s.childNodes[0].nodeName)){e.data=s.childNodes,e.type="html";const t=i(s);e.text=t}}}else[null,void 0].includes(t)?e.text="":e.text=JSON.stringify(t);return e},G=(t,e=void 0,s,n,a)=>{const o={data:[],headings:[]};if(t.headings)o.headings=t.headings.map((t=>Z(t)));else if(e?.tHead)o.headings=Array.from(e.tHead.querySelectorAll("th")).map(((t,e)=>{const o=(t=>{const e=k(t,{valueDiffing:!1});let s;return s=!e.childNodes||1===e.childNodes.length&&"#text"===e.childNodes[0].nodeName?{data:t.innerText,type:"string"}:{data:e.childNodes,type:"html",text:i(e)},s.attributes=e.attributes,s})(t);s[e]||(s[e]={type:n,format:a,searchable:!0,sortable:!0});const r=s[e];return"false"!==t.dataset.sortable?.trim().toLowerCase()&&"false"!==t.dataset.sort?.trim().toLowerCase()||(r.sortable=!1),"false"===t.dataset.searchable?.trim().toLowerCase()&&(r.searchable=!1),"true"!==t.dataset.hidden?.trim().toLowerCase()&&"true"!==t.getAttribute("hidden")?.trim().toLowerCase()||(r.hidden=!0),["number","string","html","date","boolean","other"].includes(t.dataset.type)&&(r.type=t.dataset.type,"date"===r.type&&t.dataset.format&&(r.format=t.dataset.format)),o}));else if(t.data?.length){const e=t.data[0],s=Array.isArray(e)?e:e.cells;o.headings=s.map((t=>Z("")))}else e?.tBodies.length&&(o.headings=Array.from(e.tBodies[0].rows[0].cells).map((t=>Z(""))));for(let t=0;t<o.headings.length;t++)s[t]||(s[t]={type:n,format:a,sortable:!0,searchable:!0});if(t.data){const e=o.headings.map((t=>t.data?String(t.data):t.text));o.data=t.data.map((t=>{let i,n;return Array.isArray(t)?(i={},n=t):t.hasOwnProperty("cells")&&Object.keys(t).every((t=>["cells","attributes"].includes(t)))?(i=t.attributes,n=t.cells):(i={},n=[],Object.entries(t).forEach((([t,s])=>{const i=e.indexOf(t);i>-1&&(n[i]=s)}))),{attributes:i,cells:n.map(((t,e)=>X(t,s[e])))}}))}else e?.tBodies?.length&&(o.data=Array.from(e.tBodies[0].rows).map((t=>({attributes:r(t.attributes),cells:Array.from(t.cells).map(((t,e)=>{const i=t.dataset.content?X(t.dataset.content,s[e]):((t,e)=>{let s;switch(e.type){case"string":s={data:t.innerText};break;case"date":{const i=t.innerText;s={data:i,order:Q(i,e.format)};break}case"number":{const e=parseFloat(t.innerText);s={data:e,order:e,text:t.innerText};break}case"boolean":{const e=!["false","0","null","undefined"].includes(t.innerText.toLowerCase().trim());s={data:e,text:e?"1":"0",order:e?1:0};break}default:s={data:k(t,{valueDiffing:!1}).childNodes||[],text:t.innerText,order:t.innerText}}return s.attributes=r(t.attributes),s})(t,s[e]);return t.dataset.order&&(i.order=isNaN(parseFloat(t.dataset.order))?t.dataset.order:parseFloat(t.dataset.order)),i}))}))));if(o.data.length&&o.data[0].cells.length!==o.headings.length)throw new Error("Data heading length mismatch.");return o};class K{cursor;dt;constructor(t){this.dt=t,this.cursor=!1}setCursor(t=!1){if(t===this.cursor)return;const e=this.cursor;if(this.cursor=t,this.dt._renderTable(),!1!==t&&this.dt.options.scrollY){const t=l(this.dt.options.classes.cursor),e=this.dt.dom.querySelector(`tr${t}`);e&&e.scrollIntoView({block:"nearest"})}this.dt.emit("datatable.cursormove",this.cursor,e)}add(t){if(!Array.isArray(t)||t.length<1)return;const e={cells:t.map(((t,e)=>{const s=this.dt.columns.settings[e];return X(t,s)}))};this.dt.data.data.push(e),this.dt.hasRows=!0,this.dt.update(!0)}remove(t){if(!Array.isArray(t))return this.remove([t]);this.dt.data.data=this.dt.data.data.filter(((e,s)=>!t.includes(s))),this.dt.data.data.length||(this.dt.hasRows=!1),this.dt.update(!0)}findRowIndex(t,e){return this.dt.data.data.findIndex((s=>{const i=s.cells[t];return n(i).toLowerCase().includes(String(e).toLowerCase())}))}findRow(t,e){const s=this.findRowIndex(t,e);if(s<0)return{index:-1,row:null,cols:[]};const i=this.dt.data.data[s],n=i.cells.map((t=>t.data));return{index:s,row:i,cols:n}}updateRow(t,e){const s={cells:e.map(((t,e)=>{const s=this.dt.columns.settings[e];return X(t,s)}))};this.dt.data.data.splice(t,1,s),this.dt.update(!0)}}class tt{dt;settings;_state;constructor(t){this.dt=t,this.init()}init(){[this.settings,this._state]=((t=[],e,s)=>{let i=[],n=!1;const a=[];return t.forEach((t=>{(Array.isArray(t.select)?t.select:[t.select]).forEach((o=>{i[o]?t.type&&(i[o].type=t.type):i[o]={type:t.type||e,sortable:!0,searchable:!0};const r=i[o];t.render&&(r.render=t.render),t.format?r.format=t.format:"date"===t.type&&(r.format=s),t.cellClass&&(r.cellClass=t.cellClass),t.headerClass&&(r.headerClass=t.headerClass),t.locale&&(r.locale=t.locale),!1===t.sortable?r.sortable=!1:(t.numeric&&(r.numeric=t.numeric),t.caseFirst&&(r.caseFirst=t.caseFirst)),!1===t.searchable?r.searchable=!1:t.sensitivity&&(r.sensitivity=t.sensitivity),(r.searchable||r.sortable)&&void 0!==t.ignorePunctuation&&(r.ignorePunctuation=t.ignorePunctuation),t.hidden&&(r.hidden=!0),t.filter&&(r.filter=t.filter),t.sortSequence&&(r.sortSequence=t.sortSequence),t.sort&&(t.filter?a[o]=t.sort:n={column:o,dir:t.sort}),void 0!==t.searchItemSeparator&&(r.searchItemSeparator=t.searchItemSeparator)}))})),i=i.map((t=>t||{type:e,format:"date"===e?s:void 0,sortable:!0,searchable:!0})),[i,{filters:a,sort:n,widths:[]}]})(this.dt.options.columns,this.dt.options.type,this.dt.options.format)}get(t){return t<0||t>=this.size()?null:{...this.settings[t]}}size(){return this.settings.length}swap(t){if(2===t.length){const e=this.dt.data.headings.map(((t,e)=>e)),s=t[0],i=t[1],n=e[i];return e[i]=e[s],e[s]=n,this.order(e)}}order(t){this.dt.data.headings=t.map((t=>this.dt.data.headings[t])),this.dt.data.data.forEach((e=>e.cells=t.map((t=>e.cells[t])))),this.settings=t.map((t=>this.settings[t])),this.dt.update()}hide(t){Array.isArray(t)||(t=[t]),t.length&&(t.forEach((t=>{this.settings[t]||(this.settings[t]={type:"string"});this.settings[t].hidden=!0})),this.dt.update())}show(t){Array.isArray(t)||(t=[t]),t.length&&(t.forEach((t=>{this.settings[t]||(this.settings[t]={type:"string",sortable:!0});delete this.settings[t].hidden})),this.dt.update())}visible(t){return void 0===t&&(t=[...Array(this.dt.data.headings.length).keys()]),Array.isArray(t)?t.map((t=>!this.settings[t]?.hidden)):!this.settings[t]?.hidden}add(t){const e=this.dt.data.headings.length;if(this.dt.data.headings=this.dt.data.headings.concat([Z(t.heading)]),this.dt.data.data.forEach(((e,s)=>{e.cells=e.cells.concat([X(t.data[s],t)])})),this.settings[e]={type:t.type||"string",sortable:!0,searchable:!0},t.type||t.format||t.sortable||t.render||t.filter){const s=this.settings[e];t.render&&(s.render=t.render),t.format&&(s.format=t.format),t.cellClass&&(s.cellClass=t.cellClass),t.headerClass&&(s.headerClass=t.headerClass),t.locale&&(s.locale=t.locale),!1===t.sortable?s.sortable=!1:(t.numeric&&(s.numeric=t.numeric),t.caseFirst&&(s.caseFirst=t.caseFirst)),!1===t.searchable?s.searchable=!1:t.sensitivity&&(s.sensitivity=t.sensitivity),(s.searchable||s.sortable)&&t.ignorePunctuation&&(s.ignorePunctuation=t.ignorePunctuation),t.hidden&&(s.hidden=!0),t.filter&&(s.filter=t.filter),t.sortSequence&&(s.sortSequence=t.sortSequence)}this.dt.update(!0)}remove(t){Array.isArray(t)||(t=[t]),this.dt.data.headings=this.dt.data.headings.filter(((e,s)=>!t.includes(s))),this.dt.data.data.forEach((e=>e.cells=e.cells.filter(((e,s)=>!t.includes(s))))),this.dt.update(!0)}filter(t,e=!1){if(!this.settings[t]?.filter?.length)return;const s=this._state.filters[t];let i;if(s){let e=!1;i=this.settings[t].filter.find((t=>!!e||(t===s&&(e=!0),!1)))}else{const e=this.settings[t].filter;i=e?e[0]:void 0}i?this._state.filters[t]=i:s&&(this._state.filters[t]=void 0),this.dt._currentPage=1,this.dt.update(),e||this.dt.emit("datatable.filter",t,i)}sort(t,e=void 0,s=!1){const i=this.settings[t];if(s||this.dt.emit("datatable.sorting",t,e),!e){const s=!(!this._state.sort||this._state.sort.column!==t)&&this._state.sort?.dir,n=i?.sortSequence||["asc","desc"];if(s){const t=n.indexOf(s);e=-1===t?n[0]||"asc":t===n.length-1?n[0]:n[t+1]}else e=n.length?n[0]:"asc"}const a=!!["string","html"].includes(i.type)&&new Intl.Collator(i.locale||this.dt.options.locale,{usage:"sort",numeric:i.numeric||this.dt.options.numeric,caseFirst:i.caseFirst||this.dt.options.caseFirst,ignorePunctuation:i.ignorePunctuation||this.dt.options.ignorePunctuation});this.dt.data.data.sort(((s,i)=>{const o=s.cells[t],r=i.cells[t];let l=o.order??n(o),d=r.order??n(r);if("desc"===e){const t=l;l=d,d=t}return a?a.compare(String(l),String(d)):l<d?-1:l>d?1:0})),this._state.sort={column:t,dir:e},this.dt._searchQueries.length?(this.dt.multiSearch(this.dt._searchQueries),this.dt.emit("datatable.sort",t,e)):s||(this.dt._currentPage=1,this.dt.update(),this.dt.emit("datatable.sort",t,e))}_measureWidths(){const t=this.dt.data.headings.filter(((t,e)=>!this.settings[e]?.hidden));if((this.dt.options.scrollY.length||this.dt.options.fixedColumns)&&t?.length){this._state.widths=[];const t={noPaging:!0};if(this.dt.options.header||this.dt.options.footer){this.dt.options.scrollY.length&&(t.unhideHeader=!0),this.dt.headerDOM&&this.dt.headerDOM.parentElement.removeChild(this.dt.headerDOM),t.noColumnWidths=!0,this.dt._renderTable(t);const e=Array.from(this.dt.dom.querySelector("thead, tfoot")?.firstElementChild?.querySelectorAll("th")||[]);let s=0;const i=this.dt.data.headings.map(((t,i)=>{if(this.settings[i]?.hidden)return 0;const n=e[s].offsetWidth;return s+=1,n})),n=i.reduce(((t,e)=>t+e),0);this._state.widths=i.map((t=>t/n*100))}else{t.renderHeader=!0,this.dt._renderTable(t);const e=Array.from(this.dt.dom.querySelector("thead, tfoot")?.firstElementChild?.querySelectorAll("th")||[]);let s=0;const i=this.dt.data.headings.map(((t,i)=>{if(this.settings[i]?.hidden)return 0;const n=e[s].offsetWidth;return s+=1,n})),n=i.reduce(((t,e)=>t+e),0);this._state.widths=i.map((t=>t/n*100))}this.dt._renderTable()}}}const et={sortable:!0,locale:"en",numeric:!0,caseFirst:"false",searchable:!0,sensitivity:"base",ignorePunctuation:!0,destroyable:!0,searchItemSeparator:"",searchQuerySeparator:" ",searchAnd:!1,data:{},type:"html",format:"YYYY-MM-DD",columns:[],paging:!0,perPage:10,perPageSelect:[5,10,15,20,25],nextPrev:!0,firstLast:!1,prevText:"‹",nextText:"›",firstText:"«",lastText:"»",ellipsisText:"…",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,footer:!1,header:!0,hiddenHeader:!1,caption:void 0,rowNavigation:!1,tabIndex:!1,pagerRender:!1,rowRender:!1,tableRender:!1,diffDomOptions:{valueDiffing:!1},labels:{placeholder:"Search...",searchTitle:"Search within table",perPage:"entries per page",pageTitle:"Page {page}",noRows:"No entries found",noResults:"No results match your search query",info:"Showing {start} to {end} of {rows} entries"},template:(t,e)=>`<div class='${t.classes.top}'>\n    ${t.paging&&t.perPageSelect?`<div class='${t.classes.dropdown}'>\n            <label>\n                <select class='${t.classes.selector}' name="per-page"></select> ${t.labels.perPage}\n            </label>\n        </div>`:""}\n    ${t.searchable?`<div class='${t.classes.search}'>\n            <input class='${t.classes.input}' placeholder='${t.labels.placeholder}' type='search' name="search" title='${t.labels.searchTitle}'${e.id?` aria-controls="${e.id}"`:""}>\n        </div>`:""}\n</div>\n<div class='${t.classes.container}'${t.scrollY.length?` style='height: ${t.scrollY}; overflow-Y: auto;'`:""}></div>\n<div class='${t.classes.bottom}'>\n    ${t.paging?`<div class='${t.classes.info}'></div>`:""}\n    <nav class='${t.classes.pagination}'></nav>\n</div>`,classes:{active:"datatable-active",ascending:"datatable-ascending",bottom:"datatable-bottom",container:"datatable-container",cursor:"datatable-cursor",descending:"datatable-descending",disabled:"datatable-disabled",dropdown:"datatable-dropdown",ellipsis:"datatable-ellipsis",filter:"datatable-filter",filterActive:"datatable-filter-active",empty:"datatable-empty",headercontainer:"datatable-headercontainer",hidden:"datatable-hidden",info:"datatable-info",input:"datatable-input",loading:"datatable-loading",pagination:"datatable-pagination",paginationList:"datatable-pagination-list",paginationListItem:"datatable-pagination-list-item",paginationListItemLink:"datatable-pagination-list-item-link",search:"datatable-search",selector:"datatable-selector",sorter:"datatable-sorter",table:"datatable-table",top:"datatable-top",wrapper:"datatable-wrapper"}},st=(t,e,s,i={})=>({nodeName:"LI",attributes:{class:i.active&&!i.hidden?`${s.classes.paginationListItem} ${s.classes.active}`:i.hidden?`${s.classes.paginationListItem} ${s.classes.hidden} ${s.classes.disabled}`:s.classes.paginationListItem},childNodes:[{nodeName:"BUTTON",attributes:{"data-page":String(t),class:s.classes.paginationListItemLink,"aria-label":s.labels.pageTitle.replace("{page}",String(t))},childNodes:[{nodeName:"#text",data:e}]}]}),it=(t,e,s,i,n)=>{let a=[];if(n.firstLast&&a.push(st(1,n.firstText,n)),n.nextPrev){const e=t?1:s-1;a.push(st(e,n.prevText,n,{hidden:t}))}let o=[...Array(i).keys()].map((t=>st(t+1,String(t+1),n,{active:t===s-1})));if(n.truncatePager&&(o=((t,e,s,i)=>{const n=i.pagerDelta,a=i.classes,o=i.ellipsisText,r=2*n;let l=e-n,d=e+n;e<4-n+r?d=3+r:e>s-(3-n+r)&&(l=s-(2+r));const c=[];for(let e=1;e<=s;e++)if(1==e||e==s||e>=l&&e<=d){const s=t[e-1];c.push(s)}let h;const u=[];return c.forEach((e=>{const s=parseInt(e.childNodes[0].attributes["data-page"],10);if(h){const e=parseInt(h.childNodes[0].attributes["data-page"],10);if(s-e==2)u.push(t[e]);else if(s-e!=1){const t={nodeName:"LI",attributes:{class:`${a.paginationListItem} ${a.ellipsis} ${a.disabled}`},childNodes:[{nodeName:"BUTTON",attributes:{class:a.paginationListItemLink},childNodes:[{nodeName:"#text",data:o}]}]};u.push(t)}}u.push(e),h=e})),u})(o,s,i,n)),a=a.concat(o),n.nextPrev){const t=e?i:s+1;a.push(st(t,n.nextText,n,{hidden:e}))}n.firstLast&&a.push(st(i,n.lastText,n));return{nodeName:"UL",attributes:{class:n.classes.paginationList},childNodes:o.length>1?a:[]}};const nt={classes:{row:"datatable-editor-row",form:"datatable-editor-form",item:"datatable-editor-item",menu:"datatable-editor-menu",save:"datatable-editor-save",block:"datatable-editor-block",cancel:"datatable-editor-cancel",close:"datatable-editor-close",inner:"datatable-editor-inner",input:"datatable-editor-input",label:"datatable-editor-label",modal:"datatable-editor-modal",action:"datatable-editor-action",header:"datatable-editor-header",wrapper:"datatable-editor-wrapper",editable:"datatable-editor-editable",container:"datatable-editor-container",separator:"datatable-editor-separator"},labels:{closeX:"x",editCell:"Edit Cell",editRow:"Edit Row",removeRow:"Remove Row",reallyRemove:"Are you sure?",reallyCancel:"Do you really want to cancel?",save:"Save",cancel:"Cancel"},cancelModal:t=>confirm(t.options.labels.reallyCancel),inline:!0,hiddenColumns:!1,contextMenu:!0,clickEvent:"dblclick",excludeColumns:[],menuItems:[{text:t=>t.options.labels.editCell,action:(t,e)=>{if(!(t.event.target instanceof Element))return;const s=t.event.target.closest("td");return t.editCell(s)}},{text:t=>t.options.labels.editRow,action:(t,e)=>{if(!(t.event.target instanceof Element))return;const s=t.event.target.closest("tr");return t.editRow(s)}},{separator:!0},{text:t=>t.options.labels.removeRow,action:(t,e)=>{if(t.event.target instanceof Element&&confirm(t.options.labels.reallyRemove)){const e=t.event.target.closest("tr");t.removeRow(e)}}}]};class at{menuOpen;containerDOM;data;disabled;dt;editing;editingCell;editingRow;event;events;initialized;limits;menuDOM;modalDOM;options;originalRowRender;rect;wrapperDOM;constructor(t,e={}){this.dt=t,this.options={...nt,...e}}init(){this.initialized||(this.options.classes.editable?.split(" ").forEach((t=>this.dt.wrapperDOM.classList.add(t))),this.options.inline&&(this.originalRowRender=this.dt.options.rowRender,this.dt.options.rowRender=(t,e,s)=>{let i=this.rowRender(t,e,s);return this.originalRowRender&&(i=this.originalRowRender(t,i,s)),i}),this.options.contextMenu&&(this.containerDOM=s("div",{id:this.options.classes.container}),this.wrapperDOM=s("div",{class:this.options.classes.wrapper}),this.menuDOM=s("ul",{class:this.options.classes.menu}),this.options.menuItems&&this.options.menuItems.length&&this.options.menuItems.forEach((t=>{const e=s("li",{class:t.separator?this.options.classes.separator:this.options.classes.item});if(!t.separator){const i=s("a",{class:this.options.classes.action,href:t.url||"#",html:"function"==typeof t.text?t.text(this):t.text});e.appendChild(i),t.action&&"function"==typeof t.action&&i.addEventListener("click",(e=>{e.preventDefault(),t.action(this,e)}))}this.menuDOM.appendChild(e)})),this.wrapperDOM.appendChild(this.menuDOM),this.containerDOM.appendChild(this.wrapperDOM),this.updateMenu()),this.data={},this.menuOpen=!1,this.editing=!1,this.editingRow=!1,this.editingCell=!1,this.bindEvents(),setTimeout((()=>{this.initialized=!0,this.dt.emit("editable.init")}),10))}bindEvents(){this.events={keydown:this.keydown.bind(this),click:this.click.bind(this)},this.dt.dom.addEventListener(this.options.clickEvent,this.events.click),document.addEventListener("keydown",this.events.keydown),this.options.contextMenu&&(this.events.context=this.context.bind(this),this.events.updateMenu=this.updateMenu.bind(this),this.events.dismissMenu=this.dismissMenu.bind(this),this.events.reset=function(t,e=300){let s;return(...i)=>{clearTimeout(s),s=window.setTimeout((()=>t()),e)}}((()=>this.events.updateMenu()),50),this.dt.dom.addEventListener("contextmenu",this.events.context),document.addEventListener("click",this.events.dismissMenu),window.addEventListener("resize",this.events.reset),window.addEventListener("scroll",this.events.reset))}context(t){const e=t.target;if(!(e instanceof Element))return;this.event=t;const s=e.closest("tbody td");if(!this.disabled&&s){t.preventDefault();let e=t.pageX,s=t.pageY;e>this.limits.x&&(e-=this.rect.width),s>this.limits.y&&(s-=this.rect.height),this.wrapperDOM.style.top=`${s}px`,this.wrapperDOM.style.left=`${e}px`,this.openMenu(),this.updateMenu()}}click(t){const e=t.target;if(e instanceof Element)if(this.editing&&this.data&&this.editingCell){const t=l(this.options.classes.input),e=this.modalDOM?this.modalDOM.querySelector(`input${t}[type=text]`):this.dt.wrapperDOM.querySelector(`input${t}[type=text]`);this.saveCell(e.value)}else if(!this.editing){const s=e.closest("tbody td");s&&(this.editCell(s),t.preventDefault())}}keydown(t){const e=l(this.options.classes.input);if(this.modalDOM){if("Escape"===t.key)this.options.cancelModal(this)&&this.closeModal();else if("Enter"===t.key)if(this.editingCell){const t=this.modalDOM.querySelector(`input${e}[type=text]`);this.saveCell(t.value)}else{const t=Array.from(this.modalDOM.querySelectorAll(`input${e}[type=text]`)).map((t=>t.value.trim()));this.saveRow(t,this.data.row)}}else if(this.editing&&this.data)if("Enter"===t.key){if(this.editingCell){const t=this.dt.wrapperDOM.querySelector(`input${e}[type=text]`);this.saveCell(t.value)}else if(this.editingRow){const t=Array.from(this.dt.wrapperDOM.querySelectorAll(`input${e}[type=text]`)).map((t=>t.value.trim()));this.saveRow(t,this.data.row)}}else"Escape"===t.key&&(this.editingCell?this.saveCell(this.data.content):this.editingRow&&this.saveRow(null,this.data.row))}editCell(t){const e=o(t.cellIndex,this.dt.columns.settings);if(this.options.excludeColumns.includes(e))return void this.closeMenu();const s=parseInt(t.parentElement.dataset.index,10),i=this.dt.data.data[s].cells[e];this.data={cell:i,rowIndex:s,columnIndex:e,content:n(i)},this.editing=!0,this.editingCell=!0,this.options.inline?this.dt.update():this.editCellModal(),this.closeMenu()}editCellModal(){const t=this.data.cell,e=this.data.columnIndex,i=this.dt.data.headings[e].text||String(this.dt.data.headings[e].data),o=[`<div class='${this.options.classes.inner}'>`,`<div class='${this.options.classes.header}'>`,`<h4>${this.options.labels.editCell}</h4>`,`<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`," </div>",`<div class='${this.options.classes.block}'>`,`<form class='${this.options.classes.form}'>`,`<div class='${this.options.classes.row}'>`,`<label class='${this.options.classes.label}'>${a(i)}</label>`,`<input class='${this.options.classes.input}' value='${a(n(t))}' type='text'>`,"</div>",`<div class='${this.options.classes.row}'>`,`<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,`<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,"</div>","</form>","</div>","</div>"].join(""),r=s("div",{class:this.options.classes.modal,html:o});this.modalDOM=r,this.openModal();const d=l(this.options.classes.input),c=r.querySelector(`input${d}[type=text]`);c.focus(),c.selectionStart=c.selectionEnd=c.value.length,r.addEventListener("click",(t=>{const e=t.target;e instanceof Element&&(e.hasAttribute("data-editor-cancel")?(t.preventDefault(),this.options.cancelModal(this)&&this.closeModal()):e.hasAttribute("data-editor-save")&&(t.preventDefault(),this.saveCell(c.value)))}))}saveCell(t){const e=this.data.content,s=this.dt.columns.settings[this.data.columnIndex].type||this.dt.options.type,i=t.trim();let n;if("number"===s)n={data:parseFloat(i)};else if("boolean"===s)n=["","false","0"].includes(i)?{data:!1,text:"false",order:0}:{data:!0,text:"true",order:1};else if("html"===s)n={data:[{nodeName:"#text",data:t}],text:t,order:t};else if("string"===s)n={data:t};else if("date"===s){const e=this.dt.columns.settings[this.data.columnIndex].format||this.dt.options.format;n={data:t,order:Q(String(t),e)}}else n={data:t};this.dt.data.data[this.data.rowIndex].cells[this.data.columnIndex]=n,this.closeModal();const a=this.data.rowIndex,o=this.data.columnIndex;this.data={},this.dt.update(!0),this.editing=!1,this.editingCell=!1,this.dt.emit("editable.save.cell",t,e,a,o)}editRow(t){if(!t||"TR"!==t.nodeName||this.editing)return;const e=parseInt(t.dataset.index,10),s=this.dt.data.data[e];this.data={row:s.cells,rowIndex:e},this.editing=!0,this.editingRow=!0,this.options.inline?this.dt.update():this.editRowModal(),this.closeMenu()}editRowModal(){const t=this.data.row,e=[`<div class='${this.options.classes.inner}'>`,`<div class='${this.options.classes.header}'>`,`<h4>${this.options.labels.editRow}</h4>`,`<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`," </div>",`<div class='${this.options.classes.block}'>`,`<form class='${this.options.classes.form}'>`,`<div class='${this.options.classes.row}'>`,`<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,`<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,"</div>","</form>","</div>","</div>"].join(""),i=s("div",{class:this.options.classes.modal,html:e}),o=i.firstElementChild;if(!o)return;const r=o.lastElementChild?.firstElementChild;if(!r)return;t.forEach(((t,e)=>{const i=this.dt.columns.settings[e];if((!i.hidden||i.hidden&&this.options.hiddenColumns)&&!this.options.excludeColumns.includes(e)){const i=this.dt.data.headings[e].text||String(this.dt.data.headings[e].data);r.insertBefore(s("div",{class:this.options.classes.row,html:[`<div class='${this.options.classes.row}'>`,`<label class='${this.options.classes.label}'>${a(i)}</label>`,`<input class='${this.options.classes.input}' value='${a(n(t))}' type='text'>`,"</div>"].join("")}),r.lastElementChild)}})),this.modalDOM=i,this.openModal();const d=l(this.options.classes.input),c=Array.from(r.querySelectorAll(`input${d}[type=text]`));i.addEventListener("click",(t=>{const e=t.target;if(e instanceof Element)if(e.hasAttribute("data-editor-cancel"))this.options.cancelModal(this)&&this.closeModal();else if(e.hasAttribute("data-editor-save")){const t=c.map((t=>t.value.trim()));this.saveRow(t,this.data.row)}}))}saveRow(t,e){const s=e.map((t=>n(t))),i=this.dt.data.data[this.data.rowIndex];if(t){let s=0;i.cells=e.map(((e,i)=>{if(this.options.excludeColumns.includes(i)||this.dt.columns.settings[i].hidden)return e;const n=this.dt.columns.settings[i].type||this.dt.options.type,a=t[s++];let o;if("number"===n)o={data:parseFloat(a)};else if("boolean"===n)o=["","false","0"].includes(a)?{data:!1,text:"false",order:0}:{data:!0,text:"true",order:1};else if("html"===n)o={data:[{nodeName:"#text",data:a}],text:a,order:a};else if("string"===n)o={data:a};else if("date"===n){const t=this.dt.columns.settings[i].format||this.dt.options.format;o={data:a,order:Q(String(a),t)}}else o={data:a};return o}))}const a=i.cells.map((t=>n(t)));this.data={},this.dt.update(!0),this.closeModal(),this.editing=!1,this.dt.emit("editable.save.row",a,s,e)}openModal(){this.modalDOM&&document.body.appendChild(this.modalDOM)}closeModal(){this.editing&&this.modalDOM&&(document.body.removeChild(this.modalDOM),this.modalDOM=this.editing=this.editingRow=this.editingCell=!1)}removeRow(t){if(!t||"TR"!==t.nodeName||this.editing)return;const e=parseInt(t.dataset.index,10);this.dt.rows.remove(e),this.closeMenu()}updateMenu(){const t=window.scrollX||window.pageXOffset,e=window.scrollY||window.pageYOffset;this.rect=this.wrapperDOM.getBoundingClientRect(),this.limits={x:window.innerWidth+t-this.rect.width,y:window.innerHeight+e-this.rect.height}}dismissMenu(t){const e=t.target;if(!(e instanceof Element)||this.wrapperDOM.contains(e))return;let s=!0;if(this.editing){const t=l(this.options.classes.input);s=!e.matches(`input${t}[type=text]`)}s&&this.closeMenu()}openMenu(){if(this.editing&&this.data&&this.editingCell){const t=l(this.options.classes.input),e=this.modalDOM?this.modalDOM.querySelector(`input${t}[type=text]`):this.dt.wrapperDOM.querySelector(`input${t}[type=text]`);this.saveCell(e.value)}document.body.appendChild(this.containerDOM),this.menuOpen=!0,this.dt.emit("editable.context.open")}closeMenu(){this.menuOpen&&(this.menuOpen=!1,document.body.removeChild(this.containerDOM),this.dt.emit("editable.context.close"))}destroy(){this.dt.dom.removeEventListener(this.options.clickEvent,this.events.click),this.dt.dom.removeEventListener("contextmenu",this.events.context),document.removeEventListener("click",this.events.dismissMenu),document.removeEventListener("keydown",this.events.keydown),window.removeEventListener("resize",this.events.reset),window.removeEventListener("scroll",this.events.reset),document.body.contains(this.containerDOM)&&document.body.removeChild(this.containerDOM),this.options.inline&&(this.dt.options.rowRender=this.originalRowRender),this.initialized=!1}rowRender(t,e,s){if(!this.data||this.data.rowIndex!==s)return e;if(this.editingCell){e.childNodes[function(t,e){let s=t,i=0;for(;i<t;)e[i].hidden&&(s-=1),i++;return s}(this.data.columnIndex,this.dt.columns.settings)].childNodes=[{nodeName:"INPUT",attributes:{type:"text",value:this.data.content,class:this.options.classes.input}}]}else e.childNodes.forEach(((s,i)=>{const n=o(i,this.dt.columns.settings),r=t[n];if(!this.options.excludeColumns.includes(n)){e.childNodes[i].childNodes=[{nodeName:"INPUT",attributes:{type:"text",value:a(r.text||String(r.data)||""),class:this.options.classes.input}}]}}));return e}}const ot={classes:{button:"datatable-column-filter-button",menu:"datatable-column-filter-menu",container:"datatable-column-filter-container",wrapper:"datatable-column-filter-wrapper"},labels:{button:"Filter columns within the table"},hiddenColumns:[]};class rt{addedButtonDOM;menuOpen;buttonDOM;dt;events;initialized;options;menuDOM;containerDOM;wrapperDOM;limits;rect;event;constructor(t,e={}){this.dt=t,this.options={...ot,...e}}init(){if(this.initialized)return;const t=l(this.options.classes.button);let e=this.dt.wrapperDOM.querySelector(t);if(!e){e=s("button",{class:this.options.classes.button,html:"▦"});const t=l(this.dt.options.classes.search),i=this.dt.wrapperDOM.querySelector(t);i?i.appendChild(e):this.dt.wrapperDOM.appendChild(e),this.addedButtonDOM=!0}this.buttonDOM=e,this.containerDOM=s("div",{id:this.options.classes.container}),this.wrapperDOM=s("div",{class:this.options.classes.wrapper}),this.menuDOM=s("ul",{class:this.options.classes.menu,html:this.dt.data.headings.map(((t,e)=>{const s=this.dt.columns.settings[e];return this.options.hiddenColumns.includes(e)?"":`<li data-column="${e}">\n                        <input type="checkbox" value="${t.text||t.data}" ${s.hidden?"":"checked=''"}>\n                        <label>\n                            ${t.text||t.data}\n                        </label>\n                    </li>`})).join("")}),this.wrapperDOM.appendChild(this.menuDOM),this.containerDOM.appendChild(this.wrapperDOM),this._measureSpace(),this._bind(),this.initialized=!0}dismiss(){this.addedButtonDOM&&this.buttonDOM.parentElement&&this.buttonDOM.parentElement.removeChild(this.buttonDOM),document.removeEventListener("click",this.events.click)}_bind(){this.events={click:this._click.bind(this)},document.addEventListener("click",this.events.click)}_openMenu(){document.body.appendChild(this.containerDOM),this._measureSpace(),this.menuOpen=!0,this.dt.emit("columnFilter.menu.open")}_closeMenu(){this.menuOpen&&(this.menuOpen=!1,document.body.removeChild(this.containerDOM),this.dt.emit("columnFilter.menu.close"))}_measureSpace(){const t=window.scrollX||window.pageXOffset,e=window.scrollY||window.pageYOffset;this.rect=this.wrapperDOM.getBoundingClientRect(),this.limits={x:window.innerWidth+t-this.rect.width,y:window.innerHeight+e-this.rect.height}}_click(t){const e=t.target;if(e instanceof Element)if(this.event=t,this.buttonDOM.contains(e)){if(t.preventDefault(),this.menuOpen)return void this._closeMenu();this._openMenu();let e=t.pageX,s=t.pageY;e>this.limits.x&&(e-=this.rect.width),s>this.limits.y&&(s-=this.rect.height),this.wrapperDOM.style.top=`${s}px`,this.wrapperDOM.style.left=`${e}px`}else if(this.menuDOM.contains(e)){const t=l(this.options.classes.menu),s=e.closest(`${t} > li`);if(!s)return;const i=s.querySelector("input[type=checkbox]");i.contains(e)||(i.checked=!i.checked);const n=Number(s.dataset.column);i.checked?this.dt.columns.show([n]):this.dt.columns.hide([n])}else this.menuOpen&&this._closeMenu()}}exports.DataTable=class{columns;containerDOM;_currentPage;data;_dd;dom;_events;hasHeadings;hasRows;headerDOM;_initialHTML;initialized;_label;lastPage;_listeners;onFirstPage;onLastPage;options;_pagerDOMs;_virtualPagerDOM;pages;_rect;rows;_searchData;_searchQueries;_tableAttributes;_tableFooters;_tableCaptions;totalPages;_virtualDOM;_virtualHeaderDOM;wrapperDOM;constructor(t,e={}){const s="string"==typeof t?document.querySelector(t):t;s instanceof HTMLTableElement?this.dom=s:(this.dom=document.createElement("table"),s.appendChild(this.dom));const i={...et.diffDomOptions,...e.diffDomOptions},n={...et.labels,...e.labels},a={...et.classes,...e.classes};this.options={...et,...e,diffDomOptions:i,labels:n,classes:a},this._initialHTML=this.options.destroyable?s.outerHTML:"",this.options.tabIndex?this.dom.tabIndex=this.options.tabIndex:this.options.rowNavigation&&-1===this.dom.tabIndex&&(this.dom.tabIndex=0),this._listeners={onResize:()=>this._onResize()},this._dd=new j(this.options.diffDomOptions||{}),this.initialized=!1,this._events={},this._currentPage=0,this.onFirstPage=!0,this.hasHeadings=!1,this.hasRows=!1,this._searchQueries=[],this.init()}init(){if(this.initialized||d(this.dom,this.options.classes.table))return!1;this._virtualDOM=k(this.dom,this.options.diffDomOptions||{}),this._tableAttributes={...this._virtualDOM.attributes},this._tableFooters=this._virtualDOM.childNodes?.filter((t=>"TFOOT"===t.nodeName))??[],this._tableCaptions=this._virtualDOM.childNodes?.filter((t=>"CAPTION"===t.nodeName))??[],void 0!==this.options.caption&&this._tableCaptions.push({nodeName:"CAPTION",childNodes:[{nodeName:"#text",data:this.options.caption}]}),this.rows=new K(this),this.columns=new tt(this),this.data=G(this.options.data,this.dom,this.columns.settings,this.options.type,this.options.format),this._render(),setTimeout((()=>{this.emit("datatable.init"),this.initialized=!0}),10)}_render(){this.wrapperDOM=s("div",{class:`${this.options.classes.wrapper} ${this.options.classes.loading}`}),this.wrapperDOM.innerHTML=this.options.template(this.options,this.dom);const t=l(this.options.classes.selector),e=this.wrapperDOM.querySelector(`select${t}`);e&&this.options.paging&&this.options.perPageSelect?this.options.perPageSelect.forEach((t=>{const[s,i]=Array.isArray(t)?[t[0],t[1]]:[String(t),t],n=i===this.options.perPage,a=new Option(s,String(i),n,n);e.appendChild(a)})):e&&e.parentElement.removeChild(e);const i=l(this.options.classes.container);this.containerDOM=this.wrapperDOM.querySelector(i),this._pagerDOMs=[];const n=l(this.options.classes.pagination);Array.from(this.wrapperDOM.querySelectorAll(n)).forEach((t=>{t instanceof HTMLElement&&(t.innerHTML=`<ul class="${this.options.classes.paginationList}"></ul>`,this._pagerDOMs.push(t.firstElementChild))})),this._virtualPagerDOM={nodeName:"UL",attributes:{class:this.options.classes.paginationList}};const a=l(this.options.classes.info);this._label=this.wrapperDOM.querySelector(a),this.dom.parentElement.replaceChild(this.wrapperDOM,this.dom),this.containerDOM.appendChild(this.dom),this._rect=this.dom.getBoundingClientRect(),this._fixHeight(),this.options.header||this.wrapperDOM.classList.add("no-header"),this.options.footer||this.wrapperDOM.classList.add("no-footer"),this.options.sortable&&this.wrapperDOM.classList.add("sortable"),this.options.searchable&&this.wrapperDOM.classList.add("searchable"),this.options.fixedHeight&&this.wrapperDOM.classList.add("fixed-height"),this.options.fixedColumns&&this.wrapperDOM.classList.add("fixed-columns"),this._bindEvents(),this.columns._state.sort&&this.columns.sort(this.columns._state.sort.column,this.columns._state.sort.dir,!0),this.update(!0)}_renderTable(t={}){let e;e=(this.options.paging||this._searchQueries.length||this.columns._state.filters.length)&&this._currentPage&&this.pages.length&&!t.noPaging?this.pages[this._currentPage-1]:this.data.data.map(((t,e)=>({row:t,index:e})));let s=q(this._tableAttributes,this.data.headings,e,this.columns.settings,this.columns._state,this.rows.cursor,this.options,t,this._tableFooters,this._tableCaptions);if(this.options.tableRender){const t=this.options.tableRender(this.data,s,"main");t&&(s=t)}const i=this._dd.diff(this._virtualDOM,s);this._dd.apply(this.dom,i),this._virtualDOM=s}_renderPage(t=!1){this.hasRows&&this.totalPages?(this._currentPage>this.totalPages&&(this._currentPage=1),this._renderTable(),this.onFirstPage=1===this._currentPage,this.onLastPage=this._currentPage===this.lastPage):this.setMessage(this.options.labels.noRows);let e,s=0,i=0,n=0;if(this.totalPages&&(s=this._currentPage-1,i=s*this.options.perPage,n=i+this.pages[s].length,i+=1,e=this._searchQueries.length?this._searchData.length:this.data.data.length),this._label&&this.options.labels.info.length){const t=this.options.labels.info.replace("{start}",String(i)).replace("{end}",String(n)).replace("{page}",String(this._currentPage)).replace("{pages}",String(this.totalPages)).replace("{rows}",String(e));this._label.innerHTML=e?t:""}if(1==this._currentPage&&this._fixHeight(),this.options.rowNavigation&&this._currentPage&&(!this.rows.cursor||!this.pages[this._currentPage-1].find((t=>t.index===this.rows.cursor)))){const e=this.pages[this._currentPage-1];e.length&&(t?this.rows.setCursor(e[e.length-1].index):this.rows.setCursor(e[0].index))}}_renderPagers(){if(!this.options.paging)return;let t=it(this.onFirstPage,this.onLastPage,this._currentPage,this.totalPages,this.options);if(this.options.pagerRender){const e=this.options.pagerRender([this.onFirstPage,this.onLastPage,this._currentPage,this.totalPages],t);e&&(t=e)}const e=this._dd.diff(this._virtualPagerDOM,t);this._pagerDOMs.forEach((t=>{this._dd.apply(t,e)})),this._virtualPagerDOM=t}_renderSeparateHeader(){const t=this.dom.parentElement;this.headerDOM||(this.headerDOM=document.createElement("div"),this._virtualHeaderDOM={nodeName:"DIV"}),t.parentElement.insertBefore(this.headerDOM,t);let e={nodeName:"TABLE",attributes:this._tableAttributes,childNodes:[{nodeName:"THEAD",childNodes:[F(this.data.headings,this.columns.settings,this.columns._state,this.options,{unhideHeader:!0})]}]};if(e.attributes.class=c(e.attributes.class,this.options.classes.table),this.options.tableRender){const t=this.options.tableRender(this.data,e,"header");t&&(e=t)}const s={nodeName:"DIV",attributes:{class:this.options.classes.headercontainer},childNodes:[e]},i=this._dd.diff(this._virtualHeaderDOM,s);this._dd.apply(this.headerDOM,i),this._virtualHeaderDOM=s;const n=this.headerDOM.firstElementChild.clientWidth-this.dom.clientWidth;if(n){const t=structuredClone(this._virtualHeaderDOM);t.attributes.style=`padding-right: ${n}px;`;const e=this._dd.diff(this._virtualHeaderDOM,t);this._dd.apply(this.headerDOM,e),this._virtualHeaderDOM=t}t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll")}_bindEvents(){if(this.options.perPageSelect){const t=l(this.options.classes.selector),e=this.wrapperDOM.querySelector(t);e&&e instanceof HTMLSelectElement&&e.addEventListener("change",(()=>{this.options.perPage=parseInt(e.value,10),this.update(),this._fixHeight(),this.emit("datatable.perpage",this.options.perPage)}),!1)}this.options.searchable&&this.wrapperDOM.addEventListener("input",(t=>{const e=l(this.options.classes.input),s=t.target;if(!(s instanceof HTMLInputElement&&s.matches(e)))return;t.preventDefault();const i=[];if(Array.from(this.wrapperDOM.querySelectorAll(e)).filter((t=>t.value.length)).forEach((t=>{const e=t.dataset.and||this.options.searchAnd,s=t.dataset.querySeparator||this.options.searchQuerySeparator?t.value.split(this.options.searchQuerySeparator):[t.value];e?s.forEach((e=>{t.dataset.columns?i.push({terms:[e],columns:JSON.parse(t.dataset.columns)}):i.push({terms:[e],columns:void 0})})):t.dataset.columns?i.push({terms:s,columns:JSON.parse(t.dataset.columns)}):i.push({terms:s,columns:void 0})})),1===i.length&&1===i[0].terms.length){const t=i[0];this.search(t.terms[0],t.columns)}else this.multiSearch(i)})),this.wrapperDOM.addEventListener("click",(t=>{const e=t.target.closest("a, button");if(e)if(e.hasAttribute("data-page"))this.page(parseInt(e.getAttribute("data-page"),10)),t.preventDefault();else if(d(e,this.options.classes.sorter)){const s=Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement),i=o(s,this.columns.settings);this.columns.sort(i),t.preventDefault()}else if(d(e,this.options.classes.filter)){const s=Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement),i=o(s,this.columns.settings);this.columns.filter(i),t.preventDefault()}}),!1),this.options.rowNavigation?(this.dom.addEventListener("keydown",(t=>{if("ArrowUp"===t.key){let e;t.preventDefault(),t.stopPropagation(),this.pages[this._currentPage-1].find((t=>t.index===this.rows.cursor||(e=t,!1))),e?this.rows.setCursor(e.index):this.onFirstPage||this.page(this._currentPage-1,!0)}else if("ArrowDown"===t.key){let e;t.preventDefault(),t.stopPropagation();const s=this.pages[this._currentPage-1].find((t=>!!e||(t.index===this.rows.cursor&&(e=!0),!1)));s?this.rows.setCursor(s.index):this.onLastPage||this.page(this._currentPage+1)}else["Enter"," "].includes(t.key)&&this.emit("datatable.selectrow",this.rows.cursor,t)})),this.dom.addEventListener("mousedown",(t=>{const e=t.target;if(e instanceof Element&&this.dom.matches(":focus")){const s=Array.from(this.dom.querySelectorAll("tbody > tr")).find((t=>t.contains(e)));s&&s instanceof HTMLElement&&this.emit("datatable.selectrow",parseInt(s.dataset.index,10),t)}}))):this.dom.addEventListener("mousedown",(t=>{const e=t.target;if(!(e instanceof Element))return;const s=Array.from(this.dom.querySelectorAll("tbody > tr")).find((t=>t.contains(e)));s&&s instanceof HTMLElement&&this.emit("datatable.selectrow",parseInt(s.dataset.index,10),t)})),window.addEventListener("resize",this._listeners.onResize)}_onResize(){this._rect=this.containerDOM.getBoundingClientRect(),this._rect.width&&this.update(!0)}destroy(){if(this.options.destroyable){if(this.wrapperDOM)if(this.wrapperDOM.parentElement){const t=s("div");t.innerHTML=this._initialHTML,this.wrapperDOM.parentElement.replaceChild(t.firstElementChild,this.wrapperDOM)}else this.options.classes.table?.split(" ").forEach((t=>this.wrapperDOM.classList.remove(t)));window.removeEventListener("resize",this._listeners.onResize),this.initialized=!1}}update(t=!1){t&&(this.columns._measureWidths(),this.hasRows=Boolean(this.data.data.length),this.hasHeadings=Boolean(this.data.headings.length)),this.options.classes.empty?.split(" ").forEach((t=>this.wrapperDOM.classList.remove(t))),this._paginate(),this._renderPage(),this._renderPagers(),this.options.scrollY.length&&this._renderSeparateHeader(),this.emit("datatable.update")}_paginate(){let t=this.data.data.map(((t,e)=>({row:t,index:e})));return this._searchQueries.length&&(t=[],this._searchData.forEach((e=>t.push({index:e,row:this.data.data[e]})))),this.columns._state.filters.length&&this.columns._state.filters.forEach(((e,s)=>{e&&(t=t.filter((t=>{const i=t.row.cells[s];return"function"==typeof e?e(i.data):n(i)===e})))})),this.options.paging&&this.options.perPage>0?this.pages=t.map(((e,s)=>s%this.options.perPage==0?t.slice(s,s+this.options.perPage):null)).filter((t=>t)):this.pages=[t],this.totalPages=this.lastPage=this.pages.length,this._currentPage||(this._currentPage=1),this.totalPages}_fixHeight(){this.options.fixedHeight&&(this.containerDOM.style.height=null,this._rect=this.containerDOM.getBoundingClientRect(),this.containerDOM.style.height=`${this._rect.height}px`)}search(t,e=void 0){if(!t.length)return this._currentPage=1,this._searchQueries=[],this._searchData=[],this.update(),this.emit("datatable.search","",[]),this.wrapperDOM.classList.remove("search-results"),!1;this.multiSearch([{terms:[t],columns:e||void 0}]),this.emit("datatable.search",t,this._searchData)}multiSearch(t){if(!this.hasRows)return!1;this._currentPage=1,this._searchData=[];const e=t.map((t=>({columns:t.columns,terms:t.terms.map((t=>t.trim())).filter((t=>t))}))).filter((t=>t.terms.length));if(this._searchQueries=e,!e.length)return this.update(),this.emit("datatable.multisearch",e,this._searchData),this.wrapperDOM.classList.remove("search-results"),!1;const s=e.map((t=>this.columns.settings.map(((e,s)=>{if(e.hidden||!e.searchable||t.columns&&!t.columns.includes(s))return!1;let i=t.terms;const n=e.sensitivity||this.options.sensitivity;["base","accent"].includes(n)&&(i=i.map((t=>t.toLowerCase()))),["base","case"].includes(n)&&(i=i.map((t=>t.normalize("NFD").replace(/\p{Diacritic}/gu,""))));return(e.ignorePunctuation??this.options.ignorePunctuation)&&(i=i.map((t=>t.replace(/[.,/#!$%^&*;:{}=-_`~()]/g,"")))),i}))));this.data.data.forEach(((t,e)=>{const i=t.cells.map(((t,e)=>{let s=n(t).trim();const i=this.columns.settings[e];if(s.length){const t=i.sensitivity||this.options.sensitivity;["base","accent"].includes(t)&&(s=s.toLowerCase()),["base","case"].includes(t)&&(s=s.normalize("NFD").replace(/\p{Diacritic}/gu,""));(i.ignorePunctuation??this.options.ignorePunctuation)&&(s=s.replace(/[.,/#!$%^&*;:{}=-_`~()]/g,""))}const a=i.searchItemSeparator||this.options.searchItemSeparator;return a?s.split(a):[s]}));s.every((t=>t.find(((t,e)=>!!t&&t.find((t=>i[e].find((e=>e.includes(t)))))))))&&this._searchData.push(e)})),this.wrapperDOM.classList.add("search-results"),this._searchData.length?this.update():(this.wrapperDOM.classList.remove("search-results"),this.setMessage(this.options.labels.noResults)),this.emit("datatable.multisearch",e,this._searchData)}page(t,e=!1){return t!==this._currentPage&&(isNaN(t)||(this._currentPage=t),!(t>this.pages.length||t<0)&&(this._renderPage(e),this._renderPagers(),void this.emit("datatable.page",t)))}insert(e){let s=[];if(Array.isArray(e)){const t=this.data.headings.map((t=>t.data?String(t.data):t.text));e.forEach(((e,i)=>{const n=[];Object.entries(e).forEach((([e,s])=>{const a=t.indexOf(e);a>-1?n[a]=X(s,this.columns.settings[a]):this.hasHeadings||this.hasRows||0!==i||(n[t.length]=X(s,this.columns.settings[t.length]),t.push(e),this.data.headings.push(Z(e)))})),s.push({cells:n})}))}else t(e)&&(!e.headings||this.hasHeadings||this.hasRows?e.data&&Array.isArray(e.data)&&(s=e.data.map((t=>{let e,s;return Array.isArray(t)?(e={},s=t):(e=t.attributes,s=t.cells),{attributes:e,cells:s.map(((t,e)=>X(t,this.columns.settings[e])))}}))):this.data=G(e,void 0,this.columns.settings,this.options.type,this.options.format));s.length&&s.forEach((t=>this.data.data.push(t))),this.hasHeadings=Boolean(this.data.headings.length),this.columns._state.sort&&this.columns.sort(this.columns._state.sort.column,this.columns._state.sort.dir,!0),this.update(!0)}refresh(){if(this.options.searchable){const t=l(this.options.classes.input);Array.from(this.wrapperDOM.querySelectorAll(t)).forEach((t=>t.value="")),this._searchQueries=[]}this._currentPage=1,this.onFirstPage=!0,this.update(!0),this.emit("datatable.refresh")}print(){const t=s("table");let e=q(this._tableAttributes,this.data.headings,this.data.data.map(((t,e)=>({row:t,index:e}))),this.columns.settings,this.columns._state,!1,this.options,{noColumnWidths:!0,unhideHeader:!0},this._tableFooters,this._tableCaptions);if(this.options.tableRender){const t=this.options.tableRender(this.data,e,"print");t&&(e=t)}const i=this._dd.diff({nodeName:"TABLE"},e);this._dd.apply(t,i);const n=window.open();n.document.body.appendChild(t),n.print()}setMessage(t){const e=this.data.headings.filter(((t,e)=>!this.columns.settings[e]?.hidden)).length||1;this.options.classes.empty?.split(" ").forEach((t=>this.wrapperDOM.classList.add(t))),this._label&&(this._label.innerHTML=""),this.totalPages=0,this._renderPagers();let s={nodeName:"TABLE",attributes:this._tableAttributes,childNodes:[{nodeName:"THEAD",childNodes:[F(this.data.headings,this.columns.settings,this.columns._state,this.options,{})]},{nodeName:"TBODY",childNodes:[{nodeName:"TR",childNodes:[{nodeName:"TD",attributes:{class:this.options.classes.empty,colspan:String(e)},childNodes:[{nodeName:"#text",data:t}]}]}]}]};if(this._tableFooters.forEach((t=>s.childNodes.push(t))),this._tableCaptions.forEach((t=>s.childNodes.push(t))),s.attributes.class=c(s.attributes.class,this.options.classes.table),this.options.tableRender){const t=this.options.tableRender(this.data,s,"message");t&&(s=t)}const i=this._dd.diff(this._virtualDOM,s);this._dd.apply(this.dom,i),this._virtualDOM=s}on(t,e){this._events[t]=this._events[t]||[],this._events[t].push(e)}off(t,e){t in this._events!=!1&&this._events[t].splice(this._events[t].indexOf(e),1)}emit(t,...e){if(t in this._events!=!1)for(let s=0;s<this._events[t].length;s++)this._events[t][s](...e)}},exports.addColumnFilter=function(t,e={}){const s=new rt(t,e);return t.initialized?s.init():t.on("datatable.init",(()=>s.init())),s},exports.convertCSV=function(e){let s;if(!t(e))return!1;const i={lineDelimiter:"\n",columnDelimiter:",",removeDoubleQuotes:!1,...e};if(i.data.length){s={data:[]};const t=i.data.split(i.lineDelimiter);if(t.length&&(i.headings&&(s.headings=t[0].split(i.columnDelimiter),i.removeDoubleQuotes&&(s.headings=s.headings.map((t=>t.trim().replace(/(^"|"$)/g,"")))),t.shift()),t.forEach(((t,e)=>{s.data[e]=[];const n=t.split(i.columnDelimiter);n.length&&n.forEach((t=>{i.removeDoubleQuotes&&(t=t.trim().replace(/(^"|"$)/g,"")),s.data[e].push(t)}))}))),s)return s}return!1},exports.convertJSON=function(s){let i;if(!t(s))return!1;const n={data:"",...s};if(n.data.length||t(n.data)){const t=!!e(n.data)&&JSON.parse(n.data);if(t?(i={headings:[],data:[]},t.forEach(((t,e)=>{i.data[e]=[],Object.entries(t).forEach((([t,s])=>{i.headings.includes(t)||i.headings.push(t),i.data[e].push(s)}))}))):console.warn("That's not valid JSON!"),i)return i}return!1},exports.createElement=s,exports.exportCSV=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const i={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",...s},a=t=>!i.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden,o=e.data.headings.filter(((t,e)=>a(e))).map((t=>t.text??t.data));let r;if(i.selection)if(Array.isArray(i.selection)){r=[];for(let t=0;t<i.selection.length;t++)r=r.concat(e.pages[i.selection[t]-1].map((t=>t.row)))}else r=e.pages[i.selection-1].map((t=>t.row));else r=e.data.data;let l=[];if(l[0]=o,l=l.concat(r.map((t=>t.cells.filter(((t,e)=>a(e))).map((t=>n(t)))))),l.length){let t="";if(l.forEach((e=>{e.forEach((e=>{"string"==typeof e&&(e=(e=(e=(e=(e=e.trim()).replace(/\s{2,}/g," ")).replace(/\n/g,"  ")).replace(/"/g,'""')).replace(/#/g,"%23")).includes(",")&&(e=`"${e}"`),t+=e+i.columnDelimiter})),t=t.trim().substring(0,t.length-1),t+=i.lineDelimiter})),t=t.trim().substring(0,t.length-1),i.download){const e=document.createElement("a");e.href=encodeURI(`data:text/csv;charset=utf-8,${t}`),e.download=`${i.filename||"datatable_export"}.csv`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}return t}return!1},exports.exportJSON=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const i={download:!0,skipColumn:[],replacer:null,space:4,...s},a=t=>!i.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden;let o;if(i.selection)if(Array.isArray(i.selection)){o=[];for(let t=0;t<i.selection.length;t++)o=o.concat(e.pages[i.selection[t]-1].map((t=>t.row)))}else o=e.pages[i.selection-1].map((t=>t.row));else o=e.data.data;const r=o.map((t=>t.cells.filter(((t,e)=>a(e))).map((t=>n(t))))),l=e.data.headings.filter(((t,e)=>a(e))).map((t=>t.text??String(t.data)));if(r.length){const t=[];r.forEach(((e,s)=>{t[s]=t[s]||{},e.forEach(((e,i)=>{t[s][l[i]]=e}))}));const e=JSON.stringify(t,i.replacer,i.space);if(i.download){const t=new Blob([e],{type:"data:application/json;charset=utf-8"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`${i.filename||"datatable_export"}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(s)}return e}return!1},exports.exportSQL=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const i={download:!0,skipColumn:[],tableName:"myTable",...s},a=t=>!i.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden;let o=[];if(i.selection)if(Array.isArray(i.selection))for(let t=0;t<i.selection.length;t++)o=o.concat(e.pages[i.selection[t]-1].map((t=>t.row)));else o=e.pages[i.selection-1].map((t=>t.row));else o=e.data.data;const r=o.map((t=>t.cells.filter(((t,e)=>a(e))).map((t=>n(t))))),l=e.data.headings.filter(((t,e)=>a(e))).map((t=>t.text??String(t.data)));if(r.length){let t=`INSERT INTO \`${i.tableName}\` (`;if(l.forEach((e=>{t+=`\`${e}\`,`})),t=t.trim().substring(0,t.length-1),t+=") VALUES ",r.forEach((e=>{t+="(",e.forEach((e=>{t+="string"==typeof e?`"${e}",`:`${e},`})),t=t.trim().substring(0,t.length-1),t+="),"})),t=t.trim().substring(0,t.length-1),t+=";",i.download&&(t=`data:application/sql;charset=utf-8,${t}`),i.download){const e=document.createElement("a");e.href=encodeURI(t),e.download=`${i.filename||"datatable_export"}.sql`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}return t}return!1},exports.exportTXT=function(e,s={}){if(!e.hasHeadings&&!e.hasRows)return!1;if(!t(s))return!1;const i={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",...s},a=t=>!i.skipColumn.includes(t)&&!e.columns.settings[t]?.hidden,o=e.data.headings.filter(((t,e)=>a(e))).map((t=>t.text??t.data));let r;if(i.selection)if(Array.isArray(i.selection)){r=[];for(let t=0;t<i.selection.length;t++)r=r.concat(e.pages[i.selection[t]-1].map((t=>t.row)))}else r=e.pages[i.selection-1].map((t=>t.row));else r=e.data.data;let l=[];if(l[0]=o,l=l.concat(r.map((t=>t.cells.filter(((t,e)=>a(e))).map((t=>n(t)))))),l.length){let t="";if(l.forEach((e=>{e.forEach((e=>{"string"==typeof e&&(e=(e=(e=(e=(e=e.trim()).replace(/\s{2,}/g," ")).replace(/\n/g,"  ")).replace(/"/g,'""')).replace(/#/g,"%23")).includes(",")&&(e=`"${e}"`),t+=e+i.columnDelimiter})),t=t.trim().substring(0,t.length-1),t+=i.lineDelimiter})),t=t.trim().substring(0,t.length-1),i.download&&(t=`data:text/csv;charset=utf-8,${t}`),i.download){const e=document.createElement("a");e.href=encodeURI(t),e.download=`${i.filename||"datatable_export"}.txt`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}return t}return!1},exports.isJson=e,exports.isObject=t,exports.makeEditable=function(t,e={}){const s=new at(t,e);return t.initialized?s.init():t.on("datatable.init",(()=>s.init())),s};


}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
<<<<<<< HEAD

/**
 * Check is item is object
 */
const isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
/**
 * Check for valid JSON string
 */
const isJson = (str) => {
    let t = !1;
    try {
        t = JSON.parse(str);
    }
    catch (e) {
        return !1;
    }
    return !(null === t || (!Array.isArray(t) && !isObject(t))) && t;
};
/**
 * Create DOM element node
 */
const createElement = (nodeName, attrs) => {
    const dom = document.createElement(nodeName);
    if (attrs && "object" == typeof attrs) {
        for (const attr in attrs) {
            if ("html" === attr) {
                dom.innerHTML = attrs[attr];
            }
            else {
                dom.setAttribute(attr, attrs[attr]);
            }
        }
    }
    return dom;
};
const objToText = (obj) => {
    if (["#text", "#comment"].includes(obj.nodeName)) {
        return obj.data;
    }
    if (obj.childNodes) {
        return obj.childNodes.map((childNode) => objToText(childNode)).join("");
    }
    return "";
};
const cellToText = (obj) => {
    if (obj === null || obj === undefined) {
        return "";
    }
    else if (obj.hasOwnProperty("text") || obj.hasOwnProperty("data")) {
        const cell = obj;
        return cell.text ?? cellToText(cell.data);
    }
    else if (obj.hasOwnProperty("nodeName")) {
        return objToText(obj);
    }
    return String(obj);
};
const escapeText = function (text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};
const visibleToColumnIndex = function (visibleIndex, columns) {
    let counter = 0;
    let columnIndex = 0;
    while (counter < (visibleIndex + 1)) {
        const columnSettings = columns[columnIndex];
        if (!columnSettings.hidden) {
            counter += 1;
        }
        columnIndex += 1;
    }
    return columnIndex - 1;
};
const columnToVisibleIndex = function (columnIndex, columns) {
    let visibleIndex = columnIndex;
    let counter = 0;
    while (counter < columnIndex) {
        const columnSettings = columns[counter];
        if (columnSettings.hidden) {
            visibleIndex -= 1;
        }
        counter++;
    }
    return visibleIndex;
};
/**
 * Converts a [NamedNodeMap](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap) into a normal object.
 *
 * @param map The `NamedNodeMap` to convert
 */
const namedNodeMapToObject = function (map) {
    const obj = {};
    if (map) {
        for (const attr of map) {
            obj[attr.name] = attr.value;
        }
    }
    return obj;
};
/**
 * Convert class names to a CSS selector. Multiple classes should be separated by spaces.
 * Examples:
 *  - "my-class" -> ".my-class"
 *  - "my-class second-class" -> ".my-class.second-class"
 *
 * @param classNames The class names to convert. Can contain multiple classes separated by spaces.
 */
const classNamesToSelector = (classNames) => {
    if (!classNames) {
        return null;
    }
    return classNames.trim().split(" ").map(className => `.${className}`).join("");
};
/**
 * Check if the element contains all the classes. Multiple classes should be separated by spaces.
 *
 * @param element The element that will be checked
 * @param classes The classes that must be present in the element. Can contain multiple classes separated by spaces.
 */
const containsClass = (element, classes) => {
    const hasMissingClass = classes?.split(" ").some(className => !element.classList.contains(className));
    return !hasMissingClass;
};
/**
 * Join two strings with spaces. Null values are ignored.
 * Examples:
 *  - joinWithSpaces("a", "b") -> "a b"
 *  - joinWithSpaces("a", null) -> "a"
 *  - joinWithSpaces(null, "b") -> "b"
 *  - joinWithSpaces("a", "b c") -> "a b c"
 *
 * @param first The first string to join
 * @param second The second string to join
 */
const joinWithSpaces = (first, second) => {
    if (first) {
        if (second) {
            return `${first} ${second}`;
        }
        return first;
    }
    else if (second) {
        return second;
    }
    return "";
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        var arguments$1 = arguments;

        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments$1[i];
            for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p)) { t[p] = s[p]; } }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    { for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) { ar = Array.prototype.slice.call(from, 0, i); }
            ar[i] = from[i];
        }
    } }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Diff = /** @class */ (function () {
    function Diff(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        Object.entries(options).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return (_this[key] = value);
        });
    }
    Diff.prototype.toString = function () {
        return JSON.stringify(this);
    };
    Diff.prototype.setValue = function (aKey, aValue) {
        this[aKey] = aValue;
        return this;
    };
    return Diff;
}());
function checkElementType(element) {
    var arguments$1 = arguments;

    var elementTypeNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elementTypeNames[_i - 1] = arguments$1[_i];
    }
    if (typeof element === "undefined" || element === null) {
        return false;
    }
    return elementTypeNames.some(function (elementTypeName) {
        var _a, _b;
        // We need to check if the specified type is defined
        // because otherwise instanceof throws an exception.
        return typeof ((_b = (_a = element === null || element === void 0 ? void 0 : element.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b[elementTypeName]) ===
            "function" &&
            element instanceof
                element.ownerDocument.defaultView[elementTypeName];
    });
}

function objToNode(objNode, insideSvg, options) {
    var node;
    if (objNode.nodeName === "#text") {
        node = options.document.createTextNode(objNode.data);
    }
    else if (objNode.nodeName === "#comment") {
        node = options.document.createComment(objNode.data);
    }
    else {
        if (insideSvg) {
            node = options.document.createElementNS("http://www.w3.org/2000/svg", objNode.nodeName);
            if (objNode.nodeName === "foreignObject") {
                insideSvg = false;
            }
        }
        else if (objNode.nodeName.toLowerCase() === "svg") {
            node = options.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            insideSvg = true;
        }
        else {
            node = options.document.createElement(objNode.nodeName);
        }
        if (objNode.attributes) {
            Object.entries(objNode.attributes).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                return node.setAttribute(key, value);
            });
        }
        if (objNode.childNodes) {
            node = node;
            objNode.childNodes.forEach(function (childNode) {
                return node.appendChild(objToNode(childNode, insideSvg, options));
            });
        }
        if (options.valueDiffing) {
            if (objNode.value &&
                checkElementType(node, "HTMLButtonElement", "HTMLDataElement", "HTMLInputElement", "HTMLLIElement", "HTMLMeterElement", "HTMLOptionElement", "HTMLProgressElement", "HTMLParamElement")) {
                node.value = objNode.value;
            }
            if (objNode.checked && checkElementType(node, "HTMLInputElement")) {
                node.checked = objNode.checked;
            }
            if (objNode.selected &&
                checkElementType(node, "HTMLOptionElement")) {
                node.selected = objNode.selected;
            }
        }
    }
    return node;
}

// ===== Apply a diff =====
var getFromRoute = function (node, route) {
    route = route.slice();
    while (route.length > 0) {
        var c = route.splice(0, 1)[0];
        node = node.childNodes[c];
    }
    return node;
};
function applyDiff(tree, diff, options) {
    var action = diff[options._const.action];
    var route = diff[options._const.route];
    var node;
    if (![options._const.addElement, options._const.addTextElement].includes(action)) {
        // For adding nodes, we calculate the route later on. It's different because it includes the position of the newly added item.
        node = getFromRoute(tree, route);
    }
    var newNode;
    var reference;
    var nodeArray;
    // pre-diff hook
    var info = {
        diff: diff,
        node: node
    };
    if (options.preDiffApply(info)) {
        return true;
    }
    switch (action) {
        case options._const.addAttribute:
            if (!node || !checkElementType(node, "Element")) {
                return false;
            }
            node.setAttribute(diff[options._const.name], diff[options._const.value]);
            break;
        case options._const.modifyAttribute:
            if (!node || !checkElementType(node, "Element")) {
                return false;
            }
            node.setAttribute(diff[options._const.name], diff[options._const.newValue]);
            if (checkElementType(node, "HTMLInputElement") &&
                diff[options._const.name] === "value") {
                node.value = diff[options._const.newValue];
            }
            break;
        case options._const.removeAttribute:
            if (!node || !checkElementType(node, "Element")) {
                return false;
            }
            node.removeAttribute(diff[options._const.name]);
            break;
        case options._const.modifyTextElement:
            if (!node || !checkElementType(node, "Text")) {
                return false;
            }
            options.textDiff(node, node.data, diff[options._const.oldValue], diff[options._const.newValue]);
            if (checkElementType(node.parentNode, "HTMLTextAreaElement")) {
                node.parentNode.value = diff[options._const.newValue];
            }
            break;
        case options._const.modifyValue:
            if (!node || typeof node.value === "undefined") {
                return false;
            }
            node.value = diff[options._const.newValue];
            break;
        case options._const.modifyComment:
            if (!node || !checkElementType(node, "Comment")) {
                return false;
            }
            options.textDiff(node, node.data, diff[options._const.oldValue], diff[options._const.newValue]);
            break;
        case options._const.modifyChecked:
            if (!node || typeof node.checked === "undefined") {
                return false;
            }
            node.checked = diff[options._const.newValue];
            break;
        case options._const.modifySelected:
            if (!node || typeof node.selected === "undefined") {
                return false;
            }
            node.selected = diff[options._const.newValue];
            break;
        case options._const.replaceElement: {
            var insideSvg = diff[options._const.newValue].nodeName.toLowerCase() === "svg" ||
                node.parentNode.namespaceURI === "http://www.w3.org/2000/svg";
            node.parentNode.replaceChild(objToNode(diff[options._const.newValue], insideSvg, options), node);
            break;
        }
        case options._const.relocateGroup:
            nodeArray = __spreadArray([], new Array(diff[options._const.groupLength])).map(function () {
                return node.removeChild(node.childNodes[diff[options._const.from]]);
            });
            nodeArray.forEach(function (childNode, index) {
                if (index === 0) {
                    reference =
                        node.childNodes[diff[options._const.to]];
                }
                node.insertBefore(childNode, reference || null);
            });
            break;
        case options._const.removeElement:
            node.parentNode.removeChild(node);
            break;
        case options._const.addElement: {
            var parentRoute = route.slice();
            var c = parentRoute.splice(parentRoute.length - 1, 1)[0];
            node = getFromRoute(tree, parentRoute);
            if (!checkElementType(node, "Element")) {
                return false;
            }
            node.insertBefore(objToNode(diff[options._const.element], node.namespaceURI === "http://www.w3.org/2000/svg", options), node.childNodes[c] || null);
            break;
        }
        case options._const.removeTextElement: {
            if (!node || node.nodeType !== 3) {
                return false;
            }
            var parentNode = node.parentNode;
            parentNode.removeChild(node);
            if (checkElementType(parentNode, "HTMLTextAreaElement")) {
                parentNode.value = "";
            }
            break;
        }
        case options._const.addTextElement: {
            var parentRoute = route.slice();
            var c = parentRoute.splice(parentRoute.length - 1, 1)[0];
            newNode = options.document.createTextNode(diff[options._const.value]);
            node = getFromRoute(tree, parentRoute);
            if (!node.childNodes) {
                return false;
            }
            node.insertBefore(newNode, node.childNodes[c] || null);
            if (checkElementType(node.parentNode, "HTMLTextAreaElement")) {
                node.parentNode.value = diff[options._const.value];
            }
            break;
        }
        default:
            console.log("unknown action");
    }
    // if a new node was created, we might be interested in its
    // post diff hook
    options.postDiffApply({
        diff: info.diff,
        node: info.node,
        newNode: newNode
    });
    return true;
}
function applyDOM(tree, diffs, options) {
    return diffs.every(function (diff) {
        return applyDiff(tree, diff, options);
    });
}

// ===== Undo a diff =====
function swap(obj, p1, p2) {
    var tmp = obj[p1];
    obj[p1] = obj[p2];
    obj[p2] = tmp;
}
function undoDiff(tree, diff, options) {
    switch (diff[options._const.action]) {
        case options._const.addAttribute:
            diff[options._const.action] = options._const.removeAttribute;
            applyDiff(tree, diff, options);
            break;
        case options._const.modifyAttribute:
            swap(diff, options._const.oldValue, options._const.newValue);
            applyDiff(tree, diff, options);
            break;
        case options._const.removeAttribute:
            diff[options._const.action] = options._const.addAttribute;
            applyDiff(tree, diff, options);
            break;
        case options._const.modifyTextElement:
            swap(diff, options._const.oldValue, options._const.newValue);
            applyDiff(tree, diff, options);
            break;
        case options._const.modifyValue:
            swap(diff, options._const.oldValue, options._const.newValue);
            applyDiff(tree, diff, options);
            break;
        case options._const.modifyComment:
            swap(diff, options._const.oldValue, options._const.newValue);
            applyDiff(tree, diff, options);
            break;
        case options._const.modifyChecked:
            swap(diff, options._const.oldValue, options._const.newValue);
            applyDiff(tree, diff, options);
            break;
        case options._const.modifySelected:
            swap(diff, options._const.oldValue, options._const.newValue);
            applyDiff(tree, diff, options);
            break;
        case options._const.replaceElement:
            swap(diff, options._const.oldValue, options._const.newValue);
            applyDiff(tree, diff, options);
            break;
        case options._const.relocateGroup:
            swap(diff, options._const.from, options._const.to);
            applyDiff(tree, diff, options);
            break;
        case options._const.removeElement:
            diff[options._const.action] = options._const.addElement;
            applyDiff(tree, diff, options);
            break;
        case options._const.addElement:
            diff[options._const.action] = options._const.removeElement;
            applyDiff(tree, diff, options);
            break;
        case options._const.removeTextElement:
            diff[options._const.action] = options._const.addTextElement;
            applyDiff(tree, diff, options);
            break;
        case options._const.addTextElement:
            diff[options._const.action] = options._const.removeTextElement;
            applyDiff(tree, diff, options);
            break;
        default:
            console.log("unknown action");
    }
}
function undoDOM(tree, diffs, options) {
    diffs = diffs.slice();
    diffs.reverse();
    diffs.forEach(function (diff) {
        undoDiff(tree, diff, options);
    });
}

var elementDescriptors = function (el) {
    var output = [];
    output.push(el.nodeName);
    if (el.nodeName !== "#text" && el.nodeName !== "#comment") {
        el = el;
        if (el.attributes) {
            if (el.attributes["class"]) {
                output.push("".concat(el.nodeName, ".").concat(el.attributes["class"].replace(/ /g, ".")));
            }
            if (el.attributes.id) {
                output.push("".concat(el.nodeName, "#").concat(el.attributes.id));
            }
        }
    }
    return output;
};
var findUniqueDescriptors = function (li) {
    var uniqueDescriptors = {};
    var duplicateDescriptors = {};
    li.forEach(function (node) {
        elementDescriptors(node).forEach(function (descriptor) {
            var inUnique = descriptor in uniqueDescriptors;
            var inDupes = descriptor in duplicateDescriptors;
            if (!inUnique && !inDupes) {
                uniqueDescriptors[descriptor] = true;
            }
            else if (inUnique) {
                delete uniqueDescriptors[descriptor];
                duplicateDescriptors[descriptor] = true;
            }
        });
    });
    return uniqueDescriptors;
};
var uniqueInBoth = function (l1, l2) {
    var l1Unique = findUniqueDescriptors(l1);
    var l2Unique = findUniqueDescriptors(l2);
    var inBoth = {};
    Object.keys(l1Unique).forEach(function (key) {
        if (l2Unique[key]) {
            inBoth[key] = true;
        }
    });
    return inBoth;
};
var removeDone = function (tree) {
    delete tree.outerDone;
    delete tree.innerDone;
    delete tree.valueDone;
    if (tree.childNodes) {
        return tree.childNodes.every(removeDone);
    }
    else {
        return true;
    }
};
var cleanNode = function (diffNode) {
    if (Object.prototype.hasOwnProperty.call(diffNode, "data")) {
        var textNode = {
            nodeName: diffNode.nodeName === "#text" ? "#text" : "#comment",
            data: diffNode.data
        };
        return textNode;
    }
    else {
        var elementNode = {
            nodeName: diffNode.nodeName
        };
        diffNode = diffNode;
        if (Object.prototype.hasOwnProperty.call(diffNode, "attributes")) {
            elementNode.attributes = __assign({}, diffNode.attributes);
        }
        if (Object.prototype.hasOwnProperty.call(diffNode, "checked")) {
            elementNode.checked = diffNode.checked;
        }
        if (Object.prototype.hasOwnProperty.call(diffNode, "value")) {
            elementNode.value = diffNode.value;
        }
        if (Object.prototype.hasOwnProperty.call(diffNode, "selected")) {
            elementNode.selected = diffNode.selected;
        }
        if (Object.prototype.hasOwnProperty.call(diffNode, "childNodes")) {
            elementNode.childNodes = diffNode.childNodes.map(function (diffChildNode) {
                return cleanNode(diffChildNode);
            });
        }
        return elementNode;
    }
};
var isEqual = function (e1, e2) {
    if (!["nodeName", "value", "checked", "selected", "data"].every(function (element) {
        if (e1[element] !== e2[element]) {
            return false;
        }
        return true;
    })) {
        return false;
    }
    if (Object.prototype.hasOwnProperty.call(e1, "data")) {
        // Comment or Text
        return true;
    }
    e1 = e1;
    e2 = e2;
    if (Boolean(e1.attributes) !== Boolean(e2.attributes)) {
        return false;
    }
    if (Boolean(e1.childNodes) !== Boolean(e2.childNodes)) {
        return false;
    }
    if (e1.attributes) {
        var e1Attributes = Object.keys(e1.attributes);
        var e2Attributes = Object.keys(e2.attributes);
        if (e1Attributes.length !== e2Attributes.length) {
            return false;
        }
        if (!e1Attributes.every(function (attribute) {
            if (e1.attributes[attribute] !==
                e2.attributes[attribute]) {
                return false;
            }
            return true;
        })) {
            return false;
        }
    }
    if (e1.childNodes) {
        if (e1.childNodes.length !== e2.childNodes.length) {
            return false;
        }
        if (!e1.childNodes.every(function (childNode, index) {
            return isEqual(childNode, e2.childNodes[index]);
        })) {
            return false;
        }
    }
    return true;
};
var roughlyEqual = function (e1, e2, uniqueDescriptors, sameSiblings, preventRecursion) {
    if (preventRecursion === void 0) { preventRecursion = false; }
    if (!e1 || !e2) {
        return false;
    }
    if (e1.nodeName !== e2.nodeName) {
        return false;
    }
    if (["#text", "#comment"].includes(e1.nodeName)) {
        // Note that we initially don't care what the text content of a node is,
        // the mere fact that it's the same tag and "has text" means it's roughly
        // equal, and then we can find out the true text difference later.
        return preventRecursion
            ? true
            : e1.data === e2.data;
    }
    e1 = e1;
    e2 = e2;
    if (e1.nodeName in uniqueDescriptors) {
        return true;
    }
    if (e1.attributes && e2.attributes) {
        if (e1.attributes.id) {
            if (e1.attributes.id !== e2.attributes.id) {
                return false;
            }
            else {
                var idDescriptor = "".concat(e1.nodeName, "#").concat(e1.attributes.id);
                if (idDescriptor in uniqueDescriptors) {
                    return true;
                }
            }
        }
        if (e1.attributes["class"] &&
            e1.attributes["class"] === e2.attributes["class"]) {
            var classDescriptor = "".concat(e1.nodeName, ".").concat(e1.attributes["class"].replace(/ /g, "."));
            if (classDescriptor in uniqueDescriptors) {
                return true;
            }
        }
    }
    if (sameSiblings) {
        return true;
    }
    var nodeList1 = e1.childNodes ? e1.childNodes.slice().reverse() : [];
    var nodeList2 = e2.childNodes ? e2.childNodes.slice().reverse() : [];
    if (nodeList1.length !== nodeList2.length) {
        return false;
    }
    if (preventRecursion) {
        return nodeList1.every(function (element, index) {
            return element.nodeName === nodeList2[index].nodeName;
        });
    }
    else {
        // note: we only allow one level of recursion at any depth. If 'preventRecursion'
        // was not set, we must explicitly force it to true for child iterations.
        var childUniqueDescriptors_1 = uniqueInBoth(nodeList1, nodeList2);
        return nodeList1.every(function (element, index) {
            return roughlyEqual(element, nodeList2[index], childUniqueDescriptors_1, true, true);
        });
    }
};
/**
 * based on https://en.wikibooks.org/wiki/Algorithm_implementation/Strings/Longest_common_substring#JavaScript
 */
var findCommonSubsets = function (c1, c2, marked1, marked2) {
    var lcsSize = 0;
    var index = [];
    var c1Length = c1.length;
    var c2Length = c2.length;
    var // set up the matching table
    matches = __spreadArray([], new Array(c1Length + 1)).map(function () { return []; });
    var uniqueDescriptors = uniqueInBoth(c1, c2);
    var // If all of the elements are the same tag, id and class, then we can
    // consider them roughly the same even if they have a different number of
    // children. This will reduce removing and re-adding similar elements.
    subsetsSame = c1Length === c2Length;
    if (subsetsSame) {
        c1.some(function (element, i) {
            var c1Desc = elementDescriptors(element);
            var c2Desc = elementDescriptors(c2[i]);
            if (c1Desc.length !== c2Desc.length) {
                subsetsSame = false;
                return true;
            }
            c1Desc.some(function (description, i) {
                if (description !== c2Desc[i]) {
                    subsetsSame = false;
                    return true;
                }
            });
            if (!subsetsSame) {
                return true;
            }
        });
    }
    // fill the matches with distance values
    for (var c1Index = 0; c1Index < c1Length; c1Index++) {
        var c1Element = c1[c1Index];
        for (var c2Index = 0; c2Index < c2Length; c2Index++) {
            var c2Element = c2[c2Index];
            if (!marked1[c1Index] &&
                !marked2[c2Index] &&
                roughlyEqual(c1Element, c2Element, uniqueDescriptors, subsetsSame)) {
                matches[c1Index + 1][c2Index + 1] = matches[c1Index][c2Index]
                    ? matches[c1Index][c2Index] + 1
                    : 1;
                if (matches[c1Index + 1][c2Index + 1] >= lcsSize) {
                    lcsSize = matches[c1Index + 1][c2Index + 1];
                    index = [c1Index + 1, c2Index + 1];
                }
            }
            else {
                matches[c1Index + 1][c2Index + 1] = 0;
            }
        }
    }
    if (lcsSize === 0) {
        return false;
    }
    return {
        oldValue: index[0] - lcsSize,
        newValue: index[1] - lcsSize,
        length: lcsSize
    };
};
var makeBooleanArray = function (n, v) {
    return __spreadArray([], new Array(n)).map(function () { return v; });
};
/**
 * Generate arrays that indicate which node belongs to which subset,
 * or whether it's actually an orphan node, existing in only one
 * of the two trees, rather than somewhere in both.
 *
 * So if t1 = <img><canvas><br>, t2 = <canvas><br><img>.
 * The longest subset is "<canvas><br>" (length 2), so it will group 0.
 * The second longest is "<img>" (length 1), so it will be group 1.
 * gaps1 will therefore be [1,0,0] and gaps2 [0,0,1].
 *
 * If an element is not part of any group, it will stay being 'true', which
 * is the initial value. For example:
 * t1 = <img><p></p><br><canvas>, t2 = <b></b><br><canvas><img>
 *
 * The "<p></p>" and "<b></b>" do only show up in one of the two and will
 * therefore be marked by "true". The remaining parts are parts of the
 * groups 0 and 1:
 * gaps1 = [1, true, 0, 0], gaps2 = [true, 0, 0, 1]
 *
 */
var getGapInformation = function (t1, t2, stable) {
    var gaps1 = t1.childNodes
        ? makeBooleanArray(t1.childNodes.length, true)
        : [];
    var gaps2 = t2.childNodes
        ? makeBooleanArray(t2.childNodes.length, true)
        : [];
    var group = 0;
    // give elements from the same subset the same group number
    stable.forEach(function (subset) {
        var endOld = subset.oldValue + subset.length;
        var endNew = subset.newValue + subset.length;
        for (var j = subset.oldValue; j < endOld; j += 1) {
            gaps1[j] = group;
        }
        for (var j = subset.newValue; j < endNew; j += 1) {
            gaps2[j] = group;
        }
        group += 1;
    });
    return {
        gaps1: gaps1,
        gaps2: gaps2
    };
};
/**
 * Find all matching subsets, based on immediate child differences only.
 */
var markBoth = function (marked1, marked2, subset, i) {
    marked1[subset.oldValue + i] = true;
    marked2[subset.newValue + i] = true;
};
var markSubTrees = function (oldTree, newTree) {
    // note: the child lists are views, and so update as we update old/newTree
    var oldChildren = oldTree.childNodes ? oldTree.childNodes : [];
    var newChildren = newTree.childNodes ? newTree.childNodes : [];
    var marked1 = makeBooleanArray(oldChildren.length, false);
    var marked2 = makeBooleanArray(newChildren.length, false);
    var subsets = [];
    var returnIndex = function () {
        return arguments[1];
    };
    var foundAllSubsets = false;
    var _loop_1 = function () {
        var subset = findCommonSubsets(oldChildren, newChildren, marked1, marked2);
        if (subset) {
            subsets.push(subset);
            var subsetArray = __spreadArray([], new Array(subset.length)).map(returnIndex);
            subsetArray.forEach(function (item) {
                return markBoth(marked1, marked2, subset, item);
            });
        }
        else {
            foundAllSubsets = true;
        }
    };
    while (!foundAllSubsets) {
        _loop_1();
    }
    oldTree.subsets = subsets;
    oldTree.subsetsAge = 100;
    return subsets;
};
var DiffTracker = /** @class */ (function () {
    function DiffTracker() {
        this.list = [];
    }
    DiffTracker.prototype.add = function (diffs) {
        var _a;
        (_a = this.list).push.apply(_a, diffs);
    };
    DiffTracker.prototype.forEach = function (fn) {
        this.list.forEach(function (li) { return fn(li); });
    };
    return DiffTracker;
}());

// ===== Apply a virtual diff =====
function getFromVirtualRoute(tree, route) {
    var node = tree;
    var parentNode;
    var nodeIndex;
    route = route.slice();
    while (route.length > 0) {
        nodeIndex = route.splice(0, 1)[0];
        parentNode = node;
        node = node.childNodes ? node.childNodes[nodeIndex] : undefined;
    }
    return {
        node: node,
        parentNode: parentNode,
        nodeIndex: nodeIndex
    };
}
function applyVirtualDiff(tree, diff, options) {
    var _a;
    var node, parentNode, nodeIndex;
    if (![options._const.addElement, options._const.addTextElement].includes(diff[options._const.action])) {
        // For adding nodes, we calculate the route later on. It's different because it includes the position of the newly added item.
        var routeInfo = getFromVirtualRoute(tree, diff[options._const.route]);
        node = routeInfo.node;
        parentNode = routeInfo.parentNode;
        nodeIndex = routeInfo.nodeIndex;
    }
    var newSubsets = [];
    // pre-diff hook
    var info = {
        diff: diff,
        node: node
    };
    if (options.preVirtualDiffApply(info)) {
        return true;
    }
    var newNode;
    var nodeArray;
    var route;
    switch (diff[options._const.action]) {
        case options._const.addAttribute:
            if (!node.attributes) {
                node.attributes = {};
            }
            node.attributes[diff[options._const.name]] =
                diff[options._const.value];
            if (diff[options._const.name] === "checked") {
                node.checked = true;
            }
            else if (diff[options._const.name] === "selected") {
                node.selected = true;
            }
            else if (node.nodeName === "INPUT" &&
                diff[options._const.name] === "value") {
                node.value = diff[options._const.value];
            }
            break;
        case options._const.modifyAttribute:
            node.attributes[diff[options._const.name]] =
                diff[options._const.newValue];
            break;
        case options._const.removeAttribute:
            delete node.attributes[diff[options._const.name]];
            if (Object.keys(node.attributes).length === 0) {
                delete node.attributes;
            }
            if (diff[options._const.name] === "checked") {
                node.checked = false;
            }
            else if (diff[options._const.name] === "selected") {
                delete node.selected;
            }
            else if (node.nodeName === "INPUT" &&
                diff[options._const.name] === "value") {
                delete node.value;
            }
            break;
        case options._const.modifyTextElement:
            node.data = diff[options._const.newValue];
            if (parentNode.nodeName === "TEXTAREA") {
                parentNode.value = diff[options._const.newValue];
            }
            break;
        case options._const.modifyValue:
            node.value = diff[options._const.newValue];
            break;
        case options._const.modifyComment:
            node.data = diff[options._const.newValue];
            break;
        case options._const.modifyChecked:
            node.checked = diff[options._const.newValue];
            break;
        case options._const.modifySelected:
            node.selected = diff[options._const.newValue];
            break;
        case options._const.replaceElement:
            newNode = cleanNode(diff[options._const.newValue]);
            parentNode.childNodes[nodeIndex] = newNode;
            break;
        case options._const.relocateGroup:
            nodeArray = node.childNodes
                .splice(diff[options._const.from], diff[options._const.groupLength])
                .reverse();
            nodeArray.forEach(function (movedNode) {
                return node.childNodes.splice(diff[options._const.to], 0, movedNode);
            });
            if (node.subsets) {
                node.subsets.forEach(function (map) {
                    if (diff[options._const.from] < diff[options._const.to] &&
                        map.oldValue <= diff[options._const.to] &&
                        map.oldValue > diff[options._const.from]) {
                        map.oldValue -= diff[options._const.groupLength];
                        var splitLength = map.oldValue + map.length - diff[options._const.to];
                        if (splitLength > 0) {
                            // new insertion splits map.
                            newSubsets.push({
                                oldValue: diff[options._const.to] +
                                    diff[options._const.groupLength],
                                newValue: map.newValue + map.length - splitLength,
                                length: splitLength
                            });
                            map.length -= splitLength;
                        }
                    }
                    else if (diff[options._const.from] > diff[options._const.to] &&
                        map.oldValue > diff[options._const.to] &&
                        map.oldValue < diff[options._const.from]) {
                        map.oldValue += diff[options._const.groupLength];
                        var splitLength = map.oldValue + map.length - diff[options._const.to];
                        if (splitLength > 0) {
                            // new insertion splits map.
                            newSubsets.push({
                                oldValue: diff[options._const.to] +
                                    diff[options._const.groupLength],
                                newValue: map.newValue + map.length - splitLength,
                                length: splitLength
                            });
                            map.length -= splitLength;
                        }
                    }
                    else if (map.oldValue === diff[options._const.from]) {
                        map.oldValue = diff[options._const.to];
                    }
                });
            }
            break;
        case options._const.removeElement:
            parentNode.childNodes.splice(nodeIndex, 1);
            if (parentNode.subsets) {
                parentNode.subsets.forEach(function (map) {
                    if (map.oldValue > nodeIndex) {
                        map.oldValue -= 1;
                    }
                    else if (map.oldValue === nodeIndex) {
                        map["delete"] = true;
                    }
                    else if (map.oldValue < nodeIndex &&
                        map.oldValue + map.length > nodeIndex) {
                        if (map.oldValue + map.length - 1 === nodeIndex) {
                            map.length--;
                        }
                        else {
                            newSubsets.push({
                                newValue: map.newValue + nodeIndex - map.oldValue,
                                oldValue: nodeIndex,
                                length: map.length - nodeIndex + map.oldValue - 1
                            });
                            map.length = nodeIndex - map.oldValue;
                        }
                    }
                });
            }
            node = parentNode;
            break;
        case options._const.addElement: {
            route = diff[options._const.route].slice();
            var c_1 = route.splice(route.length - 1, 1)[0];
            node = (_a = getFromVirtualRoute(tree, route)) === null || _a === void 0 ? void 0 : _a.node;
            newNode = cleanNode(diff[options._const.element]);
            if (!node.childNodes) {
                node.childNodes = [];
            }
            if (c_1 >= node.childNodes.length) {
                node.childNodes.push(newNode);
            }
            else {
                node.childNodes.splice(c_1, 0, newNode);
            }
            if (node.subsets) {
                node.subsets.forEach(function (map) {
                    if (map.oldValue >= c_1) {
                        map.oldValue += 1;
                    }
                    else if (map.oldValue < c_1 &&
                        map.oldValue + map.length > c_1) {
                        var splitLength = map.oldValue + map.length - c_1;
                        newSubsets.push({
                            newValue: map.newValue + map.length - splitLength,
                            oldValue: c_1 + 1,
                            length: splitLength
                        });
                        map.length -= splitLength;
                    }
                });
            }
            break;
        }
        case options._const.removeTextElement:
            parentNode.childNodes.splice(nodeIndex, 1);
            if (parentNode.nodeName === "TEXTAREA") {
                delete parentNode.value;
            }
            if (parentNode.subsets) {
                parentNode.subsets.forEach(function (map) {
                    if (map.oldValue > nodeIndex) {
                        map.oldValue -= 1;
                    }
                    else if (map.oldValue === nodeIndex) {
                        map["delete"] = true;
                    }
                    else if (map.oldValue < nodeIndex &&
                        map.oldValue + map.length > nodeIndex) {
                        if (map.oldValue + map.length - 1 === nodeIndex) {
                            map.length--;
                        }
                        else {
                            newSubsets.push({
                                newValue: map.newValue + nodeIndex - map.oldValue,
                                oldValue: nodeIndex,
                                length: map.length - nodeIndex + map.oldValue - 1
                            });
                            map.length = nodeIndex - map.oldValue;
                        }
                    }
                });
            }
            node = parentNode;
            break;
        case options._const.addTextElement: {
            route = diff[options._const.route].slice();
            var c_2 = route.splice(route.length - 1, 1)[0];
            newNode = {
                nodeName: "#text",
                data: diff[options._const.value]
            };
            node = getFromVirtualRoute(tree, route).node;
            if (!node.childNodes) {
                node.childNodes = [];
            }
            if (c_2 >= node.childNodes.length) {
                node.childNodes.push(newNode);
            }
            else {
                node.childNodes.splice(c_2, 0, newNode);
            }
            if (node.nodeName === "TEXTAREA") {
                node.value = diff[options._const.newValue];
            }
            if (node.subsets) {
                node.subsets.forEach(function (map) {
                    if (map.oldValue >= c_2) {
                        map.oldValue += 1;
                    }
                    if (map.oldValue < c_2 && map.oldValue + map.length > c_2) {
                        var splitLength = map.oldValue + map.length - c_2;
                        newSubsets.push({
                            newValue: map.newValue + map.length - splitLength,
                            oldValue: c_2 + 1,
                            length: splitLength
                        });
                        map.length -= splitLength;
                    }
                });
            }
            break;
        }
        default:
            console.log("unknown action");
    }
    if (node.subsets) {
        node.subsets = node.subsets.filter(function (map) { return !map["delete"] && map.oldValue !== map.newValue; });
        if (newSubsets.length) {
            node.subsets = node.subsets.concat(newSubsets);
        }
    }
    options.postVirtualDiffApply({
        node: info.node,
        diff: info.diff,
        newNode: newNode
    });
    return;
}
function applyVirtual(tree, diffs, options) {
    diffs.forEach(function (diff) {
        applyVirtualDiff(tree, diff, options);
    });
    return true;
}

function nodeToObj(aNode, options) {
    if (options === void 0) { options = { valueDiffing: true }; }
    var objNode = {
        nodeName: aNode.nodeName
    };
    if (checkElementType(aNode, "Text", "Comment")) {
        objNode.data = aNode.data;
    }
    else {
        if (aNode.attributes && aNode.attributes.length > 0) {
            objNode.attributes = {};
            var nodeArray = Array.prototype.slice.call(aNode.attributes);
            nodeArray.forEach(function (attribute) {
                return (objNode.attributes[attribute.name] = attribute.value);
            });
        }
        if (aNode.childNodes && aNode.childNodes.length > 0) {
            objNode.childNodes = [];
            var nodeArray = Array.prototype.slice.call(aNode.childNodes);
            nodeArray.forEach(function (childNode) {
                return objNode.childNodes.push(nodeToObj(childNode, options));
            });
        }
        if (options.valueDiffing) {
            if (checkElementType(aNode, "HTMLTextAreaElement")) {
                objNode.value = aNode.value;
            }
            if (checkElementType(aNode, "HTMLInputElement") &&
                ["radio", "checkbox"].includes(aNode.type.toLowerCase()) &&
                aNode.checked !== undefined) {
                objNode.checked = aNode.checked;
            }
            else if (checkElementType(aNode, "HTMLButtonElement", "HTMLDataElement", "HTMLInputElement", "HTMLLIElement", "HTMLMeterElement", "HTMLOptionElement", "HTMLProgressElement", "HTMLParamElement")) {
                objNode.value = aNode.value;
            }
            if (checkElementType(aNode, "HTMLOptionElement")) {
                objNode.selected = aNode.selected;
            }
        }
    }
    return objNode;
}

// from html-parse-stringify (MIT)
var tagRE = /<\s*\/*[a-zA-Z:_][a-zA-Z0-9:_\-.]*\s*(?:"[^"]*"['"]*|'[^']*'['"]*|[^'"/>])*\/*\s*>|<!--(?:.|\n|\r)*?-->/g;
var attrRE = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function unescape(string) {
    return string
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
}
// create optimized lookup object for
// void elements as listed here:
// https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
var lookup = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuItem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
var parseTag = function (tag, caseSensitive) {
    var res = {
        nodeName: "",
        attributes: {}
    };
    var voidElement = false;
    var type = "tag";
    var tagMatch = tag.match(/<\/?([^\s]+?)[/\s>]/);
    if (tagMatch) {
        res.nodeName =
            caseSensitive || tagMatch[1] === "svg"
                ? tagMatch[1]
                : tagMatch[1].toUpperCase();
        if (lookup[tagMatch[1]] || tag.charAt(tag.length - 2) === "/") {
            voidElement = true;
        }
        // handle comment tag
        if (res.nodeName.startsWith("!--")) {
            var endIndex = tag.indexOf("-->");
            return {
                type: "comment",
                node: {
                    nodeName: "#comment",
                    data: endIndex !== -1 ? tag.slice(4, endIndex) : ""
                },
                voidElement: voidElement
            };
        }
    }
    var reg = new RegExp(attrRE);
    var result = null;
    var done = false;
    while (!done) {
        result = reg.exec(tag);
        if (result === null) {
            done = true;
        }
        else if (result[0].trim()) {
            if (result[1]) {
                var attr = result[1].trim();
                var arr = [attr, ""];
                if (attr.indexOf("=") > -1)
                    { arr = attr.split("="); }
                res.attributes[arr[0]] = arr[1];
                reg.lastIndex--;
            }
            else if (result[2])
                { res.attributes[result[2]] = result[3]
                    .trim()
                    .substring(1, result[3].length - 1); }
        }
    }
    return {
        type: type,
        node: res,
        voidElement: voidElement
    };
};
var stringToObj = function (html, options) {
    if (options === void 0) { options = {
        valueDiffing: true,
        caseSensitive: false
    }; }
    var result = [];
    var current;
    var level = -1;
    var arr = [];
    var inComponent = false, insideSvg = false;
    // handle text at top level
    if (html.indexOf("<") !== 0) {
        var end = html.indexOf("<");
        result.push({
            nodeName: "#text",
            data: end === -1 ? html : html.substring(0, end)
        });
    }
    html.replace(tagRE, function (tag, index) {
        var isOpen = tag.charAt(1) !== "/";
        var isComment = tag.startsWith("<!--");
        var start = index + tag.length;
        var nextChar = html.charAt(start);
        if (isComment) {
            var comment = parseTag(tag, options.caseSensitive).node;
            // if we're at root, push new base node
            if (level < 0) {
                result.push(comment);
                return "";
            }
            var parent_1 = arr[level];
            if (parent_1 && comment.nodeName) {
                if (!parent_1.node.childNodes) {
                    parent_1.node.childNodes = [];
                }
                parent_1.node.childNodes.push(comment);
            }
            return "";
        }
        if (isOpen) {
            current = parseTag(tag, options.caseSensitive || insideSvg);
            if (current.node.nodeName === "svg") {
                insideSvg = true;
            }
            level++;
            if (!current.voidElement &&
                !inComponent &&
                nextChar &&
                nextChar !== "<") {
                if (!current.node.childNodes) {
                    current.node.childNodes = [];
                }
                var data = unescape(html.slice(start, html.indexOf("<", start)));
                current.node.childNodes.push({
                    nodeName: "#text",
                    data: data
                });
                if (options.valueDiffing &&
                    current.node.nodeName === "TEXTAREA") {
                    current.node.value = data;
                }
            }
            // if we're at root, push new base node
            if (level === 0 && current.node.nodeName) {
                result.push(current.node);
            }
            var parent_2 = arr[level - 1];
            if (parent_2 && current.node.nodeName) {
                if (!parent_2.node.childNodes) {
                    parent_2.node.childNodes = [];
                }
                parent_2.node.childNodes.push(current.node);
            }
            arr[level] = current;
        }
        if (!isOpen || current.voidElement) {
            if (level > -1 &&
                (current.voidElement ||
                    (options.caseSensitive &&
                        current.node.nodeName === tag.slice(2, -1)) ||
                    (!options.caseSensitive &&
                        current.node.nodeName.toUpperCase() ===
                            tag.slice(2, -1).toUpperCase()))) {
                level--;
                // move current up a level to match the end tag
                if (level > -1) {
                    if (current.node.nodeName === "svg") {
                        insideSvg = false;
                    }
                    current = arr[level];
                }
            }
            if (nextChar !== "<" && nextChar) {
                // trailing text node
                // if we're at the root, push a base text node. otherwise add as
                // a child to the current node.
                var childNodes = level === -1 ? result : arr[level].node.childNodes || [];
                // calculate correct end of the data slice in case there's
                // no tag after the text node.
                var end = html.indexOf("<", start);
                var data = unescape(html.slice(start, end === -1 ? undefined : end));
                childNodes.push({
                    nodeName: "#text",
                    data: data
                });
            }
        }
        return "";
    });
    return result[0];
};

// ===== Create a diff =====
var DiffFinder = /** @class */ (function () {
    function DiffFinder(t1Node, t2Node, options) {
        this.options = options;
        this.t1 = (typeof Element !== "undefined" &&
            checkElementType(t1Node, "Element")
            ? nodeToObj(t1Node, this.options)
            : typeof t1Node === "string"
                ? stringToObj(t1Node, this.options)
                : JSON.parse(JSON.stringify(t1Node)));
        this.t2 = (typeof Element !== "undefined" &&
            checkElementType(t2Node, "Element")
            ? nodeToObj(t2Node, this.options)
            : typeof t2Node === "string"
                ? stringToObj(t2Node, this.options)
                : JSON.parse(JSON.stringify(t2Node)));
        this.diffcount = 0;
        this.foundAll = false;
        if (this.debug) {
            this.t1Orig =
                typeof Element !== "undefined" &&
                    checkElementType(t1Node, "Element")
                    ? nodeToObj(t1Node, this.options)
                    : typeof t1Node === "string"
                        ? stringToObj(t1Node, this.options)
                        : JSON.parse(JSON.stringify(t1Node));
            this.t2Orig =
                typeof Element !== "undefined" &&
                    checkElementType(t2Node, "Element")
                    ? nodeToObj(t2Node, this.options)
                    : typeof t2Node === "string"
                        ? stringToObj(t2Node, this.options)
                        : JSON.parse(JSON.stringify(t2Node));
        }
        this.tracker = new DiffTracker();
    }
    DiffFinder.prototype.init = function () {
        return this.findDiffs(this.t1, this.t2);
    };
    DiffFinder.prototype.findDiffs = function (t1, t2) {
        var diffs;
        do {
            if (this.options.debug) {
                this.diffcount += 1;
                if (this.diffcount > this.options.diffcap) {
                    throw new Error("surpassed diffcap:".concat(JSON.stringify(this.t1Orig), " -> ").concat(JSON.stringify(this.t2Orig)));
                }
            }
            diffs = this.findNextDiff(t1, t2, []);
            if (diffs.length === 0) {
                // Last check if the elements really are the same now.
                // If not, remove all info about being done and start over.
                // Sometimes a node can be marked as done, but the creation of subsequent diffs means that it has to be changed again.
                if (!isEqual(t1, t2)) {
                    if (this.foundAll) {
                        console.error("Could not find remaining diffs!");
                    }
                    else {
                        this.foundAll = true;
                        removeDone(t1);
                        diffs = this.findNextDiff(t1, t2, []);
                    }
                }
            }
            if (diffs.length > 0) {
                this.foundAll = false;
                this.tracker.add(diffs);
                applyVirtual(t1, diffs, this.options);
            }
        } while (diffs.length > 0);
        return this.tracker.list;
    };
    DiffFinder.prototype.findNextDiff = function (t1, t2, route) {
        var diffs;
        var fdiffs;
        if (this.options.maxDepth && route.length > this.options.maxDepth) {
            return [];
        }
        // outer differences?
        if (!t1.outerDone) {
            diffs = this.findOuterDiff(t1, t2, route);
            if (this.options.filterOuterDiff) {
                fdiffs = this.options.filterOuterDiff(t1, t2, diffs);
                if (fdiffs)
                    { diffs = fdiffs; }
            }
            if (diffs.length > 0) {
                t1.outerDone = true;
                return diffs;
            }
            else {
                t1.outerDone = true;
            }
        }
        if (Object.prototype.hasOwnProperty.call(t1, "data")) {
            // Comment or Text
            return [];
        }
        t1 = t1;
        t2 = t2;
        // inner differences?
        if (!t1.innerDone) {
            diffs = this.findInnerDiff(t1, t2, route);
            if (diffs.length > 0) {
                return diffs;
            }
            else {
                t1.innerDone = true;
            }
        }
        if (this.options.valueDiffing && !t1.valueDone) {
            // value differences?
            diffs = this.findValueDiff(t1, t2, route);
            if (diffs.length > 0) {
                t1.valueDone = true;
                return diffs;
            }
            else {
                t1.valueDone = true;
            }
        }
        // no differences
        return [];
    };
    DiffFinder.prototype.findOuterDiff = function (t1, t2, route) {
        var diffs = [];
        var attr;
        var attr1;
        var attr2;
        var attrLength;
        var pos;
        var i;
        if (t1.nodeName !== t2.nodeName) {
            if (!route.length) {
                throw new Error("Top level nodes have to be of the same kind.");
            }
            return [
                new Diff()
                    .setValue(this.options._const.action, this.options._const.replaceElement)
                    .setValue(this.options._const.oldValue, cleanNode(t1))
                    .setValue(this.options._const.newValue, cleanNode(t2))
                    .setValue(this.options._const.route, route) ];
        }
        if (route.length &&
            this.options.diffcap <
                Math.abs((t1.childNodes || []).length - (t2.childNodes || []).length)) {
            return [
                new Diff()
                    .setValue(this.options._const.action, this.options._const.replaceElement)
                    .setValue(this.options._const.oldValue, cleanNode(t1))
                    .setValue(this.options._const.newValue, cleanNode(t2))
                    .setValue(this.options._const.route, route) ];
        }
        if (Object.prototype.hasOwnProperty.call(t1, "data") &&
            t1.data !== t2.data) {
            // Comment or text node.
            if (t1.nodeName === "#text") {
                return [
                    new Diff()
                        .setValue(this.options._const.action, this.options._const.modifyTextElement)
                        .setValue(this.options._const.route, route)
                        .setValue(this.options._const.oldValue, t1.data)
                        .setValue(this.options._const.newValue, t2.data) ];
            }
            else {
                return [
                    new Diff()
                        .setValue(this.options._const.action, this.options._const.modifyComment)
                        .setValue(this.options._const.route, route)
                        .setValue(this.options._const.oldValue, t1.data)
                        .setValue(this.options._const.newValue, t2.data) ];
            }
        }
        t1 = t1;
        t2 = t2;
        attr1 = t1.attributes ? Object.keys(t1.attributes).sort() : [];
        attr2 = t2.attributes ? Object.keys(t2.attributes).sort() : [];
        attrLength = attr1.length;
        for (i = 0; i < attrLength; i++) {
            attr = attr1[i];
            pos = attr2.indexOf(attr);
            if (pos === -1) {
                diffs.push(new Diff()
                    .setValue(this.options._const.action, this.options._const.removeAttribute)
                    .setValue(this.options._const.route, route)
                    .setValue(this.options._const.name, attr)
                    .setValue(this.options._const.value, t1.attributes[attr]));
            }
            else {
                attr2.splice(pos, 1);
                if (t1.attributes[attr] !== t2.attributes[attr]) {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.modifyAttribute)
                        .setValue(this.options._const.route, route)
                        .setValue(this.options._const.name, attr)
                        .setValue(this.options._const.oldValue, t1.attributes[attr])
                        .setValue(this.options._const.newValue, t2.attributes[attr]));
                }
            }
        }
        attrLength = attr2.length;
        for (i = 0; i < attrLength; i++) {
            attr = attr2[i];
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.addAttribute)
                .setValue(this.options._const.route, route)
                .setValue(this.options._const.name, attr)
                .setValue(this.options._const.value, t2.attributes[attr]));
        }
        return diffs;
    };
    DiffFinder.prototype.findInnerDiff = function (t1, t2, route) {
        var t1ChildNodes = t1.childNodes ? t1.childNodes.slice() : [];
        var t2ChildNodes = t2.childNodes ? t2.childNodes.slice() : [];
        var last = Math.max(t1ChildNodes.length, t2ChildNodes.length);
        var childNodesLengthDifference = Math.abs(t1ChildNodes.length - t2ChildNodes.length);
        var diffs = [];
        var index = 0;
        if (!this.options.maxChildCount || last < this.options.maxChildCount) {
            var cachedSubtrees = Boolean(t1.subsets && t1.subsetsAge--);
            var subtrees = cachedSubtrees
                ? t1.subsets
                : t1.childNodes && t2.childNodes
                    ? markSubTrees(t1, t2)
                    : [];
            if (subtrees.length > 0) {
                /* One or more groups have been identified among the childnodes of t1
                 * and t2.
                 */
                diffs = this.attemptGroupRelocation(t1, t2, subtrees, route, cachedSubtrees);
                if (diffs.length > 0) {
                    return diffs;
                }
            }
        }
        /* 0 or 1 groups of similar child nodes have been found
         * for t1 and t2. 1 If there is 1, it could be a sign that the
         * contents are the same. When the number of groups is below 2,
         * t1 and t2 are made to have the same length and each of the
         * pairs of child nodes are diffed.
         */
        for (var i = 0; i < last; i += 1) {
            var e1 = t1ChildNodes[i];
            var e2 = t2ChildNodes[i];
            if (childNodesLengthDifference) {
                /* t1 and t2 have different amounts of childNodes. Add
                 * and remove as necessary to obtain the same length */
                if (e1 && !e2) {
                    if (e1.nodeName === "#text") {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.removeTextElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.value, e1.data));
                        index -= 1;
                    }
                    else {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.removeElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.element, cleanNode(e1)));
                        index -= 1;
                    }
                }
                else if (e2 && !e1) {
                    if (e2.nodeName === "#text") {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.addTextElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.value, e2.data));
                    }
                    else {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.addElement)
                            .setValue(this.options._const.route, route.concat(index))
                            .setValue(this.options._const.element, cleanNode(e2)));
                    }
                }
            }
            /* We are now guaranteed that childNodes e1 and e2 exist,
             * and that they can be diffed.
             */
            /* Diffs in child nodes should not affect the parent node,
             * so we let these diffs be submitted together with other
             * diffs.
             */
            if (e1 && e2) {
                if (!this.options.maxChildCount ||
                    last < this.options.maxChildCount) {
                    diffs = diffs.concat(this.findNextDiff(e1, e2, route.concat(index)));
                }
                else if (!isEqual(e1, e2)) {
                    if (t1ChildNodes.length > t2ChildNodes.length) {
                        if (e1.nodeName === "#text") {
                            diffs.push(new Diff()
                                .setValue(this.options._const.action, this.options._const.removeTextElement)
                                .setValue(this.options._const.route, route.concat(index))
                                .setValue(this.options._const.value, e1.data));
                        }
                        else {
                            diffs.push(new Diff()
                                .setValue(this.options._const.action, this.options._const.removeElement)
                                .setValue(this.options._const.element, cleanNode(e1))
                                .setValue(this.options._const.route, route.concat(index)));
                        }
                        t1ChildNodes.splice(i, 1);
                        i -= 1;
                        index -= 1;
                        childNodesLengthDifference -= 1;
                    }
                    else if (t1ChildNodes.length < t2ChildNodes.length) {
                        diffs = diffs.concat([
                            new Diff()
                                .setValue(this.options._const.action, this.options._const.addElement)
                                .setValue(this.options._const.element, cleanNode(e2))
                                .setValue(this.options._const.route, route.concat(index)) ]);
                        t1ChildNodes.splice(i, 0, cleanNode(e2));
                        childNodesLengthDifference -= 1;
                    }
                    else {
                        diffs = diffs.concat([
                            new Diff()
                                .setValue(this.options._const.action, this.options._const.replaceElement)
                                .setValue(this.options._const.oldValue, cleanNode(e1))
                                .setValue(this.options._const.newValue, cleanNode(e2))
                                .setValue(this.options._const.route, route.concat(index)) ]);
                    }
                }
            }
            index += 1;
        }
        t1.innerDone = true;
        return diffs;
    };
    DiffFinder.prototype.attemptGroupRelocation = function (t1, t2, subtrees, route, cachedSubtrees) {
        /* Either t1.childNodes and t2.childNodes have the same length, or
         * there are at least two groups of similar elements can be found.
         * attempts are made at equalizing t1 with t2. First all initial
         * elements with no group affiliation (gaps=true) are removed (if
         * only in t1) or added (if only in t2). Then the creation of a group
         * relocation diff is attempted.
         */
        var gapInformation = getGapInformation(t1, t2, subtrees);
        var gaps1 = gapInformation.gaps1;
        var gaps2 = gapInformation.gaps2;
        var t1ChildNodes = t1.childNodes.slice();
        var t2ChildNodes = t2.childNodes.slice();
        var shortest = Math.min(gaps1.length, gaps2.length);
        var destinationDifferent;
        var toGroup;
        var group;
        var node;
        var similarNode;
        var diffs = [];
        for (var index2 = 0, index1 = 0; index2 < shortest; index1 += 1, index2 += 1) {
            if (cachedSubtrees &&
                (gaps1[index2] === true || gaps2[index2] === true)) ;
            else if (gaps1[index1] === true) {
                node = t1ChildNodes[index1];
                if (node.nodeName === "#text") {
                    if (t2ChildNodes[index2].nodeName === "#text") {
                        if (node.data !==
                            t2ChildNodes[index2].data) {
                            // Check whether a text node with the same value follows later on.
                            var testI = index1;
                            while (t1ChildNodes.length > testI + 1 &&
                                t1ChildNodes[testI + 1].nodeName === "#text") {
                                testI += 1;
                                if (t2ChildNodes[index2]
                                    .data ===
                                    t1ChildNodes[testI]
                                        .data) {
                                    similarNode = true;
                                    break;
                                }
                            }
                            if (!similarNode) {
                                diffs.push(new Diff()
                                    .setValue(this.options._const.action, this.options._const
                                    .modifyTextElement)
                                    .setValue(this.options._const.route, route.concat(index1))
                                    .setValue(this.options._const.oldValue, node.data)
                                    .setValue(this.options._const.newValue, t2ChildNodes[index2].data));
                            }
                        }
                    }
                    else {
                        diffs.push(new Diff()
                            .setValue(this.options._const.action, this.options._const.removeTextElement)
                            .setValue(this.options._const.route, route.concat(index1))
                            .setValue(this.options._const.value, node.data));
                        gaps1.splice(index1, 1);
                        t1ChildNodes.splice(index1, 1);
                        shortest = Math.min(gaps1.length, gaps2.length);
                        index1 -= 1;
                        index2 -= 1;
                    }
                }
                else if (gaps2[index2] === true) {
                    // both gaps1[index1] and gaps2[index2]  are true.
                    // We replace one element with another.
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.replaceElement)
                        .setValue(this.options._const.oldValue, cleanNode(node))
                        .setValue(this.options._const.newValue, cleanNode(t2ChildNodes[index2]))
                        .setValue(this.options._const.route, route.concat(index1)));
                    // t1ChildNodes at position index1 is not up-to-date, but that does not matter as
                    // index1 will increase +1
                }
                else {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.removeElement)
                        .setValue(this.options._const.route, route.concat(index1))
                        .setValue(this.options._const.element, cleanNode(node)));
                    gaps1.splice(index1, 1);
                    t1ChildNodes.splice(index1, 1);
                    shortest = Math.min(gaps1.length, gaps2.length);
                    index1 -= 1;
                    index2 -= 1;
                }
            }
            else if (gaps2[index2] === true) {
                node = t2ChildNodes[index2];
                if (node.nodeName === "#text") {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.addTextElement)
                        .setValue(this.options._const.route, route.concat(index1))
                        .setValue(this.options._const.value, node.data));
                    gaps1.splice(index1, 0, true);
                    t1ChildNodes.splice(index1, 0, {
                        nodeName: "#text",
                        data: node.data
                    });
                    shortest = Math.min(gaps1.length, gaps2.length);
                    //index1 += 1
                }
                else {
                    diffs.push(new Diff()
                        .setValue(this.options._const.action, this.options._const.addElement)
                        .setValue(this.options._const.route, route.concat(index1))
                        .setValue(this.options._const.element, cleanNode(node)));
                    gaps1.splice(index1, 0, true);
                    t1ChildNodes.splice(index1, 0, cleanNode(node));
                    shortest = Math.min(gaps1.length, gaps2.length);
                    //index1 += 1
                }
            }
            else if (gaps1[index1] !== gaps2[index2]) {
                if (diffs.length > 0) {
                    return diffs;
                }
                // group relocation
                group = subtrees[gaps1[index1]];
                toGroup = Math.min(group.newValue, t1ChildNodes.length - group.length);
                if (toGroup !== group.oldValue && toGroup > -1) {
                    // Check whether destination nodes are different than originating ones.
                    destinationDifferent = false;
                    for (var j = 0; j < group.length; j += 1) {
                        if (!roughlyEqual(t1ChildNodes[toGroup + j], t1ChildNodes[group.oldValue + j], {}, false, true)) {
                            destinationDifferent = true;
                        }
                    }
                    if (destinationDifferent) {
                        return [
                            new Diff()
                                .setValue(this.options._const.action, this.options._const.relocateGroup)
                                .setValue(this.options._const.groupLength, group.length)
                                .setValue(this.options._const.from, group.oldValue)
                                .setValue(this.options._const.to, toGroup)
                                .setValue(this.options._const.route, route) ];
                    }
                }
            }
        }
        return diffs;
    };
    DiffFinder.prototype.findValueDiff = function (t1, t2, route) {
        // Differences of value. Only useful if the value/selection/checked value
        // differs from what is represented in the DOM. For example in the case
        // of filled out forms, etc.
        var diffs = [];
        if (t1.selected !== t2.selected) {
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.modifySelected)
                .setValue(this.options._const.oldValue, t1.selected)
                .setValue(this.options._const.newValue, t2.selected)
                .setValue(this.options._const.route, route));
        }
        if ((t1.value || t2.value) &&
            t1.value !== t2.value &&
            t1.nodeName !== "OPTION") {
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.modifyValue)
                .setValue(this.options._const.oldValue, t1.value || "")
                .setValue(this.options._const.newValue, t2.value || "")
                .setValue(this.options._const.route, route));
        }
        if (t1.checked !== t2.checked) {
            diffs.push(new Diff()
                .setValue(this.options._const.action, this.options._const.modifyChecked)
                .setValue(this.options._const.oldValue, t1.checked)
                .setValue(this.options._const.newValue, t2.checked)
                .setValue(this.options._const.route, route));
        }
        return diffs;
    };
    return DiffFinder;
}());

var DEFAULT_OPTIONS = {
    debug: false,
    diffcap: 10,
    maxDepth: false,
    maxChildCount: 50,
    valueDiffing: true,
    // syntax: textDiff: function (node, currentValue, expectedValue, newValue)
    textDiff: function (node, currentValue, expectedValue, newValue) {
        node.data = newValue;
        return;
    },
    // empty functions were benchmarked as running faster than both
    // `f && f()` and `if (f) { f(); }`
    preVirtualDiffApply: function () { },
    postVirtualDiffApply: function () { },
    preDiffApply: function () { },
    postDiffApply: function () { },
    filterOuterDiff: null,
    compress: false,
    _const: false,
    document: typeof window !== "undefined" && window.document
        ? window.document
        : false,
    components: []
};
var DiffDOM = /** @class */ (function () {
    function DiffDOM(options) {
        if (options === void 0) { options = {}; }
        // IE11 doesn't have Object.assign and buble doesn't translate object spreaders
        // by default, so this is the safest way of doing it currently.
        Object.entries(DEFAULT_OPTIONS).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!Object.prototype.hasOwnProperty.call(options, key)) {
                options[key] = value;
            }
        });
        if (!options._const) {
            var varNames = [
                "addAttribute",
                "modifyAttribute",
                "removeAttribute",
                "modifyTextElement",
                "relocateGroup",
                "removeElement",
                "addElement",
                "removeTextElement",
                "addTextElement",
                "replaceElement",
                "modifyValue",
                "modifyChecked",
                "modifySelected",
                "modifyComment",
                "action",
                "route",
                "oldValue",
                "newValue",
                "element",
                "group",
                "groupLength",
                "from",
                "to",
                "name",
                "value",
                "data",
                "attributes",
                "nodeName",
                "childNodes",
                "checked",
                "selected" ];
            var constNames_1 = {};
            if (options.compress) {
                varNames.forEach(function (varName, index) { return (constNames_1[varName] = index); });
            }
            else {
                varNames.forEach(function (varName) { return (constNames_1[varName] = varName); });
            }
            options._const = constNames_1;
        }
        this.options = options;
    }
    DiffDOM.prototype.apply = function (tree, diffs) {
        return applyDOM(tree, diffs, this.options);
    };
    DiffDOM.prototype.undo = function (tree, diffs) {
        return undoDOM(tree, diffs, this.options);
    };
    DiffDOM.prototype.diff = function (t1Node, t2Node) {
        var finder = new DiffFinder(t1Node, t2Node, this.options);
        return finder.init();
    };
    return DiffDOM;
}());

const headingsToVirtualHeaderRowDOM = (headings, columnSettings, columnsState, { classes, format, hiddenHeader, sortable, scrollY, type }, { noColumnWidths, unhideHeader }) => ({
    nodeName: "TR",
    childNodes: headings.map((heading, index) => {
        const column = columnSettings[index] || {
            type,
            format,
            sortable: true,
            searchable: true
        };
        if (column.hidden) {
            return;
        }
        const attributes = heading.attributes ? { ...heading.attributes } : {};
        if (column.sortable && sortable && (!scrollY.length || unhideHeader)) {
            if (column.filter) {
                attributes["data-filterable"] = "true";
            }
            else {
                attributes["data-sortable"] = "true";
            }
        }
        if (column.headerClass) {
            attributes.class = joinWithSpaces(attributes.class, column.headerClass);
        }
        if (columnsState.sort && columnsState.sort.column === index) {
            const directionClass = columnsState.sort.dir === "asc" ? classes.ascending : classes.descending;
            attributes.class = joinWithSpaces(attributes.class, directionClass);
            attributes["aria-sort"] = columnsState.sort.dir === "asc" ? "ascending" : "descending";
        }
        else if (columnsState.filters[index]) {
            attributes.class = joinWithSpaces(attributes.class, classes.filterActive);
        }
        if (columnsState.widths[index] && !noColumnWidths) {
            const style = `width: ${columnsState.widths[index]}%;`;
            attributes.style = joinWithSpaces(attributes.style, style);
        }
        if (scrollY.length && !unhideHeader) {
            const style = "padding-bottom: 0;padding-top: 0;border: 0;";
            attributes.style = joinWithSpaces(attributes.style, style);
        }
        const headerNodes = heading.type === "html" ?
            heading.data :
            [
                {
                    nodeName: "#text",
                    data: heading.text ?? String(heading.data)
                }
            ];
        return {
            nodeName: "TH",
            attributes,
            childNodes: ((hiddenHeader || scrollY.length) && !unhideHeader) ?
                [
                    {
                        nodeName: "#text",
                        data: ""
                    }
                ] :
                !column.sortable || !sortable ?
                    headerNodes :
                    [
                        {
                            nodeName: "BUTTON",
                            attributes: {
                                class: column.filter ? classes.filter : classes.sorter
                            },
                            childNodes: headerNodes
                        }
                    ]
        };
    }).filter((column) => column)
});
const dataToVirtualDOM = (tableAttributes, headings, rows, columnSettings, columnsState, rowCursor, { classes, hiddenHeader, header, footer, format, sortable, scrollY, type, rowRender, tabIndex }, { noColumnWidths, unhideHeader, renderHeader }, footers, captions) => {
    const table = {
        nodeName: "TABLE",
        attributes: { ...tableAttributes },
        childNodes: [
            {
                nodeName: "TBODY",
                childNodes: rows.map(({ row, index }) => {
                    const tr = {
                        nodeName: "TR",
                        attributes: {
                            ...row.attributes,
                            ...{
                                "data-index": String(index)
                            }
                        },
                        childNodes: row.cells.map((cell, cIndex) => {
                            const column = columnSettings[cIndex] || {
                                type,
                                format,
                                sortable: true,
                                searchable: true
                            };
                            if (column.hidden) {
                                return;
                            }
                            const td = {
                                nodeName: "TD",
                                attributes: cell.attributes ? { ...cell.attributes } : {},
                                childNodes: column.type === "html" ?
                                    cell.data :
                                    [
                                        {
                                            nodeName: "#text",
                                            data: cellToText(cell)
                                        }
                                    ]
                            };
                            if (!header && !footer && columnsState.widths[cIndex] && !noColumnWidths) {
                                td.attributes.style = joinWithSpaces(td.attributes.style, `width: ${columnsState.widths[cIndex]}%;`);
                            }
                            if (column.cellClass) {
                                td.attributes.class = joinWithSpaces(td.attributes.class, column.cellClass);
                            }
                            if (column.render) {
                                const renderedCell = column.render(cell.data, td, index, cIndex);
                                if (renderedCell) {
                                    if (typeof renderedCell === "string") {
                                        // Convenience method to make it work similarly to what it did up to version 5.
                                        const node = stringToObj(`<td>${renderedCell}</td>`);
                                        if (node.childNodes.length !== 1 || !["#text", "#comment"].includes(node.childNodes[0].nodeName)) {
                                            td.childNodes = node.childNodes;
                                        }
                                        else {
                                            td.childNodes[0].data = renderedCell;
                                        }
                                    }
                                    else {
                                        return renderedCell;
                                    }
                                }
                            }
                            return td;
                        }).filter((column) => column)
                    };
                    if (index === rowCursor) {
                        tr.attributes.class = joinWithSpaces(tr.attributes.class, classes.cursor);
                    }
                    if (rowRender) {
                        const renderedRow = rowRender(row, tr, index);
                        if (renderedRow) {
                            if (typeof renderedRow === "string") {
                                // Convenience method to make it work similarly to what it did up to version 5.
                                const node = stringToObj(`<tr>${renderedRow}</tr>`);
                                if (node.childNodes && (node.childNodes.length !== 1 || !["#text", "#comment"].includes(node.childNodes[0].nodeName))) {
                                    tr.childNodes = node.childNodes;
                                }
                                else {
                                    tr.childNodes[0].data = renderedRow;
                                }
                            }
                            else {
                                return renderedRow;
                            }
                        }
                    }
                    return tr;
                })
            }
        ]
    };
    table.attributes.class = joinWithSpaces(table.attributes.class, classes.table);
    if (header || footer || renderHeader) {
        const headerRow = headingsToVirtualHeaderRowDOM(headings, columnSettings, columnsState, { classes,
            hiddenHeader,
            sortable,
            scrollY }, { noColumnWidths,
            unhideHeader });
        if (header || renderHeader) {
            const thead = {
                nodeName: "THEAD",
                childNodes: [headerRow]
            };
            if ((scrollY.length || hiddenHeader) && !unhideHeader) {
                thead.attributes = {
                    style: "height: 0px;"
                };
            }
            table.childNodes.unshift(thead);
        }
        if (footer) {
            const footerRow = header ? structuredClone(headerRow) : headerRow;
            const tfoot = {
                nodeName: "TFOOT",
                childNodes: [footerRow]
            };
            if ((scrollY.length || hiddenHeader) && !unhideHeader) {
                tfoot.attributes = { style: "height: 0px;" };
            }
            table.childNodes.push(tfoot);
        }
    }
    footers.forEach(foot => table.childNodes.push(foot));
    captions.forEach(caption => table.childNodes.push(caption));
    if (tabIndex !== false) {
        table.attributes.tabindex = String(tabIndex);
    }
    return table;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dayjs_min = {exports: {}};

(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
} (dayjs_min));

var dayjs_minExports = dayjs_min.exports;
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var customParseFormat$1 = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return (e=+e)+(e>68?1900:2e3)};var f=function(e){return function(t){this[e]=+t;}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],u=function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},c={A:[o,function(e){this.afternoon=d(e,!1);}],a:[o,function(e){this.afternoon=d(e,!0);}],Q:[n,function(e){this.month=3*(e-1)+1;}],S:[n,function(e){this.milliseconds=100*+e;}],SS:[r,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[i,f("seconds")],ss:[i,f("seconds")],m:[i,f("minutes")],mm:[i,f("minutes")],H:[i,f("hours")],h:[i,f("hours")],HH:[i,f("hours")],hh:[i,f("hours")],D:[i,f("day")],DD:[r,f("day")],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],w:[i,f("week")],ww:[r,f("week")],M:[i,f("month")],MM:[r,f("month")],MMM:[o,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[o,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,f("year")],YY:[r,function(e){this.year=a(e);}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function l(n){var r,i;r=n,i=s&&s.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=o.length,f=0;f<a;f+=1){var h=o[f],u=c[h],d=u&&u[0],l=u&&u[1];o[f]=l?{regex:d,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else {var s=i.regex,f=i.parser,h=e.slice(r),u=s.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=!0===o[2],h=!0===o[3],u=f||h,d=o[2];h&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=l(t)(e),o=i.year,s=i.month,a=i.day,f=i.hours,h=i.minutes,u=i.seconds,d=i.milliseconds,c=i.zone,m=i.week,M=new Date,Y=a||(o||s?1:M.getDate()),p=o||M.getFullYear(),v=0;o&&!s||(v=s>0?s-1:M.getMonth());var D,w=f||0,g=h||0,y=u||0,L=d||0;return c?new Date(Date.UTC(p,v,Y,w,g,y,L+60*c.offset*1e3)):n?new Date(Date.UTC(p,v,Y,w,g,y,L)):(D=new Date(p,v,Y,w,g,y,L),m&&(D=r(D).week(m).toDate()),D)}catch(e){return new Date("")}}(t,a,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),s={};}else if(a instanceof Array)for(var c=a.length,m=1;m<=c;m+=1){o[1]=a[m-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===c&&(this.$d=new Date(""));}else i.call(this,e);};}})); 
} (customParseFormat$1));

var customParseFormatExports = customParseFormat$1.exports;
var customParseFormat = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);

dayjs.extend(customParseFormat);
/**
 * Use dayjs to parse cell contents for sorting
 */
const parseDate = (content, format) => {
    let date;
    // Converting to YYYYMMDD ensures we can accurately sort the column numerically
    if (format) {
        switch (format) {
            case "ISO_8601":
                // ISO8601 is already lexiographically sorted, so we can just sort it as a string.
                date = content;
                break;
            case "RFC_2822":
                date = dayjs(content.slice(5), "DD MMM YYYY HH:mm:ss ZZ").unix();
                break;
            case "MYSQL":
                date = dayjs(content, "YYYY-MM-DD hh:mm:ss").unix();
                break;
            case "UNIX":
                date = dayjs(content).unix();
                break;
            // User defined format using the data-format attribute or columns[n].format option
            default:
                date = dayjs(content, format, true).valueOf();
                break;
        }
    }
    return date;
};

const readDataCell = (cell, columnSettings) => {
    if (cell?.constructor === Object && Object.prototype.hasOwnProperty.call(cell, "data") && !Object.keys(cell).find(key => !(["text", "order", "data", "attributes"].includes(key)))) {
        return cell;
    }
    const cellData = {
        data: cell
    };
    switch (columnSettings.type) {
        case "string":
            if (!(typeof cell === "string")) {
                cellData.text = String(cellData.data);
                cellData.order = cellData.text;
            }
            break;
        case "date":
            if (columnSettings.format) {
                cellData.order = parseDate(String(cellData.data), columnSettings.format);
            }
            break;
        case "number":
            cellData.text = String(cellData.data);
            cellData.data = parseFloat(cellData.data);
            cellData.order = cellData.data;
            break;
        case "html": {
            const node = Array.isArray(cellData.data) ?
                { nodeName: "TD",
                    childNodes: cellData.data } : // If it is an array, we assume it is an array of nodeType
                stringToObj(`<td>${String(cellData.data)}</td>`);
            cellData.data = node.childNodes || [];
            const text = objToText(node);
            cellData.text = text;
            cellData.order = text;
            break;
        }
        case "boolean":
            if (typeof cellData.data === "string") {
                cellData.data = cellData.data.toLowerCase().trim();
            }
            cellData.data = !["false", false, null, undefined, 0].includes(cellData.data);
            cellData.order = cellData.data ? 1 : 0;
            cellData.text = String(cellData.data);
            break;
        case "other":
            cellData.text = "";
            cellData.order = 0;
            break;
        default:
            cellData.text = JSON.stringify(cellData.data);
            break;
    }
    return cellData;
};
const readDOMDataCell = (cell, columnSettings) => {
    let cellData;
    switch (columnSettings.type) {
        case "string":
            cellData = {
                data: cell.innerText
            };
            break;
        case "date": {
            const data = cell.innerText;
            cellData = {
                data,
                order: parseDate(data, columnSettings.format)
            };
            break;
        }
        case "number": {
            const data = parseFloat(cell.innerText);
            cellData = {
                data,
                order: data,
                text: cell.innerText
            };
            break;
        }
        case "boolean": {
            const data = !["false", "0", "null", "undefined"].includes(cell.innerText.toLowerCase().trim());
            cellData = {
                data,
                text: data ? "1" : "0",
                order: data ? 1 : 0
            };
            break;
        }
        default: { // "html", "other"
            const node = nodeToObj(cell, { valueDiffing: false });
            cellData = {
                data: node.childNodes || [],
                text: cell.innerText,
                order: cell.innerText
            };
            break;
        }
    }
    // Save cell attributes to reference when rendering
    cellData.attributes = namedNodeMapToObject(cell.attributes);
    return cellData;
};
const readHeaderCell = (cell) => {
    if (cell instanceof Object &&
        cell.constructor === Object &&
        cell.hasOwnProperty("data") &&
        (typeof cell.text === "string" || typeof cell.data === "string")) {
        return cell;
    }
    const cellData = {
        data: cell
    };
    if (typeof cell === "string") {
        if (cell.length) {
            const node = stringToObj(`<th>${cell}</th>`);
            if (node.childNodes && (node.childNodes.length !== 1 || node.childNodes[0].nodeName !== "#text")) {
                cellData.data = node.childNodes;
                cellData.type = "html";
                const text = objToText(node);
                cellData.text = text;
            }
        }
    }
    else if ([null, undefined].includes(cell)) {
        cellData.text = "";
    }
    else {
        cellData.text = JSON.stringify(cell);
    }
    return cellData;
};
const readDOMHeaderCell = (cell) => {
    const node = nodeToObj(cell, { valueDiffing: false });
    let cellData;
    if (node.childNodes && (node.childNodes.length !== 1 || node.childNodes[0].nodeName !== "#text")) {
        cellData = {
            data: node.childNodes,
            type: "html",
            text: objToText(node)
        };
    }
    else {
        cellData = {
            data: cell.innerText,
            type: "string"
        };
    }
    // Save header cell attributes to reference when rendering
    cellData.attributes = node.attributes;
    return cellData;
};
const readTableData = (dataOption, dom = undefined, columnSettings, defaultType, defaultFormat) => {
    const data = {
        data: [],
        headings: []
    };
    if (dataOption.headings) {
        data.headings = dataOption.headings.map((heading) => readHeaderCell(heading));
    }
    else if (dom?.tHead) {
        data.headings = Array.from(dom.tHead.querySelectorAll("th")).map((th, index) => {
            const heading = readDOMHeaderCell(th);
            if (!columnSettings[index]) {
                columnSettings[index] = {
                    type: defaultType,
                    format: defaultFormat,
                    searchable: true,
                    sortable: true
                };
            }
            const settings = columnSettings[index];
            if (th.dataset.sortable?.trim().toLowerCase() === "false" || th.dataset.sort?.trim().toLowerCase() === "false") {
                settings.sortable = false;
            }
            if (th.dataset.searchable?.trim().toLowerCase() === "false") {
                settings.searchable = false;
            }
            if (th.dataset.hidden?.trim().toLowerCase() === "true" || th.getAttribute("hidden")?.trim().toLowerCase() === "true") {
                settings.hidden = true;
            }
            if (["number", "string", "html", "date", "boolean", "other"].includes(th.dataset.type)) {
                settings.type = th.dataset.type;
                if (settings.type === "date" && th.dataset.format) {
                    settings.format = th.dataset.format;
                }
            }
            return heading;
        });
    }
    else if (dataOption.data?.length) {
        const firstRow = dataOption.data[0];
        const firstRowCells = Array.isArray(firstRow) ? firstRow : firstRow.cells;
        data.headings = firstRowCells.map((_cell) => readHeaderCell(""));
    }
    else if (dom?.tBodies.length) {
        data.headings = Array.from(dom.tBodies[0].rows[0].cells).map((_cell) => readHeaderCell(""));
    }
    for (let i = 0; i < data.headings.length; i++) {
        // Make sure that there are settings for all columns
        if (!columnSettings[i]) {
            columnSettings[i] = {
                type: defaultType,
                format: defaultFormat,
                sortable: true,
                searchable: true
            };
        }
    }
    if (dataOption.data) {
        const headings = data.headings.map((heading) => heading.data ? String(heading.data) : heading.text);
        data.data = dataOption.data.map((row) => {
            let attributes;
            let cells;
            if (Array.isArray(row)) {
                attributes = {};
                cells = row;
            }
            else if (row.hasOwnProperty("cells") && Object.keys(row).every(key => ["cells", "attributes"].includes(key))) {
                attributes = row.attributes;
                cells = row.cells;
            }
            else {
                attributes = {};
                cells = [];
                Object.entries(row).forEach(([heading, cell]) => {
                    const index = headings.indexOf(heading);
                    if (index > -1) {
                        cells[index] = cell;
                    }
                });
            }
            return {
                attributes,
                cells: cells.map((cell, index) => readDataCell(cell, columnSettings[index]))
            };
        });
    }
    else if (dom?.tBodies?.length) {
        data.data = Array.from(dom.tBodies[0].rows).map(row => ({
            attributes: namedNodeMapToObject(row.attributes),
            cells: Array.from(row.cells).map((cell, index) => {
                const cellData = cell.dataset.content ?
                    readDataCell(cell.dataset.content, columnSettings[index]) :
                    readDOMDataCell(cell, columnSettings[index]);
                if (cell.dataset.order) {
                    cellData.order = isNaN(parseFloat(cell.dataset.order)) ? cell.dataset.order : parseFloat(cell.dataset.order);
                }
                return cellData;
            })
        }));
    }
    if (data.data.length && data.data[0].cells.length !== data.headings.length) {
        throw new Error("Data heading length mismatch.");
    }
    return data;
};

/**
 * Rows API
 */
class Rows {
    cursor;
    dt;
    constructor(dt) {
        this.dt = dt;
        this.cursor = false;
    }
    setCursor(index = false) {
        if (index === this.cursor) {
            return;
        }
        const oldCursor = this.cursor;
        this.cursor = index;
        this.dt._renderTable();
        if (index !== false && this.dt.options.scrollY) {
            const cursorSelector = classNamesToSelector(this.dt.options.classes.cursor);
            const cursorDOM = this.dt.dom.querySelector(`tr${cursorSelector}`);
            if (cursorDOM) {
                cursorDOM.scrollIntoView({ block: "nearest" });
            }
        }
        this.dt.emit("datatable.cursormove", this.cursor, oldCursor);
    }
    /**
     * Add new row
     */
    add(data) {
        if (!Array.isArray(data) || data.length < 1) {
            return;
        }
        const row = {
            cells: data.map((cell, index) => {
                const columnSettings = this.dt.columns.settings[index];
                return readDataCell(cell, columnSettings);
            })
        };
        this.dt.data.data.push(row);
        this.dt.hasRows = true;
        this.dt.update(true);
    }
    /**
     * Remove row(s)
     */
    remove(select) {
        if (Array.isArray(select)) {
            this.dt.data.data = this.dt.data.data.filter((_row, index) => !select.includes(index));
            // We may have emptied the table
            if (!this.dt.data.data.length) {
                this.dt.hasRows = false;
            }
            this.dt.update(true);
        }
        else {
            return this.remove([select]);
        }
    }
    /**
     * Find index of row by searching for a value in a column
     */
    findRowIndex(columnIndex, value) {
        // returns row index of first case-insensitive string match
        // inside the td innerText at specific column index
        return this.dt.data.data.findIndex((row) => {
            const cell = row.cells[columnIndex];
            const cellText = cellToText(cell);
            return cellText.toLowerCase().includes(String(value).toLowerCase());
        });
    }
    /**
     * Find index, row, and column data by searching for a value in a column
     */
    findRow(columnIndex, value) {
        // get the row index
        const index = this.findRowIndex(columnIndex, value);
        // exit if not found
        if (index < 0) {
            return {
                index: -1,
                row: null,
                cols: []
            };
        }
        // get the row from data
        const row = this.dt.data.data[index];
        // return innerHTML of each td
        const cols = row.cells.map((cell) => cell.data);
        // return everything
        return {
            index,
            row,
            cols
        };
    }
    /**
     * Update a row with new data
     */
    updateRow(select, data) {
        const row = {
            cells: data.map((cell, index) => {
                const columnSettings = this.dt.columns.settings[index];
                return readDataCell(cell, columnSettings);
            })
        };
        this.dt.data.data.splice(select, 1, row);
        this.dt.update(true);
    }
}

const readColumnSettings = (columnOptions = [], defaultType, defaultFormat) => {
    let columns = [];
    let sort = false;
    const filters = [];
    // Check for the columns option
    columnOptions.forEach(data => {
        // convert single column selection to array
        const columnSelectors = Array.isArray(data.select) ? data.select : [data.select];
        columnSelectors.forEach((selector) => {
            if (columns[selector]) {
                if (data.type) {
                    columns[selector].type = data.type;
                }
            }
            else {
                columns[selector] = {
                    type: data.type || defaultType,
                    sortable: true,
                    searchable: true
                };
            }
            const column = columns[selector];
            if (data.render) {
                column.render = data.render;
            }
            if (data.format) {
                column.format = data.format;
            }
            else if (data.type === "date") {
                column.format = defaultFormat;
            }
            if (data.cellClass) {
                column.cellClass = data.cellClass;
            }
            if (data.headerClass) {
                column.headerClass = data.headerClass;
            }
            if (data.locale) {
                column.locale = data.locale;
            }
            if (data.sortable === false) {
                column.sortable = false;
            }
            else {
                if (data.numeric) {
                    column.numeric = data.numeric;
                }
                if (data.caseFirst) {
                    column.caseFirst = data.caseFirst;
                }
            }
            if (data.searchable === false) {
                column.searchable = false;
            }
            else {
                if (data.sensitivity) {
                    column.sensitivity = data.sensitivity;
                }
            }
            if (column.searchable || column.sortable) {
                if (typeof data.ignorePunctuation !== "undefined") {
                    column.ignorePunctuation = data.ignorePunctuation;
                }
            }
            if (data.hidden) {
                column.hidden = true;
            }
            if (data.filter) {
                column.filter = data.filter;
            }
            if (data.sortSequence) {
                column.sortSequence = data.sortSequence;
            }
            if (data.sort) {
                if (data.filter) {
                    filters[selector] = data.sort;
                }
                else {
                    // We only allow one. The last one will overwrite all other options
                    sort = { column: selector,
                        dir: data.sort };
                }
            }
            if (typeof data.searchItemSeparator !== "undefined") {
                column.searchItemSeparator = data.searchItemSeparator;
            }
        });
    });
    columns = columns.map(column => column ?
        column :
        { type: defaultType,
            format: defaultType === "date" ? defaultFormat : undefined,
            sortable: true,
            searchable: true });
    const widths = []; // Width are determined later on by measuring on screen.
    return [
        columns, { filters,
            sort,
            widths }
    ];
};

class Columns {
    dt;
    settings;
    _state;
    constructor(dt) {
        this.dt = dt;
        this.init();
    }
    init() {
        [this.settings, this._state] = readColumnSettings(this.dt.options.columns, this.dt.options.type, this.dt.options.format);
    }
    get(column) {
        if (column < 0 || column >= this.size()) {
            return null;
        }
        return { ...this.settings[column] };
    }
    size() {
        return this.settings.length;
    }
    /**
     * Swap two columns
     */
    swap(columns) {
        if (columns.length === 2) {
            // Get the current column indexes
            const cols = this.dt.data.headings.map((_node, index) => index);
            const x = columns[0];
            const y = columns[1];
            const b = cols[y];
            cols[y] = cols[x];
            cols[x] = b;
            return this.order(cols);
        }
    }
    /**
     * Reorder the columns
     */
    order(columns) {
        this.dt.data.headings = columns.map((index) => this.dt.data.headings[index]);
        this.dt.data.data.forEach((row) => (row.cells = columns.map((index) => row.cells[index])));
        this.settings = columns.map((index) => this.settings[index]);
        // Update
        this.dt.update();
    }
    /**
     * Hide columns
     */
    hide(columns) {
        if (!Array.isArray(columns)) {
            columns = [columns];
        }
        if (!columns.length) {
            return;
        }
        columns.forEach((index) => {
            if (!this.settings[index]) {
                this.settings[index] = {
                    type: "string"
                };
            }
            const column = this.settings[index];
            column.hidden = true;
        });
        this.dt.update();
    }
    /**
     * Show columns
     */
    show(columns) {
        if (!Array.isArray(columns)) {
            columns = [columns];
        }
        if (!columns.length) {
            return;
        }
        columns.forEach((index) => {
            if (!this.settings[index]) {
                this.settings[index] = {
                    type: "string",
                    sortable: true
                };
            }
            const column = this.settings[index];
            delete column.hidden;
        });
        this.dt.update();
    }
    /**
     * Check column(s) visibility
     */
    visible(columns) {
        if (columns === undefined) {
            columns = [...Array(this.dt.data.headings.length).keys()];
        }
        if (Array.isArray(columns)) {
            return columns.map(index => !this.settings[index]?.hidden);
        }
        return !this.settings[columns]?.hidden;
    }
    /**
     * Add a new column
     */
    add(data) {
        const newColumnSelector = this.dt.data.headings.length;
        this.dt.data.headings = this.dt.data.headings.concat([readHeaderCell(data.heading)]);
        this.dt.data.data.forEach((row, index) => {
            row.cells = row.cells.concat([readDataCell(data.data[index], data)]);
        });
        this.settings[newColumnSelector] = {
            type: data.type || "string",
            sortable: true,
            searchable: true
        };
        if (data.type || data.format || data.sortable || data.render || data.filter) {
            const column = this.settings[newColumnSelector];
            if (data.render) {
                column.render = data.render;
            }
            if (data.format) {
                column.format = data.format;
            }
            if (data.cellClass) {
                column.cellClass = data.cellClass;
            }
            if (data.headerClass) {
                column.headerClass = data.headerClass;
            }
            if (data.locale) {
                column.locale = data.locale;
            }
            if (data.sortable === false) {
                column.sortable = false;
            }
            else {
                if (data.numeric) {
                    column.numeric = data.numeric;
                }
                if (data.caseFirst) {
                    column.caseFirst = data.caseFirst;
                }
            }
            if (data.searchable === false) {
                column.searchable = false;
            }
            else {
                if (data.sensitivity) {
                    column.sensitivity = data.sensitivity;
                }
            }
            if (column.searchable || column.sortable) {
                if (data.ignorePunctuation) {
                    column.ignorePunctuation = data.ignorePunctuation;
                }
            }
            if (data.hidden) {
                column.hidden = true;
            }
            if (data.filter) {
                column.filter = data.filter;
            }
            if (data.sortSequence) {
                column.sortSequence = data.sortSequence;
            }
        }
        this.dt.update(true);
    }
    /**
     * Remove column(s)
     */
    remove(columns) {
        if (!Array.isArray(columns)) {
            columns = [columns];
        }
        this.dt.data.headings = this.dt.data.headings.filter((_heading, index) => !columns.includes(index));
        this.dt.data.data.forEach((row) => (row.cells = row.cells.filter((_cell, index) => !columns.includes(index))));
        this.dt.update(true);
    }
    /**
     * Filter by column
     */
    filter(column, init = false) {
        if (!this.settings[column]?.filter?.length) {
            // There is no filter to apply.
            return;
        }
        const currentFilter = this._state.filters[column];
        let newFilterState;
        if (currentFilter) {
            let returnNext = false;
            newFilterState = this.settings[column].filter.find((filter) => {
                if (returnNext) {
                    return true;
                }
                if (filter === currentFilter) {
                    returnNext = true;
                }
                return false;
            });
        }
        else {
            const filter = this.settings[column].filter;
            newFilterState = filter ? filter[0] : undefined;
        }
        if (newFilterState) {
            this._state.filters[column] = newFilterState;
        }
        else if (currentFilter) {
            this._state.filters[column] = undefined;
        }
        this.dt._currentPage = 1;
        this.dt.update();
        if (!init) {
            this.dt.emit("datatable.filter", column, newFilterState);
        }
    }
    /**
     * Sort by column
     */
    sort(index, dir = undefined, init = false) {
        const column = this.settings[index];
        if (!init) {
            this.dt.emit("datatable.sorting", index, dir);
        }
        if (!dir) {
            const currentDir = this._state.sort && this._state.sort.column === index ? this._state.sort?.dir : false;
            const sortSequence = column?.sortSequence || ["asc", "desc"];
            if (!currentDir) {
                dir = sortSequence.length ? sortSequence[0] : "asc";
            }
            else {
                const currentDirIndex = sortSequence.indexOf(currentDir);
                if (currentDirIndex === -1) {
                    dir = sortSequence[0] || "asc";
                }
                else if (currentDirIndex === sortSequence.length - 1) {
                    dir = sortSequence[0];
                }
                else {
                    dir = sortSequence[currentDirIndex + 1];
                }
            }
        }
        const collator = ["string", "html"].includes(column.type) ?
            new Intl.Collator(column.locale || this.dt.options.locale, {
                usage: "sort",
                numeric: column.numeric || this.dt.options.numeric,
                caseFirst: column.caseFirst || this.dt.options.caseFirst,
                ignorePunctuation: column.ignorePunctuation || this.dt.options.ignorePunctuation
            }) :
            false;
        this.dt.data.data.sort((row1, row2) => {
            const cell1 = row1.cells[index];
            const cell2 = row2.cells[index];
            let order1 = cell1.order ?? cellToText(cell1);
            let order2 = cell2.order ?? cellToText(cell2);
            if (dir === "desc") {
                const temp = order1;
                order1 = order2;
                order2 = temp;
            }
            if (collator && (typeof order1 !== "number") && (typeof order2 !== "number")) {
                return collator.compare(String(order1), String(order2));
            }
            if (order1 < order2) {
                return -1;
            }
            else if (order1 > order2) {
                return 1;
            }
            return 0;
        });
        this._state.sort = { column: index,
            dir };
        if (this.dt._searchQueries.length) {
            this.dt.multiSearch(this.dt._searchQueries);
            this.dt.emit("datatable.sort", index, dir);
        }
        else if (!init) {
            this.dt._currentPage = 1;
            this.dt.update();
            this.dt.emit("datatable.sort", index, dir);
        }
    }
    /**
     * Measure the actual width of cell content by rendering the entire table with all contents.
     * Note: Destroys current DOM and therefore requires subsequent dt.update()
     */
    _measureWidths() {
        const activeHeadings = this.dt.data.headings.filter((heading, index) => !this.settings[index]?.hidden);
        if ((this.dt.options.scrollY.length || this.dt.options.fixedColumns) && activeHeadings?.length) {
            this._state.widths = [];
            const renderOptions = {
                noPaging: true
            };
            // If we have headings we need only set the widths on them
            // otherwise we need a temp header and the widths need applying to all cells
            if (this.dt.options.header || this.dt.options.footer) {
                if (this.dt.options.scrollY.length) {
                    renderOptions.unhideHeader = true;
                }
                if (this.dt.headerDOM) {
                    // Remove headerDOM for accurate measurements
                    this.dt.headerDOM.parentElement.removeChild(this.dt.headerDOM);
                }
                // Reset widths
                renderOptions.noColumnWidths = true;
                this.dt._renderTable(renderOptions);
                const activeDOMHeadings = Array.from(this.dt.dom.querySelector("thead, tfoot")?.firstElementChild?.querySelectorAll("th") || []);
                let domCounter = 0;
                const absoluteColumnWidths = this.dt.data.headings.map((_heading, index) => {
                    if (this.settings[index]?.hidden) {
                        return 0;
                    }
                    const width = activeDOMHeadings[domCounter].offsetWidth;
                    domCounter += 1;
                    return width;
                });
                const totalOffsetWidth = absoluteColumnWidths.reduce((total, cellWidth) => total + cellWidth, 0);
                this._state.widths = absoluteColumnWidths.map(cellWidth => cellWidth / totalOffsetWidth * 100);
            }
            else {
                renderOptions.renderHeader = true;
                this.dt._renderTable(renderOptions);
                const activeDOMHeadings = Array.from(this.dt.dom.querySelector("thead, tfoot")?.firstElementChild?.querySelectorAll("th") || []);
                let domCounter = 0;
                const absoluteColumnWidths = this.dt.data.headings.map((_heading, index) => {
                    if (this.settings[index]?.hidden) {
                        return 0;
                    }
                    const width = activeDOMHeadings[domCounter].offsetWidth;
                    domCounter += 1;
                    return width;
                });
                const totalOffsetWidth = absoluteColumnWidths.reduce((total, cellWidth) => total + cellWidth, 0);
                this._state.widths = absoluteColumnWidths.map(cellWidth => cellWidth / totalOffsetWidth * 100);
            }
            // render table without options for measurements
            this.dt._renderTable();
        }
    }
}

// Template for custom layouts
const layoutTemplate = (options, dom) => `<div class='${options.classes.top}'>
    ${options.paging && options.perPageSelect ?
    `<div class='${options.classes.dropdown}'>
            <label>
                <select class='${options.classes.selector}' name="per-page"></select> ${options.labels.perPage}
            </label>
        </div>` :
    ""}
    ${options.searchable ?
    `<div class='${options.classes.search}'>
            <input class='${options.classes.input}' placeholder='${options.labels.placeholder}' type='search' name="search" title='${options.labels.searchTitle}'${dom.id ? ` aria-controls="${dom.id}"` : ""}>
        </div>` :
    ""}
</div>
<div class='${options.classes.container}'${options.scrollY.length ? ` style='height: ${options.scrollY}; overflow-Y: auto;'` : ""}></div>
<div class='${options.classes.bottom}'>
    ${options.paging ?
    `<div class='${options.classes.info}'></div>` :
    ""}
    <nav class='${options.classes.pagination}'></nav>
</div>`;

/**
 * Default configuration
 */
const defaultConfig$2 = {
    // for sorting
    sortable: true,
    locale: "en",
    numeric: true,
    caseFirst: "false",
    // for searching
    searchable: true,
    sensitivity: "base",
    ignorePunctuation: true,
    destroyable: true,
    searchItemSeparator: "", // If specified, splits the content of cells up using this separator before performing search.
    searchQuerySeparator: " ",
    searchAnd: false,
    // data
    data: {},
    type: "html", // Default data type for columns.
    format: "YYYY-MM-DD",
    columns: [],
    // Pagination
    paging: true,
    perPage: 10,
    perPageSelect: [5, 10, 15, 20, 25],
    nextPrev: true,
    firstLast: false,
    prevText: "‹",
    nextText: "›",
    firstText: "«",
    lastText: "»",
    ellipsisText: "…",
    truncatePager: true,
    pagerDelta: 2,
    scrollY: "",
    fixedColumns: true,
    fixedHeight: false,
    footer: false,
    header: true,
    hiddenHeader: false,
    caption: undefined,
    rowNavigation: false,
    tabIndex: false,
    // for overriding rendering
    pagerRender: false,
    rowRender: false,
    tableRender: false,
    diffDomOptions: {
        valueDiffing: false
    },
    // Customise the display text
    labels: {
        placeholder: "검색어를 입력해주세요", // The search input placeholder
        searchTitle: "Search within table", // The search input title
        perPage: "개씩 보기", // per-page dropdown label
        pageTitle: "Page {page}", // page label used in Aria-label
        noRows: "No entries found", // Message shown when there are no records to show
        noResults: "No results match your search query", // Message shown when there are no search results
        info: "전체 {rows}개 중 {start} ~ {end}" //
    },
    // Customise the layout
    template: layoutTemplate,
    // Customize the class names used by datatable for different parts
    classes: {
        active: "datatable-active",
        ascending: "datatable-ascending",
        bottom: "datatable-bottom",
        container: "datatable-container",
        cursor: "datatable-cursor",
        descending: "datatable-descending",
        disabled: "datatable-disabled",
        dropdown: "datatable-dropdown",
        ellipsis: "datatable-ellipsis",
        filter: "datatable-filter",
        filterActive: "datatable-filter-active",
        empty: "datatable-empty",
        headercontainer: "datatable-headercontainer",
        hidden: "datatable-hidden",
        info: "datatable-info",
        input: "datatable-input",
        loading: "datatable-loading",
        pagination: "datatable-pagination",
        paginationList: "datatable-pagination-list",
        paginationListItem: "datatable-pagination-list-item",
        paginationListItemLink: "datatable-pagination-list-item-link",
        search: "datatable-search",
        selector: "datatable-selector",
        sorter: "datatable-sorter",
        table: "datatable-table",
        top: "datatable-top",
        wrapper: "datatable-wrapper"
    }
};

/**
 * Pager truncation algorithm
 */
const truncate = (paginationListItems, currentPage, pagesLength, options) => {
    const pagerDelta = options.pagerDelta;
    const classes = options.classes;
    const ellipsisText = options.ellipsisText;
    const doublePagerDelta = 2 * pagerDelta;
    let previousPage = currentPage - pagerDelta;
    let nextPage = currentPage + pagerDelta;
    if (currentPage < 4 - pagerDelta + doublePagerDelta) {
        nextPage = 3 + doublePagerDelta;
    }
    else if (currentPage > pagesLength - (3 - pagerDelta + doublePagerDelta)) {
        previousPage = pagesLength - (2 + doublePagerDelta);
    }
    const paginationListItemsToModify = [];
    for (let k = 1; k <= pagesLength; k++) {
        if (1 == k || k == pagesLength || (k >= previousPage && k <= nextPage)) {
            const li = paginationListItems[k - 1];
            paginationListItemsToModify.push(li);
        }
    }
    let previousLi;
    const modifiedLis = [];
    paginationListItemsToModify.forEach(li => {
        const pageNumber = parseInt(li.childNodes[0].attributes["data-page"], 10);
        if (previousLi) {
            const previousPageNumber = parseInt(previousLi.childNodes[0].attributes["data-page"], 10);
            if (pageNumber - previousPageNumber == 2) {
                modifiedLis.push(paginationListItems[previousPageNumber]);
            }
            else if (pageNumber - previousPageNumber != 1) {
                const newLi = {
                    nodeName: "LI",
                    attributes: {
                        class: `${classes.paginationListItem} ${classes.ellipsis} ${classes.disabled}`
                    },
                    childNodes: [
                        {
                            nodeName: "BUTTON",
                            attributes: {
                                class: classes.paginationListItemLink
                            },
                            childNodes: [
                                {
                                    nodeName: "#text",
                                    data: ellipsisText
                                }
                            ]
                        }
                    ]
                };
                modifiedLis.push(newLi);
            }
        }
        modifiedLis.push(li);
        previousLi = li;
    });
    return modifiedLis;
};
const paginationListItem = (page, label, options, state = {}) => ({
    nodeName: "LI",
    attributes: {
        class: (state.active && !state.hidden) ?
            `${options.classes.paginationListItem} ${options.classes.active}` :
            state.hidden ?
                `${options.classes.paginationListItem} ${options.classes.hidden} ${options.classes.disabled}` :
                options.classes.paginationListItem
    },
    childNodes: [
        {
            nodeName: "BUTTON",
            attributes: {
                "data-page": String(page),
                class: options.classes.paginationListItemLink,
                "aria-label": options.labels.pageTitle.replace("{page}", String(page))
            },
            childNodes: [
                {
                    nodeName: "#text",
                    data: label
                }
            ]
        }
    ]
});
const createVirtualPagerDOM = (onFirstPage, onLastPage, currentPage, totalPages, options) => {
    let pagerListItems = [];
    // first button
    if (options.firstLast) {
        pagerListItems.push(paginationListItem(1, options.firstText, options));
    }
    // prev button
    if (options.nextPrev) {
        const prev = onFirstPage ? 1 : currentPage - 1;
        pagerListItems.push(paginationListItem(prev, options.prevText, options, { hidden: onFirstPage }));
    }
    let pages = [...Array(totalPages).keys()].map(index => paginationListItem(index + 1, String(index + 1), options, { active: (index === (currentPage - 1)) }));
    if (options.truncatePager) {
        // truncate the paginationListItems
        pages = truncate(pages, currentPage, totalPages, options);
    }
    // append the paginationListItems
    pagerListItems = pagerListItems.concat(pages);
    // next button
    if (options.nextPrev) {
        const next = onLastPage ? totalPages : currentPage + 1;
        pagerListItems.push(paginationListItem(next, options.nextText, options, { hidden: onLastPage }));
    }
    // last button
    if (options.firstLast) {
        pagerListItems.push(paginationListItem(totalPages, options.lastText, options));
    }
    const pager = {
        nodeName: "UL",
        attributes: {
            class: options.classes.paginationList
        },
        childNodes: pages.length > 1 ? pagerListItems : [] // Don't show single page
    };
    return pager;
};

class DataTable {
    columns;
    containerDOM;
    _currentPage;
    data;
    _dd;
    dom;
    _events;
    hasHeadings;
    hasRows;
    headerDOM;
    _initialHTML;
    initialized;
    _label;
    lastPage;
    _listeners;
    onFirstPage;
    onLastPage;
    options;
    _pagerDOMs;
    _virtualPagerDOM;
    pages;
    _rect;
    rows;
    _searchData;
    _searchQueries;
    _tableAttributes;
    _tableFooters;
    _tableCaptions;
    totalPages;
    _virtualDOM;
    _virtualHeaderDOM;
    wrapperDOM;
    constructor(table, options = {}) {
        const dom = typeof table === "string" ?
            document.querySelector(table) :
            table;
        if (dom instanceof HTMLTableElement) {
            this.dom = dom;
        }
        else {
            this.dom = document.createElement("table");
            dom.appendChild(this.dom);
        }
        const diffDomOptions = {
            ...defaultConfig$2.diffDomOptions,
            ...options.diffDomOptions
        };
        const labels = {
            ...defaultConfig$2.labels,
            ...options.labels
        };
        const classes = {
            ...defaultConfig$2.classes,
            ...options.classes
        };
        // user options
        this.options = {
            ...defaultConfig$2,
            ...options,
            diffDomOptions,
            labels,
            classes
        };
        this._initialHTML = this.options.destroyable ? dom.outerHTML : ""; // preserve in case of later destruction
        if (this.options.tabIndex) {
            this.dom.tabIndex = this.options.tabIndex;
        }
        else if (this.options.rowNavigation && this.dom.tabIndex === -1) {
            this.dom.tabIndex = 0;
        }
        this._listeners = {
            onResize: () => this._onResize()
        };
        this._dd = new DiffDOM(this.options.diffDomOptions || {});
        this.initialized = false;
        this._events = {};
        this._currentPage = 0;
        this.onFirstPage = true;
        this.hasHeadings = false;
        this.hasRows = false;
        this._searchQueries = [];
        this.init();
    }
    /**
     * Initialize the instance
     */
    init() {
        if (this.initialized || containsClass(this.dom, this.options.classes.table)) {
            return false;
        }
        this._virtualDOM = nodeToObj(this.dom, this.options.diffDomOptions || {});
        this._tableAttributes = { ...this._virtualDOM.attributes };
        this._tableFooters = this._virtualDOM.childNodes?.filter(node => node.nodeName === "TFOOT") ?? [];
        this._tableCaptions = this._virtualDOM.childNodes?.filter(node => node.nodeName === "CAPTION") ?? [];
        if (this.options.caption !== undefined) {
            this._tableCaptions.push({
                nodeName: "CAPTION",
                childNodes: [
                    {
                        nodeName: "#text",
                        data: this.options.caption
                    }
                ]
            });
        }
        this.rows = new Rows(this);
        this.columns = new Columns(this);
        this.data = readTableData(this.options.data, this.dom, this.columns.settings, this.options.type, this.options.format);
        this._render();
        setTimeout(() => {
            this.emit("datatable.init");
            this.initialized = true;
        }, 10);
    }
    /**
     * Render the instance
     */
    _render() {
        // Build
        this.wrapperDOM = createElement("div", {
            class: `${this.options.classes.wrapper} ${this.options.classes.loading}`
        });
        this.wrapperDOM.innerHTML = this.options.template(this.options, this.dom);
        const selectorClassSelector = classNamesToSelector(this.options.classes.selector);
        const selector = this.wrapperDOM.querySelector(`select${selectorClassSelector}`);
        // Per Page Select
        if (selector && this.options.paging && this.options.perPageSelect) {
            // Create the options
            this.options.perPageSelect.forEach((choice) => {
                const [lab, val] = Array.isArray(choice) ? [choice[0], choice[1]] : [String(choice), choice];
                const selected = val === this.options.perPage;
                const option = new Option(lab, String(val), selected, selected);
                selector.appendChild(option);
            });
        }
        else if (selector) {
            selector.parentElement.removeChild(selector);
        }
        const containerSelector = classNamesToSelector(this.options.classes.container);
        this.containerDOM = this.wrapperDOM.querySelector(containerSelector);
        this._pagerDOMs = [];
        const paginationSelector = classNamesToSelector(this.options.classes.pagination);
        Array.from(this.wrapperDOM.querySelectorAll(paginationSelector)).forEach(el => {
            if (!(el instanceof HTMLElement)) {
                return;
            }
            // We remove the inner part of the pager containers to ensure they are all the same.
            el.innerHTML = `<ul class="${this.options.classes.paginationList}"></ul>`;
            this._pagerDOMs.push(el.firstElementChild);
        });
        this._virtualPagerDOM = {
            nodeName: "UL",
            attributes: {
                class: this.options.classes.paginationList
            }
        };
        const infoSelector = classNamesToSelector(this.options.classes.info);
        this._label = this.wrapperDOM.querySelector(infoSelector);
        // Insert in to DOM tree
        this.dom.parentElement.replaceChild(this.wrapperDOM, this.dom);
        this.containerDOM.appendChild(this.dom);
        // Store the table dimensions
        this._rect = this.dom.getBoundingClientRect();
        // Fix height
        this._fixHeight();
        // Class names
        if (!this.options.header) {
            this.wrapperDOM.classList.add("no-header");
        }
        if (!this.options.footer) {
            this.wrapperDOM.classList.add("no-footer");
        }
        if (this.options.sortable) {
            this.wrapperDOM.classList.add("sortable");
        }
        if (this.options.searchable) {
            this.wrapperDOM.classList.add("searchable");
        }
        if (this.options.fixedHeight) {
            this.wrapperDOM.classList.add("fixed-height");
        }
        if (this.options.fixedColumns) {
            this.wrapperDOM.classList.add("fixed-columns");
        }
        this._bindEvents();
        if (this.columns._state.sort) {
            this.columns.sort(this.columns._state.sort.column, this.columns._state.sort.dir, true);
        }
        this.update(true);
    }
    _renderTable(renderOptions = {}) {
        let rows;
        const isPaged = (this.options.paging || this._searchQueries.length || this.columns._state.filters.length) && this._currentPage && this.pages.length && !renderOptions.noPaging;
        if (isPaged) {
            rows = this.pages[this._currentPage - 1];
        }
        else {
            rows = this.data.data.map((row, index) => ({
                row,
                index
            }));
        }
        let newVirtualDOM = dataToVirtualDOM(this._tableAttributes, this.data.headings, rows, this.columns.settings, this.columns._state, this.rows.cursor, this.options, renderOptions, this._tableFooters, this._tableCaptions);
        if (this.options.tableRender) {
            const renderedTableVirtualDOM = this.options.tableRender(this.data, newVirtualDOM, "main");
            if (renderedTableVirtualDOM) {
                newVirtualDOM = renderedTableVirtualDOM;
            }
        }
        const diff = this._dd.diff(this._virtualDOM, newVirtualDOM);
        this._dd.apply(this.dom, diff);
        this._virtualDOM = newVirtualDOM;
    }
    /**
     * Render the page
     * @return {Void}
     */
    _renderPage(lastRowCursor = false) {
        if (this.hasRows && this.totalPages) {
            if (this._currentPage > this.totalPages) {
                this._currentPage = 1;
            }
            // Use a fragment to limit touching the DOM
            this._renderTable();
            this.onFirstPage = this._currentPage === 1;
            this.onLastPage = this._currentPage === this.lastPage;
        }
        else {
            this.setMessage(this.options.labels.noRows);
        }
        // Update the info
        let current = 0;
        let f = 0;
        let t = 0;
        let items;
        if (this.totalPages) {
            current = this._currentPage - 1;
            f = current * this.options.perPage;
            t = f + this.pages[current].length;
            f = f + 1;
            items = this._searchQueries.length ? this._searchData.length : this.data.data.length;
        }
        if (this._label && this.options.labels.info.length) {
            // CUSTOM LABELS
            const string = this.options.labels.info
                .replace("{start}", String(f))
                .replace("{end}", String(t))
                .replace("{page}", String(this._currentPage))
                .replace("{pages}", String(this.totalPages))
                .replace("{rows}", String(items));
            this._label.innerHTML = items ? string : "";
        }
        if (this._currentPage == 1) {
            this._fixHeight();
        }
        if (this.options.rowNavigation && this._currentPage) {
            if (!this.rows.cursor || !this.pages[this._currentPage - 1].find(row => row.index === this.rows.cursor)) {
                const rows = this.pages[this._currentPage - 1];
                if (rows.length) {
                    if (lastRowCursor) {
                        this.rows.setCursor(rows[rows.length - 1].index);
                    }
                    else {
                        this.rows.setCursor(rows[0].index);
                    }
                }
            }
        }
    }
    /** Render the pager(s)
     *
     */
    _renderPagers() {
        if (!this.options.paging) {
            return;
        }
        let newPagerVirtualDOM = createVirtualPagerDOM(this.onFirstPage, this.onLastPage, this._currentPage, this.totalPages, this.options);
        if (this.options.pagerRender) {
            const renderedPagerVirtualDOM = this.options.pagerRender([this.onFirstPage, this.onLastPage, this._currentPage, this.totalPages], newPagerVirtualDOM);
            if (renderedPagerVirtualDOM) {
                newPagerVirtualDOM = renderedPagerVirtualDOM;
            }
        }
        const diffs = this._dd.diff(this._virtualPagerDOM, newPagerVirtualDOM);
        // We may have more than one pager
        this._pagerDOMs.forEach((pagerDOM) => {
            this._dd.apply(pagerDOM, diffs);
        });
        this._virtualPagerDOM = newPagerVirtualDOM;
    }
    // Render header that is not in the same table element as the remainder
    // of the table. Used for tables with scrollY.
    _renderSeparateHeader() {
        const container = this.dom.parentElement;
        if (!this.headerDOM) {
            this.headerDOM = document.createElement("div");
            this._virtualHeaderDOM = {
                nodeName: "DIV"
            };
        }
        container.parentElement.insertBefore(this.headerDOM, container);
        let tableVirtualDOM = {
            nodeName: "TABLE",
            attributes: this._tableAttributes,
            childNodes: [
                {
                    nodeName: "THEAD",
                    childNodes: [
                        headingsToVirtualHeaderRowDOM(this.data.headings, this.columns.settings, this.columns._state, this.options, { unhideHeader: true })
                    ]
                }
            ]
        };
        tableVirtualDOM.attributes.class = joinWithSpaces(tableVirtualDOM.attributes.class, this.options.classes.table);
        if (this.options.tableRender) {
            const renderedTableVirtualDOM = this.options.tableRender(this.data, tableVirtualDOM, "header");
            if (renderedTableVirtualDOM) {
                tableVirtualDOM = renderedTableVirtualDOM;
            }
        }
        const newVirtualHeaderDOM = {
            nodeName: "DIV",
            attributes: {
                class: this.options.classes.headercontainer
            },
            childNodes: [tableVirtualDOM]
        };
        const diff = this._dd.diff(this._virtualHeaderDOM, newVirtualHeaderDOM);
        this._dd.apply(this.headerDOM, diff);
        this._virtualHeaderDOM = newVirtualHeaderDOM;
        // Compensate for scrollbars
        const paddingRight = this.headerDOM.firstElementChild.clientWidth - this.dom.clientWidth;
        if (paddingRight) {
            const paddedVirtualHeaderDOM = structuredClone(this._virtualHeaderDOM);
            paddedVirtualHeaderDOM.attributes.style = `padding-right: ${paddingRight}px;`;
            const diff = this._dd.diff(this._virtualHeaderDOM, paddedVirtualHeaderDOM);
            this._dd.apply(this.headerDOM, diff);
            this._virtualHeaderDOM = paddedVirtualHeaderDOM;
        }
        if (container.scrollHeight > container.clientHeight) {
            // scrollbars on one page means scrollbars on all pages.
            container.style.overflowY = "scroll";
        }
    }
    /**
     * Bind event listeners
     * @return {[type]} [description]
     */
    _bindEvents() {
        // Per page selector
        if (this.options.perPageSelect) {
            const selectorClassSelector = classNamesToSelector(this.options.classes.selector);
            const selector = this.wrapperDOM.querySelector(selectorClassSelector);
            if (selector && selector instanceof HTMLSelectElement) {
                // Change per page
                selector.addEventListener("change", () => {
                    this.emit("datatable.perpage:before", this.options.perPage);
                    this.options.perPage = parseInt(selector.value, 10);
                    this.update();
                    this._fixHeight();
                    this.emit("datatable.perpage", this.options.perPage);
                }, false);
            }
        }
        // Search input
        if (this.options.searchable) {
            this.wrapperDOM.addEventListener("input", (event) => {
                const inputSelector = classNamesToSelector(this.options.classes.input);
                const target = event.target;
                if (!(target instanceof HTMLInputElement) || !target.matches(inputSelector)) {
                    return;
                }
                event.preventDefault();
                const searches = [];
                const searchFields = Array.from(this.wrapperDOM.querySelectorAll(inputSelector));
                searchFields.filter(el => el.value.length).forEach(el => {
                    const andSearch = el.dataset.and || this.options.searchAnd;
                    const querySeparator = el.dataset.querySeparator || this.options.searchQuerySeparator;
                    const terms = querySeparator ? el.value.split(this.options.searchQuerySeparator) : [el.value];
                    if (andSearch) {
                        terms.forEach(term => {
                            if (el.dataset.columns) {
                                searches.push({
                                    terms: [term],
                                    columns: JSON.parse(el.dataset.columns)
                                });
                            }
                            else {
                                searches.push({ terms: [term],
                                    columns: undefined });
                            }
                        });
                    }
                    else {
                        if (el.dataset.columns) {
                            searches.push({
                                terms,
                                columns: JSON.parse(el.dataset.columns)
                            });
                        }
                        else {
                            searches.push({ terms,
                                columns: undefined });
                        }
                    }
                });
                if (searches.length === 1 && searches[0].terms.length === 1) {
                    const search = searches[0];
                    this.search(search.terms[0], search.columns);
                }
                else {
                    this.multiSearch(searches);
                }
            });
        }
        // Pager(s) / sorting
        this.wrapperDOM.addEventListener("click", (event) => {
            const target = event.target;
            const hyperlink = target.closest("a, button");
            if (!hyperlink) {
                return;
            }
            if (hyperlink.hasAttribute("data-page")) {
                this.page(parseInt(hyperlink.getAttribute("data-page"), 10));
                event.preventDefault();
            }
            else if (containsClass(hyperlink, this.options.classes.sorter)) {
                const visibleIndex = Array.from(hyperlink.parentElement.parentElement.children).indexOf(hyperlink.parentElement);
                const columnIndex = visibleToColumnIndex(visibleIndex, this.columns.settings);
                this.columns.sort(columnIndex);
                event.preventDefault();
            }
            else if (containsClass(hyperlink, this.options.classes.filter)) {
                const visibleIndex = Array.from(hyperlink.parentElement.parentElement.children).indexOf(hyperlink.parentElement);
                const columnIndex = visibleToColumnIndex(visibleIndex, this.columns.settings);
                this.columns.filter(columnIndex);
                event.preventDefault();
            }
        }, false);
        if (this.options.rowNavigation) {
            this.dom.addEventListener("keydown", (event) => {
                if (event.key === "ArrowUp") {
                    event.preventDefault();
                    event.stopPropagation();
                    let lastRow;
                    this.pages[this._currentPage - 1].find((row) => {
                        if (row.index === this.rows.cursor) {
                            return true;
                        }
                        lastRow = row;
                        return false;
                    });
                    if (lastRow) {
                        this.rows.setCursor(lastRow.index);
                    }
                    else if (!this.onFirstPage) {
                        this.page(this._currentPage - 1, true);
                    }
                }
                else if (event.key === "ArrowDown") {
                    event.preventDefault();
                    event.stopPropagation();
                    let foundRow;
                    const nextRow = this.pages[this._currentPage - 1].find((row) => {
                        if (foundRow) {
                            return true;
                        }
                        if (row.index === this.rows.cursor) {
                            foundRow = true;
                        }
                        return false;
                    });
                    if (nextRow) {
                        this.rows.setCursor(nextRow.index);
                    }
                    else if (!this.onLastPage) {
                        this.page(this._currentPage + 1);
                    }
                }
                else if (["Enter", " "].includes(event.key)) {
                    this.emit("datatable.selectrow", this.rows.cursor, event);
                }
            });
            this.dom.addEventListener("mousedown", (event) => {
                const target = event.target;
                if (!(target instanceof Element)) {
                    return;
                }
                if (this.dom.matches(":focus")) {
                    const row = Array.from(this.dom.querySelectorAll("tbody > tr")).find(row => row.contains(target));
                    if (row && row instanceof HTMLElement) {
                        this.emit("datatable.selectrow", parseInt(row.dataset.index, 10), event);
                    }
                }
            });
        }
        else {
            this.dom.addEventListener("mousedown", (event) => {
                const target = event.target;
                if (!(target instanceof Element)) {
                    return;
                }
                const row = Array.from(this.dom.querySelectorAll("tbody > tr")).find(row => row.contains(target));
                if (row && row instanceof HTMLElement) {
                    this.emit("datatable.selectrow", parseInt(row.dataset.index, 10), event);
                }
            });
        }
        window.addEventListener("resize", this._listeners.onResize);
    }
    /**
     * execute on resize
     */
    _onResize() {
        this._rect = this.containerDOM.getBoundingClientRect();
        if (!this._rect.width) {
            // No longer shown, likely no longer part of DOM. Give up.
            return;
        }
        this.update(true);
    }
    /**
     * Destroy the instance
     * @return {void}
     */
    destroy() {
        if (!this.options.destroyable) {
            return;
        }
        if (this.wrapperDOM) {
            const parentElement = this.wrapperDOM.parentElement;
            if (parentElement) {
                // Restore the initial HTML
                const oldDOM = createElement("div");
                oldDOM.innerHTML = this._initialHTML;
                const oldTable = oldDOM.firstElementChild;
                parentElement.replaceChild(oldTable, this.wrapperDOM);
                this.dom = oldTable;
            }
            else {
                // Remove the className
                this.options.classes.table?.split(" ").forEach(className => this.wrapperDOM.classList.remove(className));
            }
        }
        window.removeEventListener("resize", this._listeners.onResize);
        this.initialized = false;
    }
    /**
     * Update the instance
     * @return {Void}
     */
    update(measureWidths = false) {
        this.emit("datatable.update:before");
        if (measureWidths) {
            this.columns._measureWidths();
            this.hasRows = Boolean(this.data.data.length);
            this.hasHeadings = Boolean(this.data.headings.length);
        }
        this.options.classes.empty?.split(" ").forEach(className => this.wrapperDOM.classList.remove(className));
        this._paginate();
        this._renderPage();
        this._renderPagers();
        if (this.options.scrollY.length) {
            this._renderSeparateHeader();
        }
        this.emit("datatable.update");
    }
    _paginate() {
        let rows = this.data.data.map((row, index) => ({
            row,
            index
        }));
        if (this._searchQueries.length) {
            rows = [];
            this._searchData.forEach((index) => rows.push({ index,
                row: this.data.data[index] }));
        }
        if (this.columns._state.filters.length) {
            this.columns._state.filters.forEach((filterState, column) => {
                if (!filterState) {
                    return;
                }
                rows = rows.filter((row) => {
                    const cell = row.row.cells[column];
                    return typeof filterState === "function" ? filterState(cell.data) : cellToText(cell) === filterState;
                });
            });
        }
        if (this.options.paging && this.options.perPage > 0) {
            // Check for hidden columns
            this.pages = rows
                .map((_row, i) => i % this.options.perPage === 0 ? rows.slice(i, i + this.options.perPage) : null)
                .filter((page) => page);
        }
        else {
            this.pages = [rows];
        }
        this.totalPages = this.lastPage = this.pages.length;
        if (!this._currentPage) {
            this._currentPage = 1;
        }
        return this.totalPages;
    }
    /**
     * Fix the container height
     */
    _fixHeight() {
        if (this.options.fixedHeight) {
            this.containerDOM.style.height = null;
            this._rect = this.containerDOM.getBoundingClientRect();
            this.containerDOM.style.height = `${this._rect.height}px`;
        }
    }
    /**
     * Perform a simple search of the data set
     */
    search(term, columns = undefined) {
        this.emit("datatable.search:before", term, this._searchData);
        if (!term.length) {
            this._currentPage = 1;
            this._searchQueries = [];
            this._searchData = [];
            this.update();
            this.emit("datatable.search", "", []);
            this.wrapperDOM.classList.remove("search-results");
            return false;
        }
        this.multiSearch([
            { terms: [term],
                columns: columns ? columns : undefined }
        ]);
        this.emit("datatable.search", term, this._searchData);
    }
    /**
     * Perform a search of the data set seraching for up to multiple strings in various columns
     */
    multiSearch(rawQueries) {
        if (!this.hasRows)
            return false;
        this._currentPage = 1;
        this._searchData = [];
        // Remove empty queries
        const queries = rawQueries.map(query => ({
            columns: query.columns,
            terms: query.terms.map(term => term.trim()).filter(term => term)
        })).filter(query => query.terms.length);
        this.emit("datatable.multisearch:before", queries, this._searchData);
        this._searchQueries = queries;
        if (!queries.length) {
            this.update();
            this.emit("datatable.multisearch", queries, this._searchData);
            this.wrapperDOM.classList.remove("search-results");
            return false;
        }
        const queryWords = queries.map(query => this.columns.settings.map((column, index) => {
            if (column.hidden || !column.searchable || (query.columns && !query.columns.includes(index))) {
                return false;
            }
            let columnQueries = query.terms;
            const sensitivity = column.sensitivity || this.options.sensitivity;
            if (["base", "accent"].includes(sensitivity)) {
                columnQueries = columnQueries.map(query => query.toLowerCase());
            }
            if (["base", "case"].includes(sensitivity)) {
                columnQueries = columnQueries.map(query => query.normalize("NFD").replace(/\p{Diacritic}/gu, ""));
            }
            const ignorePunctuation = column.ignorePunctuation ?? this.options.ignorePunctuation;
            if (ignorePunctuation) {
                columnQueries = columnQueries.map(query => query.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, ""));
            }
            return columnQueries;
        }));
        this.data.data.forEach((row, idx) => {
            const searchRow = row.cells.map((cell, i) => {
                let content = cellToText(cell).trim();
                const column = this.columns.settings[i];
                if (content.length) {
                    const sensitivity = column.sensitivity || this.options.sensitivity;
                    if (["base", "accent"].includes(sensitivity)) {
                        content = content.toLowerCase();
                    }
                    if (["base", "case"].includes(sensitivity)) {
                        content = content.normalize("NFD").replace(/\p{Diacritic}/gu, "");
                    }
                    const ignorePunctuation = column.ignorePunctuation ?? this.options.ignorePunctuation;
                    if (ignorePunctuation) {
                        content = content.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "");
                    }
                }
                const searchItemSeparator = column.searchItemSeparator || this.options.searchItemSeparator;
                return searchItemSeparator ? content.split(searchItemSeparator) : [content];
            });
            if (queryWords.every(queries => queries.find((query, index) => query ?
                query.find(queryWord => searchRow[index].find(searchItem => searchItem.includes(queryWord))) :
                false))) {
                this._searchData.push(idx);
            }
        });
        this.wrapperDOM.classList.add("search-results");
        if (this._searchData.length) {
            this.update();
        }
        else {
            this.wrapperDOM.classList.remove("search-results");
            this.setMessage(this.options.labels.noResults);
        }
        this.emit("datatable.multisearch", queries, this._searchData);
    }
    /**
     * Change page
     */
    page(page, lastRowCursor = false) {
        this.emit("datatable.page:before", page);
        // We don't want to load the current page again.
        if (page === this._currentPage) {
            return false;
        }
        if (!isNaN(page)) {
            this._currentPage = page;
        }
        if (page > this.pages.length || page < 0) {
            return false;
        }
        this._renderPage(lastRowCursor);
        this._renderPagers();
        this.emit("datatable.page", page);
    }
    /**
     * Add new row data
     */
    insert(data) {
        let rows = [];
        if (Array.isArray(data)) {
            const headings = this.data.headings.map((heading) => heading.data ? String(heading.data) : heading.text);
            data.forEach((row, rIndex) => {
                const r = [];
                Object.entries(row).forEach(([heading, cell]) => {
                    const index = headings.indexOf(heading);
                    if (index > -1) {
                        r[index] = readDataCell(cell, this.columns.settings[index]);
                    }
                    else if (!this.hasHeadings && !this.hasRows && rIndex === 0) {
                        r[headings.length] = readDataCell(cell, this.columns.settings[headings.length]);
                        headings.push(heading);
                        this.data.headings.push(readHeaderCell(heading));
                    }
                });
                rows.push({
                    cells: r
                });
            });
        }
        else if (isObject(data)) {
            if (data.headings && !this.hasHeadings && !this.hasRows) {
                this.data = readTableData(data, undefined, this.columns.settings, this.options.type, this.options.format);
            }
            else if (data.data && Array.isArray(data.data)) {
                rows = data.data.map(row => {
                    let attributes;
                    let cells;
                    if (Array.isArray(row)) {
                        attributes = {};
                        cells = row;
                    }
                    else {
                        attributes = row.attributes;
                        cells = row.cells;
                    }
                    return {
                        attributes,
                        cells: cells.map((cell, index) => readDataCell(cell, this.columns.settings[index]))
                    };
                });
            }
        }
        if (rows.length) {
            rows.forEach((row) => this.data.data.push(row));
        }
        this.hasHeadings = Boolean(this.data.headings.length);
        if (this.columns._state.sort) {
            this.columns.sort(this.columns._state.sort.column, this.columns._state.sort.dir, true);
        }
        this.update(true);
    }
    /**
     * Refresh the instance
     */
    refresh() {
        this.emit("datatable.refresh:before");
        if (this.options.searchable) {
            const inputSelector = classNamesToSelector(this.options.classes.input);
            const inputs = Array.from(this.wrapperDOM.querySelectorAll(inputSelector));
            inputs.forEach(el => (el.value = ""));
            this._searchQueries = [];
        }
        this._currentPage = 1;
        this.onFirstPage = true;
        this.update(true);
        this.emit("datatable.refresh");
    }
    /**
     * Print the table
     */
    print() {
        const tableDOM = createElement("table");
        const tableVirtualDOM = { nodeName: "TABLE" };
        let newTableVirtualDOM = dataToVirtualDOM(this._tableAttributes, this.data.headings, this.data.data.map((row, index) => ({
            row,
            index
        })), this.columns.settings, this.columns._state, false, // No row cursor
        this.options, {
            noColumnWidths: true,
            unhideHeader: true
        }, this._tableFooters, this._tableCaptions);
        if (this.options.tableRender) {
            const renderedTableVirtualDOM = this.options.tableRender(this.data, newTableVirtualDOM, "print");
            if (renderedTableVirtualDOM) {
                newTableVirtualDOM = renderedTableVirtualDOM;
            }
        }
        const diff = this._dd.diff(tableVirtualDOM, newTableVirtualDOM);
        this._dd.apply(tableDOM, diff);
        // Open new window
        const w = window.open();
        // Append the table to the body
        w.document.body.appendChild(tableDOM);
        // Print
        w.print();
    }
    /**
     * Show a message in the table
     */
    setMessage(message) {
        const activeHeadings = this.data.headings.filter((heading, index) => !this.columns.settings[index]?.hidden);
        const colspan = activeHeadings.length || 1;
        this.options.classes.empty?.split(" ").forEach(className => this.wrapperDOM.classList.add(className));
        if (this._label) {
            this._label.innerHTML = "";
        }
        this.totalPages = 0;
        this._renderPagers();
        let newVirtualDOM = {
            nodeName: "TABLE",
            attributes: this._tableAttributes,
            childNodes: [
                {
                    nodeName: "THEAD",
                    childNodes: [
                        headingsToVirtualHeaderRowDOM(this.data.headings, this.columns.settings, this.columns._state, this.options, {})
                    ]
                },
                {
                    nodeName: "TBODY",
                    childNodes: [
                        {
                            nodeName: "TR",
                            childNodes: [
                                {
                                    nodeName: "TD",
                                    attributes: {
                                        class: this.options.classes.empty,
                                        colspan: String(colspan)
                                    },
                                    childNodes: [
                                        {
                                            nodeName: "#text",
                                            data: message
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        this._tableFooters.forEach(footer => newVirtualDOM.childNodes.push(footer));
        this._tableCaptions.forEach(caption => newVirtualDOM.childNodes.push(caption));
        newVirtualDOM.attributes.class = joinWithSpaces(newVirtualDOM.attributes.class, this.options.classes.table);
        if (this.options.tableRender) {
            const renderedTableVirtualDOM = this.options.tableRender(this.data, newVirtualDOM, "message");
            if (renderedTableVirtualDOM) {
                newVirtualDOM = renderedTableVirtualDOM;
            }
        }
        const diff = this._dd.diff(this._virtualDOM, newVirtualDOM);
        this._dd.apply(this.dom, diff);
        this._virtualDOM = newVirtualDOM;
    }
    /**
     * Add custom event listener
     */
    on(event, callback) {
        this._events[event] = this._events[event] || [];
        this._events[event].push(callback);
    }
    /**
     * Remove custom event listener
     */
    off(event, callback) {
        if (event in this._events === false)
            return;
        this._events[event].splice(this._events[event].indexOf(callback), 1);
    }
    /**
     * Fire custom event
     */
    emit(event, ...args) {
        if (event in this._events === false)
            return;
        for (let i = 0; i < this._events[event].length; i++) {
            this._events[event][i](...args);
        }
    }
}

/**
 * Convert CSV data to fit the format used in the table.
 */
const convertCSV = function (userOptions) {
    let obj;
    const defaults = {
        lineDelimiter: "\n",
        columnDelimiter: ",",
        removeDoubleQuotes: false
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    const options = {
        ...defaults,
        ...userOptions
    };
    if (options.data.length) {
        // Import CSV
        obj = {
            data: []
        };
        // Split the string into rows
        const rows = options.data.split(options.lineDelimiter);
        if (rows.length) {
            if (options.headings) {
                obj.headings = rows[0].split(options.columnDelimiter);
                if (options.removeDoubleQuotes) {
                    obj.headings = obj.headings.map((e) => e.trim().replace(/(^"|"$)/g, ""));
                }
                rows.shift();
            }
            rows.forEach((row, i) => {
                obj.data[i] = [];
                // Split the rows into values
                const values = row.split(options.columnDelimiter);
                if (values.length) {
                    values.forEach((value) => {
                        if (options.removeDoubleQuotes) {
                            value = value.trim().replace(/(^"|"$)/g, "");
                        }
                        obj.data[i].push(value);
                    });
                }
            });
        }
        if (obj) {
            return obj;
        }
    }
    return false;
};

/**
 * Convert JSON data to fit the format used in the table.
 */
const convertJSON = function (userOptions) {
    let obj;
    const defaults = {
        data: ""
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    const options = {
        ...defaults,
        ...userOptions
    };
    if (options.data.length || isObject(options.data)) {
        // Import JSON
        const json = isJson(options.data) ? JSON.parse(options.data) : false;
        // Valid JSON string
        if (json) {
            obj = {
                headings: [],
                data: []
            };
            json.forEach((data, i) => {
                obj.data[i] = [];
                Object.entries(data).forEach(([column, value]) => {
                    if (!obj.headings.includes(column)) {
                        obj.headings.push(column);
                    }
                    obj.data[i].push(value);
                });
            });
        }
        else {
            console.warn("That's not valid JSON!");
        }
        if (obj) {
            return obj;
        }
    }
    return false;
};

const exportCSV = function (dt, userOptions = {}) {
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    const defaults = {
        download: true,
        skipColumn: [],
        lineDelimiter: "\n",
        columnDelimiter: ","
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    const options = {
        ...defaults,
        ...userOptions
    };
    const columnShown = (index) => !options.skipColumn.includes(index) && !dt.columns.settings[index]?.hidden;
    const headers = dt.data.headings.filter((_heading, index) => columnShown(index)).map((header) => header.text ?? header.data);
    // Selection or whole table
    let selectedRows;
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            selectedRows = [];
            for (let i = 0; i < options.selection.length; i++) {
                selectedRows = selectedRows.concat(dt.pages[options.selection[i] - 1].map(row => row.row));
            }
        }
        else {
            selectedRows = dt.pages[options.selection - 1].map(row => row.row);
        }
    }
    else {
        selectedRows = dt.data.data;
    }
    let rows = [];
    // Include headings
    rows[0] = headers;
    rows = rows.concat(selectedRows.map((row) => {
        const shownCells = row.cells.filter((_cell, index) => columnShown(index));
        return shownCells.map((cell) => cellToText(cell));
    }));
    // Only proceed if we have data
    if (rows.length) {
        let str = "";
        rows.forEach(row => {
            row.forEach((cell) => {
                if (typeof cell === "string") {
                    cell = cell.trim();
                    cell = cell.replace(/\s{2,}/g, " ");
                    cell = cell.replace(/\n/g, "  ");
                    cell = cell.replace(/"/g, "\"\"");
                    //have to manually encode "#" as encodeURI leaves it as is.
                    cell = cell.replace(/#/g, "%23");
                    if (cell.includes(",")) {
                        cell = `"${cell}"`;
                    }
                }
                str += cell + options.columnDelimiter;
            });
            // Remove trailing column delimiter
            str = str.trim().substring(0, str.length - 1);
            // Apply line delimiter
            str += options.lineDelimiter;
        });
        // Remove trailing line delimiter
        str = str.trim().substring(0, str.length - 1);
        // Download
        if (options.download) {
            // Create a link to trigger the download
            const link = document.createElement("a");
            link.href = encodeURI(`data:text/csv;charset=utf-8,${str}`);
            link.download = `${options.filename || "datatable_export"}.csv`;
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
        }
        return str;
    }
    return false;
};

const exportJSON = function (dt, userOptions = {}) {
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    const defaults = {
        download: true,
        skipColumn: [],
        replacer: null,
        space: 4
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    const options = {
        ...defaults,
        ...userOptions
    };
    const columnShown = (index) => !options.skipColumn.includes(index) && !dt.columns.settings[index]?.hidden;
    // Selection or whole table
    let selectedRows;
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            selectedRows = [];
            for (let i = 0; i < options.selection.length; i++) {
                selectedRows = selectedRows.concat(dt.pages[options.selection[i] - 1].map(row => row.row));
            }
        }
        else {
            selectedRows = dt.pages[options.selection - 1].map(row => row.row);
        }
    }
    else {
        selectedRows = dt.data.data;
    }
    const rows = selectedRows.map((row) => {
        const shownCells = row.cells.filter((_cell, index) => columnShown(index));
        return shownCells.map((cell) => cellToText(cell));
    });
    const headers = dt.data.headings.filter((_heading, index) => columnShown(index)).map((header) => header.text ?? String(header.data));
    // Only proceed if we have data
    if (rows.length) {
        const arr = [];
        rows.forEach((row, x) => {
            arr[x] = arr[x] || {};
            row.forEach((cell, i) => {
                arr[x][headers[i]] = cell;
            });
        });
        // Convert the array of objects to JSON string
        const str = JSON.stringify(arr, options.replacer, options.space);
        // Download
        if (options.download) {
            // Create a link to trigger the download
            const blob = new Blob([str], {
                type: "data:application/json;charset=utf-8"
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${options.filename || "datatable_export"}.json`;
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
        return str;
    }
    return false;
};

const exportSQL = function (dt, userOptions = {}) {
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    const defaults = {
        download: true,
        skipColumn: [],
        tableName: "myTable"
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    const options = {
        ...defaults,
        ...userOptions
    };
    const columnShown = (index) => !options.skipColumn.includes(index) && !dt.columns.settings[index]?.hidden;
    // Selection or whole table
    let selectedRows = [];
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            for (let i = 0; i < options.selection.length; i++) {
                selectedRows = selectedRows.concat(dt.pages[options.selection[i] - 1].map(row => row.row));
            }
        }
        else {
            selectedRows = dt.pages[options.selection - 1].map(row => row.row);
        }
    }
    else {
        selectedRows = dt.data.data;
    }
    const rows = selectedRows.map((row) => {
        const shownCells = row.cells.filter((_cell, index) => columnShown(index));
        return shownCells.map((cell) => cellToText(cell));
    });
    const headers = dt.data.headings.filter((_heading, index) => columnShown(index)).map((header) => header.text ?? String(header.data));
    // Only proceed if we have data
    if (rows.length) {
        // Begin INSERT statement
        let str = `INSERT INTO \`${options.tableName}\` (`;
        // Convert table headings to column names
        headers.forEach((header) => {
            str += `\`${header}\`,`;
        });
        // Remove trailing comma
        str = str.trim().substring(0, str.length - 1);
        // Begin VALUES
        str += ") VALUES ";
        // Iterate rows and convert cell data to column values
        rows.forEach((row) => {
            str += "(";
            row.forEach((cell) => {
                if (typeof cell === "string") {
                    str += `"${cell}",`;
                }
                else {
                    str += `${cell},`;
                }
            });
            // Remove trailing comma
            str = str.trim().substring(0, str.length - 1);
            // end VALUES
            str += "),";
        });
        // Remove trailing comma
        str = str.trim().substring(0, str.length - 1);
        // Add trailing colon
        str += ";";
        if (options.download) {
            str = `data:application/sql;charset=utf-8,${str}`;
        }
        // Download
        if (options.download) {
            // Create a link to trigger the download
            const link = document.createElement("a");
            link.href = encodeURI(str);
            link.download = `${options.filename || "datatable_export"}.sql`;
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
        }
        return str;
    }
    return false;
};

const exportTXT = function (dt, userOptions = {}) {
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    const defaults = {
        download: true,
        skipColumn: [],
        lineDelimiter: "\n",
        columnDelimiter: ","
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    const options = {
        ...defaults,
        ...userOptions
    };
    const columnShown = (index) => !options.skipColumn.includes(index) && !dt.columns.settings[index]?.hidden;
    const headers = dt.data.headings.filter((_heading, index) => columnShown(index)).map((header) => header.text ?? header.data);
    // Selection or whole table
    let selectedRows;
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            selectedRows = [];
            for (let i = 0; i < options.selection.length; i++) {
                selectedRows = selectedRows.concat(dt.pages[options.selection[i] - 1].map(row => row.row));
            }
        }
        else {
            selectedRows = dt.pages[options.selection - 1].map(row => row.row);
        }
    }
    else {
        selectedRows = dt.data.data;
    }
    let rows = [];
    // Include headings
    rows[0] = headers;
    rows = rows.concat(selectedRows.map((row) => {
        const shownCells = row.cells.filter((_cell, index) => columnShown(index));
        return shownCells.map((cell) => cellToText(cell));
    }));
    // Only proceed if we have data
    if (rows.length) {
        let str = "";
        rows.forEach(row => {
            row.forEach((cell) => {
                if (typeof cell === "string") {
                    cell = cell.trim();
                    cell = cell.replace(/\s{2,}/g, " ");
                    cell = cell.replace(/\n/g, "  ");
                    cell = cell.replace(/"/g, "\"\"");
                    //have to manually encode "#" as encodeURI leaves it as is.
                    cell = cell.replace(/#/g, "%23");
                    if (cell.includes(",")) {
                        cell = `"${cell}"`;
                    }
                }
                str += cell + options.columnDelimiter;
            });
            // Remove trailing column delimiter
            str = str.trim().substring(0, str.length - 1);
            // Apply line delimiter
            str += options.lineDelimiter;
        });
        // Remove trailing line delimiter
        str = str.trim().substring(0, str.length - 1);
        if (options.download) {
            str = `data:text/csv;charset=utf-8,${str}`;
        }
        // Download
        if (options.download) {
            // Create a link to trigger the download
            const link = document.createElement("a");
            link.href = encodeURI(str);
            link.download = `${options.filename || "datatable_export"}.txt`;
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
        }
        return str;
    }
    return false;
};

const defaultConfig$1 = {
    classes: {
        row: "datatable-editor-row",
        form: "datatable-editor-form",
        item: "datatable-editor-item",
        menu: "datatable-editor-menu",
        save: "datatable-editor-save",
        block: "datatable-editor-block",
        cancel: "datatable-editor-cancel",
        close: "datatable-editor-close",
        inner: "datatable-editor-inner",
        input: "datatable-editor-input",
        label: "datatable-editor-label",
        modal: "datatable-editor-modal",
        action: "datatable-editor-action",
        header: "datatable-editor-header",
        wrapper: "datatable-editor-wrapper",
        editable: "datatable-editor-editable",
        container: "datatable-editor-container",
        separator: "datatable-editor-separator"
    },
    labels: {
        closeX: "x",
        editCell: "Edit Cell",
        editRow: "Edit Row",
        removeRow: "Remove Row",
        reallyRemove: "Are you sure?",
        reallyCancel: "Do you really want to cancel?",
        save: "Save",
        cancel: "Cancel"
    },
    cancelModal: editor => confirm(editor.options.labels.reallyCancel),
    // edit inline instead of using a modal lay-over for editing content
    inline: true,
    // include hidden columns in the editor
    hiddenColumns: false,
    // enable the context menu
    contextMenu: true,
    // event to start editing
    clickEvent: "dblclick",
    // indexes of columns not to be edited
    excludeColumns: [],
    // set the context menu items
    menuItems: [
        {
            text: (editor) => editor.options.labels.editCell,
            action: (editor, _event) => {
                if (!(editor.event.target instanceof Element)) {
                    return;
                }
                const cell = editor.event.target.closest("td");
                return editor.editCell(cell);
            }
        },
        {
            text: (editor) => editor.options.labels.editRow,
            action: (editor, _event) => {
                if (!(editor.event.target instanceof Element)) {
                    return;
                }
                const row = editor.event.target.closest("tr");
                return editor.editRow(row);
            }
        },
        {
            separator: true
        },
        {
            text: (editor) => editor.options.labels.removeRow,
            action: (editor, _event) => {
                if (!(editor.event.target instanceof Element)) {
                    return;
                }
                if (confirm(editor.options.labels.reallyRemove)) {
                    const row = editor.event.target.closest("tr");
                    editor.removeRow(row);
                }
            }
        }
    ]
};

// Source: https://www.freecodecamp.org/news/javascript-debounce-example/
const debounce = function (func, timeout = 300) {
    let timer;
    return (..._args) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => func(), timeout);
    };
};

/**
 * Main lib
 * @param {Object} dataTable Target dataTable
 * @param {Object} options User config
 */
class Editor {
    menuOpen;
    containerDOM;
    data;
    disabled;
    dt;
    editing;
    editingCell;
    editingRow;
    event;
    events;
    initialized;
    limits;
    menuDOM;
    modalDOM;
    options;
    originalRowRender;
    rect;
    wrapperDOM;
    constructor(dataTable, options = {}) {
        this.dt = dataTable;
        this.options = {
            ...defaultConfig$1,
            ...options
        };
    }
    /**
     * Init instance
     * @return {Void}
     */
    init() {
        if (this.initialized) {
            return;
        }
        this.options.classes.editable?.split(" ").forEach(className => this.dt.wrapperDOM.classList.add(className));
        if (this.options.inline) {
            this.originalRowRender = this.dt.options.rowRender;
            this.dt.options.rowRender = (row, tr, index) => {
                let newTr = this.rowRender(row, tr, index);
                if (this.originalRowRender) {
                    newTr = this.originalRowRender(row, newTr, index);
                }
                return newTr;
            };
        }
        if (this.options.contextMenu) {
            this.containerDOM = createElement("div", {
                id: this.options.classes.container
            });
            this.wrapperDOM = createElement("div", {
                class: this.options.classes.wrapper
            });
            this.menuDOM = createElement("ul", {
                class: this.options.classes.menu
            });
            if (this.options.menuItems && this.options.menuItems.length) {
                this.options.menuItems.forEach((item) => {
                    const li = createElement("li", {
                        class: item.separator ? this.options.classes.separator : this.options.classes.item
                    });
                    if (!item.separator) {
                        const a = createElement("a", {
                            class: this.options.classes.action,
                            href: item.url || "#",
                            html: typeof item.text === "function" ? item.text(this) : item.text
                        });
                        li.appendChild(a);
                        if (item.action && typeof item.action === "function") {
                            a.addEventListener("click", (event) => {
                                event.preventDefault();
                                item.action(this, event);
                            });
                        }
                    }
                    this.menuDOM.appendChild(li);
                });
            }
            this.wrapperDOM.appendChild(this.menuDOM);
            this.containerDOM.appendChild(this.wrapperDOM);
            this.updateMenu();
        }
        this.data = {};
        this.menuOpen = false;
        this.editing = false;
        this.editingRow = false;
        this.editingCell = false;
        this.bindEvents();
        setTimeout(() => {
            this.initialized = true;
            this.dt.emit("editable.init");
        }, 10);
    }
    /**
     * Bind events to DOM
     * @return {Void}
     */
    bindEvents() {
        this.events = {
            keydown: this.keydown.bind(this),
            click: this.click.bind(this)
        };
        // listen for click / double-click
        this.dt.dom.addEventListener(this.options.clickEvent, this.events.click);
        // listen for right-click
        document.addEventListener("keydown", this.events.keydown);
        if (this.options.contextMenu) {
            this.events.context = this.context.bind(this);
            this.events.updateMenu = this.updateMenu.bind(this);
            this.events.dismissMenu = this.dismissMenu.bind(this);
            this.events.reset = debounce(() => this.events.updateMenu(), 50);
            // listen for right-click
            this.dt.dom.addEventListener("contextmenu", this.events.context);
            // listen for click everywhere except the menu
            document.addEventListener("click", this.events.dismissMenu);
            // Reset contextmenu on browser window changes
            window.addEventListener("resize", this.events.reset);
            window.addEventListener("scroll", this.events.reset);
        }
    }
    /**
     * contextmenu listener
     * @param  {Object} event Event
     * @return {Void}
     */
    context(event) {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        this.event = event;
        const cell = target.closest("tbody td");
        if (!this.disabled && cell) {
            event.preventDefault();
            // get the mouse position
            let x = event.pageX;
            let y = event.pageY;
            // check if we're near the right edge of window
            if (x > this.limits.x) {
                x -= this.rect.width;
            }
            // check if we're near the bottom edge of window
            if (y > this.limits.y) {
                y -= this.rect.height;
            }
            this.wrapperDOM.style.top = `${y}px`;
            this.wrapperDOM.style.left = `${x}px`;
            this.openMenu();
            this.updateMenu();
        }
    }
    /**
     * dblclick listener
     * @param  {Object} event Event
     * @return {Void}
     */
    click(event) {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        if (this.editing && this.data && this.editingCell) {
            const inputSelector = classNamesToSelector(this.options.classes.input);
            const input = this.modalDOM ?
                this.modalDOM.querySelector(`input${inputSelector}[type=text]`) :
                this.dt.wrapperDOM.querySelector(`input${inputSelector}[type=text]`);
            this.saveCell(input.value);
        }
        else if (!this.editing) {
            const cell = target.closest("tbody td");
            if (cell) {
                this.editCell(cell);
                event.preventDefault();
            }
        }
    }
    /**
     * keydown listener
     * @param  {Object} event Event
     * @return {Void}
     */
    keydown(event) {
        const inputSelector = classNamesToSelector(this.options.classes.input);
        if (this.modalDOM) {
            if (event.key === "Escape") { // close button
                if (this.options.cancelModal(this)) {
                    this.closeModal();
                }
            }
            else if (event.key === "Enter") { // save button
                // Save
                if (this.editingCell) {
                    const input = this.modalDOM.querySelector(`input${inputSelector}[type=text]`);
                    this.saveCell(input.value);
                }
                else {
                    const values = Array.from(this.modalDOM.querySelectorAll(`input${inputSelector}[type=text]`)).map(input => input.value.trim());
                    this.saveRow(values, this.data.row);
                }
            }
        }
        else if (this.editing && this.data) {
            if (event.key === "Enter") {
                // Enter key saves
                if (this.editingCell) {
                    const input = this.dt.wrapperDOM.querySelector(`input${inputSelector}[type=text]`);
                    this.saveCell(input.value);
                }
                else if (this.editingRow) {
                    const values = Array.from(this.dt.wrapperDOM.querySelectorAll(`input${inputSelector}[type=text]`)).map(input => input.value.trim());
                    this.saveRow(values, this.data.row);
                }
            }
            else if (event.key === "Escape") {
                // Escape key reverts
                if (this.editingCell) {
                    this.saveCell(this.data.content);
                }
                else if (this.editingRow) {
                    this.saveRow(null, this.data.row);
                }
            }
        }
    }
    /**
     * Edit cell
     * @param  {Object} td    The HTMLTableCellElement
     * @return {Void}
     */
    editCell(td) {
        const columnIndex = visibleToColumnIndex(td.cellIndex, this.dt.columns.settings);
        if (this.options.excludeColumns.includes(columnIndex)) {
            this.closeMenu();
            return;
        }
        const rowIndex = parseInt(td.parentElement.dataset.index, 10);
        const row = this.dt.data.data[rowIndex];
        const cell = row.cells[columnIndex];
        this.data = {
            cell,
            rowIndex,
            columnIndex,
            content: cellToText(cell)
        };
        this.editing = true;
        this.editingCell = true;
        if (this.options.inline) {
            this.dt.update();
        }
        else {
            this.editCellModal();
        }
        this.closeMenu();
    }
    editCellModal() {
        const cell = this.data.cell;
        const columnIndex = this.data.columnIndex;
        const label = this.dt.data.headings[columnIndex].text || String(this.dt.data.headings[columnIndex].data);
        const template = [
            `<div class='${this.options.classes.inner}'>`,
            `<div class='${this.options.classes.header}'>`,
            `<h4>${this.options.labels.editCell}</h4>`,
            `<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`,
            " </div>",
            `<div class='${this.options.classes.block}'>`,
            `<form class='${this.options.classes.form}'>`,
            `<div class='${this.options.classes.row}'>`,
            `<label class='${this.options.classes.label}'>${escapeText(label)}</label>`,
            `<input class='${this.options.classes.input}' value='${escapeText(cellToText(cell))}' type='text'>`,
            "</div>",
            `<div class='${this.options.classes.row}'>`,
            `<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,
            `<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,
            "</div>",
            "</form>",
            "</div>",
            "</div>"
        ].join("");
        const modalDOM = createElement("div", {
            class: this.options.classes.modal,
            html: template
        });
        this.modalDOM = modalDOM;
        this.openModal();
        const inputSelector = classNamesToSelector(this.options.classes.input);
        const input = modalDOM.querySelector(`input${inputSelector}[type=text]`);
        input.focus();
        input.selectionStart = input.selectionEnd = input.value.length;
        // Close / save
        modalDOM.addEventListener("click", (event) => {
            const target = event.target;
            if (!(target instanceof Element)) {
                return;
            }
            if (target.hasAttribute("data-editor-cancel")) { // cancel button
                event.preventDefault();
                if (this.options.cancelModal(this)) {
                    this.closeModal();
                }
            }
            else if (target.hasAttribute("data-editor-save")) { // save button
                event.preventDefault();
                // Save
                this.saveCell(input.value);
            }
        });
    }
    /**
     * Save edited cell
     * @param  {Object} row    The HTMLTableCellElement
     * @param  {String} value   Cell content
     * @return {Void}
     */
    saveCell(value) {
        const oldData = this.data.content;
        // Get the type of that column
        const type = this.dt.columns.settings[this.data.columnIndex].type || this.dt.options.type;
        const stringValue = value.trim();
        let cell;
        if (type === "number") {
            cell = { data: parseFloat(stringValue) };
        }
        else if (type === "boolean") {
            if (["", "false", "0"].includes(stringValue)) {
                cell = { data: false,
                    text: "false",
                    order: 0 };
            }
            else {
                cell = { data: true,
                    text: "true",
                    order: 1 };
            }
        }
        else if (type === "html") {
            cell = { data: [
                    { nodeName: "#text",
                        data: value }
                ],
                text: value,
                order: value };
        }
        else if (type === "string") {
            cell = { data: value };
        }
        else if (type === "date") {
            const format = this.dt.columns.settings[this.data.columnIndex].format || this.dt.options.format;
            cell = { data: value,
                order: parseDate(String(value), format) };
        }
        else {
            cell = { data: value };
        }
        // Set the cell content
        const row = this.dt.data.data[this.data.rowIndex];
        row.cells[this.data.columnIndex] = cell;
        this.closeModal();
        const rowIndex = this.data.rowIndex;
        const columnIndex = this.data.columnIndex;
        this.data = {};
        this.dt.update(true);
        this.editing = false;
        this.editingCell = false;
        this.dt.emit("editable.save.cell", value, oldData, rowIndex, columnIndex);
    }
    /**
     * Edit row
     * @param  {Object} row    The HTMLTableRowElement
     * @return {Void}
     */
    editRow(tr) {
        if (!tr || tr.nodeName !== "TR" || this.editing)
            return;
        const rowIndex = parseInt(tr.dataset.index, 10);
        const row = this.dt.data.data[rowIndex];
        this.data = {
            row: row.cells,
            rowIndex
        };
        this.editing = true;
        this.editingRow = true;
        if (this.options.inline) {
            this.dt.update();
        }
        else {
            this.editRowModal();
        }
        this.closeMenu();
    }
    editRowModal() {
        const row = this.data.row;
        const template = [
            `<div class='${this.options.classes.inner}'>`,
            `<div class='${this.options.classes.header}'>`,
            `<h4>${this.options.labels.editRow}</h4>`,
            `<button class='${this.options.classes.close}' type='button' data-editor-cancel>${this.options.labels.closeX}</button>`,
            " </div>",
            `<div class='${this.options.classes.block}'>`,
            `<form class='${this.options.classes.form}'>`,
            `<div class='${this.options.classes.row}'>`,
            `<button class='${this.options.classes.cancel}' type='button' data-editor-cancel>${this.options.labels.cancel}</button>`,
            `<button class='${this.options.classes.save}' type='button' data-editor-save>${this.options.labels.save}</button>`,
            "</div>",
            "</form>",
            "</div>",
            "</div>"
        ].join("");
        const modalDOM = createElement("div", {
            class: this.options.classes.modal,
            html: template
        });
        const inner = modalDOM.firstElementChild;
        if (!inner) {
            return;
        }
        const form = inner.lastElementChild?.firstElementChild;
        if (!form) {
            return;
        }
        // Add the inputs for each cell
        row.forEach((cell, i) => {
            const columnSettings = this.dt.columns.settings[i];
            if ((!columnSettings.hidden || (columnSettings.hidden && this.options.hiddenColumns)) && !this.options.excludeColumns.includes(i)) {
                const label = this.dt.data.headings[i].text || String(this.dt.data.headings[i].data);
                form.insertBefore(createElement("div", {
                    class: this.options.classes.row,
                    html: [
                        `<div class='${this.options.classes.row}'>`,
                        `<label class='${this.options.classes.label}'>${escapeText(label)}</label>`,
                        `<input class='${this.options.classes.input}' value='${escapeText(cellToText(cell))}' type='text'>`,
                        "</div>"
                    ].join("")
                }), form.lastElementChild);
            }
        });
        this.modalDOM = modalDOM;
        this.openModal();
        // Grab the inputs
        const inputSelector = classNamesToSelector(this.options.classes.input);
        const inputs = Array.from(form.querySelectorAll(`input${inputSelector}[type=text]`));
        // Close / save
        modalDOM.addEventListener("click", (event) => {
            const target = event.target;
            if (!(target instanceof Element)) {
                return;
            }
            if (target.hasAttribute("data-editor-cancel")) { // cancel button
                if (this.options.cancelModal(this)) {
                    this.closeModal();
                }
            }
            else if (target.hasAttribute("data-editor-save")) { // save button
                // Save
                const values = inputs.map((input) => input.value.trim());
                this.saveRow(values, this.data.row);
            }
        });
    }
    /**
     * Save edited row
     * @param  {Object} row    The HTMLTableRowElement
     * @param  {Array} data   Cell data
     * @return {Void}
     */
    saveRow(data, row) {
        // Store the old data for the emitter
        const oldData = row.map((cell) => cellToText(cell));
        const updatedRow = this.dt.data.data[this.data.rowIndex];
        if (data) {
            let valueCounter = 0;
            updatedRow.cells = row.map((oldItem, colIndex) => {
                if (this.options.excludeColumns.includes(colIndex) || this.dt.columns.settings[colIndex].hidden) {
                    return oldItem;
                }
                const type = this.dt.columns.settings[colIndex].type || this.dt.options.type;
                const value = data[valueCounter++];
                let cell;
                if (type === "number") {
                    cell = { data: parseFloat(value) };
                }
                else if (type === "boolean") {
                    if (["", "false", "0"].includes(value)) {
                        cell = { data: false,
                            text: "false",
                            order: 0 };
                    }
                    else {
                        cell = { data: true,
                            text: "true",
                            order: 1 };
                    }
                }
                else if (type === "html") {
                    cell = {
                        data: [
                            { nodeName: "#text",
                                data: value }
                        ],
                        text: value,
                        order: value
                    };
                }
                else if (type === "string") {
                    cell = { data: value };
                }
                else if (type === "date") {
                    const format = this.dt.columns.settings[colIndex].format || this.dt.options.format;
                    cell = { data: value,
                        order: parseDate(String(value), format) };
                }
                else {
                    cell = { data: value };
                }
                return cell;
            });
        }
        const newData = updatedRow.cells.map(cell => cellToText(cell));
        this.data = {};
        this.dt.update(true);
        this.closeModal();
        this.editing = false;
        this.dt.emit("editable.save.row", newData, oldData, row);
    }
    /**
     * Open the row editor modal
     * @return {Void}
     */
    openModal() {
        if (this.modalDOM) {
            document.body.appendChild(this.modalDOM);
        }
    }
    /**
     * Close the row editor modal
     * @return {Void}
     */
    closeModal() {
        if (this.editing && this.modalDOM) {
            document.body.removeChild(this.modalDOM);
            this.modalDOM = this.editing = this.editingRow = this.editingCell = false;
        }
    }
    /**
     * Remove a row
     * @param  {Object} tr The HTMLTableRowElement
     * @return {Void}
     */
    removeRow(tr) {
        if (!tr || tr.nodeName !== "TR" || this.editing)
            return;
        const index = parseInt(tr.dataset.index, 10);
        this.dt.rows.remove(index);
        this.closeMenu();
    }
    /**
     * Update context menu position
     * @return {Void}
     */
    updateMenu() {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        this.rect = this.wrapperDOM.getBoundingClientRect();
        this.limits = {
            x: window.innerWidth + scrollX - this.rect.width,
            y: window.innerHeight + scrollY - this.rect.height
        };
    }
    /**
     * Dismiss the context menu
     * @param  {Object} event Event
     * @return {Void}
     */
    dismissMenu(event) {
        const target = event.target;
        if (!(target instanceof Element) || this.wrapperDOM.contains(target)) {
            return;
        }
        let valid = true;
        if (this.editing) {
            const inputSelector = classNamesToSelector(this.options.classes.input);
            valid = !(target.matches(`input${inputSelector}[type=text]`));
        }
        if (valid) {
            this.closeMenu();
        }
    }
    /**
     * Open the context menu
     * @return {Void}
     */
    openMenu() {
        if (this.editing && this.data && this.editingCell) {
            const inputSelector = classNamesToSelector(this.options.classes.input);
            const input = this.modalDOM ?
                this.modalDOM.querySelector(`input${inputSelector}[type=text]`) :
                this.dt.wrapperDOM.querySelector(`input${inputSelector}[type=text]`);
            this.saveCell(input.value);
        }
        document.body.appendChild(this.containerDOM);
        this.menuOpen = true;
        this.dt.emit("editable.context.open");
    }
    /**
     * Close the context menu
     * @return {Void}
     */
    closeMenu() {
        if (this.menuOpen) {
            this.menuOpen = false;
            document.body.removeChild(this.containerDOM);
            this.dt.emit("editable.context.close");
        }
    }
    /**
     * Destroy the instance
     * @return {Void}
     */
    destroy() {
        this.dt.dom.removeEventListener(this.options.clickEvent, this.events.click);
        this.dt.dom.removeEventListener("contextmenu", this.events.context);
        document.removeEventListener("click", this.events.dismissMenu);
        document.removeEventListener("keydown", this.events.keydown);
        window.removeEventListener("resize", this.events.reset);
        window.removeEventListener("scroll", this.events.reset);
        if (document.body.contains(this.containerDOM)) {
            document.body.removeChild(this.containerDOM);
        }
        if (this.options.inline) {
            this.dt.options.rowRender = this.originalRowRender;
        }
        this.initialized = false;
    }
    rowRender(row, tr, index) {
        if (!this.data || this.data.rowIndex !== index) {
            return tr;
        }
        if (this.editingCell) {
            // cell editing
            const cell = tr.childNodes[columnToVisibleIndex(this.data.columnIndex, this.dt.columns.settings)];
            cell.childNodes = [
                {
                    nodeName: "INPUT",
                    attributes: {
                        type: "text",
                        value: this.data.content,
                        class: this.options.classes.input
                    }
                }
            ];
        }
        else {
            // row editing
            // Add the inputs for each cell
            tr.childNodes.forEach((cell, i) => {
                const index = visibleToColumnIndex(i, this.dt.columns.settings);
                const dataCell = row[index];
                if (!this.options.excludeColumns.includes(index)) {
                    const cell = tr.childNodes[i];
                    cell.childNodes = [
                        {
                            nodeName: "INPUT",
                            attributes: {
                                type: "text",
                                value: escapeText(dataCell.text || String(dataCell.data) || ""),
                                class: this.options.classes.input
                            }
                        }
                    ];
                }
            });
        }
        return tr;
    }
}
const makeEditable = function (dataTable, options = {}) {
    const editor = new Editor(dataTable, options);
    if (dataTable.initialized) {
        editor.init();
    }
    else {
        dataTable.on("datatable.init", () => editor.init());
    }
    return editor;
};

/**
* Default config
* @type {Object}
*/
//import {ColumnFilter} from "./column_filter"
const defaultConfig = {
    classes: {
        button: "datatable-column-filter-button",
        menu: "datatable-column-filter-menu",
        container: "datatable-column-filter-container",
        wrapper: "datatable-column-filter-wrapper"
    },
    labels: {
        button: "Filter columns within the table" // The filter button title
    },
    hiddenColumns: []
};

class ColumnFilter {
    addedButtonDOM;
    menuOpen;
    buttonDOM;
    dt;
    events;
    initialized;
    options;
    menuDOM;
    containerDOM;
    wrapperDOM;
    limits;
    rect;
    event;
    constructor(dataTable, options = {}) {
        this.dt = dataTable;
        this.options = {
            ...defaultConfig,
            ...options
        };
    }
    init() {
        if (this.initialized) {
            return;
        }
        const buttonSelector = classNamesToSelector(this.options.classes.button);
        let buttonDOM = this.dt.wrapperDOM.querySelector(buttonSelector);
        if (!buttonDOM) {
            buttonDOM = createElement("button", {
                class: this.options.classes.button,
                html: "▦"
            });
            // filter button not part of template (could be default template. We add it to search.)
            const searchSelector = classNamesToSelector(this.dt.options.classes.search);
            const searchWrapper = this.dt.wrapperDOM.querySelector(searchSelector);
            if (searchWrapper) {
                searchWrapper.appendChild(buttonDOM);
            }
            else {
                this.dt.wrapperDOM.appendChild(buttonDOM);
            }
            this.addedButtonDOM = true;
        }
        this.buttonDOM = buttonDOM;
        this.containerDOM = createElement("div", {
            id: this.options.classes.container
        });
        this.wrapperDOM = createElement("div", {
            class: this.options.classes.wrapper
        });
        this.menuDOM = createElement("ul", {
            class: this.options.classes.menu,
            html: this.dt.data.headings.map((heading, index) => {
                const settings = this.dt.columns.settings[index];
                if (this.options.hiddenColumns.includes(index)) {
                    return "";
                }
                return `<li data-column="${index}">
                        <input type="checkbox" value="${heading.text || heading.data}" ${settings.hidden ? "" : "checked=''"}>
                        <label>
                            ${heading.text || heading.data}
                        </label>
                    </li>`;
            }).join("")
        });
        this.wrapperDOM.appendChild(this.menuDOM);
        this.containerDOM.appendChild(this.wrapperDOM);
        this._measureSpace();
        this._bind();
        this.initialized = true;
    }
    dismiss() {
        if (this.addedButtonDOM && this.buttonDOM.parentElement) {
            this.buttonDOM.parentElement.removeChild(this.buttonDOM);
        }
        document.removeEventListener("click", this.events.click);
    }
    _bind() {
        this.events = {
            click: this._click.bind(this)
        };
        document.addEventListener("click", this.events.click);
    }
    _openMenu() {
        document.body.appendChild(this.containerDOM);
        this._measureSpace();
        this.menuOpen = true;
        this.dt.emit("columnFilter.menu.open");
    }
    _closeMenu() {
        if (this.menuOpen) {
            this.menuOpen = false;
            document.body.removeChild(this.containerDOM);
            this.dt.emit("columnFilter.menu.close");
        }
    }
    _measureSpace() {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        this.rect = this.wrapperDOM.getBoundingClientRect();
        this.limits = {
            x: window.innerWidth + scrollX - this.rect.width,
            y: window.innerHeight + scrollY - this.rect.height
        };
    }
    _click(event) {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        this.event = event;
        if (this.buttonDOM.contains(target)) {
            event.preventDefault();
            if (this.menuOpen) {
                this._closeMenu();
                return;
            }
            this._openMenu();
            // get the mouse position
            let x = event.pageX;
            let y = event.pageY;
            // check if we're near the right edge of window
            if (x > this.limits.x) {
                x -= this.rect.width;
            }
            // check if we're near the bottom edge of window
            if (y > this.limits.y) {
                y -= this.rect.height;
            }
            this.wrapperDOM.style.top = `${y}px`;
            this.wrapperDOM.style.left = `${x}px`;
        }
        else if (this.menuDOM.contains(target)) {
            const menuSelector = classNamesToSelector(this.options.classes.menu);
            const li = target.closest(`${menuSelector} > li`);
            if (!li) {
                return;
            }
            const checkbox = li.querySelector("input[type=checkbox]");
            if (!checkbox.contains(target)) {
                checkbox.checked = !checkbox.checked;
            }
            const column = Number(li.dataset.column);
            if (checkbox.checked) {
                this.dt.columns.show([column]);
            }
            else {
                this.dt.columns.hide([column]);
            }
        }
        else if (this.menuOpen) {
            this._closeMenu();
        }
    }
}
const addColumnFilter = function (dataTable, options = {}) {
    const columnFilter = new ColumnFilter(dataTable, options);
    if (dataTable.initialized) {
        columnFilter.init();
    }
    else {
        dataTable.on("datatable.init", () => columnFilter.init());
    }
    return columnFilter;
};

export { DataTable, addColumnFilter, convertCSV, convertJSON, createElement, exportCSV, exportJSON, exportSQL, exportTXT, isJson, isObject, makeEditable };
//# sourceMappingURL=module.js.map
=======
>>>>>>> 84ade8d5e6e5924e2a15996f60a7982bb80d32b7
