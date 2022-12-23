import {Link} from "react-router-dom";
// import "./store.js"
// import "./css/styles.css";
export default function ShopFitness() {

        ready()
    
    function ready() {
        let removeCartItemButtons = document.getElementsByClassName('btn-danger')
        for (let i = 0; i < removeCartItemButtons.length; i++) {
            let button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }

        let quantityInputs = document.getElementsByClassName('cart-quantity-input')
        for (let i = 0; i < quantityInputs.length; i++) {
            let input = quantityInputs[i]
            input.addEventListener('change', quantityChanged)
        }

        let addToCartButtons = document.getElementsByClassName('shop-item-button')
        for (let i = 0; i < addToCartButtons.length; i++) {
            let button = addToCartButtons[i]
            button.addEventListener('click', addToCartClicked)
        }

        document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    }

    function purchaseClicked() {
        alert('Thank you for your purchase')
        let cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }

    function removeCartItem(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }

    function quantityChanged(event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }

    function addToCartClicked(event) {
        let button = event.target
        let shopItem = button.parentElement.parentElement
        let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        addItemToCart(title, price, imageSrc)
        updateCartTotal()
    }

    function addItemToCart(title, price, imageSrc) {
        let cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        let cartItems = document.getElementsByClassName('cart-items')[0]
        let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (let i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('This item is already added to the cart')
                return
            }
        }
        let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100"/>
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }

    function updateCartTotal() {
        let cartItemContainer = document.getElementsByClassName('cart-items')[0]
        let cartRows = cartItemContainer.getElementsByClassName('cart-row')
        let total = 0
        for (let i = 0; i < cartRows.length; i++) {
            let cartRow = cartRows[i]
            let priceElement = cartRow.getElementsByClassName('cart-price')[0]
            let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            let price = parseFloat(priceElement.innerText.replace('$', ''))
            let quantity = quantityElement.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }
    return (
        <section className="about-section text-center" id="shop">
            <body>
            <div className="page__title align-items-center main_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page__title-content text-center">
                                <h3 className="breadcrumb-title breadcrumb-title-sd mb-15">Your Cart</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container content-section">
                <h2 className="section-header">MERCH</h2>
                <div className="shop-items">
                    <div className="shop-item">
                        <span className="shop-item-title">Coffee Cup</span>
                        <img className="shop-item-image" src="./Images/Album%202.png"alt={"qwerty"}/>
                        <div className="shop-item-details">
                            <span className="shop-item-price">$6.99</span>
                            <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container content-section">
                <h2 className="section-header">CART</h2>
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">ITEM</span>
                    <span className="cart-price cart-header cart-column">PRICE</span>
                    <span className="cart-quantity cart-header cart-column">QUANTITY</span>
                </div>
                <div className="cart-items">
                </div>
                <div className="cart-total">
                    <strong className="cart-total-title">Total</strong>
                    <span className="cart-total-price">$0</span>
                </div>
                <button className="btn btn-primary btn-purchase" type="button">PURCHASE</button>
            </div>
            </body>
        </section>
    )
}
