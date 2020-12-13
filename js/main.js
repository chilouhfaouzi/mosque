$(document).ready(function () {
  var d = new Date();
  var day = d.getDay();
  var month = d.getMonth();
  var yaer = d.getFullYear;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://aladhan.p.rapidapi.com/calendarByCity?city=Paris&country=FR&month=" +
      month +
      "&year=" +
      yaer,
    method: "GET",
    headers: {
      "x-rapidapi-key": "6bda6847a3mshe25dd31051d942dp167614jsn86fbbdbae538",
      "x-rapidapi-host": "aladhan.p.rapidapi.com",
    },
  };

  var timessalat = [];
  $.ajax(settings).done(function (response) {
    timessalat = response["data"];
    for (var i = 0; i < 7; i++) {
      $("#fajr" + i).text(timessalat[day + i]["timings"]["Fajr"].slice(0, -5));
      $("#sunset" + i).text(
        timessalat[day + i]["timings"]["Sunset"].slice(0, -5)
      );
      $("#dohr" + i).text(timessalat[day + i]["timings"]["Dhuhr"].slice(0, -5));
      $("#3asr" + i).text(timessalat[day + i]["timings"]["Asr"].slice(0, -5));
      $("#maghreb" + i).text(
        timessalat[day + i]["timings"]["Maghrib"].slice(0, -5)
      );
      $("#aicha" + i).text(timessalat[day + i]["timings"]["Isha"].slice(0, -5));

      $("#jour" + i).text(days[day + i]);
    }

    /* var day1 = timessalat[day]["timings"];
    var fajr = day1["Fajr"].slice(0, -5);
    var sun = day1["Sunset"].slice(0, -5);
    var dhur = day1["Dhuhr"].slice(0, -5);
    var asr = day1["Asr"].slice(0, -5);
    var magh = day1["Maghrib"].slice(0, -5);
    var isha = day1["Isha"].slice(0, -5);

    $("#fajr0").first().text(fajr);
    $("#sunset0").text(sun);
    $("#dohr0").text(dhur);
    $("#3asr0").text(asr);
    $("#maghreb0").text(magh);
    $("#aicha0").text(isha);*/
  });
});
