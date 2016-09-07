$(function () {
    var bio = getBio();
    var work = getWork();
    var education = getEducation();
    var projects = getProjects();

    function init() {
        bio.display();
        work.display();
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
            jobs: [{
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
            }],
            display: function () {
                $('#workExperience').append(HTMLworkStart);

                this.jobs.forEach(function(job) {
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

    function getEducation() {
        return {
            schools: [{
                name: '',
                location: '',
                degree: '',
                majors: [''],
                dates: '',
                url: ''
            }],
            onlineCourses: [{
                title: '',
                school: '',
                dates: '',
                url: ''
            }],
            display: function () { }
        };
    }

    function getProjects() {
        return {
            projects: [{
                title: '',
                dates: '',
                description: '',
                images: ['']
            }],
            display: function () { }
        };
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
