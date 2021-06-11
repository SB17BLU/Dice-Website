function roll_dice() {
  console.log("Let's roll the dice!")

  var random_number = Math.round(Math.random()* 5 + 1);
  console.log(random_number);

  var image = "";

  if (random_number == 1) {
    image = "dice1.png"
  }

  if (random_number == 2) {
    image = "dice2.png"
  }

  if (random_number == 3) {
    image = "dice3.png"
  }

  if (random_number == 4) {
    image = "dice4.png"
  }

  if (random_number == 5) {
    image = "dice5.png"
  }

  if (random_number == 6) {
    image = "dice6.png"
  }

  document.querySelector("img").src = image;

}
