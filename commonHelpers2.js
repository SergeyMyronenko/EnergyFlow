import{i as $}from"./assets/add-to-favorites-59f6ea7d.js";import{S as z,a as d,i as A}from"./assets/vendor-e460d164.js";const H=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,E="feedback-form-state",p=document.querySelector(".footer-subscription"),k=p.querySelector(".input-footer"),U=document.querySelector(".footer-button");function w(e){z.fire({position:"center",icon:"error",title:"Enter a valid email!",showConfirmButton:!1,timer:2e3})}function j(e){z.fire({position:"center",icon:"success",title:"Congratulations, you have successfully subscribed!",showConfirmButton:!1,timer:2e3})}const D=async e=>{try{return(await d.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},R=async e=>{e.preventDefault(),U.blur();const t=k.value.trim();if(!H.test(t))w();else{try{await D(t),j("Successful subscription!")}catch(n){w("Error subscribing: "+n.message)}localStorage.removeItem(E),p.reset()}};p.addEventListener("submit",R);p.addEventListener("input",e=>{const t=k.value.trim(),n=JSON.stringify({footerEmail:t});localStorage.setItem(E,n)});function F(){A.success({message:"Operation has been success",messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};c.form.addEventListener("submit",J);c.starsContainer.addEventListener("click",P);function P(e){e.target.classList.contains("rating-label")&&(c.rateValue.textContent=`${e.target.dataset.rate}.0`)}async function J(e){e.preventDefault();try{const t=await d.patch(`https://energyflow.b.goit.study/api/exercises/${$}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()});F()}catch(t){throw new Error(t.message)}finally{_()}}function _(){c.modalBackdrop.classList.remove("is-open"),c.exerciseModal.classList.remove("is-open"),c.rateValue.textContent="0.0",c.form.reset()}d.defaults.baseURL="https://energyflow.b.goit.study/api";const o=document.querySelector(".exersizes-cards-container"),l=document.querySelector(".exersizes-result-card-container"),u=document.querySelector(".exersizes-message-container"),V=document.querySelector(".exersizes-pagination-container"),C=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),W=document.querySelector(".exersizes-input-btn-s"),N=document.querySelector(".dash"),f=document.querySelector(".exercise-name"),q=1,G=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("DOMContentLoaded",T());G.addEventListener("click",e=>{if(console.log(isNaN(parseInt(e.target.textContent.trim()))),e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),T(t),K(),ie(),X(e),x()}});o.addEventListener("click",I);function I(e){if(e.preventDefault(),v(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,n=e.target.dataset.target;M(t,n,q),Z(e),se(),x(),sessionStorage.setItem("filterSubType",JSON.stringify(n)),sessionStorage.setItem("filterType",JSON.stringify(t))}V.addEventListener("click",e=>{if(e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=JSON.parse(sessionStorage.getItem("filterType")),n=e.target.textContent.trim();let r;sessionStorage.getItem("filterSubType")&&(r=JSON.parse(sessionStorage.getItem("filterSubType"))),Q(t,r,n),ee(e),x()}});async function T(e,t,n){const r=await d.get("/filters",{params:y(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");e=r.data.results[0].filter,B(r),S(r)}catch{h()}}async function M(e,t,n){const r=await d.get("/exercises",{params:y(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");O(r),n===1&&S(r)}catch{h()}}async function Y(e,t,n){const r=await d.get("/filters",{params:y(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");e=r.data.results[0].filter,B(r)}catch{h()}}async function Q(e,t,n){t?await M(e,t,n):await Y(e,t,n)}async function L(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;v();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),n=JSON.parse(sessionStorage.getItem("filterType")),r=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const s=await d.get("/exercises",{params:y(n,r,q,t)});if(s.data.results.length===0)throw new Error("No results found...");m(),O(s),S(s)}}catch(s){console.log(s),h()}x()}async function B(e){const t=e.data.results;o.classList.remove("hidden"),l.classList.add("hidden"),u.classList.add("hidden"),o.innerHTML="";const n=t.map(r=>{const s=r.filter,i=r.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${r.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${s}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${s}" data-target="${i}">
          ${r.name[0].toUpperCase()+r.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${s}" data-target="${i}">${r.filter}</p>
      </div></li>`}).join("");o.insertAdjacentHTML("beforeend",n),o.addEventListener("keyup",g)}function g(e){e.keyCode===13&&I(e)}function O(e){const t=e.data.results;o.removeEventListener("keyup",g),l.classList.remove("hidden"),o.classList.add("hidden"),u.classList.add("hidden"),o.removeEventListener("keyup",g),l.innerHTML="";let n;const r=t.map(s=>{let i=s.name;n=s._id;const b=window.innerWidth;return b>=1440?i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."):b<1440&&b>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):(i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter"><div class="exersizes-card" tabindex="0">
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
</div></li>`}).join("");l.insertAdjacentHTML("beforeend",r),l.addEventListener("keyup",g)}async function h(e){o.classList.add("hidden"),l.classList.add("hidden"),u.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",u.innerHTML="";const n='<p class="noresult-message" >Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';u.insertAdjacentHTML("beforeend",n)}function X(e){document.querySelectorAll(".exersizes-menu-btn").forEach(r=>{r.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function Z(e){N.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),f.textContent=e.target.dataset.target.trim()}function K(){f.textContent="",N.classList.add("visually-hidden"),f.classList.add("visually-hidden")}function y(e,t,n,r){const s={page:n,limit:12};if(r&&(s.keyword=r),e&&!t)return s.filter=e,s;if(!e&&!t)return s.filter="Muscles",s;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?s.limit=8:e&&t&&window.innerWidth>=1440&&(s.limit=9),e){case"Muscles":s.muscles=t;break;case"Equipment":s.equipment=t;break;default:s.bodypart=t;break}return s}async function S(e,t){let n="";const r=document.querySelector(".exersizes-pagination-list");if(t){r.innerHTML="";return}const s=e.data.totalPages;if(r.innerHTML="",s>1)for(let i=1;i<=s;i++)i===1?n+=`<li
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
              </li>`;r.insertAdjacentHTML("beforeend",n)}function ee(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),n=e.target;t.classList.remove("exersizes-pagination-item-active"),n.classList.add("exersizes-pagination-item-active")}function te(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function se(){const e=document.querySelector(".exersizes-input");C.classList.remove("hidden"),e.addEventListener("keyup",ne),W.addEventListener("click",L)}function ne(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",m)),e.keyCode===13&&(L(e),m(),a.classList.add("hidden"))}function re(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),m(),a.classList.add("hidden")};a.addEventListener("click",e)}function ie(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",re),e.removeEventListener("click",L),C.classList.add("hidden"),a.classList.add("hidden")}function m(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",m)}function v(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function x(){document.querySelector(".loader").remove()}te();
//# sourceMappingURL=commonHelpers2.js.map
