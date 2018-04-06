function funcA(){
    //pedir frase
    let frase = prompt("Escreva a sua frase")
    console.log(frase.length)
}
function funcB(){
    let nome = prompt("Indique o seu nome: ")
    let apelido = prompt("Indique o seu Apelido: ")
    console.log("O seu nome completo é: "+ apelido + " " + nome)

}
function funcC(){
    let frase1 = prompt("Escreva algo: ").toLowerCase()
    let cont=0
    for (let i = 0; i < frase1.length; i++) {
        switch(frase1[i]){
            case "a": cont++ 
            break
            case "e": cont++ 
            break
            case "i": cont++ 
            break
            case "o": cont++ 
            break
            case "u": cont++ 
            break
            case "U": cont++ 
            break            
            
        }
    }
    console.log(cont)

}
function funcD(){
    let frase2 = prompt("Escreva um string:")
    frase2 += " "
    let count = 0
    for(let i=0; i <frase2.length;i++){

        if(frase2[i]!=" " &&frase2[i+1]==" ")
        {
            count++
        }
    }
    console.log(count)

}
function funcE(){
    let frase3 = prompt("Escreva uma frase:")
    let inv = ""
    for(let i=(frase3.length);i >=0;i--)
    {
        inv+=frase3[i]        
    }
    console.log(inv)
    

}
function funcF(){
    

}
function funcG(){
    

}
function funcH(){
    

}