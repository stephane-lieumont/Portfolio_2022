import emailjs from "@emailjs/browser";
import { formContactPortfolio } from "~/pages/Contact/FormContact";

const sendFormData = async (form: formContactPortfolio) => {
  return emailjs.send("service_z3vlwxx", "template_4l3no4p", form, "F1sBkt72M5RZV98jA");
};

export const ServiceEmailJs = {
  sendFormData,
};
