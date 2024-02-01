import{L as f,i as l,g as m,c as h,u as y}from"./assets/modals-functions-a1b6b12b.js";import"./assets/vendor-8cce9181.js";let g,v;const u=6;window.location.pathname==="/page-2.html"&&(g=document.querySelector(".favorites-list"),v=document.querySelectorAll(".favorites-pagination-block button"),p(1),v.forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.textContent);p(e)})}));function p(t){const e=(t-1)*u,r=e+u;g.querySelectorAll(".favorites-list-item").forEach((a,s)=>{s>=e&&s<r?a.style.display="block":a.style.display="none"}),v.forEach(a=>{parseInt(a.textContent)===t?a.classList.add("active-btn"):a.classList.remove("active-btn")})}function x(t){const e=JSON.parse(localStorage.getItem(f)),r=JSON.stringify(e.filter(o=>o._id!==t));localStorage.setItem(f,r)}function b(t){t.style.animation="opacity-animation 1s ease-out",setTimeout(()=>{t.style.transform="translateX(-200%)"},100),setTimeout(()=>{t.style.position="absolute",t.style.top="0px",t.style.left="0px"},450),setTimeout(()=>t.remove(),1e3)}function L(t){const e=document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement;b(e)}const k=document.querySelector(".favorites-contanier-block");k.addEventListener("click",t=>{if(t.target.classList.contains("favorites-icon-svg")){const e=t.target.dataset.id;x(e),L(e)}});function w(){const t=JSON.parse(localStorage.getItem("favoriteData"))||[],e=document.querySelector(".favorites-contanier-block"),r=document.querySelector(".pagination-mobile-list");e.innerHTML="",t.length===0&&(e.innerHTML=`<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,e.style.overflowY="hidden",r.style.display="none");const o=document.createElement("ul");o.classList.add("favorites-list"),e.appendChild(o);const a=t.map(s=>{let i=s.name,n=s.target;const c=window.innerWidth;return c>=1440?(i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."),n.length>20&&(n=s.target[0].toUpperCase()+s.target.slice(1,17).trim()+"...")):c<1440&&c>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",`<li class="favorites-list-item" tabindex="0">
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg" data-id="${s._id}">
                <svg width="16" height="16" fill="none">
                  <use href="${l}#trash"></use>
                </svg>
              </button>
            </div>
            <button class="favorites-list-button" data-id="${s._id}" type="button">
              Start
              <svg
                class="favorites-list-button-icon"
                width="14"
                height="14"
                stroke="#1B1B1B"
              >
                <use href="${l}#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="favorites-list-container">
            <svg class="favorite-list-svg" width="24" height="24">
              <use href="${l}#dude"></use>
            </svg>
            <h3 class="favorites-list-text">${i}</h3>
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
        </li>`}).join("");o.innerHTML=a}document.addEventListener("DOMContentLoaded",w);const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",S);async function S(t){try{if(t.target.classList.contains("favorites-list-button")){const e=await m(t.target.dataset.id);d.exsCont.innerHTML=h(e.data),d.exerciseModal.classList.toggle("is-open"),y(),d.body.classList.add("body-modal")}}catch(e){throw new Error(e.message)}}
//# sourceMappingURL=commonHelpers.js.map
