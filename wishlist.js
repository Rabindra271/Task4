const wishlistGrid = document.getElementById('wishlistGrid');
const clearWishlistButton = document.getElementById('clearWishlist');
const themeToggleButton = document.getElementById('themeToggle');

const wishlist = JSON.parse(localStorage.getItem('groceryWishlist') || '[]');
const cart = JSON.parse(localStorage.getItem('groceryCart') || '[]');

function saveWishlist() { localStorage.setItem('groceryWishlist', JSON.stringify(wishlist)); }
function saveCart() { localStorage.setItem('groceryCart', JSON.stringify(cart)); }

function renderWishlist() {
  wishlistGrid.innerHTML = '';
  if (wishlist.length === 0) { wishlistGrid.innerHTML = '<div class="empty-state"><h2>No saved items yet</h2><p>Return to the shop and add items to your wishlist.</p></div>'; return; }
  wishlist.forEach((itemId) => {
    const product = products.find((p) => p.id === itemId); if (!product) return;
    const card = document.createElement('article'); card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-content">
        <div class="product-meta"><span class="product-badge">${product.category}</span><span>★ ${product.rating.toFixed(1)}</span></div>
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom"><span class="product-price">$${product.price.toFixed(2)}</span><div class="card-actions"><button class="button button-primary add-cart" data-id="${product.id}">Add to Cart</button><button class="button button-secondary remove-wishlist" data-id="${product.id}">Remove</button></div></div>
      </div>
    `;
    wishlistGrid.appendChild(card);
  });
  document.querySelectorAll('.add-cart').forEach((button) => button.addEventListener('click', (event) => { const productId = Number(event.currentTarget.dataset.id); if (!cart.includes(productId)) { cart.push(productId); saveCart(); } }));
  document.querySelectorAll('.remove-wishlist').forEach((button) => button.addEventListener('click', (event) => { const productId = Number(event.currentTarget.dataset.id); const index = wishlist.indexOf(productId); if (index !== -1) { wishlist.splice(index, 1); saveWishlist(); renderWishlist(); } }));
}

clearWishlistButton.addEventListener('click', () => { wishlist.length = 0; saveWishlist(); renderWishlist(); });

function setTheme(theme) { document.documentElement.dataset.theme = theme; document.body.dataset.theme = theme; localStorage.setItem('groceryTheme', theme); themeToggleButton.textContent = theme === 'dark' ? '☀️' : '🌙'; }
function getStoredTheme() { return localStorage.getItem('groceryTheme') || document.documentElement.dataset.theme || document.body.dataset.theme || 'light'; }

themeToggleButton.addEventListener('click', () => { const currentTheme = getStoredTheme(); setTheme(currentTheme === 'light' ? 'dark' : 'light'); });

const storedTheme = getStoredTheme(); setTheme(storedTheme); renderWishlist();
