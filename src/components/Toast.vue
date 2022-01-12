<template>
  <div id="toast" v-show="show">
    <div class="toast-content">
      <progress :value="countdown" max="3">
        {{ countdown }}
      </progress>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      timer: null,
      countdown: 0,
    };
  },
  computed: {
    message() {
      return this.$store.state.toast.message;
    },
    show() {
      return this.$store.state.toast.show;
    },
  },
  watch: {
    show: function (newValue) {
      if (newValue) {
        this.timer = setInterval(() => {
          this.countdown++;
          if (this.countdown === 3) {
            this.$store.state.toast.show = false;
            this.$store.state.toast.message = "";
            this.countdown = 0;
            clearInterval(this.timer);
          }
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
#toast {
  position: sticky;
  top: 90%;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.toast-content {
  background-color: lightgreen;
  padding: 1%;
  border-radius: 0 0 10px 10px;
  width: fit-content;
  word-break: break-all;
  display: flex;
  flex-direction: column;
}

.toast-content:hover {
  cursor: pointer;
  background-color: rgb(121, 199, 121);
  transition: 0.5s;
}

progress {
  border-radius: 10px;
  height: 4px;
  width: 100%;
  margin-bottom: 4px;
}
progress::-webkit-progress-bar {
  background-color: transparent;
}
progress::-webkit-progress-value {
  background-color: white;
  border-radius: 7px;
}
</style>
