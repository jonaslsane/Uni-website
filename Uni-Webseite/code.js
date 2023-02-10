$(document).ready(() =>{
  $("#nav").load("nav.html");

});

$(document).ready(() =>{

  if(localStorage.getItem('students')!= null){

    var array = Schülern = JSON.parse (localStorage.getItem('students'));
    $('#schülerzähler').text(array.length);
}
  })
  

  

