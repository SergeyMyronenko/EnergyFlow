import{a as c}from"./vendor-20b07447.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();async function m(){const t=localStorage&&JSON.parse(localStorage.getItem("quoteData")),e=new Date().getDate();return t&&t.timestamp===e?t:p()}async function p(){try{const t=await c.get("https://energyflow.b.goit.study/api/quote"),e={quote:t.data.quote,author:t.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(e)),e}catch(t){console.error("Помилка:",t)}}async function g(t){try{const e=await m(),i=document.querySelector(t.quoteTextSelector),r=document.querySelector(t.quoteAuthorSelector);if(!i||!r)throw new Error("Елементи для відображення цитати не знайдено");i.innerText=e.quote,r.innerText=e.author}catch(e){console.error("Сталася помилка при відображенні цитати:",e)}}const f=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];f.forEach(t=>{document.querySelector(t.quoteTextSelector)&&document.querySelector(t.quoteAuthorSelector)&&g(t)});function d(t){return c.get(`https://energyflow.b.goit.study/api/exercises/${t}`)}function y(t){return`
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
  `}let v;const s={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",q);document.addEventListener("click",h);document.addEventListener("keydown",M);function q(t){t.target.classList.contains("exersizes-card-btn")?x(t):t.target.classList.contains("modal-button-rating")&&L()}async function x(t){try{const e=await d(t.target.dataset.id);s.exsCont.innerHTML=y(e.data),s.exerciseModal.classList.add("is-open"),v=t.target.dataset.id,S()}catch(e){throw new Error(e.message)}}function L(t){s.ratingModal.classList.toggle("is-open")}function S(){const t=document.querySelector(".ex-rating-active"),e=document.querySelector(".modal-rating-value");t.style.width=`${parseInt(e.textContent)/.05}%`}function h(t){t.target.classList.contains("backdrop")&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):t.target.classList.contains("backdrop")&&s.exerciseModal.classList.contains("is-open")||t.target.classList.contains("modal-button-close")||t.target.classList.contains("modal-button-close-icon")||t.target.classList.contains("modal-button-close-use")?s.exerciseModal.classList.remove("is-open"):(t.target.classList.contains("rating-close")||t.target.classList.contains("rating-close-svg")||t.target.classList.contains("rating-close-use"))&&s.ratingModal.classList.remove("is-open")}function M(t){t.code==="Escape"&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):t.code==="Escape"&&s.exerciseModal.classList.contains("is-open")&&s.exerciseModal.classList.remove("is-open")}document.querySelector(".modal-button-favorites");const b=document.querySelector(".modal");document.addEventListener("click",w);const u="favoriteData",l=JSON.parse(localStorage.getItem(u))||[];async function w(t){try{if(t.target.classList.contains("modal-button-favorites")){const i=(await d(t.target.dataset.id)).data;if(!l.some(a=>a._id===i._id))l.push(i);else return;localStorage.setItem(u,JSON.stringify(l)),b.classList.remove("is-open")}}catch(e){console.log(e.message)}finally{}}export{u as L,v as a,y as c,d as g,l as i};
//# sourceMappingURL=add-to-favorites-d4132a27.js.map
