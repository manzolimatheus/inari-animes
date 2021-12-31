<template>
  <div class="calendar" v-show="schedule">
    <Carousel :animes="animes" />
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
              <p
                v-for="(anime, index) in getDay(day)"
                :key="index"
                class="p-3"
              >
                {{ anime.name }}
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

export default {
  name: "Calendar",
  components: {
    Carousel,
  },
  data() {
    return {
      schedule: [],
      days: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
      ],
      animes: [],
    };
  },
  methods: {
    getDay(day) {
      return this.schedule.filter((anime) => anime.day === day);
    },
    getSchedule() {
      axios.get("http://localhost:3000/schedule").then((response) => {
        this.schedule = response.data;
      });
    },
    getAnimes() {
      axios.get("http://localhost:3000/animes").then((response) => {
        this.animes = response.data;
      });
    },
  },
  mounted() {
    this.getSchedule();
    this.getAnimes();
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
