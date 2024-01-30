import{g as f,c as u}from"./assets/add-to-favorites-06fab61b.js";import"./assets/vendor-20b07447.js";let v,r;const n=6;window.location.pathname==="/page-2.html"&&(v=document.querySelector(".favorites-list"),r=document.querySelectorAll(".favorites-pagination-block button"),l(1),r.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);l(t)})}));function l(e){const t=(e-1)*n,i=t+n;v.querySelectorAll(".favorites-list-item").forEach((a,c)=>{c>=t&&c<i?a.style.display="block":a.style.display="none"}),r.forEach(a=>{parseInt(a.textContent)===e?a.classList.add("active-btn"):a.classList.remove("active-btn")})}const d={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",g);async function g(e){try{if(e.target.classList.contains("favorites-list-button")){const t=await f("64f389465ae26083f39b18d0");d.exsCont.innerHTML=u(t.data),d.exerciseModal.classList.toggle("is-open");const i=document.querySelector(".ex-rating-active"),s=document.querySelector(".modal-rating-value");i.style.width=await`${parseInt(s.textContent)/.05}%`}}catch(t){throw new Error(t.message)}}const o=JSON.parse(localStorage.getItem("favoriteData"))||[];console.log(o);function p(){const e=document.querySelector(".favorites-contanier-block");e.innerHTML="",o.length===0&&(e.innerHTML=`
        <img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`);const t=document.createElement("ul");t.classList.add("favorites-list"),e.appendChild(t);const i=o.map(s=>`
    <li class="favorites-list-item">
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg">
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
    `).join("");t.innerHTML=i}document.addEventListener("DOMContentLoaded",p);
//# sourceMappingURL=commonHelpers.js.map
