function myFunction() {
    var x = document.getElementById("myNavbar");
    var hello = document.querySelector('.helloWorld');
    
    if (x.className === "navbar") {
      x.className += " responsive";
      hello.style.display = 'none';
    } else {
      x.className = "navbar";
      hello.style.display = 'block';
    }
  }

  setInterval(function(){
    var x = document.getElementById("myNavbar");
    var hello = document.querySelector('.helloWorld');
        if(window.innerWidth > 1111){
            hello.style.display = 'flex';
            x.className = "navbar";
        }
  }, 500)