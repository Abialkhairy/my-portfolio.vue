<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Navbar from "../components/Navbar.vue";
import Portfolio from "~/components/Portfolio.vue";

export default {
  name: "IndexPage",
  components: { Hero, About, Navbar, Portfolio },
};
</script>
