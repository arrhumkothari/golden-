/* ======================================================
   Golden Crust Bakery – Main JavaScript
   Handles: navbar, hamburger menu, scroll reveal,
            featured products on homepage
   ====================================================== */

// ===== NAVBAR SCROLL EFFECT =====
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
})();

// ===== HAMBURGER MENU =====
(function () {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

// ===== SCROLL REVEAL =====
(function () {
  const els = document.querySelectorAll(
    '.product-card, .testimonial-card, .value-card, .team-card, .feature-item, .about-card, .timeline-item'
  );
  if (!els.length) return;
  els.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach(el => observer.observe(el));
})();

// ===== FEATURED PRODUCTS (Homepage) =====
const FEATURED_PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1486887396153-fa416526c108?w=600&q=80',
    badge: 'bestseller', badgeLabel: 'Bestseller',
    name: 'Classic Sourdough Loaf',
    desc: '18-hour cold ferment. A golden, crackly crust with an open, chewy crumb. Our signature product.',
    price: '₹280', category: 'breads'
  },
  {
    img: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80',
    badge: 'new', badgeLabel: 'New',
    name: 'Almond Croissant',
    desc: 'Layers of butter-laminated dough folded to perfection, topped with flaked almonds and powdered sugar.',
    price: '₹120', category: 'pastries'
  },
  {
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    badge: '', badgeLabel: '',
    name: 'Belgian Chocolate Cake',
    desc: 'Rich dark chocolate sponge, whipped ganache frosting, and chocolate shavings. Available whole or by slice.',
    price: '₹1,200', category: 'cakes'
  },
  {
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    badge: '', badgeLabel: '',
    name: 'Multigrain Sandwich Loaf',
    desc: 'Seeds of sunflower, flax, and oats packed into a hearty, nutritious loaf perfect for everyday sandwiches.',
    price: '₹240', category: 'breads'
  },
  {
    img: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80',
    badge: 'seasonal', badgeLabel: 'Seasonal',
    name: 'Cardamom & Rose Cupcakes',
    desc: 'Soft cardamom sponge topped with rose buttercream. Inspired by traditional Indian flavours.',
    price: '₹90', category: 'pastries'
  },
  {
    img: 'images/garlic-herb-focaccia.jpg',
    badge: '', badgeLabel: '',
    name: 'Garlic Herb Focaccia',
    desc: 'Olive oil-drenched focaccia dimpled with rosemary, garlic, and sea salt. Baked fresh every morning.',
    price: '₹200', category: 'breads'
  }
];

function renderFeaturedProducts () {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  FEATURED_PRODUCTS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.badge ? `<span class="product-badge badge-${item.badge}">${item.badgeLabel}</span>` : ''}
      </div>
      <div class="product-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="product-footer">
          <span class="product-price">${item.price}</span>
          <button class="product-order-btn" onclick="window.location.href='contact.html'">Order</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderFeaturedProducts);
