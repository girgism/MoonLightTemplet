/*global $, alert, console */

/* Start Form Validation */
function validateEmail(email) {
    'use strict';

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateUsername(username) {
    'use strict';

    var re = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
    return re.test(String(username).toLowerCase());
}

function validatePassword(password) {
    'use strict';

    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
}

$('#email').on('blur', function () {
    'use strict';
    var email = $(this).val();
    if (validateEmail(email)) {
        $(this).css('border', '1px solid green');
    } else {
        $(this).css('border', '1px solid red');
        $(this).select();
    }
});

$('#username').on('blur', function () {
    'use strict';
    var username = $(this).val();
    if (validateUsername(username)) {
        $(this).css('border', '1px solid green');
    } else {
        $(this).css('border', '1px solid red');
        $(this).select();
    }
});

$('#password').on('blur', function () {
    'use strict';
    var password = $(this).val();
    if (validatePassword(password)) {
        $(this).css('border', '1px solid green');
        $('.password').css('color', 'green');
    } else {
        $(this).css('border', '1px solid red');
        $(this).css('box-shadow', 'none');
        $(this).select();
        $('.password').css('color', 'red');
    }
});

/* End Form Validation */
