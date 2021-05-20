const displayCart = () => {
    let tBody = document.getElementById("cart").getElementsByTagName('tbody')[0]
    tBody.innerHTML = ""
    let cart = window.localStorage.getItem('cart')
    if (cart) {
        cart = cart.split(",")
        cart.map((e, index) => {
            var row = tBody.insertRow(0)
            var cell1 = row.insertCell(0)
            var cell2 = row.insertCell(1)
            var cell3 = row.insertCell(2)
            var cell4 = row.insertCell(3)
            cell1.innerHTML = index
            cell2.innerHTML = e.split('$')[0]
            cell3.innerHTML = e.split('$')[1]
            })
    }
    
}

const clearCart = () => {
    window.localStorage.clear()
    displayCart()
}

displayCart();
