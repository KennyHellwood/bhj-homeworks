const productQuantityControl = Array.from(document.querySelectorAll(".product__quantity-control"));
const product = Array.from(document.querySelectorAll(".product"));
const cartProducts = document.querySelector(".cart__products");

for (let i = 0; i < productQuantityControl.length; i++) {
    productQuantityControl[i].addEventListener("click", () => {
        let count = 0;
        if ((productQuantityControl[i].textContent).trim() === "-") {
            count = parseInt((productQuantityControl[i].nextElementSibling.textContent).trim());
            if (count > 1) {
                productQuantityControl[i].nextElementSibling.textContent = --count;
            }
        } else if ((productQuantityControl[i].textContent).trim() === "+") {
            count = parseInt((productQuantityControl[i].previousElementSibling.textContent).trim());
            productQuantityControl[i].previousElementSibling.textContent = ++count;
        }
    });
}

for (let i = 0; i < product.length; i++) {
    product[i].addEventListener("click", (e) => {
        if (e.target.classList.contains("product__add")) {
            addProductToCart(product[i].dataset.id, product[i].children[1].currentSrc, parseInt(product[i].children[2].children[0].children[1].children[1].innerText));
        }
    });
}

function addProductToCart(id, srcImg, count) {
    for (let i = 0; i < cartProducts.children.length; i++) {
        if (cartProducts.children[i].dataset.id === id) {
            let currentCount = parseInt(cartProducts.children[i].children[1].textContent);
            cartProducts.children[i].children[1].textContent = currentCount+count;
            return true;
        }
    }
    cartProducts.insertAdjacentHTML("beforeEnd", `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${srcImg}">
            <div class="cart__product-count">${count}</div>
        </div>
    `);
}
