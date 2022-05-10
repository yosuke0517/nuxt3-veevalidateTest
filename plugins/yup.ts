import * as Yup from "yup";
import * as ja from "yup-locale-ja";

Yup.setLocale(ja.descriptive);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Yup);
});
