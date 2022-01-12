<template>
  <div id="animes">
    <div class="container mt-3">
      <h1>Categorias</h1>
      <div class="grid mt-3" v-if="items.length > 0">
        <div
          class="grid-item-top"
          @click="getAnimes(items[0].id, items[0].name)"
        >
          <img :src="items[0].image" alt="Imagem de anime" />
          <strong>{{ items[0].name }}</strong>
        </div>
        <div class="items">
          <div
            class="item"
            v-for="index in 8"
            :key="index"
            @click="getAnimes(items[index].id, items[index].name)"
          >
            <img :src="items[index].image" alt="Imagem de anime" />
            <strong>{{ items[index].name }}</strong>
          </div>
        </div>
      </div>
      <section id="animesCards">
        <h2 class="mt-3" v-if="title !== ''">
          Você está visualizando a categoria {{ title }} ({{ animes.length }})
        </h2>
        <div v-if="title !== '' && animes.length < 1">
          <br />
          <p>Nenhum anime encontrado.</p>
        </div>
        <div class="animes mt-3" v-if="animes.length > 0">
          <Card
            v-for="item in animes"
            :key="item.id"
            :title="item.name"
            :description="item.description"
            :image="item.poster_image"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "Animes",
  components: {
    Card,
  },
  data() {
    return {
      items: [],
      animes: [],
      title: "",
    };
  },
  methods: {
    getCategories() {
      axios
        .get("http://localhost:3000/category?_embed=animes&_limit=9")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAnimes(id, name) {
      this.title = name;
      axios
        .get(`http://localhost:3000/animes?categoryId=${id}`)
        .then((response) => {
          this.animes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
#animes {
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 10px;
}

.items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.item {
  width: 100%;
  height: 200px;
}

.item img,
.grid-item-top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.8);
}

.item img:hover,
.grid-item-top img:hover {
  filter: brightness(1);
}

.item strong,
.grid-item-top strong {
  text-align: center;
  font-size: 1.2rem;
  position: relative;
  top: -50%;
  right: -30%;
  text-shadow: 0 0 10px black;
}

.animes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 100%;
  }

  .grid-item-top {
    height: 300px;
  }

  .items,
  .animes {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .item {
    width: 100%;
  }
}
</style>
