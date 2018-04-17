$(document).ready(function() {

var jqxhr = $.getJSON( "https://random-quote-generator.herokuapp.com/api/quotes/", function() {
    console.log( "success" );
    
   
  })
    .done(function(jqxhr) {
        console.log(jqxhr);
        var qKeys = Object.keys(jqxhr);
        var rKeys = qKeys[Math.floor(Math.random()*qKeys.length)]
        console.log(rKeys);
        var rQuote = jqxhr[rKeys];
        console.log(rQuote);
        document.getElementById("quote").innerHTML = rQuote.quote;
        console.log( "second success" );
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });
   

});

/**
 * https://quotes.rest/#!/quote/get_quote_random
 * https://theysaidso.com/api/
 */