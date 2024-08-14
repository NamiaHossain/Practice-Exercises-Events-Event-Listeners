var button=document.querySelector(".got-this");
var div=document.querySelector(".modal");
var span=document.querySelector(".modal-x");
button.addEventListener("click",function(){
   if(modal.classList.contains("show-modal")) {
    modal.classList.remove("show-modal");
    button.innerText="You've got this!!!"
}else{
    modalX.addEventListener("click",function(){
        modal.classList.add("show-modal");
        button.innerText="Who's got this?";
    })
    
}

})

