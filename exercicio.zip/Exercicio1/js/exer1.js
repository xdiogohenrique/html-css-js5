let qtd;

if (localStorage.length > 0){
    qtd = Number(localStorage.getItem("qtd"));
}else{
    qtd=0;
}

$("#button1").on("click", gravarDados);
$("#button2").on("click", exibirDados);

function gravarDados(){
    qtd++;
    localStorage.setItem("rgm"+qtd, $("#rgm").val());
    localStorage.setItem("nome"+qtd, $("#nome").val());
    localStorage.setItem("media"+qtd, $("#media").val());
    localStorage.setItem("qtd", qtd);
}

function exibirDados(){
    if (localStorage.length > 0){
        let table = "<table border='1'>";
        for (let i=1; i<= qtd; i++){
            table += "<tr>";
            table += `<td>${localStorage.getItem("rgm"+i)}</td>`
            table += `<td>${localStorage.getItem("nome"+i)}</td>`
            table += `<td>${localStorage.getItem("media"+i)}</td>`
            table += `<td>${conceito(localStorage.getItem("media"+i))}</td>`;
            table += "</tr>";
        }
        table += "</table>";
        $("#relatorio").html(table)
    }else{
        alert("Nada Gravado");
    }
}

function conceito(m){
    if (m >= 6)
        return "<span class='aprovado'>APROVADO</span>"
    else if (m < 1)
        return "<span class='reprovado'>REPROVADO</span>"
    else
        return "<span class='exame'>EXAME</span>"
}