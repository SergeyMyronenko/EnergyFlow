import{o as z,a as U,i as b}from"./assets/modals-functions-94aef0d2.js";import{a as c}from"./assets/vendor-8cce9181.js";const D=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,C="feedback-form-state",f=document.querySelector(".footer-subscription"),N=f.querySelector(".input-footer"),P=document.querySelector(".footer-button"),_=async e=>{try{return(await c.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},F=async e=>{e.preventDefault(),P.blur();const t=N.value.trim();if(!D.test(t))z("Enter a valid email!");else{try{await _(t),U("Successful subscription!")}catch{z("There is already a user with this email!")}localStorage.removeItem(C),f.reset()}};f.addEventListener("submit",F);f.addEventListener("input",e=>{const t=N.value.trim(),n=JSON.stringify({footerEmail:t});localStorage.setItem(C,n)});c.defaults.baseURL="https://energyflow.b.goit.study/api";const E=document.querySelector(".exersizes-cards-container"),o=document.querySelector(".exersizes-cards-container-wrapper"),k=document.querySelector(".exersizes-result-card-container"),m=document.querySelector(".exersizes-result-card-container-wrapper"),d=document.querySelector(".exersizes-message-container"),J=document.querySelector(".exersizes-pagination-container"),I=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),j=document.querySelector(".exersizes-input-btn-s"),T=document.querySelector(".dash"),p=document.querySelector(".exercise-name"),$=1,W=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");K();document.addEventListener("DOMContentLoaded",A());W.addEventListener("click",e=>{if(e.preventDefault(),h(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),A(t),Q(),ne(),X(e),v()}});o.addEventListener("click",O);function O(e){if(e.preventDefault(),h(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,n=e.target.dataset.target;B(t,n,$),Y(e),ee(),v(),sessionStorage.setItem("filterSubType",JSON.stringify(n)),sessionStorage.setItem("filterType",JSON.stringify(t))}J.addEventListener("click",e=>{if(e.preventDefault(),h(),e.target.nodeName==="BUTTON"){const t=JSON.parse(sessionStorage.getItem("filterType")),n=e.target.textContent.trim();let r;sessionStorage.getItem("filterSubType")&&(r=JSON.parse(sessionStorage.getItem("filterSubType"))),re(),V(t,r,n),Z(e),v()}});async function A(e,t,n){const r=await c.get("/filters",{params:y(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");e=r.data.results[0].filter,M(r),w(r)}catch{g()}}async function B(e,t,n){const r=await c.get("/exercises",{params:y(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");H(r),n===1&&w(r)}catch{g()}}async function G(e,t,n){const r=await c.get("/filters",{params:y(e,t,n)});try{if(r.data.results.length===0)throw new Error("No results found...");e=r.data.results[0].filter,M(r)}catch{g()}}async function V(e,t,n){t?await B(e,t,n):await G(e,t,n)}async function S(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;h();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),n=JSON.parse(sessionStorage.getItem("filterType")),r=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const s=await c.get("/exercises",{params:y(n,r,$,t)});if(s.data.results.length===0)throw new Error("No results found...");H(s),w(s)}}catch{g()}l(),v()}async function M(e){const t=e.data.results;o.classList.remove("hidden"),m.classList.add("hidden"),d.classList.add("hidden"),E.innerHTML="";const n=t.map(r=>{const s=r.filter,i=r.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${r.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${s}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${s}" data-target="${i}">
          ${r.name[0].toUpperCase()+r.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${s}" data-target="${i}">${r.filter}</p>
      </div></li>`}).join("");E.insertAdjacentHTML("beforeend",n),o.addEventListener("keyup",u)}function u(e){e.keyCode===13&&O(e)}function H(e){const t=e.data.results;o.removeEventListener("keyup",u),m.classList.remove("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),o.removeEventListener("keyup",u),k.innerHTML="";let n;const r=t.map(s=>{let i=s.name,x=s.target;n=s._id;const L=window.innerWidth;return L>=1440?(i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."),x.length>=9&&(x=s.target[0].toUpperCase()+s.target.slice(1,8).trim()+"...")):L<1440&&L>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):(i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter" aria-label="Exercise"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate" aria-label="Exercise rating">${Math.round(s.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="Star icon">
                    <use href="${b}#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${n} aria-label="Start button">start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="${b}#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="Runner icon">
                    <use href="${b}#runner"></use>
                </svg>
                <h3 class="exersizes-card-title-h" aria-description="${s.name}">${i}</h3>
    </div>
    <ul class="exersizes-card-info-list">
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr" aria-description="How much calories you burn during a certain amount of time">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories aria-label="Calories time">${s.burnedCalories} / ${s.time} min</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr" aria-label="Body part">Body part:
            <span class="exersizes-card-info-data" data-body-type>${s.bodyPart[0].toUpperCase()+s.bodyPart.slice(1)}</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr" aria-label="Exercise name">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${x}</span></p></li>
    </ul>
</div></li>`}).join("");k.insertAdjacentHTML("beforeend",r),m.addEventListener("keyup",u)}async function g(e){o.classList.add("hidden"),m.classList.add("hidden"),d.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",d.innerHTML="";const n='<p class="noresult-message" aria-label="Error message">Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';d.insertAdjacentHTML("beforeend",n)}function X(e){document.querySelectorAll(".exersizes-menu-btn").forEach(r=>{r.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function Y(e){T.classList.remove("visually-hidden"),p.classList.remove("visually-hidden"),p.textContent=e.target.dataset.target.trim()}function Q(){p.textContent="",T.classList.add("visually-hidden"),p.classList.add("visually-hidden")}function y(e,t,n,r){const s={page:n,limit:12};if(r&&(s.keyword=r),e&&!t)return s.filter=e,s;if(!e&&!t)return s.filter="Muscles",s;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?s.limit=8:e&&t&&window.innerWidth>=1440&&(s.limit=9),e){case"Muscles":s.muscles=t;break;case"Equipment":s.equipment=t;break;default:s.bodypart=t;break}return s}async function w(e,t){let n="";const r=document.querySelector(".exersizes-pagination-list");if(t){r.innerHTML="";return}const s=e.data.totalPages;if(r.innerHTML="",s>1)for(let i=1;i<=s;i++)i===1?n+=`<li
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
              </li>`;r.insertAdjacentHTML("beforeend",n)}function Z(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),n=e.target;t.classList.remove("exersizes-pagination-item-active"),n.classList.add("exersizes-pagination-item-active")}function K(){window.scrollY>120?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function ee(){const e=document.querySelector(".exersizes-input");I.classList.remove("hidden"),e.addEventListener("keyup",te),j.addEventListener("click",S)}function te(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",l)),e.keyCode===13&&(S(e),l(),a.classList.add("hidden"))}function se(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),l(),a.classList.add("hidden")};a.addEventListener("click",e)}function ne(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",se),e.removeEventListener("click",S),I.classList.add("hidden"),a.classList.add("hidden")}function l(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",l)}function h(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function v(){document.querySelector(".loader").remove()}function re(){const t=document.querySelector(".exersizes-container").getBoundingClientRect().y;window.scrollBy({top:t,behavior:"smooth"})}function ie(){const e=document.querySelector(".footer-policy"),t=document.querySelector(".footer-service"),n=document.querySelector(".modal-overlay"),r=document.querySelector(".policy-modal-overlay");e.addEventListener("click",()=>r.classList.add("is-open")),t.addEventListener("click",()=>n.classList.add("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open"))}const R=window.location.pathname,ae=R.lastIndexOf("/"),q=R.substring(ae);(q==="/index.html"||q==="/")&&ie();
//# sourceMappingURL=commonHelpers2.js.map
