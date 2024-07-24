// Sitemap functionality
document.addEventListener("DOMContentLoaded", function() {
    const nodes = document.querySelectorAll(".node-link");

    // Add focus event to change node color
    nodes.forEach(node => {
        node.addEventListener("focus", function() {
            this.querySelector(".node").style.fill = "#0056b3"; // Change color on focus
        });

        // Add blur event to revert node color
        node.addEventListener("blur", function() {
            this.querySelector(".node").style.fill = "#007bff"; // Revert color on blur
        });
    });
});
