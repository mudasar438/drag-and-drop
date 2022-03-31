const imgBox = document.querySelector(".imgBox");
const whiteBoxs = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0);
  console.log("drag has been start");
});
imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
  console.log("End Drag");
});
for (element of whiteBoxs) {
  {
    element.addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("drag over");
    });

    element.addEventListener("dragenter", () => {
      console.log("drag enter");
    });

    element.addEventListener("dragleave", () => {
      console.log("drag leavr");
    });

    element.addEventListener("drop", (e) => {
      e.preventDefault();
      e.target.append(imgBox);
      console.log("drop");
    });
  }
}
