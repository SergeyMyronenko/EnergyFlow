import{g as u,c as f,L as n}from"./assets/add-to-favorites-5bc07e13.js";import"./assets/vendor-e460d164.js";let v,r;const c=6;window.location.pathname==="/page-2.html"&&(v=document.querySelector(".favorites-list"),r=document.querySelectorAll(".favorites-pagination-block button"),l(1),r.forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.textContent);l(e)})}));function l(t){const e=(t-1)*c,i=e+c;v.querySelectorAll(".favorites-list-item").forEach((a,o)=>{o>=e&&o<i?a.style.display="block":a.style.display="none"}),r.forEach(a=>{parseInt(a.textContent)===t?a.classList.add("active-btn"):a.classList.remove("active-btn")})}const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",p);async function p(t){try{if(t.target.classList.contains("favorites-list-button")){const e=await u("64f389465ae26083f39b18d0");d.exsCont.innerHTML=f(e.data),d.exerciseModal.classList.toggle("is-open");const i=document.querySelector(".ex-rating-active"),s=document.querySelector(".modal-rating-value");i.style.width=await`${parseInt(s.textContent)/.05}%`}}catch(e){throw new Error(e.message)}}function g(t){const e=JSON.parse(localStorage.getItem(n)),i=JSON.stringify(e.filter(s=>s._id!==t));localStorage.setItem(n,i)}function m(t){t.style.animation="opacity-animation 1s ease-out",setTimeout(()=>{t.style.transform="translateX(-200%)"},100),setTimeout(()=>{t.style.position="absolute",t.style.top="0px",t.style.left="0px"},450),setTimeout(()=>t.remove(),1e3)}function h(t){const e=document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement;m(e)}const y=document.querySelector(".favorites-contanier-block");y.addEventListener("click",t=>{if(t.target.dataset.id){const e=t.target.dataset.id;g(e),h(e)}});function x(){const t=JSON.parse(localStorage.getItem("favoriteData"))||[],e=document.querySelector(".favorites-contanier-block"),i=document.querySelector(".pagination-mobile-list");e.innerHTML="",t.length===0&&(e.innerHTML=`<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,i.style.display="none");const s=document.createElement("ul");s.classList.add("favorites-list"),e.appendChild(s);const a=t.map(o=>`

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
    `).join("");s.innerHTML=a}document.addEventListener("DOMContentLoaded",x);
//# sourceMappingURL=commonHelpers.js.map
