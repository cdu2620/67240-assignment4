function insert_Row() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CUSTOMER";
    cell2.innerHTML = "NEW TESTIMONIAL";
  }