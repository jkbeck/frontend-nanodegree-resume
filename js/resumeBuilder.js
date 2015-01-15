//Automating capitalization of each word in a string - works with one word or many
function capitalize(toCap) {
    "use strict";
    var makeCap,
        makeCapArray,
        word,
        clipboard;
    makeCapArray = toCap.split(" ");
    for (word in makeCapArray) {
        if (makeCapArray.hasOwnProperty(word)) {
            clipboard = makeCapArray[word].slice(0, 1).toUpperCase() + makeCapArray[word].slice(1);
            makeCapArray[word] = clipboard;
            makeCap = makeCapArray.toString();
            makeCap = makeCap.replace(/,/g, " ");
        }
    }
    return makeCap;
}

var bio = {
	"name" : "justin beck",
	"role" : "web developer",
	"contacts" : {
		"mobile":"555-222-3333",
		"email" : "thejudge807@yahoo.com",
		"github" : "thejudge807",
		"twitter" : "thejudge807",
		"location" : "Dunedin, FL 34698"
	},
	"welcomeMessage" : "Welcome to my Resume! I may or may not be a super-human squirrel wearing a cape...",
	"skills" : ["HTML","CSS","PHP","JavaScript"],
	"skillProgress" : {
		"HTML" : "95",
		"CSS" :"90",
		"PHP" : "85",
		"JavaScript" : "75"
	},
	"biopic" : "http://justinkentbeck.com/wp-con-teepee/uploads/2014/07/supersquirrel.png",
	"display" : function(){
		$('#header').prepend(HTMLheaderRole.replace("%data%", capitalize(bio.role)));
		$('#header').prepend(HTMLheaderName.replace("%data%", capitalize(bio.name)));
		$('#topContacts:last').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$('#topContacts:last').append(HTMLemail.replace("%data%", bio.contacts.email));
		$('#topContacts:last').append(HTMLtwitter.replace("%data%", bio.contacts.github));
		$('#topContacts:last').append(HTMLgithub.replace("%data%", bio.contacts.twitter));
		$('#topContacts:last').append(HTMLlocation.replace("%data%", bio.contacts.location));
		$('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
		$('#header').append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
		$('#name').siblings('span:first').addClass("header-role");
		if( bio.skills.length > 0 ){
			$('#header').append(HTMLskillsStart);
				for( i = 0; i < bio.skills.length; i++){
	 				$('#skills').append(HTMLskills.replace('%data%',bio.skills[i]));
	 			};
	 			for( i = 0; i < bio.skills.length; i++){
	 				$('#skills').append('<li class="flex-item progress ' + bio.skills[i] +
	 				 '"><div class="progress-percent">' + bio.skillProgress[bio.skills[i]] +
	 				 '%</div><div class="progress-bar" style="width:' + bio.skillProgress[bio.skills[i]] + '%" ></div></li>');
	 			};
			};
		$('#footerContacts:last').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$('#footerContacts:last').append(HTMLemail.replace("%data%", bio.contacts.email));
		$('#footerContacts:last').append(HTMLtwitter.replace("%data%", bio.contacts.github));
		$('#footerContacts:last').append(HTMLgithub.replace("%data%", bio.contacts.twitter));
		$('#footerContacts:last').append(HTMLlocation.replace("%data%", bio.contacts.location));
	}
}

bio.display();

var education = {
	"schools" : [
	{	"name": "Naval Nuclear Power Training Command",
		"location" : "Orlando, FL",
		"degree" : "Department of Energy Certification",
		"major" : ["none"],
		"dates" : "1993 - 1994",
		"url" : "http://www.netc.navy.mil/nnptc/"
	},
	{	"name": "Santa Clara Community College",
		"location" : "Santa Clara",
		"degree" : "BS",
		"major" : ["none"],
		"dates" : "Sep - Dec 1997",
		"url" : "http://www.missioncollege.org/"
	}
	],
	"onlineCourses": [
	{	"title" : "JavaScript",
		"school" : "Codecademy",
		"dates" : "May - Apr 2014",
		"url" : "http://codecademy.com"
	},
	{	"title" : "Web Development",
		"school" : "Udacity",
		"dates" : "Dec 2014 - Present",
		"url" : "http://udacity.com"
	}
	],
	"display" : function(){
		$('#education').append(HTMLschoolStart);
		for(x in education.schools) {
			$('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[x].name) + HTMLschoolDegree.replace('%data%', education.schools[x].degree));
			$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[x].location));
			$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[x].dates));
			$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[x].major));
		}
		$('.education-entry:last').append(HTMLonlineClasses);
		for(x in education.onlineCourses) {
			$('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[x].title) + HTMLonlineSchool.replace('%data%', education.onlineCourses[x].school));
			$('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[x].dates));
			$('.education-entry:last').append(HTMLonlineURL.replace(/%data%/g, education.onlineCourses[x].url));
		}
	}
}

education.display();

var work = {
	"jobs" : [
		{ 	"employer":"USN",
			"title":"Electronics Technician 2nd Class",
			"location":"Alameda, CA",
			"dates":"1992 - 1997",
			"description":"Reactor Department - nuclear reactor electronic safeguards maintenance"
		},
		{ 	"employer":"Intel",
			"title":"Maintenance Technician",
			"location":"Santa Clara, CA",
			"dates":"1997 - 2007",
			"description":"Development 2 fabrication facility equipment maintenance"
		},
		{ 	"employer":"Modius, Inc.",
			"title":"Technical Support Engineer",
			"location":"San Francisco, CA",
			"dates":"2007 - Present",
			"description":"Datacenter infrastructure monitoring software install & support"
		}
		],
	"display" : function displayWork() {
		for(job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[job].employer ) + HTMLworkTitle.replace('%data%', work.jobs[job].title ));
			$('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
			}
	}
}

work.display();

var projects = {
	"project" :[
	{	"title" : "Interactive Resume",
		"dates" : "Jan 5 - 16, 2015",
		"description" : "Create an interactive resume for Udacity.com",
		"images" : ["http://placekitten.com/g/150/150"]
	},
	{	"title" : "Project Modals",
		"dates" : "Jan 5 - 16, 2015",
		"description" : "Created a modal to show projects. Each modal is built from scratch from the projects object when the project is clicked. When the modal is closed, the corresponding HTML is removed from the page.",
		"images" : ["http://placekitten.com/g/250/250", "http://placekitten.com/g/300/300" , "http://placekitten.com/g/350/350"]
	}
],
	"display" : function() {
		for(x in projects.project) {
			$('#projects').append(HTMLprojectStart.replace('%data%', x));
			$('#projects .project-entry:last').append(HTMLprojectImage.replace('%data%', projects.project[x].images[0]));
			$('#projects .project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.project[x].title));
			$('#projects .project-entry:last').append(HTMLprojectDates.replace('%data%', projects.project[x].dates));
			$('#projects .project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.project[x].description.slice(0,48)+"..."));
		}
	},
	"modal" : function(x) {
		$('#modal-content').append(HTMLmodalStart);
		for(i in projects.project[x].images){
		$('#modal-content .modal-entry:last').append(HTMLmodalImage.replace('%data%', projects.project[x].images[i]));
		}
		$('#modal-content .modal-entry:last').append(HTMLmodalTitle.replace('%data%', projects.project[x].title));
		$('#modal-content .modal-entry:last').append(HTMLmodalDates.replace('%data%', projects.project[x].dates));
		$('#modal-content .modal-entry:last').append(HTMLmodalDescription.replace('%data%', projects.project[x].description));
	}

}

projects.display();

//add map
$('#mapDiv').append(googleMap);

//Modal code for projects section. Code adapted from http://blog.raventools.com/create-a-modal-dialog-using-css-and-javascript/
//Changed javascript to jquery

function overlay(x) {
  $('#project-modal').css('visibility', 'visible');
  projects.modal(x);
  window.scroll(0, 250);
  $('#main').addClass("blur");
}

//Close modal window and remove project divs to prepare for clicking a different project
function overlayclose() {
  $('#project-modal').css('visibility', 'hidden');
  $('#main').removeClass("blur");
  $("div.modal-entry").remove();
}