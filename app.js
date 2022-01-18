
let button = document.querySelector('#bnt')
button.style.display = 'none'
button.addEventListener('click', (clique) => {
    startGame();
});


let startGame = () => {
    let url = `https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`

    fetch(url).then((response) => {
            return response.json()
        })
        .then((data) => {
            let randomNumber = data.value
            if (typeof randomNumber === 'number') {
                console.log(randomNumber)


                let chute = document.querySelector('#chute')
                chute.addEventListener('click', done)

                function done() {
                    let final = document.querySelector('#final')
                    let resul = document.querySelector('#userValue').value
                    console.log(resul)
                    if (resul == randomNumber) {
                        final.innerHTML = `Você acertou!`
                        document.querySelector('#finalNumber').innerHTML = resul
                        button.style.display = 'block'
                    } else if (resul < randomNumber) {
                        final.innerHTML = `É maior`
                        document.querySelector('#finalNumber').innerHTML = resul
                    } else if (resul > randomNumber) {
                        final.innerHTML = `É menor`
                        document.querySelector('#finalNumber').innerHTML = resul
                    }
                }
            } else {
                console.log('Alerta de erro!')
                return startGame();
            }
            console.log(data)

        })
}
startGame();
