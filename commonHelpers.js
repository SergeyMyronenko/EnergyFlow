import{g as a,c as s,u as r}from"./assets/modals-functions-232d9ea3.js";import"./assets/vendor-8cce9181.js";const t={exerciseModal:document.querySelector(".modal"),exsCont:document.querySelector(".exs-container"),body:document.querySelector("body")};document.addEventListener("click",c);async function c(o){try{if(o.target.classList.contains("favorites-list-button")){const e=await a(o.target.dataset.id);t.exsCont.innerHTML=s(e.data),t.exerciseModal.classList.toggle("is-open"),r(),t.body.classList.add("body-modal")}}catch(e){throw new Error(e.message)}}
//# sourceMappingURL=commonHelpers.js.map
