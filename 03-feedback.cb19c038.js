!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");window.addEventListener("DOMContentLoaded",(function(e){try{var r=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};t.value=r.email||"",a.value=r.message||""}catch(e){console.error("Get state error: ",e.message)}})),e.addEventListener("input",(function(e){try{var t=e.currentTarget.elements,a=t.email,r=t.message;localStorage.setItem("feedback-form-state",JSON.stringify({email:a.value,message:r.value}))}catch(e){console.error("Get state error: ",e.message)}})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")||"Local Storage is empty! "),t.value="",a.value="",localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.cb19c038.js.map
