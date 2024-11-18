const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    alert ('clicou no botão');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const calcIMC = (peso / (altura * altura)).toFixed(1)
        let classeIMC = ''

        if (calcIMC < 18.5) {
            classeIMC = 'precisa comer mais ein.'
        } 
        
        else if (calcIMC <25) {
            classeIMC = 'já ta top, fique assim mesmo'
        }

        else if (calcIMC <29.9) {
            classeIMC = 'aí já precisa de uns exercícios pra melhorar'
        }

        else if (calcIMC <34.9) {
            classeIMC = 'vamos fazer uma dieta? chegou no grau I de obesidade já'
        }

        else if (calcIMC <39.9) {
            classeIMC = 'ei, to te falando como amigo, manera esses podrão aí e vai se exercitar'
        }

        else {
            classeIMC = 'quer fazer cosplay de leitão pro abate ou de lua cheia? kkkk'
        }
        resultado.textContent = `aí ${nome}, deu ${calcIMC} ${classeIMC}`
    }
    else {
        resultado.textContent = 'escreve tudo aí oh zé mané!!';
    }
}

calcular.addEventListener('click', imc);