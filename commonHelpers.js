import{g as f,c as u,i as g,L as p}from"./assets/add-to-favorites-75fafbe7.js";import"./assets/vendor-20b07447.js";let d,i;const n=6;window.location.pathname==="/page-2.html"&&(d=document.querySelector(".favorites-list"),i=document.querySelectorAll(".favorites-pagination-block button"),c(1),i.forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.textContent);c(t)})}));function c(e){const t=(e-1)*n,a=t+n;d.querySelectorAll(".favorites-list-item").forEach((s,r)=>{r>=t&&r<a?s.style.display="block":s.style.display="none"}),i.forEach(s=>{parseInt(s.textContent)===e?s.classList.add("active-btn"):s.classList.remove("active-btn")})}const l={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",h);async function h(e){try{if(e.target.classList.contains("favorites-list-button")){const t=await f("64f389465ae26083f39b18d0");l.exsCont.innerHTML=u(t.data),l.exerciseModal.classList.toggle("is-open");const a=document.querySelector(".ex-rating-active"),o=document.querySelector(".modal-rating-value");a.style.width=await`${parseInt(o.textContent)/.05}%`}}catch(t){throw new Error(t.message)}}function v(){const e=JSON.parse(localStorage.getItem("favoriteData"))||[],t=document.querySelector(".favorites-contanier-block");t.innerHTML="",e.length===0&&(t.innerHTML=`<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`);const a=document.createElement("ul");a.classList.add("favorites-list"),t.appendChild(a);const o=e.map(s=>`
    <li class="favorites-list-item">
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
    `).join("");a.innerHTML=o}document.addEventListener("DOMContentLoaded",v);function m(e){const t=JSON.stringify(g.filter(a=>a._id!==e));localStorage.setItem(p,t)}const x=document.querySelector(".favorites-contanier-block");x.addEventListener("click",e=>{const t=e.target.dataset.id;m(t),v()});
//# sourceMappingURL=commonHelpers.js.map
