//HORA DO DIA

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = 20 //Lugar de TESTE da hora
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = './img/Select-Dia.png'
        document.body.style.background = '#e0e7aa'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = './img/Select-Tarde.png'
        document.body.style.background = '#ddac75'
    } else {
        //BOA NOITE!
        img.src = './img/Select-Noite.png'
        document.body.style.background = '#032174'
    }
}

//IDENTIFICADOR DE IDADE

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './img/foto-crianca-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './img/foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './img/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', './img/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './img/foto-crianca-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './img/foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './img/foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', './img/foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

//CONTADOR

function contador() {
    //Pegando os IDs e colocando nas variaveis
    let ini = document.getElementById('ini')
    let fin = document.getElementById('fin')
    let pas = document.getElementById('pas')
    let cont = document.getElementById('cont')

    //Condição para que o programa não rode ao iniciar a varial com 0.
    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
        //Mensagem de erro.
        cont.innerHTML = 'Impossível contar!'
        window.alert(`[ERROR] Preencha os dados!`)
    } else {
        //Condição satisfeita.
        cont.innerHTML = 'Contando: <br> '

        //Os valores recebidos são colocados em variaveis para usar nas condições de contagem.
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(pas.value)

        //Condição para que caso PASSO seja 0 mudar o valor automaticamente para 1, dando inicio ao programa.
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente.
            for (let c = i; c <= f; c += p) {
                cont.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente.
            for (let c = i; c >= f; c -= p) {
                cont.innerHTML += `${c} \u{1f449}`
            }
        }
        //Resultado final do contador.
        cont.innerHTML += '\u{1F3C1}'
    }
}

//TABUADA

function tabuada() {
    //Colocando os IDs em variaveis
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    //Condição de funcionamento, valor == 0, não passa.
    if (num.value.length == 0) {
        window.alert("Invalido, digite um número")

        // diferente de 0, segue o programa
    } else {
        //transformando em Number o valor da variavel que foi digitada como string.
        let n = Number(num.value)
        //Fazendo um contador com while e iniciando com = 1
        let c = 1
        //Limpa a tela no final do ciclo
        tab.innerHTML = ''
        while (c <= 10) {
            //Criando um elemento option de forma dinamica
            let item = document.createElement('option')
            //inserindo dentro do item um texto com template-string
            item.text = `${n} x ${c} = ${n * c}`
            //Fazer a tabuada aparecer
            tab.appendChild(item)
            c++
        }
    }
}

//ANALIZADOR DE NÚMEROS

//Declaração das variaveis e indicação dos seus valores
    let num = document.querySelector('input#fnum') //pegando o numero
    let lista = document.querySelector('select#flista') //pegando a lista
    let res =  document.querySelector('div#res') //pegando o resultado
    let valores = [] //defininco o array

    function isNum(n) {
        //Se n for um numero entre 1 e 100, VERDADEIRO se não FALSO
        if (Number(n) >= 1 && Number(n) <= 100){
             return true
        }else{
            return false
        }
    }
    
    function inLista (n , l){
        //Se dentro l não for encontardo na lista. VERDADEIRO se não FALSO
        if (l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }

    function adicionar(){
        //Se o número entre 1 e 100 e Não encontrado na lista. 
        if(isNum(num.value) && !inLista(num.value , valores)){
            //adiciona o valor do número.
            valores.push(Number(num.value))
            //Cria um elemento option com o texto.
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            //mostra mostra o elemento option criado
            lista.appendChild (item)
        }else{
            //Alerta erro ao usuario.
            window.alert('Valor invalido ou já encontrado na lista.')
        }
        //Limpa a tela.
        num.value = ''
        //aponta a seleção do mouse
        num.focus()
    }   

    function finalizar(){
        if (valores.length == 0){
            window.alert('Adicionar valores antes de finalizar')
        }else{
            //Total de valores
            let tot = valores.length

            //estabelecendo variaveis para verificar os valores na posição 0 de array
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0

            //
            for (let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior)
                    maior = valores[pos]

                if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }
            media = soma/tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 
        }
    }