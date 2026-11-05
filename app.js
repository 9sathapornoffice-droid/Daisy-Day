/**
 * Pastel Flower Catalog - Daisy Day Handmade Flowers
 */

// All 6 Products with Clean Categories (ดอกเดี่ยว, รวมช่อ, ทานตะวัน)
const PRODUCTS = [
  {
    id: 1,
    name: 'Purple Lily',
    nameTh: 'ดอกลิลลี่กำมะหยี่ สีม่วงพาสเทล',
    category: 'single',
    categoryName: 'ดอกเดี่ยว',
    sku: 'SB-001',
    price: 79,
    image: './assets/images/purple-lily.jpg',
    tag: 'ขายดี 💜',
    description: 'ลิลลี่ลวดกำมะหยี่สีม่วงสุดละมุน ประดับเกสรสีขาวและโบว์ผ้าแก้วสีม่วงระยิบระยับ พร้อมแผ่นการ์ด Good Luck เหมาะสำหรับมอบเป็นของขวัญวันสำคัญ',
    meaning: 'ความสง่างาม ความสำเร็จ และความจริงใจ',
    badges: ['งานฝีมือ 100%', 'เก็บได้นานไม่เหี่ยว', 'พร้อมการ์ดของขวัญ']
  },
  {
    id: 2,
    name: 'Pink Lily',
    nameTh: 'ดอกลิลลี่กำมะหยี่ สีชมพูมาเจนต้า',
    category: 'single',
    categoryName: 'ดอกเดี่ยว',
    sku: 'SB-002',
    price: 79,
    image: './assets/images/pink-lily-1.jpg',
    tag: 'ยอดนิยม 🌸',
    description: 'ดอกลิลลี่กำมะหยี่สีชมพูเฉดหวานสดใส ผูกโบว์ริบบิ้นน้ำตาลพรีเมียมสกรีน Just for you สไตล์เรียบหรู น่ารัก มีเสน่ห์ในทุกมุมมอง',
    meaning: 'ความรักที่สดใส ความอบอุ่น และความปรารถนาดี',
    badges: ['งานแฮนด์เมด', 'โบว์ผ้าซาติน', 'การ์ด Good Luck']
  },
  {
    id: 3,
    name: 'Pink Lily (Sparkle Pearl)',
    nameTh: 'ดอกลิลลี่กำมะหยี่ สีชมพูขอบขาว แต่งคริสตัล',
    category: 'single',
    categoryName: 'ดอกเดี่ยว',
    sku: 'SB-003',
    price: 79,
    image: './assets/images/pink-lily-2.jpg',
    tag: 'ดีเทลพิเศษ ✨',
    description: 'ลิลลี่กำมะหยี่สีชมพูหวานแต่งขอบปุยขาว ตกแต่งด้วยคริสตัลดอกไม้ประกายแวววาว ผูกโบว์ Just for you เพิ่มความวิบวับสะดุดตา',
    meaning: 'ความงดงามเปล่งประกาย และความอ่อนหวาน',
    badges: ['คริสตัลวิบวับ', 'งานประณีต', 'แพ็กเกจน่ารัก']
  },
  {
    id: 4,
    name: 'Heart Crystal Lily',
    nameTh: 'ดอกลิลลี่กำมะหยี่ คริสตัลหัวใจ',
    category: 'single',
    categoryName: 'ดอกเดี่ยว',
    sku: 'SB-004',
    price: 89,
    image: './assets/images/heart-crystal-lily.jpg',
    tag: 'รุ่นพรีเมียม 💖',
    description: 'ดอกลิลลี่กำมะหยี่เกรดพรีเมียม ประดับคริสตัลรูปหัวใจสีชมพูและเพชรระยิบระยับ ผูกโบว์ผ้าแก้วสีชมพูหวานละมุน พร้อมการ์ด Good Luck',
    meaning: 'แทนใจด้วยความรักที่บริสุทธิ์และมั่นคง',
    badges: ['คริสตัลหัวใจ', 'โบว์ผ้าแก้วนำเข้า', 'ของขวัญวาเลนไทน์']
  },
  {
    id: 5,
    name: 'Pink Lily & Tulip Bouquet',
    nameTh: 'ช่อลิลลี่ & ทิวลิปชมพูแสนหวาน',
    category: 'bouquet',
    categoryName: 'รวมช่อ',
    sku: 'LB-001',
    price: 189,
    image: './assets/images/pink-lily-tulip-bouquet.jpg',
    tag: 'ช่อของขวัญสุดฮิต 💐',
    description: 'ช่อดอกไม้จัดรวมดอกลิลลี่ชมพู ดอกทิวลิปกำมะหยี่ และดอกเดซี่มินิน่ารัก ห่อด้วยกระดาษเกาหลีสีขาวและผ้าตาข่าย ผูกโบว์ Just for you สุดประณีต',
    meaning: 'การเริ่มต้นใหม่ ความสดใส และความประทับใจไม่รู้ลืม',
    badges: ['ช่อจัดเต็ม', 'ของขวัญรับปริญญา', 'วันเกิด & ครบรอบ']
  },
  {
    id: 6,
    name: 'Sunflower Bouquet',
    nameTh: 'ช่อดอกทานตะวันแสนสดใส',
    category: 'sunflower',
    categoryName: 'ทานตะวัน',
    sku: 'SF-001',
    price: 189,
    image: './assets/images/sunflower-bouquet.jpg',
    tag: 'พลังบวก & ยอดฮิต 🌻',
    description: 'ช่อดอกทานตะวันลวดกำมะหยี่สีเหลืองสดใส ผสานดอกเดซี่มินิและกิ่งใบเขียว ห่อกระดาษเกาหลีสีขาวและผ้าตาข่ายฟู ผูกโบว์ริบบิ้น Just for you สื่อถึงพลังบวกและความสดชื่น',
    meaning: 'ความสุข ความสดชื่น ความหวัง และพลังบวกในทุกวัน',
    badges: ['ช่อซิกเนเจอร์', 'สไตล์เกาหลี', 'มอบให้ได้ทุกโอกาส']
  }
];

// App State
const state = {
  activeCategory: 'all', // 'all', 'single', 'bouquet', 'sunflower'
  viewMode: 'flipbook',
  currentPageIndex: 0,
  flipbookPages: [],
  lineId: localStorage.getItem('flower_shop_line_id') || '@daisyday',
  soundEnabled: true,
  selectedProductForModal: null
};

// Web Audio Paper Sound
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }
  playFlip() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      filter.Q.value = 1.2;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }
}

const sfx = new SoundFX();

// DOM Elements
const elements = {
  bookPagesContainer: document.getElementById('bookPagesContainer'),
  flipbookSection: document.getElementById('flipbookSection'),
  gridSection: document.getElementById('gridSection'),
  gridContainer: document.getElementById('gridContainer'),
  categoryPills: document.querySelectorAll('.category-pill'),
  prevPageBtn: document.getElementById('prevPageBtn'),
  nextPageBtn: document.getElementById('nextPageBtn'),
  pageProgressText: document.getElementById('pageProgressText'),
  pageDotsRow: document.getElementById('pageDotsRow'),
  cornerCurlCue: document.getElementById('cornerCurlCue'),
  toastNotice: document.getElementById('toastNotice'),
  toastMessage: document.getElementById('toastMessage'),
  orderModal: document.getElementById('orderModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalProductImg: document.getElementById('modalProductImg'),
  modalProductTitle: document.getElementById('modalProductTitle'),
  modalProductSku: document.getElementById('modalProductSku'),
  modalProductPrice: document.getElementById('modalProductPrice'),
  previewMessageText: document.getElementById('previewMessageText'),
  currentLineIdText: document.getElementById('currentLineIdText'),
  btnOpenLineDirect: document.getElementById('btnOpenLineDirect'),
  btnCopyLineMsg: document.getElementById('btnCopyLineMsg'),
  editLineIdLink: document.getElementById('editLineIdLink'),
  bottomLineIdPill: document.getElementById('bottomLineIdPill'),
  lightbox: document.getElementById('lightbox'),
  lightboxImg: document.getElementById('lightboxImg'),
  toggleSoundBtn: document.getElementById('toggleSoundBtn'),
  toggleDesktopBtn: document.getElementById('toggleDesktopBtn')
};

// Initialize App
function initApp() {
  updateLineIdDisplays();
  buildFlipbookPages();
  renderGridProducts();
  setupEventListeners();
  setupTouchGestures();
  renderPageDots();
  updateFlipbookView();
}

function getFilteredProducts() {
  if (state.activeCategory === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === state.activeCategory);
}

// Build Flipbook Pages
function buildFlipbookPages() {
  const filtered = getFilteredProducts();
  const pages = [];

  // Page 1: Cover Page
  pages.push({
    type: 'cover',
    title: 'Daisy Day',
    tagline: 'Bloom Happiness ♡',
    subtitle: 'แคตตาล็อกดอกไม้ลวดกำมะหยี่แฮนด์เมด สั่งซื้อง่ายผ่าน LINE',
    logoImg: './assets/images/daisy-day-logo.jpg'
  });

  // Product Pages
  filtered.forEach(prod => {
    pages.push({
      type: 'product',
      data: prod
    });
  });

  // End Page
  pages.push({
    type: 'end',
    title: 'Thank You! 🌸',
    subtitle: 'เลือกช่อที่ถูกใจแล้ว กดสั่งซื้อส่งรายการให้แอดมินทาง LINE ได้เลยนะคะ',
    lineId: state.lineId
  });

  state.flipbookPages = pages;
  state.currentPageIndex = 0;

  renderBookPagesHTML();
  renderPageDots();
  updateFlipbookView();
}

// Render HTML Pages inside Book Container
function renderBookPagesHTML() {
  elements.bookPagesContainer.innerHTML = '';

  state.flipbookPages.forEach((page, index) => {
    const pageEl = document.createElement('div');
    pageEl.className = `book-page ${index === 0 ? 'active' : ''}`;
    pageEl.dataset.pageIndex = index;

    let contentHTML = '';

    if (page.type === 'cover') {
      contentHTML = `
        <div class="cover-page">
          <div class="cover-card-overlay">
            <div class="cover-badge">🌸 HANDMADE FLOWERS</div>
            <div class="cover-logo-hero">
              <img src="${page.logoImg}" alt="Daisy Day Logo" class="cover-logo-img">
            </div>
            <h2 class="cover-title">Daisy Day</h2>
            <div class="cover-tagline">Bloom Happiness ♡</div>
            <p class="cover-subtitle">${page.subtitle}</p>
            <button class="cover-btn-start" onclick="nextPage()">
              <span>เปิดชมแคตตาล็อก</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;
    } else if (page.type === 'product') {
      const p = page.data;
      contentHTML = `
        <div class="page-header-row">
          <span class="page-category-tag">${p.categoryName}</span>
          <span class="page-num">หน้า ${index + 1}/${state.flipbookPages.length}</span>
        </div>
        <div class="product-page-body">
          <div class="product-img-frame" onclick="openLightbox('${p.image}')">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <span class="product-tag-float">${p.tag}</span>
            <span class="product-sku-pill">รหัส: ${p.sku}</span>
          </div>
          <div class="product-info-wrap">
            <div class="title-price-row">
              <h3 class="product-title">${p.name}</h3>
              <div class="product-price-badge">${p.price}฿</div>
            </div>
            <p class="product-desc">${p.description}</p>
            <div class="product-features-row">
              ${p.badges.map(b => `<span class="feature-chip">${b}</span>`).join('')}
            </div>
            <div class="order-btn-group">
              <button class="btn-send-line" onclick="openOrderModal(${p.id})">
                <svg class="btn-line-icon" viewBox="0 0 24 24">
                  <path d="M24 10.3c0-5.18-5.38-9.4-12-9.4S0 5.12 0 10.3c0 4.64 4.27 8.52 10.05 9.24.39.08.93.26 1.06.6.12.31.08.8-.04 1.25l-.47 1.95c-.15.62-.7 2.45 2.15 1.34 2.84-1.11 7.68-4.52 10.48-7.75 1.84-2.12 2.77-4.27 2.77-6.63z"/>
                </svg>
                <span>สั่งซื้อสินค้านี้ผ่าน LINE</span>
              </button>
            </div>
          </div>
        </div>
        <div class="page-shade"></div>
      `;
    } else if (page.type === 'end') {
      contentHTML = `
        <div class="cover-page">
          <div class="cover-card-overlay">
            <img src="./assets/images/daisy-day-logo.jpg" alt="Daisy Day Logo" style="width: 78px; height: 78px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 6px 18px rgba(220, 80, 140, 0.22); margin-bottom: 8px;">
            <h3 style="font-family: 'Fredoka', sans-serif; font-size: 21px; font-weight: 700; color: #d81b60; margin-bottom: 2px;">Daisy Day</h3>
            <div style="font-size: 11.5px; font-weight: 600; color: var(--brand-brown); margin-bottom: 8px;">Bloom Happiness ♡</div>
            <p style="font-size: 11.5px; color: #6b5577; line-height: 1.45; margin-bottom: 14px;">ขอบคุณที่แวะมาชมดอกไม้แฮนด์เมดนะคะ สนใจชิ้นไหนทักแชทสั่งซื้อได้ตลอดเลยค่ะ</p>
            <div style="background: #fff; border: 1.5px dashed #f48fb1; border-radius: 16px; padding: 10px 14px; margin-bottom: 14px; width: 100%;">
              <div style="font-size: 10.5px; color: #837298; margin-bottom: 2px;">LINE ของทางร้าน</div>
              <div style="font-size: 18px; font-weight: 700; color: #06c755; font-family: 'Fredoka', sans-serif;">${state.lineId}</div>
              <div style="font-size: 10px; color: #5a4b6c; margin-top: 3px;">ตอบกลับไว 09:00 - 21:00 น.</div>
            </div>
            <button class="btn-send-line" style="width: 100%;" onclick="openLineDirect()">
              <span>เปิดแชท LINE ทันที</span>
            </button>
            <button class="intro-btn-next" style="margin-top: 10px; border: none; background: transparent; color: #8e24aa; text-decoration: underline; font-size: 12px; cursor: pointer;" onclick="goToPage(0)">
              ↺ กลับไปหน้าแรก
            </button>
          </div>
        </div>
      `;
    }

    pageEl.innerHTML = contentHTML;
    elements.bookPagesContainer.appendChild(pageEl);
  });
}

// Render Page Dots Indicator
function renderPageDots() {
  elements.pageDotsRow.innerHTML = '';
  const total = state.flipbookPages.length;

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = `page-dot ${i === state.currentPageIndex ? 'active' : ''}`;
    dot.addEventListener('click', () => goToPage(i));
    elements.pageDotsRow.appendChild(dot);
  }
}

// Update Flipbook Visual State
function updateFlipbookView() {
  const pages = elements.bookPagesContainer.querySelectorAll('.book-page');
  const total = state.flipbookPages.length;

  pages.forEach((pageEl, idx) => {
    pageEl.classList.remove('active', 'flipped');
    if (idx < state.currentPageIndex) {
      pageEl.classList.add('flipped');
    } else if (idx === state.currentPageIndex) {
      pageEl.classList.add('active');
    }
  });

  elements.prevPageBtn.disabled = state.currentPageIndex === 0;
  elements.nextPageBtn.disabled = state.currentPageIndex >= total - 1;
  elements.pageProgressText.textContent = `${state.currentPageIndex + 1} / ${total}`;

  const dots = elements.pageDotsRow.querySelectorAll('.page-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === state.currentPageIndex);
  });
}

function nextPage() {
  if (state.currentPageIndex < state.flipbookPages.length - 1) {
    sfx.playFlip();
    state.currentPageIndex++;
    updateFlipbookView();
  }
}

function prevPage() {
  if (state.currentPageIndex > 0) {
    sfx.playFlip();
    state.currentPageIndex--;
    updateFlipbookView();
  }
}

function goToPage(index) {
  if (index >= 0 && index < state.flipbookPages.length && index !== state.currentPageIndex) {
    sfx.playFlip();
    state.currentPageIndex = index;
    updateFlipbookView();
  }
}

// Touch Gestures
function setupTouchGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  const bookEl = document.querySelector('.book-wrapper');

  bookEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  bookEl.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  }, { passive: true });
}

// Render Products in Grid Mode
function renderGridProducts() {
  elements.gridContainer.innerHTML = '';
  const filtered = getFilteredProducts();

  filtered.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'grid-product-card';
    card.innerHTML = `
      <div class="grid-img-wrap" onclick="openLightbox('${prod.image}')">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        <span class="product-tag-float" style="font-size: 9px; padding: 2px 6px;">${prod.tag}</span>
      </div>
      <div class="grid-sku">${prod.sku} • ${prod.categoryName}</div>
      <h4 class="grid-title">${prod.name}</h4>
      <div class="grid-price-row">
        <span class="grid-price">${prod.price}฿</span>
        <button class="grid-btn-line" onclick="openOrderModal(${prod.id})" title="สั่งซื้อทาง LINE">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M24 10.3c0-5.18-5.38-9.4-12-9.4S0 5.12 0 10.3c0 4.64 4.27 8.52 10.05 9.24.39.08.93.26 1.06.6.12.31.08.8-.04 1.25l-.47 1.95c-.15.62-.7 2.45 2.15 1.34 2.84-1.11 7.68-4.52 10.48-7.75 1.84-2.12 2.77-4.27 2.77-6.63z"/>
          </svg>
          <span>สั่งซื้อ</span>
        </button>
      </div>
    `;
    elements.gridContainer.appendChild(card);
  });
}

// Set Category Filter
function setCategory(catKey) {
  state.activeCategory = catKey;

  elements.categoryPills.forEach(pill => {
    pill.classList.toggle('active', pill.dataset.category === catKey);
  });

  buildFlipbookPages();
  renderGridProducts();

  const labels = {
    all: 'ทั้งหมด',
    single: 'ดอกเดี่ยว',
    bouquet: 'รวมช่อ',
    sunflower: 'ทานตะวัน'
  };
  showToast(`หมวดหมู่: ${labels[catKey] || 'ทั้งหมด'}`);
}

// Switch View Mode
function setViewMode(mode) {
  state.viewMode = mode;
  const isFlip = mode === 'flipbook';

  elements.flipbookSection.style.display = isFlip ? 'flex' : 'none';
  elements.gridSection.classList.toggle('active', !isFlip);

  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === mode);
  });
}

// LINE Order Message Composer
function composeLineMessage(product) {
  return `สวัสดีค่ะ สนใจสั่งซื้อดอกไม้จากร้าน Daisy Day 🌸
━━━━━━━━━━━━━━━━
🛍️ สินค้า: ${product.name} (${product.nameTh})
🏷️ รหัสสินค้า (SKU): ${product.sku}
💰 ราคา: ${product.price} บาท
📂 หมวดหมู่: ${product.categoryName}
━━━━━━━━━━━━━━━━
✨ ต้องการสั่งซื้อชิ้นนี้ค่ะ รบกวนแจ้งรอบจัดส่งให้หน่อยนะคะ ขอบคุณค่ะ 🙏`;
}

// Open Order Modal for Single Product
function openOrderModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductForModal = product;

  elements.modalProductImg.src = product.image;
  elements.modalProductTitle.textContent = product.name;
  elements.modalProductSku.textContent = `รหัส: ${product.sku} (${product.categoryName})`;
  elements.modalProductPrice.textContent = `${product.price}฿`;

  const msg = composeLineMessage(product);
  elements.previewMessageText.textContent = msg;

  elements.orderModal.classList.add('active');
}

function closeOrderModal() {
  elements.orderModal.classList.remove('active');
  state.selectedProductForModal = null;
}

// Send to LINE
function sendOrderToLine() {
  if (!state.selectedProductForModal) return;

  const product = state.selectedProductForModal;
  const rawMsg = composeLineMessage(product);
  const encodedMsg = encodeURIComponent(rawMsg);
  const cleanLineId = state.lineId.replace(/^@/, '');

  const lineUrl = `https://line.me/R/oaMessage/@${cleanLineId}/?${encodedMsg}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(rawMsg).catch(() => {});
  }

  showToast('กำลังเปิดห้องแชท LINE ร้าน Daisy Day...');
  setTimeout(() => {
    window.open(lineUrl, '_blank');
  }, 300);
}

// Copy Message Button
function copyOrderMessage() {
  if (!state.selectedProductForModal) return;
  const msg = composeLineMessage(state.selectedProductForModal);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(msg).then(() => {
      showToast('📋 คัดลอกข้อความสั่งซื้อสำเร็จแล้ว!');
    }).catch(() => {
      fallbackCopyText(msg);
    });
  } else {
    fallbackCopyText(msg);
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast('📋 คัดลอกข้อความสั่งซื้อแล้ว');
}

function openLineDirect() {
  const cleanLineId = state.lineId.replace(/^@/, '');
  window.open(`https://line.me/R/ti/p/@${cleanLineId}`, '_blank');
}

function promptEditLineId() {
  const current = state.lineId;
  const newId = prompt('ระบุ LINE ID ของร้าน Daisy Day (ตัวอย่าง: @daisyday):', current);
  if (newId && newId.trim() !== '') {
    state.lineId = newId.trim().startsWith('@') ? newId.trim() : `@${newId.trim()}`;
    localStorage.setItem('flower_shop_line_id', state.lineId);
    updateLineIdDisplays();
    showToast(`อัปเดต LINE ID เป็น ${state.lineId} เรียบร้อยแล้ว`);
    buildFlipbookPages();
  }
}

function updateLineIdDisplays() {
  elements.currentLineIdText.textContent = state.lineId;
  elements.bottomLineIdPill.textContent = `LINE: ${state.lineId}`;
}

function openLightbox(imgSrc) {
  elements.lightboxImg.src = imgSrc;
  elements.lightbox.classList.add('active');
}

function closeLightbox() {
  elements.lightbox.classList.remove('active');
}

let toastTimer = null;
function showToast(msg) {
  elements.toastMessage.textContent = msg;
  elements.toastNotice.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toastNotice.classList.remove('show');
  }, 2600);
}

function setupEventListeners() {
  // Category Pill Clicks
  elements.categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      setCategory(pill.dataset.category);
    });
  });

  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setViewMode(btn.dataset.view);
    });
  });

  elements.nextPageBtn.addEventListener('click', nextPage);
  elements.prevPageBtn.addEventListener('click', prevPage);
  elements.cornerCurlCue.addEventListener('click', nextPage);

  window.addEventListener('keydown', (e) => {
    if (state.viewMode === 'flipbook') {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    }
    if (e.key === 'Escape') {
      closeOrderModal();
      closeLightbox();
    }
  });

  elements.modalCloseBtn.addEventListener('click', closeOrderModal);
  elements.orderModal.addEventListener('click', (e) => {
    if (e.target === elements.orderModal) closeOrderModal();
  });

  elements.btnOpenLineDirect.addEventListener('click', sendOrderToLine);
  elements.btnCopyLineMsg.addEventListener('click', copyOrderMessage);
  elements.editLineIdLink.addEventListener('click', promptEditLineId);
  elements.bottomLineIdPill.addEventListener('click', promptEditLineId);

  elements.lightbox.addEventListener('click', closeLightbox);

  elements.toggleSoundBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    elements.toggleSoundBtn.textContent = state.soundEnabled ? '🔊' : '🔇';
    showToast(state.soundEnabled ? 'เปิดเสียงเอฟเฟกต์สมุด' : 'ปิดเสียงเอฟเฟกต์');
  });

  elements.toggleDesktopBtn.addEventListener('click', () => {
    const container = document.querySelector('.app-container');
    container.classList.toggle('desktop-mode');
    const isDesktop = container.classList.contains('desktop-mode');
    elements.toggleDesktopBtn.textContent = isDesktop ? '📱' : '💻';
    showToast(isDesktop ? 'ขยายหน้าจอมุมมองกว้าง' : 'มุมมองหน้าจอมือถือ (Mobile View)');
  });

  createFloatingPetals();
}

function createFloatingPetals() {
  const container = document.getElementById('petalCanvas');
  if (!container) return;
  const count = 16;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 12}s`;
    petal.style.animationDuration = `${10 + Math.random() * 8}s`;
    petal.style.opacity = `${0.3 + Math.random() * 0.5}`;
    petal.style.width = `${10 + Math.random() * 10}px`;
    petal.style.height = `${10 + Math.random() * 10}px`;
    container.appendChild(petal);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
