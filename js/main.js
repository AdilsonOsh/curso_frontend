$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            sobrenome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let Incorretos = validador.numberOfInvalids();
            if (Incorretos) {
                alert(`Você tem ${Incorretos} campos incorretos`)
            }
        }
    })
});



