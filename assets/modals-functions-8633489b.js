import{a as m,i as g}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();const b=document.querySelector(".header-burger"),v=document.querySelector(".mobile-menu-wrapper"),x=document.querySelector(".mobile-menu-close-btn"),q=document.querySelector(".mobile-menu-btn-content-home"),L=document.querySelector(".mobile-menu-btn-content-favorites");function w(){v.classList.remove("visually-hidden")}function E(){v.classList.add("visually-hidden")}b.addEventListener("click",w);x.addEventListener("click",E);q.addEventListener("click",()=>{window.location.href="./"});L.addEventListener("click",()=>{window.location.href="favorites.html"});async function M(){const e=localStorage&&JSON.parse(localStorage.getItem("quoteData")),t=new Date().getDate();return e&&e.timestamp===t?e:$()}async function $(){try{const e=await m.get("https://energyflow.b.goit.study/api/quote"),t={quote:e.data.quote,author:e.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(t)),t}catch(e){console.error("Помилка:",e)}}async function k(e){try{const t=await M(),i=document.querySelector(e.quoteTextSelector),r=document.querySelector(e.quoteAuthorSelector);if(!i||!r)throw new Error("Елементи для відображення цитати не знайдено");i.innerText=t.quote,r.innerText=t.author}catch(t){console.error("Сталася помилка при відображенні цитати:",t)}}const C=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];C.forEach(e=>{document.querySelector(e.quoteTextSelector)&&document.querySelector(e.quoteAuthorSelector)&&k(e)});const p="/EnergyFlow/assets/sprite-c7e7dfd8.svg";function f(e){return m.get(`https://energyflow.b.goit.study/api/exercises/${e}`)}function O(e){return JSON.parse(localStorage.getItem(c)).some(t=>t._id===e._id)?`
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
        <button class="modal-button-favorites-rem" type="button" data-id="${e._id}">
          Remove from favorites
          <svg
            class="modal-button-favorites-icon"
            width="20"
            height="20"
            aria-label="heart-icon"
          >
            <use href="${p}#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating">Give a rating</button>
      </div>
  `:`
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
            <use href="${p}#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating">Give a rating</button>
      </div>
  `}document.querySelector(".modal-button-favorites");const y=document.querySelector(".modal");y.addEventListener("click",B);const c="favoriteData";let u=JSON.parse(localStorage.getItem(c))||[];async function B(e){try{if(e.target.classList.contains("modal-button-favorites")){const i=(await f(e.target.dataset.id)).data,r=u.some(n=>n._id===i._id),a=document.querySelector(".modal-button-favorites-icon"),o=document.querySelector(".modal-button-favorites-icon-svg");if(!r)u.push(i);else return;localStorage.setItem(c,JSON.stringify(u)),a.style.fill="#EEA10C",setTimeout(()=>{y.classList.remove("is-open")},1e3)}}catch(t){console.log(t.message)}finally{}}function h(e="Operation has been success"){g.success({message:e,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}function J(e="Sorry... something wrong happened"){g.error({message:e,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const l={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};l.form.addEventListener("submit",D);l.starsContainer.addEventListener("click",T);function T(e){e.target.classList.contains("rating-label")&&(l.rateValue.textContent=`${e.target.dataset.rate}.0`)}async function D(e){e.preventDefault();try{const t=await m.patch(`https://energyflow.b.goit.study/api/exercises/${S}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()});h("Thank you! Your opinion really important for us!")}catch(t){throw new Error(t.message)}finally{d()}}function d(){l.modalBackdrop.classList.remove("is-open"),l.exerciseModal.classList.remove("is-open"),l.rateValue.textContent="0.0",l.form.reset()}let S;const s={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",A);document.addEventListener("click",P);document.addEventListener("keydown",_);function A(e){e.target.classList.contains("exersizes-card-btn")?I(e):e.target.classList.contains("modal-button-rating")?N():e.target.classList.contains("modal-button-favorites-rem")&&R(e)}async function I(e){try{const t=await f(e.target.dataset.id);s.exsCont.innerHTML=O(t.data),s.exerciseModal.classList.add("is-open"),S=e.target.dataset.id,F(),s.body.classList.add("body-modal")}catch(t){throw new Error(t.message)}}function N(e){s.ratingModal.classList.toggle("is-open")}function F(){const e=document.querySelector(".ex-rating-active"),t=document.querySelector(".modal-rating-value");e.style.width=`${parseFloat(t.textContent)/.05}%`}function P(e){e.target.classList.contains("backdrop")&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):e.target.classList.contains("backdrop")&&s.exerciseModal.classList.contains("is-open")||e.target.classList.contains("modal-button-close")||e.target.classList.contains("modal-button-close-icon")||e.target.classList.contains("modal-button-close-use")?(s.body.classList.remove("body-modal"),d()):(e.target.classList.contains("rating-close")||e.target.classList.contains("rating-close-svg")||e.target.classList.contains("rating-close-use"))&&s.ratingModal.classList.remove("is-open")}function _(e){e.code==="Escape"&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):e.code==="Escape"&&s.exerciseModal.classList.contains("is-open")&&(d(),s.body.classList.remove("body-modal"))}function R(e){const t=JSON.parse(localStorage.getItem(c)),i=JSON.stringify(t.filter(r=>r._id!==e.target.dataset.id));localStorage.setItem(c,i),s.body.classList.remove("body-modal"),h("You have removed it from favorites"),d()}export{c as L,h as a,O as c,f as g,p as i,J as o,F as u};
//# sourceMappingURL=modals-functions-8633489b.js.map
