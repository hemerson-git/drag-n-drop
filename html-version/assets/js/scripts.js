document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const droppables = document.querySelectorAll(".droppable");

  cards.forEach((card) => {
    card.addEventListener("dragstart", dragstart);

    card.addEventListener("drag", drag);

    card.addEventListener("dragend", dragend);
  });

  droppables.forEach((droppable) => {
    droppable.addEventListener("dragenter", dragenter);
    droppable.addEventListener("dragover", dragover);
    droppable.addEventListener("dragleave", dragleave);
    droppable.addEventListener("drop", drop);
  });

  function dragstart(event) {
    droppables.forEach((droppable) => {
      droppable.classList.add("highlight");
    });

    event.target.classList.add("dragging");
  }

  function drag() {}

  function dragend(event) {
    droppables.forEach((droppable) => {
      droppable.classList.remove("highlight");
    });

    event.target.classList.remove("dragging");
  }

  function dragenter(event) {
    event.stopPropagation();

    if (event?.target?.classList?.contains("droppable")) {
      event.target.classList.add("selected");
    }
  }

  function dragleave(event) {
    event.stopPropagation();

    if (event?.target?.classList?.contains("droppable")) {
      event.target.classList.remove("selected");
    }
  }

  function dragover(event) {
    const card = document.querySelector(".dragging");

    if (event.target.classList?.contains("droppable")) {
      event.target.appendChild(card);
    }
  }

  function drop(event) {
    console.log("dropped");
  }
});
