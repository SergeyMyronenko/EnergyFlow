import{a as O}from"./assets/add-to-favorites-d0531153.js";import{S as z,a as c}from"./assets/vendor-20b07447.js";const H=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,E="feedback-form-state",f=document.querySelector(".footer-subscription"),k=f.querySelector(".input-footer"),D=document.querySelector(".footer-button");function S(e){z.fire({position:"center",icon:"error",title:"Enter a valid email!",showConfirmButton:!1,timer:2e3})}function U(e){z.fire({position:"center",icon:"success",title:"Congratulations, you have successfully subscribed!",showConfirmButton:!1,timer:2e3})}const R=async e=>{try{return(await c.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},j=async e=>{e.preventDefault(),D.blur();const t=k.value.trim();if(!H.test(t))S();else{try{await R(t),U("Successful subscription!")}catch(r){S("Error subscribing: "+r.message)}localStorage.removeItem(E),f.reset()}};f.addEventListener("submit",j);f.addEventListener("input",e=>{const t=k.value.trim(),r=JSON.stringify({footerEmail:t});localStorage.setItem(E,r)});const l={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),stars:document.querySelectorAll(".rating-label"),openRatingBtn:document.querySelector(".modal-button-rating")};l.form.addEventListener("submit",P);l.stars.forEach(e=>{e.addEventListener("click",N)});function N(e){l.rateValue.textContent=`${e.target.dataset.rate}.0`}async function P(e){e.preventDefault();try{const t=await c.patch(`https://energyflow.b.goit.study/api/exercises/${O}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()})}catch(t){throw new Error(t.message)}finally{l.modalBackdrop.classList.remove("is-open"),l.exerciseModal.classList.remove("is-open"),e.target.reset(),l.stars.forEach(t=>{t.removeEventListener("click",N)})}}c.defaults.baseURL="https://energyflow.b.goit.study/api";const o=document.querySelector(".exersizes-cards-container"),d=document.querySelector(".exersizes-result-card-container"),u=document.querySelector(".exersizes-message-container"),F=document.querySelector(".exersizes-pagination-container"),C=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),J=document.querySelector(".exersizes-input-btn-s"),q=document.querySelector(".dash"),p=document.querySelector(".exercise-name"),I=1,_=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("DOMContentLoaded",B());_.addEventListener("click",e=>{if(console.log(isNaN(parseInt(e.target.textContent.trim()))),e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),B(t),Q(),se(),V(e),x()}});o.addEventListener("click",T);function T(e){if(e.preventDefault(),v(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,r=e.target.dataset.target;M(t,r,I),Y(e),K(),x(),sessionStorage.setItem("filterSubType",JSON.stringify(r)),sessionStorage.setItem("filterType",JSON.stringify(t))}F.addEventListener("click",e=>{if(e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=JSON.parse(sessionStorage.getItem("filterType")),r=e.target.textContent.trim();let n;sessionStorage.getItem("filterSubType")&&(n=JSON.parse(sessionStorage.getItem("filterSubType"))),G(t,n,r),X(e),x()}});async function B(e,t,r){const n=await c.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,A(n),w(n)}catch{h()}}async function M(e,t,r){const n=await c.get("/exercises",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");$(n),r===1&&w(n)}catch{h()}}async function W(e,t,r){const n=await c.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,A(n)}catch{h()}}async function G(e,t,r){t?await M(e,t,r):await W(e,t,r)}async function b(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;v();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),r=JSON.parse(sessionStorage.getItem("filterType")),n=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const s=await c.get("/exercises",{params:y(r,n,I,t)});if(s.data.results.length===0)throw new Error("No results found...");m(),$(s),w(s)}}catch(s){console.log(s),h()}x()}async function A(e){const t=e.data.results;o.classList.remove("hidden"),d.classList.add("hidden"),u.classList.add("hidden"),o.innerHTML="";const r=t.map(n=>{const s=n.filter,i=n.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${n.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${s}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${s}" data-target="${i}">
          ${n.name[0].toUpperCase()+n.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${s}" data-target="${i}">${n.filter}</p>
      </div></li>`}).join("");o.insertAdjacentHTML("beforeend",r),o.addEventListener("keyup",g)}function g(e){e.keyCode===13&&T(e)}function $(e){const t=e.data.results;o.removeEventListener("keyup",g),d.classList.remove("hidden"),o.classList.add("hidden"),u.classList.add("hidden"),o.removeEventListener("keyup",g),d.innerHTML="";let r;const n=t.map(s=>{let i=s.name;r=s._id;const L=window.innerWidth;return L>=1440?i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."):L<1440&&L>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):(i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter"><div class="exersizes-card" tabindex="0">
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
       <button class="exersizes-card-btn" type="button" data-id=${r}>start 
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
</div></li>`}).join("");d.insertAdjacentHTML("beforeend",n),d.addEventListener("keyup",g)}async function h(e){o.classList.add("hidden"),d.classList.add("hidden"),u.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",u.innerHTML="";const r='<p class="noresult-message" >Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';u.insertAdjacentHTML("beforeend",r)}function V(e){document.querySelectorAll(".exersizes-menu-btn").forEach(n=>{n.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function Y(e){q.classList.remove("visually-hidden"),p.classList.remove("visually-hidden"),p.textContent=e.target.dataset.target.trim()}function Q(){p.textContent="",q.classList.add("visually-hidden"),p.classList.add("visually-hidden")}function y(e,t,r,n){const s={page:r,limit:12};if(n&&(s.keyword=n),e&&!t)return s.filter=e,s;if(!e&&!t)return s.filter="Muscles",s;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?s.limit=8:e&&t&&window.innerWidth>=1440&&(s.limit=9),e){case"Muscles":s.muscles=t;break;case"Equipment":s.equipment=t;break;default:s.bodypart=t;break}return s}async function w(e,t){let r="";const n=document.querySelector(".exersizes-pagination-list");if(t){n.innerHTML="";return}const s=e.data.totalPages;if(n.innerHTML="",s>1)for(let i=1;i<=s;i++)i===1?r+=`<li
                class="exersizes-pagination-item exersizes-pagination-item-active"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`:r+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`;n.insertAdjacentHTML("beforeend",r)}function X(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),r=e.target;t.classList.remove("exersizes-pagination-item-active"),r.classList.add("exersizes-pagination-item-active")}function Z(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function K(){const e=document.querySelector(".exersizes-input");C.classList.remove("hidden"),e.addEventListener("keyup",ee),J.addEventListener("click",b)}function ee(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",m)),e.keyCode===13&&(b(e),m(),a.classList.add("hidden"))}function te(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),m(),a.classList.add("hidden")};a.addEventListener("click",e)}function se(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",te),e.removeEventListener("click",b),C.classList.add("hidden"),a.classList.add("hidden")}function m(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",m)}function v(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function x(){document.querySelector(".loader").remove()}Z();
//# sourceMappingURL=commonHelpers2.js.map
