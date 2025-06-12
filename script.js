function showWish() {
  var name = document.getElementById("nameInput").value;
  var dob = new Date(document.getElementById("dobInput").value);
  var today = new Date();

  if (dob.getDate() === today.getDate() && dob.getMonth() === today.getMonth()) {
    var message = "🎉 Happy Birthday " + name + "! 🎂 Wishing you a joyful and blessed year ahead!";
    document.getElementById("wishMessage").innerText = message;
    document.getElementById("bdayPic").style.display = "block";
  } else {
    document.getElementById("wishMessage").innerText = "😔 Sorry, today is not the birthday of " + name + ".";
    document.getElementById("bdayPic").style.display = "none";
  }
}