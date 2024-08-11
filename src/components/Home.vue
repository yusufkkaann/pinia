<template>
  <div class="row">
    <h1>Pinia</h1>
    <hr />
    <div class="col-md-6">
      <p>
        <strong>Sayı {{ store.count }} </strong>
      </p>
      <button class="btn btn-primary" @click="store.increment">+</button>
      <button class="btn btn-outline-secondary ms-3" @click="store.decrement">
        -
      </button>
      <hr />
      <p>
        <span>{{ store.car.color }}</span> renkli
        <span>{{ store.car.brand }}</span>
      </p>
      <button class="btn btn-primary" @click="updateCountAndCar">
        Arabayı ve Sayacı Güncelle
      </button>
      <hr />
      <button class="btn btn-primary" @click="store.getUser">Yazılarım</button>
      <ul>
        <li v-for="user in store.users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const updateCountAndCar = () => {
  store.$patch({
    count: 1000,
    car: {
      color: "Kırmızı",
      brand: "BMW",
    },
  });
};
</script>
