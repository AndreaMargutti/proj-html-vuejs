import { createApp } from "vue";
import App from "./App.vue";
import "./style/general.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

// Crea l'app e registra il componente font-awesome-icon globalmente
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
