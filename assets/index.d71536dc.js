import{r as f,o as d,c as m,a as p,b as _,d as h}from"./vendor.e65a07f6.js";const v=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};v();var y=(c,s)=>{const n=c.__vccOpts||c;for(const[r,e]of s)n[r]=e;return n};const g={};function E(c,s){const n=f("router-view");return d(),m(n)}var L=y(g,[["render",E]]);const O="modulepreload",a={},P="/",i=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${P}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":O,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",u)})})).then(()=>s())},b=[{path:"/",name:"home",component:()=>i(()=>import("./Home.2ba8fb75.js"),["assets/Home.2ba8fb75.js","assets/H3.8eb61d0e.js","assets/vendor.e65a07f6.js"])},{path:"/session/:id",name:"session",component:()=>i(()=>import("./Session.dc8175fa.js"),["assets/Session.dc8175fa.js","assets/H3.8eb61d0e.js","assets/vendor.e65a07f6.js"])},{path:"/:catchAll(.*)*",component:()=>i(()=>import("./Error404.d94acdd6.js"),["assets/Error404.d94acdd6.js","assets/vendor.e65a07f6.js"])}],A=p({routes:b,history:_()});h(L).use(A).mount("#app");export{y as _};
