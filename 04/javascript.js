var x = 4 ;
var y = 2; 

//x>>=y ; // kiểu bit sẽ dịch sang phải
//x<<=2; // kiểu bit sẽ dịch sang trái
x **= y;
console.log(x+" ; "+y);
document.getElementsByClassName("result")[0].innerHTML = x;

(function(){
	var pi = 3.141;
	function e() {
		return Math.E;
	}

	window.pi = pi;
	window.e = Math.E;
})(window);
x = window.e;

console.log(pi);