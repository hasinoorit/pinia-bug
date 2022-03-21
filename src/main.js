import { createApp } from "vue"
import { createPinia } from "pinia"
import * as VueRouter from "vue-router"
import App from "./App.vue"

const Home = () => import("./pages/Home.vue")
const About = () => import("./pages/About.vue")

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
})

const pinia = createPinia()

pinia.use(() => {
  console.log("Pinia plugin worked")
})

const app = createApp(App)
app.use(router)
app.use(pinia)
// app.mount("#app") // work with pinia plugin
router.isReady().then(() => {
  app.mount("#app") // don't work with pinia plugin
})
