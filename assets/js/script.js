console.log("test world");

const btns = document.querySelectorAll(".open-modal");

prep = [...btns].map((b) => ({
  btn: b,
  modal: b.parentNode.querySelector("dialog"),
  close: b.parentNode.querySelector(".close-modal"),
}));

prep.forEach((btnObj) => {
  btnObj.btn.onclick = (e) => {
    e.preventDefault();
    btnObj.modal.showModal();
  };

  btnObj.close.onclick = (e) => {
    e.preventDefault();
    btnObj.modal.close();
  };
});
