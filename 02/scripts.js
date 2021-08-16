function myFunction() {
    var str = "Visit W3Schools";
    var patt = /w3schools/i;
    var result = str.match(patt);
    //textContent lấy nội dung của thẻ đó
    if( document.getElementById("demo").textContent == "JS can do" ) 
        document.getElementById("demo").innerHTML = result;
    else document.getElementById("demo").innerHTML = "JS can do";

    //Lấy dữ liệu css sang dạng string
    var x = document.getElementById("demo").style.cssText;
    //typeof 'something' trả về kiểu dữ liệu của biến
    console.log(x instanceof String);
    //Thêm vào html
    //Nếu sử dụng getElementsByClassName thì cần có index
    //Sử dụng getElementById thì không cần
    document.getElementById("note").innerHTML = x instanceof String;
}

function myFunction2() {
    window.location.href = "../01/index.html";

}



$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#back").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html,body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
  


