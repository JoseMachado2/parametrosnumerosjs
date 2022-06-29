function parametro () {
    let n1 = Number(prompt(' Insira o primeiro valor:'));
    let n2 = Number(prompt(' Insira o segundo valor:')); 
    let iguall
    let soma
    let maiormenordez
    let maiormenorvinte
    if (n1 == n2 ) {   
        iguall = 'iguais'
    } else if (n1 != n2) {
        iguall = 'diferentes'
    }

    soma = n1 + n2
    if (soma > 10){
        maiormenordez = 'maior'
    }else if (soma < 10){
        maiormenordez = 'menor'
    }

    if (soma < 20){
        maiormenorvinte = 'menor'
    }else if (soma > 20){
        maiormenorvinte = 'maior'
    }

    

    alert(`Os numeros ${n1} e ${n2} são ${iguall} a soma deles é ${soma} que é ${maiormenordez} que 10 e ${maiormenorvinte} que 20`)   




}

    parametro ();
