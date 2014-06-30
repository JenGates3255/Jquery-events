// place counter in the global (for testing)
var counter = 0;



$(document).on('ready', function() {
  console.log('hello world from on.ready');
// set up a counter

  //listen for click event on <button>
  $('button').on('click', function(){
// test functionality with a console log 
 console.log('hello from button.click', counter);

//when a button is clicked, increase counter by 1
counter++;
  });

  // listen for clicks on #my-button
//this is the normal style for attaching a listener/handler
// $('#my-button').on('click', function(){

  	$('#my-button').click(function(eventArgs){
  	console.log(eventArgs);
  });

// prevent anchor tags from navigating
$('a').on('click', function(e){
	console.log('clicked an anchor tag')

//"this" refers to the dom element that was clicked
	console.log(this);

// We can convert that DOM element into a Jquery ocject 
	$(this).css()

	//event-way to prevent the default behavior 
	// like navigating to a pgae when clicking on an <a> tag
 e.preventDefault();



});

});


