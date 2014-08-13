$(function(){
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];
  	console.log("file loaded");

  	$ul = $("<ul/>")

  	var createClass = function(str){
  		str = str.split(" ").join("-").toLowerCase();
  		return str
  	}

	var arrfun = function(array){
		avengerUl = ($ul).attr('id', 'avengers');
  		$("body").append(avengerUl);
  		console.log("This runs");
  		for (var i = 0; i < array.length; i++) {
  			$listElem = $("<li/>")
  			element_class = createClass(array[i]);
  			($listElem).addClass(element_class).text(array[i]).appendTo('#avengers');
  		};
  	};

  	addAvenger = function(hero){
  		heroClass = createClass(hero);
  		heroLiItem = $("<li/>").addClass(heroClass).text(hero);
  		$('#avengers').append(heroLiItem)
  	};

  	removeAvenger = function(hero){
  		$('.'+hero+'').remove();
  	};

  	assembleAvengers = function(array){

  	}

  arrfun(avengers);
  addAvenger("Captain America");
  removeAvenger("Wasp");
});

