<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Clients />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Navbar from "../components/Navbar.vue";
import Portfolio from "~/components/Portfolio.vue";
import Clients from "../components/Clients.vue";

export default {
  name: "IndexPage",
  components: { Hero, About, Navbar, Portfolio, Clients },
};
</script>
