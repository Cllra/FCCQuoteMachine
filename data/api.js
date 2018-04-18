function rndQuote() {
  $.ajax({
    headers:{
      Accept: "application/json"
    },
    url: "https://random-quote-generator.herokuapp.com/api/quotes/",
    success: function(r){
      console.log(r);
      var rndQuoteObj = r[Math.floor(Math.random()*r.length)];
      console.log(rndQuoteObj);
      $("#text").text(rndQuoteObj.quote);
      $("#author").text(rndQuoteObj.author);
      
    },
    error: function(a, b, c){
      console.log(b);
      console.log(c);
    }
    
  })
}

$(document).ready(function() {
  rndQuote();
  $('#new-quote').on('click', rndQuote);})
/**
 * https://quotes.rest/#!/quote/get_quote_random
 * https://theysaidso.com/api/
 */