

var cities= ["Long Beach", "Los Angeles"];


$("#find-city").on("click", function(event){
   
    event.preventDefault();
 console.log("first")

    var APIKey = "364dfb422358dfd0400bcc8efaa97e2b";
    var city = $("#city-input").val();
    console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    

    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){

    console.log(queryURL);
    console.log(response);

    

    var weatherDiv = $("<div class='weather'>");


        var temperature = response.list[0].main.temp;
        $("#temp").text("temperature is "+ temperature);
        console.log("temp is :"+temperature)


        var windSpeed = response.list[0].wind.speed;
        console.log("windSpeed is :"+windSpeed)
        $("#wind").text("wind speed is "+ windSpeed);
        

        var windSpeed = response.list[0].main.humility;
        console.log("humility is:" + humility)
        $("#humility").text("humility is: "+ humility);


        var uvIndex = response.list[1].city.sunrise;
        console.log("uv Index is: "+uvIndex)
        $("#uvIndex").text(uvIndex);

    $("#cites-view").prepend(weatherDiv);

    });

});



function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < cities.length; i++) {
      var a = $("<button>");  
      a.addClass("city");   
      a.attr("data-name", cities[i]);
      a.text(cities[i]);
      $("#buttons-view").append(a);

    }
  }



$("#find-city").on("click",function(event) {
    event.preventDefault();
    var city= $("#city-input").val().trim();
    cities.push(city);
    renderButtons();
});



renderButtons();






