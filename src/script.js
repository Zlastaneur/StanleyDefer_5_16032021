import "./product.js";
import "./cart.js";
import "./home.js";
import "./confirmation.js";
import { purchaseProduct } from "./function.js";

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Header animation on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Event Listener on add to cart button
    const observer = new MutationObserver(function () {
        const addProducts = document.querySelectorAll(".addCart");

        for (let i = 0; i < addProducts.length; i++) {
            addProducts[i].addEventListener("click", purchaseProduct);
        }
    });

    // Start observing
    observer.observe(document.body, {
        //document.body is node target to observe
        childList: true, //This is a must have for the observer with subtree
        subtree: true, //Set to true if changes must also be observed in descendants.
    });
});
