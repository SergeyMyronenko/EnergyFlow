import{o as z,a as D,i as x}from"./assets/modals-functions-ac04957f.js";import{a as c}from"./assets/vendor-8cce9181.js";const _=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,q="feedback-form-state",f=document.querySelector(".footer-subscription"),C=f.querySelector(".input-footer"),P=document.querySelector(".footer-button"),U=async e=>{try{return(await c.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},F=async e=>{e.preventDefault(),P.blur();const t=C.value.trim();if(!_.test(t))z("Enter a valid email!");else{try{await U(t),D("Successful subscription!")}catch{z("There is already a user with this email!")}localStorage.removeItem(q),f.reset()}};f.addEventListener("submit",F);f.addEventListener("input",e=>{const t=C.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(q,s)});c.defaults.baseURL="https://energyflow.b.goit.study/api";const E=document.querySelector(".exersizes-cards-container"),o=document.querySelector(".exersizes-cards-container-wrapper"),k=document.querySelector(".exersizes-result-card-container"),p=document.querySelector(".exersizes-result-card-container-wrapper"),d=document.querySelector(".exersizes-message-container"),j=document.querySelector(".exersizes-pagination-container"),I=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),J=document.querySelector(".exersizes-input-btn-s"),T=document.querySelector(".dash"),g=document.querySelector(".exercise-name"),$=1,G=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("DOMContentLoaded",M());G.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="BUTTON"){{u();const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),M(t),S(),Y(),se(),X(e)}h()}});o.addEventListener("click",A);function A(e){if(e.preventDefault(),u(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;u();const t=e.target.dataset.filter,s=e.target.dataset.target;O(t,s,$),h(),S(),Q(e),K(),sessionStorage.setItem("filterSubType",JSON.stringify(s)),sessionStorage.setItem("filterType",JSON.stringify(t))}j.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="BUTTON"){{u();const t=JSON.parse(sessionStorage.getItem("filterType")),s=e.target.textContent.trim();let r;sessionStorage.getItem("filterSubType")&&(r=JSON.parse(sessionStorage.getItem("filterSubType"))),S(),V(t,r,s),Z(e)}h()}});async function M(e,t,s){const r=await c.get("/filters",{params:v(e,t,s)});try{if(r.data.results.length===0)throw new Error("No results found...");e=r.data.results[0].filter,B(r),b(r)}catch{y()}}async function O(e,t,s){const r=await c.get("/exercises",{params:v(e,t,s)});try{if(r.data.results.length===0)throw new Error("No results found...");H(r),s===1&&b(r)}catch{y()}}async function W(e,t,s){const r=await c.get("/filters",{params:v(e,t,s)});try{if(r.data.results.length===0)throw new Error("No results found...");e=r.data.results[0].filter,B(r)}catch{y()}}async function V(e,t,s){t?await O(e,t,s):await W(e,t,s)}async function L(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;u();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),s=JSON.parse(sessionStorage.getItem("filterType")),r=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const n=await c.get("/exercises",{params:v(s,r,$,t)});if(n.data.results.length===0)throw new Error("No results found...");H(n),b(n)}}catch{y()}l(),h()}async function B(e){const t=e.data.results;o.classList.remove("hidden"),p.classList.add("hidden"),d.classList.add("hidden"),E.innerHTML="";const s=t.map(r=>{const n=r.filter,i=r.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${r.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${n}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${n}" data-target="${i}">
          ${r.name[0].toUpperCase()+r.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${n}" data-target="${i}">${r.filter}</p>
      </div></li>`}).join("");E.insertAdjacentHTML("beforeend",s),o.addEventListener("keyup",m)}function m(e){e.keyCode===13&&A(e)}function H(e){const t=e.data.results;o.removeEventListener("keyup",m),p.classList.remove("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),o.removeEventListener("keyup",m),k.innerHTML="";let s;const r=t.map(n=>{let i=n.name,w=n.target;return s=n._id,`<li class="second-filter" aria-label="Exercise"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate" aria-label="Exercise rating">${Math.round(n.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="Star icon">
                    <use href="${x}#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${s} aria-label="Start button">start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="${x}#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="Runner icon">
                    <use href="${x}#runner"></use>
                </svg>
                <div class="card-title-wrapper">
                <h3 class="exersizes-card-title-h card-title-last">${i}</h3></div>
    </div>
    <div class="just-wrapper">
   
        <p class="exersizes-card-info-descr" aria-description="How much calories you burn during a certain amount of time">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories aria-label="Calories time">${n.burnedCalories} / ${n.time} min</span><p>
        <p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${n.bodyPart[0].toUpperCase()+n.bodyPart.slice(1)}</span></p>
        <p class="exersizes-card-info-descr last">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${w[0].toUpperCase()+w.slice(1)}</span></p>
   
    </div>
</div></li>`}).join("");k.insertAdjacentHTML("beforeend",r),p.addEventListener("keyup",m)}async function y(e){o.classList.add("hidden"),p.classList.add("hidden"),d.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",d.innerHTML="";const s='<p class="noresult-message" aria-label="Error message">Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';d.insertAdjacentHTML("beforeend",s)}function X(e){document.querySelectorAll(".exersizes-menu-btn").forEach(r=>{r.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function Q(e){T.classList.remove("visually-hidden"),g.classList.remove("visually-hidden"),g.textContent=e.target.dataset.target.trim()}function Y(){g.textContent="",T.classList.add("visually-hidden"),g.classList.add("visually-hidden")}function v(e,t,s,r){const n={page:s,limit:12};if(r&&(n.keyword=r),e&&!t)return n.filter=e,n;if(!e&&!t)return n.filter="Muscles",n;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?n.limit=8:e&&t&&window.innerWidth>=1440&&(n.limit=9),e){case"Muscles":n.muscles=t;break;case"Equipment":n.equipment=t;break;default:n.bodypart=t;break}return n}async function b(e,t){let s="";const r=document.querySelector(".exersizes-pagination-list");if(t){r.innerHTML="";return}const n=e.data.totalPages;if(r.innerHTML="",n>1)for(let i=1;i<=n;i++)i===1?s+=`<li
                class="exersizes-pagination-item exersizes-pagination-item-active"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`:s+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`;r.insertAdjacentHTML("beforeend",s)}function Z(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),s=e.target;t.classList.remove("exersizes-pagination-item-active"),s.classList.add("exersizes-pagination-item-active")}function K(){const e=document.querySelector(".exersizes-input");I.classList.remove("hidden"),e.addEventListener("keyup",ee),J.addEventListener("click",L)}function ee(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",l)),e.keyCode===13&&(L(e),l(),a.classList.add("hidden"))}function te(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),l(),a.classList.add("hidden")};a.addEventListener("click",e)}function se(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",te),e.removeEventListener("click",L),I.classList.add("hidden"),a.classList.add("hidden")}function l(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",l)}function u(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function h(){document.querySelector(".loader").remove()}function S(){const t=document.querySelector(".exersizes-container").getBoundingClientRect().y;window.scrollBy({top:t,behavior:"smooth"})}function re(){const e=document.querySelector(".footer-policy"),t=document.querySelector(".footer-service"),s=document.querySelector(".modal-overlay"),r=document.querySelector(".policy-modal-overlay");e.addEventListener("click",()=>r.classList.add("is-open")),t.addEventListener("click",()=>s.classList.add("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open"))}const R=window.location.pathname,ne=R.lastIndexOf("/"),N=R.substring(ne);(N==="/index.html"||N==="/")&&re();
//# sourceMappingURL=commonHelpers2.js.map
