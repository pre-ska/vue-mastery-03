const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {},
  computed: {},
});

app.component("todo-list-item", {
  props: {
    task: {
      type: String,
      required: true,
      // validator(value) { // ! validator radi samo u dev enviromentu
      //   return value.length > 0;
      // }
    },
    id: {
      type: Number,
      required: false,
      validator(value) {
        return value >= 1 && value <= 100;
      },
      // default() { // ! mora biti funkcija za niz i obj, za primitive može "default: 5"
      //   return []
      // }
    },
  },
  template: `
  <div 
    class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4"
  >
    {{ task }}
  </div>`,
});

app.mount("#app");
