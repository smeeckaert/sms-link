var SMSLink = SMSLink || {};
SMSLink.detector = SMSLink.detector || (function () {

        /* See http://stackoverflow.com/questions/7575504/detecting-ios-version-on-a-web-page */
        var ua = navigator.userAgent;
        var os;
        var version;

        var uaIndex;

        // determine OS
        if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
            os = 'iOS';
            uaIndex = ua.indexOf('OS ');
        }
        else if (ua.match(/Android/i)) {
            os = 'Android';
            uaIndex = ua.indexOf('Android ');
        }
        else {
            os = null;
        }

        // determine version
        if (os === 'iOS' && uaIndex > -1) {
            version = ua.substr(uaIndex + 3, 3).replace('_', '.');
        }
        else if (os === 'Android' && uaIndex > -1) {
            os = ua.substr(uaIndex + 8, 3);
        }
        else {
            ver = null;
        }

        return {
            version: function () {
                return version;
            },
            os: function () {
                return os;
            },
            isMobile: function () {
                return os !== null;
            }
        }
    });