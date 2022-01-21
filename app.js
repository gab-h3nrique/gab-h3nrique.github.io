
// ESSA FUNCTION FAZ O DISPLAY ZERAR E MOSTRAR SOMENTE O PRIMEIRO
function clearDisplay() {
    document.querySelector('#stick_AA').style.background = 'rgb(56, 1, 255)'
    document.querySelector('#stick_BB').style.background = 'rgb(56, 1, 255)'
    document.querySelector('#stick_CC').style.background = 'rgb(56, 1, 255)'
    document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
    document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
    document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
    document.querySelector('#stick_GG').style.background = 'rgba(56, 1, 255, 0.137)'
    document.querySelector('#containerTwo').style.display = 'none';
    document.querySelector('#containerthree').style.display = 'none';
    document.querySelector('#userValue').value='';
}
clearDisplay();
// EVENTO PARA O BOTÃO NOVA PARTIDA FAZ COM OQUE EXECUTE NOVAMENTE O STARTGAME
document.querySelector('#reload').style.display = 'none'
document.querySelector('#reload').addEventListener('click', (clique) => {  
    document.querySelector('#final').style.display = 'none';
    clearDisplay()
    startGame();
});
//FUNÇÃO CRIADA STARTGAME EXECUTA A LOGICA DO BLOCO QUE INFORMA SE O JOGO FOI GANHO OU NAO
let startGame = () => {
    //  ESSE BLOCO DE COMANDO VAI RESETAR A INSTRUÇÃO DO USUARIO
    document.querySelector('#input').style.display = 'flex'
    document.querySelector('#final').style.display = 'flex';
    document.querySelector('#final').innerHTML = '';
    document.querySelector('#reload').style.display = 'none'
    // ------------------------------------------------------------
    let url = `https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`
// VARIAVEL CRIADA PARA RECEBER A URL DA API PARA QUE SEJA EXECUTADA NO FUNCTION FETCH
    fetch(url).then((response) => {
            return response.json()///RETORNANDO .JSON PARA A RESPONSE
        })
        .then((data) => {
            let = api = 0;
             api = data.value
            //CONDICIONAL PARA VERIFICAR SE O VALOR RECEBIDO DA API É TRUE E NUMBER
            if (api && typeof api === 'number') {
                
    
                //UM EVENTO DE ESCUTA EXECUTANDO A LOGICA DE VITÓRIA DO JOGO
                let getEventClickInside = document.querySelector('#send')
                getEventClickInside.addEventListener('click', (led) => {

                    //VARIÁVEL CRIADA PARA RECEBER O INPUT DO USER E COMPARAR COM O DATA.VALUE
                    let result = parseInt(document.querySelector('#userValue').value)


                    if (result === api) {
                        document.querySelector('#final').style.color = '#0ac50a';
                        document.querySelector('#final').innerHTML = `Você acertou!!`;
                        document.querySelector('#reload').style.display = 'flex';
                        document.querySelector('#input').style.display = 'none';

                    } else if (result < api) {
                        document.querySelector('#final').style.color = '#707070';
                        document.querySelector('#final').innerHTML = `É maior`
                        
                    } else if (result > api) {
                        document.querySelector('#final').style.color = '#707070';
                        document.querySelector('#final').innerHTML = `É menor`
                    }

                })
                
            } else {
                console.log('Alerta de erro!')
                return startGame(); //RETORNO PARA REPETIR O STARTGAME SE A API NÃO ENTREGAR TRUE E NUMERO
            }
            console.log(data)

        }).catch((err)=>{//CAPTURANDO O ERRO E GERANDO UM POP-UP DE BAD URL
            console.log(err);
            alert('Error: ' + err.message)
        })
}
document.querySelector('#userValue').value='';//LIMPANDO O INPUT CLIANDO NO Enter
startGame(); //INICIALIZANDO O BLOCO DE CODIGO ACIMA

/// AS TRES LET MAPLED BASICAMENTE MAPEANDO CADA LED PARA RODAR NO DISPLAY
let mapLedOne = {
    one() {
        document.querySelector('#stick_AA').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_BB').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_CC').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_GG').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    two() {
        document.querySelector('#stick_AA').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_BB').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_CC').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_DD').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_GG').style.background = 'rgb(56, 1, 255)'
    },
    three() {
        document.querySelector('#stick_AA').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_BB').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_CC').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_GG').style.background = 'rgb(56, 1, 255)'
    },
    four() {
        document.querySelector('#stick_AA').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_BB').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_CC').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_GG').style.background = 'rgb(56, 1, 255)'
    },
    five() {
        document.querySelector('#stick_AA').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_BB').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_CC').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_FF').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_GG').style.background = 'rgb(56, 1, 255)'
    },
    six() {
        document.querySelector('#stick_AA').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_BB').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_CC').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_FF').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_GG').style.background = 'rgb(56, 1, 255)'
    },
    seven() {
        document.querySelector('#stick_AA').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_BB').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_CC').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_GG').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    eight() {
        document.querySelector('#stick_AA').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_BB').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_CC').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_GG').style.background = 'rgb(56, 1, 255)'
    },
    nine() {
        document.querySelector('#stick_AA').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_BB').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_CC').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_DD').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_EE').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_FF').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_GG').style.background = 'rgb(56, 1, 255)'
    },
    
};
let mapLedTwo = {
    one() {
        document.querySelector('#stick_Aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    two() {
        document.querySelector('#stick_Aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Dd').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgb(56, 1, 255)'
    },
    three() {
        document.querySelector('#stick_Aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgb(56, 1, 255)'
    },
    four() {
        document.querySelector('#stick_Aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgb(56, 1, 255)'
    },
    five() {
        document.querySelector('#stick_Aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Gg').style.background = 'rgb(56, 1, 255)'
    },
    six() {
        document.querySelector('#stick_Aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Gg').style.background = 'rgb(56, 1, 255)'
    },
    seven() {
        document.querySelector('#stick_Aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    eight() {
        document.querySelector('#stick_Aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgb(56, 1, 255)'
    },
    nine() {
        document.querySelector('#stick_Aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgb(56, 1, 255)'
    },
    zero() {
        document.querySelector('#stick_Aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_Gg').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    
};
let mapLedThree = {
    one() {
        document.querySelector('#stick_aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    two() {
        document.querySelector('#stick_aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_dd').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgb(56, 1, 255)'
    },
    three() {
        document.querySelector('#stick_aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgb(56, 1, 255)'
    },
    four() {
        document.querySelector('#stick_aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgb(56, 1, 255)'
    },
    five() {
        document.querySelector('#stick_aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_gg').style.background = 'rgb(56, 1, 255)'
    },
    six() {
        document.querySelector('#stick_aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_gg').style.background = 'rgb(56, 1, 255)'
    },
    seven() {
        document.querySelector('#stick_aa').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    eight() {
        document.querySelector('#stick_aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgb(56, 1, 255)'
    },
    nine() {
        document.querySelector('#stick_aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_bb').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_cc').style.background = 'rgba(56, 1, 255, 0.137)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgb(56, 1, 255)'
    },
    zero() {
        document.querySelector('#stick_aa').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_bb').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_cc').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_dd').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ee').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_ff').style.background = 'rgb(56, 1, 255)'
        document.querySelector('#stick_gg').style.background = 'rgba(56, 1, 255, 0.137)'
    },
    
};


//VARIAVEL CRIADA GLOBAL PARA PEGAR O INPUT DO USER E EXECUTAR A LOGICA DO DISPLAY LED
let getUserInput;
//ARRAY ARRAYINPUT PARA SEPARAR CADA NUMERO EXEMPLO: 230 => 2, 3, 0
let arrayInput =[]

//BLOCO DE FUNCTION PARA ESCONDER E MOSTRAR OS 3 DISPLAYS LED
function showDisplay(getting){
    if(getting.length === 1) {
        document.querySelector('#containerTwo').style.display = 'none';
        document.querySelector('#containerthree').style.display = 'none';
    } else if (getting.length === 2) {
        document.querySelector('#containerthree').style.display = 'none';
        document.querySelector('#containerTwo').style.display = 'flex';
    
    } else if (getting.length === 3) {
        document.querySelector('#containerTwo').style.display = 'flex';
        document.querySelector('#containerthree').style.display = 'flex';
    }
    }

//EVENTO DE ESCUTA PARA INICIAR O BLOCO DE LOGICA DO 3 LEDS
let getEventClick = document.querySelector('#send')
getEventClick.addEventListener('click', (led) => {
    //GETUSERVALUE RECEBENDO O VALOR DO USUARIO NO INPUT
    getUserInput = document.querySelector('#userValue').value
    console.log(getUserInput)
    arrayInput.splice(0, 3) //ZERAR A ARRAY ANTES DE RECEBER UM NOVO VALOR

    //LOOP PARA SEPARAR CADA VALOR DO USUARIO EM UM UNICO ELEMENTO, EXEMPLO '230' => '2', '3', '0'
    for (let i = 0; i< getUserInput.length; i++) {

        arrayInput[i] = parseInt(getUserInput[i])
    }
    //FUNÇÃO PARA TIRA O ZERO A ESQUERDA, POIS EU CONSEGUIR FAZER DE OUTRA FORMA
    if (arrayInput[0] === 0 && arrayInput[1] === 0) {
        console.log('hello')
        arrayInput.splice(0, 2)
    } else if (arrayInput[0] === 0) {
        arrayInput.shift();
        console.log(`o arrayInput ficou assim: ${arrayInput}`)
    }


    showDisplay(arrayInput)//INICIALIZANDO O BLOCO DE FUNCTION PARA OS 3 DISLPAYS LED
    getUserInput = 0;

//BLOCO DE CONDICIONAL PARA LIGAR CADA LEDE MAPEADO PORLETRA NO DISPLAY
    if (arrayInput[0] === 1) {
        mapLedOne.one()
    } else if (arrayInput[0] === 2) {
        mapLedOne.two()
    } else if (arrayInput[0] === 3) {
        mapLedOne.three()
    } else if (arrayInput[0] === 4) {
        mapLedOne.four()
    } else if (arrayInput[0] === 5) {
        mapLedOne.five()
    } else if (arrayInput[0] === 6) {
        mapLedOne.six()
    } else if (arrayInput[0] === 7) {
        mapLedOne.seven()
    } else if (arrayInput[0] === 8) {
        mapLedOne.eight()
    } else if (arrayInput[0] === 9) {
        mapLedOne.nine()
    }
    
    if (arrayInput[1] === 1) {
        mapLedTwo.one()
    } else if (arrayInput[1] === 2) {
        mapLedTwo.two()
    } else if (arrayInput[1] === 3) {
        mapLedTwo.three()
    } else if (arrayInput[1] === 4) {
        mapLedTwo.four()
    } else if (arrayInput[1] === 5) {
        mapLedTwo.five()
    } else if (arrayInput[1] === 6) {
        mapLedTwo.six()
    } else if (arrayInput[1] === 7) {
        mapLedTwo.seven()
    } else if (arrayInput[1] === 8) {
        mapLedTwo.eight()
    } else if (arrayInput[1] === 9) {
        mapLedTwo.nine()
    } else if (arrayInput[1] === 0) {
        mapLedTwo.zero()
    }

    if (arrayInput[2] === 1) {
        mapLedThree.one()
    } else if (arrayInput[2] === 2) {
        mapLedThree.two()
    } else if (arrayInput[2] === 3) {
        mapLedThree.three()
    } else if (arrayInput[2] === 4) {
        mapLedThree.four()
    } else if (arrayInput[2] === 5) {
        mapLedThree.five()
    } else if (arrayInput[2] === 6) {
        mapLedThree.six()
    } else if (arrayInput[2] === 7) {
        mapLedThree.seven()
    } else if (arrayInput[2] === 8) {
        mapLedThree.eight()
    } else if (arrayInput[2] === 9) {
        mapLedThree.nine()
    } else if (arrayInput[2] === 0) {
        mapLedThree.zero()
    }
})

    /* TENTEI USAR LOOP ALINHADO PORÉM NÃO CONSEGUI INTEGRAR AQUI.
    BASICAMENTE ELE IRIA AUTOMATIZAR A CONDICIONAL PARA LIGAR CADA NUMERO DE FORMA FLEXISÍVEL.
    
        let myArray = [0,1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < arrayInput.length; i++) {
        for (let j = 0; j < myArray.length; j++) {
            if (arrayInput[i] === myArray[j]) {
                mapLed[j]
                console.log('hello')
            } 
        }
    } */
