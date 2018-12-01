const COOKIE_TTL_DAYS = 60;
const MILLISEC_IN_DAY = 24 * 60 * 60 * 1000;

const app = new Vue({
    el: '#app',
    data: {
        cookies: {
            'NUM_VISITS': 'num_visits'
        },
        visitMessages: [{
            "minVisits": 5,
            "text": [
                "Ah, my secret admirer!",
                "Welcome again.",
                "Look who's back.",
                "Good to see you again."
            ]
        }, {
            "minVisits": 2,
            "text": [
                "Welcome back!",
                "Hello again.",
                "Good to see you back!"
            ]
        }, {
            "minVisits": 1,
            "text": [
                "Hi there!"
            ]
        }],
        greetings: [{
                "startHr": 21,
                "text": [
                    "Plans tonight?",
                    "How's your night?",
                ]
            }, {
                "startHr": 17,
                "text": [
                    "Evening tea?",
                    "Snack time?",
                    "Have a good evening"
                ]
            }, {
                "startHr": 12,
                "text": [
                    "Lunch time?",
                    "How's your day?",
                ]
            },
            {
                "startHr": 5,
                "text": [
                    "Have a bright day!",
                    "Be happy today",
                    "Good morning"
                ]
            },
            {
                "startHr": 1,
                "text": [
                    "Working late?",
                    "Howdy night owl!"
                ]
            }
        ],
        visitMsg: "Hi there!",
        greeting: "How's your day?"
    },
    created: function() {
        var visits = this.getCookie(this.cookies.NUM_VISITS);
        visits = visits ? parseInt(visits) + 1 : 1;
        this.setCookie(this.cookies.NUM_VISITS, visits, null);

        this.setVisitMessage(visits);
        this.setGreeting();
    },
    methods: {
        setCookie: function(key, value, days) {
            if (!days) {
                days = COOKIE_TTL_DAYS;
            }
            var date = new Date();
            date.setTime(date.getTime() + (days * MILLISEC_IN_DAY));
            document.cookie = key + "=" + escape(value) +
                "; expires=" + date.toUTCString() +
                "; path=/";
        },
        getCookie: function(key) {
            var keyEq = key + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; ++i) {
                var c = ca[i].trim();
                if (c.indexOf(keyEq) == 0) {
                    return c.substring(keyEq.length, c.length);
                }
            }
            return null;
        },
        deleteCookie: function(key) {
            var expires = new Date().toUTCString();
            document.cookie = key + "=; expires=" + expires;
        },
        pickRandom: function(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },
        setVisitMessage: function(numVisits) {
            for (var i = 0; i < this.visitMessages.length; ++i) {
                if (numVisits >= this.visitMessages[i].minVisits) {
                    this.visitMsg = this.pickRandom(this.visitMessages[i].text);
                    break;
                }
            }
        },
        setGreeting: function() {
            const hr = new Date().getHours();
            for (var i = 0; i < this.greetings.length; ++i) {
                if (hr >= this.greetings[i].startHr) {
                    this.greeting = this.pickRandom(this.greetings[i].text);
                    break;
                }
            }
        }
    }
});