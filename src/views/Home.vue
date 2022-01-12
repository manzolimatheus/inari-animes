<template>
  <div class="home">
    <Carousel :animes="items" />
    <div class="grid p-3">
      <div id="wrapper">
        <!-- Sessão dos mais recentes -->
        <section id="recentes">
          <h1 class="mt-3">Animes Recentes</h1>
          <div class="ep-animes mt-3">
            <Card
              v-for="item in items.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
              )"
              :key="item.id"
              :title="item.name"
              :description="item.description"
              :image="item.poster_image"
            />
          </div>
        </section>
        <!-- Sessão de categoria personalizada 1 -->
        <section id="custom_cat_1">
          <h1 class="mt-3">Para não sair da cadeira</h1>
          <div class="ep-animes mt-3">
            <Card
              v-for="item in items"
              :key="item.id"
              :title="item.name"
              :description="item.description"
              :image="item.poster_image"
            />
          </div>
        </section>
        <!-- Sessão de categoria personalizada 2 -->
        <section id="custom_cat_2">
          <h1 class="mt-3">Para assistir comendo pipoca</h1>
          <div class="ep-animes mt-3">
            <Card
              v-for="item in items"
              :key="item.id"
              :title="item.name"
              :description="item.description"
              :image="item.poster_image"
            />
          </div>
        </section>
      </div>
      <!-- TOP populares -->
      <section id="populares">
        <div class="top-animes mt-3 p-3">
          <h1 class="mt-3">Mais populares</h1>
          <div class="ordem mt-3">
            <div
              v-for="(item, index) in items.sort((a, b) => b.clicks - a.clicks)"
              :key="item.id"
              class="item mt-3 p-3"
            >
              <h1>{{ index + 1 }}.</h1>
              <Card
                :title="item.name"
                :image="item.poster_image"
                :darken="true"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Carousel,
    Card,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async GetCarouselData() {
      const response = await axios.get("http://localhost:3000/animes");
      this.items = response.data;
    },
  },
  mounted() {
    this.GetCarouselData();
  },
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 2em;
}

.grid {
  display: grid;
  grid-template-columns: 75% 25%;
}

.ep-animes,
.ordem {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 100%;
  }
}

.top-animes {
  color: white;
}

.item h1 {
  position: absolute;
  font-size: 48pt;
  z-index: 1;
  text-shadow: 0 0 5px black;
}
</style>
