new Vue({
    el: "#app",
    data: {
      options: ["rock", "paper", "scissors"],
      computerChoice: "",
      result: "",
    },
    methods: {
      play(userChoice) {
        this.computerChoice =
          this.options[Math.floor(Math.random() * this.options.length)];

        if (userChoice === this.computerChoice) {
          this.result = "It's a tie!";
        } else if (
          (userChoice === "rock" && this.computerChoice === "scissors") ||
          (userChoice === "paper" && this.computerChoice === "rock") ||
          (userChoice === "scissors" && this.computerChoice === "paper")
        ) {
          this.result = "You win!";
        } else {
          this.result = "You lose!";
        }
      },
    },
  });