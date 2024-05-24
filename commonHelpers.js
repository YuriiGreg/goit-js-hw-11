import{S as f,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="44034856-409a23e11e96e3af40ee90684",p="https://pixabay.com/api/";async function y(o){const r=await fetch(`${p}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Network response was not ok");return await r.json()}function g(o,r){const i=o.map(({webformatURL:e,largeImageURL:t,tags:s,likes:a,views:l,comments:d,downloads:u})=>`
    <li>
      <a href="${t}">
        <img src="${e}" alt="${s}" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${a}</p>
        <p><b>Views</b> ${l}</p>
        <p><b>Comments</b> ${d}</p>
        <p><b>Downloads</b> ${u}</p>
      </div>
    </li>
  `).join("");r.innerHTML=i,new f(".gallery a").refresh()}function h(o){o.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("search-form"),r=document.getElementById("search-input"),i=document.getElementById("gallery"),n=document.getElementById("loader");o.addEventListener("submit",async t=>{t.preventDefault();const s=r.value.trim();if(!s){c.warning({title:"Warning",message:"Please enter a search query!"});return}h(i),e(!0);try{const a=await y(s);a.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(a.hits,i)}catch(a){console.error(a),c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{e(!1)}});function e(t){t?(n.classList.remove("hidden"),n.style.display="block"):(n.classList.add("hidden"),n.style.display="none")}});
//# sourceMappingURL=commonHelpers.js.map
