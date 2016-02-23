var SMSLink = SMSLink || {};
SMSLink.link = SMSLink.link || (function () {

        function init() {
            if (!SMSLink.linkDetector) {
                SMSLink.linkDetector = new SMSLink.detector();
            }
        }

        init();
        return {
            replaceAll: function () {
                this.replaceWithSelector("[href^='sms:']");
            },
            replaceWithSelector: function (selector) {
                elements = document.querySelectorAll(selector);
                for (i in elements) {
                    this.replace(elements[i]);
                }
            },
            replace: function (item) {
                if (item.href) {
                    replaceBody = false;
                    switch (SMSLink.linkDetector.os()) {
                        case 'iOS':
                            if (parseFloat(SMSLink.linkDetector.version()) <= 8) {
                                replaceBody = ';';
                            } else {
                                replaceBody = '&';
                            }
                            break;
                        default:
                            break;
                    }
                    if (replaceBody) {
                        item.href=item.href.replace(/\?body=/, replaceBody + 'body=');
                    }
                }
            }
        }
    });