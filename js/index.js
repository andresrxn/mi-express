document.addEventListener('DOMContentLoaded', () => {


    const contadores = document.querySelectorAll('.counter');
    const velocidad = 1000;

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let = cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad

                if (valor_actual < cantidad_maxima) {
                    contador.innerHTML = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador, 10)
                } else {
                    contador.innerText = cantidad_maxima
                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                setTimeout(animarContadores, 200)
            }
        });

    }
    const observerOne = new IntersectionObserver(mostrarContadores, {
        threshold: 0.2
    });

    const counterCards = document.querySelectorAll('.counter-card');
    counterCards.forEach(counterCard => {
        observerOne.observe(counterCard);
    });
});
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const msg = document.querySelector('#form textarea');

const expresiones = {

    name: /^[a-zA-ZÀ-ÿ\s]{6,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/,
    msg: /^[\s\S]{10,400}$/,
}

const campos = {
    name: false,
    email: false,
    phone: false,
    msg: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
        case "phone":

            validarCampo(expresiones.phone, e.target, 'phone');

            break;
        case "msg":
            validarText(expresiones.msg, e.target, 'msg');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {


        document.querySelector(`.input-${campo} .input-error`).style.display = "none";
        document.querySelector(`.input-${campo} input`).classList.add("input-correct");
        document.querySelector(`.input-${campo} input`).classList.remove("input-incorrect");
        campos[campo] = true;
    } else {
        document.querySelector(`.input-${campo} input`).classList.remove("input-correct");
        document.querySelector(`.input-${campo} input`).classList.add("input-incorrect");
        document.querySelector(`.input-${campo} .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (input.value == "") {

        document.querySelector(`.input-${campo} .input-error`).style.display = "none";
        document.querySelector(`.input-${campo} input`).classList.remove("input-incorrect");
        document.querySelector(`.input-${campo} input`).classList.remove("input-correct");
    }
}
const validarText = (expresion, msg, campo) => {
    if (expresion.test(msg.value)) {

        document.querySelector(`.input-msg  textarea`).classList.add("input-correct");
        document.querySelector(`.input-msg  textarea`).classList.remove("input-incorrect");
        document.querySelector(`.input-msg .input-error`).style.display = "none"
        campos[campo] = true;
    } else {

        document.querySelector(`.input-msg textarea`).classList.add("input-incorrect");
        document.querySelector(`.input-msg textarea`).classList.remove("input-correct");
        document.querySelector(`.input-msg .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (msg.value == "") {
        document.querySelector(`.input-msg textarea`).classList.remove("input-incorrect");
        document.querySelector(`.input-msg textarea`).classList.remove("input-correct");
        document.querySelector(`.input-msg .input-error`).style.display = "none"
    }
}

// function showInp() {
//     let option = document.getElementById("sub").value;
//     if (option == "Solicitud de información") {

//         document.querySelector(".input-msg label").innerText = "¿Qué Información Necesitas?";
//     } else if (option == "Pregunta/Duda") {
//         document.querySelector(".input-msg label").innerText = "Déjanos saber tus interrogantes:";
//     } else if (option == "Comentario") {
//         document.querySelector(".input-msg label").innerText = "Haznos saber tu Comentario:";
//     } else if (option == "Queja") {
//         document.querySelector(".input-msg label").innerText = "Cuéntamos en qué podemos mejorar";
//     } else {
//         document.querySelector(".input-msg label").innerText = "Tu Mensaje";
//     }

// }
// showInp();

// let option = document.getElementById('sub');
// option.addEventListener('click', () => {
//     showInp();
// });

// option.addEventListener('DOMcontentLoaded', () => {
//     showInp();
// });

// option.addEventListener('change', () => {
//     showInp();
// // });
// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });
// msg.addEventListener('keyup', validarFormulario);
// msg.addEventListener('blur', validarFormulario);

// formulario.addEventListener('keyup', () => {
//     if (campos.name && campos.email && campos.msg && campos.phone) {
//         document.querySelector(`.input-submit .input-error`).style.display = "none";
//     }
// });

// let check = document.getElementById('check');
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();


//     if (campos.name && campos.email && campos.msg && campos.phone && check.checked) {
//         document.querySelector(`.input-submit .input-error`).style.display = "none"

//         form.submit();

//         let submit = document.getElementById('btnSubmit');
//         submit.value = "Enviando..."

//         return;

//     } else {
//         document.querySelector(`.input-submit .input-error`).style.display = "block";


//         setTimeout(() => {
//             document.querySelector(`.input-submit .input-error`).style.display = "none";
//         }, 4000);
//         return;
//     }

// });