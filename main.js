import './style.css'

const app = document.querySelector('#app')

const products = [
  {
    id: 1,
    name: 'Dark Delight',
    description: 'Rich 85% dark chocolate with sea salt',
    price: 4.99,
    image: '🍫'
  },
  {
    id: 2,
    name: 'Milk Magic',
    description: 'Creamy milk chocolate with caramel swirls',
    price: 3.99,
    image: '🍫'
  },
  {
    id: 3,
    name: 'White Wonder',
    description: 'Smooth white chocolate with vanilla beans',
    price: 4.49,
    image: '🍫'
  },
  {
    id: 4,
    name: 'Hazelnut Heaven',
    description: 'Milk chocolate with crunchy hazelnuts',
    price: 5.49,
    image: '🍫'
  },
  {
    id: 5,
    name: 'Mint Madness',
    description: 'Dark chocolate infused with fresh mint',
    price: 4.99,
    image: '🍫'
  },
  {
    id: 6,
    name: 'Orange Bliss',
    description: 'Dark chocolate with candied orange peel',
    price: 5.99,
    image: '🍫'
  }
]

let cart = []

function renderHeader() {
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <span class="logo-icon">🍫</span>
            <span class="logo-text">Chocolate Party</span>
          </div>
          <button class="cart-btn" onclick="toggleCart()">
            <span>🛒</span>
            <span class="cart-count">${cart.length}</span>
          </button>
        </div>
      </div>
    </header>
  `
}

function renderHero() {
  return `
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Welcome to Chocolate Party</h1>
        <p class="hero-subtitle">Premium handcrafted chocolate bars for every occasion</p>
        <button class="hero-btn" onclick="document.getElementById('products').scrollIntoView({behavior: 'smooth'})">
          Shop Now
        </button>
      </div>
    </section>
  `
}

function renderProducts() {
  return `
    <section id="products" class="products-section">
      <div class="container">
        <h2 class="section-title">Our Chocolate Collection</h2>
        <div class="products-grid">
          ${products.map(product => `
            <div class="product-card">
              <div class="product-image">${product.image}</div>
              <h3 class="product-name">${product.name}</h3>
              <p class="product-description">${product.description}</p>
              <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                  Add to Cart
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}

function renderCart() {
  const total = cart.reduce((sum, item) => sum + item.price, 0)
  return `
    <div id="cart-overlay" class="cart-overlay" onclick="toggleCart()">
      <div class="cart-panel" onclick="event.stopPropagation()">
        <div class="cart-header">
          <h2>Your Cart</h2>
          <button class="close-btn" onclick="toggleCart()">✕</button>
        </div>
        <div class="cart-items">
          ${cart.length === 0 ? '<p class="empty-cart">Your cart is empty</p>' : 
            cart.map((item, index) => `
              <div class="cart-item">
                <span class="cart-item-emoji">${item.image}</span>
                <div class="cart-item-info">
                  <div class="cart-item-name">${item.name}</div>
                  <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">🗑️</button>
              </div>
            `).join('')
          }
        </div>
        ${cart.length > 0 ? `
          <div class="cart-footer">
            <div class="cart-total">
              <span>Total:</span>
              <span class="total-price">$${total.toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Checkout</button>
          </div>
        ` : ''}
      </div>
    </div>
  `
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Chocolate Party. All rights reserved.</p>
        <p>Made with ❤️ and chocolate</p>
      </div>
    </footer>
  `
}

function render() {
  app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderProducts()}
    ${renderCart()}
    ${renderFooter()}
  `
}

window.addToCart = function(productId) {
  const product = products.find(p => p.id === productId)
  if (product) {
    cart.push(product)
    render()
    const overlay = document.getElementById('cart-overlay')
    overlay.classList.add('active')
  }
}

window.removeFromCart = function(index) {
  cart.splice(index, 1)
  render()
  const overlay = document.getElementById('cart-overlay')
  overlay.classList.add('active')
}

window.toggleCart = function() {
  const overlay = document.getElementById('cart-overlay')
  overlay.classList.toggle('active')
}

window.checkout = function() {
  alert(`Thank you for your order! Total: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`)
  cart = []
  render()
}

render()

