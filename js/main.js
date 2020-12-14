$(document).ready(function () {
  var d = new Date();
  var daym = d.getDate();
  var dayse = d.getDay();

  var month = d.getMonth() + 1;
  var yaer = d.getFullYear;
  var days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const settings = {
    async: true,
    crossDomain: true,

    url:
      "https://aladhan.p.rapidapi.com/calendarByAddress?address=2%20rue%20du%20bearn%2068260%20Kingersheim&month" +
      month +
      "&year=" +
      yaer +
      "&method=12",
    method: "GET",
    headers: {
      "x-rapidapi-key": "6bda6847a3mshe25dd31051d942dp167614jsn86fbbdbae538",
      "x-rapidapi-host": "aladhan.p.rapidapi.com",
    },
  };

  var timessalat = [];
  $.ajax(settings).done(function (response) {
    timessalat = response["data"];
    console.log(timessalat);
    for (var i = 0; i < 7; i++) {
      $("#fajr" + i).text(timessalat[daym + i]["timings"]["Fajr"].slice(0, -5));
      $("#Sunrise" + i).text(
        timessalat[daym + i]["timings"]["Sunrise"].slice(0, -5)
      );
      $("#dohr" + i).text(
        timessalat[daym + i]["timings"]["Dhuhr"].slice(0, -5)
      );
      $("#3asr" + i).text(timessalat[daym + i]["timings"]["Asr"].slice(0, -5));
      $("#maghreb" + i).text(
        timessalat[daym + i]["timings"]["Maghrib"].slice(0, -5)
      );
      $("#aicha" + i).text(
        timessalat[daym + i]["timings"]["Isha"].slice(0, -5)
      );

      $("#jour" + i).text(days[(dayse + i) % 7]);
    }

    /* var day1 = timessalat[day]["timings"];
    var fajr = day1["Fajr"].slice(0, -5);
    var sun = day1["Sunrise"].slice(0, -5);
    var dhur = day1["Dhuhr"].slice(0, -5);
    var asr = day1["Asr"].slice(0, -5);
    var magh = day1["Maghrib"].slice(0, -5);
    var isha = day1["Isha"].slice(0, -5);

    $("#fajr0").first().text(fajr);
    $("#Sunrise0").text(sun);
    $("#dohr0").text(dhur);
    $("#3asr0").text(asr);
    $("#maghreb0").text(magh);
    $("#aicha0").text(isha);*/
  });
});
