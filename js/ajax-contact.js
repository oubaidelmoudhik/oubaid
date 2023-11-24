// (function ($) {
//     'use strict';

//     var form = $('.contact__form'),
//         message = $('.contact__msg'),
//         form_data;

//     // Success function
//     function done_func(response) {
//         message.fadeIn().removeClass('alert-danger').addClass('alert-success');
//         message.text(response);
//         setTimeout(function () {
//             message.fadeOut();
//         }, 2000);
//         form.find('input:not([type="submit"]), textarea').val('');
//     }

//     // fail function
//     function fail_func(data) {
//         message.fadeIn().removeClass('alert-success').addClass('alert-success');
//         message.text(data.responseText);
//         setTimeout(function () {
//             message.fadeOut();
//         }, 2000);
//     }

//     form.submit(function (e) {
//         e.preventDefault();
//         form_data = $(this).serialize();
//         $.ajax({
//             type: 'POST',
//             url: form.attr('action'),
//             data: form_data
//         })
//         .done(done_func)
//         .fail(fail_func);
//     });

// })(jQuery);

const send = document.getElementById("submit");
send.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    Email.send({
        SecureToken: "c05c9eec-5046-4e29-9c46-3fc514896b52",
        To: "oubaidelmoudhik@gmail.com",
        From: "oubaidelmoudhik@gmail.com",
        Subject: subject,
        Body: message,
    }).then((message) => alert(message));
});
