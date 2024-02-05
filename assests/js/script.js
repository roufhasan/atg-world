const signInModal = document.getElementById("sign-in-modal");
const signUpModal = document.getElementById("sign-up-modal");

function openSignInModal() {
  signInModal.classList.add("open-sign-in-modal");
  closeSignUpModal();
}

function closeSignInModal() {
  signInModal.classList.remove("open-sign-in-modal");
}

function openSignUpModal() {
  signUpModal.classList.add("open-sign-up-modal");
  closeSignInModal();
}

function closeSignUpModal() {
  signUpModal.classList.remove("open-sign-up-modal");
}
