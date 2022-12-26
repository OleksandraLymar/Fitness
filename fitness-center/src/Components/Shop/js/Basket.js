import React from 'react';
import "../filieForMainShop.js"
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h1>Cart Items</h1>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>

            <hr />
              <div className="block_delivery">
                  <div className={""}>
                      <strong>Delivery address</strong>
                  </div>
                  <div>
                      <input type={"text"}/>
                  </div>
              </div>
              <div className="block_delivery">
                  <div className={""}>
                      <strong>Your name</strong>
                  </div>
                  <div>
                      <input type={"text"}/>
                  </div>
              </div>
              <div className="block_delivery">
                  <div className={""}>
                      <strong>Your phone</strong>
                  </div>
                  <div>
                      <input type={"phone"}/>
                  </div>
              </div>
            <div className="row">
              <button onClick={this.send.bind(this)} disabled={!this.state.isFormValid} className={this.state.btnSubmitClass}>
                Buy it!
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
