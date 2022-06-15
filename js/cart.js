
let total = 0
let cart = []
let inC = document.getElementById("inC").value
let cartTotal = document.getElementById("cart-total")
let quantity = 1


if (localStorage.getItem('products')) {
    cart = [...JSON.parse(localStorage.getItem("products"))]
}

let btns = [...document.querySelectorAll(".add-to-cart")]
btns.forEach(btn => {
    const id = btn.dataset.id
    const price = btn.dataset.price
    const image = btn.dataset.image
    const name = btn.dataset.name
    const marketId = btn.dataset.market
    const inCart = cart.find(item => item.id == id && marketId == item.marketId);
    if (inCart) {
        btn.innerHTML = inC;
        btn.disabled = true
    }
    btn.addEventListener("click", (e) => {

        e.preventDefault();
        e.target.innerText = inC
        e.target.disabled = true;
        if (cart.find(item => item.id == id && marketId == item.marketId)) {
            return;
        }
        cart.push({ quantity: quantity, id: id, name: name, price: price, image: image, marketId: marketId })
        localStorage.setItem('products', JSON.stringify(cart))
        cartTotal.innerText = cart.length
        try {
            document.getElementById("qty").value = quantity
        } catch { }

    })
});


function getCart() {
    try {
        let container = document.getElementById("cartContainer")
        for (let i = 0; i <= cart.length; i++) {
            let totalPerProduct = Number(cart[i].price) * Number(cart[i].quantity)
            container.insertAdjacentHTML("beforeend", `
            <tr>
            <td class="cart_product"><a href="/product-${cart[i].id}">
            <object 
              data="http://aaaserver-001-site31.ftempurl.com${cart[i].image}">
              <img  src="images/placeholder.png ">
            </object> </a>
            </td>
            <td class="cart_description">
              <p class="product-name"><ahref="/product-${cart[i].id}" >${cart[i].name} </a></p>

            </td>
            <td class="price"><span>${cart[i].price}</span></td>
            <td class="qty">
                <div class="numbers-row">
                              <div
                                onClick="removeOne(${cart[i].id})"
                                class="dec qtybutton"><i class="fa fa-minus">&nbsp;</i></div>
                              <input type="text" class="qty" id=${cart[i].id} title="Qty" value="${cart[i].quantity}" maxlength="12"  name="qty">
                              <div
                                onClick="addOne(${cart[i].id})"
                                class="inc qtybutton" ><i class="fa fa-plus">&nbsp;</i></div>
                            </div>
            </td>
            <td class="price"><span>${totalPerProduct}</span></td>
            <td class="action"><button class="btn btn-remove" id=${i}><i id=${i} class="icon-close"></i></button></td>
          </tr>
          <tr>
            `

            )
            total += totalPerProduct
            document.getElementById("total").innerText = total
        };

    } catch (error) {

    }
}

getCart()

try {
    removeBtns = [...document.querySelectorAll(".btn-remove")]
    removeBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            let id = e.target.id
            cart.splice(id, 1)
            localStorage.setItem('products', JSON.stringify(cart))
            window.location.reload()
        })

    });

} catch (error) {

}

try {
    document.getElementById("checkout-btn").addEventListener("click", function (e) {
        if (total <= 0) {
            alert("add products with prices")
        } else
            e.target.href = "/checkout"
    }
    )

} catch (error) {

}


cartTotal.innerText = cart.length

function addOne(id) {
    quantity = document.getElementById(id).value
    document.getElementById(id).value = +quantity + 1
    for (let item of cart) {
        if (item.id == id || marketId == item.marketId) {
            item.quantity = +quantity + 1
            localStorage.setItem('products', JSON.stringify(cart))
            window.location.reload()
        }
    }
}
function removeOne(id) {
    quantity = document.getElementById(id).value
    if (quantity <= 1) {
        return null
    }
    document.getElementById(id).value = +quantity - 1
    for (let item of cart) {
        if (item.id == id && marketId == item.marketId) {
            item.quantity = +quantity - 1
            localStorage.setItem('products', JSON.stringify(cart))
            window.location.reload()

        }
    }
}




//