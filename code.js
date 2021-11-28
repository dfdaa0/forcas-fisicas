function acao(){
    forcaEletrica()
    forcaGravitacional()
}

function forcaEletrica(){
    const carga = 1.6 * Math.pow(10, -19) // carga do eletron em Coulombs
    console.log('Carga do eletron em Coulombs: ' + carga)
    const u = 1.66054 * Math.pow(10, -24) // unidade de massa atomica em Gramas
    console.log('Massa elementar em gramas: ' + u)
    const massaSodio = 22.989769 * u
    console.log('Massa do átomo de sodio em gramas: ' + massaSodio)
    const massaCloro = 35.453 * u
    console.log('Massa do átomo de cloro em gramas: ' + massaCloro)
    const cargaSodio = 1
    const cargaCloro = 2

    let massa1 = document.getElementById('massa1').value
    console.log('Massa recebida do sódio em gramas: ' + massa1)
    let massa2 = document.getElementById('massa2').value
    console.log('Massa recebida do cloro em gramas: ' + massa2)

    let cargaNa = (massa1/massaSodio)*cargaSodio
    let cargaCl = (massa2/massaCloro)*cargaCloro
    let distancia = document.getElementById('distancia').value
    console.log(cargaNa + ' elétrons extra no sódio ' + cargaCl + ' prótons extra no cloro')
    let k = 9 * Math.pow(10, 9)
    let forcaE = (k*cargaNa*cargaCl)/Math.pow(distancia, 2)
    console.log('Força elétrica resultante: ' + forcaE + ' N')
}

function forcaGravitacional(){
 //TODO
}