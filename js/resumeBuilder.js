$(function () {
    var bio = getBio();
    var work = getWork();
    var projects = getProjects();
    var education = getEducation();

    function init() {
        bio.display();
        work.display();
        projects.display();
        education.display();

        displayMap();
        displayFooterContacts();
    }

    function getBio() {
        return {
            name: 'Philip J. Fry',
            role: 'Delivery Boy/Pilot, Tentacle Pope of Universe Gamma (former)',
            contacts: {
                mobile: '555-225-55555',
                email: 'fry@planetexpress.com',
                github: 'pjfry',
                twitter: '@pjfry',
                location: 'New York City'
            },
            welcomeMessage: 'Shut up and pay me money',
            skills: ['Savior of the universe', 'Amazing Deliver boy', 'Awesome Pilot', 'Destroyer of the universe'],
            biopic: '../images/fry.jpg',
            display: function () {
                var header = $('#header');
                var topContacts = $('#topContacts');

                header.prepend(fillData(HTMLheaderRole, this.role));
                header.prepend(fillData(HTMLheaderName, this.name));

                topContacts.append(fillData(HTMLmobile, this.contacts.mobile));
                topContacts.append(fillData(HTMLemail, this.contacts.email));
                topContacts.append(fillData(HTMLgithub, this.contacts.github));
                topContacts.append(fillData(HTMLtwitter, this.contacts.twitter));
                topContacts.append(fillData(HTMLlocation, this.contacts.location));

                header.append(fillData(HTMLbioPic, this.biopic));
                header.append(fillData(HTMLwelcomeMsg, this.welcomeMessage));
                header.append(HTMLskillsStart);
                this.skills.forEach(function (skill) {
                    $('#skills').append(fillData(HTMLskills, skill));
                });
            }
        };
    }

    function getWork() {
        return {
            jobs: [
                {
                    employer: 'Planet Express',
                    title: 'Delivery Boy',
                    location: 'Brooklyns, NY',
                    dates: 'January 3000 - In progress',
                    description: 'Cheese on toast the big cheese camembert de normandie. Ricotta caerphilly queso stinking bishop danish fontina cheddar bavarian bergkase melted cheese. Camembert de normandie queso taleggio airedale cheesy feet goat cheese and wine cheeseburger. Taleggio pecorino swiss taleggio gouda cheddar.',
                }, {
                    employer: 'Panucci\'s Pizza',
                    title: 'Delivery Boy',
                    location: 'Manhattan, NY',
                    dates: '1998 - Decembe 31, 1999',
                    description: 'Cheddar cheese and wine gouda. Swiss hard cheese halloumi cheesecake when the cheese comes out everybody\'s happy paneer boursin cheeseburger. Monterey jack bocconcini bocconcini bocconcini babybel hard cheese edam cheese and wine. Cheese slices mozzarella.',
                }
            ],
            display: function () {
                $('#workExperience').append(HTMLworkStart);

                this.jobs.forEach(function (job) {
                    var workEntry = $('.work-entry');

                    var employerTitle = fillData(HTMLworkEmployer, job.employer) + fillData(HTMLworkTitle, job.title);
                    workEntry.append(employerTitle);
                    workEntry.append(fillData(HTMLworkDates, job.dates));
                    workEntry.append(fillData(HTMLworkLocation, job.location));
                    workEntry.append(fillData(HTMLworkDescription, job.description));
                });
            }
        };
    }

    function getProjects() {
        return {
            projects: [{
                title: 'A better world',
                dates: '2014',
                description: 'Stinking bishop cheesy feet who moved my cheese. Emmental melted cheese cheese strings macaroni cheese mozzarella caerphilly croque monsieur lancashire. Fondue bavarian bergkase cottage cheese brie edam ricotta brie st. agur blue cheese. Fondue manchego gouda cheeseburger ricotta.',
                images: ['../images/197x148.gif', '../images/197x148.gif']
            }],
            display: function () {
                $('#projects').append(HTMLprojectStart);

                this.projects.forEach(function (project) {
                    var projectEntry = $('.project-entry');

                    projectEntry.append(fillData(HTMLprojectTitle, project.title));
                    projectEntry.append(fillData(HTMLprojectDates, project.dates));
                    projectEntry.append(fillData(HTMLprojectDescription, project.description));

                    project.images.forEach(function (image) {
                        $('.project-entry').append(fillData(HTMLprojectImage, image));
                    });
                });
            }
        };
    }

    function getEducation() {
        return {
            schools: [
                {
                    name: 'Nova Southeastern University',
                    location: 'Fort Launderdale, FL',
                    degree: 'Masters',
                    majors: ['CS'],
                    dates: '2013',
                    url: ''
                }, {
                    name: 'Eckerd College',
                    location: 'Saint Petersburg, FL',
                    degree: 'BA',
                    majors: ['CS'],
                    dates: '2003',
                    url: ''
                }
            ],
            onlineCourses: [{
                title: 'JavaScript Crash Course',
                school: 'Udacity',
                dates: '2014',
                url: 'http://www.udacity.com/course/ud804'
            }],
            display: function () {
                var education = $('#education');

                education.append(HTMLschoolStart);
                this.schools.forEach(function (school) {
                    var educationEntry = $('.education-entry');

                    var schoolNameDegree = fillData(HTMLschoolName, school.name) + fillData(HTMLschoolDegree, school.degree);
                    educationEntry.append(schoolNameDegree);
                    educationEntry.append(fillData(HTMLschoolDates, school.dates));
                    educationEntry.append(fillData(HTMLschoolLocation, school.location));

                    var majors = school.majors.join();
                    educationEntry.append(fillData(HTMLschoolMajor, majors));
                });

                education.append(HTMLonlineClasses);
                education.append(HTMLschoolStart);
                this.onlineCourses.forEach(function (course) {
                    var educationEntry = $('.education-entry');

                    var courseTitleSchool = fillData(HTMLonlineTitle, course.title) + fillData(HTMLonlineSchool, course.school);
                    educationEntry.append(courseTitleSchool);
                    educationEntry.append(fillData(HTMLonlineDates, course.dates));
                    educationEntry.append(fillData(HTMLonlineURL, course.url));
                });
            }
        };
    }

    function displayMap() {
        var mapContainer = $('#mapDiv');
        mapContainer.append(googleMap);
    }

    function displayFooterContacts() {
        var footerContacts = $('#footerContacts');

        footerContacts.append(fillData(HTMLmobile, bio.contacts.mobile));
        footerContacts.append(fillData(HTMLemail, bio.contacts.email));
        footerContacts.append(fillData(HTMLgithub, bio.contacts.github));
        footerContacts.append(fillData(HTMLtwitter, bio.contacts.twitter));
        footerContacts.append(fillData(HTMLlocation, bio.contacts.location));
    }

    function fillData(template, value, pattern) {
        var _pattern = '%data%';
        if (pattern) {
            _pattern = pattern;
        }
        return template.replace(_pattern, value);
    }

    init();
} ());
