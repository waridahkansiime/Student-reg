const form = 
document.getElementByID("StudentForm");
const message = 
document.getElementByID("submit", function(event){
	event.preventDefault();
	message.innerHTML = "Student Registered Successfully!";
	form.reset();
});