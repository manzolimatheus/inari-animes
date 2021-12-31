<template>
  <div class="card" @mouseenter="showInfo" @mouseleave="showInfo">
    <img
      :src="image"
      alt="Imagem do cartão"
      v-show="!onhover"
      :style="darken === true ? 'filter: brightness(0.8)' : ''"
    />
    <div
      class="body"
      v-show="onhover"
      :style="`background-image: url(${image});`"
    >
      <div class="card-body">
        <h5 v-show="title">{{ title }}</h5>
        <p v-show="description">{{ description.substring(0, 100) + "..." }}</p>
        <a :href="link" v-show="link">Saiba mais</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "https://images-americanas.b2w.io/produtos/01/00/img/1987712/8/1987712881_1GG.jpg",
    },
    link: {
      type: String,
      default: null,
    },
    darken: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      onhover: false,
    };
  },
  methods: {
    showInfo() {
      this.onhover = !this.onhover;
    },
  },
};
</script>

<style>
.card {
  width: 200px;
  height: 250px;
  background-color: rgb(12, 12, 12);
  border-radius: 15px;
}

.card:hover {
  border: 2px solid orange;
  transform: scale(1.1);
  transition: all 0.5s;
  cursor: pointer;
}

.body {
  height: 250px;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-body {
  backdrop-filter: blur(5px) brightness(0.5);
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-body h5,
.card-body p {
  padding: 5%;
  color: white;
}

.card-body h5 {
  text-align: center;
  padding-top: 10px;
}

.card-body p {
  text-align: justify;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    height: 250px;
  }
}
</style>
