import{o as z,a as D,i as x}from"./assets/modals-functions-b8b9ed25.js";import{a as d}from"./assets/vendor-8cce9181.js";const P=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,T="feedback-form-state",y=document.querySelector(".footer-subscription"),C=y.querySelector(".input-footer"),_=document.querySelector(".footer-button"),F=async e=>{try{return(await d.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},U=async e=>{e.preventDefault(),_.blur();const t=C.value.trim();if(!P.test(t))z("Enter a valid email!");else{try{await F(t),D("Successful subscription!")}catch{z("There is already a user with this email!")}localStorage.removeItem(T),y.reset()}};y.addEventListener("submit",U);y.addEventListener("input",e=>{const t=C.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(T,s)});d.defaults.baseURL="https://energyflow.b.goit.study/api";const k=document.querySelector(".exersizes-cards-container"),o=document.querySelector(".exersizes-cards-container-wrapper"),q=document.querySelector(".exersizes-result-card-container"),f=document.querySelector(".exersizes-result-card-container-wrapper"),u=document.querySelector(".exersizes-message-container"),j=document.querySelector(".exersizes-pagination-container"),I=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),J=document.querySelector(".exersizes-input-btn-s"),A=document.querySelector(".dash"),g=document.querySelector(".exercise-name"),B=1,G=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("scroll",se);document.addEventListener("DOMContentLoaded",O());G.addEventListener("click",Y);async function Y(e){if(e.preventDefault(),e.target.nodeName==="BUTTON")try{v();const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),O(t),w(),ee(),ae(),Z(e)}catch(t){console.log(t),c()}finally{L()}}o.addEventListener("click",W);async function W(e){if(e.preventDefault(),!(e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")){let t;e.pageY<1200?t=50:e.pageY>1200&&e.pageY<2e3?t=250:t=500;const s=e.target.dataset.filter,n=e.target.dataset.target;try{v(),w(),setTimeout(()=>{$(s,n,B),K(e),ne(),sessionStorage.setItem("filterSubType",JSON.stringify(n)),sessionStorage.setItem("filterType",JSON.stringify(s))},t)}catch{c()}finally{L()}}}j.addEventListener("click",V);async function V(e){if(e.preventDefault(),e.target.nodeName==="BUTTON")try{const t=JSON.parse(sessionStorage.getItem("filterType")),s=e.target.textContent.trim();let n;v(),sessionStorage.getItem("filterSubType")&&(n=JSON.parse(sessionStorage.getItem("filterSubType"))),w(),Q(t,n,s),te(e)}catch{c()}finally{L()}}async function O(e,t,s){const n=await d.get("/filters",{params:h(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,M(n),b(n)}catch{c()}}async function $(e,t,s){const n=await d.get("/exercises",{params:h(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");H(n),s===1&&b(n)}catch{c()}}async function X(e,t,s){const n=await d.get("/filters",{params:h(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,M(n)}catch{c()}}async function Q(e,t,s){t?await $(e,t,s):await X(e,t,s)}async function S(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),s=JSON.parse(sessionStorage.getItem("filterType")),n=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(v(),t.length!==0){const r=await d.get("/exercises",{params:h(s,n,B,t)});if(r.data.results.length===0)throw new Error("No results found...");H(r),b(r)}}catch{c()}finally{m(),L()}}async function M(e){const t=e.data.results;o.classList.remove("hidden"),f.classList.add("hidden"),u.classList.add("hidden"),k.innerHTML="";const s=t.map(r=>{const i=r.filter,l=r.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${r.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${i}" data-target="${l}">
        <h3 class="exersizes-card-bytype-header" data-filter="${i}" data-target="${l}">
          ${r.name[0].toUpperCase()+r.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${i}" data-target="${l}">${r.filter}</p>
      </div></li>`}).join("");k.insertAdjacentHTML("beforeend",s);const n=document.querySelectorAll(".first-filter");n.forEach(r=>{r.classList.add("animation-f")}),setTimeout(()=>{n.forEach(r=>{r.classList.remove("animation-f")})},500),o.addEventListener("keyup",p)}function p(e){e.keyCode===13&&choseFilterCard(e)}function H(e){const t=e.data.results;o.removeEventListener("keyup",p),f.classList.remove("hidden"),o.classList.add("hidden"),u.classList.add("hidden"),o.removeEventListener("keyup",p),q.innerHTML="";let s;const n=t.map(i=>{let l=i.name,E=i.target;return s=i._id,`<li class="second-filter" aria-label="Exercise"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate" aria-label="Exercise rating">${Math.round(i.rating).toString().padEnd(3,".0")}</span>
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
                <h3 class="exersizes-card-title-h card-title-last">${l}</h3></div>
    </div>
    <div class="just-wrapper">
   
        <p class="exersizes-card-info-descr" aria-description="How much calories you burn during a certain amount of time">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories aria-label="Calories time">${i.burnedCalories} / ${i.time} min</span><p>
        <p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${i.bodyPart[0].toUpperCase()+i.bodyPart.slice(1)}</span></p>
        <p class="exersizes-card-info-descr last">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${E[0].toUpperCase()+E.slice(1)}</span></p>
   
    </div>
</div></li>`}).join("");q.insertAdjacentHTML("beforeend",n);const r=document.querySelectorAll(".second-filter");r.forEach(i=>{i.classList.add("animation")}),setTimeout(()=>{r.forEach(i=>{i.classList.remove("animation")})},500),f.addEventListener("keyup",p)}async function c(e){o.classList.add("hidden"),f.classList.add("hidden"),u.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",u.innerHTML="";const s='<p class="noresult-message" aria-label="Error message">Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';u.insertAdjacentHTML("beforeend",s)}function Z(e){document.querySelectorAll(".exersizes-menu-btn").forEach(n=>{n.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function K(e){A.classList.remove("visually-hidden"),g.classList.remove("visually-hidden"),g.textContent=e.target.dataset.target.trim()}function ee(){g.textContent="",A.classList.add("visually-hidden"),g.classList.add("visually-hidden")}function h(e,t,s,n){const r={page:s,limit:12};if(n&&(r.keyword=n),e&&!t)return r.filter=e,r;if(!e&&!t)return r.filter="Muscles",r;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?r.limit=8:e&&t&&window.innerWidth>=1440&&(r.limit=9),e){case"Muscles":r.muscles=t;break;case"Equipment":r.equipment=t;break;default:r.bodypart=t;break}return r}async function b(e,t){let s="";const n=document.querySelector(".exersizes-pagination-list");if(t){n.innerHTML="";return}const r=e.data.totalPages;if(n.innerHTML="",r>1)for(let i=1;i<=r;i++)i===1?s+=`<li
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
              </li>`;n.insertAdjacentHTML("beforeend",s)}function te(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),s=e.target;t.classList.remove("exersizes-pagination-item-active"),s.classList.add("exersizes-pagination-item-active")}function se(){window.scrollY>100?document.querySelector(".up-link").classList.remove("hidden"):document.querySelector(".up-link").classList.add("hidden")}function ne(){const e=document.querySelector(".exersizes-input");I.classList.remove("hidden"),e.addEventListener("keyup",re),J.addEventListener("click",S)}function re(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",m)),e.keyCode===13&&(S(e),m(),a.classList.add("hidden"))}function ie(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),m(),a.classList.add("hidden")};a.addEventListener("click",e)}function ae(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",ie),e.removeEventListener("click",S),I.classList.add("hidden"),a.classList.add("hidden")}function m(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",m)}function v(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function L(){document.querySelector(".loader").remove()}function w(){const t=document.querySelector(".exersizes-container").getBoundingClientRect().y;window.scrollBy({top:t,behavior:"smooth"})}function oe(){const e=document.querySelector(".footer-policy"),t=document.querySelector(".footer-service"),s=document.querySelector(".modal-overlay"),n=document.querySelector(".policy-modal-overlay");e.addEventListener("click",()=>n.classList.add("is-open")),t.addEventListener("click",()=>s.classList.add("is-open")),n.addEventListener("click",()=>n.classList.remove("is-open")),s.addEventListener("click",()=>s.classList.remove("is-open"))}const R=window.location.pathname,ce=R.lastIndexOf("/"),N=R.substring(ce);(N==="/index.html"||N==="/")&&oe();
//# sourceMappingURL=commonHelpers2.js.map
