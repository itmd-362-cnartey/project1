const form = document.getElementByID('contactForm'); 
form.addEventListener('submit', function(event){
	event.preventDefault();
	
	//collects contact form data
	const name = document.getElementByID('name').value;
	const email = document.getElementByID('email').value;
	const key = document.getElementByID('key').value;
	
	form.reset();
	});

