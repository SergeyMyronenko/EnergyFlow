import{a as b,i as S}from"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const M=document.querySelector(".header-burger"),L=document.querySelector(".mobile-menu-wrapper"),T=document.querySelector(".mobile-menu-close-btn"),f=document.querySelector(".mobile-menu-btn-content-home"),y=document.querySelector(".mobile-menu-btn-content-favorites");function O(){L.classList.remove("visually-hidden")}function B(){L.classList.add("visually-hidden")}M.addEventListener("click",O);T.addEventListener("click",B);f.addEventListener("click",()=>{window.location.href="./"});y.addEventListener("click",()=>{window.location.href="favorites.html"});window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(y.classList.add("active"),f.classList.remove("active")):(f.classList.add("active"),y.classList.remove("active"))});async function I(){const t=localStorage&&JSON.parse(localStorage.getItem("quoteData")),e=new Date().getDate();return t&&t.timestamp===e?t:D()}async function D(){try{const t=await b.get("https://energyflow.b.goit.study/api/quote"),e={quote:t.data.quote,author:t.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(e)),e}catch(t){console.error("Помилка:",t)}}async function W(t){try{const e=await I(),o=document.querySelector(t.quoteTextSelector),i=document.querySelector(t.quoteAuthorSelector);if(!o||!i)throw new Error("Елементи для відображення цитати не знайдено");o.innerText=e.quote,i.innerText=e.author}catch(e){console.error("Сталася помилка при відображенні цитати:",e)}}const P=[{quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"},{quoteTextSelector:".quoote-text",quoteAuthorSelector:".quote-autor"}];P.forEach(t=>{document.querySelector(t.quoteTextSelector)&&document.querySelector(t.quoteAuthorSelector)&&W(t)});const g="/EnergyFlow/assets/sprite-e0f30560.svg";function q(t){return b.get(`https://energyflow.b.goit.study/api/exercises/${t}`)}function N(t){const e=JSON.parse(localStorage.getItem(l));return e&&e.some(o=>o._id===t._id)?`
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
            <use href="${g}#heart"></use>
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
            <use href="${g}#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating" data-id="${t._id}" >Give a rating</button>
      </div>
  `}document.querySelector(".modal-button-favorites");const w=document.querySelector(".modal"),F=document.querySelector("body");w.addEventListener("click",z);const l="favoriteData";let v;async function z(t){try{if(t.target.classList.contains("modal-button-favorites")){v=JSON.parse(localStorage.getItem(l))||[];const o=(await q(t.target.dataset.id)).data,i=v.some(r=>r._id===o._id),s=document.querySelector(".modal-button-favorites-icon"),a=document.querySelector(".modal-button-favorites-icon-svg");if(!i)v.push(o);else return;localStorage.setItem(l,JSON.stringify(v)),s.style.animation="scale-animation 500ms cubic-bezier(.46,.51,.73,.7)",s.style.fill="#EEA10C",s.style.stroke="#EEA10C",setTimeout(()=>{w.classList.remove("is-open")},550),F.classList.remove("body-modal")}}catch(e){console.log(e.message)}finally{}}const A="/EnergyFlow/assets/dumbbell-eb25f45b.png",k=window.innerWidth;let m;function x(){if(window.location.pathname.endsWith("/favorites.html")){let t=JSON.parse(localStorage.getItem("favoriteData"))||[];if(k<768&&t.length>8){const a=document.querySelector(".exersizes-pagination-item-active");let r=[],c=1,u=0;a?(m=a.textContent,u=h*(m-1)):m=1,t.map(C=>{c>u&&c<=Math.ceil(h*m)&&r.push(C),c+=1}),t=r}const e=document.querySelector(".favorites-contanier-block"),o=document.querySelector(".pagination-mobile-list");e.innerHTML="",JSON.parse(localStorage.getItem("favoriteData")).length===0&&(e.innerHTML=`<img class="message-info-svg" src="${A}" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,e.style.overflowY="hidden",o.style.display="none");const i=document.createElement("ul");i.classList.add("favorites-list"),e.appendChild(i);const s=t.map(a=>{let r=a.name,c=a.target;const u=window.innerWidth;return u>=1440?(r.length>25&&(r=a.name[0].toUpperCase()+a.name.slice(1,25).trim()+"..."),c.length>20&&(c=a.target[0].toUpperCase()+a.target.slice(1,17).trim()+"...")):u<1440&&u>=768?r.length>17&&(r=a.name[0].toUpperCase()+a.name.slice(1,16).trim()+"..."):r=a.name[0].toUpperCase()+a.name.slice(1,20).trim()+"...",`<li class="favorites-list-item" tabindex="0">
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg" data-id="${a._id}">
                <svg width="16" height="16" fill="none">
                  <use href="${g}#trash"></use>
                </svg>
              </button>
            </div>
            <button class="favorites-list-button" data-id="${a._id}" type="button">
              Start
              <svg
                class="favorites-list-button-icon"
                width="14"
                height="14"
                stroke="#1B1B1B"
              >
                <use href="${g}#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="favorites-list-container">
            <svg class="favorite-list-svg" width="24" height="24">
              <use href="${g}#dude"></use>
            </svg>
            <h3 class="favorites-list-text">${r}</h3>
          </div>
          <div class="favorites-card-text">
            <ul class="favorites-card-text-list">
              <li class="favorites-card-text-item">
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Burned calories:</h4>
                  <p class="favorites-card-text-block">${a.burnedCalories}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Body part:</h4>
                  <p class="favorites-card-text-block">${a.bodyPart}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Target:</h4>
                  <p class="favorites-card-text-block">${c}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>`}).join("");i.innerHTML=s}}document.addEventListener("DOMContentLoaded",x);k<768&&document.addEventListener("DOMContentLoaded",E);const h=8;function E(){if(window.location.pathname.endsWith("/favorites.html")){const t=JSON.parse(localStorage.getItem(l));let e="";const o=document.querySelector(".favorites-pagination-block"),i=Math.ceil(t.length/h);if(o.innerHTML="",i>1)for(let a=1;a<=i;a++)a===1?e+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${a}
                </button>
              </li>`:e+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${a}
                </button>
              </li>`;o.insertAdjacentHTML("beforeend",e);const s=document.querySelectorAll(".exersizes-pagination-btn");Array.from(s).map(a=>{if(Number(a.textContent)===Number(m)){a.parentElement.classList.add("exersizes-pagination-item-active");return}})}}function H(t){const e=document.querySelector(".exersizes-pagination-item-active"),o=t.target.parentElement;e.classList.remove("exersizes-pagination-item-active"),o.classList.add("exersizes-pagination-item-active")}function _(t){const e=t.getBoundingClientRect().y;window.scrollBy({top:e,behavior:"smooth"})}window.location.pathname.endsWith("/favorites.html")&&document.querySelector(".favorites-pagination-block").addEventListener("click",e=>{if(e.target.classList.contains("exersizes-pagination-btn")){H(e);const o=document.querySelector(".favorites-contanier-block");o.innerHTML="",x(),_(o.parentElement)}});function J(t){const e=JSON.parse(localStorage.getItem(l)),o=JSON.stringify(e.filter(i=>i._id!==t));localStorage.setItem(l,o)}function R(t){t.style.animation="opacity-animation 1s ease-out",setTimeout(()=>{t.style.transform="translateX(-200%)"},100),setTimeout(()=>{t.style.position="absolute",t.style.top="0px",t.style.left="0px"},450),setTimeout(()=>t.remove(),1e3)}function $(t){const e=document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement;R(e)}window.location.pathname.endsWith("/favorites.html")&&document.querySelector(".favorites-contanier-block").addEventListener("click",e=>{if(e.target.classList.contains("favorites-icon-svg")){const o=e.target.dataset.id;J(o),$(o),setTimeout(()=>{x(),E()},550)}});function U(t="Operation has been success"){S.success({message:t,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}function ot(t="Sorry... something wrong happened"){S.error({message:t,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const d={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};d.form.addEventListener("submit",V);d.starsContainer.addEventListener("click",Q);function Q(t){t.target.classList.contains("rating-label")&&(d.rateValue.textContent=`${t.target.dataset.rate}.0`)}async function V(t){t.preventDefault();const e=sessionStorage.getItem("workoutIdForRating");try{const o=await b.patch(`https://energyflow.b.goit.study/api/exercises/${e}/rating`,{rate:parseInt(t.target.elements.rating.value),email:t.target.elements.email.value.trim(),review:t.target.elements.comment.value.trim()});U("Thank you! Your opinion really important for us!")}catch(o){throw new Error(o.message)}finally{p()}}function p(){d.modalBackdrop.classList.remove("is-open"),d.exerciseModal.classList.remove("is-open"),d.rateValue.textContent="0.0",d.form.reset()}let G;const n={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",K);document.addEventListener("click",j);document.addEventListener("keydown",tt);function K(t){if(t.target.classList.contains("exersizes-card-btn"))Y(t);else if(t.target.classList.contains("modal-button-rating")){const e=t.target.dataset.id;sessionStorage.setItem("workoutIdForRating",e),X()}else t.target.classList.contains("modal-button-favorites-rem")&&et(t)}async function Y(t){try{const e=await q(t.target.dataset.id);n.exsCont.innerHTML=N(e.data),n.exerciseModal.classList.add("is-open"),G=t.target.dataset.id,Z(),n.body.classList.add("body-modal")}catch(e){throw new Error(e.message)}}function X(t){n.ratingModal.classList.toggle("is-open")}function Z(){const t=document.querySelector(".ex-rating-active"),e=document.querySelector(".modal-rating-value");t.style.width=`${parseFloat(e.textContent)/.05}%`}function j(t){t.target.classList.contains("backdrop")&&n.ratingModal.classList.contains("is-open")?n.ratingModal.classList.remove("is-open"):t.target.classList.contains("backdrop")&&n.exerciseModal.classList.contains("is-open")||t.target.classList.contains("modal-button-close")||t.target.classList.contains("modal-button-close-icon")||t.target.classList.contains("modal-button-close-use")?(n.body.classList.remove("body-modal"),p()):(t.target.classList.contains("rating-close")||t.target.classList.contains("rating-close-svg")||t.target.classList.contains("rating-close-use"))&&n.ratingModal.classList.remove("is-open")}function tt(t){t.code==="Escape"&&n.ratingModal.classList.contains("is-open")?n.ratingModal.classList.remove("is-open"):t.code==="Escape"&&n.exerciseModal.classList.contains("is-open")&&(p(),n.body.classList.remove("body-modal"))}function et(t){const e=JSON.parse(localStorage.getItem(l)),o=JSON.stringify(e.filter(s=>s._id!==t.target.dataset.id));localStorage.setItem(l,o),n.body.classList.remove("body-modal");const i=document.querySelector(".modal-button-favorites-rem > .modal-button-favorites-icon");i.style.animation="unscale-animation 500ms cubic-bezier(.46,.51,.73,.7)",i.style.fill="none",i.style.stroke="#f6f6f6",setTimeout(()=>{n.body.classList.remove("body-modal"),p()},550),window.location.pathname.endsWith("/favorites.html")&&$(t.target.dataset.id)}export{U as a,N as c,q as g,g as i,ot as o,Z as u};
//# sourceMappingURL=modals-functions-232d9ea3.js.map
