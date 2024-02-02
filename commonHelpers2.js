import{o as w,a as R,i as v}from"./assets/modals-functions-4df62e74.js";import{a as d}from"./assets/vendor-8cce9181.js";const D=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,q="feedback-form-state",y=document.querySelector(".footer-subscription"),N=y.querySelector(".input-footer"),P=document.querySelector(".footer-button"),_=async e=>{try{return(await d.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},F=async e=>{e.preventDefault(),P.blur();const t=N.value.trim();if(!D.test(t))w("Enter a valid email!");else{try{await _(t),R("Successful subscription!")}catch{w("There is already a user with this email!")}localStorage.removeItem(q),y.reset()}};y.addEventListener("submit",F);y.addEventListener("input",e=>{const t=N.value.trim(),n=JSON.stringify({footerEmail:t});localStorage.setItem(q,n)});d.defaults.baseURL="https://energyflow.b.goit.study/api";const z=document.querySelector(".exersizes-cards-container"),o=document.querySelector(".exersizes-cards-container-wrapper"),E=document.querySelector(".exersizes-result-card-container"),p=document.querySelector(".exersizes-result-card-container-wrapper"),l=document.querySelector(".exersizes-message-container"),U=document.querySelector(".exersizes-pagination-container"),C=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),j=document.querySelector(".exersizes-input-btn-s"),I=document.querySelector(".dash"),g=document.querySelector(".exercise-name"),T=1,J=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("scroll",te);document.addEventListener("DOMContentLoaded",B());J.addEventListener("click",G);async function G(e){if(e.preventDefault(),e.target.nodeName==="BUTTON")try{b();const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),B(t),M(),K(),ie(),Q(e)}catch(t){console.log(t),c()}finally{f()}}o.addEventListener("click",W);async function W(e){if(e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")){const t=e.target.dataset.filter,n=e.target.dataset.target;try{b(),O(t,n,T),f(),Z(e),se(),sessionStorage.setItem("filterSubType",JSON.stringify(n)),sessionStorage.setItem("filterType",JSON.stringify(t))}catch{c()}finally{f()}}}U.addEventListener("click",V);async function V(e){if(e.preventDefault(),e.target.nodeName==="BUTTON")try{const t=JSON.parse(sessionStorage.getItem("filterType")),n=e.target.textContent.trim();let s;b(),sessionStorage.getItem("filterSubType")&&(s=JSON.parse(sessionStorage.getItem("filterSubType"))),M(),Y(t,s,n),ee(e)}catch{c()}finally{f()}}async function B(e,t,n){const s=await d.get("/filters",{params:h(e,t,n)});try{if(s.data.results.length===0)throw new Error("No results found...");e=s.data.results[0].filter,$(s),x(s)}catch{c()}}async function O(e,t,n){const s=await d.get("/exercises",{params:h(e,t,n)});try{if(s.data.results.length===0)throw new Error("No results found...");A(s),n===1&&x(s)}catch{c()}}async function X(e,t,n){const s=await d.get("/filters",{params:h(e,t,n)});try{if(s.data.results.length===0)throw new Error("No results found...");e=s.data.results[0].filter,$(s)}catch{c()}}async function Y(e,t,n){t?await O(e,t,n):await X(e,t,n)}async function L(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),n=JSON.parse(sessionStorage.getItem("filterType")),s=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const r=await d.get("/exercises",{params:h(n,s,T,t)});if(r.data.results.length===0)throw new Error("No results found...");A(r),x(r)}}catch{c()}u()}async function $(e){const t=e.data.results;o.classList.remove("hidden"),p.classList.add("hidden"),l.classList.add("hidden"),z.innerHTML="";const n=t.map(s=>{const r=s.filter,i=s.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${s.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${r}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${r}" data-target="${i}">
          ${s.name[0].toUpperCase()+s.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${r}" data-target="${i}">${s.filter}</p>
      </div></li>`}).join("");z.insertAdjacentHTML("beforeend",n),o.addEventListener("keyup",m)}function m(e){e.keyCode===13&&choseFilterCard(e)}function A(e){const t=e.data.results;o.removeEventListener("keyup",m),p.classList.remove("hidden"),o.classList.add("hidden"),l.classList.add("hidden"),o.removeEventListener("keyup",m),E.innerHTML="";let n;const s=t.map(r=>{let i=r.name,S=r.target;return n=r._id,`<li class="second-filter" aria-label="Exercise"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate" aria-label="Exercise rating">${Math.round(r.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="Star icon">
                    <use href="${v}#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${n} aria-label="Start button">start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="${v}#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="Runner icon">
                    <use href="${v}#runner"></use>
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
            <span class="exersizes-card-info-data" data-filter-sub-type>${S[0].toUpperCase()+S.slice(1)}</span></p>
   
    </div>
</div></li>`}).join("");E.insertAdjacentHTML("beforeend",s),p.addEventListener("keyup",m)}async function c(e){o.classList.add("hidden"),p.classList.add("hidden"),l.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",l.innerHTML="";const n='<p class="noresult-message" aria-label="Error message">Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';l.insertAdjacentHTML("beforeend",n)}function Q(e){document.querySelectorAll(".exersizes-menu-btn").forEach(s=>{s.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function Z(e){I.classList.remove("visually-hidden"),g.classList.remove("visually-hidden"),g.textContent=e.target.dataset.target.trim()}function K(){g.textContent="",I.classList.add("visually-hidden"),g.classList.add("visually-hidden")}function h(e,t,n,s){const r={page:n,limit:12};if(s&&(r.keyword=s),e&&!t)return r.filter=e,r;if(!e&&!t)return r.filter="Muscles",r;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?r.limit=8:e&&t&&window.innerWidth>=1440&&(r.limit=9),e){case"Muscles":r.muscles=t;break;case"Equipment":r.equipment=t;break;default:r.bodypart=t;break}return r}async function x(e,t){let n="";const s=document.querySelector(".exersizes-pagination-list");if(t){s.innerHTML="";return}const r=e.data.totalPages;if(s.innerHTML="",r>1)for(let i=1;i<=r;i++)i===1?n+=`<li
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
              </li>`;s.insertAdjacentHTML("beforeend",n)}function ee(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),n=e.target;t.classList.remove("exersizes-pagination-item-active"),n.classList.add("exersizes-pagination-item-active")}function te(){window.scrollY>100?document.querySelector(".up-link").classList.remove("hidden"):document.querySelector(".up-link").classList.add("hidden")}function se(){const e=document.querySelector(".exersizes-input");C.classList.remove("hidden"),e.addEventListener("keyup",ne),j.addEventListener("click",L)}function ne(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",u)),e.keyCode===13&&(L(e),u(),a.classList.add("hidden"))}function re(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),u(),a.classList.add("hidden")};a.addEventListener("click",e)}function ie(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",re),e.removeEventListener("click",L),C.classList.add("hidden"),a.classList.add("hidden")}function u(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",u)}function b(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function f(){document.querySelector(".loader").remove()}function M(){const t=document.querySelector(".exersizes-container").getBoundingClientRect().y;window.scrollBy({top:t,behavior:"smooth"})}function ae(){const e=document.querySelector(".footer-policy"),t=document.querySelector(".footer-service"),n=document.querySelector(".modal-overlay"),s=document.querySelector(".policy-modal-overlay");e.addEventListener("click",()=>s.classList.add("is-open")),t.addEventListener("click",()=>n.classList.add("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open"))}const H=window.location.pathname,oe=H.lastIndexOf("/"),k=H.substring(oe);(k==="/index.html"||k==="/")&&ae();
//# sourceMappingURL=commonHelpers2.js.map
