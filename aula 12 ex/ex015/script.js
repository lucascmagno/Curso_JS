function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.lenght == 0 || Number(fAno.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','crianca_m.png')
            } else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src','jovem_m.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto_m.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso_m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','crianca_f.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem_f.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','adulto_f.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}