$(function(){

	
	var grabJsonObjects = function(arr){
		return $.map(arr, function(item, index){
			return item
		});
	};
	
  var atxPermits = $.getJSON( "https://api.enigma.io/v2/data/660835a1a8886d2cb04852c16e3fc0c5/us.states.tx.cities.austin.data.construction-permits.2014", function(json) {

  	objects = grabJsonObjects(json.result);
  	console.log(objects);
	});

});