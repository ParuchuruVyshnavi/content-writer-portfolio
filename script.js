

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});




document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});



const filterButtons = document.querySelectorAll(".filter-btn");
const articleCards = document.querySelectorAll(".article-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

       
        button.classList.add("active");

        const filter = button.dataset.filter;

        articleCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});



const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            contactForm.reset();

            successMessage.style.display = "block";

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);

        } else {

            alert("Something went wrong. Please try again.");

        }

    } catch (error) {

        alert("Unable to send the message. Please try again.");

    }

});