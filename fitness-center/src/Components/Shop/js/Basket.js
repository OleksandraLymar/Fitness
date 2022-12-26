"use strict"
import React from 'react';
import emailjs from '@emailjs/browser';
import {useRef} from "react";

export default function Basket(props) {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_067pdhs', 'template_8xlcjin', form.current, 'x9febaXk0Sao-CjTn')
            .then((result) => {
                console.log(result.text);
                document.getElementById("form").reset();
                alert("Application sent!");
            }, (error) => {
                console.log(error.text);
            });
    };

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 200 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
        <form action="#" ref={form} id={"form"} onSubmit={sendEmail}>
          <h1>Cart Items</h1>
          <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                  <input className={"price"} value={item.name} name={"item_name"}/>
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
                    <input className={"price"} value={item.qty} name={"item_qty"}/>
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <hr/>
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
                      <input className={"price"} value={shippingPrice} name={"shippingPrice"}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                      <strong >${totalPrice.toFixed(2)}</strong>
                      <input className={"price"} value={totalPrice} name={"totalPrice"}/>
                  </div>
                </div>
                <hr />
                  <div className="block_delivery">
                      <div className={""}>
                          <strong>Delivery address</strong>
                      </div>
                      <div>
                          <input type="text" className={"_req form_input form-control"} name="user_address" placeholder="Address delivery |"/>
                      </div>
                  </div>
                  <div className="block_delivery">
                      <div className={""}>
                          <strong>Your name</strong>
                      </div>
                      <div>
                          <input name="user_name" className="form-control" placeholder="Your name |"/>
                      </div>
                  </div>
                  <div className="block_delivery">
                      <div>
                          <strong>Your phone</strong>
                      </div>
                      <div>
                          <input name="user_phone" className="form-control" id="phone" type="tel" placeholder="Phone Number |"/>
                      </div>
                  </div>
                <div className="row">
                  <button type={"submit"}>
                    Buy it!
                  </button>

                </div>

              </>
            )}
          </div>
        </form>
    </aside>
  );
}
