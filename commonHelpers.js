import{i as l,L as b,g as h,c as y,u as x}from"./assets/modals-functions-c68ba69c.js";import"./assets/vendor-8cce9181.js";const L="/EnergyFlow/assets/dumbbell-eb25f45b.png",g=window.innerWidth;function p(a){let t=JSON.parse(localStorage.getItem("favoriteData"))||[];if(g<768){let e=[],i=1,o=a.target.textContent,n=0;o?n=v*(o-1):o=1,t.map(m=>{i>n&&i<=Math.ceil(v*o)&&e.push(m),i+=1}),t=e}const s=document.querySelector(".favorites-contanier-block"),r=document.querySelector(".pagination-mobile-list");s.innerHTML="",t.length===0&&(s.innerHTML=`<img class="message-info-svg" src="${L}" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,s.style.overflowY="hidden",r.style.display="none");const c=document.createElement("ul");c.classList.add("favorites-list"),s.appendChild(c);const f=t.map(e=>{let i=e.name,o=e.target;const n=window.innerWidth;return n>=1440?(i.length>25&&(i=e.name[0].toUpperCase()+e.name.slice(1,25).trim()+"..."),o.length>20&&(o=e.target[0].toUpperCase()+e.target.slice(1,17).trim()+"...")):n<1440&&n>=768?i.length>17&&(i=e.name[0].toUpperCase()+e.name.slice(1,16).trim()+"..."):i=e.name[0].toUpperCase()+e.name.slice(1,20).trim()+"...",`<li class="favorites-list-item" tabindex="0">
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg" data-id="${e._id}">
                <svg width="16" height="16" fill="none">
                  <use href="${l}#trash"></use>
                </svg>
              </button>
            </div>
            <button class="favorites-list-button" data-id="${e._id}" type="button">
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
                  <p class="favorites-card-text-block">${e.burnedCalories}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Body part:</h4>
                  <p class="favorites-card-text-block">${e.bodyPart}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Target:</h4>
                  <p class="favorites-card-text-block">${o}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>`}).join("");c.innerHTML=f,g<768&&w()}document.addEventListener("DOMContentLoaded",p);const v=8;function w(){const a=JSON.parse(localStorage.getItem(b));let t="";const s=Math.ceil(a.length/v);if(u.innerHTML="",s>1)for(let r=1;r<=s;r++)r===1?t+=`<li
                class="exersizes-pagination-item exersizes-pagination-item-active"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${r}
                </button>
              </li>`:t+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${r}
                </button>
              </li>`;u.insertAdjacentHTML("beforeend",t)}function S(a){a.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),s=a.target.parentElement;t.classList.remove("exersizes-pagination-item-active"),s.classList.add("exersizes-pagination-item-active"),s.style.border="var(--primary-color) 1px solid",s.style.color="var(--primary-color)",t.style.border="none",t.style.color="rgba(27, 27, 27, 0.4)"}const u=document.querySelector(".favorites-pagination-block");u.addEventListener("click",a=>{if(a.target.classList.contains("exersizes-pagination-btn")){S(a);const t=document.querySelector(".favorites-contanier-block");t.innerHTML="",p(a)}});const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",C);async function C(a){try{if(a.target.classList.contains("favorites-list-button")){const t=await h(a.target.dataset.id);d.exsCont.innerHTML=y(t.data),d.exerciseModal.classList.toggle("is-open"),x(),d.body.classList.add("body-modal")}}catch(t){throw new Error(t.message)}}
//# sourceMappingURL=commonHelpers.js.map
