setTimeout(function () {
        var response = function (xhr,b,c) {
            console.log("xhr", xhr);
            // console.log("b", b);
            // console.log("c", c);
            // alert("OK RESPONSE");
            AddMessage(xhr.status);
            AddMessage(xhr.statusText);
            AddMessage(xhr.response);
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
