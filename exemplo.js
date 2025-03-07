// alert("Seja muito bem-vindo")
//
// var teste = prompt("digte qualquer coisa")
//
// alert(teste)



function testcolor() {
    const titulo = document.getElementById("titulo")
    titulo.style.color = "pink"
}
// function reset() {
//     document.getElementById("titulo").innerHTML = " Bem-vindo ao Nosso Site"
// }
//
// function testtexto() {
//     document.getElementById("titulo").innerHTML += " boa tarde"
// }
//
// function testinput() {
//     document.getElementById("input").value = "tarde"
// }

function Limparinput() {
    document.getElementById("inputbnt").value = ""
    var warning = "Certeza que deseja apagar?";
    if (confirm(warning)) {
        document.getElementById("firstname").value = ""
        document.getElementById("lastname").value = ""
        document.getElementById("name").value = ""
        document.getElementById("inputPassword").value = ""
        document.getElementById("exampleFormControlInput1").value = ""
        document.getElementById("exampleFormControlTextarea1").value = ""
    }
}

function color_firstname() {
    const element = document.getElementById("first").style
    element.color = "pink"
}
function color_lastname() {
    const element = document.getElementById("last").style
    element.color = "pink"
}
function color_user() {
    const element = document.getElementById("basic-addon1").style
    element.color = "pink"
}
function color_senha() {
    const element = document.getElementById("senha").style
    element.color = "pink"
}
function color_email() {
    const element = document.getElementById("email").style
    element.color = "pink"
}
function color_fale() {
    const element = document.getElementById("fale").style
    element.color = "pink"
}

function firtsname() {
    document.getElementById("firstname").value = "first Name"
}
function lastname() {
    document.getElementById("lastname").value = "Last name"
}
function nameuser() {
    document.getElementById("name").value = "Username"
}
function senha() {
    document.getElementById("inputPassword").value = "Password"
}
function emaila() {
    document.getElementById("exampleFormControlInput1").value = "Email"
}
function duvida() {
    document.getElementById("exampleFormControlTextarea1").value = "Fale sua duvida aqui"
}




