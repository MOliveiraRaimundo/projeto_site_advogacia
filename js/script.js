const form = document.querySelector("#contato-form")
const msgFedBack = document.querySelector(".msgFedBack")
const btnEnviar = document.querySelector("#btnEnviar")



function enviarContato(){
const name = document.querySelector("#name").value
const email = document.querySelector("#email").value
const message = document.querySelector("#message").value


msgFedBack.innerHTML = `<p> Agradecemos seu contato ${name}</p>`

name.value = "";
email.value = "";
message.value = "";



if(!name.value) return 
if(!isEmailValid(email.value))return
if(!message.value) return




}

function isEmailValid(email){
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,}$/)

    if(emailRegex.test(email)){
        return true
    }
    return false
}

btnEnviar.addEventListener("click", (e) =>{
    e.preventDefault()
    enviarContato()
    isEmailValid(email)
})