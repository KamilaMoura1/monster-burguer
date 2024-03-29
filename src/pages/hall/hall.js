import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import ItemMenu from "../../components/ItemMenu/ItemMenu";
import CartItem from "../../components/CartItem/CartItem";
import {postOrder} from "../../services/api";
import logoMonsterPeq from "../../img/logoMonsterPeq.png";
import notification from "../../img/notification.png";
import orderIcon from "../../img/orderIcon.png";
import logout from "../../img/logout.png";
import "../hall/hall.css";

export function Hall() {
  const [menu, setMenu] = useState([]);
  const [tab, setTab] = useState("all-day");
  const [order, setOrder] = useState([]);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    fetch("https://lab-api-bq.herokuapp.com/products", {
      headers: {
        accept: "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setMenu(json);
      });
    },[token]);

  const selectProducts = menu.filter((produtos) => produtos.type === tab);
  
  useEffect(()=>{
  },[client, table, order])

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderClient = {
      "client": client,
      "table": table,
      "products": order.map((item) => ({
        id: Number(item.id),
        qtd: Number(item.qtd),
      })),
    };
    postOrder(orderClient)
    setClient([])
    setTable([])
    setOrder([])
  }
  
  const addItem = (e, item) => {
    e.preventDefault();
    const elem = order.find((response) => response.id === item.id);
    if (elem) {
      elem.qtd += 1;
      setOrder([...order]);
    } else {
      item.qtd = 1;
      setOrder([...order, item]);
    }
  };

 const removeItem = (e, item, index) => {
    e.preventDefault();
    const elem = order.find((response) => response.id === item.id);
    if (elem.qtd !== 0) {
      elem.qtd -= 1;
      setOrder([...order]);
    }
    if (elem.qtd === 0) {
      const listOrder = order;
      listOrder.splice(index, 1);
      setOrder([...listOrder]);
    }
  };

  const calculateTotal = (items) => { 
    const totalPrice = items.reduce((accumulator, array) => { 
      const { qtd, price } = array; 
      accumulator = Number(qtd * price + accumulator) 
      return accumulator 
    }, 0) 
    return totalPrice; 
  } 

  const total = calculateTotal(order)

  const history = useHistory()
  const handleSignOut = e => {
    e.preventDefault()
    history.push('/login')
    localStorage.clear()
  }

  const hallOrder = () => { 
    history.push('/ready-order') 
  } 

  const hallIcon = () => { 
    history.push('/hall')
  }  

    return (
      <div>
        <h1 className="title-hall">Monster Burguer</h1>
        <section className="header-hall">
          <button
            className="button-geral"
            style={{ backgroundColor: "var(--azul)" }}
            onClick={(e) => {
              e.preventDefault();
              setTab("all-day");
            }}
          >
            Geral
          </button>
          <button
            style={{ backgroundColor: "var(--azul)" }}
            onClick={(e) => {
              e.preventDefault();
              setTab("breakfast");
            }}
          >
            Café da Manhã
          </button>
          <input
            placeholder="Cliente"
            className="input-client"
            value={client}
            onChange={(e) => {
              setClient(e.target.value);
            }}
          ></input>
          <input
            placeholder="Mesa"
            className="input-table"
            value={table}
            onChange={(e) => {
              setTable(e.target.value);
            }}
          ></input>
        </section>
        <section className="menu-order">
          <section className="menu-side">
            <button className="logo-small"> <img className="logo-small" src={logoMonsterPeq} /></button>
            <button className="logo-notification" onClick={hallOrder}> <img className="logo-notification" src={notification}/></button>
            <button className="logo-order" onClick={hallIcon}> <img className="logo-order" src={orderIcon} /></button>
            <button className="logo-logout"> <img className="logo-logout" src={logout} onClick={handleSignOut} /></button>
          </section>
          <section className="container-menu">
            {selectProducts &&
              selectProducts.map((item, index) => (
                <div key={index}>
                  <ItemMenu
                    imageProduct={item.image}
                    nameProduct={item.name}
                    flavorProduct={item.flavor}
                    idProduct={item.id}
                    complementProduct={item.complement}
                    priceProduct={item.price}
                    divOnClick={(e) => addItem(e, item)}
                  />
                </div>
              ))}
          </section>
          <section className="container-order">
            <h1>Pedidos</h1>
            {order.map((item, index) => (
              <div key={index}>
                <CartItem
                  nameProduct={item.name}
                  flavorProduct={item.flavor}
                  idProduct={item.id}
                  complementProduct={item.complement}
                  priceProduct={item.price}
                  qtdProduct={item.qtd}
                  divOnClick={(e) => removeItem(e, item, index)}
                />
              </div>
            ))}
            <h1>Total: R$ {total},00</h1>
            <button
              className="button-geral"
              onClick={(e) => handleSubmit(e)}
            >Enviar para a cozinha
            </button>
          </section>
        </section>
      </div>
    );
  };

export default Hall;
