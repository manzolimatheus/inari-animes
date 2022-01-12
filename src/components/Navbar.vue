<template>
  <header>
    <nav id="navpc">
      <router-link to="/"
        ><ion-icon name="home-outline"></ion-icon>Início</router-link
      >
      <router-link to="/animes"
        ><ion-icon name="easel-outline"></ion-icon>Categorias
      </router-link>
      <router-link to="/calendar"
        ><ion-icon name="today-outline"></ion-icon>Calendário</router-link
      >
      <router-link to="/requests"
        ><ion-icon name="send-outline"></ion-icon>Pedidos</router-link
      >
      <router-link to="/search"
        ><ion-icon name="search-outline"></ion-icon> Pesquisar</router-link
      >
      <router-link to="/"
        ><ion-icon name="person-outline"></ion-icon>Entre ou
        cadastre-se</router-link
      >
    </nav>
    <div id="navmobile">
      <a href="#"
        ><img
          src="@/assets/img/logo.jpg"
          alt="Logo"
          class="logo"
          @click="showMenuMobileItems"
          id="menu"
      /></a>
    </div>
    <div id="items">
      <router-link to="/"
        ><ion-icon name="home-outline"></ion-icon>Início</router-link
      >
      <router-link to="/animes"
        ><ion-icon name="easel-outline"></ion-icon>Categorias
      </router-link>
      <router-link to="/calendar"
        ><ion-icon name="today-outline"></ion-icon>Calendário</router-link
      >
      <router-link to="/requests"
        ><ion-icon name="send-outline"></ion-icon>Pedidos</router-link
      >
      <router-link to="/search"
        ><ion-icon name="search-outline"></ion-icon> Pesquisar</router-link
      >
      <router-link to="/"
        ><ion-icon name="person-outline"></ion-icon>Entre ou
        cadastre-se</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    showMenuMobileItems() {
      let items = document.getElementById("items");
      if (items.style.display === "flex") {
        items.style.display = "none";
      } else {
        items.style.display = "flex";
      }
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #0f0f0f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
  width: 98%;
}

.logo {
  width: 30px;
  height: 30px;
  object-fit: scale-down;
}

a {
  color: white;
}

ion-icon {
  color: #fff;
  padding-inline: 5px;
}

#navmobile,
#items {
  display: none;
}

@media (max-width: 768px) {
  #navpc {
    display: none;
  }

  #navmobile {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
  }

  .logo {
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;
  }

  #items {
    z-index: 1;
    flex-wrap: wrap;
    display: none;
    height: 80vh;
    animation: grow 1s;
  }

  @keyframes grow {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: 80vh;
      opacity: 100%;
    }
  }

  #items a {
    width: 100%;
    padding: 3%;
  }

  #navmobile > ion-icon {
    font-size: 2em;
  }

  #menu {
    border-radius: 10px;
  }

  #menu:hover {
    border: 1px solid white;
  }
}
</style>
