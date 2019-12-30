function verificar() {
    var data =new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', 'crianca_menino.png') 
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_masc.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_masc.png')
            } else {
                img.setAttribute('src', 'idoso_masc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'crianca_menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_fem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_fem.png')
            } else {
                img.setAttribute('src', 'idoso_fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    
    }
}