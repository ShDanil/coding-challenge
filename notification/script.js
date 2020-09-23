const button = document.getElementById("addButton");
const notificationContainer = document.getElementById("notificationContainer");
button.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const newNotification = document.createElement("div");
  newNotification.innerText = "new notification";
  newNotification.classList.add("notification");
  notificationContainer.appendChild(newNotification);
  setTimeout(() => {
    newNotification.remove();
  }, 3000);
}
