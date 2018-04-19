function rndQuote() {
  $.ajax({
    headers:{
      Accept: "application/json"
    },
    url: "https://random-quote-generator.herokuapp.com/api/quotes/",
    success: function(r){
      var rndQuoteObj = r[Math.floor(Math.random()*r.length)];
      //Can Jquery do cool animation or sth?
      
      $("#text").text(rndQuoteObj.quote);
      $("#author").text(rndQuoteObj.author);
      $(".tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=DailyWisdom&text=My%20daily%20wisdom:" + rndQuoteObj.quote + "%20" + rndQuoteObj.author);
      
      //https://dev.twitter.com/web/tweet-button/parameters
     
      
      
    },
    error: function(a, b, c){
      console.log(a);
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