import { displayMessage } from "./displayMessage.js";
import { emptyFilter } from "../constants/messages.js";

export function createHTML(products) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage("", emptyFilter, ".product-container");
    }

    products.forEach(function (product) {
        productContainer.innerHTML += `
            <div class="product">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            </div>
        `;
    });
}