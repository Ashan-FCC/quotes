function getCategory(){
	var x = Math.random();
	console.log("random value: "+x);
	if(x <= 0.5) return "movies";
	else return "famous";
}
function getQuote(){
		var category = "famous";
		console.log("category: ",category)
		$.ajax({
			url : "https://andruxnet-random-famous-quotes.p.mashape.com/?cat="+category,
			method : "POST",
			headers : {
				"X-Mashape-Key" :"Pd31wOcWIImshpizznkYKtVe5dZqp1DIxyYjsnsvPv1kfwXT4u",
				"Content-Type" : "application/x-www-form-urlencoded",
				"Accept" : "application/json"
			},
			success : function(data){
				var quoteJson = $.parseJSON(data);
				$("#quote-text").html(quoteJson["quote"]);
				$("#quote-author").html(quoteJson["author"]);
				console.log("data",data);
			}
		}); // end of ajax;
	}

$(document).ready(function(){ 
	console.log("Page finished Loading");
	getQuote();


	$("#getQuote").click(getQuote);

	$("#twitterShare").click( function(){
		var quote = $("#quote-text").html();
		var author = $("#quote-author").html();
		var tweet = quote +"\n -" +author;
		window.open("https://twitter.com/intent/tweet?text="+tweet);
	});


	});
