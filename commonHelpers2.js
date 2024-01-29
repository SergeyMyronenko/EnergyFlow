import"./assets/style-89757184.js";import{S as z,a as o}from"./assets/vendor-20b07447.js";const R=document.querySelector(".header-burger"),k=document.querySelector(".mobile-menu-wrapper"),U=document.querySelector(".mobile-menu-close-btn");function P(){k.classList.remove("visually-hidden")}function _(){k.classList.add("visually-hidden")}R.addEventListener("click",P);U.addEventListener("click",_);const F=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,M="feedback-form-state",g=document.querySelector(".footer-subscription"),T=g.querySelector(".input-footer"),J=document.querySelector(".footer-button");function E(e){z.fire({position:"center",icon:"error",title:"Enter a valid email!",showConfirmButton:!1,timer:2e3})}function j(e){z.fire({position:"center",icon:"success",title:"Congratulations, you have successfully subscribed!",showConfirmButton:!1,timer:2e3})}const Q=async e=>{try{return(await o.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw new Error(t.message)}},V=async e=>{e.preventDefault(),J.blur();const t=T.value.trim();if(!F.test(t))E();else{try{await Q(t),j("Successful subscription!")}catch(s){E("Error subscribing: "+s.message)}localStorage.removeItem(M),g.reset()}};g.addEventListener("submit",V);g.addEventListener("input",e=>{const t=T.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(M,s)});function C(e){return o.get(`https://energyflow.b.goit.study/api/exercises/${e}`)}function G(e){return`
      <div class="modal-content">
        <img class="modal-img" src="${e.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${e.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${e.rating}</p>

       <div class="ex-rating">
                <div class="ex-rating-body">
                  <div class="ex-rating-active"></div>
                  <div class="ex-rating-items">
                    <input
                      type="radio"
                      class="ex-rating-item"
                      value="1"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="2"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="3"
                      name="exrating"
                    /><input
                      type="radio"
                      class="ex-rating-item"
                      value="4"
                      name="exrating"
                    /><input type="radio" class="ex-rating-item" value="5" name="exrating" />
                  </div>
                </div>
              </div>
          </div>

          <ul class="modal-list">
            <li class="modal-list-item">
              <p class="modal-list-item-name">Target</p>
              <p class="modal-list-item-value">${e.target}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Body Part</p>
              <p class="modal-list-item-value">${e.bodyPart}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Equipment</p>
              <p class="modal-list-item-value">${e.equipment}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Popular</p>
              <p class="modal-list-item-value">${e.popularity}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Burned calories</p>
              <p class="modal-list-item-value">${e.burnedCalories}/3 min</p>
            </li>
          </ul>

          <p class="modal-description">${e.description}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-buttons">
        <button class="modal-button-favorites" type="button" data-id="${e._id}">
          Add to favorites
          <svg
            class="modal-button-favorites-icon"
            width="20"
            height="20"
            aria-label="heart-icon"
          >
            <use href="./img/sprite.svg#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating">Give a rating</button>
      </div>
  `}const r={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",Y);document.addEventListener("click",W);document.addEventListener("click",X);document.addEventListener("keydown",ee);r.closeBtn.addEventListener("click",Z);r.closeExerciseBtn.addEventListener("click",K);async function W(e){try{if(e.target.classList.contains("exersizes-card-btn")){const t=await C(e.target.dataset.id);r.exsCont.innerHTML=G(t.data),r.exerciseModal.classList.toggle("is-open");const s=document.querySelector(".ex-rating-active"),i=document.querySelector(".modal-rating-value");s.style.width=await`${parseInt(i.textContent)/.05}%`}}catch(t){throw new Error(t.message)}}async function Y(e){e.target.classList.contains("modal-button-rating")&&r.ratingModal.classList.toggle("is-open")}function X(e){if(e.target.classList.contains("backdrop")&&r.ratingModal.classList.contains("is-open")){r.ratingModal.classList.remove("is-open");return}e.target.classList.contains("backdrop")&&r.exerciseModal.classList.contains("is-open")&&r.exerciseModal.classList.remove("is-open")}function Z(e){e.currentTarget&&r.ratingModal.classList.remove("is-open")}function K(e){e.currentTarget&&r.exerciseModal.classList.remove("is-open")}function ee(e){if(e.code==="Escape"&&r.ratingModal.classList.contains("is-open")){r.ratingModal.classList.remove("is-open");return}e.code==="Escape"&&r.exerciseModal.classList.contains("is-open")&&r.exerciseModal.classList.remove("is-open")}const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),stars:document.querySelectorAll(".rating-label")},te="64f389465ae26083f39b17a4";c.form.addEventListener("submit",I);c.stars.forEach(e=>{e.addEventListener("click",B)});function B(e){c.rateValue.textContent=`${e.target.dataset.rate}.0`}async function I(e){e.preventDefault();try{const t=await o.patch(`https://energyflow.b.goit.study/api/exercises/${te}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()})}catch(t){throw new Error(t.message)}finally{c.modalBackdrop.classList.remove("is-open"),c.exerciseModal.classList.remove("is-open"),e.target.reset(),c.form.removeEventListener("submit",I),c.stars.forEach(t=>{t.removeEventListener("click",B)})}}async function se(){const e=localStorage&&JSON.parse(localStorage.getItem("quoteData")),t=new Date().getDate();return e&&e.timestamp===t?e:ae()}async function ae(){try{const e=await o.get("https://energyflow.b.goit.study/api/quote"),t={quote:e.data.quote,author:e.data.author,timestamp:new Date().getDate()};return localStorage.setItem("quoteData",JSON.stringify(t)),t}catch(e){console.error("Помилка:",e)}}async function ie(e){try{const t=await se(),s=document.querySelector(e.quoteTextSelector),i=document.querySelector(e.quoteAuthorSelector);if(!s||!i)throw new Error("Елементи для відображення цитати не знайдено");s.innerText=t.quote,i.innerText=t.author}catch(t){console.error("Сталася помилка при відображенні цитати:",t)}}const h={quoteTextSelector:".quote-text",quoteAuthorSelector:".quote-author"};document.querySelector(h.quoteTextSelector)&&document.querySelector(h.quoteAuthorSelector)&&ie(h);const ne=document.querySelector(".modal");document.addEventListener("click",$);let N="favoriteData";const x=JSON.parse(localStorage.getItem(N))||[];async function $(e){try{if(e.target.classList.contains("modal-button-favorites")){const s=(await C(e.target.dataset.id)).data;if(!x.some(a=>a._id===s._id))x.push(s);else return;localStorage.setItem(N,JSON.stringify(x)),ne.classList.remove("is-open")}}catch(t){console.log(t.message)}finally{addToFavoritesBtn.removeEventListener("click",$)}}o.defaults.baseURL="https://energyflow.b.goit.study/api";const l=document.querySelector(".exersizes-cards-container"),d=document.querySelector(".exersizes-result-card-container"),u=document.querySelector(".exersizes-message-container"),re=document.querySelector(".exersizes-pagination-container"),A=document.querySelector(".dash"),p=document.querySelector(".exercise-name"),D=1,oe=document.querySelector(".exersizes-list");document.querySelector(".exersizes-pagination-list");document.querySelector(".exersizes-pagination-btn");document.addEventListener("DOMContentLoaded",S());oe.addEventListener("click",e=>{if(e.preventDefault(),f(),e.target.nodeName==="BUTTON"){const t=e.target.textContent.trim();sessionStorage.clear(),sessionStorage.setItem("filterType",JSON.stringify(t)),S(t),me(),he(),de(e),y()}});l.addEventListener("click",e=>{if(e.preventDefault(),f(),e.target.nodeName!=="DIV"&&e.target.nodeName!=="H3"&&e.target.nodeName!=="P")return;const t=e.target.dataset.filter,s=e.target.dataset.target;O(t,s,D),ue(e),fe(),y(),sessionStorage.setItem("filterSubType",JSON.stringify(s)),sessionStorage.setItem("filterType",JSON.stringify(t))});re.addEventListener("click",e=>{if(e.preventDefault(),f(),e.target.nodeName==="BUTTON"){const t=sessionStorage.getItem("filterType").slice(1,-1),s=e.target.textContent.trim();let i;sessionStorage.getItem("filterSubType")?i=sessionStorage.getItem("filterSubType").slice(1,-1):i=sessionStorage.getItem("filterSubType"),ce(t,i,s),pe(e),y()}});async function S(e,t,s){const i=await o.get("/filters",{params:q(e,t,s)});try{if(i.data.results.length===0)throw new Error("No results found...");e=i.data.results[0].filter,le(i),w(i)}catch{L()}}async function O(e,t,s){const i=await o.get("/exercises",{params:q(e,t,s)});try{if(i.data.results.length===0)throw new Error("No results found...");H(i),s===1&&w(i)}catch{L()}}async function ce(e,t,s){t?await O(e,t,s):await S(e,t,s)}async function b(e){if(e.target.nodeName!=="BUTTON"&&e.keyCode!==13)return;f();const t=document.querySelector(".exersizes-input").value.trim().toLowerCase(),s=sessionStorage.getItem("filterType").slice(1,-1),i=sessionStorage.getItem("filterSubType").slice(1,-1);try{if(t.length===0)throw new Error("Nthing to search...");{const a=await o.get("/exercises",{params:q(s,i,D,t)});if(a.data.results.length===0)throw new Error("No results found...");m(),H(a),w(a),y()}}catch(a){console.log(a),L()}}async function le(e){const t=e.data.results;l.classList.remove("visually-hidden"),d.classList.add("visually-hidden"),u.classList.add("visually-hidden"),l.innerHTML="";const s=t.map(i=>{const a=i.filter,n=i.name;return`<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${i.imgUrl}) center center no-repeat; background-size: cover;" data-filter="${a}" data-target="${n}">
        <h3 class="exersizes-card-bytype-header" data-filter="${a}" data-target="${n}">
          ${i.name[0].toUpperCase()+i.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${a}" data-target="${n}">${i.filter}</p>
      </div></li>`}).join("");l.insertAdjacentHTML("beforeend",s)}function H(e){const t=e.data.results;d.classList.remove("visually-hidden"),l.classList.add("visually-hidden"),u.classList.add("visually-hidden"),d.innerHTML="";let s;const i=t.map(a=>{let n=a.name;s=a._id;const v=window.innerWidth;return v>=1440?n.length>25&&(n=a.name[0].toUpperCase()+a.name.slice(1,25).trim()+"..."):v<1440&&v>=768?n.length>17&&(n=a.name[0].toUpperCase()+a.name.slice(1,16).trim()+"..."):(n=a.name[0].toUpperCase()+a.name.slice(1,20).trim()+"...",console.log("320")),`        <li class="second-filter"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate">${Math.round(a.rating).toString().padEnd(3,".0")}</span>
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
                <h3 class="exersizes-card-title-h">${n}</h3>
    </div>
    <ul class="exersizes-card-info-list">
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories>${a.burnedCalories} / ${a.time} min</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${a.bodyPart[0].toUpperCase()+a.bodyPart.slice(1)}</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${a.target[0].toUpperCase()+a.target.slice(1)}</span></p></li>
    </ul>
</div></li>`}).join("");d.insertAdjacentHTML("beforeend",i)}async function L(e){l.classList.add("visually-hidden"),d.classList.add("visually-hidden"),u.classList.remove("visually-hidden");const t=document.querySelector(".exersizes-pagination-list");t.innerHTML="",u.innerHTML="";const s='<p class="noresult-message" >Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';u.insertAdjacentHTML("beforeend",s)}function de(e){document.querySelectorAll(".exersizes-menu-btn").forEach(i=>{i.classList.remove("exersizes-menu-btn-active")}),e.target.classList.add("exersizes-menu-btn-active")}function ue(e){A.classList.remove("visually-hidden"),p.classList.remove("visually-hidden"),p.textContent=e.target.dataset.target.trim()}function me(){p.textContent="",A.classList.add("visually-hidden"),p.classList.add("visually-hidden")}function q(e,t,s,i){const a={page:s,limit:12};if(i&&(a.keyword=i),e&&!t)return a.filter=e,a;if(!e&&!t)return a.filter="Muscles",a;switch(e){case"Muscles":a.muscles=t;break;case"Equipment":a.equipment=t;break;default:a.bodypart=t;break}return a}async function w(e,t){let s="";const i=document.querySelector(".exersizes-pagination-list");if(t){i.innerHTML="";return}const a=e.data.totalPages;if(i.innerHTML="",a>1)for(let n=1;n<=a;n++)n===1?s+=`<li
                class="exersizes-pagination-item exersizes-pagination-item-active"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${n}
                </button>
              </li>`:s+=`<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${n}
                </button>
              </li>`;i.insertAdjacentHTML("beforeend",s)}function pe(e){e.target.textContent.trim(),document.querySelector(".exersizes-pagination-item-active").classList.remove("exersizes-pagination-item-active"),e.target.classList.add("exersizes-pagination-item-active")}function ge(){window.scrollY>100?document.querySelector(".up-link").classList.add("show"):document.querySelector(".up-link").classList.remove("show")}function fe(){const e=document.querySelector(".exersizes-input"),t=document.querySelector(".exersizes-input-btn-s"),s=document.querySelector(".exersizes-input-container");document.querySelector(".exersizes-input-btn"),s.classList.remove("visually-hidden"),e.addEventListener("keyup",ye),t.addEventListener("click",b)}function ye(e){const t=document.querySelector(".exersizes-input-btn");t.classList.remove("visually-hidden"),e.target.value.trim().length>0&&(t.classList.remove("visually-hidden"),t.addEventListener("click",m)),e.keyCode===13&&(b(e),m(),t.classList.add("visually-hidden"))}function ve(){const e=document.querySelector(".exersizes-input-btn");e.classList.remove("visually-hidden");const t=s=>{s.preventDefault(),m(),e.classList.add("visually-hidden")};e.addEventListener("click",t)}function he(){const e=document.querySelector(".exersizes-input");document.querySelector(".exersizes-input-btn-s");const t=document.querySelector(".exersizes-input-container"),s=document.querySelector(".exersizes-input-btn");e.removeEventListener("input",ve),e.removeEventListener("click",b),t.classList.add("visually-hidden"),s.classList.add("visually-hidden")}function m(){const e=document.querySelector(".exersizes-input"),t=document.querySelector(".exersizes-input-btn");e.value="",t.classList.add("visually-hidden"),t.removeEventListener("click",m)}function f(){document.querySelector(".exersizes-header-filter-cont").insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function y(){document.querySelector(".loader").remove()}ge();
//# sourceMappingURL=commonHelpers2.js.map
