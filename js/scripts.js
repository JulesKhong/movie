function Ticket(movie, time, age){
  this.movie = movie,
  this.time = time,
  this.age = age,
  this.price = this.calculateTicketPrice()
}

Ticket.prototype.calculateTicketPrice = function() {
  var baseprice = 10;
  if (this.time === "matinee"){
    this.price = baseprice - 5;
  }
  if (this.age === true){
    this.price -= 1;
  }
};




// var movie = {
//   name: "Finding Dori",
//   price: 10,
// }
// var movie2 = {
//   name: "X-Men",
//   price: 10,
// }
// var movie3 = {
//   name: "The Night of the Hunter",
//   price: 5,
// }
// var movie4 = {
//   name: "The zWizard of Oz",
//   price: 5,
// }
// // // var Movies = [movie1, movie2, movie3, movie4];
//
// Movies.forEach(function(movie) {
//   newTicket.movie.push(movie.name);
//   newTicket.price.push(movie.price);

  $("#results").text(Ticket.movie + "is your selection and the price is" + Ticket.price)

})



// //
// var timePrice = (function(time){
//   var price = 5;
//   if (time ==="matinee"){
//     return price
//   } else {
//     return (price += 3)
//   }

// });
// console.log("test");
//
// var finalPrice = function(p){
//   if (age === true){
//     // newTicket.price.push(timePrice -= 2);
//     return(age -= 2);
//   } else {
//     // newTicket.price.push(timePrice);
//     return(age)
//   }
// };
//


// FRONT END LOGIC

$(document).ready(function(){

$("#dory-poster").click(function(){
    $("#form-xmen").hide();
    $("#form-night").hide();
    $("#form-oz").hide();
  $("#form-dory").show();
})
$("#xmen-poster").click(function(){
  $("#form-dory").hide();
  $("#form-night").hide();
  $("#form-oz").hide();
  $("#form-xmen").show();
})
$("#night-poster").click(function(){
  $("#form-xmen").hide();
  $("#form-dory").hide();
  $("#form-oz").hide();
  $("#form-night").show();
})
$("#oz-poster").click(function(){
  $("#form-xmen").hide();
  $("#form-night").hide();
  $("#form-dory").hide();
  $("#form-oz").show();
})

$("#submit").submit(function(event) {
      event.preventDefault();
  var inputtedMovie = $(".movie").val();
  var inputtedTime = $(".time").val();
  var inputtedAge = $(".age").val();
timePrice(inputtedTime);
finalPrice(timePrice);
    debugger;
  var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
console.log(newTicket.price);
});
