// class Validator {
//   constructor() {
//     this.validations = ["data-max-length", "data-required"];
//   }

//   validate(form) {
//     let inputs = form.getElementsByTagName("input");
//     let selects = form.getElementsByTagName("select");

//     let inputsArray = [...inputs];
//     let selectsArray = [...selects];

//     inputsArray.forEach(function (input) {
//       for (let i = 0; this.validations.length > i; i++) {
//         if (input.getAttribute(this.validations[i]) != null) {
//           let method = this.validations[i]
//             .replace("data-", "")
//             .replace("-", "");
//           let value = input.getAttribute(this.validations[i]);

//           this[method](input, value);
//         }
//       }
//     }, this);
//     selectsArray.forEach(function (select) {
//       for (let i = 0; this.validations.length > i; i++) {
//         if (select.getAttribute(this.validations[i]) != null) {
//           let method = this.validations[i]
//             .replace("data-", "")
//             .replace("-", "");
//           let value = select.getAttribute(this.validations[i]);

//           this[method](select, value);
//         }
//       }
//     }, this);
//   }
//   maxlength(input, maxValue) {
//     let inputLength = input.value.length;

//     let errorMessage = `Error`;

//     if (inputLength > maxValue) {
//       this.printMessage(input, errorMessage);
//     }
//   }

//   required(input) {
//     let inputValue = input.value;

//     if (inputValue === "") {
//       let errorMessage = `Error`;

//       this.printMessage(input, errorMessage);
//     }
//   }
//   requiredSelect(select) {
//     let selectValue = selectValue.value;

//     if (selectValue === "0") {
//       let errorMessage = `Error`;

//       this.printMessageSelect(select, errorMessage);
//     }
//   }

//   printMessage(input, msg) {
//     let errorsQty = input.parentNode.querySelector(".error-validation");

//     if (errorsQty === null) {
//       let template = document
//         .querySelector(".error-validation")
//         .cloneNode(true);

//       template.textContent = msg;

//       let inputParent = input.parentNode;

//       template.classList.remove("template");

//       inputParent.appendChild(template);
//     }
//   }
//   printMessageSelect(select, msg) {
//     let errorsQty = input.parentNode.querySelector(".error-validation");

//     if (errorsQty === null) {
//       let template = document
//         .querySelector(".error-validation")
//         .cloneNode(true);

//       template.textContent = msg;

//       let selectParent = select.parentNode;

//       template.classList.remove("template");

//       selectParent.appendChild(template);
//     }
//   }
//   cleanValidations(validations) {
//     validations.forEach((el) => el.remove());
//   }
// }

// let form = document.getElementById("form");
// let submit = document.getElementById("btnEnviar");

// let validator = new Validator();

// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   validator.validate(form);
//   // checkInputs();
// });

const nomeError = document.getElementById("invalid-feedback-nome");
const dataInitialError = document.getElementById("invalid-feedback-dataInit");
const dataEndError = document.getElementById("invalid-feedback-dataFim");
const propError = document.getElementById("invalid-feedback-selectprop");
const labError = document.getElementById("invalid-feedback-selectlab");

const nome = document.getElementById("name");
const dataInit = document.getElementById("dateInitial");
const dataFim = document.getElementById("dateEnd");
const prop = document.getElementById("prop");
const lab = document.getElementById("lab");

const enviar = document.getElementById("btnEnviar");
enviar.addEventListener("click", function (event) {
  event.preventDefault();
  validarCampo(nome, nomeError);
  validarCampo(dataInit, dataInitialError);
  validarCampo(dataFim, dataEndError);
  validarCampoSelect(prop, propError);
  validarCampoSelect(lab, labError);
});

nome.addEventListener("input", function () {
  limparErros(nome, nomeError);
});

dataInit.addEventListener("input", function () {
  limparErros(dataInit, dataInitialError);
});

dataInit.addEventListener("change", function () {
  limparErros(dataInit, dataInitialError);
});

dataFim.addEventListener("input", function () {
  limparErros(dataFim, dataEndError);
});

dataFim.addEventListener("change", function () {
  limparErros(dataFim, dataEndError);
});

prop.addEventListener("change", function () {
  limparErros(prop, propError);
});

lab.addEventListener("change", function () {
  limparErros(lab, labError);
});

function validarCampo(campo, erro) {
  if (campo.value.trim() === "") {
    exibirErro(campo, erro);
    return false;
  } else {
    limparErros(campo, erro);
    return true;
  }
}

function validarCampoSelect(campo, erro) {
  if (campo.value === "0") {
    exibirErro(campo, erro);
    return false;
  } else {
    limparErros(campo, erro);
    return true;
  }
}

function exibirErro(campo, erro) {
  campo.style.color = "red";
  campo.style.borderColor = "red";
  erro.style.display = "block";
}

function limparErros(campo, erro) {
  campo.style.color = "green";
  campo.style.borderColor = "green";
  erro.style.display = "none";
}

function fazPost(body) {
  console.log("Body=", body);
}

function cadastraTeste() {
  event.preventDefault();
  let url = "http://127.0.0.1:5000/users";
  let nome = document.getElementById("name").value;
  let dateInitial = document.getElementById("dateInitial").value;
  let dateEnd = document.getElementById("dateEnd").value;
  let prop = document.getElementById("prop").value;
  let lab = document.getElementById("lab").value;
  let message = document.getElementById("message").value;

  // console.log(nome);
  // console.log(dateInitial);
  // console.log(dateEnd);
  // console.log(prop);
  // console.log(lab);
  // console.log(message);

  body = {
    nome: nome,
    dataInicial: dateInitial,
    dataFinal: dateEnd,
    infosPropriedade: {
      id: prop,
      nome: lab,
    },
    laboratorio: {
      id: lab,
      nome: lab,
    },
    observacoes: message,
  };
  fazPost(body);
}
