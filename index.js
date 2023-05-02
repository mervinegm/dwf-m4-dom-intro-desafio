const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const parentEl = document.querySelector(".lista");
  console.log(parentEl);

  const arrayEl = document.querySelectorAll("li");

  for (let index = 0; index < arrayEl.length; index++) {
    parentEl.removeChild(arrayEl[index]);
  }

  for (let index = 0; index < cosasQueAprendimos.length; index++) {
    const newEL = document.createElement("li");
    parentEl.appendChild(newEL);
    newEL.textContent = cosasQueAprendimos[index].tema;
    if (cosasQueAprendimos[index].class != "") {
      newEL.classList.add(cosasQueAprendimos[index].class);
    }
  }
}

main();
