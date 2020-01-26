var div1 = document.querySelector('.branco');
var btn = document.querySelector('.fundo h1');

setInterval(function(){
    var coratual = getRandomColor();
    btn.style.borderColor = coratual; 
    btn.style.color = coratual; 
}, 1000);

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
return color;
}
var newColor = getRandomColor(); // #E943F0