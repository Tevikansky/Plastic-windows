import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import validator from "./modules/validator";
import sendForm from "./modules/sendForm";

modal();
slider();
timer('23 january 2023');
validator();
sendForm({
  formName: 'action-form',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
