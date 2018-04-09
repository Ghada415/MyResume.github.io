var bio = {
    name: "Ghada Alhadlaq",
    role: "Software Engineer",
    contacts: {
        mobile: "0534466241",
        email: "Ghada415@gmail.com",
        linkedin: "Ghada-Alhadlaq",		
        twitter: "@ighada_hq",
        location: "Riyadh, Al-yasmin"
    },
    welcomeMessage: "Hello .. Welcom to my resume :) , I hope to join a dynamic and self-esteem organization with potential for future growth, contribution of new ideas and capitalize my abilities in the field of information systems (IS)",
    skills: ["Proficiency in the following programming languages: C++, Html, CSS, JavaScript, Php, SQL",
	"Know the basics ofJavaprogramming language, C#, ASP.NET",
	"Excellent in problem solving, system analysis and data analysis skills",
	"Leadership, planning, organizationand project management",
	"Ability to work under job pressure independently or as part of a team"],
    biopic: "images/ghada.png",
    display: function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var formattedContacts = [];
        formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContacts.push(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
        formattedContacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcome);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var s = 0; s < bio.skills.length; s++) {
                $("#header").append(HTMLskills.replace("%data%", bio.skills[s]));
            }
        }

        for (var c = 0; c < formattedContacts.length; c++) {
            $("#topContacts").append(formattedContacts[c]);
            $("#footerContacts").append(formattedContacts[c]);
        }

    }
};


//#########################################################education

var education = {
    schools: [{
        name: "Imam Muhammad ibn Saud Islamic University",
        location: "Imam Muhammad ibn Saud Islamic University",
        degree: "GPA: 4.97 out of 5",
        majors: ["Bachelor of Information Systems, Computer Science and Information Collage"],
        dates: "2017-10-22",
        url: "https://imamu.edu.sa/en/Pages/default.aspx"
    },
	{
        name: "Nayar Highschool",
        location: "Riyadh, Ar Rabi Al Qalam Neyar Schools",
		degree: "Excellent",
        majors: ["scientific"],
        dates: "2012-7-2",
        url: "http://neyar.almotaqademah.edu.sa/"
    }],
    onlineCourses: [{
            title: "Android Nanodegree",
            school: "Udacity",
            dates: "2017-7-2",
            url: "https://sa.udacity.com/"
        },
        {
            title: "Front-End Nanodegree",
            school: "Udacity",
            dates: "2017-12-2",
            url: "https://sa.udacity.com/"
        },
		{
            title: "Business Analyst Nanodegree",
            school: "Udacity",
            dates: "Present",
            url: "https://sa.udacity.com/"
        }
		
    ],
    display: function() {

        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var school = 0; school < education.schools.length; school++) {
                $("#education").append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);		
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
				$(".education-entry:last").append(formattedSchoolMajors);
                
            }

            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var course = 0; course < education.onlineCourses.length; course++) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);

                    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                    $(".education-entry:last").append(formattedOnlineDates);
                    $(".education-entry:last").append(formattedOnlineURL);
                }
            }

        }
    }
};


//#########################################################works


var work = {
    jobs: [
	{
        employer: "SSSIT",
        title: "Software Engineer",
        location: "Riyadh, Almalqa SSSIT",
        dates: "21/1/2018 - Present",
        description: "Working on MS SQL Server database and developing OutSystems Web Applications"
    },
	{
        employer: "SSSIT",
        title: "PMO Officer",
        location: "Riyadh, Almalqa SSSIT",
        dates: "15/11/2017-20/1/2018",
        description: ""
    },{
        employer: "KFMC",
        title: "Web Developer",
        location: "King Fahad Medical City",
        dates: "Jul to Aug 2017",
        description: "On Health Informatics Information Technology department during two months"
    }],
	
    display: function() {
        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            for (var i = 0; i < work.jobs.length; i++) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

                var formattedEmployerWorkTitle = formattedEmployer + formattedTitle;

                $(".work-entry:last").append(formattedEmployerWorkTitle);
                $(".work-entry:last").append(formattedLocation);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedDescription);
            }

        }
    }
};


//#########################################################projects


var projects = {
    projects: [{
        title: "My Exhabitation",
        dates: "2017-7-7",
        description: "Mobile Application for Reserving and Advertising in Exhibitions",
	images: ["images/m0.png", "images/m2.png","images/m1.png", "images/m3.png"]
	}],
    display: function() {

        if (projects.projects.length > 0) {
            for (var p = 0; p < projects.projects.length; p++) {
                $("#projects").append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

                $(".project-entry:last").append(formattedTitle);
                $(".project-entry:last").append(formattedDates);
                $(".project-entry:last").append(formattedDescription);

                for (var img = 0; img < projects.projects[p].images.length; img++) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[img]);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);