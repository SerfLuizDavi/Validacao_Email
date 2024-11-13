const emailinput = document.querySelector("#emailinput");
const resultmensage = document.querySelector("#resultmensage");
const emailform = document.querySelector("#emailform");

emailform.addEventListener("submit", function (event){
    event.preventDefault();

    const email = emailinput.value;

    const isValid = emailvalidetor(email);

if (isValid){
    resultmensage.textContent = "Email é Válido!";
    resultmensage.style.color = "green";
}
else{
    resultmensage.textContent = "Email não é Válido!";
    resultmensage.style.color = "red"
}

});

const emailvalidetor = (email)=>{
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
} 
