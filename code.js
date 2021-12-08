function acao(){
    let fE = forcaEletrica()
    let fG = forcaGravitacional()
    let vezesMaior = fE/fG
    let p1 = document.getElementById("forca-eletro")
    let p2 = document.getElementById("forca-gravit")
    let obs = document.getElementById("observacoes")
    p1.innerText = 'A força elétrica encontrada foi ' + fE + ' Newtons'
    p2.innerText = 'A força gravitacional encontrada foi ' + fG + ' Newtons'
    obs.innerText = 'A força elétrica é ' + vezesMaior + ' vezes maior que a força gravitacional'
}

function forcaEletrica(){
    let ionsSodio = document.getElementById('ion1').value
    let ionsCloro = document.getElementById('ion2').value
    let distancia = document.getElementById('distancia').value
    const carga = 1.6 * Math.pow(10, -19) // carga do eletron em Coulombs
    let k = 9 * Math.pow(10, 9)
    console.log('Carga do elétron em Coulombs: ' + carga)
    forcaE = k*(ionsSodio*carga*ionsCloro*carga)/Math.pow(distancia, 2)
    console.log("Força elétrica: " + forcaE + " N")
    return forcaE
}

function forcaGravitacional(){
    let ionsSodio = document.getElementById('ion1').value
    let ionsCloro = document.getElementById('ion2').value
    let distancia = document.getElementById('distancia').value
    const u = 1.66054 * Math.pow(10, -24) // unidade de massa atomica em Gramas
    console.log('Massa elementar em gramas: ' + u)
    const massaSodio = 22.989769 * u
    console.log('Massa do íon de sodio em gramas: ' + massaSodio)
    const massaCloro = 35.453 * u
    console.log('Massa do íon de cloro em gramas: ' + massaCloro)
    const g = 6.67 * Math.pow(10, -11)
    forcaG = g*((ionsSodio*massaSodio)*(ionsCloro*massaCloro))/Math.pow(distancia, 2)
    console.log("Força gravitacional: " + forcaG + " N")
    return forcaG
}

function protonEletron(){
    let distancia = document.getElementById('distancia2').value
    const mP = 1.67*Math.pow(10, -24)
    console.log('Massa do próton: ' + mP)
    const mE = 9.11*Math.pow(10, -31)
    console.log('Massa do elétron: ' + mE)
    const q = 1.6*Math.pow(10, -19)
    const g = 6.67 * Math.pow(10, -11)
    console.log('Carga: ' + q + ' e constante gravitacional: ' + g)
    let k = 9 * Math.pow(10, 9)
    console.log('Constante k: ' + k)
    let fE = (k*Math.pow(q, 2))/Math.pow(distancia, 2)
    let fG = (mP*mE*g)/Math.pow(distancia, 2)
    console.log('Força elétrica: ' + fE + ' e Força gravitacional: ' + fG)
    document.getElementById("forca-eletro2").innerText = "A força elétrica encontrada foi " + fE + " Newtons"
    document.getElementById("forca-gravit2").innerText = "A força gravitacional encontrada foi " + fG  + " Newtons"
    let vezesMaior = fE/fG
    let observacoes = document.getElementById('observacoes2')
    observacoes.innerText = 'A força elétrica é ' + vezesMaior + ' vezes maior que a força gravitacional!'
}