import{i as l,g,c as h,u as m}from"./assets/modals-functions-c26b3c2f.js";import"./assets/vendor-8cce9181.js";let p,v;const f=6;window.location.pathname==="/page-2.html"&&(p=document.querySelector(".favorites-list"),v=document.querySelectorAll(".favorites-pagination-block button"),u(1),v.forEach(s=>{s.addEventListener("click",()=>{const t=parseInt(s.textContent);u(t)})}));function u(s){const t=(s-1)*f,r=t+f;p.querySelectorAll(".favorites-list-item").forEach((a,e)=>{e>=t&&e<r?a.style.display="block":a.style.display="none"}),v.forEach(a=>{parseInt(a.textContent)===s?a.classList.add("active-btn"):a.classList.remove("active-btn")})}function y(){const s=JSON.parse(localStorage.getItem("favoriteData"))||[],t=document.querySelector(".favorites-contanier-block"),r=document.querySelector(".pagination-mobile-list");t.innerHTML="",s.length===0&&(t.innerHTML=`<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`,r.style.display="none");const o=document.createElement("ul");o.classList.add("favorites-list"),t.appendChild(o);const a=s.map(e=>{let i=e.name,n=e.target;const c=window.innerWidth;return c>=1440?(i.length>25&&(i=e.name[0].toUpperCase()+e.name.slice(1,25).trim()+"..."),n.length>20&&(n=e.target[0].toUpperCase()+e.target.slice(1,17).trim()+"...")):c<1440&&c>=768?i.length>17&&(i=e.name[0].toUpperCase()+e.name.slice(1,16).trim()+"..."):i=e.name[0].toUpperCase()+e.name.slice(1,20).trim()+"...",`<li class="favorites-list-item" tabindex="0">
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
                  <p class="favorites-card-text-block">${n}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>`}).join("");o.innerHTML=a}document.addEventListener("DOMContentLoaded",y);const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",x);async function x(s){try{if(s.target.classList.contains("favorites-list-button")){const t=await g(s.target.dataset.id);d.exsCont.innerHTML=h(t.data),d.exerciseModal.classList.toggle("is-open"),m(),d.body.classList.add("body-modal")}}catch(t){throw new Error(t.message)}}
//# sourceMappingURL=commonHelpers.js.map
