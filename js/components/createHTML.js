export function createHTML(argument) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";

    argument.forEach(function (product) {
        productContainer.innerHTML += `
            <div class="product">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            </div>
        `;
    });
}