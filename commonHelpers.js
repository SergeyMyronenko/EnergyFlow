import{g as f,c as u,L as n}from"./assets/add-to-favorites-84c8ee5e.js";import"./assets/vendor-20b07447.js";let v,r;const c=6;window.location.pathname==="/page-2.html"&&(v=document.querySelector(".favorites-list"),r=document.querySelectorAll(".favorites-pagination-block button"),l(1),r.forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.textContent);l(e)})}));function l(t){const e=(t-1)*c,a=e+c;v.querySelectorAll(".favorites-list-item").forEach((s,i)=>{i>=e&&i<a?s.style.display="block":s.style.display="none"}),r.forEach(s=>{parseInt(s.textContent)===t?s.classList.add("active-btn"):s.classList.remove("active-btn")})}const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",g);async function g(t){try{if(t.target.classList.contains("favorites-list-button")){const e=await f("64f389465ae26083f39b18d0");d.exsCont.innerHTML=u(e.data),d.exerciseModal.classList.toggle("is-open");const a=document.querySelector(".ex-rating-active"),o=document.querySelector(".modal-rating-value");a.style.width=await`${parseInt(o.textContent)/.05}%`}}catch(e){throw new Error(e.message)}}function p(t){const e=JSON.parse(localStorage.getItem(n)),a=JSON.stringify(e.filter(o=>o._id!==t));localStorage.setItem(n,a)}function m(t){document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement}const h=document.querySelector(".favorites-contanier-block");h.addEventListener("click",t=>{if(t.target.dataset.id){const e=t.target.dataset.id;p(t.target.dataset.id),m(e)}});function y(){const t=JSON.parse(localStorage.getItem("favoriteData"))||[],e=document.querySelector(".favorites-contanier-block");e.innerHTML="",t.length===0&&(e.innerHTML=`<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`);const a=document.createElement("ul");a.classList.add("favorites-list"),e.appendChild(a);const o=t.map(s=>`
    <li class="favorites-list-item" >
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg" data-id="${s._id}">
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
            <h3 class="favorites-list-text">${s.name}</h3>
          </div>
          <div class="favorites-card-text">
            <ul class="favorites-card-text-list">
              <li class="favorites-card-text-item">
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Burned calories:</h4>
                  <p class="favorites-card-text-block">${s.burnedCalories}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Body part:</h4>
                  <p class="favorites-card-text-block">${s.bodyPart}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Target:</h4>
                  <p class="favorites-card-text-block">${s.target}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
    `).join("");a.innerHTML=o}document.addEventListener("DOMContentLoaded",y);
//# sourceMappingURL=commonHelpers.js.map
