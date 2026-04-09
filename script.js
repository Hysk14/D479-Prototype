document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-popup");

    // Target ALL forms with the same class
    const forms = document.querySelectorAll(".popup-form");

    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            popup.style.display = "flex";

            // Reset form (clears ALL inputs cleanly)
            form.reset();
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});