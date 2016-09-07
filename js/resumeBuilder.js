$(function () {
    var bio = getBio();
    var work = getWork();
    var education = getEducation();
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
                employer: '',
                title: '',
                location: '',
                dates: '',
                description: '',
            }],
            display: function () {
                
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
