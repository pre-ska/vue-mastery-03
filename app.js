const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {},
  computed: {},
});

app.component("hello-world-item", {
  template: `
  <div class="container">hello world</div>
  `,
});

app.mount("#app");
