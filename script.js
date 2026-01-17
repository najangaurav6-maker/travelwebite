// ====== Package Data ======
const PACKAGES = [
  // Kashmir
  { id:'kashmir-classic', destination:'Kashmir', title:'Kashmir Classic', duration:'3N/4D', price:'₹18,999', image:'kashmir-classic.jpg',
    highlights:['Houseboat stay','Shikara ride','Gulmarg day trip'] },
  { id:'kashmir-paradise', destination:'Kashmir', title:'Kashmir Paradise Tour', duration:'7N/8D', price:'₹28,999', image:'kashmir-paradise.jpg',
    highlights:['Srinagar','Gulmarg','Pahalgam','Sonmarg'] },
  { id:'kashmir-honeymoon', destination:'Kashmir', title:'Kashmir Honeymoon Special', duration:'5N/6D', price:'₹24,999', image:'kashmir-honeymoon.jpg',
    highlights:['Romantic houseboat','Mughal gardens','Sunset shikara'] },
  { id:'kashmir-sonmarg', destination:'Kashmir', title:'Sonmarg Special', duration:'4N/5D', price:'₹21,500', image:'kashmir-sonmarg.jpg',
    highlights:['Thajiwas Glacier','Sind River','Meadow walks'] },

  // Ladakh
  { id:'ladakh-explorer', destination:'Ladakh', title:'Ladakh Explorer', duration:'6N/7D', price:'₹39,999', image:'ladakh-explorer.jpg',
    highlights:['Leh','Nubra Valley','Pangong Lake','Khardung La'] },
  { id:'ladakh-circuit', destination:'Ladakh', title:'Ladakh–Manali–Kashmir Circuit', duration:'10N/11D', price:'₹54,999', image:'ladakh-circuit.jpg',
    highlights:['Srinagar','Kargil','Leh','Nubra','Pangong','Manali'] },
  { id:'ladakh-luxury', destination:'Ladakh', title:'Luxurious Escape to Ladakh', duration:'5N/6D', price:'₹45,715', image:'ladakh-luxury.jpg',
    highlights:['Premium stays','Leh','Pangong','Monasteries'] },
  { id:'ladakh-picturesque', destination:'Ladakh', title:'Picturesque Ladakh', duration:'6N/7D', price:'₹23,671', image:'ladakh-picturesque.jpg',
    highlights:['Homestay + camp','Leh','Nubra','Pangong'] },
  { id:'ladakh-exquisite', destination:'Ladakh', title:'Exquisite Ladakh Trip', duration:'4N/5D', price:'₹39,439', image:'ladakh-exquisite.jpg',
    highlights:['Magnetic Hill','Pathar Sahib','Sham Valley'] },

  // Manali
  { id:'manali-adventure', destination:'Manali', title:'Manali Adventure', duration:'5N/6D', price:'₹22,499', image:'manali-adventure.jpg',
    highlights:['Solang Valley','Rohtang Pass','Paragliding','Old Manali'] },
  { id:'manali-honeymoon', destination:'Manali', title:'Manali Honeymoon', duration:'4N/5D', price:'₹19,999', image:'manali-honeymoon.jpg',
    highlights:['Cozy stays','Snow activities','Cafes & markets'] },
  { id:'manali-relax', destination:'Manali', title:'Relaxing Manali', duration:'4N/5D', price:'₹15,001', image:'manali-relax.jpg',
    highlights:['Hadimba Temple','Naggar Castle','Manikaran'] },
  { id:'himachal-retreat', destination:'Manali', title:'Himachal Retreat (Shimla + Manali)', duration:'5N/6D', price:'₹16,762', image:'himachal-retreat.jpg',
    highlights:['Shimla','Mall Road','Solang','Viceregal Lodge'] },
  { id:'manali-volvo', destination:'Manali', title:'Kullu Manali Volvo Tour', duration:'3N/4D', price:'₹6,999', image:'manali-volvo.jpg',
    highlights:['Volvo travel','Kullu','Manali sightseeing'] },

  // Himachal
  { id:'himachal-highlights', destination:'Himachal', title:'Himachal Highlights', duration:'6N/7D', price:'₹27,999', image:'himachal-highlights.jpg',
    highlights:['Dharamshala','McLeod Ganj','Dalhousie','Khajjiar'] },
  { id:'himachal-family', destination:'Himachal', title:'Himachal Family Tour', duration:'7N/8D', price:'₹32,999', image:'himachal-family.jpg',
    highlights:['Shimla','Manali','Dharamshala','Dalhousie'] },
  { id:'shimla-best', destination:'Himachal', title:'Best of Shimla', duration:'3N/4D', price:'₹14,269', image:'shimla-best.jpg',
    highlights:['Mall Road','Kufri','Viceregal Lodge'] },
  { id:'himachal-scenic', destination:'Himachal', title:'Scenic Himachal Tour', duration:'7N/8D', price:'₹25,999', image:'himachal-scenic.jpg',
    highlights:['Shimla','Manali','Dharamshala','Dalhousie'] },
  { id:'himachal-honeymoon', destination:'Himachal', title:'Himachal Honeymoon Special', duration:'5N/6D', price:'₹21,500', image:'himachal-honeymoon.jpg',
    highlights:['Romantic stays','Snow activities','Cedar forests'] },
];

// ====== Helpers ======
function cardHTML(pkg) {
  return `
  <article class="card fade-in">
    <a href="package.html?id=${pkg.id}" class="card-link" aria-label="${pkg.title}">
      <div class="card-media" style="background-image:url('${pkg.image}');"></div>
      <div class="card-body">
        <h3>${pkg.title}</h3>
        <p>${pkg.highlights.slice(0,3).join(', ')}...</p>
      </div>
      <div class="card-footer">
        <span class="price">${pkg.price}</span>
        <span class="book-btn">View details</span>
      </div>
    </a>
  </article>`;
}

// ====== Home: Featured ======
function renderFeatured() {
  const el = document.getElementById('featuredGrid');
  if (!el) return;
  const featured = ['kashmir-classic','ladakh-explorer','manali-adventure','himachal-highlights']
    .map(id => PACKAGES.find(p => p.id === id));
  el.innerHTML = featured.map(cardHTML).join('');
}

// ====== Packages by Destination ======
function renderPackagesByDestination() {
  const map = {
    'grid-kashmir': 'Kashmir',
    'grid-ladakh': 'Ladakh',
    'grid-manali': 'Manali',
    'grid-himachal': 'Himachal'
  };
  Object.entries(map).forEach(([gridId, dest]) => {
    const el = document.getElementById(gridId);
    if (!el) return;
    const items = PACKAGES.filter(p => p.destination === dest);
    el.innerHTML = items.map(cardHTML).join('');
  });
}

// ====== Package Detail ======
function renderPackageDetail() {
  const container = document.getElementById('packageDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const pkg = PACKAGES.find(p => p.id === id);
  if (!pkg) {
    container.innerHTML = `<p class="lead">Package not found. <a class="btn" href="packages.html">Back to packages</a></p>`;
    return;
  }

  // JSON-LD structured data
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": pkg.title,
    "description": `${pkg.destination} ${pkg.duration}`,
    "image": pkg.image,
    "brand": { "@type": "Brand", "name": "Travel Yatra" },
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace(/[^\d]/g, ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };
  const ldEl = document.getElementById('jsonld');
  if (ldEl) ldEl.textContent = JSON.stringify(jsonld);

  container.innerHTML = `
    <div class="section-header">
      <h2>${pkg.title}</h2>
      <p class="lead">${pkg.destination} · ${pkg.duration} · ${pkg.price}</p>
    </div>
    <div class="card">
      <div class="card-media" style="background-image:url('${pkg.image}'); height:320px;"></div>
      <div class="card-body" style="position:static; background:#0f172a; color:#fff;">
        <h3 style="margin-bottom:8px;">Highlights</h3>
        <ul style="list-style:disc; padding-left:18px; color:#e5e7eb;">
          ${pkg.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div style="margin-top:14px;">
          <a class="btn" href="booking.html">Book this package</a>
          <a class="btn secondary" href="packages.html" style="margin-left:8px;">Back to packages</a>
        </div>
      </div>
    </div>`;
}

// ====== Booking ======
function populateBookingSelect() {
  const sel = document.getElementById('packageSelect');
  if (!sel) return;
  sel.innerHTML = `<option value="">Select a package</option>` +
    PACKAGES.map(p => `<option value="${p.id}">${p.title} (${p.duration})</option>`).join('');
}

function handleBookingForm() {
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('bookingStatus');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    status.textContent = 'Booking submitted. We will contact you shortly.';
    status.style.color = '#22c55e';
    form.reset();
    console.log('Booking data:', data);
  });
}

// ====== Reviews ======
const REVIEWS = [
  { name: 'Priya S.', rating: 5, text: 'Kashmir Classic was dreamy—houseboat sunsets and Gulmarg views!', avatar: 'user1.jpg' },
  { name: 'Arjun M.', rating: 4, text: 'Ladakh Explorer: Pangong was unreal. Good pacing and permits handled.', avatar: 'user2.jpg' }
];

function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => `
    <article class="card review-card">
      <div class="card-body" style="display:flex; gap:12px; align-items:center;">
        <img src="${r.avatar}" alt="${r.name}" class="avatar" style="width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.2);">
        <div>
          <strong>${r.name}</strong>
          <div class="stars" style="color:#f59e0b;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
          <p style="color:#cbd5e1;">${r.text}</p>
        </div>
      </div>
    </article>`).join('');
}

function handleReviewForm() {
  const form = document.getElementById('reviewForm');
  const status = document.getElementById('reviewStatus');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const rating = Math.max(1, Math.min(5, Number(data.rating || 5)));
    REVIEWS.push({ name: data.name || 'Guest', rating, text: data.text || '', avatar: 'user1.jpg' });
    renderReviews();
    status.textContent = 'Thanks! Your review has been submitted.';
    status.style.color = '#22c55e';
    form.reset();
  });
}

// ====== Contact ======
function handleContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    status.textContent = 'Message sent. We will reply within 24 hours.';
    status.style.color = '#22c55e';
    form.reset();
    console.log('Contact message:', data);
  });
}

// ====== Mobile Nav ======
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    const visible = getComputedStyle(navLinks).display !== 'none';
    navLinks.style.display = visible ? 'none' : 'flex';
  });
}

// ====== Init ======
window.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderPackagesByDestination();
  renderPackageDetail();
  populateBookingSelect();
  handleBookingForm();
  renderReviews();
  handleReviewForm();
  handleContactForm();
  initMobileNav();
});

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
