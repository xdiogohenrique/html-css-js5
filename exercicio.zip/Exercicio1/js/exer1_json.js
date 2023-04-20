let base;

if (localStorage.length > 0){
    base = JSON.parse(localStorage.getItem("base"));
}else{
    base = {
        dados : []
    }
}

$("#button1").on("click", gravarDados);
$("#button2").on("click", exibirDados);

function gravarDados(){
    base.dados.push({rgm: $("#rgm").val(), nome: $("#nome").val(), media: $("#media").val()});
    localStorage.setItem("base", JSON.stringify(base));
}

function exibirDados(){
    if (localStorage.length > 0){
        base = JSON.parse(localStorage.getItem("base"))
        let table = "<table border='1'>";
        for (let i=0; i< base.dados.length; i++){
            table += "<tr>";
            table += `<td>${base.dados[i].rgm}</td>`
            table += `<td>${base.dados[i].nome}</td>`
            table += `<td>${base.dados[i].media}</td>`
            table += `<td>${conceito(base.dados[i].media)}</td>`;
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