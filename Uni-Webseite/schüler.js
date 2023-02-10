$(document).ready(() =>{
  $("#nav").load("nav.html");

});

var Schülern = [];

$(document).ready(() => {

if(localStorage.getItem('students')!= null)
Schülern = JSON.parse (localStorage.getItem('students'));

schülertabelle();

});


function erstelleSchüler(){

  let prename = $('#inputPrename').val();
  let lastname = $('#inputLastname').val();
  let id = $('#inputid').val();

  let newSchüler = new Schüler (prename, lastname, id);

  Schülern.push(newSchüler);
  
  localStorage.setItem('students', JSON.stringify(Schülern));

  schülertabelle();
};

function schülertabelle(){

$("table tr:gt(0)").remove();

  for(let i = 0; i < Schülern.length; i++){

    $("table").append("<tr></tr>");
    let row = $("tr:last");
    $(row).append("<td>"+ Schülern[i].prename + "</td>");
    $(row).append("<td>"+ Schülern[i].lastname + "</td>");
    $(row).append("<td>"+ Schülern[i].id + "</td>");
  };

};



  class Schüler {

    constructor (prename, lastname, id){

      this.prename = prename;
      this.lastname = lastname;
      this.id = id;
    }
  };