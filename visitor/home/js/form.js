setTimeout(function () {
        var form = new RestForm('form', error, success);

        form.submit({
            "target": "form",
            "url": "//php.jloads.com/index.php",
            "method": "get"
        });
    },
    400
);
