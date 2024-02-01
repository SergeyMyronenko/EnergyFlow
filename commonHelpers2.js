import{o as S,a as H,i as x}from"./assets/modals-functions-35ec3c31.js";import{a as c}from"./assets/vendor-8cce9181.js";const R=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,k="feedback-form-state",f=document.querySelector(".footer-subscription"),N=f.querySelector(".input-footer"),U=document.querySelector(".footer-button"),D=async e=>{try{return(await c.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},P=async e=>{e.preventDefault(),U.blur();const t=N.value.trim();if(!R.test(t))S("Enter a valid email!");else{try{await D(t),H("Successful subscription!")}catch{S("There is already a user with this email!")}localStorage.removeItem(k),f.reset()}};f.addEventListener("submit",P);f.addEventListener("input",e=>{const t=N.value.trim(),r=JSON.stringify({footerEmail:t});localStorage.setItem(k,r)});c.defaults.baseURL="https://energyflow.b.goit.study/api";const w=document.querySelector(".exersizes-cards-container"),o=document.querySelector(".exersizes-cards-container-wrapper"),z=document.querySelector(".exersizes-result-card-container"),m=document.querySelector(".exersizes-result-card-container-wrapper"),d=document.querySelector(".exersizes-message-container"),_=document.querySelector(".exersizes-pagination-container"),q=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),F=document.querySelector(".exersizes-input-btn-s"),C=document.querySelector(".dash"),p=document.querySelector(".exercise-name"),I=1,J=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");Q();document.addEventListener("DOMContentLoaded",$());J.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),$(t),X(),te(),G(e)}});o.addEventListener("click",T);function T(e){if(e.preventDefault(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,r=e.target.dataset.target;O(t,r,I),V(e),Z(),sessionStorage.setItem("filterSubType",JSON.stringify(r)),sessionStorage.setItem("filterType",JSON.stringify(t))}_.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="BUTTON"){const t=JSON.parse(sessionStorage.getItem("filterType")),r=e.target.textContent.trim();let n;sessionStorage.getItem("filterSubType")&&(n=JSON.parse(sessionStorage.getItem("filterSubType"))),se(),W(t,n,r),Y(e)}});async function $(e,t,r){const n=await c.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,B(n),b(n)}catch{g()}}async function O(e,t,r){const n=await c.get("/exercises",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");A(n),r===1&&b(n)}catch{g()}}async function j(e,t,r){const n=await c.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,B(n)}catch{g()}}async function W(e,t,r){t?await O(e,t,r):await j(e,t,r)}async function L(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),r=JSON.parse(sessionStorage.getItem("filterType")),n=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const s=await c.get("/exercises",{params:y(r,n,I,t)});if(s.data.results.length===0)throw new Error("No results found...");A(s),b(s)}}catch{g()}l()}async function B(e){const t=e.data.results;o.classList.remove("hidden"),m.classList.add("hidden"),d.classList.add("hidden"),w.innerHTML="";const r=t.map(n=>{const s=n.filter,i=n.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${n.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${s}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${s}" data-target="${i}">
          ${n.name[0].toUpperCase()+n.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${s}" data-target="${i}">${n.filter}</p>
      </div></li>`}).join("");w.insertAdjacentHTML("beforeend",r),o.addEventListener("keyup",u)}function u(e){e.keyCode===13&&T(e)}function A(e){const t=e.data.results;o.removeEventListener("keyup",u),m.classList.remove("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),o.removeEventListener("keyup",u),z.innerHTML="";let r;const n=t.map(s=>{let i=s.name,h=s.target;r=s._id;const v=window.innerWidth;return v>=1440?(i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."),h.length>=9&&(h=s.target[0].toUpperCase()+s.target.slice(1,8).trim()+"...")):v<1440&&v>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",`        <li class="second-filter" aria-label="Exercise"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate" aria-label="Exercise rating">${Math.round(s.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="Star icon">
                    <use href="${x}#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${r} aria-label="Start button">start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="${x}#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="Runner icon">
                    <use href="${x}#runner"></use>
                </svg>
                <h3 class="exersizes-card-title-h" aria-description="${s.name}">${i}</h3>
    </div>
    <ul class="exersizes-card-info-list">
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr" aria-description="How much calories you burn during a certain amount of time">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories aria-label="Calories time">${s.burnedCalories} / ${s.time} min</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr" aria-label="Body part">Body part:
            <span class="exersizes-card-info-data" data-body-type>${s.bodyPart[0].toUpperCase()+s.bodyPart.slice(1)}</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr" aria-label="Exercise name">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${h}</span></p></li>
    </ul>
</div></li>`}).join("");z.insertAdjacentHTML("beforeend",n),m.addEventListener("keyup",u)}async function g(e){o.classList.add("hidden"),m.classList.add("hidden"),d.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",d.innerHTML="";const r='<p class="noresult-message" aria-label="Error message">Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';d.insertAdjacentHTML("beforeend",r)}function G(e){document.querySelectorAll(".exersizes-menu-btn").forEach(n=>{n.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function V(e){C.classList.remove("visually-hidden"),p.classList.remove("visually-hidden"),p.textContent=e.target.dataset.target.trim()}function X(){p.textContent="",C.classList.add("visually-hidden"),p.classList.add("visually-hidden")}function y(e,t,r,n){const s={page:r,limit:12};if(n&&(s.keyword=n),e&&!t)return s.filter=e,s;if(!e&&!t)return s.filter="Muscles",s;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?s.limit=8:e&&t&&window.innerWidth>=1440&&(s.limit=9),e){case"Muscles":s.muscles=t;break;case"Equipment":s.equipment=t;break;default:s.bodypart=t;break}return s}async function b(e,t){let r="";const n=document.querySelector(".exersizes-pagination-list");if(t){n.innerHTML="";return}const s=e.data.totalPages;if(n.innerHTML="",s>1)for(let i=1;i<=s;i++)i===1?r+=`<li
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
              </li>`;n.insertAdjacentHTML("beforeend",r)}function Y(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),r=e.target;t.classList.remove("exersizes-pagination-item-active"),r.classList.add("exersizes-pagination-item-active")}function Q(){window.scrollY>120?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function Z(){const e=document.querySelector(".exersizes-input");q.classList.remove("hidden"),e.addEventListener("keyup",K),F.addEventListener("click",L)}function K(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",l)),e.keyCode===13&&(L(e),l(),a.classList.add("hidden"))}function ee(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),l(),a.classList.add("hidden")};a.addEventListener("click",e)}function te(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",ee),e.removeEventListener("click",L),q.classList.add("hidden"),a.classList.add("hidden")}function l(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",l)}function se(){const t=document.querySelector(".exersizes-container").getBoundingClientRect().y;window.scrollBy({top:t,behavior:"smooth"})}function re(){const e=document.querySelector(".footer-policy"),t=document.querySelector(".footer-service"),r=document.querySelector(".modal-overlay"),n=document.querySelector(".policy-modal-overlay");e.addEventListener("click",()=>n.classList.add("is-open")),t.addEventListener("click",()=>r.classList.add("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open")),r.addEventListener("click",()=>r.classList.remove("is-open"))}const M=window.location.pathname,ne=M.lastIndexOf("/"),E=M.substring(ne);(E==="/index.html"||E==="/")&&re();
//# sourceMappingURL=commonHelpers2.js.map
