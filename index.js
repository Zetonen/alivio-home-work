const btnEl = document.querySelector(".login-form-item-start-btn");
btnEl.style.display = "none";
setInterval(()=>{
    console.log('second')
},1000)
setTimeout(()=>{
    btnEl.style.display = "block";
    console.log('end')
},5000)