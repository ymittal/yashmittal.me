const COOKIE_TTL_DAYS = 60;
const MILLISEC_IN_DAY = 24 * 60 * 60 * 1000;

const app = new Vue({
    el: '#app',
    data: {
        cookies: {
            'NUM_VISITS': 'num_visits'
        },
        salutations: [{
            "minVisits": 5,
            "text": [
                "Ah, my secret admirer?",
                "Welcome again.",
                "Hey, you're back!"
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
        salutation: "Hi there!"
    },
    created: function() {
        var visits = this.getCookie(this.cookies.NUM_VISITS);
        visits = visits ? parseInt(visits) + 1 : 1;
        this.setCookie(this.cookies.NUM_VISITS, visits, null);

        this.setSalutation(visits);
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
        setSalutation: function(numVisits) {
            for (var i = 0; i < this.salutations.length; ++i) {
                if (numVisits >= this.salutations[i].minVisits) {
                    this.salutation = this.pickRandom(this.salutations[i].text);
                    break;
                }
            }
        }
    }
});