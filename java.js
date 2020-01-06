


var cities= ["Long Beach", "San Diego", "Los Angeles"];



function displayWeatherInfo () {

    var city = $(this).attr("data-name");
    var APIKey = "364dfb422358dfd0400bcc8efaa97e2b";
    var queryURL = "https;//api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=" + APIKey;
    



    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){



    $("#cities-view").text(JSON.stringify(response));


        var weatherDiv = $("<div class='weather'>");

        var temperature = response.temperature;
        var pOne = $("<p>").text("Temperature: " + temperature);
        weatherDiv.append(pOne);

        var humidity = response.humidity;
        var pTwo = $("<p>").text("Humidity: " + humidity);
        weatherDiv.append(pTwo);

        var windSpeed = response.windSpeed;
        var pThree = $("<p>").text("Wind speed: " + windSpeed);
        weatherDiv.append(pThree);


    $("#cites-view").prepend(weatherDiv);

    });

}








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








$("#add-city").on("click",function(event) {

    event.preventDefault();
    var movie = $("#city-input").val().trim();
    cities.push(city);
    renderButtons();

});







$(document).on("click", ".city", displayWeatherInfo);

renderButtons();






