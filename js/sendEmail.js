var submit = document.getElementById('submitDiv')

submit.addEventListener("click", (event) => {
    sendEmail(event)


})


function sendEmail(event){

    event.preventDefault()

    let reqBody = {
        nome: document.getElementsByName('nome')[0].value,
        email: document.getElementsByName('email')[0].value,
        assunto: document.getElementsByName('assunto')[0].value,
        mensage: document.getElementById('mensagem').value
    }

    var myInit = { 
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    };

    if(reqBody.nome == '' || reqBody.email == '' || reqBody.assunto == '' || reqBody.mensage == '' ){
        alert('Todos os campos são obrigatórios')
        return false
    }
   

    fetch('https://empreendimentosrj.com.br/emailDev', myInit)
    .then(res => {
        alert('Mensagem enviada com sucesso')
        window.location.reload()
    })


}


function HTMLModification(){

    let loading = document.getElementById('loading')
    let submitText = document.getElementById('submit')
    submitText.style.display = 'none'
    loading.style.display = 'flex'

}
