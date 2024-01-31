import{i as R}from"./assets/add-to-favorites-5bc07e13.js";import{S as C,a as d,i as D}from"./assets/vendor-e460d164.js";const U=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,N="feedback-form-state",p=document.querySelector(".footer-subscription"),q=p.querySelector(".input-footer"),j=document.querySelector(".footer-button");function z(e){C.fire({position:"center",icon:"error",title:"Enter a valid email!",showConfirmButton:!1,timer:2e3})}function _(e){C.fire({position:"center",icon:"success",title:"Congratulations, you have successfully subscribed!",showConfirmButton:!1,timer:2e3})}const F=async e=>{try{return(await d.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},P=async e=>{e.preventDefault(),j.blur();const t=q.value.trim();if(!U.test(t))z();else{try{await F(t),_("Successful subscription!")}catch(r){z("Error subscribing: "+r.message)}localStorage.removeItem(N),p.reset()}};p.addEventListener("submit",P);p.addEventListener("input",e=>{const t=q.value.trim(),r=JSON.stringify({footerEmail:t});localStorage.setItem(N,r)});function J(){D.success({message:"Operation has been success",messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const o={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};o.form.addEventListener("submit",V);o.starsContainer.addEventListener("click",G);function G(e){e.target.classList.contains("rating-label")&&(o.rateValue.textContent=`${e.target.dataset.rate}.0`)}async function V(e){e.preventDefault();try{const t=await d.patch(`https://energyflow.b.goit.study/api/exercises/${R}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()});J()}catch(t){throw new Error(t.message)}finally{W()}}function W(){o.modalBackdrop.classList.remove("is-open"),o.exerciseModal.classList.remove("is-open"),o.rateValue.textContent="0.0",o.form.reset()}d.defaults.baseURL="https://energyflow.b.goit.study/api";const c=document.querySelector(".exersizes-cards-container-wrapper"),E=document.querySelector(".exersizes-cards-container"),g=document.querySelector(".exersizes-result-card-container-wrapper"),k=document.querySelector(".exersizes-result-card-container"),l=document.querySelector(".exersizes-message-container"),X=document.querySelector(".exersizes-pagination-container"),I=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),Y=document.querySelector(".exersizes-input-btn-s"),T=document.querySelector(".dash"),f=document.querySelector(".exercise-name"),M=1,Q=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");ne();document.addEventListener("DOMContentLoaded",A());Q.addEventListener("click",e=>{if(e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),A(t),se(),ce(),ee(e),x()}});c.addEventListener("click",B);function B(e){if(e.preventDefault(),v(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,r=e.target.dataset.target;O(t,r,M),te(e),ie(),x(),sessionStorage.setItem("filterSubType",JSON.stringify(r)),sessionStorage.setItem("filterType",JSON.stringify(t))}X.addEventListener("click",e=>{if(e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=JSON.parse(sessionStorage.getItem("filterType")),r=e.target.textContent.trim();let n;sessionStorage.getItem("filterSubType")&&(n=JSON.parse(sessionStorage.getItem("filterSubType"))),K(t,n,r),re(e),x()}});async function A(e,t,r){const n=await d.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,$(n),w(n)}catch{h()}}async function O(e,t,r){const n=await d.get("/exercises",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");H(n),r===1&&w(n)}catch{h()}}async function Z(e,t,r){const n=await d.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,$(n)}catch{h()}}async function K(e,t,r){t?await O(e,t,r):await Z(e,t,r)}async function S(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;v();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),r=JSON.parse(sessionStorage.getItem("filterType")),n=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const s=await d.get("/exercises",{params:y(r,n,M,t)});if(s.data.results.length===0)throw new Error("No results found...");u(),H(s),w(s)}}catch(s){console.log(s),h()}x()}async function $(e){const t=e.data.results;c.classList.remove("hidden"),g.classList.add("hidden"),l.classList.add("hidden"),E.innerHTML="";const r=t.map(n=>{const s=n.filter,i=n.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${n.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${s}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${s}" data-target="${i}">
          ${n.name[0].toUpperCase()+n.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${s}" data-target="${i}">${n.filter}</p>
      </div></li>`}).join("");E.insertAdjacentHTML("beforeend",r),c.addEventListener("keyup",m)}function m(e){e.keyCode===13&&B(e)}function H(e){const t=e.data.results;c.removeEventListener("keyup",m),g.classList.remove("hidden"),c.classList.add("hidden"),l.classList.add("hidden"),c.removeEventListener("keyup",m),k.innerHTML="";let r;const n=t.map(s=>{let i=s.name,L=s.target;r=s._id;const b=window.innerWidth;return b>=1440?(i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."),L.length>12&&(L=s.target[0].toUpperCase()+s.target.slice(1,8).trim()+"...")):b<1440&&b>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):(i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter"><div class="exersizes-card" tabindex="0">
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
                    <use href="./img/sprite.svg#runner"></use>
                </svg>
                <h3 class="exersizes-card-title-h">${i}</h3>
    </div>
    <ul class="exersizes-card-info-list">
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories>${s.burnedCalories} / ${s.time} min</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${s.bodyPart[0].toUpperCase()+s.bodyPart.slice(1)}</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${L}</span></p></li>
    </ul>
</div></li>`}).join("");k.insertAdjacentHTML("beforeend",n),g.addEventListener("keyup",m)}async function h(e){c.classList.add("hidden"),g.classList.add("hidden"),l.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",l.innerHTML="";const r='<p class="noresult-message" >Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';l.insertAdjacentHTML("beforeend",r)}function ee(e){document.querySelectorAll(".exersizes-menu-btn").forEach(n=>{n.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function te(e){T.classList.remove("visually-hidden"),f.classList.remove("visually-hidden"),f.textContent=e.target.dataset.target.trim()}function se(){f.textContent="",T.classList.add("visually-hidden"),f.classList.add("visually-hidden")}function y(e,t,r,n){const s={page:r,limit:12};if(n&&(s.keyword=n),e&&!t)return s.filter=e,s;if(!e&&!t)return s.filter="Muscles",s;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?s.limit=8:e&&t&&window.innerWidth>=1440&&(s.limit=9),e){case"Muscles":s.muscles=t;break;case"Equipment":s.equipment=t;break;default:s.bodypart=t;break}return s}async function w(e,t){let r="";const n=document.querySelector(".exersizes-pagination-list");if(t){n.innerHTML="";return}const s=e.data.totalPages;if(n.innerHTML="",s>1)for(let i=1;i<=s;i++)i===1?r+=`<li
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
              </li>`;n.insertAdjacentHTML("beforeend",r)}function re(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),r=e.target;t.classList.remove("exersizes-pagination-item-active"),r.classList.add("exersizes-pagination-item-active")}function ne(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function ie(){const e=document.querySelector(".exersizes-input");I.classList.remove("hidden"),e.addEventListener("keyup",ae),Y.addEventListener("click",S)}function ae(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",u)),e.keyCode===13&&(S(e),u(),a.classList.add("hidden"))}function oe(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),u(),a.classList.add("hidden")};a.addEventListener("click",e)}function ce(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",oe),e.removeEventListener("click",S),I.classList.add("hidden"),a.classList.add("hidden")}function u(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",u)}function v(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function x(){document.querySelector(".loader").remove()}
//# sourceMappingURL=commonHelpers2.js.map
