import{a as m,i as g}from"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const x=document.querySelector(".header-burger"),v=document.querySelector(".mobile-menu-wrapper"),q=document.querySelector(".mobile-menu-close-btn"),L=document.querySelector(".mobile-menu-btn-content-home"),w=document.querySelector(".mobile-menu-btn-content-favorites");function E(){v.classList.remove("visually-hidden")}function k(){v.classList.add("visually-hidden")}x.addEventListener("click",E);q.addEventListener("click",k);L.addEventListener("click",()=>{window.location.href="./"});w.addEventListener("click",()=>{window.location.href="favorites.html"});async function M(){const t=localStorage&&JSON.parse(localStorage.getItem("quoteData")),e=new Date().getDate();return t&&t.timestamp===e?t:$()}async function $(){try{const t=await m.get("https://energyflow.b.goit.study/api/quote"),e={quote:t.data.quote,author:t.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(e)),e}catch(t){console.error("Помилка:",t)}}async function C(t){try{const e=await M(),i=document.querySelector(t.quoteTextSelector),r=document.querySelector(t.quoteAuthorSelector);if(!i||!r)throw new Error("Елементи для відображення цитати не знайдено");i.innerText=e.quote,r.innerText=e.author}catch(e){console.error("Сталася помилка при відображенні цитати:",e)}}const O=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];O.forEach(t=>{document.querySelector(t.quoteTextSelector)&&document.querySelector(t.quoteAuthorSelector)&&C(t)});const p="/EnergyFlow/assets/sprite-c7e7dfd8.svg";function f(t){return m.get(`https://energyflow.b.goit.study/api/exercises/${t}`)}function T(t){return JSON.parse(localStorage.getItem(l)).some(e=>e._id===t._id)?`
      <div class="modal-content">
        <img class="modal-img" src="${t.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${t.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${parseFloat(t.rating)}</p>
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
        <button class="modal-button-favorites-rem" type="button" data-id="${t._id}">
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
        <img class="modal-img" src="${t.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${t.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${parseFloat(t.rating)}</p>
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
            <use href="${p}#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating">Give a rating</button>
      </div>
  `}document.querySelector(".modal-button-favorites");const y=document.querySelector(".modal");y.addEventListener("click",B);const l="favoriteData";let u=JSON.parse(localStorage.getItem(l))||[];async function B(t){try{if(t.target.classList.contains("modal-button-favorites")){const i=(await f(t.target.dataset.id)).data,r=u.some(c=>c._id===i._id),a=document.querySelector(".modal-button-favorites-icon"),s=document.querySelector(".modal-button-favorites-icon-svg");if(!r)u.push(i);else return;localStorage.setItem(l,JSON.stringify(u)),a.style.fill="#EEA10C",setTimeout(()=>{y.classList.remove("is-open")},1e3)}}catch(e){console.log(e.message)}finally{}}function D(t){const e=JSON.parse(localStorage.getItem(l)),i=JSON.stringify(e.filter(r=>r._id!==t));localStorage.setItem(l,i)}function I(t){t.style.animation="opacity-animation 1s ease-out",setTimeout(()=>{t.style.transform="translateX(-200%)"},100),setTimeout(()=>{t.style.position="absolute",t.style.top="0px",t.style.left="0px"},450),setTimeout(()=>t.remove(),1e3)}function h(t){const e=document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement;I(e)}const F=document.querySelector(".favorites-contanier-block");F.addEventListener("click",t=>{if(t.target.classList.contains("favorites-icon-svg")){const e=t.target.dataset.id;D(e),h(e)}});function S(t="Operation has been success"){g.success({message:t,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}function V(t="Sorry... something wrong happened"){g.error({message:t,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const n={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};n.form.addEventListener("submit",A);n.starsContainer.addEventListener("click",N);function N(t){t.target.classList.contains("rating-label")&&(n.rateValue.textContent=`${t.target.dataset.rate}.0`)}async function A(t){t.preventDefault();try{const e=await m.patch(`https://energyflow.b.goit.study/api/exercises/${b}/rating`,{rate:parseInt(t.target.elements.rating.value),email:t.target.elements.email.value.trim(),review:t.target.elements.comment.value.trim()});S("Thank you! Your opinion really important for us!")}catch(e){throw new Error(e.message)}finally{d()}}function d(){n.modalBackdrop.classList.remove("is-open"),n.exerciseModal.classList.remove("is-open"),n.rateValue.textContent="0.0",n.form.reset()}let b;const o={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",P);document.addEventListener("click",R);document.addEventListener("keydown",H);function P(t){t.target.classList.contains("exersizes-card-btn")?_(t):t.target.classList.contains("modal-button-rating")?J():t.target.classList.contains("modal-button-favorites-rem")&&z(t)}async function _(t){try{const e=await f(t.target.dataset.id);o.exsCont.innerHTML=T(e.data),o.exerciseModal.classList.add("is-open"),b=t.target.dataset.id,W(),o.body.classList.add("body-modal")}catch(e){throw new Error(e.message)}}function J(t){o.ratingModal.classList.toggle("is-open")}function W(){const t=document.querySelector(".ex-rating-active"),e=document.querySelector(".modal-rating-value");t.style.width=`${parseFloat(e.textContent)/.05}%`}function R(t){t.target.classList.contains("backdrop")&&o.ratingModal.classList.contains("is-open")?o.ratingModal.classList.remove("is-open"):t.target.classList.contains("backdrop")&&o.exerciseModal.classList.contains("is-open")||t.target.classList.contains("modal-button-close")||t.target.classList.contains("modal-button-close-icon")||t.target.classList.contains("modal-button-close-use")?(o.body.classList.remove("body-modal"),d()):(t.target.classList.contains("rating-close")||t.target.classList.contains("rating-close-svg")||t.target.classList.contains("rating-close-use"))&&o.ratingModal.classList.remove("is-open")}function H(t){t.code==="Escape"&&o.ratingModal.classList.contains("is-open")?o.ratingModal.classList.remove("is-open"):t.code==="Escape"&&o.exerciseModal.classList.contains("is-open")&&(d(),o.body.classList.remove("body-modal"))}function z(t){const e=JSON.parse(localStorage.getItem(l)),i=JSON.stringify(e.filter(r=>r._id!==t.target.dataset.id));localStorage.setItem(l,i),o.body.classList.remove("body-modal"),S("You have removed it from favorites"),h(t.target.dataset.id),d()}export{S as a,T as c,f as g,p as i,V as o,W as u};
//# sourceMappingURL=modals-functions-c26b3c2f.js.map
