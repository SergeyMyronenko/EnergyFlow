import"./assets/add-to-favorites-53a5c8b0.js";import"./assets/vendor-20b07447.js";let d,r;const c=6;window.location.pathname==="/page-2.html"&&(d=document.querySelector(".favorites-list"),r=document.querySelectorAll(".favorites-pagination-block button"),n(1),r.forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.textContent);n(e)})}));function n(t){const e=(t-1)*c,i=e+c;d.querySelectorAll(".favorites-list-item").forEach((s,l)=>{l>=e&&l<i?s.style.display="block":s.style.display="none"}),r.forEach(s=>{parseInt(s.textContent)===t?s.classList.add("active-btn"):s.classList.remove("active-btn")})}const o=JSON.parse(localStorage.getItem("favoriteData"))||[];console.log(o);function v(){const t=document.querySelector(".favorites-contanier-block");t.innerHTML="",o.length===0&&(t.innerHTML=`
        <img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`);const e=document.createElement("ul");e.classList.add("favorites-list"),t.appendChild(e);const i=o.map(a=>`
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
            <h3 class="favorites-list-text">${a.name}</h3>
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
                  <p class="favorites-card-text-block">${a.target}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
    `).join("");e.innerHTML=i}document.addEventListener("DOMContentLoaded",v);
//# sourceMappingURL=commonHelpers.js.map
