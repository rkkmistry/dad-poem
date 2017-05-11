text = [
"it’s just struck me",
"that the fondest memories",
"I have of my dad",
"are memories",
"of being sick as a child",
"taken out of school at lunch",
"bundled up in a sweater",
"on the couch at midday",
"his hands coaxing a warm drink ",
"down my sore throat",
"I’m struck",
"by the weight of these memories",
"the fondness I feel towards",
"these moments",
"that are so inconsequential",
"yet so deeply memorable",
"they carry a weight",
"a mood and atmosphere",
"something you can look back on",
"but also pause for a moment",
"and feel ",
"immersed in the warm nectar of care",
"slipping in and out of faint sleep",
"the touch of soft blankets",
"and the weight of a gentle hand ",
"sick and being cared for ",
"by my dad",
"no one else there",
"when my body couldn’t lie",
"And my father could see",
"I was ailing",
"a moment of divine soundless communication",
"a brief space of total acceptance",
"A single point of understanding",
"a father and his son",
"one sitting and one lying on a bed",
"both wrapped in mutual sincerity",
"a quiet and soundless moment",
"simply a man caring for his child",
"one creature caring for another",
"the trappings of human life seem to fall away",
"in these moments",
"I felt connected",
"to this human who had raised me",
"by a heartfelt desire",
"and I would slowly fall into a tender sleep",
"Knowing that I could rest easy",
"Under the kind eye",
"of my father"
];

//this is mostly stolen from @toddword's "in the dark" project
var count = 0;
var notStarted = true;
Mousetrap.bind('space', function() {
  if (notStarted) {
    setTimeout(function(){
      $('#audio')[0].play();
      placeText();
    }, 1000);
    $('header').fadeOut(1000);
    notStarted = false;
  } else {
    placeText();
  }


});

function placeText() {
  var x = getRandomInt(0,80);
  var y = getRandomInt(0,85);
  var z = getRandomInt(1,99999).toString();
  if (y > 65 && x > 65) {
      x -= 30
  }
  x = x.toString() + "%"
  y = y.toString() + "%"
  
  if (count > 48) {
    $('p').hide();
    $('#title').hide();
    $('header').show();
    $('#end').fadeIn("2000");
    return;
  }
  $('main').append("<h1 id='"+z+"' style='left:"+x+"; top:"+y+"'>"+text[count]+"</h1>");
  count++;
  $('#'+z).fadeOut(5000, function() {$(this).remove()})
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}