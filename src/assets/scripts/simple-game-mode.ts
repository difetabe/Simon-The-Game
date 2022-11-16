export default {
  methods: {
    computerTurn() {
      this.level += 1;
      this.steps.push(this.getRandomId());
    },
    data() {
      return {
        mode: "easy",
      };
    },
  },
};
