document.addEventListener("DOMContentLoaded", function () {
  const inputbox = document.getElementById("input-box");
  const list = document.getElementById("list-container");
  const button = document.getElementById("add-button");
  let checkedaudio = new Audio("checked.mp3");

  function addTask() {
    if (inputbox.value === "") {
      alert("Please enter a task!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputbox.value;
      list.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
  }

  button.addEventListener("click", addTask);

  list.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

        checkedaudio.play();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    },
    false
  );

  function saveData() {
    localStorage.setItem("data", list.innerHTML);
  }

  function showlist() {
    list.innerHTML = localStorage.getItem("data");
  }

  showlist();
});
