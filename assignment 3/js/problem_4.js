function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function myFunction() {
    var x = document.getElementById("myDIV");
  x.style.backgroundColor = getRandomColor();
    
  }
