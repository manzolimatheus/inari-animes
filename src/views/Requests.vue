<template>
  <div class="main-requests mt-3">
    <div class="submain-req">
      <h1>Deseja realizar um pedido para nossos ademires?</h1>
      <h3>Preencha o formulário ao lado! ps: sem garantias, hein</h3>
    </div>
    <div>
      <form action="">
        <div class="form-group" style="width: 100%">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Nome"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Requests",
};
</script>

<style scoped>
.main-requests {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  align-items: center;
  justify-content: center;
}
.main-requests > div > h1,
.main-requests > div > h3 {
  color: #ffffff;
  font-weight: bolder;
}

.main-requests > div > form > .form-group > input {
  border: 1px solid orange;
  border-radius: 5px;
  width: 70%;
  font-size: 14pt;
  padding: 1%;
  -moz-box-shadow: inset 0 0 8px rgb(255, 255, 255);
  -webkit-box-shadow: inset 0 0 8px rgb(255, 255, 255);
  box-shadow: inner 0 0 8px rgb(255, 255, 255);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}

.main-requests > div > form > .form-group > input:focus {
  outline: none !important;
  border-color: orange;
  box-shadow: 0 0 10px orange;
}
.main-requests > div > form > .form-group > textarea {
  border: 1px solid orange;
  border-radius: 5px;
  width: 70%;
  font-size: 14pt;
  padding: 1%;
  -moz-box-shadow: inset 0 0 4px rgb(255, 255, 255);
  -webkit-box-shadow: inset 0 0 4px rgb(255, 255, 255);
  box-shadow: inner 0 0 4px rgb(255, 255, 255);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}

.main-requests > div > form > .form-group > textarea:focus {
  outline: none !important;
  border-color: orange;
  box-shadow: 0 0 10px orange;
}

.main-requests > div > form > button {
  background-color: #32cd32;
  border: 1px solid #000000;
  width: 100%;
  height: 40px;
  font-size: 16pt;
  border-radius: 5px;
}

.main-requests > div > form {
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.submain-req {
  text-align: center;
}
</style>
