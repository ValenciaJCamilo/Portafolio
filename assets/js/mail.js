/*=============== FORM ===============*/
function validate() {
    let name = document.querySelector(".username")
    let email = document.querySelector(".emailuser")
    let msg = document.querySelector(".messageuser")
    let submit = document.querySelector(".submit")
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let emailValido = expReg.test(email.value);
        if (name.value != "" && email.value != "" && msg.value != "") {
            if (emailValido == true) {
                document.getElementById("fullname").innerHTML = "";

                sendMail(name.value, email.value, msg.value);
                success();
                setValores();
            }
            else {
                mailError();
            }
        }
        else {
            inputEmpty();
        }
    })
}
validate();

function sendMail(name, email, msg) {
    emailjs.send("service_bvryk39", "template_zdlf7cq", {
        from_name: name,
        to_name: email,
        message: msg,
    });
}
function success() {
    swal({
        title: "Mensaje enviado!",
        text: "Muy pronto recibirás una respuesta.",
        icon: "success",
        button: "Ok"
    });
}
function inputEmpty() {
    swal({
        title: "Oops!",
        text: "Debes completar todos los campos.",
        icon: "error",
        button: "Ok"
    });
}
function mailError() {
    swal({
        title: "Hmm...",
        text: "El correo electrónico no es válido.",
        icon: "warning",
        button: "Ok"
    });
}