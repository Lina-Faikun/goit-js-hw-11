import{a as m,S as p,i as a}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="48489244-88d9f9c306d25e531480e36e9",g="https://pixabay.com/api/";async function h(o){try{return(await m.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Помилка запиту:",t),new Error("Не вдалося отримати зображення.")}}const c=document.querySelector(".gallery");function b(o){if(c.innerHTML="",o.length===0)return;const t=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:u,comments:d,downloads:f})=>`
      <a class="gallery__item" href="${e}">
        <div class="photo-card">
          <img src="${i}" alt="${r}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${n}</p>
            <p><b>Views:</b> ${u}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </div>
      </a>
    `).join("");c.innerHTML=t,new p(".gallery a").refresh()}const L=document.querySelector("#search-form"),l=document.querySelector(".loader");L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){a.error({title:"Error",message:"Поле пошуку не може бути порожнім!"});return}l.style.display="block";try{const s=await h(t);s.length===0?a.warning({title:"No results",message:"Sorry, no images found!"}):b(s)}catch(s){a.error({title:"Error",message:s.message})}finally{l.style.display="none"}});
//# sourceMappingURL=index.js.map
