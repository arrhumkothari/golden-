/* ======================================================
   Golden Crust Bakery – Menu Page JavaScript
   Handles: full product catalogue, category filtering
   ====================================================== */

const ALL_PRODUCTS = [
  // BREADS
  { img:'https://images.unsplash.com/photo-1486887396153-fa416526c108?w=600&q=80', name:'Classic Sourdough Loaf', desc:'18-hour cold ferment. A golden, crackly crust with an open, chewy crumb. Our signature product.', price:'₹280', badge:'bestseller', badgeLabel:'Bestseller', category:'breads' },
  { img:'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', name:'Multigrain Sandwich Loaf', desc:'Seeds of sunflower, flax, and oats in a hearty, nutritious loaf perfect for everyday sandwiches.', price:'₹240', badge:'', badgeLabel:'', category:'breads' },
  { img:'images/garlic-herb-focaccia.jpg', name:'Garlic Herb Focaccia', desc:'Olive oil-drenched focaccia dimpled with rosemary, garlic, and sea salt. Baked fresh every morning.', price:'₹200', badge:'', badgeLabel:'', category:'breads' },
  { img:'images/whole-wheat-loaf.jpg', name:'Whole Wheat Loaf', desc:'Nutty, wholesome whole-wheat bread made with stone-ground flour. Low GI and full of fibre.', price:'₹220', badge:'', badgeLabel:'', category:'breads' },
  { img:'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80', name:'Ciabatta', desc:'Classic Italian ciabatta — airy, irregular crumb, crisp crust. Great for bruschetta and sandwiches.', price:'₹180', badge:'new', badgeLabel:'New', category:'breads' },
  { img:'images/rye-caraway-loaf.webp', name:'Rye & Caraway Loaf', desc:'Dense, tangy rye bread with caraway seeds. A Scandinavian-inspired treat that pairs beautifully with cheese.', price:'₹300', badge:'', badgeLabel:'', category:'breads' },
  // PASTRIES
  { img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80', name:'Butter Croissant', desc:'Classic French-style croissant with 27 layers of butter-laminated dough. Flaky, golden, perfect.', price:'₹90', badge:'bestseller', badgeLabel:'Bestseller', category:'pastries' },
  { img:'https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80', name:'Almond Croissant', desc:'Our butter croissant filled with almond frangipane and topped with flaked almonds and icing sugar.', price:'₹120', badge:'new', badgeLabel:'New', category:'pastries' },
  { img:'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80', name:'Lemon Curd Tart', desc:'Buttery shortcrust pastry filled with sharp, silky lemon curd and dusted with icing sugar.', price:'₹140', badge:'', badgeLabel:'', category:'pastries' },
  { img:'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80', name:'Cardamom & Rose Cupcakes', desc:'Soft cardamom sponge topped with rose buttercream. Inspired by traditional Indian flavours.', price:'₹90', badge:'seasonal', badgeLabel:'Seasonal', category:'pastries' },
  { img:'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&q=80', name:'Chocolate Danish', desc:'Flaky danish pastry filled with rich dark chocolate cream and finished with a drizzle of white chocolate.', price:'₹110', badge:'', badgeLabel:'', category:'pastries' },
  { img:'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80', name:'Mixed Berry Muffin', desc:'Moist, domed muffins loaded with blueberries, raspberries, and a hint of vanilla. No artificial colour.', price:'₹80', badge:'', badgeLabel:'', category:'pastries' },
  // CAKES
  { img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', name:'Belgian Chocolate Cake', desc:'Rich dark chocolate sponge, whipped ganache frosting, and chocolate shavings. Available whole or slice.', price:'₹1,200', badge:'', badgeLabel:'', category:'cakes' },
  { img:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80', name:'Classic Vanilla Sponge', desc:'Light and airy vanilla genoise layered with fresh cream and seasonal berries. Simply beautiful.', price:'₹950', badge:'', badgeLabel:'', category:'cakes' },
  { img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80', name:'Mango Cheesecake', desc:'A no-bake cheesecake on a biscuit base topped with fresh Alphonso mango coulis. Seasonal delight.', price:'₹1,100', badge:'seasonal', badgeLabel:'Seasonal', category:'cakes' },
  { img:'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80', name:'Red Velvet Cake', desc:'Classic red velvet with a hint of cocoa and smooth cream-cheese frosting. Crowd pleaser at every party.', price:'₹1,150', badge:'bestseller', badgeLabel:'Bestseller', category:'cakes' },
  { img:'images/custom-birthday-cake.jpeg', name:'Custom Birthday Cake', desc:'Tell us your theme, flavour, and size — our cake artists will bring your vision to life. 48hr notice required.', price:'From ₹1,500', badge:'', badgeLabel:'', category:'cakes' },
  // SEASONAL
  { img:'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80', name:'Gulab Jamun Cake', desc:'Fusion of East and West: soft sponge soaked in rose-cardamom syrup, topped with gulab jamun pieces.', price:'₹1,250', badge:'seasonal', badgeLabel:'Seasonal', category:'seasonal' },
  { img:'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&q=80', name:'Diwali Mithhai Box', desc:'A curated box of 12 festive bites — kaju barfi tart, saffron éclair, and pistachio madeleine.', price:'₹650', badge:'seasonal', badgeLabel:'Seasonal', category:'seasonal' },
  { img:'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&q=80', name:'Christmas Yule Log', desc:'A traditional bûche de Noël — chocolate genoise, mascarpone cream, and hand-crafted marzipan decorations.', price:'₹1,400', badge:'seasonal', badgeLabel:'Seasonal', category:'seasonal' },
];

function createProductCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', item.category);
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
  return card;
}

function renderMenu(filter) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'all' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === filter);
  filtered.forEach((item, i) => {
    const card = createProductCard(item);
    card.style.animationDelay = `${i * 60}ms`;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.product-card').forEach(el => {
    el.classList.add('reveal');
    setTimeout(() => el.classList.add('visible'), 50);
  });
}

function initMenuFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  initMenuFilters();
});
