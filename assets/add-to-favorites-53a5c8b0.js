import{a as c}from"./vendor-20b07447.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function m(){const t=localStorage&&JSON.parse(localStorage.getItem("quoteData")),a=new Date().getDate();return t&&t.timestamp===a?t:p()}async function p(){try{const t=await c.get("https://energyflow.b.goit.study/api/quote"),a={quote:t.data.quote,author:t.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(a)),a}catch(t){console.error("Помилка:",t)}}async function g(t){try{const a=await m(),i=document.querySelector(t.quoteTextSelector),s=document.querySelector(t.quoteAuthorSelector);if(!i||!s)throw new Error("Елементи для відображення цитати не знайдено");i.innerText=a.quote,s.innerText=a.author}catch(a){console.error("Сталася помилка при відображенні цитати:",a)}}const l={quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"};document.querySelector(l.quoteTextSelector)&&document.querySelector(l.quoteAuthorSelector)&&g(l);function f(t){return c.get(`https://energyflow.b.goit.study/api/exercises/${t}`)}function q(t){return`
      <div class="modal-content">
        <img class="modal-img" src="${t.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${t.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${t.rating}</p>

       <div class="ex-rating">
                <div class="ex-rating-body">
                  <div class="ex-rating-active"></div>
                  <div class="ex-rating-items">
                    <input
                      type="radio"
                      class="ex-rating-item"
                      value="1"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="2"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="3"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="4"
                      name="exrating"
                    /><input type="radio" class="ex-rating-item" value="5" name="exrating" />
                  </div>
                </div>
              </div>
          </div>

          <ul class="modal-list">
            <li class="modal-list-item">
              <p class="modal-list-item-name">Target</p>
              <p class="modal-list-item-value">${t.target}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Body Part</p>
              <p class="modal-list-item-value">${t.bodyPart}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Equipment</p>
              <p class="modal-list-item-value">${t.equipment}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Popular</p>
              <p class="modal-list-item-value">${t.popularity}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Burned calories</p>
              <p class="modal-list-item-value">${t.burnedCalories}/3 min</p>
            </li>
          </ul>

          <p class="modal-description">${t.description}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-buttons">
        <button class="modal-button-favorites" type="button" data-id="${t._id}">
          Add to favorites
          <svg
            class="modal-button-favorites-icon"
            width="20"
            height="20"
            aria-label="heart-icon"
          >
            <use href="./img/sprite.svg#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating">Give a rating</button>
      </div>
  `}const v=document.querySelector(".modal-button-favorites"),y=document.querySelector(".modal");document.addEventListener("click",d);let u="favoriteData";const n=JSON.parse(localStorage.getItem(u))||[];async function d(t){try{if(t.target.classList.contains("modal-button-favorites")){const i=(await f(t.target.dataset.id)).data;if(!n.some(e=>e._id===i._id))n.push(i);else return;localStorage.setItem(u,JSON.stringify(n)),y.classList.remove("is-open")}}catch(a){console.log(a.message)}finally{v.removeEventListener("click",d)}}export{q as c,f as g};
//# sourceMappingURL=add-to-favorites-53a5c8b0.js.map
