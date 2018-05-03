// Defines a class to represent Personalities
class Game {
    constructor(nome, genero, plataformas, fotografia) {
        this.nome = nome
        this.genero = genero
        this.plataformas = plataformas        
        this.fotografia = fotografia
    } 

    // Nome
    get nome() {
        return this._nome
    }

    set nome(newNome) {
        this._nome = newNome        
    }

    // Genero
    get genero() {
        return this._genero
    }

    set genero(newGenero) {
        this._genero = newGenero       
    }

    // Plataformas
    get plataformas() {
        return this._plataformas
    }

    set plataformas(newPlataformas) {
        console.log(newPlataformas)
        this._plataformas = newPlataformas        
    }

    // Fotogragia
    get fotografia() {
        return this._fotografia
    }
    set fotografia(newFotografia) {
        this._fotografia = newFotografia
    }
}

// Defines an array with Personlity objects
let games = []




window.onload = function() {

    let frmGames = document.getElementById("frmGames")

    frmGames.addEventListener("submit", function(event) {
        
        // 1. Validar o campo Platforms
        let plataformas = []
        let strError = ""

        let nodesPlataformas = document.getElementsByClassName("form-check-input")        
        for (let i = 0; i < nodesPlataformas.length; i++) {
            if (nodesPlataformas[i].checked == true) {                
                plataformas.push(nodesPlataformas[i].value)
            }            
        }
        event.preventDefault()

        // 1. Validar o campo Platforms (alternativa mais compacta)
        //console.log(document.querySelectorAll('input[type="checkbox"]:checked').length)
        
        if(plataformas.length == 0) {
            strError = "Por favor, selecione pelo menos uma plataforma!"
        }
        
        if(strError == "") {
            // 2. Criar um objeto Game
            let nome = document.getElementById("inputName").value
            let genero = document.getElementById("inputGenre").value
            let fotografia = document.getElementById("inputPhoto").value
    
            let newGame = new Game(nome, genero, plataformas, fotografia) 

            // 3. Push the new object to the array
            games.push(newGame)
            event.preventDefault()

            // 4. Render table
            renderTable()
        } else {
            alert(strError)            
        }
       
        event.preventDefault();
    })



    // Function to render the Game objects in the table
    function renderTable() {
        
        let tblGames = document.getElementById("tblGames")

        let strHtml = "<thead><tr><th>#</th>" +
        "<th>Nome</th>" +
        "<th>Género</th>" +
        "<th>Plataformas</th>"+        
        "<th>Fotografia</th>"+
        "</tr>" + 
        "</thead><tbody>"

        for (var i = 0; i < games.length; i++) {
            strHtml += "<tr>" +
            "<td>" + (i+1) + "</td>" +
            "<td>" + games[i].nome + "</td>" +
            "<td>" + games[i].genero + "</td>" +
            "<td>" + games[i].plataformas + "</td>" +            
            "<td>" + games[i].fotografia + "</td>" +
            "</tr>"
        }
        strHtml += "</tbody>"

        tblGames.innerHTML = strHtml

    }


}