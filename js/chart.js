function toonDag(){
  var vandaag = new Date();
  var dagen = new Array('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
  document.getElementById('dag').innerHTML = dagen[vandaag.getDay()];
}

toonDag();

function toonMaand(){
  var month = new Date();
  var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
  document.getElementById('maand').innerHTML = month.getDate() + ' ' + maanden[month.getMonth()];
}

toonMaand();


function toonTijd(){
  var date = new Date();
  var uur = date.getHours();
  var minuut = date.getMinutes();
  var seconden= date.getSeconds();
  minuut = checkTime(minuut);
  seconden = checkTime(seconden);

  document.getElementById('tijd').innerHTML = uur + ":" + minuut + ":" + seconden;
  var t = setTimeout(toonTijd, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

toonTijd();


function switchDay(){
var date = new Date();
var uren = date.getHours();

  if (uren >= 7 && uren < 18) {
      document.getElementById("nacht").style.display = "none";

  } else if (uren >= 18 && uren < 22) {
      document.getElementById("daglicht").style.display = "none";

  } else {
      document.getElementById("daglicht").style.display = "none";
    }
}

switchDay();
