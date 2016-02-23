# SMS Link

Make SMS links compatible cross devices, without any other dependancies.

## The problem

In the world of SMS URLs, iOS is making our life hard.

The standard way to write an SMS link in HTML is this one:

```html
<a href="sms:+33102030405?body=Body Content">Your link text</a>
```

This thing is, depending on which version of iOS you use, the ```?``` separator must be changed to either a ```;```
or a ```&```.

This library detect which version you're running and adapt the links accordingly.

## How to use

Include ```sms-link.min.js``` and put a link in your html.

```html
<a href="sms:+33102030405?body=Body Content">Your link text</a>
```

Then just call the class in JavaScript

```js
document.addEventListener('DOMContentLoaded', (function () {
    link = new SMSLink.link();
    link.replaceAll();
}), false);
```

## API

### SMSLink.detector 

This class is used to detect version of mobile OSes.

Only Android and iOS are detected.

It exposes various method :

* os : return either iOS or Android or null if nothing has been detected
* version : return the found version or null if nothing had been detected
* isMobile: return true if the OS has been detected

### SMSLink.link

This class replace the links with correct URLS.

Methods:

* replace : Replace the href attribute to match the correct format used by the OS.
* replaceWithSelector : Call the replace method on all matching elements
* replaceAll : Replace all "sms:" url to a correct version.

## License

This code is in Public Domain, so do anything you want with it.

The SMSLink.detector code is inspired by a StackOverflow post, so I guess it's under the MIT licence, anyway
you'll find a link in the source code.