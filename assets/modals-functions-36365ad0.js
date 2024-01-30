import{a as l}from"./vendor-20b07447.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function c(e){return l.get(`https://energyflow.b.goit.study/api/exercises/${e}`)}function d(e){return`
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
  `}const s={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",u);document.addEventListener("click",m);document.addEventListener("click",p);document.addEventListener("keydown",f);s.closeBtn.addEventListener("click",g);s.closeExerciseBtn.addEventListener("click",v);async function m(e){try{if(e.target.classList.contains("exersizes-card-btn")){const a=await c(e.target.dataset.id);s.exsCont.innerHTML=d(a.data),s.exerciseModal.classList.toggle("is-open");const n=document.querySelector(".ex-rating-active"),o=document.querySelector(".modal-rating-value");n.style.width=await`${parseInt(o.textContent)/.05}%`}}catch(a){throw new Error(a.message)}}async function u(e){e.target.classList.contains("modal-button-rating")&&s.ratingModal.classList.toggle("is-open")}function p(e){if(e.target.classList.contains("backdrop")&&s.ratingModal.classList.contains("is-open")){s.ratingModal.classList.remove("is-open");return}e.target.classList.contains("backdrop")&&s.exerciseModal.classList.contains("is-open")&&s.exerciseModal.classList.remove("is-open")}function g(e){e.currentTarget&&s.ratingModal.classList.remove("is-open")}function v(e){e.currentTarget&&s.exerciseModal.classList.remove("is-open")}function f(e){if(e.code==="Escape"&&s.ratingModal.classList.contains("is-open")){s.ratingModal.classList.remove("is-open");return}e.code==="Escape"&&s.exerciseModal.classList.contains("is-open")&&s.exerciseModal.classList.remove("is-open")}export{d as c,c as g};
//# sourceMappingURL=modals-functions-36365ad0.js.map
