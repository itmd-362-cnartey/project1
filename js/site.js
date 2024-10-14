const form = document.getElementByID('contactForm'); 
form.addEventListener('submit', function(event){
	event.preventDefault();
	
	//collects contact form data
	const firstname = document.getElementByID('firstname').value;
	const lastname = document.getElementByID('lastname').value;
	const email = document.getElementByID('email').value;
	const key = document.getElementByID('key').value;
	const teamA = document.getElementByID('teamA').checked;
	const teamB = document.getElementById('teamB').checked;
	const teamC = document.getElementById('teamC').checked;
	
	form.reset();
	});

