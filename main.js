const btn = document.querySelector("button.menu-button");
const menu = document.querySelector(".mobile-menu");
const listOfLinks = [...document.links];
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
      listOfLinks.forEach((element) => {
        element.addEventListener("click", () => {
          menu.classList.toggle("hidden");
        });
      });






