$('.assan-contact').submit(function () {
    var $form = $(this);
    var submitData = $form.serialize();
    var $email = $form.find('input[name="email"]');
    var $name = $form.find('input[name="name"]');
    var $message = $form.find('textarea[name="message"]');
    var $submit = $form.find('input[name="submit"]');
    var $dataStatus = $form.find('.data-status');
    if (!isValidForm($email.val(), $name.val(), $message.val())) {
        $dataStatus.show().html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert"><i class="fa fa-times"></i></button>Please enter all fields.</div>');
        return false;
    }
    else if (!isValidEmailAddress($email.val())) {
        $dataStatus.show().html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert"><i class="fa fa-times"></i></button>Please enter a valid email address.</div>');
        return false;
    }
    var jsonData = {
        title: "Poruka sa Dabome.com od " + $name.val()
        , postingSource: "WEB_PORTAL"
        , text: $message.val()
        , postedBy: $email.val()
    }
    $email.attr('disabled', 'disabled');
    $name.attr('disabled', 'disabled');
    $message.attr('disabled', 'disabled');
    $submit.attr('disabled', 'disabled');
    $dataStatus.show().html('<div class="alert alert-info"><strong>Sending...</strong></div>');
    $.ajax({ // Send an offer process with AJAX
        type: 'PUT'
        , url: 'http://app.dabome.com/rest/Customer/feedback'
        , contentType: 'application/json; charset=UTF-8'
        , dataType: 'json'
        , success: function (msg, textStatus, jqXHR) {
            if ("success" === textStatus) {
                $email.val('').removeAttr('disabled');
                $name.val('').removeAttr('disabled');
                $message.val('').removeAttr('disabled');
                $submit.removeAttr('disabled');
                $dataStatus.html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert"><i class="fa fa-times"></i></button>Thank you! We will contact you shortly.</div>').fadeIn();
            }
            else {
                $email.removeAttr('disabled');
                $name.removeAttr('disabled');
                $message.removeAttr('disabled');
                $submit.removeAttr('disabled');
                $dataStatus.html('<div class="alert alert-danger"><strong>Error, try later</strong></div>').fadeIn();
            }
        }
        , error: function (msg, textStatus, jqXHR) {
            $email.removeAttr('disabled');
            $name.removeAttr('disabled');
            $message.removeAttr('disabled');
            $submit.removeAttr('disabled');
            $dataStatus.html('<div class="alert alert-danger"><strong>Error, try later</strong></div>').fadeIn();
        }
        , data: JSON.stringify(jsonData)
    });
    return false;
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function isValidForm(email, name, msg) {
    if (email === null || name === null || msg === null || email.trim() === '' || name.trim() === '' || msg.trim() === '') {
        return false;
    }
    else {
        return true;
    }
}