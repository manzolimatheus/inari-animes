<template>
  <div class="container-form">
    <img
      src="https://cdn-cf-east.streamable.com/image/lixqii.jpg?Expires=1640374320&Signature=jg90z6bwPsTXmBQOaQtdQEnM-3eEtSaK3uVby1ZyZfdmj8mOpvpjgFF2Y~b3ZiI7CgWkDzTvENEc5B9hgKflt2Yw1rX3k62XtAF0hUeN1S8CjjezMbT7IFfzw1QerZXlQ8nCNjzqd4OexESer7cz2pW6hvaADduUsYWjR5hFfy~m9yuV23p0SQ4GJkfs8JARcishv4xPH5XBqmuaU11N7pqHNdIjRwHU75lhzYQJmaoD78pqWNKuBct3NYW0IWUMBnES4QogcurjeVsJe9lT~0wYthnEvlSi~VD0~LlEshqxWe7~7RFbeNypvkuO-MFwg4vmcs58Uy9W9nUduqQSwQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
      alt="Garota escrevendo carta"
      class="img"
    />
    <div class="mt-3">
      <h1>Deseja realizar um pedido? Escreva abaixo!</h1>
    </div>
    <div class="container mt-3 div-form p-3">
      <form @submit.prevent="SendRequest">
        <div>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nome"
            v-model="name"
          />
        </div>
        <div>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div>
          <textarea
            id="message"
            rows="3"
            placeholder="Escreva seu pedido aqui"
            v-model="message"
          ></textarea>
        </div>
        <button type="submit" class="button">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Requests",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    SendRequest() {
      this.$store.commit("showToast", {
        message: "Pedido enviado com sucesso!",
      });
    },
  },
};
</script>

<style scoped>
.container-form {
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.img {
  height: 300px;
  object-fit: cover;
}

.div-form {
  width: 60%;
}

input,
textarea {
  width: 100%;
  margin-top: 10%;
  margin-bottom: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid orange;
  font-size: 14pt;
  color: white;
}

input:focus,
textarea:focus {
  outline: none;
}

.button {
  width: 100%;
  background: orange;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14pt;
  cursor: pointer;
  padding: 2%;
}
</style>
