import { price } from "./function.js";

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("productPage")) return;

    const detailProduct = document.querySelector("#productDetail");
    const API_URL = `https://orinoco-backend-p5.herokuapp.com/api/cameras/${getID()}`;

    // Search for the id in URL
    function getID() {
        return new URL(window.location.href).searchParams.get("id");
    }

    // Fetch the right product
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => injectHtml(data));

    // Add the html in the page
    function injectHtml(product) {
        detailProduct.innerHTML += ` 
                <div class="horizontalCard">
                    <img class="cardImage" src="${product.imageUrl}" alt="${product.name}" />
                    <div class="cardText">
                        <h3>${product.name}</h3>
                        <select name="cameraLens" class="cameraLens">
                            <option value="">${product.lenses[0]}</option>
                            <option value="">${product.lenses[1]}</option>
                        </select>
                        <p>${product.description}</p>
                        <p><strong>${price(product.price)}</strong></p>
                        <div class="action">
                            <button class="button addCart">
                                <p>Ajouter au panier</p> <img src="../public/img/shopping-cart.svg" />
                            </button>
                            <div class="quantity">
                                <label for="quantity">Quantité</label>
                                <input type="text" name="quantity">
                            </div>
                        </div>
                    </div>
                </div>`;
    }
});
