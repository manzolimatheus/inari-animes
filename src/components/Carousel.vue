<template>
  <div
    class="carousel"
    id="carousel"
    :style="`background-image: url('${animes[currentIndex].carousel_image}')`"
    v-if="animes.length > 0"
  >
    <div @click="previous" class="control">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </div>
    <div class="main">
      <div class="content">
        <img
          :src="animes[currentIndex].logo"
          alt="Logo do anime"
          class="logo-anime"
        />
        <p>{{ description }}</p>
      </div>
    </div>
    <div @click="next" class="control">
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["animes"],
  data() {
    return {
      currentIndex: 0,
      interval: 0,
    };
  },
  methods: {
    next() {
      if (this.animes.length - 1 === this.currentIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      clearInterval(this.interval);
      this.startInterval();
    },
    previous() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.animes.length - 1;
      } else {
        this.currentIndex--;
      }
      clearInterval(this.interval);
      this.startInterval();
    },
    startInterval() {
      this.interval = setInterval(() => {
        this.next();
      }, 5000);
    },
  },
  computed: {
    description: function () {
      return (
        this.animes[this.currentIndex].description.substring(0, 200) + "..."
      );
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 5% 90% 5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 1s;
}

.control {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.control ion-icon {
  font-size: 2em;
}

.main {
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%;
}

.content {
  width: 40%;
  text-align: justify;
}

.content img {
  width: 100%;
}

.main p {
  color: white;
  white-space: pre-line;
}

@media (max-width: 768px) {
  .content {
    width: 100%;
  }
}

@media (min-width: 1400px) {
  .carousel {
    height: 100%;
  }
}
</style>
