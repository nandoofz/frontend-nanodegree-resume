$(function () {
    var bio = getBio();
    var education = getEducation();
    var work = getWork();
    var projects = getProjects();

    function init() {
        bio.display();
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
            skills: ['Savior of the universe', 'Amazing Deliverboy', 'Awesome Pilot', 'Destroyer of the universe'],
            biopic: '../images/fry.jpg',
            display: function () {
                fillBio();
            }
        };
    }

    function fillBio() {
        var header = $('#header');
        var topContacts = $('#topContacts');

        header.prepend(fillData(HTMLheaderRole, bio.role));
        header.prepend(fillData(HTMLheaderName, bio.name));

        topContacts.append(fillData(HTMLmobile, bio.contacts.mobile));
        topContacts.append(fillData(HTMLemail, bio.contacts.email));
        topContacts.append(fillData(HTMLgithub, bio.contacts.github));
        topContacts.append(fillData(HTMLtwitter, bio.contacts.twitter));
        topContacts.append(fillData(HTMLlocation, bio.contacts.location));

        header.append(fillData(HTMLbioPic, bio.biopic));
        header.append(fillData(HTMLwelcomeMsg, bio.welcomeMessage));
        header.append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $('#skills').append(fillData(HTMLskills, skill));
        });
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

    function getWork() {
        return {
            jobs: [{
                employer: '',
                title: '',
                location: '',
                dates: '',
                description: '',
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
