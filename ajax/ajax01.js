var httpRequest;

if (window.XMLHttpRequest) {
    httpRequest= new XMLHttpRequest()
}else if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
}

function soma(a,b) {
    return a+b;
}
httpRequest.onreadystatechange = soma;

httpRequest.open(
    'GET',
    'https://youtube.com',
    true
)
httpRequest.send(null);