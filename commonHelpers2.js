import{a as I}from"./assets/add-to-favorites-d4132a27.js";import{S as w,a as c}from"./assets/vendor-20b07447.js";const T=document.querySelector(".header-burger"),z=document.querySelector(".mobile-menu-wrapper"),A=document.querySelector(".mobile-menu-close-btn"),$=document.querySelector(".mobile-menu-btn-content-home"),H=document.querySelector(".mobile-menu-btn-content-favorites");function O(){z.classList.remove("visually-hidden")}function D(){z.classList.add("visually-hidden")}T.addEventListener("click",O);A.addEventListener("click",D);$.addEventListener("click",()=>{window.location.href="./"});H.addEventListener("click",()=>{window.location.href="favorites.html"});const U=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,E="feedback-form-state",g=document.querySelector(".footer-subscription"),q=g.querySelector(".input-footer"),R=document.querySelector(".footer-button");function S(e){w.fire({position:"center",icon:"error",title:"Enter a valid email!",showConfirmButton:!1,timer:2e3})}function j(e){w.fire({position:"center",icon:"success",title:"Congratulations, you have successfully subscribed!",showConfirmButton:!1,timer:2e3})}const P=async e=>{try{return(await c.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},_=async e=>{e.preventDefault(),R.blur();const t=q.value.trim();if(!U.test(t))S();else{try{await P(t),j("Successful subscription!")}catch(n){S("Error subscribing: "+n.message)}localStorage.removeItem(E),g.reset()}};g.addEventListener("submit",_);g.addEventListener("input",e=>{const t=q.value.trim(),n=JSON.stringify({footerEmail:t});localStorage.setItem(E,n)});const a={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),stars:document.querySelectorAll(".rating-label"),openRatingBtn:document.querySelector(".modal-button-rating")};a.form.addEventListener("submit",F);a.stars.forEach(e=>{e.addEventListener("click",k)});function k(e){a.rateValue.textContent=`${e.target.dataset.rate}.0`}async function F(e){e.preventDefault();try{const t=await c.patch(`https://energyflow.b.goit.study/api/exercises/${I}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()})}catch(t){throw new Error(t.message)}finally{a.modalBackdrop.classList.remove("is-open"),a.exerciseModal.classList.remove("is-open"),e.target.reset(),a.stars.forEach(t=>{t.removeEventListener("click",k)})}}c.defaults.baseURL="https://energyflow.b.goit.study/api";const o=document.querySelector(".exersizes-cards-container"),l=document.querySelector(".exersizes-result-card-container"),d=document.querySelector(".exersizes-message-container"),W=document.querySelector(".exersizes-pagination-container"),C=document.querySelector(".dash"),m=document.querySelector(".exercise-name"),N=1,G=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("DOMContentLoaded",v());G.addEventListener("click",e=>{if(e.preventDefault(),p(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),v(t),X(),ne(),Y(e),f()}});o.addEventListener("click",e=>{if(e.preventDefault(),p(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,n=e.target.dataset.target;B(t,n,N),Q(e),ee(),f(),sessionStorage.setItem("filterSubType",JSON.stringify(n)),sessionStorage.setItem("filterType",JSON.stringify(t))});W.addEventListener("click",e=>{if(e.preventDefault(),p(),e.target.nodeName==="BUTTON"){const t=sessionStorage.getItem("filterType").slice(1,-1),n=e.target.textContent.trim();let r;sessionStorage.getItem("filterSubType")?r=sessionStorage.getItem("filterSubType").slice(1,-1):r=sessionStorage.getItem("filterSubType"),J(t,r,n),Z(e),f()}});async function v(e,t,n){const r=await c.get("/filters",{params:x(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");e=r.data.results[0].filter,V(r),L(r)}catch{b()}}async function B(e,t,n){const r=await c.get("/exercises",{params:x(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");M(r),n===1&&L(r)}catch{b()}}async function J(e,t,n){t?await B(e,t,n):await v(e,t,n)}async function h(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;p();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),n=sessionStorage.getItem("filterType").slice(1,-1),r=sessionStorage.getItem("filterSubType").slice(1,-1);try{if(t.length===0)throw new Error("Nthing to search...");{const s=await c.get("/exercises",{params:x(n,r,N,t)});if(s.data.results.length===0)throw new Error("No results found...");u(),M(s),L(s),f()}}catch(s){console.log(s),b()}}async function V(e){const t=e.data.results;o.classList.remove("visually-hidden"),l.classList.add("visually-hidden"),d.classList.add("visually-hidden"),o.innerHTML="";const n=t.map(r=>{const s=r.filter,i=r.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${r.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${s}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${s}" data-target="${i}">
          ${r.name[0].toUpperCase()+r.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${s}" data-target="${i}">${r.filter}</p>
      </div></li>`}).join("");o.insertAdjacentHTML("beforeend",n)}function M(e){const t=e.data.results;l.classList.remove("visually-hidden"),o.classList.add("visually-hidden"),d.classList.add("visually-hidden"),l.innerHTML="";let n;const r=t.map(s=>{let i=s.name;n=s._id;const y=window.innerWidth;return y>=1440?i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."):y<1440&&y>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):(i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate">${Math.round(s.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="rate-icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${n}>start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="./img/sprite.svg#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="man-icon">
                    <use href="./img/sprite.svg#dude"></use>
                </svg>
                <h3 class="exersizes-card-title-h">${i}</h3>
    </div>
    <ul class="exersizes-card-info-list">
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories>${s.burnedCalories} / ${s.time} min</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${s.bodyPart[0].toUpperCase()+s.bodyPart.slice(1)}</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${s.target[0].toUpperCase()+s.target.slice(1)}</span></p></li>
    </ul>
</div></li>`}).join("");l.insertAdjacentHTML("beforeend",r)}async function b(e){o.classList.add("visually-hidden"),l.classList.add("visually-hidden"),d.classList.remove("visually-hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",d.innerHTML="";const n='<p class="noresult-message" >Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';d.insertAdjacentHTML("beforeend",n)}function Y(e){document.querySelectorAll(".exersizes-menu-btn").forEach(r=>{r.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function Q(e){C.classList.remove("visually-hidden"),m.classList.remove("visually-hidden"),m.textContent=e.target.dataset.target.trim()}function X(){m.textContent="",C.classList.add("visually-hidden"),m.classList.add("visually-hidden")}function x(e,t,n,r){const s={page:n,limit:12};if(r&&(s.keyword=r),e&&!t)return s.filter=e,s;if(!e&&!t)return s.filter="Muscles",s;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?s.limit=8:e&&t&&window.innerWidth>=1440&&(s.limit=9),e){case"Muscles":s.muscles=t;break;case"Equipment":s.equipment=t;break;default:s.bodypart=t;break}return s}async function L(e,t){let n="";const r=document.querySelector(".exersizes-pagination-list");if(t){r.innerHTML="";return}const s=e.data.totalPages;if(r.innerHTML="",s>1)for(let i=1;i<=s;i++)i===1?n+=`<li
                class="exersizes-pagination-item exersizes-pagination-item-active"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`:n+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`;r.insertAdjacentHTML("beforeend",n)}function Z(e){e.target.textContent.trim(),document.querySelector(".exersizes-pagination-item-active").classList.remove("exersizes-pagination-item-active"),e.target.classList.add("exersizes-pagination-item-active")}function K(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function ee(){const e=document.querySelector(".exersizes-input"),t=document.querySelector(".exersizes-input-btn-s"),n=document.querySelector(".exersizes-input-container");document.querySelector(".exersizes-input-btn"),n.classList.remove("visually-hidden"),e.addEventListener("keyup",te),t.addEventListener("click",h)}function te(e){const t=document.querySelector(".exersizes-input-btn");t.classList.remove("visually-hidden"),e.target.value.trim().length>0&&(t.classList.remove("visually-hidden"),t.addEventListener("click",u)),e.keyCode===13&&(h(e),u(),t.classList.add("visually-hidden"))}function se(){const e=document.querySelector(".exersizes-input-btn");e.classList.remove("visually-hidden");const t=n=>{n.preventDefault(),u(),e.classList.add("visually-hidden")};e.addEventListener("click",t)}function ne(){const e=document.querySelector(".exersizes-input");document.querySelector(".exersizes-input-btn-s");const t=document.querySelector(".exersizes-input-container"),n=document.querySelector(".exersizes-input-btn");e.removeEventListener("input",se),e.removeEventListener("click",h),t.classList.add("visually-hidden"),n.classList.add("visually-hidden")}function u(){const e=document.querySelector(".exersizes-input"),t=document.querySelector(".exersizes-input-btn");e.value="",t.classList.add("visually-hidden"),t.removeEventListener("click",u)}function p(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function f(){document.querySelector(".loader").remove()}K();
//# sourceMappingURL=commonHelpers2.js.map
