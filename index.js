const showModalBtn = document.getElementById("showModalBtn");
const okBtn = document.getElementById("modal-ok");
const cancelModal = document.getElementById("modal-cancel");
const modalWrapper = document.getElementById("modalBg");
const modalSelection = document.getElementById("modalDecision");
const modalMessage = document.getElementById("modalMsg");

// TODO: Define the helper function
function showModal(message) {
  console.log("modal btn clickkkked");
  //? remove inactive class and show modal
  modalWrapper.classList.remove("modalBg-inactive");
  modalMessage.innerHTML = `${message}`;
}
function hideModal(e) {
  //? add inactive class to modal wrapper
  modalWrapper.classList.add("modalBg-inactive");
  console.log(e.target.textContent);
  modalSelection.innerHTML = ` You clicked ${e.target.textContent}`;
}

function modalOk(e) {
  //? add inactive class to modal wrapper
  modalWrapper.classList.add("modalBg-inactive");
  console.log(e.target.textContent);
  modalSelection.innerHTML = ` You clicked ${e.target.textContent}`;
}

// TODO : showModal, hideModal and display btn content
showModalBtn.addEventListener("click", () => showModal("Are you sure?"));
okBtn.addEventListener("click", modalOk);
cancelModal.addEventListener("click", hideModal);
