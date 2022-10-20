var httpRequest;
/*
    0 - não iniciado
    1 - carregando
    2 - carregado
    3 - interativo
    4 - completo
*/

if (window.XMLHttpRequest) {
    httpRequest= new XMLHttpRequest()
}else if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
}

function soma() {
    if(httpRequest.readyState === 4){
        //
        console.log("Conexao estabelecida");
    }else{
        console.log("Conexão não estabelecida...");
    }

    if (httpRequest.status === 200) {
        console.log("Retorno bem sucedido!");
    }else{
        console.log("Retorno mal sucedido!")
    }
}
httpRequest.onreadystatechange = soma;

httpRequest.open(
    'GET',
    'https://youtube.com',
    true
)

httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');



httpRequest.send(null);