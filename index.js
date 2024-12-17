// toggle functionality
var sidemenu = document.getElementById("sidemenu");

function closemenu() {
  sidemenu.style.right = "-200px";
}

function openmenu() {
  sidemenu.style.right = "0";
}

// email validation
document.getElementById("email").addEventListener("keydown", function (event) {
  if (event.key === " " || event.key === "Tab") {
    event.preventDefault();
  }
});

// form Submission functionality
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const modalOverlay = document.getElementById("modalOverlay");

  document.getElementById("error-messages-name").innerHTML = "";
  document.getElementById("error-messages-email").innerHTML = "";
  document.getElementById("error-messages-message").innerHTML = "";

  let isValid = true;

  if (name === "") {
    document.getElementById("error-messages-name").innerHTML =
      "*Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("error-messages-email").innerHTML =
      "*Email is required.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("error-messages-message").innerHTML =
      "*Please leave a message";
    isValid = false;
  }

  // pass all the validation 
  if (isValid) {
    // for pop-up functionality
    modalOverlay.style.display = "block";

    yesButton.addEventListener("click", function () {
      let formData = JSON.parse(localStorage.getItem("formData")) || [];
      const newSubmission = { name, email, message };
      formData.push(newSubmission);
      localStorage.setItem("formData", JSON.stringify(formData));

      modalOverlay.style.display = "none";

      setTimeout(() => {
        form.reset();
      }, 1000);
    });

    noButton.addEventListener("click", function () {
      modalOverlay.style.display = "none";
    });
  }
});
