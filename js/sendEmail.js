var submit = document.getElementById('submit')
submit.addEventListener("click", (event) => {

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


    fetch('https://empreendimentosrj.com.br/emailDev', myInit)
    .then(res => {
        alert('Mensagem enviada com sucesso')
        window.location.reload()
    })


})
