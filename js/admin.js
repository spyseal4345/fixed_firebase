const user = sessionStorage.getItem(
  "firebase:authUser:AIzaSyDtEilmw3Yk_0wYqa9Z-AaoaGWloD42Blo:[DEFAULT]"
);
const logOut = document.querySelector("header-dropdown-item:last-child");
console.log(user);
console.log(JSON.parse(user.email));
if (user === null) {
  window.local.href = "../html/signIn.html";
}
const dropdownEmail = document.querySelector(".dropdown-email");
dropdownEmail.textContent = user.email;

logOut.addEventListener("click", (e) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
        window.local.href = "../html/signIn.html";
    })
    .catch((error) => {
      // An error happened.
    });
});
