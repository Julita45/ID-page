document.addEventListener("DOMContentLoaded", function(event) { 
  	var pointAbout = document.getElementById("js-point-about"),
	  	pointEducation = document.getElementById("js-point-education"),
	  	pointSkills = document.getElementById("js-point-skills"),
	  	pointProjects = document.getElementById("js-point-projects"),
	  	pointContact = document.getElementById("js-point-contact"),
	  	paragraphAbout = document.getElementById("about"),
	  	paragraphEducation = document.getElementById("education"),
	  	paragraphSkills = document.getElementById("skills"),
	  	paragraphProjects = document.getElementById("projects"),
	  	paragraphContact = document.getElementById("contact");

  	function paragraphIn(point) {
  		if (point === 'about') {
  			paragraphAbout.style.display="initial";
  			paragraphEducation.style.display="none";
  			paragraphSkills.style.display="none";
  			paragraphProjects.style.display="none";
  			paragraphContact.style.display="none";
  		}

  		if (point === 'education') {
  			paragraphAbout.style.display="none";
  			paragraphEducation.style.display="initial";
  			paragraphSkills.style.display="none";
  			paragraphProjects.style.display="none";
  			paragraphContact.style.display="none";
  		}

  		if (point === 'skills') {
  			paragraphAbout.style.display="none";
  			paragraphEducation.style.display="none";
  			paragraphSkills.style.display="initial";
  			paragraphProjects.style.display="none";
  			paragraphContact.style.display="none";
  		}

  		if (point === 'projects') {
  			paragraphAbout.style.display="none";
  			paragraphEducation.style.display="none";
  			paragraphSkills.style.display="none";
  			paragraphProjects.style.display="initial";
  			paragraphContact.style.display="none";
  		}

  		if (point === 'contact') {
  			paragraphAbout.style.display="none";
  			paragraphEducation.style.display="none";
  			paragraphSkills.style.display="none";
  			paragraphProjects.style.display="none";
  			paragraphContact.style.display="initial";
  		}
  	}

  	pointAbout.addEventListener("click", function() { paragraphIn('about') });
  	pointEducation.addEventListener("click", function() { paragraphIn('education') });
  	pointSkills.addEventListener("click", function() { paragraphIn('skills') });
  	pointProjects.addEventListener("click", function() { paragraphIn('projects') });
  	pointContact.addEventListener("click", function() { paragraphIn('contact') });
});