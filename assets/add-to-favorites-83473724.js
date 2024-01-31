import{a as c}from"./vendor-e460d164.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const p=document.querySelector(".header-burger"),d=document.querySelector(".mobile-menu-wrapper"),g=document.querySelector(".mobile-menu-close-btn"),f=document.querySelector(".mobile-menu-btn-content-home"),y=document.querySelector(".mobile-menu-btn-content-favorites");function v(){d.classList.remove("visually-hidden")}function q(){d.classList.add("visually-hidden")}p.addEventListener("click",v);g.addEventListener("click",q);f.addEventListener("click",()=>{window.location.href="./"});y.addEventListener("click",()=>{window.location.href="favorites.html"});async function h(){const e=localStorage&&JSON.parse(localStorage.getItem("quoteData")),t=new Date().getDate();return e&&e.timestamp===t?e:L()}async function L(){try{const e=await c.get("https://energyflow.b.goit.study/api/quote"),t={quote:e.data.quote,author:e.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(t)),t}catch(e){console.error("Помилка:",e)}}async function S(e){try{const t=await h(),i=document.querySelector(e.quoteTextSelector),n=document.querySelector(e.quoteAuthorSelector);if(!i||!n)throw new Error("Елементи для відображення цитати не знайдено");i.innerText=t.quote,n.innerText=t.author}catch(t){console.error("Сталася помилка при відображенні цитати:",t)}}const x=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];x.forEach(e=>{document.querySelector(e.quoteTextSelector)&&document.querySelector(e.quoteAuthorSelector)&&S(e)});function u(e){return c.get(`https://energyflow.b.goit.study/api/exercises/${e}`)}function b(e){return`
      <div class="modal-content">
        <img class="modal-img" src="${e.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${e.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${parseFloat(e.rating)}</p>
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
              <p class="modal-list-item-value">${e.target}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Body Part</p>
              <p class="modal-list-item-value">${e.bodyPart}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Equipment</p>
              <p class="modal-list-item-value">${e.equipment}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Popular</p>
              <p class="modal-list-item-value">${e.popularity}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Burned calories</p>
              <p class="modal-list-item-value">${e.burnedCalories}/3 min</p>
            </li>
          </ul>

          <p class="modal-description">${e.description}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-buttons">
        <button class="modal-button-favorites" type="button" data-id="${e._id}">
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
  `}let M;const a={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",w);document.addEventListener("click",$);document.addEventListener("keydown",A);function w(e){e.target.classList.contains("exersizes-card-btn")?E(e):e.target.classList.contains("modal-button-rating")&&D()}async function E(e){try{const t=await u(e.target.dataset.id);a.exsCont.innerHTML=b(t.data),a.exerciseModal.classList.add("is-open"),M=e.target.dataset.id,O()}catch(t){throw new Error(t.message)}}function D(e){a.ratingModal.classList.toggle("is-open")}function O(){const e=document.querySelector(".ex-rating-active"),t=document.querySelector(".modal-rating-value");e.style.width=`${parseFloat(t.textContent)/.05}%`}function $(e){e.target.classList.contains("backdrop")&&a.ratingModal.classList.contains("is-open")?a.ratingModal.classList.remove("is-open"):e.target.classList.contains("backdrop")&&a.exerciseModal.classList.contains("is-open")||e.target.classList.contains("modal-button-close")||e.target.classList.contains("modal-button-close-icon")||e.target.classList.contains("modal-button-close-use")?a.exerciseModal.classList.remove("is-open"):(e.target.classList.contains("rating-close")||e.target.classList.contains("rating-close-svg")||e.target.classList.contains("rating-close-use"))&&a.ratingModal.classList.remove("is-open")}function A(e){e.code==="Escape"&&a.ratingModal.classList.contains("is-open")?a.ratingModal.classList.remove("is-open"):e.code==="Escape"&&a.exerciseModal.classList.contains("is-open")&&a.exerciseModal.classList.remove("is-open")}document.querySelector(".modal-button-favorites");const B=document.querySelector(".modal"),T=document.querySelector(".modal");B.addEventListener("click",C);const m="favoriteData";let l=JSON.parse(localStorage.getItem(m))||[];async function C(e){try{if(e.target.classList.contains("modal-button-favorites")){const i=(await u(e.target.dataset.id)).data;if(!l.some(o=>o._id===i._id))l.push(i);else return;localStorage.setItem(m,JSON.stringify(l)),T.classList.remove("is-open")}}catch(t){console.log(t.message)}finally{}}export{m as L,b as c,u as g,M as i};
//# sourceMappingURL=add-to-favorites-83473724.js.map
