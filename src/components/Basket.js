import {useContext} from 'react'
import {ThemeContext} from '../App'

export default function Basket() {
    const [, cartItems, onAdd, onRemove] = useContext(ThemeContext)
    const itemsPrice = cartItems.reduce((a, c) => a + c.count * c.price, 0)
    const totalPrice = itemsPrice
    console.log(cartItems)
  return (
    <div className="card">
        <div className="card-top">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="card-top-logo"
          />
        </div>
        <div className="card-title">
          Your cart
          
            <span className="card-title-amount">${totalPrice.toFixed(2)}</span>
          
        </div>
        <div className="card-body">
            {
            cartItems.length === 0 
            && 
            <div className="cart-empty">
                <p className="cart-empty-text">Your cart is empty.</p>
            </div>
            }
            
          
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-left" id= "test">
                <div
                  className="cart-item-image"
                  style={{
                    backgroundColor: item.color
                  }}
                >
                  <div className="cart-item-image-block">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                </div>
              </div>
              <div className="cart-item-right">
                <div className="cart-item-name">
                  {item.name}
                </div>
                <div className="cart-item-price">${item.price}</div>
                <div className="cart-item-actions">
                  <div className="cart-item-count">
                    <div className="cart-item-count-button minus"
                      onClick={() => onRemove(item)}>
                        -
                    </div>
                    <div className="cart-item-count-number">{item.count}</div>
                    <div className="cart-item-count-button plus"
                      onClick={() => onAdd(item)}>
                        +
                    </div>
                  </div>
                  <div className="cart-item-remove"
                    onClick={() => onRemove(item)}
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
                      className="cart-item-remove-icon"
                      alt="remove-icon"
                    />
                    
                  </div>
                </div>
              </div>
              </div>
                
                
            ))}
              
          </div>
        </div>
    </div>
  )
}
