export function unmaskValue(value) {

    if(value == undefined) return ''
    return value.replace(/[\. (),:-]+/g, "");
}

export function validateCpf (cpf){

    if(cpf == undefined) return false

    var soma = 0;
    var i = 0
    var resto;
    var inputCPF = unmaskValue(cpf);

    if (inputCPF == '00000000000') return false;
    if (inputCPF == '11111111111') return false;
    if (inputCPF == '22222222222') return false;
    if (inputCPF == '33333333333') return false;
    if (inputCPF == '44444444444') return false;
    if (inputCPF == '55555555555') return false;
    if (inputCPF == '66666666666') return false;
    if (inputCPF == '77777777777') return false;
    if (inputCPF == '88888888888') return false;
    if (inputCPF == '99999999999') return false;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(inputCPF.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(inputCPF.substring(10, 11))) return false;

    return true;
}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

