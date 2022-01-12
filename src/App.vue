<template>
  <Navbar />
  <Toast>Olá, tudo bom com você? vimos que voce vla bla bla bla</Toast>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Toast from "@/components/Toast.vue";
export default {
  components: {
    Navbar,
    Toast,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
}

body {
  background-color: #111111;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

/* if screen is smaller than 576px */
@media (max-width: 576px) {
  .container {
    max-width: 100%;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

a {
  text-decoration: none;
}

.mt-3 {
  margin-top: 3%;
}

.mb-3 {
  margin-bottom: 3%;
}

.p-3 {
  padding: 3%;
}
</style>
