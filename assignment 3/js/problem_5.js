function quotes() {
    var quotes = [
        "On your left.",
        "Life is like a box of chocolates.",
        "Don't give up!",
        "So this is how liberty dies - with thunderous applause.",
        "No, I am your father."    
      ];

    var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
    document.getElementById("test").innerHTML = q;   
    
  }