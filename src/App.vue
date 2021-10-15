<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      ApiKey: "9595f7953f14d0ebc0d94574fad520c4",
      city: "Eldoret",
    };
  },
  created() {
    this.getCurrentWeather();
  },
  methods: {
    getCurrentWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.ApiKey}`
        )
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "JetBrains Mono", monospace;
}
</style>
