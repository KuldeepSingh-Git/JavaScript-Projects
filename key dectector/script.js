/* This code provides when a key is pressed down, it tell the key name and its code. */
const main = document.querySelector(".main");
const container = document.querySelector(".info");

document.addEventListener("keydown", (e) => {
    let keyName = e.key === 32 ? "Space" : e.key;
    // main.querySelector(".key-code").innerText = e.key;
    main.querySelector(".key-name").innerText = `Key Name: ${keyName.toUpperCase()}`;
    main.querySelector(".code").innerText = `Code: ${e.which}`;  
    container.classList.add("no-active");
  });