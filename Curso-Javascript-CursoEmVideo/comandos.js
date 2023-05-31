/*
let cabelo = [5,4,3,2]

    console.log(`O vetor tem ${cabelo.length} posições`)
    console.log (`${cabelo[1]}`)
    
    //Metodo comum
    for(let pelo = 0; pelo<cabelo.length; pelo++){
        console.log(`Forma padrão ${cabelo[pelo]}`)
    }

    //Metodo pratico
    for (let pelo in cabelo){
        console.log(`Forma eficiente ${cabelo[pelo]}`)
    }

    //.push(): adiciona um ou mais elementos ao final do array.
    let fruits = ['apple', 'banana', 'orange'];

    fruits.push('grape'); // fruits agora é ['apple', 'banana', 'orange', 'grape']

    fruits.push('kiwi', 'melon');  // fruits agora é ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon']

    //.pop(): remove o último elemento do array e retorna esse elemento.
    let fruta = ['apple', 'banana', 'orange'];

    let removeFruta = fruits.pop(); // removedFruit é 'orange' e fruits agora é ['apple', 'banana']

    //.shift(): remove o primeiro elemento do array e retorna esse 
    let fruit = ['apple', 'banana', 'orange'];

    let removedFruit = fruits.shift(); // removedFruit é 'apple' e fruits agora é ['banana', 'orange']
    
    //.unshift(): adiciona um ou mais elementos no início do array.
    let fruita = ['apple', 'banana', 'orange'];

    fruita.unshift('kiwi'); // fruits agora é ['kiwi', 'apple', 'banana', 'orange']

    fruita.unshift('grape', 'melon'); // fruits agora é ['grape', 'melon', 'kiwi', 'apple', 'banana', 'orange']

    let num = [1,7,5,4,3,2]

    //Procurando um item
    cabelo.indexOf(4)
    //Quando não encontrar o valor retorna -1
    cabelo.indexOf(9)
    //Ordena os elementos dos index
    cabelo.soft()
    */

    function parimp (n){
        if (n%2 == 0){
            return `${n} é um número par`

        }else{
            return `${n} é um número impar`
        }
    }

    let res = parimp(1121)
    console.log(res)

    function soma (n1, n2){
        let a = n1 + n2
        return `O resultado da soma foi: ${a}`
    }

    console.log(soma(20, 10))

    

