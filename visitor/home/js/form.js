setTimeout(function () {
        var response = function (a,b,c) {
            console.log("a", a);
            console.log("b", b);
            console.log("c", c);
            // alert("OK RESPONSE");
        }

        var form = new RestForm('form', response, error, success);

        form.submit({
            "target": "form",
            "url": "//php.jloads.com/index.php",
            "method": "get"
        });
    },
    400
);
