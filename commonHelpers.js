import{g,c as m,L as d}from"./assets/add-to-favorites-83473724.js";import"./assets/vendor-e460d164.js";let p,l;const v=6;window.location.pathname==="/page-2.html"&&(p=document.querySelector(".favorites-list"),l=document.querySelectorAll(".favorites-pagination-block button"),f(1),l.forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.textContent);f(e)})}));function f(t){const e=(t-1)*v,i=e+v;p.querySelectorAll(".favorites-list-item").forEach((o,s)=>{s>=e&&s<i?o.style.display="block":o.style.display="none"}),l.forEach(o=>{parseInt(o.textContent)===t?o.classList.add("active-btn"):o.classList.remove("active-btn")})}const u={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",h);async function h(t){try{if(t.target.classList.contains("favorites-list-button")){const e=await g("64f389465ae26083f39b18d0");u.exsCont.innerHTML=m(e.data),u.exerciseModal.classList.toggle("is-open");const i=document.querySelector(".ex-rating-active"),a=document.querySelector(".modal-rating-value");i.style.width=await`${parseInt(a.textContent)/.05}%`}}catch(e){throw new Error(e.message)}}function y(t){const e=JSON.parse(localStorage.getItem(d)),i=JSON.stringify(e.filter(a=>a._id!==t));localStorage.setItem(d,i)}function x(t){t.style.animation="opacity-animation 1s ease-out",setTimeout(()=>{t.style.transform="translateX(-200%)"},100),setTimeout(()=>{t.style.position="absolute",t.style.top="0px",t.style.left="0px"},350),setTimeout(()=>t.remove(),1e3)}function b(t){const e=document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement;x(e)}const w=document.querySelector(".favorites-contanier-block");w.addEventListener("click",t=>{if(t.target.dataset.id){const e=t.target.dataset.id;y(e),b(e)}});function L(){const t=JSON.parse(localStorage.getItem("favoriteData"))||[],e=document.querySelector(".favorites-contanier-block"),i=document.querySelector(".pagination-mobile-list");e.innerHTML="",t.length===0&&(e.innerHTML=`<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,i.style.display="none");const a=document.createElement("ul");a.classList.add("favorites-list"),e.appendChild(a);const o=t.map(s=>{let r=s.name,n=s.target;const c=window.innerWidth;return c>=1440?(r.length>25&&(r=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."),n.length>20&&(n=s.target[0].toUpperCase()+s.target.slice(1,17).trim()+"...")):c<1440&&c>=768?r.length>17&&(r=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):r=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",`<li class="favorites-list-item" tabindex="0">
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
            <h3 class="favorites-list-text">${r}</h3>
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
                  <p class="favorites-card-text-block">${n}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>`}).join("");a.innerHTML=o}document.addEventListener("DOMContentLoaded",L);
//# sourceMappingURL=commonHelpers.js.map
