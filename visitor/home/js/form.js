setTimeout(function () {
        var response = function () {
            alert("OK RESPONSE");
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
