import{i as l,L as u,g as y,c as h,u as x}from"./assets/modals-functions-bf4bd2a6.js";import"./assets/vendor-8cce9181.js";const L="/EnergyFlow/assets/dumbbell-eb25f45b.png",p=window.innerWidth;function g(t){let e=JSON.parse(localStorage.getItem("favoriteData"))||[];if(p<768){let s=[],i=1,r=t.target.textContent,n=0;r?n=v*(r-1):r=1,e.map(b=>{i>n&&i<=Math.ceil(v*r)&&s.push(b),i+=1}),e=s}const a=document.querySelector(".favorites-contanier-block"),o=document.querySelector(".pagination-mobile-list");a.innerHTML="",e.length===0&&(a.innerHTML=`<img class="message-info-svg" src="${L}" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,a.style.overflowY="hidden",o.style.display="none");const c=document.createElement("ul");c.classList.add("favorites-list"),a.appendChild(c);const m=e.map(s=>{let i=s.name,r=s.target;const n=window.innerWidth;return n>=1440?(i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."),r.length>20&&(r=s.target[0].toUpperCase()+s.target.slice(1,17).trim()+"...")):n<1440&&n>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",`<li class="favorites-list-item" tabindex="0">
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
                  <p class="favorites-card-text-block">${r}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>`}).join("");c.innerHTML=m,p<768&&w()}document.addEventListener("DOMContentLoaded",g);const v=8;function w(){const t=JSON.parse(localStorage.getItem(u));let e="";const a=Math.ceil(t.length/v);if(f.innerHTML="",a>1)for(let o=1;o<=a;o++)o===1?e+=`<li
                class="exersizes-pagination-item exersizes-pagination-item-active"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${o}
                </button>
              </li>`:e+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${o}
                </button>
              </li>`;f.insertAdjacentHTML("beforeend",e)}function S(t){t.target.textContent.trim();const e=document.querySelector(".exersizes-pagination-item-active"),a=t.target.parentElement;console.log(a),e.classList.remove("exersizes-pagination-item-active"),a.classList.add("exersizes-pagination-item-active"),a.style.border="var(--primary-color) 1px solid",a.style.color="var(--primary-color)",e.style.border="none",e.style.color="rgba(27, 27, 27, 0.4)"}const f=document.querySelector(".favorites-pagination-block");f.addEventListener("click",t=>{if(t.target.classList.contains("exersizes-pagination-btn")){S(t);const e=document.querySelector(".favorites-contanier-block");e.innerHTML="",g(t)}});function k(t){const e=JSON.parse(localStorage.getItem(u)),a=JSON.stringify(e.filter(o=>o._id!==t));localStorage.setItem(u,a)}function C(t){t.style.animation="opacity-animation 1s ease-out",setTimeout(()=>{t.style.transform="translateX(-200%)"},100),setTimeout(()=>{t.style.position="absolute",t.style.top="0px",t.style.left="0px"},450),setTimeout(()=>t.remove(),1e3)}function T(t){const e=document.querySelector(`[data-id="${t}"]`).parentElement.parentElement.parentElement;C(e)}window.location.pathname==="/favorites.html"&&document.querySelector(".favorites-contanier-block").addEventListener("click",e=>{if(e.target.classList.contains("favorites-icon-svg")){const a=e.target.dataset.id;k(a),T(a)}});const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",M);async function M(t){try{if(t.target.classList.contains("favorites-list-button")){const e=await y(t.target.dataset.id);d.exsCont.innerHTML=h(e.data),d.exerciseModal.classList.toggle("is-open"),x(),d.body.classList.add("body-modal")}}catch(e){throw new Error(e.message)}}
//# sourceMappingURL=commonHelpers.js.map
