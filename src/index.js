import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import validator from "./modules/validator";
import sendForm from "./modules/sendForm";
import sertificates from "./modules/sertificates";
import calc from "./modules/calc";
import smoothScroll from "./modules/smoothScroll";

const forms = document.querySelectorAll('form')

modal();
slider();
timer('23 january 2023');
sertificates();
smoothScroll();
calc();
validator();


forms.forEach((e) => {
  sendForm({
    formId: e,
    someElem: [
      {
        type: 'input',
        name: "calc-total"
      }
    ]
  });
})

// sendForm({
//   formId: 'action-form2',
// });
// sendForm({
//   formId: 'callback-form1',
// });
// sendForm({
//   formId: 'application-form1',
// });