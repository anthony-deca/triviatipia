function setFormMessage(formElement, type, message) {
                const messageElement = formElement.querySelector(".form-message");

                messageElement.textContent = message;
                messageElement.classList.remove("form-message-success", "form-message-error");
                messageElement.classList.add(`form-message-${type}`);
            }

            function setInputError(inputElement, message) {
                inputElement.classList.add("form-input-error");
                inputElement.parentElement.querySelector(".form-input-err-msg").textContent = message;
            }

            function clearInputError(inputElement) {
                inputElement.classList.remove("form-input-error");
                inputElement.parentElement.querySelector(".form-input-err-msg").textContent = "";
            }



            document.addEventListener("DOMContentLoaded", () => {
                const signinForm = document.getElementById("signin");
                const createAccountForm = document.getElementById("createAccount");

                document.getElementById("createAccountLink").addEventListener("click", e => {
                    e.preventDefault();
                    signinForm.classList.add("form-hidden");
                    createAccountForm.classList.remove("form-hidden");
                });

                document.getElementById("signInLink").addEventListener("click", e => {
                    e.preventDefault();
                    signinForm.classList.remove("form-hidden");
                    createAccountForm.classList.add("form-hidden");
                });

                signinForm.addEventListener("submit", e => {
                    e.preventDefault();

                    // Perform Fetch login

                    setFormMessage(signinForm, "error", "Invalid username/password");
                });

                document.querySelectorAll(".form-input").forEach(inputElement => {
                    inputElement.addEventListener("blur", e => {
                        if (e.target.id === "signUpPassword" && e.target.value.length > 0 && e.target.value.length < 6) {
                            setInputError(inputElement, "password must be at least 6 characters in length");
												}
                    });

                    inputElement.addEventListener("input", e => {
                        clearInputError(inputElement);
                    });
                });
            });
