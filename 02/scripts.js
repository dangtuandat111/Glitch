function myFunction() {
    var str = "Visit W3Schools";
    var patt = /w3schools/i;
    var result = str.match(patt);
    if( document.getElementById("demo").textContent == "JS can do" ) 
        document.getElementById("demo").innerHTML = result;
    else document.getElementById("demo").innerHTML = "JS can do";
}

function myFunction2() {
    window.location.href = "01/index.html";
}
