/* ============================================================
   SARB Herb Health Care — Interactions
   ============================================================ */

// ---------- Scroll: header blur intensify ----------
const header = document.querySelector('.header');
const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Shared site footer ----------
// Single source of truth: every page carries an empty <footer data-site-footer>
// and this fills it, so the footer only ever needs editing here.
const FOOTER_HTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <span class="logo-mark"><img src="assets/logo.png" alt="SARB HERB logo" class="logo-img"></span>
          <span class="logo-name">
            <span class="brand">SARB HERB</span>
            <span class="tag">Ayurveda &amp; Wellness</span>
          </span>
        </a>
        <p>Rooted in Ayurveda, backed by science. Pure herbs. Real results. Trusted by thousands.</p>
        <div class="footer-socials">
          <a href="#" class="icon-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 8h2V4h-3a4 4 0 00-4 4v3H7v3h2v7h3v-7h3l1-3h-4V8"></path>
            </svg>
          </a>
          <a href="#" class="icon-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle>
            </svg>
          </a>
          <a href="#" class="icon-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="3"></rect>
              <path d="M10 9l6 3-6 3z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="#" class="icon-btn" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21l1.6-4.4A8 8 0 1121 12a8 8 0 01-12.6 6.5L3 21z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h4>Explore</h4>
        <ul class="footer-list">
          <li><a href="shop.html">All Products</a></li>
          <li><a href="shop.html">Bestsellers</a></li>
          <li><a href="shop.html">New Arrivals</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </div>

      <div>
        <h4>Customer Care</h4>
        <ul class="footer-list">
          <li><a href="#">Track Your Order</a></li>
          <li><a href="#">Shipping &amp; Returns</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#footer">Contact Us</a></li>
          <li><a href="#">Store Locator</a></li>
        </ul>
      </div>

      <div>
        <h4>Company</h4>
        <ul class="footer-list">
          <li><a href="index.html#about">Our Story</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Certifications</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h4>Get in Touch</h4>
        <div class="footer-contact">
          <div class="row">
            <span class="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>
              </svg>
            </span>
            <div>info@sarbherb.com</div>
          </div>
          <div class="row">
            <span class="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>
              </svg>
            </span>
            <div>Mon - Sat: 9AM - 5PM</div>
          </div>
          <div class="row">
            <span class="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s-8-6-8-13a8 8 0 0116 0c0 7-8 13-8 13z"></path><circle cx="12" cy="9" r="3"></circle>
              </svg>
            </span>
            <div>Dehradun, Uttarakhand<br><span class="muted" style="font-size:12px;">India</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copy">&copy; 2026 SARB Herb Healthcare Pvt. Ltd. All rights reserved.</div>
      <nav class="footer-legal" aria-label="Legal">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Refund</a>
        <a href="#">Shipping</a>
        <a href="#">Cookies</a>
      </nav>
    </div>
  </div>
`;

function renderFooter() {
  const footer = document.querySelector('[data-site-footer]');
  if (!footer) return;
  footer.innerHTML = FOOTER_HTML;
}

// ---------- Mobile navigation ----------
function setupMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.mobile-nav');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- Catalogue state ----------
let allProducts = [];
let currentFilter = 'all';
let currentSort = 'featured';

// The shop lists nine per page; the home page shows a single bestseller row.
const isShopPage = Boolean(document.querySelector('.shop-products'));
const pageSize = isShopPage ? 9 : 6;

// Shop categories, in the order they appear in the sidebar.
const CATEGORIES = [
  { id: 'immunity', label: 'Immunity' },
  { id: 'energy', label: 'Energy & Stamina' },
  { id: 'pain-relief', label: 'Pain Relief' },
  { id: 'heart-care', label: 'Heart Care' },
  { id: 'digestive', label: 'Digestive Health' },
  { id: 'womens-health', label: "Women's Health" },
  { id: 'detox', label: 'Detox & Cleanse' },
  { id: 'wellness', label: 'General Wellness' },
  { id: 'personal-care', label: 'Personal Care' }
];

const CHEVRON = `<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"></path></svg>`;

function matchesFilter(product, filter) {
  return filter === 'all' || product.group === filter || product.category === filter;
}

function slugify(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function productUrl(product) {
  return `product.html?p=${slugify(product.name)}`;
}

function groupLabel(id) {
  return (CATEGORIES.find(cat => cat.id === id) || {}).label || 'Wellness';
}



function renderStars(rating) {
  const width = Math.max(0, Math.min(5, parseFloat(rating) || 0)) / 5 * 100;
  return `<span class="stars" role="img" aria-label="${rating} out of 5 stars">
      <span class="fill" style="width:${width}%">★★★★★</span>★★★★★
    </span>`;
}

// ---------- Product cards ----------
function createProductCard(product) {
  const badgeClass = product.tag === 'New' ? 'new' : 'best';
  const image = product.image || 'assets/products.png';
  const url = productUrl(product);

  return `
    <article class="product glass reveal">
      <div class="product-media">
        <div class="halo"></div>
        <span class="product-tag ${badgeClass}">${product.tag || 'Premium'}</span>
        <button class="product-wishlist" type="button" aria-label="Add ${product.name} to wishlist" aria-pressed="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20s-7-4.5-9-9.5C1.5 6 5 3 8 4c1.5.5 3 1.5 4 3 1-1.5 2.5-2.5 4-3 3-1 6.5 2 5 6.5C19 15.5 12 20 12 20z"></path>
          </svg>
        </button>
        <img src="${image}" alt="${product.name}" class="product-photo" loading="lazy" onerror="this.src='assets/products.png'">
      </div>

      <h3 class="product-name"><a href="${url}">${product.name}</a></h3>
      <p class="product-desc">${product.summary || product.description}</p>

      <div class="product-rating">
        ${renderStars(product.rating)}
        <span class="count">(${product.reviews})</span>
      </div>

      <div class="product-foot" style="justify-content: flex-end;">
        <a class="product-add" href="${url}" aria-label="View details for ${product.name}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </article>
  `;
}

function sortProducts(items, sortType) {
  const copy = [...items];

  if (sortType === 'rating') return copy.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  return copy;
}

// ---------- Sidebar categories ----------
function renderCategories() {
  const list = document.querySelector('#category-list');
  if (!list) return;

  const available = CATEGORIES
    .map(cat => ({ ...cat, count: allProducts.filter(p => p.group === cat.id).length }))
    .filter(cat => cat.count > 0);

  const rows = [{ id: 'all', label: 'All Products', count: allProducts.length }, ...available];

  list.innerHTML = rows.map(cat => `
    <button class="tab ${cat.id === currentFilter ? 'active' : ''}" type="button" data-filter="${cat.id}">
      <span>${cat.label}</span>
      <span class="count">${cat.count}</span>
      ${CHEVRON}
    </button>
  `).join('');

  list.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      list.querySelectorAll('.tab').forEach(other => other.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.filter, currentSort, 1);
    });
  });
}

// ---------- Result count & pagination ----------
function updateResultCount(total, page, shownCount) {
  const label = document.querySelector('#result-count');
  if (!label) return;

  if (!total) {
    label.textContent = 'No products found in this category';
    return;
  }

  const start = (page - 1) * pageSize + 1;
  label.textContent = `Showing ${start}-${start + shownCount - 1} of ${total} products`;
}

function pageArrow(direction) {
  const path = direction === 'prev' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"></path></svg>`;
}

function updatePagination(totalPages, page) {
  const pagination = document.querySelector('.pagination');
  if (!pagination) return;

  pagination.innerHTML = '';
  if (totalPages <= 1) return;

  const addButton = (label, target, { active = false, disabled = false, nav = false, aria } = {}) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `page-button${active ? ' active' : ''}${nav ? ' page-nav' : ''}`;
    button.innerHTML = label;
    button.disabled = disabled || active;
    if (aria) button.setAttribute('aria-label', aria);
    if (active) button.setAttribute('aria-current', 'page');
    if (!button.disabled) {
      button.addEventListener('click', () => {
        renderProducts(currentFilter, currentSort, target);
        document.querySelector('#product-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
    pagination.appendChild(button);
  };

  addButton(pageArrow('prev'), page - 1, { disabled: page === 1, nav: true, aria: 'Previous page' });
  for (let i = 1; i <= totalPages; i += 1) {
    addButton(String(i), i, { active: i === page, aria: `Page ${i}` });
  }
  addButton(pageArrow('next'), page + 1, { disabled: page === totalPages, nav: true, aria: 'Next page' });
}

// ---------- Render ----------
function renderProducts(filter = 'all', sort = 'featured', page = 1) {
  const container = document.querySelector('#product-list');
  if (!container) return;

  currentFilter = filter;
  currentSort = sort;

  const filtered = allProducts.filter(product => matchesFilter(product, filter));
  const sorted = sortProducts(filtered, sort);
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const paged = sorted.slice((safePage - 1) * pageSize, safePage * pageSize);

  updateResultCount(sorted.length, safePage, paged.length);
  updatePagination(totalPages, safePage);

  container.innerHTML = paged.length
    ? paged.map(createProductCard).join('')
    : '<p class="results">Nothing here yet — try another category.</p>';

  container.querySelectorAll('.reveal').forEach(el => io.observe(el));
  bindCardActions(container);
}

// ---------- Card interactions ----------
// Ordering is intentionally not wired up — the catalogue is browse-only for now.
function bindCardActions(scope) {
  scope.querySelectorAll('.product-wishlist').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      event.preventDefault();
      const saved = button.classList.toggle('saved');
      button.setAttribute('aria-pressed', String(saved));
    });
  });

  // Make the whole card clickable without nesting links inside links.
  scope.querySelectorAll('.product').forEach(card => {
    const link = card.querySelector('.product-name a');
    if (!link) return;
    card.addEventListener('click', event => {
      if (event.target.closest('a, button')) return;
      window.location.href = link.getAttribute('href');
    });
  });
}

// ---------- Product detail page ----------
function renderProductPage() {
  const root = document.querySelector('#product-detail');
  if (!root) return;

  const slug = new URLSearchParams(window.location.search).get('p');
  const product = allProducts.find(p => slugify(p.name) === slug);

  if (!product) {
    root.innerHTML = `
      <div class="detail-missing glass">
        <h1>Product not found</h1>
        <p>We couldn't find that product. It may have been renamed or removed.</p>
        <a class="btn btn-primary" href="shop.html">Back to all products</a>
      </div>`;
    return;
  }

  document.title = `${product.name} | SARB HERB`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', product.summary || product.description);

  const crumb = document.querySelector('#detail-crumb');
  if (crumb) crumb.textContent = product.name;

  root.innerHTML = `
    <div class="detail-grid">
      <div class="detail-media glass reveal in">
        <span class="product-tag ${product.tag === 'New' ? 'new' : 'best'}">${product.tag || 'Premium'}</span>
        <div class="halo"></div>
        <img src="${product.image}" alt="${product.name}" onerror="this.src='assets/products.png'">
      </div>

      <div class="detail-body reveal reveal-delay-1 in">
        <span class="eyebrow">${groupLabel(product.group)}</span>
        <h1>${product.name}</h1>

        <div class="detail-rating">
          ${renderStars(product.rating)}
          <span class="count">${product.rating} · ${product.reviews} reviews</span>
        </div>

        <p class="detail-summary">${product.summary || ''}</p>

        


        <div class="detail-actions">
          <a class="btn btn-primary" href="#footer">
            Enquire About This Product
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"></path>
            </svg>
          </a>
          <button class="product-wishlist detail-wishlist" type="button" aria-label="Save ${product.name}" aria-pressed="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20s-7-4.5-9-9.5C1.5 6 5 3 8 4c1.5.5 3 1.5 4 3 1-1.5 2.5-2.5 4-3 3-1 6.5 2 5 6.5C19 15.5 12 20 12 20z"></path>
            </svg>
          </button>
        </div>

        <ul class="detail-assurance">
          <li>100% Ayurvedic &amp; natural</li>
          <li>GMP &amp; ISO certified</li>
          <li>Lab tested for safety</li>
          <li>Made in India</li>
        </ul>
      </div>
    </div>

    <div class="detail-about glass reveal">
      <h2>About ${product.name}</h2>
      <p>${product.description}</p>
      <p class="detail-note muted">Follow the dosage printed on the pack, or use as directed by your Ayurvedic physician. Keep out of reach of children and store in a cool, dry place.</p>
    </div>
  `;

  bindCardActions(root);

  // Related: same concern first, topped up with anything else from the range.
  const related = document.querySelector('#related-list');
  if (related) {
    const sameGroup = allProducts.filter(p => p.group === product.group && p.name !== product.name);
    const others = allProducts.filter(p => p.group !== product.group && p.name !== product.name);
    const picks = [...sameGroup, ...others].slice(0, 3);
    related.innerHTML = picks.map(createProductCard).join('');
    related.querySelectorAll('.reveal').forEach(el => io.observe(el));
    bindCardActions(related);
  }

  root.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ---------- Load ----------
async function loadProducts() {
  const grid = document.querySelector('#product-list');
  const detail = document.querySelector('#product-detail');
  if (!grid && !detail) return;

  try {
    const response = await fetch('products.json');
    if (!response.ok) throw new Error('Unable to load products');
    allProducts = await response.json();

    if (detail) {
      renderProductPage();
    } else {
      renderCategories();
      renderProducts('all', currentSort, 1);
    }
  } catch (error) {
    console.error(error);
    const target = detail || grid;
    target.innerHTML = '<div class="detail-missing glass"><h2>Products are temporarily unavailable.</h2><p>Please refresh the page or try again shortly.</p></div>';
  }
}

// ---------- Filters & sorting ----------
function setupFilters() {
  // Home-page tab strip (the shop sidebar wires itself up in renderCategories).
  document.querySelectorAll('.tabs:not(#category-list)').forEach(group => {
    group.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        group.querySelectorAll('.tab').forEach(other => other.classList.remove('active'));
        tab.classList.add('active');
        renderProducts(tab.dataset.filter || 'all', currentSort, 1);
      });
    });
  });

  const sortSelect = document.querySelector('#sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', event => {
      renderProducts(currentFilter, event.target.value, 1);
    });
  }
}

renderFooter();
setupMobileNav();
setupFilters();
loadProducts();
