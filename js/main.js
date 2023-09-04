$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira um Nome válido!',
            telefone: 'Por favor, insira um Telefona Válido!',
            email: 'Por favor, forneça um Email válido!',
            mensagem: 'Por favor, insira sua Mensagem!'
        },
        submitHendler: function(form) {

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
        }
    })

})