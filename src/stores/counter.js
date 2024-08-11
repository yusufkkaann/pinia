import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 10,
    car: {
      brand: "Toyota",
      color: "beyaz",
    },
    users: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    async getUser() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        {
          params: {
            _limit: 6, // İlk 5 kullanıcıyı çekmek için
          },
        }
      );
      this.users = response.data;
    },
  },
  // persist: {
  //   enabled: true, // Tüm state'leri sakla
  //   strategies: [
  //     {
  //       key: "counter",
  //       storage: localStorage, // localStorage veya sessionStorage kullanılabilir
  //     },
  //   ],
  // },
});
