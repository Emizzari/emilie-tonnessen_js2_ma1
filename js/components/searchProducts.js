import { createHTML } from "./createHTML.js";

export function searchProducts(products){
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = products.filter(function (team) {
            if (team.full_name.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        createHTML(filteredProducts);
    };
}