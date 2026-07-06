const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const productGrid = document.getElementById('productGrid');
const productCount = document.getElementById('productCount');
const wishlistBadge = document.getElementById('wishlistBadge');
const cartBadge = document.getElementById('cartBadge');
const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartSummary = document.getElementById('cartSummary');
const checkoutButton = document.getElementById('checkoutButton');
const quickViewModal = document.getElementById('quickViewModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const themeToggle = document.getElementById('themeToggle');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const minPriceRange = document.getElementById('minPriceRange');
const maxPriceRange = document.getElementById('maxPriceRange');

const storedCart = JSON.parse(localStorage.getItem('groceryCart') || '[]');
const storedWishlist = JSON.parse(localStorage.getItem('groceryWishlist') || '[]');
const cart = new Set(storedCart);
const wishlist = new Set(storedWishlist);

const priceBounds = { min: Math.min(...products.map((item) => item.price)), max: Math.max(...products.map((item) => item.price)) };

function saveCart() { localStorage.setItem('groceryCart', JSON.stringify([...cart])); }
function saveWishlist() { localStorage.setItem('groceryWishlist', JSON.stringify([...wishlist])); }

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('groceryTheme', theme);
}

function getStoredTheme() { return localStorage.getItem('groceryTheme') || document.documentElement.dataset.theme || document.body.dataset.theme || 'light'; }
function initTheme() { setTheme(getStoredTheme()); }
function getCategories(items) { return ['all', ...new Set(items.map((i) => i.category))]; }

function populateCategoryOptions() {
  getCategories(products).forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category === 'all' ? 'All Categories' : category;
    categoryFilter.appendChild(option);
  });
}

function initPriceControls() {
  minPriceInput.min = priceBounds.min; minPriceInput.max = priceBounds.max; maxPriceInput.min = priceBounds.min; maxPriceInput.max = priceBounds.max;
  minPriceRange.min = priceBounds.min; minPriceRange.max = priceBounds.max; maxPriceRange.min = priceBounds.min; maxPriceRange.max = priceBounds.max;
  minPriceInput.value = priceBounds.min.toFixed(2); maxPriceInput.value = priceBounds.max.toFixed(2);
  minPriceRange.value = priceBounds.min; maxPriceRange.value = priceBounds.max;
}

function formatPrice(value) { return `$${value.toFixed(2)}`; }

function updateCounts() {
  productCount.textContent = 'Browse fresh grocery essentials';
  wishlistBadge.textContent = wishlist.size; cartBadge.textContent = cart.size;
  cartSummary.textContent = `${cart.size} item${cart.size === 1 ? '' : 's'} added`;
}

function getFilterValues() {
  return { category: categoryFilter.value, search: searchInput.value.trim().toLowerCase(), minPrice: Number(minPriceInput.value) || priceBounds.min, maxPrice: Number(maxPriceInput.value) || priceBounds.max, sort: sortSelect.value };
}

function applyFilters() {
  const { category, search, minPrice, maxPrice, sort } = getFilterValues();
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search);
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => { if (sort === 'price-asc') return a.price - b.price; if (sort === 'price-desc') return b.price - a.price; if (sort === 'rating-desc') return b.rating - a.rating; if (sort === 'name-asc') return a.name.localeCompare(b.name); return 0; });
  updateCounts(sortedProducts.length);
  renderProducts(sortedProducts);
}

function renderProducts(items) {
  productGrid.innerHTML = '';
  if (items.length === 0) { productGrid.innerHTML = '<div class="empty-state"><h2>No products found</h2><p>Try adjusting your filters or search term.</p></div>'; return; }
  items.forEach((product) => {
    const inCart = cart.has(product.id); const inWishlist = wishlist.has(product.id);
    const card = document.createElement('article'); card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/800x600?text=Grocery'" />
      <div class="product-content">
        <div class="product-meta"><span class="product-badge">${product.category}</span><span>★ ${product.rating.toFixed(1)}</span></div>
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom"><span class="product-price">${formatPrice(product.price)}</span></div>
        <div class="button-group">
          <button class="button button-primary add-cart" data-id="${product.id}">${inCart ? 'In Cart' : 'Add to Cart'}</button>
          <button class="button wishlist-button ${inWishlist ? 'active' : ''} wishlist-toggle" data-id="${product.id}">${inWishlist ? 'Saved' : 'Wishlist'}</button>
          <button class="button button-secondary quick-view" data-id="${product.id}">Quick View</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
  productGrid.querySelectorAll('.add-cart').forEach((button) => button.addEventListener('click', (e) => addToCart(Number(e.currentTarget.dataset.id))));
  productGrid.querySelectorAll('.wishlist-toggle').forEach((button) => button.addEventListener('click', (e) => toggleWishlist(Number(e.currentTarget.dataset.id))));
  productGrid.querySelectorAll('.quick-view').forEach((button) => button.addEventListener('click', (e) => openQuickView(products.find((p) => p.id === Number(e.currentTarget.dataset.id)))));
}

function openQuickView(product) {
  const inCart = cart.has(product.id); const inWishlist = wishlist.has(product.id);
  modalBody.innerHTML = `
    <div class="modal-content">
      <img class="modal-image" src="${product.image}" alt="${product.name}" />
      <div class="modal-info">
        <div class="modal-meta"><span class="product-badge">${product.category}</span><span>★ ${product.rating.toFixed(1)}</span></div>
        <h2 id="modalTitle">${product.name}</h2>
        <p class="product-price">${formatPrice(product.price)}</p>
        <p>${product.description}</p>
        <div class="modal-footer"><button class="button button-primary modal-add-cart">${inCart ? 'In Cart' : 'Add to Cart'}</button><button class="button wishlist-button ${inWishlist ? 'active' : ''} modal-add-wishlist">${inWishlist ? 'Saved' : 'Add to Wishlist'}</button></div>
      </div>
    </div>
  `;
  quickViewModal.classList.remove('hidden');
  modalBody.querySelector('.modal-add-cart').addEventListener('click', () => addToCart(product.id));
  modalBody.querySelector('.modal-add-wishlist').addEventListener('click', () => toggleWishlist(product.id));
}

function closeQuickView() { quickViewModal.classList.add('hidden'); }
function toggleCartDrawer() { cartDrawer.classList.toggle('hidden'); }

function addToCart(productId) { if (!cart.has(productId)) { cart.add(productId); saveCart(); renderCart(); applyFilters(); } }
function removeFromCart(productId) { if (cart.has(productId)) { cart.delete(productId); saveCart(); renderCart(); applyFilters(); } }

function toggleWishlist(productId) { if (wishlist.has(productId)) wishlist.delete(productId); else wishlist.add(productId); saveWishlist(); applyFilters(); }

function renderCart() {
  cartItems.innerHTML = '';
  const cartProducts = products.filter((product) => cart.has(product.id));
  if (cartProducts.length === 0) cartItems.innerHTML = '<div class="empty-state"><h2>Your cart is empty</h2><p>Add grocery items and view them here.</p></div>';
  else cartProducts.forEach((product) => { const item = document.createElement('div'); item.className = 'cart-item'; item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="cart-item-meta"><h3>${product.name}</h3><p>${product.category}</p><p>${formatPrice(product.price)}</p><div class="cart-item-actions"><button class="button button-secondary remove-cart" data-id="${product.id}">Remove</button></div></div>
      `; cartItems.appendChild(item); });
  const total = cartProducts.reduce((sum, item) => sum + item.price, 0); cartTotal.textContent = formatPrice(total);
  updateCounts(products.filter((product) => { const { category, search, minPrice, maxPrice } = getFilterValues(); const matchesCategory = category === 'all' || product.category === category; const matchesSearch = product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search); const matchesPrice = product.price >= minPrice && product.price <= maxPrice; return matchesCategory && matchesSearch && matchesPrice; }).length);
  cartItems.querySelectorAll('.remove-cart').forEach((button) => button.addEventListener('click', (event) => removeFromCart(Number(event.currentTarget.dataset.id))));
}

function syncPriceControls() {
  let minValue = Number(minPriceInput.value); let maxValue = Number(maxPriceInput.value);
  if (minValue > maxValue) { minValue = maxValue; minPriceInput.value = minValue; }
  if (maxValue < minValue) { maxValue = minValue; maxPriceInput.value = maxValue; }
  minPriceRange.value = minValue; maxPriceRange.value = maxValue;
}

minPriceInput.addEventListener('input', () => { syncPriceControls(); applyFilters(); });
maxPriceInput.addEventListener('input', () => { syncPriceControls(); applyFilters(); });
minPriceRange.addEventListener('input', () => { minPriceInput.value = minPriceRange.value; if (Number(minPriceInput.value) > Number(maxPriceInput.value)) { maxPriceInput.value = minPriceInput.value; maxPriceRange.value = minPriceRange.value; } applyFilters(); });
maxPriceRange.addEventListener('input', () => { maxPriceInput.value = maxPriceRange.value; if (Number(maxPriceInput.value) < Number(minPriceInput.value)) { minPriceInput.value = maxPriceInput.value; minPriceRange.value = maxPriceRange.value; } applyFilters(); });

searchInput.addEventListener('input', applyFilters); categoryFilter.addEventListener('change', applyFilters); sortSelect.addEventListener('change', applyFilters);
cartToggle.addEventListener('click', () => { cartDrawer.classList.toggle('hidden'); renderCart(); }); closeCart.addEventListener('click', () => cartDrawer.classList.add('hidden'));
closeModal.addEventListener('click', closeQuickView); quickViewModal.addEventListener('click', (event) => { if (event.target === quickViewModal) closeQuickView(); });
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeQuickView(); cartDrawer.classList.add('hidden'); } });
checkoutButton.addEventListener('click', () => alert('Checkout is not implemented in this demo.'));
themeToggle.addEventListener('click', () => { const current = document.documentElement.dataset.theme || 'light'; setTheme(current === 'light' ? 'dark' : 'light'); });

initTheme(); initPriceControls(); populateCategoryOptions(); renderCart(); applyFilters();
