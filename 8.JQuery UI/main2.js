$( function() {
    $('.box').draggable();
	$('#box1').draggable({scroll: true});
	$('#box2').draggable({axis: 'x'});
	$('#box3').draggable({axis: 'y'});
	$('#box3').draggable({containment: 'container', revert: "invalid"});
  });
  
  
  $("").droppable({
	  accept: "box1",
	  drop: function(){
		  $(this).text("you are enter");
	  } 
  });