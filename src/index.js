import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import validator from "./modules/validator";
import sendForm from "./modules/sendForm";
import sertificates from "./modules/sertificates";


modal();
slider();
timer('23 january 2023');
sertificates();
validator();
sendForm({
  formId: 'action-form',
});
sendForm({
  formId: 'action-form2',
});
sendForm({
  formId: 'callback-form1',
});
sendForm({
  formId: 'application-form1',
});
