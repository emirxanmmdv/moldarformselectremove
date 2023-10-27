const modal = document.querySelector(".modal");
const btn = document.getElementById("btn");
const save = document.querySelector(".save");
const Film_adi = document.querySelector("#Film_adı");
const IMDB = document.querySelector("#IMDB");
const Kateqoriya = document.querySelector("#Kateqoriya");
const SeachTable = document.getElementById("SeachTable");
const img = document.querySelector("#filmimage");
const Rejissor = document.querySelector("#Rejissor");

btn.addEventListener("click", () => {
  console.log("men modal acanin klikiyem");
  modal.classList.toggle("activate");
});

save.addEventListener("click", (event) => {
  console.log("men save buttonun klikiyem");

  event.preventDefault();
  const tr = document.createElement("tr");
  const filmnametd = document.createElement("td");
  const imdbtd = document.createElement("td");
  const categorytd = document.createElement("td");
  const directortd = document.createElement("td");
  const imgtd = document.createElement("td");
  const trash = document.createElement("button");

  filmnametd.textContent = Film_adi.value;
  imdbtd.textContent = IMDB.value;
  categorytd.textContent = Kateqoriya.value;
  directortd.textContent = Rejissor.value;
  imgtd.textContent = filmimage.value;
  Film_adi.value = "";
  Kateqoriya.value = "";
  Rejissor.value = "";
  IMDB.value = "";
  filmimage.value = "";
  trash.textContent = "X";

  tr.append(imgtd, filmnametd, imdbtd, categorytd, directortd, trash);
  SeachTable.append(tr);

    trash.addEventListener("click", () => {
        tr.remove()
    });
});
