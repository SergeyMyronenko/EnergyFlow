import{o as b,a as M,i as h}from"./assets/modals-functions-98d5909a.js";import{a as c}from"./assets/vendor-8cce9181.js";const H=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,E="feedback-form-state",g=document.querySelector(".footer-subscription"),k=g.querySelector(".input-footer"),R=document.querySelector(".footer-button"),D=async e=>{try{return(await c.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},_=async e=>{e.preventDefault(),R.blur();const t=k.value.trim();if(!H.test(t))b("Enter a valid email!");else{try{await D(t),M("Successful subscription!")}catch{b("There is already a user with this email!")}localStorage.removeItem(E),g.reset()}};g.addEventListener("submit",_);g.addEventListener("input",e=>{const t=k.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(E,s)});c.defaults.baseURL="https://energyflow.b.goit.study/api";const S=document.querySelector(".exersizes-cards-container"),o=document.querySelector(".exersizes-cards-container-wrapper"),w=document.querySelector(".exersizes-result-card-container"),m=document.querySelector(".exersizes-result-card-container-wrapper"),d=document.querySelector(".exersizes-message-container"),P=document.querySelector(".exersizes-pagination-container"),N=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),U=document.querySelector(".exersizes-input-btn-s"),q=document.querySelector(".dash"),p=document.querySelector(".exercise-name"),I=1,F=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("scroll",Y);document.addEventListener("DOMContentLoaded",T());F.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),T(t),V(),ee(),G(e)}});o.addEventListener("click",C);function C(e){if(e.preventDefault(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,s=e.target.dataset.target;O(t,s,I),W(e),Q(),sessionStorage.setItem("filterSubType",JSON.stringify(s)),sessionStorage.setItem("filterType",JSON.stringify(t))}P.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName==="BUTTON"){const t=JSON.parse(sessionStorage.getItem("filterType")),s=e.target.textContent.trim();let n;sessionStorage.getItem("filterSubType")&&(n=JSON.parse(sessionStorage.getItem("filterSubType"))),te(),j(t,n,s),X(e)}});async function T(e,t,s){const n=await c.get("/filters",{params:y(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,$(n),x(n)}catch{f()}}async function O(e,t,s){const n=await c.get("/exercises",{params:y(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");A(n),s===1&&x(n)}catch{f()}}async function J(e,t,s){const n=await c.get("/filters",{params:y(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,$(n)}catch{f()}}async function j(e,t,s){t?await O(e,t,s):await J(e,t,s)}async function v(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),s=JSON.parse(sessionStorage.getItem("filterType")),n=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const r=await c.get("/exercises",{params:y(s,n,I,t)});if(r.data.results.length===0)throw new Error("No results found...");A(r),x(r)}}catch{f()}l()}async function $(e){const t=e.data.results;o.classList.remove("hidden"),m.classList.add("hidden"),d.classList.add("hidden"),S.innerHTML="";const s=t.map(n=>{const r=n.filter,i=n.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${n.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${r}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${r}" data-target="${i}">
          ${n.name[0].toUpperCase()+n.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${r}" data-target="${i}">${n.filter}</p>
      </div></li>`}).join("");S.insertAdjacentHTML("beforeend",s),o.addEventListener("keyup",u)}function u(e){e.keyCode===13&&C(e)}function A(e){const t=e.data.results;o.removeEventListener("keyup",u),m.classList.remove("hidden"),o.classList.add("hidden"),d.classList.add("hidden"),o.removeEventListener("keyup",u),w.innerHTML="";let s;const n=t.map(r=>{let i=r.name,L=r.target;return s=r._id,`<li class="second-filter" aria-label="Exercise"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate" aria-label="Exercise rating">${Math.round(r.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="Star icon">
                    <use href="${h}#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${s} aria-label="Start button">start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="${h}#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="Runner icon">
                    <use href="${h}#runner"></use>
                </svg>
                <div class="card-title-wrapper">
                <h3 class="exersizes-card-title-h card-title-last">${i}</h3></div>
    </div>
    <div class="just-wrapper">
   
        <p class="exersizes-card-info-descr" aria-description="How much calories you burn during a certain amount of time">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories aria-label="Calories time">${r.burnedCalories} / ${r.time} min</span><p>
        <p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${r.bodyPart[0].toUpperCase()+r.bodyPart.slice(1)}</span></p>
        <p class="exersizes-card-info-descr last">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${L[0].toUpperCase()+L.slice(1)}</span></p>
   
    </div>
</div></li>`}).join("");w.insertAdjacentHTML("beforeend",n),m.addEventListener("keyup",u)}async function f(e){o.classList.add("hidden"),m.classList.add("hidden"),d.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",d.innerHTML="";const s='<p class="noresult-message" aria-label="Error message">Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';d.insertAdjacentHTML("beforeend",s)}function G(e){document.querySelectorAll(".exersizes-menu-btn").forEach(n=>{n.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function W(e){q.classList.remove("visually-hidden"),p.classList.remove("visually-hidden"),p.textContent=e.target.dataset.target.trim()}function V(){p.textContent="",q.classList.add("visually-hidden"),p.classList.add("visually-hidden")}function y(e,t,s,n){const r={page:s,limit:12};if(n&&(r.keyword=n),e&&!t)return r.filter=e,r;if(!e&&!t)return r.filter="Muscles",r;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?r.limit=8:e&&t&&window.innerWidth>=1440&&(r.limit=9),e){case"Muscles":r.muscles=t;break;case"Equipment":r.equipment=t;break;default:r.bodypart=t;break}return r}async function x(e,t){let s="";const n=document.querySelector(".exersizes-pagination-list");if(t){n.innerHTML="";return}const r=e.data.totalPages;if(n.innerHTML="",r>1)for(let i=1;i<=r;i++)i===1?s+=`<li
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
              </li>`;n.insertAdjacentHTML("beforeend",s)}function X(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),s=e.target;t.classList.remove("exersizes-pagination-item-active"),s.classList.add("exersizes-pagination-item-active")}function Y(){window.scrollY>100?document.querySelector(".up-link").classList.remove("hidden"):document.querySelector(".up-link").classList.add("hidden")}function Q(){const e=document.querySelector(".exersizes-input");N.classList.remove("hidden"),e.addEventListener("keyup",Z),U.addEventListener("click",v)}function Z(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",l)),e.keyCode===13&&(v(e),l(),a.classList.add("hidden"))}function K(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),l(),a.classList.add("hidden")};a.addEventListener("click",e)}function ee(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",K),e.removeEventListener("click",v),N.classList.add("hidden"),a.classList.add("hidden")}function l(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",l)}function te(){const t=document.querySelector(".exersizes-container").getBoundingClientRect().y;window.scrollBy({top:t,behavior:"smooth"})}function se(){const e=document.querySelector(".footer-policy"),t=document.querySelector(".footer-service"),s=document.querySelector(".modal-overlay"),n=document.querySelector(".policy-modal-overlay");e.addEventListener("click",()=>n.classList.add("is-open")),t.addEventListener("click",()=>s.classList.add("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open"))}const B=window.location.pathname,ne=B.lastIndexOf("/"),z=B.substring(ne);(z==="/index.html"||z==="/")&&se();
//# sourceMappingURL=commonHelpers2.js.map
