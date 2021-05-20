const addCommodity = (imageSrc, title, price) => {
  let cart = localStorage.getItem('cart')
    btnMsg = "Add to cart"
    btnColor = "btn-primary"
    btnAction = "addToCart(event)"
    if (cart) {
      cart = cart.split(',')
      cart = new Set(cart)
      if (cart.has(title+"$"+price)) {
        console.log(title)
        btnMsg = "Remove from cart"
        btnColor = "btn-danger"
        btnAction = "removeFromCart(event)"
      }
    }
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 18rem; min-height: 26rem; height: 26rem;">
    <img class="contain card-img-top margin-xsm-top" src="${imageSrc}" alt="${title}">
    <div class="card-body">
      <h6 class="card-title">${title}</h6>      
      <p class="card-text"><b>at $ ${price}</b></p>
      <button id="${title+"$"+price}" onclick="${btnAction}" class="bottom position-absolute btn ${btnColor}">${btnMsg}</a>
    </div>
    </div>
    `;
    document.getElementById('commo-main').appendChild(div);
}

const displayCommodities = async () => {
  //remove the loading message
  let el = document.getElementById('commo-loading-msg')
  el.parentNode.removeChild(el)
  commos.forEach((elm) => {
    addCommodity(elm.image, elm.title.replace(",",""), elm.price)
  });
}

const addToCart = (e) => {
  el = document.getElementById(e.target.id)
  el.textContent = "Remove from cart";
  el.className = "bottom position-absolute btn btn-danger";
  el.setAttribute("onclick","removeFromCart(event)")
  let cart = localStorage.getItem('cart')
  if (cart) {
    cart = cart.split(",")
    cart = [...new Set(cart)]
    cart.push(e.target.id)
  } else {
    cart = [e.target.id]
  }
  cart = cart.toString()
  localStorage.setItem('cart', cart)

}

const removeFromCart = (e) => {
  el = document.getElementById(e.target.id)
  el.textContent = "Add to cart";
  el.className = "bottom position-absolute btn btn-primary";
  el.setAttribute("onclick","addToCart(event)")
  let cart = localStorage.getItem('cart')
  cart = cart.split(",")
  cart = cart.filter(el => el != e.target.id)
  console.log(cart.length)
  cart.toString()
  console.log(cart)
  localStorage.setItem('cart', cart)
}

displayCommodities()


