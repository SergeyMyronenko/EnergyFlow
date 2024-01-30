import{a as r}from"./vendor-20b07447.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();function c(e){return r.get(`https://energyflow.b.goit.study/api/exercises/${e}`)}function d(e){return`
      <div class="modal-content">
        <img class="modal-img" src="${e.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${e.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${e.rating}</p>

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
  `}const s={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",m);document.addEventListener("click",v);document.addEventListener("keydown",f);function m(e){e.target.classList.contains("exersizes-card-btn")?u(e):e.target.classList.contains("modal-button-rating")&&p()}async function u(e){try{const i=await c(e.target.dataset.id);s.exsCont.innerHTML=d(i.data),s.exerciseModal.classList.add("is-open"),g()}catch(i){throw new Error(i.message)}}function p(e){s.ratingModal.classList.toggle("is-open")}function g(){const e=document.querySelector(".ex-rating-active"),i=document.querySelector(".modal-rating-value");e.style.width=`${parseInt(i.textContent)/.05}%`}function v(e){e.target.classList.contains("backdrop")&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):e.target.classList.contains("backdrop")&&s.exerciseModal.classList.contains("is-open")||e.target.classList.contains("modal-button-close")||e.target.classList.contains("modal-button-close-icon")||e.target.classList.contains("modal-button-close-use")?s.exerciseModal.classList.remove("is-open"):(e.target.classList.contains("rating-close")||e.target.classList.contains("rating-close-svg")||e.target.classList.contains("rating-close-use"))&&s.ratingModal.classList.remove("is-open")}function f(e){e.code==="Escape"&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):e.code==="Escape"&&s.exerciseModal.classList.contains("is-open")&&s.exerciseModal.classList.remove("is-open")}export{d as c,c as g};
//# sourceMappingURL=modals-functions-d98cac19.js.map
