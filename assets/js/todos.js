// Check  Off Specific Todos By Clicking
$('ul').on("click", "li" ,function(){
	$(this).toggleClass("completed");
});


$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		//clearing input
		$(this).val("");  
		// create a new li and add to ul
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>');

	}
});

$("#toggle_icon").click(function(){	
	$("input[type='text']").toggleClass('placeholder_opacity');
	$("input[type='text']").slideToggle("slow");
});