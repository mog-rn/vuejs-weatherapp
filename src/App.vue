<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebaseinit";

export default {
  name: "App",
  data() {
    return {
      ApiKey: "9595f7953f14d0ebc0d94574fad520c4",
      city: "Eldoret",
      cities: [],
    };
  },
  created() {
    this.getCityWeather();
  },
  methods: {
    getCityWeather() {
      let firebaseDB = db.collections("cities");

      firebaseDB.onSnapShot((snap) => {
        snap.docChanges.forEach(async (doc) => {
          console.log(doc);
        });
      });
    },
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
