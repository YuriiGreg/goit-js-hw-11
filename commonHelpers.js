import{S as f,i as l}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="44034856-409a23e11e96e3af40ee90684",b="https://pixabay.com/api/";async function w(o){const r=await fetch(`${b}?key=${h}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Network response was not ok");return await r.json()}function L(o,r){const n=o.map(({webformatURL:e,largeImageURL:t,tags:s,likes:m,views:p,comments:y,downloads:g})=>`
    <li>
      <a href="${t}">
        <img src="${e}" alt="${s}" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${m}</p>
        <p><b>Views</b> ${p}</p>
        <p><b>Comments</b> ${y}</p>
        <p><b>Downloads</b> ${g}</p>
      </div>
    </li>
  `).join("");r.innerHTML=n,new f(".gallery a").refresh()}function E(o){o.innerHTML=""}const c=document.getElementById("search-form"),$=document.getElementById("search-input"),d=document.getElementById("gallery"),i=document.getElementById("loader");new f(".gallery a");c.addEventListener("submit",async o=>{o.preventDefault();const r=$.value.trim();if(!r){l.warning({title:"Warning",message:"Please enter a search query!"});return}E(d),u(!0);try{const n=await w(r);n.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):L(n.hits,d)}catch(n){console.error(n),l.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{u(!1),c.reset()}});function u(o){o?(i.classList.remove("hidden"),i.style.display="block"):(i.classList.add("hidden"),i.style.display="none")}
//# sourceMappingURL=commonHelpers.js.map
