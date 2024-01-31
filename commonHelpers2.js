import{i as D}from"./assets/modals-functions-acbfc82c.js";import{i as C,a as d}from"./assets/vendor-8cce9181.js";function q(e="Operation has been success"){C.success({message:e,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}function z(e="Sorry... something wrong happened"){C.error({message:e,messageColor:"#fff",backgroundColor:"rgba(27, 27, 27, 0.60)",position:"topRight",theme:"dark",closeOnClick:"true",messageSize:"16",messageLineHeight:"16"})}const U=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,N="feedback-form-state",f=document.querySelector(".footer-subscription"),I=f.querySelector(".input-footer"),j=document.querySelector(".footer-button"),P=async e=>{try{return(await d.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},_=async e=>{e.preventDefault(),j.blur();const t=I.value.trim();if(!U.test(t))z("Enter a valid email!");else{try{await P(t),q("Successful subscription!")}catch(r){z("Error subscribing: "+r.message)}localStorage.removeItem(N),f.reset()}};f.addEventListener("submit",_);f.addEventListener("input",e=>{const t=I.value.trim(),r=JSON.stringify({footerEmail:t});localStorage.setItem(N,r)});const o={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};o.form.addEventListener("submit",J);o.starsContainer.addEventListener("click",F);function F(e){e.target.classList.contains("rating-label")&&(o.rateValue.textContent=`${e.target.dataset.rate}.0`)}async function J(e){e.preventDefault();try{const t=await d.patch(`https://energyflow.b.goit.study/api/exercises/${D}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()});q()}catch(t){throw new Error(t.message)}finally{W()}}function W(){o.modalBackdrop.classList.remove("is-open"),o.exerciseModal.classList.remove("is-open"),o.rateValue.textContent="0.0",o.form.reset()}d.defaults.baseURL="https://energyflow.b.goit.study/api";const E=document.querySelector(".exersizes-cards-container"),c=document.querySelector(".exersizes-cards-container-wrapper"),k=document.querySelector(".exersizes-result-card-container"),g=document.querySelector(".exersizes-result-card-container-wrapper"),l=document.querySelector(".exersizes-message-container"),G=document.querySelector(".exersizes-pagination-container"),T=document.querySelector(".exersizes-input-container"),a=document.querySelector(".exersizes-input-btn"),V=document.querySelector(".exersizes-input-btn-s"),B=document.querySelector(".dash"),p=document.querySelector(".exercise-name"),M=1,X=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");se();document.addEventListener("DOMContentLoaded",$());X.addEventListener("click",e=>{if(e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),$(t),ee(),ae(),Z(e),b()}});c.addEventListener("click",O);function O(e){if(e.preventDefault(),v(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,r=e.target.dataset.target;A(t,r,M),K(e),re(),b(),sessionStorage.setItem("filterSubType",JSON.stringify(r)),sessionStorage.setItem("filterType",JSON.stringify(t))}G.addEventListener("click",e=>{if(e.preventDefault(),v(),e.target.nodeName==="BUTTON"){const t=JSON.parse(sessionStorage.getItem("filterType")),r=e.target.textContent.trim();let n;sessionStorage.getItem("filterSubType")&&(n=JSON.parse(sessionStorage.getItem("filterSubType"))),oe(),Q(t,n,r),te(e),b()}});async function $(e,t,r){const n=await d.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,H(n),w(n)}catch{h()}}async function A(e,t,r){const n=await d.get("/exercises",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");R(n),r===1&&w(n)}catch{h()}}async function Y(e,t,r){const n=await d.get("/filters",{params:y(e,t,r)});try{if(n.data.results.length===0)throw new Error("No results found...");e=n.data.results[0].filter,H(n)}catch{h()}}async function Q(e,t,r){t?await A(e,t,r):await Y(e,t,r)}async function S(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;v();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),r=JSON.parse(sessionStorage.getItem("filterType")),n=JSON.parse(sessionStorage.getItem("filterSubType"));try{if(t.length!==0){const s=await d.get("/exercises",{params:y(r,n,M,t)});if(s.data.results.length===0)throw new Error("No results found...");u(),R(s),w(s)}}catch{h()}b()}async function H(e){const t=e.data.results;c.classList.remove("hidden"),g.classList.add("hidden"),l.classList.add("hidden"),E.innerHTML="";const r=t.map(n=>{const s=n.filter,i=n.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${n.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${s}" data-target="${i}">
        <h3 class="exersizes-card-bytype-header" data-filter="${s}" data-target="${i}">
          ${n.name[0].toUpperCase()+n.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${s}" data-target="${i}">${n.filter}</p>
      </div></li>`}).join("");E.insertAdjacentHTML("beforeend",r),c.addEventListener("keyup",m)}function m(e){e.keyCode===13&&O(e)}function R(e){const t=e.data.results;c.removeEventListener("keyup",m),g.classList.remove("hidden"),c.classList.add("hidden"),l.classList.add("hidden"),c.removeEventListener("keyup",m),k.innerHTML="";let r;const n=t.map(s=>{let i=s.name,x=s.target;r=s._id;const L=window.innerWidth;return L>=1440?(i.length>25&&(i=s.name[0].toUpperCase()+s.name.slice(1,25).trim()+"..."),x.length>=9&&(x=s.target[0].toUpperCase()+s.target.slice(1,8).trim()+"...")):L<1440&&L>=768?i.length>17&&(i=s.name[0].toUpperCase()+s.name.slice(1,16).trim()+"..."):(i=s.name[0].toUpperCase()+s.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter" aria-label="Exercise"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate" aria-label="Exercise rating">${Math.round(s.rating).toString().padEnd(3,".0")}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="Star icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${r} aria-label="Start button">start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="./img/sprite.svg#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="Runner icon">
                    <use href="./img/sprite.svg#dude"></use>
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
</div></li>`}).join("");k.insertAdjacentHTML("beforeend",n),g.addEventListener("keyup",m)}async function h(e){c.classList.add("hidden"),g.classList.add("hidden"),l.classList.remove("hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",l.innerHTML="";const r='<p class="noresult-message" aria-label="Error message">Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';l.insertAdjacentHTML("beforeend",r)}function Z(e){document.querySelectorAll(".exersizes-menu-btn").forEach(n=>{n.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function K(e){B.classList.remove("visually-hidden"),p.classList.remove("visually-hidden"),p.textContent=e.target.dataset.target.trim()}function ee(){p.textContent="",B.classList.add("visually-hidden"),p.classList.add("visually-hidden")}function y(e,t,r,n){const s={page:r,limit:12};if(n&&(s.keyword=n),e&&!t)return s.filter=e,s;if(!e&&!t)return s.filter="Muscles",s;switch(e&&t&&window.innerWidth>=768&&window.innerWidth<1440?s.limit=8:e&&t&&window.innerWidth>=1440&&(s.limit=9),e){case"Muscles":s.muscles=t;break;case"Equipment":s.equipment=t;break;default:s.bodypart=t;break}return s}async function w(e,t){let r="";const n=document.querySelector(".exersizes-pagination-list");if(t){n.innerHTML="";return}const s=e.data.totalPages;if(n.innerHTML="",s>1)for(let i=1;i<=s;i++)i===1?r+=`<li
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
              </li>`;n.insertAdjacentHTML("beforeend",r)}function te(e){e.target.textContent.trim();const t=document.querySelector(".exersizes-pagination-item-active"),r=e.target;t.classList.remove("exersizes-pagination-item-active"),r.classList.add("exersizes-pagination-item-active")}function se(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function re(){const e=document.querySelector(".exersizes-input");T.classList.remove("hidden"),e.addEventListener("keyup",ne),V.addEventListener("click",S)}function ne(e){a.classList.remove("hidden"),e.target.value.trim().length>0&&(a.classList.remove("hidden"),a.addEventListener("click",u)),e.keyCode===13&&(S(e),u(),a.classList.add("hidden"))}function ie(){a.classList.remove("hidden");const e=t=>{t.preventDefault(),u(),a.classList.add("hidden")};a.addEventListener("click",e)}function ae(){const e=document.querySelector(".exersizes-input");e.removeEventListener("input",ie),e.removeEventListener("click",S),T.classList.add("hidden"),a.classList.add("hidden")}function u(){const e=document.querySelector(".exersizes-input");e.value="",a.classList.add("hidden"),a.removeEventListener("click",u)}function v(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function b(){document.querySelector(".loader").remove()}function oe(){let e=document.querySelector(".exersizes-container");if(window.innerWidth<1091){const t=e.getBoundingClientRect().y;window.scrollTo({top:t,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers2.js.map
