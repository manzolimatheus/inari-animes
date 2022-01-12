<template>
  <div id="search" class="container">
    <form class="mt-3 p-3" @submit.prevent="Search">
      <input
        type="text"
        v-model="query"
        placeholder="Digite aqui..."
        @input="Search"
      />
    </form>
    <div v-if="animes.length > 0">
        <p class="message">{{animes.length}} resultado(s) encontrados.</p>
      <div class="animes mt-3 p-3">
        <Card
          v-for="item in animes"
          :key="item.id"
          :title="item.name"
          :description="item.description"
          :image="item.poster_image"
        />
      </div>
    </div>
    <p v-else class="mt-3 p-3 message">Nenhum anime encontrado.</p>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Search",
  components: {
    Card,
  },
  data() {
    return {
      query: "",
      animes: [],
    };
  },
  methods: {
    Search() {
      axios
        .get("http://localhost:3000/animes?name_like=" + this.query)
        .then((response) => {
          this.animes = response.data;
        });
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  background-color: #535353;
  padding: 1%;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 14pt;
}

.animes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.message {
  text-align: center;
  font-size: 14pt;
  color: #ffffff;
}
</style>
