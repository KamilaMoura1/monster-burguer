import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import logoMonsterPeq from '../../img/logoMonsterPeq.png';
import notification from '../../img/notification.png';
import orderIcon from '../../img/orderIcon.png';
import logout from '../../img/logout.png';
import '../kitchen/kitchen.css'

export function ReadyOrder() {
  const token = localStorage.getItem('token')
  const [orderStatus, setOrderStatus] = useState([])
  const url = 'https://lab-api-bq.herokuapp.com/orders/'

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(orders => {
        const status = orders.filter(itens => itens.status.includes('ready'))
        setOrderStatus(status)
      })
  }, [token])

  useEffect(() => {
  }, [orderStatus])


  const handleStatus = (id, newStatus, index) => {
    const status = { status: newStatus }
    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify(status)
    })
      .then(response => {
        return response.json()
      })
      .then((result) => {
        const listOrder = orderStatus.filter((order)=> order.id !== result.id)    
        setOrderStatus(listOrder)
      })
  }

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
    <>
      <div className="hall">
        <section className="menu-title">
          <h1 className="menu-kitchen">Pedidos para entregar</h1>
          </section>
          <section className="container-kitchen">
          <section className="menu-side">
            <button className="logo-small">
              <img className="logo-small" src={logoMonsterPeq} />
            </button>
            <button className="logo-notification" onClick={hallOrder}>
              <img className="logo-notification" src={notification} />
            </button>
            <button className="logo-order" onClick={hallIcon}>
              <img className="logo-order" src={orderIcon} />
            </button>
            <button className="logo-logout" onClick={handleSignOut} >
              <img className="logo-logout" src={logout} />
            </button>
          </section>
          <section className="container-orders">
            {orderStatus.map((order, index) => {
              return (
                <section className="box-order" key={order.id}>
                  <div className="resume-order">
                    <h1> {order.status.replace('ready', 'Para servir')} </h1>
                    <p>ID: {order.id} </p>
                    <p>Cliente: {order.client_name} </p>
                    <p>Mesa: {order.table} </p>
                    <time>
                      {`${new Date(order.createdAt).toLocaleDateString(
                        'pt-br'
                      )} - ${new Date(order.createdAt).toLocaleTimeString(
                        'pt-br',
                        {
                          hour: '2-digit',
                          minute: '2-digit'
                        }
                      )}h`}
                    </time>
                    <article className="order">
                      {order.Products.map((item, index) => (
                        <div key={index}>
                          <p>                          
                            {item.qtd} {item.name}
                          </p>
                          <p>{item.flavor}</p>
                          <p>{item.complement}</p>
                        </div>
                      ))}
                    </article> 
                     <button
                        className="button"
                        style={{ backgroundColor: 'var(--azul)' }}
                        onClick={() => handleStatus(order.id, 'delivered', index)}
                      >
                        Entregar
                      </button>               
                  </div>
                </section>
              )
            })}
          </section>
        </section>
      </div>
    </>
  )
}

export default ReadyOrder
