// plugins/maska.client.js
import { vMaska } from "maska/vue";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("maska", vMaska);
});