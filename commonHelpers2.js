import{g as O}from"./assets/modals-functions-36365ad0.js";import{S as z,a as o}from"./assets/vendor-20b07447.js";const H=document.querySelector(".header-burger"),E=document.querySelector(".mobile-menu-wrapper"),U=document.querySelector(".mobile-menu-close-btn");function R(){E.classList.remove("visually-hidden")}function j(){E.classList.add("visually-hidden")}H.addEventListener("click",R);U.addEventListener("click",j);const _=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,k="feedback-form-state",g=document.querySelector(".footer-subscription"),C=g.querySelector(".input-footer"),F=document.querySelector(".footer-button");function q(e){z.fire({position:"center",icon:"error",title:"Enter a valid email!",showConfirmButton:!1,timer:2e3})}function J(e){z.fire({position:"center",icon:"success",title:"Congratulations, you have successfully subscribed!",showConfirmButton:!1,timer:2e3})}const P=async e=>{try{return(await o.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},Q=async e=>{e.preventDefault(),F.blur();const t=C.value.trim();if(!_.test(t))q();else{try{await P(t),J("Successful subscription!")}catch(s){q("Error subscribing: "+s.message)}localStorage.removeItem(k),g.reset()}};g.addEventListener("submit",Q);g.addEventListener("input",e=>{const t=C.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(k,s)});const a={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),stars:document.querySelectorAll(".rating-label")},W="64f389465ae26083f39b17a4";a.form.addEventListener("submit",N);a.stars.forEach(e=>{e.addEventListener("click",I)});function I(e){a.rateValue.textContent=`${e.target.dataset.rate}.0`}async function N(e){e.preventDefault();try{const t=await o.patch(`https://energyflow.b.goit.study/api/exercises/${W}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()})}catch(t){throw new Error(t.message)}finally{a.modalBackdrop.classList.remove("is-open"),a.exerciseModal.classList.remove("is-open"),e.target.reset(),a.form.removeEventListener("submit",N),a.stars.forEach(t=>{t.removeEventListener("click",I)})}}async function V(){const e=localStorage&&JSON.parse(localStorage.getItem("quoteData")),t=new Date().getDate();return e&&e.timestamp===t?e:G()}async function G(){try{const e=await o.get("https://energyflow.b.goit.study/api/quote"),t={quote:e.data.quote,author:e.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(t)),t}catch(e){console.error("Помилка:",e)}}async function Y(e){try{const t=await V(),s=document.querySelector(e.quoteTextSelector),n=document.querySelector(e.quoteAuthorSelector);if(!s||!n)throw new Error("Елементи для відображення цитати не знайдено");s.innerText=t.quote,n.innerText=t.author}catch(t){console.error("Сталася помилка при відображенні цитати:",t)}}const v={quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"};document.querySelector(v.quoteTextSelector)&&document.querySelector(v.quoteAuthorSelector)&&Y(v);const X=document.querySelector(".modal");document.addEventListener("click",B);let T="favoriteData";const h=JSON.parse(localStorage.getItem(T))||[];async function B(e){try{if(e.target.classList.contains("modal-button-favorites")){const s=(await O(e.target.dataset.id)).data;if(!h.some(r=>r._id===s._id))h.push(s);else return;localStorage.setItem(T,JSON.stringify(h)),X.classList.remove("is-open")}}catch(t){console.log(t.message)}finally{addToFavoritesBtn.removeEventListener("click",B)}}o.defaults.baseURL="https://energyflow.b.goit.study/api";const c=document.querySelector(".exersizes-cards-container"),l=document.querySelector(".exersizes-result-card-container"),d=document.querySelector(".exersizes-message-container"),Z=document.querySelector(".exersizes-pagination-container"),M=document.querySelector(".dash"),m=document.querySelector(".exercise-name"),A=1,K=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("DOMContentLoaded",S());K.addEventListener("click",e=>{if(e.preventDefault(),f(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),S(t),ne(),de(),se(e),p()}});c.addEventListener("click",e=>{if(e.preventDefault(),f(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,s=e.target.dataset.target;D(t,s,A),re(e),oe(),p(),sessionStorage.setItem("filterSubType",JSON.stringify(s)),sessionStorage.setItem("filterType",JSON.stringify(t))});Z.addEventListener("click",e=>{if(e.preventDefault(),f(),e.target.nodeName==="BUTTON"){const t=sessionStorage.getItem("filterType").slice(1,-1),s=e.target.textContent.trim();let n;sessionStorage.getItem("filterSubType")?n=sessionStorage.getItem("filterSubType").slice(1,-1):n=sessionStorage.getItem("filterSubType"),ee(t,n,s),ie(e),p()}});async function S(e,t,s){const n=await o.get("/filters",{params:L(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,te(n),w(n)}catch{b()}}async function D(e,t,s){const n=await o.get("/exercises",{params:L(e,t,s)});try{if(n.data.results.length===0)throw new Error("No results found...");$(n),s===1&&w(n)}catch{b()}}async function ee(e,t,s){t?await D(e,t,s):await S(e,t,s)}async function x(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;f();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),s=sessionStorage.getItem("filterType").slice(1,-1),n=sessionStorage.getItem("filterSubType").slice(1,-1);try{if(t.length===0)throw new Error("Nthing to search...");{const r=await o.get("/exercises",{params:L(s,n,A,t)});if(r.data.results.length===0)throw new Error("No results found...");u(),$(r),w(r),p()}}catch(r){console.log(r),b()}}async function te(e){const t=e.data.results;c.classList.remove("visually-hidden"),l.classList.add("visually-hidden"),d.classList.add("visually-hidden"),c.innerHTML="";const s=t.map(n=>{const r=n.filter,i=n.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${n.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${r}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${r}" data-target="${i}">
          ${n.name[0].toUpperCase()+n.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${r}" data-target="${i}">${n.filter}</p>
      </div></li>`}).join("");c.insertAdjacentHTML("beforeend",s)}function $(e){const t=e.data.results;l.classList.remove("visually-hidden"),c.classList.add("visually-hidden"),d.classList.add("visually-hidden"),l.innerHTML="";let s;const n=t.map(r=>{let i=r.name;s=r._id;const y=window.innerWidth;return y>=1440?i.length>25&&(i=r.name[0].toUpperCase()+r.name.slice(1,25).trim()+"..."):y<1440&&y>=768?i.length>17&&(i=r.name[0].toUpperCase()+r.name.slice(1,16).trim()+"..."):(i=r.name[0].toUpperCase()+r.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate">${Math.round(r.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="rate-icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${s}>start 
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
            <span class="exersizes-card-info-data" data-burning-calories>${r.burnedCalories} / ${r.time} min</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${r.bodyPart[0].toUpperCase()+r.bodyPart.slice(1)}</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${r.target[0].toUpperCase()+r.target.slice(1)}</span></p></li>
    </ul>
</div></li>`}).join("");l.insertAdjacentHTML("beforeend",n)}async function b(e){c.classList.add("visually-hidden"),l.classList.add("visually-hidden"),d.classList.remove("visually-hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",d.innerHTML="";const s='<p class="noresult-message" >Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';d.insertAdjacentHTML("beforeend",s)}function se(e){document.querySelectorAll(".exersizes-menu-btn").forEach(n=>{n.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function re(e){M.classList.remove("visually-hidden"),m.classList.remove("visually-hidden"),m.textContent=e.target.dataset.target.trim()}function ne(){m.textContent="",M.classList.add("visually-hidden"),m.classList.add("visually-hidden")}function L(e,t,s,n){const r={page:s,limit:12};if(n&&(r.keyword=n),e&&!t)return r.filter=e,r;if(!e&&!t)return r.filter="Muscles",r;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?r.limit=8:e&&t&&window.innerWidth>=1440&&(r.limit=9),e){case"Muscles":r.muscles=t;break;case"Equipment":r.equipment=t;break;default:r.bodypart=t;break}return r}async function w(e,t){let s="";const n=document.querySelector(".exersizes-pagination-list");if(t){n.innerHTML="";return}const r=e.data.totalPages;if(n.innerHTML="",r>1)for(let i=1;i<=r;i++)i===1?s+=`<li
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
              </li>`;n.insertAdjacentHTML("beforeend",s)}function ie(e){e.target.textContent.trim(),document.querySelector(".exersizes-pagination-item-active").classList.remove("exersizes-pagination-item-active"),e.target.classList.add("exersizes-pagination-item-active")}function ae(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function oe(){const e=document.querySelector(".exersizes-input"),t=document.querySelector(".exersizes-input-btn-s"),s=document.querySelector(".exersizes-input-container");document.querySelector(".exersizes-input-btn"),s.classList.remove("visually-hidden"),e.addEventListener("keyup",ce),t.addEventListener("click",x)}function ce(e){const t=document.querySelector(".exersizes-input-btn");t.classList.remove("visually-hidden"),e.target.value.trim().length>0&&(t.classList.remove("visually-hidden"),t.addEventListener("click",u)),e.keyCode===13&&(x(e),u(),t.classList.add("visually-hidden"))}function le(){const e=document.querySelector(".exersizes-input-btn");e.classList.remove("visually-hidden");const t=s=>{s.preventDefault(),u(),e.classList.add("visually-hidden")};e.addEventListener("click",t)}function de(){const e=document.querySelector(".exersizes-input");document.querySelector(".exersizes-input-btn-s");const t=document.querySelector(".exersizes-input-container"),s=document.querySelector(".exersizes-input-btn");e.removeEventListener("input",le),e.removeEventListener("click",x),t.classList.add("visually-hidden"),s.classList.add("visually-hidden")}function u(){const e=document.querySelector(".exersizes-input"),t=document.querySelector(".exersizes-input-btn");e.value="",t.classList.add("visually-hidden"),t.removeEventListener("click",u)}function f(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function p(){document.querySelector(".loader").remove()}ae();
//# sourceMappingURL=commonHelpers2.js.map
