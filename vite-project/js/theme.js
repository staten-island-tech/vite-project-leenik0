export function inter() {
  document.querySelector("#btn").addEventListener("click", function () {
    if (document.body.classList.contains("bright")) {
      document.body.classList.add("muted");
      document.body.classList.remove("bright");
    } else {
      document.body.classList.add("bright");
      document.body.classList.remove("muted");
    }
  });
}
