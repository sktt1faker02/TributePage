const sharingan = document.querySelector(".box");
const holder = document.querySelector(".holder");

setTimeout(function () {
  sharingan.classList.add("hidden");
}, 5000);

holder.addEventListener("click", () => {
  const sound = new Howl({
    src: ["audio.mp3"],
  });

  sound.play();
});
