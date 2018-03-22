function funcA(){
    console.log("OLÁ MUNDO!")
    
}
function funcB(){
    let nome = "Luís"
    console.log("OLÁ " + nome + "!")
}
function funcC(){
    let c = prompt("Indique o comprimento da figura")
    let l = prompt("Indique a largura da figura")
    let area = c * l
    console.log("Área = " + area)

}
function funcD(){
    let n1 = parseInt(prompt("Indique o número")) 
    let s = prompt("Indique a operação")
    let n2 = parseInt(prompt("Indique o número")) 
    let res
    switch(s){
        case "+":
        res = n1 + n2
        console.log("Resultado = " + res)
        break
       


        case "-":
        res = n1 - n2
        console.log("Resultado = " + res)
        break

        case "x":
        res = n1 * n2
        console.log("Resultado = " + res)
        break

        case "*":
        res = n1 * n2
        console.log("Resultado = " + res)
        break

        case "/":
        res = n1 / n2
        console.log("Resultado = " + res)
        break

        case ":":
        res = n1 / n2
        console.log("Resultado = " + res)
        break

        
    }
}
function funcE(){
    let p = parseFloat(prompt("Indique o seu peso (kg)")) 
    let a = parseFloat(prompt("Indique a sua altura (m)")) 
    let res = p / (a * a)
    if (res < 18.5){
        console.log("Abaixo de Peso")
    }
    else if(res<24.9){
        console.log("Peso normal")
    }else if (result < 29.9) {
        console.log("Sobrepeso")
    } else if (result < 34.9) {
        console.log("Obesidade grau I")
    } else if (result < 39.9) {
        console.log("Obesidade grau II")
    } else {
        console.log("Obesidade grau III")  
    }

    

}
function funcF(){
    let s = prompt("O que deseja repetir:")
    let n = parseInt(prompt("Quantas vezes deseja repetir?"))

    for(let i=0;i<n;i++)
    {
        console.log(s)


    }
    
    /* 2ª MANEIRA

    let palavraNvezes = ""
    for(let i=0;i<n;i++)
    {
        palavraNvezes = palavraNvezes + s


    }
    console.log(palavraNvezes)
    */

}
function funcH() {
    let n = parseInt(prompt("Tabuado do : "))
    for (let i = 1; i < 11; i++) {
        console.log(n + " x " + i + " = " + n*i)
        
    }

}
function funcI() {
    let m1 = parseInt(prompt("Mínimo: "))
    let m2 = parseInt(prompt("Máximo: "))
    let result =0
    for (let i=m1; i<=m2; i++) {
        if(i % 3 == 0) {
            result = result + i
        }  
    }
    console.log("Resultado da soma dos múltiplos de 3: " + result)    

}  
function funcJ() {
    let n = parseInt(prompt("Número a verificar (se é primo): "))
    let primo = true
    for (let i = 2; i < n; i++) {
        if(n % i == 0) {
            primo = false
        }        
    }    
    let result = primo ? "SIM" : "NÃO"
    console.log(result)
}
function funcK() {
    //exc fatorial
    let n = parseInt(prompo("Introduza o nº a fatorizar: "))
    let result = 0
    for (let i = n; i < array.length; i--) {
        const element = array[i];
        
    }




}