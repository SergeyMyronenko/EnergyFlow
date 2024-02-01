import{a as g,i as f}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=l(a);fetch(a.href,s)}})();const L=document.querySelector(".header-burger"),y=document.querySelector(".mobile-menu-wrapper"),q=document.querySelector(".mobile-menu-close-btn"),u=document.querySelector(".mobile-menu-btn-content-home"),p=document.querySelector(".mobile-menu-btn-content-favorites");function x(){y.classList.remove("visually-hidden")}function w(){y.classList.add("visually-hidden")}L.addEventListener("click",x);q.addEventListener("click",w);u.addEventListener("click",()=>{window.location.href="./"});p.addEventListener("click",()=>{window.location.href="favorites.html"});window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(p.classList.add("active"),u.classList.remove("active")):(u.classList.add("active"),p.classList.remove("active"))});async function E(){const e=localStorage&&JSON.parse(localStorage.getItem("quoteData")),t=new Date().getDate();return e&&e.timestamp===t?e:M()}async function M(){try{const e=await g.get("https://energyflow.b.goit.study/api/quote"),t={quote:e.data.quote,author:e.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(t)),t}catch(e){console.error("Помилка:",e)}}async function $(e){try{const t=await E(),l=document.querySelector(e.quoteTextSelector),i=document.querySelector(e.quoteAuthorSelector);if(!l||!i)throw new Error("Елементи для відображення цитати не знайдено");l.innerText=t.quote,i.innerText=t.author}catch(t){console.error("Сталася помилка при відображенні цитати:",t)}}const k=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];k.forEach(e=>{document.querySelector(e.quoteTextSelector)&&document.querySelector(e.quoteAuthorSelector)&&$(e)});const v="/EnergyFlow/assets/sprite-e0f30560.svg";function h(e){return g.get(`https://energyflow.b.goit.study/api/exercises/${e}`)}function C(e){return JSON.parse(localStorage.getItem(c)).some(t=>t._id===e._id)?`
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
         Remove from
          <svg
            class="modal-button-favorites-icon"
            width="20"
            height="20"
            aria-label="heart-icon"
          >
            <use href="${v}#heart"></use>
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
            <use href="${v}#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating">Give a rating</button>
      </div>
  `}document.querySelector(".modal-button-favorites");const b=document.querySelector(".modal"),O=document.querySelector("body");b.addEventListener("click",T);const c="favoriteData";let m;async function T(e){try{if(e.target.classList.contains("modal-button-favorites")){m=JSON.parse(localStorage.getItem(c))||[];const l=(await h(e.target.dataset.id)).data,i=m.some(n=>n._id===l._id),a=document.querySelector(".modal-button-favorites-icon"),s=document.querySelector(".modal-button-favorites-icon-svg");if(!i)m.push(l);else return;localStorage.setItem(c,JSON.stringify(m)),a.style.animation="scale-animation 500ms cubic-bezier(.46,.51,.73,.7)",a.style.fill="#EEA10C",a.style.stroke="#EEA10C",setTimeout(()=>{b.classList.remove("is-open")},550),O.classList.remove("body-modal")}}catch(t){console.log(t.message)}finally{}}function B(e="Operation has been success"){f.success({message:e,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}function J(e="Sorry... something wrong happened"){f.error({message:e,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const r={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};r.form.addEventListener("submit",D);r.starsContainer.addEventListener("click",A);function A(e){e.target.classList.contains("rating-label")&&(r.rateValue.textContent=`${e.target.dataset.rate}.0`)}async function D(e){e.preventDefault();try{const t=await g.patch(`https://energyflow.b.goit.study/api/exercises/${S}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()});B("Thank you! Your opinion really important for us!")}catch(t){throw new Error(t.message)}finally{d()}}function d(){r.modalBackdrop.classList.remove("is-open"),r.exerciseModal.classList.remove("is-open"),r.rateValue.textContent="0.0",r.form.reset()}let S;const o={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",F);document.addEventListener("click",_);document.addEventListener("keydown",R);function F(e){e.target.classList.contains("exersizes-card-btn")?I(e):e.target.classList.contains("modal-button-rating")?N():e.target.classList.contains("modal-button-favorites-rem")&&z(e)}async function I(e){try{const t=await h(e.target.dataset.id);o.exsCont.innerHTML=C(t.data),o.exerciseModal.classList.add("is-open"),S=e.target.dataset.id,P(),o.body.classList.add("body-modal")}catch(t){throw new Error(t.message)}}function N(e){o.ratingModal.classList.toggle("is-open")}function P(){const e=document.querySelector(".ex-rating-active"),t=document.querySelector(".modal-rating-value");e.style.width=`${parseFloat(t.textContent)/.05}%`}function _(e){e.target.classList.contains("backdrop")&&o.ratingModal.classList.contains("is-open")?o.ratingModal.classList.remove("is-open"):e.target.classList.contains("backdrop")&&o.exerciseModal.classList.contains("is-open")||e.target.classList.contains("modal-button-close")||e.target.classList.contains("modal-button-close-icon")||e.target.classList.contains("modal-button-close-use")?(o.body.classList.remove("body-modal"),d()):(e.target.classList.contains("rating-close")||e.target.classList.contains("rating-close-svg")||e.target.classList.contains("rating-close-use"))&&o.ratingModal.classList.remove("is-open")}function R(e){e.code==="Escape"&&o.ratingModal.classList.contains("is-open")?o.ratingModal.classList.remove("is-open"):e.code==="Escape"&&o.exerciseModal.classList.contains("is-open")&&(d(),o.body.classList.remove("body-modal"))}function z(e){const t=JSON.parse(localStorage.getItem(c)),l=JSON.stringify(t.filter(a=>a._id!==e.target.dataset.id));localStorage.setItem(c,l),o.body.classList.remove("body-modal");const i=document.querySelector(".modal-button-favorites-rem > .modal-button-favorites-icon");i.style.animation="unscale-animation 500ms cubic-bezier(.46,.51,.73,.7)",i.style.fill="none",i.style.stroke="#f6f6f6",setTimeout(()=>{o.body.classList.remove("body-modal"),d()},550),window.location.pathname==="/favorites.html"&&removeWorkoutCard(e.target.dataset.id)}export{c as L,B as a,C as c,h as g,v as i,J as o,P as u};
//# sourceMappingURL=modals-functions-f7de045c.js.map
