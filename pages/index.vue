<template>
  <div>
    <Navbar />
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "IndexPage",
  components: { Hero, About, Navbar },
};
</script>
