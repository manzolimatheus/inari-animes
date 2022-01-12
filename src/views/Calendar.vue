<template>
  <div class="calendar" v-show="data">
    <Carousel :animes="data" />
    <div class="container mb-3 p-3">
      <h1 class="mt-3">
        <ion-icon name="calendar-outline"></ion-icon> Cronograma de lançamentos
      </h1>
      <section id="days">
        <div class="content mt-3" v-for="(day, index) in days" :key="index">
          <div class="mt-3">
            <h2>
              <ion-icon name="calendar-number-outline"></ion-icon> {{ day }}
            </h2>
            <hr />
            <div v-if="getDay(day).length > 0">
              <p v-for="(anime, index) in getDay(day)" :key="index" class="p-3">
                <Card
                  :title="anime.name"
                  :description="anime.description"
                  :image="anime.poster_image"
                />
              </p>
            </div>
            <p class="mt-3" v-else>
              Nossos detetives ainda estão procurando lançamentos para este
              dia!...
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "Calendar",
  components: {
    Carousel,
    Card,
  },
  data() {
    return {
      data: [],
      days: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
      ],
    };
  },
  methods: {
    getDay(day) {
      return this.data.filter((anime) => anime.schedule[0].day === day);
    },
    getData() {
      axios
        .get("http://localhost:3000/animes?_embed=schedule")
        .then((response) => {
          this.data = response.data;
        });
    },
  },
  mounted() {
    this.getData();
    console.log(this.data);
  },
};
</script>
<style scoped>
.calendar {
  margin: 0 auto;
  color: #ffffff;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
