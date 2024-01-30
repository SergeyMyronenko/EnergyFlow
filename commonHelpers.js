import{g as u,c as f,L as n}from"./assets/add-to-favorites-0418ab5c.js";import"./assets/vendor-20b07447.js";let v,i;const c=6;window.location.pathname==="/page-2.html"&&(v=document.querySelector(".favorites-list"),i=document.querySelectorAll(".favorites-pagination-block button"),l(1),i.forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.textContent);l(e)})}));function l(t){const e=(t-1)*c,r=e+c;v.querySelectorAll(".favorites-list-item").forEach((a,o)=>{o>=e&&o<r?a.style.display="block":a.style.display="none"}),i.forEach(a=>{parseInt(a.textContent)===t?a.classList.add("active-btn"):a.classList.remove("active-btn")})}const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",g);async function g(t){try{if(t.target.classList.contains("favorites-list-button")){const e=await u("64f389465ae26083f39b18d0");d.exsCont.innerHTML=f(e.data),d.exerciseModal.classList.toggle("is-open");const r=document.querySelector(".ex-rating-active"),s=document.querySelector(".modal-rating-value");r.style.width=await`${parseInt(s.textContent)/.05}%`}}catch(e){throw new Error(e.message)}}function p(t){const e=JSON.parse(localStorage.getItem(n)),r=JSON.stringify(e.filter(s=>s._id!==t));localStorage.setItem(n,r)}function m(t){document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement}const h=document.querySelector(".favorites-contanier-block");h.addEventListener("click",t=>{if(t.target.dataset.id){const e=t.target.dataset.id;p(t.target.dataset.id),m(e)}});function y(){const t=JSON.parse(localStorage.getItem("favoriteData"))||[],e=document.querySelector(".favorites-contanier-block"),r=document.querySelector(".pagination-mobile-list");e.innerHTML="",t.length===0&&(e.innerHTML=`<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,r.style.display="none");const s=document.createElement("ul");s.classList.add("favorites-list"),e.appendChild(s);const a=t.map(o=>`

    <li class="favorites-list-item" tabindex="0">
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg" data-id="${o._id}">
                <svg width="16" height="16" fill="none">
                  <use href="./img/sprite.svg#trash"></use>
                </svg>
              </button>
            </div>
            <button class="favorites-list-button" type="button">
              Start
              <svg
                class="favorites-list-button-icon"
                width="14"
                height="14"
                stroke="#1B1B1B"
              >
                <use href="./img/sprite.svg#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="favorites-list-container">
            <svg class="favorite-list-svg" width="24" height="24">
              <use href="./img/sprite.svg#dude"></use>
            </svg>
            <h3 class="favorites-list-text">${o.name}</h3>
          </div>
          <div class="favorites-card-text">
            <ul class="favorites-card-text-list">
              <li class="favorites-card-text-item">
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Burned calories:</h4>
                  <p class="favorites-card-text-block">${o.burnedCalories}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Body part:</h4>
                  <p class="favorites-card-text-block">${o.bodyPart}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Target:</h4>
                  <p class="favorites-card-text-block">${o.target}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
    `).join("");s.innerHTML=a}document.addEventListener("DOMContentLoaded",y);
//# sourceMappingURL=commonHelpers.js.map
