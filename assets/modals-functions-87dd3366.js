import{a as g,i as f}from"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const L=document.querySelector(".header-burger"),y=document.querySelector(".mobile-menu-wrapper"),q=document.querySelector(".mobile-menu-close-btn"),u=document.querySelector(".mobile-menu-btn-content-home"),p=document.querySelector(".mobile-menu-btn-content-favorites");function x(){y.classList.remove("visually-hidden")}function w(){y.classList.add("visually-hidden")}L.addEventListener("click",x);q.addEventListener("click",w);u.addEventListener("click",()=>{window.location.href="./"});p.addEventListener("click",()=>{window.location.href="favorites.html"});window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(p.classList.add("active"),u.classList.remove("active")):(u.classList.add("active"),p.classList.remove("active"))});async function E(){const t=localStorage&&JSON.parse(localStorage.getItem("quoteData")),e=new Date().getDate();return t&&t.timestamp===e?t:k()}async function k(){try{const t=await g.get("https://energyflow.b.goit.study/api/quote"),e={quote:t.data.quote,author:t.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(e)),e}catch(t){console.error("Помилка:",t)}}async function $(t){try{const e=await E(),o=document.querySelector(t.quoteTextSelector),i=document.querySelector(t.quoteAuthorSelector);if(!o||!i)throw new Error("Елементи для відображення цитати не знайдено");o.innerText=e.quote,i.innerText=e.author}catch(e){console.error("Сталася помилка при відображенні цитати:",e)}}const M=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];M.forEach(t=>{document.querySelector(t.quoteTextSelector)&&document.querySelector(t.quoteAuthorSelector)&&$(t)});const v="/EnergyFlow/assets/sprite-e0f30560.svg";function h(t){return g.get(`https://energyflow.b.goit.study/api/exercises/${t}`)}function C(t){const e=JSON.parse(localStorage.getItem(l));return e&&e.some(o=>o._id===t._id)?`
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

        <button class="modal-button-rating" data-id="${t._id}">Give a rating</button>
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
            <use href="${v}#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating">Give a rating</button>
      </div>
  `}document.querySelector(".modal-button-favorites");const b=document.querySelector(".modal"),O=document.querySelector("body");b.addEventListener("click",T);const l="favoriteData";let m;async function T(t){try{if(t.target.classList.contains("modal-button-favorites")){m=JSON.parse(localStorage.getItem(l))||[];const o=(await h(t.target.dataset.id)).data,i=m.some(c=>c._id===o._id),a=document.querySelector(".modal-button-favorites-icon"),r=document.querySelector(".modal-button-favorites-icon-svg");if(!i)m.push(o);else return;localStorage.setItem(l,JSON.stringify(m)),a.style.animation="scale-animation 500ms cubic-bezier(.46,.51,.73,.7)",a.style.fill="#EEA10C",a.style.stroke="#EEA10C",setTimeout(()=>{b.classList.remove("is-open")},550),O.classList.remove("body-modal")}}catch(e){console.log(e.message)}finally{}}function D(t){const e=JSON.parse(localStorage.getItem(l)),o=JSON.stringify(e.filter(i=>i._id!==t));localStorage.setItem(l,o)}function B(t){t.style.animation="opacity-animation 1s ease-out",setTimeout(()=>{t.style.transform="translateX(-200%)"},100),setTimeout(()=>{t.style.position="absolute",t.style.top="0px",t.style.left="0px"},450),setTimeout(()=>t.remove(),1e3)}function S(t){const e=document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement;B(e)}window.location.pathname==="/favorites.html"&&document.querySelector(".favorites-contanier-block").addEventListener("click",e=>{if(e.target.classList.contains("favorites-icon-svg")){const o=e.target.dataset.id;D(o),S(o)}});function F(t="Operation has been success"){f.success({message:t,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}function V(t="Sorry... something wrong happened"){f.error({message:t,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const n={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};n.form.addEventListener("submit",A);n.starsContainer.addEventListener("click",I);function I(t){t.target.classList.contains("rating-label")&&(n.rateValue.textContent=`${t.target.dataset.rate}.0`)}async function A(t){t.preventDefault(),console.log(t.target);const e=t.target.dataset.id;try{const o=await g.patch(`https://energyflow.b.goit.study/api/exercises/${e}/rating`,{rate:parseInt(t.target.elements.rating.value),email:t.target.elements.email.value.trim(),review:t.target.elements.comment.value.trim()});F("Thank you! Your opinion really important for us!")}catch(o){throw new Error(o.message)}finally{d()}}function d(){n.modalBackdrop.classList.remove("is-open"),n.exerciseModal.classList.remove("is-open"),n.rateValue.textContent="0.0",n.form.reset()}let N;const s={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",W);document.addEventListener("click",R);document.addEventListener("keydown",z);function W(t){t.target.classList.contains("exersizes-card-btn")?_(t):t.target.classList.contains("modal-button-rating")?P():t.target.classList.contains("modal-button-favorites-rem")&&H(t)}async function _(t){try{const e=await h(t.target.dataset.id);s.exsCont.innerHTML=C(e.data),s.exerciseModal.classList.add("is-open"),N=t.target.dataset.id,J(),s.body.classList.add("body-modal")}catch(e){throw new Error(e.message)}}function P(t){s.ratingModal.classList.toggle("is-open")}function J(){const t=document.querySelector(".ex-rating-active"),e=document.querySelector(".modal-rating-value");t.style.width=`${parseFloat(e.textContent)/.05}%`}function R(t){t.target.classList.contains("backdrop")&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):t.target.classList.contains("backdrop")&&s.exerciseModal.classList.contains("is-open")||t.target.classList.contains("modal-button-close")||t.target.classList.contains("modal-button-close-icon")||t.target.classList.contains("modal-button-close-use")?(s.body.classList.remove("body-modal"),d()):(t.target.classList.contains("rating-close")||t.target.classList.contains("rating-close-svg")||t.target.classList.contains("rating-close-use"))&&s.ratingModal.classList.remove("is-open")}function z(t){t.code==="Escape"&&s.ratingModal.classList.contains("is-open")?s.ratingModal.classList.remove("is-open"):t.code==="Escape"&&s.exerciseModal.classList.contains("is-open")&&(d(),s.body.classList.remove("body-modal"))}function H(t){const e=JSON.parse(localStorage.getItem(l)),o=JSON.stringify(e.filter(a=>a._id!==t.target.dataset.id));localStorage.setItem(l,o),s.body.classList.remove("body-modal");const i=document.querySelector(".modal-button-favorites-rem > .modal-button-favorites-icon");i.style.animation="unscale-animation 500ms cubic-bezier(.46,.51,.73,.7)",i.style.fill="none",i.style.stroke="#f6f6f6",setTimeout(()=>{s.body.classList.remove("body-modal"),d()},550),window.location.pathname==="/favorites.html"&&S(t.target.dataset.id)}export{l as L,F as a,C as c,h as g,v as i,V as o,J as u};
//# sourceMappingURL=modals-functions-87dd3366.js.map
