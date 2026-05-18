const battery = document.body.dataset.battery || "22%";
const signal = document.body.dataset.signal || "Weak";
const time = document.body.dataset.time || "2:13 AM";
const hope = document.body.dataset.hope || "62%";
const awareness = document.body.dataset.awareness || "Medium";

const message =
  document.body.dataset.message ||
  "📱 Friend: Text me when you're home.";


// STATUS BAR
const statusBar = document.createElement("div");

statusBar.textContent =
  `Battery: ${battery} | Signal: ${signal} | Time: ${time} | Hope: ${hope} | Awareness: ${awareness}`;

statusBar.style.backgroundColor = "#111827";
statusBar.style.color = "#FFD166";
statusBar.style.padding = "10px";
statusBar.style.textAlign = "center";
statusBar.style.fontSize = "16px";
statusBar.style.borderBottom = "2px solid #FF0078";

document.body.prepend(statusBar);


// FADE IN MAIN CONTENT
const mainContent = document.querySelector("div");

mainContent.style.opacity = "0";
mainContent.style.transition = "opacity 1.5s ease";

setTimeout(() => {
  mainContent.style.opacity = "1";
}, 300);


// PHONE NOTIFICATION POPUP
const notification = document.createElement("div");

notification.textContent = message;

notification.style.position = "fixed";
notification.style.left = "30px";
notification.style.top = "110px";
notification.style.width = "240px";
notification.style.backgroundColor = "#1F2937";
notification.style.color = "white";
notification.style.padding = "12px";
notification.style.border = "2px solid #FF0078";
notification.style.borderRadius = "10px";
notification.style.fontSize = "14px";
notification.style.boxShadow = "0 0 15px #FF0078";
notification.style.display = "none";
notification.style.zIndex = "999";

document.body.appendChild(notification);


// SHOW NOTIFICATION
setTimeout(() => {
  notification.style.display = "block";
}, 2000);


// HIDE NOTIFICATION
setTimeout(() => {
  notification.style.display = "none";
}, 6000);


// LIGHTNING FLASH OVERLAY
const lightning = document.createElement("div");

lightning.style.position = "fixed";
lightning.style.top = "0";
lightning.style.left = "0";
lightning.style.width = "100%";
lightning.style.height = "100%";
lightning.style.backgroundColor = "white";
lightning.style.opacity = "0";
lightning.style.pointerEvents = "none";
lightning.style.zIndex = "9999";
lightning.style.transition = "opacity 0.08s ease";

document.body.appendChild(lightning);


// CHOICE EFFECTS
const links = document.querySelectorAll("a");

links.forEach(link => {

  link.addEventListener("mouseover", () => {
    link.style.fontSize = "20px";
    link.style.transition = "0.3s";
  });

  link.addEventListener("mouseout", () => {
    link.style.fontSize = "18px";
  });

  link.addEventListener("click", event => {
    event.preventDefault();

    const nextPage = link.href;

    const isDangerous = link.dataset.danger === "true";
    const isSafe = link.dataset.safe === "true";


    // DANGEROUS CHOICE: thunder + lightning
    if (isDangerous) {

      const thunder = new Audio("sounds/thunder2.wav");

      lightning.style.opacity = "0.9";

      setTimeout(() => {
        lightning.style.opacity = "0";
      }, 120);

      setTimeout(() => {
        lightning.style.opacity = "0.6";
      }, 350);

      setTimeout(() => {
        lightning.style.opacity = "0";
      }, 500);

      thunder.play();

      setTimeout(() => {
        window.location.href = nextPage;
      }, 4000);

    }


    // SAFE CHOICE: bell sound
    else if (isSafe) {

      const bell = new Audio("sounds/bell.mp3");

      bell.play();

      setTimeout(() => {
        window.location.href = nextPage;
      }, 1200);

    }


    // NORMAL CHOICE: no sound
    else {

      window.location.href = nextPage;

    }

  });

});