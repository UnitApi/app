
var success = function (data) {
    console.log('loaded', data);
};
var error = function (data) {
    console.error('!loaded', data);
};

var jloads = new Load(document.body, success, error);

jloads.env("//localhost:80/", "local", function () {
    return window.location.hostname === 'localhost';
})

jloads.env("//js.jloads.com/", "production", function () {
    return window.location.hostname !== 'localhost';
})

// console.log(
//     'loada',loada
// );

// jloads.cache(1).cascade().js([
jloads.cacheOff().js([
    "load/message.js",
    "load/e.js",
    "load/formToObject.min.js",
    "load/response.js",
    "rest/rest.js",

    "include/include.js",

    "load/listener.js",
    "load/router.js",
    "rest/rest-form.js"
]);


var app = new Load(document.body, success, error);
app.env("//localhost:3000/", "local", function () {
    return window.location.hostname === 'localhost';
})
app.env("//app.jloads.com/", "production", function () {
    return window.location.hostname !== 'localhost';
})
app.cacheOff();

app.js([
    "visitor/home/js/form.js"
]);

app.style([
    "visitor/newsletter/css/black.css",
    "visitor/home/css/mobile.css"
]);

var media = new Load(document.body, success, error);
media.env("//localhost:3000/", "local", function () {
    return window.location.hostname === 'localhost';
})
media.env("//app.jloads.com/", "production", function () {
    return window.location.hostname !== 'localhost';
})
media.delay(10).target("#home-plugins");
media.html([
    "visitor/home/plugin/messages.html",
    "visitor/newsletter/plugin/create.html"
]);


var images = new Load(document.body, success, error);


images.target("#home-images").img([
    "//app.jloads.com/visitor/home/img/apiunit.png"
]);
