$(document).ready(function () {

    $('#phone').on('input', function (event) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $("#btnContact").click(function () {
        let name = $('#name').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let message = $('#message').val();
        if (name == "" || phone == "" || email == "" || message == "") {
            $('#msj-required').show();
        } else {
            $("#btnContact").attr("disabled", true);
            $.ajax({
                type: "POST",
                url: "https://api.geofile.mx/user/api/mail",
                data: {
                    "name": $('#name').val(),
                    "phone": $('#phone').val(),
                    "mail": $('#email').val(),
                    "message": $('#message').val()
                },
                dataType: "JSON",
                success: function (data) {
                    swal({
                        title: "¡Gracias por contactarnos!",
                        text: "Tu mensaje ha sido enviado.",
                        type: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#FD8026",
                        confirmButtonText: "Cerrar",
                        closeOnConfirm: true,
                        closeOnCancel: false,
                    });
                    $('.form-input').val("");
                    $("#btnContact").attr("disabled", false);
                    $('#msj-required').hide();
                },
                error: function () {
                    swal({
                        title: "Mensaje no enviado",
                        html: "Por favor intentalo más tarde o llámanos.  <br> Con gusto te atenderemos.",
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#FD8026",
                        confirmButtonText: "Cerrar",
                        closeOnConfirm: true,
                        closeOnCancel: false,
                    });
                    $("#btnContact").attr("disabled", false);
                    $('#msj-required').hide();
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        const $notification = $delete.parentNode;

        $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});