let nextTaskId = 100; // ! helper za kreiranje IDjeva

const app = Vue.createApp({
  emits: ["added"],
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    taskAdded(task) {
      this.tasks.push({
        id: nextTaskId++,
        description: task,
        done: false,
        priority: false,
      });
      this.task = "";
    },
  },
  computed: {},
});

app.component("todo-list-item", {
  props: {
    task: {
      type: String,
      required: true,
      // validator(value) { // ! validator radi samo u dev enviromentu i baci warning u konzoli
      //   return value.length > 0;
      // }
    },
    // id: {
    //   type: Number,
    //   required: false,
    //   validator(value) {
    //     return value >= 1 && value <= 100;
    //   },
    //   // default() { // ! mora biti funkcija za niz i obj, za primitive može "default: 5"
    //   //   return []
    //   // }
    // },
  },
  template: `
  <div 
    class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4"
  >
    {{ task }}
  </div>`,
});

app.component("add-task-input", {
  // ! data je state pojedine komponente
  data() {
    return {
      task: "",
    };
  },
  // ! methods su funkcije pojedine komponente
  methods: {
    add() {
      this.$emit("added", this.task); // ! dispach eventa - piše se this.$emit ("KOJI_EVENT", OPTIONAL_PAYLOAD)
      this.task = "";
    },
  },
  template: `
    <input type="text" 
    class="block w-full rounded-md shadow-sm text-lg p-4"
    placeholder="Enter task and hit enter"
    @keyup.enter="add"
    v-model="task"
    />
  `,
});

app.mount("#app");
