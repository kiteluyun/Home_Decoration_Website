

(function ($, window, document, undefined) {
    'use strict';

    var validateEmail = function(elementValue) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }


    var $form = $('#contact-form');

    $('#name').keyup(function(){
        $(this).removeClass('has-error');
    });

    $('#email').keyup(function(){
        var value = $(this).val();
        var valid = validateEmail(value);

        if (!valid) {
            $(this).addClass('has-error');
        } else {
            $(this).removeClass('has-error');
        }
    });

    $('#phone').keyup(function(){
        $(this).removeClass('has-error');
    });

    $('#message').keyup(function(){
        $(this).removeClass('has-error');
    });

    $form.submit(function (e) {
        // remove the error class
        //$('.form-group').removeClass('has-error');
        //$('.help-block').remove();

        $('.result').html('<span class="">Sending ...</span>');

        // get the form data
        var formData = {
            'name' : $('input[name="name"]').val(),
            'email' : $('input[name="email"]').val(),
            'phone' : $('input[name="phone"]').val(),
            'message' : $('textarea[name="message"]').val()
        };



        // process the form
        $.ajax({
            type : 'POST',
            url  : 'process.php',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function (data) {

            // handle errors
            if (!data.success) {

                var mess_name    = '';
                var mess_email   = '';
                var mess_phone   = '';
                var mess_message = '';
                
                
                if (data.errors.phone) {
                    $('#phone').addClass('has-error');
                    mess_phone = data.errors.phone+'<br>';
                }
                

                if (data.errors.message) {
                    $('#message').addClass('has-error');
                    mess_message = data.errors.message;
                }

                if (data.errors.email) {
                    $('#email').addClass('has-error');
                    mess_email = data.errors.email+'<br>';
                }


                if (data.errors.name) {
                    $('#name').addClass('has-error');
                    mess_name = data.errors.name+'<br>';
                }

                $('.result').html('<div class="alert alert-danger">'+mess_name+mess_email+mess_phone+mess_message+'</div>');
            } else {
                // display success message
                $('.result').html('<span class="success">' + data.message + '</span>');
                
            }
        }).fail(function (data) {
            
        });

        e.preventDefault();
    });
}(jQuery, window, document));
