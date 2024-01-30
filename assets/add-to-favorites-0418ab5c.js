import{a as c}from"./vendor-20b07447.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const g=document.querySelector(".header-burger"),d=document.querySelector(".mobile-menu-wrapper"),f=document.querySelector(".mobile-menu-close-btn"),v=document.querySelector(".mobile-menu-btn-content-home"),y=document.querySelector(".mobile-menu-btn-content-favorites");function q(){d.classList.remove("visually-hidden")}function h(){d.classList.add("visually-hidden")}g.addEventListener("click",q);f.addEventListener("click",h);v.addEventListener("click",()=>{window.location.href="./"});y.addEventListener("click",()=>{window.location.href="favorites.html"});async function L(){const e=localStorage&&JSON.parse(localStorage.getItem("quoteData")),t=new Date().getDate();return e&&e.timestamp===t?e:S()}async function S(){try{const e=await c.get("https://energyflow.b.goit.study/api/quote"),t={quote:e.data.quote,author:e.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(t)),t}catch(e){console.error("Помилка:",e)}}async function x(e){try{const t=await L(),i=document.querySelector(e.quoteTextSelector),n=document.querySelector(e.quoteAuthorSelector);if(!i||!n)throw new Error("Елементи для відображення цитати не знайдено");i.innerText=t.quote,n.innerText=t.author}catch(t){console.error("Сталася помилка при відображенні цитати:",t)}}const b=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];b.forEach(e=>{document.querySelector(e.quoteTextSelector)&&document.querySelector(e.quoteAuthorSelector)&&x(e)});function u(e){return c.get(`https://energyflow.b.goit.study/api/exercises/${e}`)}function M(e){return`
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
  `}let E;const a={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",w);document.addEventListener("click",T);document.addEventListener("keydown",$);function w(e){e.target.classList.contains("exersizes-card-btn")?B(e):e.target.classList.contains("modal-button-rating")&&D()}async function B(e){try{const t=await u(e.target.dataset.id);a.exsCont.innerHTML=M(t.data),a.exerciseModal.classList.add("is-open"),E=e.target.dataset.id,O()}catch(t){throw new Error(t.message)}}function D(e){a.ratingModal.classList.toggle("is-open")}function O(){const e=document.querySelector(".ex-rating-active"),t=document.querySelector(".modal-rating-value");e.style.width=`${parseFloat(t.textContent)/.05}%`}function T(e){e.target.classList.contains("backdrop")&&a.ratingModal.classList.contains("is-open")?a.ratingModal.classList.remove("is-open"):e.target.classList.contains("backdrop")&&a.exerciseModal.classList.contains("is-open")||e.target.classList.contains("modal-button-close")||e.target.classList.contains("modal-button-close-icon")||e.target.classList.contains("modal-button-close-use")?a.exerciseModal.classList.remove("is-open"):(e.target.classList.contains("rating-close")||e.target.classList.contains("rating-close-svg")||e.target.classList.contains("rating-close-use"))&&a.ratingModal.classList.remove("is-open")}function $(e){e.code==="Escape"&&a.ratingModal.classList.contains("is-open")?a.ratingModal.classList.remove("is-open"):e.code==="Escape"&&a.exerciseModal.classList.contains("is-open")&&a.exerciseModal.classList.remove("is-open")}const A=document.querySelector(".modal-button-favorites"),C=document.querySelector(".modal"),k=document.querySelector(".modal");C.addEventListener("click",p);const m="favoriteData";let l=JSON.parse(localStorage.getItem(m))||[];async function p(e){try{if(e.target.classList.contains("modal-button-favorites")){const i=(await u(e.target.dataset.id)).data;if(!l.some(o=>o._id===i._id))l.push(i);else return;localStorage.setItem(m,JSON.stringify(l)),k.classList.remove("is-open")}}catch(t){console.log(t.message)}finally{A.removeEventListener("click",p)}}export{m as L,M as c,u as g,E as i};
//# sourceMappingURL=add-to-favorites-0418ab5c.js.map