
// ============================================================================
// DAISY DAY - COMPREHENSIVE STOREFRONT & ADMIN STUDIO LOGIC
// ============================================================================

// Default Shop Configuration
const DEFAULT_SHOP_CONFIG = {
    "lineId":  "@ptj5061o",
    "banner":  "assets/images/daisy-day-banner.jpg",
    "name":  "Daisy Day",
    "logo":  "assets/images/daisy-day-logo.jpg",
    "tagline":  "Handmade Flowers • Bloom Happiness ♡"
};

// Default Categories
const DEFAULT_CATEGORIES = [
    {
        "icon":  "🌷",
        "name":  "ดอกเดี่ยว",
        "id":  "single"
    },
    {
        "icon":  "💐",
        "name":  "รวมช่อ",
        "id":  "bouquet"
    }
];

// Default 6 Products
const DEFAULT_PRODUCTS = [
    {
        "image":  "https://9sathapornoffice-droid.github.io/Daisy-Day/assets/images/purple-lily.jpg",
        "sku":  "SB-001",
        "id":  1,
        "price":  79,
        "category":  "single",
        "description":  "ลิลลี่ลวดกำมะหยี่สีม่วงสุดละมุน ประดับเกสรสีขาวและโบว์ผ้าแก้วสีม่วงระยิบระยับ พร้อมแผ่นการ์ด Good Luck เหมาะสำหรับมอบเป็นของขวัญวันสำคัญ",
        "name":  "Purple Lily",
        "tag":  "ขายดี 💜",
        "badges":  [
                       "งานฝีมือ 100%",
                       "เก็บได้นานไม่เหี่ยว",
                       "พร้อมการ์ดของขวัญ"
                   ],
        "nameTh":  "ดอกลิลลี่กำมะหยี่ สีม่วงพาสเทล",
        "meaning":  "ความสง่างาม ความสำเร็จ และความจริงใจ"
    },
    {
        "image":  "https://9sathapornoffice-droid.github.io/Daisy-Day/assets/images/pink-lily-1.jpg",
        "sku":  "SB-002",
        "id":  2,
        "price":  79,
        "category":  "single",
        "description":  "ดอกลิลลี่กำมะหยี่สีชมพูเฉดหวานสดใส ผูกโบว์ริบบิ้นน้ำตาลพรีเมียมสกรีน Just for you สไตล์เรียบหรู น่ารัก มีเสน่ห์ในทุกมุมมอง",
        "name":  "Pink Lily",
        "tag":  "ยอดนิยม 🌸",
        "badges":  [
                       "งานแฮนด์เมด",
                       "โบว์ผ้าซาติน",
                       "การ์ด Good Luck"
                   ],
        "nameTh":  "ดอกลิลลี่กำมะหยี่ สีชมพูมาเจนต้า",
        "meaning":  "ความรักที่สดใส ความอบอุ่น และความปรารถนาดี"
    },
    {
        "id":  8,
        "name":  "Magenta Crystal Lily",
        "nameTh":  "ดอกลิลลี่กำมะหยี่ คริสตัลบานเย็น",
        "sku":  "SB-008",
        "price":  89,
        "category":  "single",
        "tag":  "สินค้าใหม่ ✨",
        "description":  "ดอกลิลลี่กำมะหยี่เกรดพรีเมียมสีบานเย็นสดใสสะดุดตา ประดับคริสตัลและเพชรระยิบระยับเล่นแสงสวยงาม ผูกโบว์ผ้าแก้วสีชมพูหวานละมุน พร้อมการ์ด Good Luck",
        "meaning":  "มอบความสุขและความสดใส",
        "badges":  [
                       "แฮนด์เมด",
                       "พร้อมส่ง"
                   ],
        "image":  "assets/images/magenta-crystal-lily.jpg"
    },
    {
        "image":  "https://9sathapornoffice-droid.github.io/Daisy-Day/assets/images/pink-lily-2.jpg",
        "sku":  "SB-003",
        "id":  3,
        "price":  89,
        "category":  "single",
        "description":  "ลิลลี่กำมะหยี่สีชมพูหวานแต่งขอบปุยขาว ตกแต่งด้วยคริสตัลดอกไม้ประกายแวววาว ผูกโบว์ Just for you เพิ่มความวิบวับสะดุดตา",
        "name":  "Pink Lily (Sparkle Pearl)",
        "tag":  "ดีเทลพิเศษ ✨",
        "badges":  [
                       "คริสตัลวิบวับ",
                       "งานประณีต",
                       "แพ็กเกจน่ารัก"
                   ],
        "nameTh":  "ดอกลิลลี่กำมะหยี่ สีชมพูขอบขาว แต่งคริสตัล",
        "meaning":  "ความงดงามเปล่งประกาย และความอ่อนหวาน"
    },
    {
        "image":  "https://9sathapornoffice-droid.github.io/Daisy-Day/assets/images/heart-crystal-lily.jpg",
        "sku":  "SB-004",
        "id":  4,
        "price":  89,
        "category":  "single",
        "description":  "ดอกลิลลี่กำมะหยี่เกรดพรีเมียม ประดับคริสตัลรูปหัวใจสีชมพูและเพชรระยิบระยับ ผูกโบว์ผ้าแก้วสีชมพูหวานละมุน พร้อมการ์ด Good Luck",
        "name":  "Heart Crystal Lily",
        "tag":  "รุ่นพรีเมียม 💖",
        "badges":  [
                       "คริสตัลหัวใจ",
                       "โบว์ผ้าแก้วนำเข้า",
                       "ของขวัญวาเลนไทน์"
                   ],
        "nameTh":  "ดอกลิลลี่กำมะหยี่ คริสตัลหัวใจ",
        "meaning":  "แทนใจด้วยความรักที่บริสุทธิ์และมั่นคง"
    },
    {
        "id":  9,
        "name":  "Sunny Crystal Sunflower",
        "nameTh":  "ดอกทานตะวันกำมะหยี่แต่งคริสตัล",
        "sku":  "SB-009",
        "price":  109,
        "category":  "single",
        "tag":  "ขายดี 🌻",
        "description":  "ดอกทานตะวันกำมะหยี่เกรดพรีเมียมสีเหลืองสดใส เกสรสีน้ำตาลเข้มละมุน ประดับคริสตัลและเพชรระยิบระยับเล่นแสงสวยงาม ผูกโบว์ผ้าสีน้ำตาลเข้มตัดกับตัวดอกได้อย่างลงตัว หรูหรา พร้อมการ์ด Good Luck",
        "meaning":  "มอบความสุขและความสดใส",
        "badges":  [
                       "แฮนด์เมด",
                       "พร้อมส่ง"
                   ],
        "image":  "assets/images/sunny-crystal-sunflower.jpg"
    },
    {
        "image":  "https://9sathapornoffice-droid.github.io/Daisy-Day/assets/images/pink-lily-tulip-bouquet.jpg",
        "sku":  "LB-001",
        "id":  5,
        "price":  189,
        "category":  "bouquet",
        "description":  "ช่อดอกไม้จัดรวมดอกลิลลี่ชมพู ดอกทิวลิปกำมะหยี่ และดอกเดซี่มินิน่ารัก ห่อด้วยกระดาษเกาหลีสีขาวและผ้าตาข่าย ผูกโบว์ Just for you สุดประณีต",
        "name":  "Pink Lily \u0026 Tulip Bouquet",
        "tag":  "ช่อของขวัญสุดฮิต 💐",
        "badges":  [
                       "ช่อจัดเต็ม",
                       "ของขวัญรับปริญญา",
                       "วันเกิด \u0026 ครบรอบ"
                   ],
        "nameTh":  "ช่อลิลลี่ \u0026 ทิวลิปชมพูแสนหวาน",
        "meaning":  "การเริ่มต้นใหม่ ความสดใส และความประทับใจไม่รู้ลืม"
    },
    {
        "id":  7,
        "name":  "Purple Lily\u0026Tulip",
        "nameTh":  "ลิลลี่\u0026ทิวลิปสีม่วง",
        "sku":  "SB-007",
        "price":  189,
        "category":  "bouquet",
        "tag":  "สินค้าใหม่ ✨",
        "description":  "",
        "meaning":  "มอบความสุขและความสดใส",
        "badges":  [
                       "แฮนด์เมด",
                       "พร้อมส่ง"
                   ],
        "image":  "assets/images/purple-lily-tulip.jpg"
    },
    {
        "image":  "https://9sathapornoffice-droid.github.io/Daisy-Day/assets/images/sunflower-bouquet.jpg",
        "sku":  "SF-001",
        "id":  6,
        "price":  189,
        "category":  "bouquet",
        "description":  "ช่อดอกทานตะวันลวดกำมะหยี่สีเหลืองสดใส ผสานดอกเดซี่มินิและกิ่งใบเขียว ห่อกระดาษเกาหลีสีขาวและผ้าตาข่ายฟู ผูกโบว์ริบบิ้น Just for you สื่อถึงพลังบวกและความสดชื่น",
        "name":  "Sunflower Bouquet",
        "tag":  "พลังบวก \u0026 ยอดฮิต 🌻",
        "badges":  [
                       "ช่อซิกเนเจอร์",
                       "สไตล์เกาหลี",
                       "มอบให้ได้ทุกโอกาส"
                   ],
        "nameTh":  "ช่อดอกทานตะวันแสนสดใส",
        "meaning":  "ความสุข ความสดชื่น ความหวัง และพลังบวกในทุกวัน"
    },
    {
        "id":  10,
        "name":  "tt",
        "nameTh":  "tt",
        "sku":  "SB-010",
        "price":  79,
        "category":  "single",
        "tag":  "สินค้าใหม่ ✨",
        "description":  "",
        "meaning":  "มอบความสุขและความสดใส",
        "badges":  [
                       "แฮนด์เมด",
                       "พร้อมส่ง"
                   ],
        "image":  "assets/images/untitled-design--1--1794228985715.jpg"
    }
];

// Helper to safely load data from LocalStorage
function loadStoredData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed && (Array.isArray(fallback) ? Array.isArray(parsed) : typeof parsed === 'object') ? parsed : fallback;
  } catch (e) {
    console.warn(`LocalStorage read error for ${key}:`, e);
    return fallback;
  }
}

// Active State
let shopConfig = loadStoredData('daisy_shop_config_v2', DEFAULT_SHOP_CONFIG);

// Auto-migrate lineId to @ptj5061o if missing or set to old @daisyday
if (!shopConfig.lineId || shopConfig.lineId === '@daisyday') {
  shopConfig.lineId = '@ptj5061o';
  try {
    localStorage.setItem('daisy_shop_config_v2', JSON.stringify(shopConfig));
  } catch (e) {}
}

// GitHub Pages public image repository (used for rich image cards in LINE chat)
const GITHUB_ASSETS_BASE = 'https://9sathapornoffice-droid.github.io/Daisy-Day/assets/images/';

const PRODUCT_IMAGE_MAP = {
  1: 'purple-lily.jpg',
  2: 'pink-lily-1.jpg',
  3: 'pink-lily-2.jpg',
  4: 'heart-crystal-lily.jpg',
  5: 'pink-lily-tulip-bouquet.jpg',
  6: 'sunflower-bouquet.jpg'
};

function getProductPublicImageUrl(product) {
  if (!product) return '';
  const img = product.image ? product.image.trim() : '';
  if (!img) return '';

  // 1. Direct absolute URL
  if (img.startsWith('http://') || img.startsWith('https://')) {
    return img;
  }

  // 2. Relative asset path (e.g. assets/images/xxx.jpg or ./assets/images/xxx.jpg)
  if (img.startsWith('assets/') || img.startsWith('./assets/')) {
    const cleanPath = img.replace(/^\.?\//, '');
    return 'https://9sathapornoffice-droid.github.io/Daisy-Day/' + cleanPath;
  }

  // 3. Fallback map
  if (product.id && PRODUCT_IMAGE_MAP[product.id]) {
    return GITHUB_ASSETS_BASE + PRODUCT_IMAGE_MAP[product.id];
  }

  // 4. Filename only (e.g. purple-lily.jpg)
  if (img.endsWith('.jpg') || img.endsWith('.png') || img.endsWith('.webp')) {
    const fileName = img.split('/').pop();
    return GITHUB_ASSETS_BASE + fileName;
  }

  return '';
}

// Ensure logo and banner are populated from IMAGES if missing or empty
if (!shopConfig.banner || shopConfig.banner.trim() === '') {
  shopConfig.banner = (typeof IMAGES !== 'undefined' && IMAGES.banner) ? IMAGES.banner : '';
}
if (!shopConfig.logo || shopConfig.logo.trim() === '') {
  shopConfig.logo = (typeof IMAGES !== 'undefined' && IMAGES.logo) ? IMAGES.logo : '';
}
let categories = loadStoredData('daisy_categories_v2', DEFAULT_CATEGORIES);
let products = loadStoredData('daisy_products_v2', DEFAULT_PRODUCTS);

const state = {
  activeCategory: 'all',
  viewMode: 'flipbook',
  currentPageIndex: 0,
  flipbookPages: [],
  soundEnabled: true,
  selectedProductForModal: null,
  currentEditorImageBase64: ''
};

// Web Audio Paper Sound Effect
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

// Category Helper
function getCategoryName(catId) {
  const c = categories.find(item => item.id === catId);
  return c ? c.name : 'ทั่วไป';
}

// Filter Products
function getFilteredProducts() {
  if (state.activeCategory === 'all') return products;
  return products.filter(p => p.category === state.activeCategory);
}

// Update Shop Info Across the App
function updateShopDisplays() {
  const shopTitle = document.getElementById('headerShopTitle');
  const shopTagline = document.getElementById('headerShopTagline');
  const brandLogo = document.getElementById('brandLogoImg');
  const modalLogo = document.getElementById('modalLogoMini');
  const currentLineIdText = document.getElementById('currentLineIdText');
  const bottomLineText = document.getElementById('bottomLineText');
  const previewLabel = document.getElementById('previewMessageLabel');

  const logoSrc = shopConfig.logo || (typeof IMAGES !== 'undefined' ? IMAGES.logo : '');

  if (shopTitle) shopTitle.textContent = shopConfig.name;
  if (shopTagline) shopTagline.textContent = shopConfig.tagline;
  if (brandLogo && logoSrc) brandLogo.src = logoSrc;
  if (modalLogo && logoSrc) modalLogo.src = logoSrc;
  if (currentLineIdText) currentLineIdText.textContent = shopConfig.lineId;
  if (bottomLineText) bottomLineText.textContent = `LINE: ${shopConfig.lineId}`;
  if (previewLabel) previewLabel.textContent = `ข้อความที่จะส่งไปยัง LINE ร้าน (${shopConfig.lineId}):`;
}

// Render Dynamic Category Navigation Bar
function renderCategoryNav() {
  const container = document.getElementById('categoryScrollContainer');
  if (!container) return;

  let html = `
    <button class="category-pill ${state.activeCategory === 'all' ? 'active' : ''}" data-category="all">
      <span class="pill-icon">✨</span>
      <span>ทั้งหมด (All)</span>
    </button>
  `;

  categories.forEach(cat => {
    const isActive = state.activeCategory === cat.id ? 'active' : '';
    html += `
      <button class="category-pill ${isActive}" data-category="${cat.id}">
        <span class="pill-icon">${cat.icon || '🌸'}</span>
        <span>${cat.name}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      setCategory(pill.dataset.category);
    });
  });
}

// Set Category Filter
function setCategory(catKey) {
  state.activeCategory = catKey;
  renderCategoryNav();
  buildFlipbookPages();
  renderGridProducts();

  const activePill = document.querySelector(`.category-pill[data-category="${catKey}"]`);
  if (activePill) {
    activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

// Build Flipbook Pages
function buildFlipbookPages() {
  const filtered = getFilteredProducts();
  const pages = [];

  const logoSrc = shopConfig.logo || (typeof IMAGES !== 'undefined' ? IMAGES.logo : '');
  const bannerSrc = shopConfig.banner || (typeof IMAGES !== 'undefined' ? IMAGES.banner : '');

  // 1. Cover Page
  pages.push({
    type: 'cover',
    title: shopConfig.name,
    tagline: 'Bloom Happiness ♡',
    subtitle: 'แคตตาล็อกดอกไม้ลวดกำมะหยี่แฮนด์เมด สั่งซื้อง่ายผ่าน LINE',
    logoImg: logoSrc,
    bannerImg: bannerSrc
  });

  // 2. Product Pages
  filtered.forEach(prod => {
    pages.push({
      type: 'product',
      data: prod
    });
  });

  // 3. End Page
  pages.push({
    type: 'end',
    title: 'Thank You! 🌸',
    subtitle: 'เลือกช่อที่ถูกใจแล้ว กดสั่งซื้อส่งรายการให้แอดมินทาง LINE ได้เลยนะคะ',
    lineId: shopConfig.lineId,
    logoImg: logoSrc,
    bannerImg: bannerSrc
  });

  state.flipbookPages = pages;
  state.currentPageIndex = 0;

  renderBookPagesHTML();
  renderPageDots();
  updateFlipbookView();
}

// Render HTML Pages inside Book Container
function renderBookPagesHTML() {
  const container = document.getElementById('bookPagesContainer');
  if (!container) return;
  container.innerHTML = '';

  state.flipbookPages.forEach((page, index) => {
    const pageEl = document.createElement('div');
    pageEl.className = `book-page ${index === 0 ? 'active current' : ''}`;
    pageEl.dataset.pageIndex = index;

    if (page.type === 'cover') {
      const bgStyle = page.bannerImg ? `background-image: url('${page.bannerImg}'); background-size: cover; background-position: center; background-repeat: no-repeat;` : '';
      pageEl.innerHTML = `
        <div class="cover-page" style="${bgStyle}">
          <div class="cover-card-overlay">
            <div class="cover-badge">🌸 HANDMADE FLOWERS</div>
            <div class="cover-logo-hero">
              <img src="${page.logoImg}" alt="Daisy Day Logo" class="cover-logo-img">
            </div>
            <h2 class="cover-title">${page.title}</h2>
            <div class="cover-tagline">${page.tagline}</div>
            <p class="cover-subtitle">${page.subtitle}</p>
            <button class="cover-btn-start" onclick="nextPage()">
              <span>เปิดชมแคตตาล็อก</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      `;
    } else if (page.type === 'product') {
      const p = page.data;
      const catDisplayName = getCategoryName(p.category);
      pageEl.innerHTML = `
        <div class="page-header-row" style="padding: 10px 16px 4px; display: flex; justify-content: space-between; align-items: center;">
          <span class="page-category-tag" style="background: #fdf2f6; color: #b73d6f; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">${catDisplayName}</span>
          <span class="page-num" style="font-size: 11px; color: #8e7a9e;">${index + 1}/${state.flipbookPages.length}</span>
        </div>
        <div class="product-page-body">
          <div class="product-img-frame" onclick="openLightbox('${p.image}')" title="แตะเพื่อดูรูปขยาย">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <span class="product-tag-float">${p.tag || '🌸 แนะนำ'}</span>
            <span class="product-sku-pill">รหัส: ${p.sku}</span>
          </div>
          <div class="product-info-wrap">
            <div class="title-price-row">
              <div>
                <h3 class="product-title">${p.name}</h3>
                ${p.nameTh ? `<div style="font-size: 11.5px; color: #7b628a; margin-top: 1px;">${p.nameTh}</div>` : ''}
              </div>
              <div class="product-price-badge">${p.price}฿</div>
            </div>
            ${p.description ? `<p class="product-desc">${p.description}</p>` : ''}
            ${p.meaning ? `
              <div style="font-size: 11px; color: #8e24aa; background: #faf5fc; padding: 4px 8px; border-radius: 8px; margin-top: 2px;">
                💌 <strong>ความหมาย:</strong> ${p.meaning}
              </div>
            ` : ''}
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
      `;
    } else if (page.type === 'end') {
      const bgStyle = page.bannerImg ? `background-image: url('${page.bannerImg}'); background-size: cover; background-position: center; background-repeat: no-repeat;` : '';
      pageEl.innerHTML = `
        <div class="cover-page" style="${bgStyle}">
          <div class="cover-card-overlay">
            <div class="cover-badge">🌸 DAISY DAY</div>
            <div style="font-size: 38px; margin-bottom: 8px;">🌸</div>
            <h2 class="cover-title">${page.title}</h2>
            <p class="cover-subtitle" style="margin-bottom: 20px;">${page.subtitle}</p>
            <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
              <button class="btn-send-line" onclick="openLineDirect()">
                <svg class="btn-line-icon" viewBox="0 0 24 24"><path d="M24 10.3c0-5.18-5.38-9.4-12-9.4S0 5.12 0 10.3c0 4.64 4.27 8.52 10.05 9.24.39.08.93.26 1.06.6.12.31.08.8-.04 1.25l-.47 1.95c-.15.62-.7 2.45 2.15 1.34 2.84-1.11 7.68-4.52 10.48-7.75 1.84-2.12 2.77-4.27 2.77-6.63z"/></svg>
                <span>ทักแชท LINE ร้าน</span>
              </button>
              <button class="cover-btn-start" onclick="goToPage(0)" style="background: #f4ecf9; color: #7b4eb2; box-shadow: none; padding: 10px 20px; font-size: 13px;">
                <span>↺ กลับไปหน้าแรก</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    container.appendChild(pageEl);
  });
}

// Update 3D Book Page Transforms
function updateFlipbookView() {
  const pageEls = document.querySelectorAll('.book-page');
  const total = state.flipbookPages.length;
  const current = state.currentPageIndex;

  pageEls.forEach((el, index) => {
    el.classList.remove('active', 'current', 'flipped');

    if (index < current) {
      el.classList.add('flipped');
      el.style.zIndex = index + 1;
    } else if (index === current) {
      el.classList.add('active', 'current');
      el.style.zIndex = total + 5;
    } else {
      el.style.zIndex = total - index;
    }
  });

  const progressText = document.getElementById('pageProgressText');
  if (progressText) {
    progressText.textContent = `${current + 1} / ${total}`;
  }

  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  if (prevBtn) prevBtn.disabled = current === 0;
  if (nextBtn) nextBtn.disabled = current >= total - 1;

  document.querySelectorAll('.page-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === current);
  });

  const cornerCue = document.getElementById('cornerCurlCue');
  if (cornerCue) {
    cornerCue.style.display = current >= total - 1 ? 'none' : 'flex';
  }
}

// Flip Controls
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
  if (index >= 0 && index < state.flipbookPages.length) {
    sfx.playFlip();
    state.currentPageIndex = index;
    updateFlipbookView();
  }
}

// Render Page Dots Indicator
function renderPageDots() {
  const dotsContainer = document.getElementById('pageDotsRow');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  state.flipbookPages.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `page-dot ${idx === state.currentPageIndex ? 'active' : ''}`;
    dot.addEventListener('click', () => goToPage(idx));
    dotsContainer.appendChild(dot);
  });
}

// Render Grid Products Section
function renderGridProducts() {
  const container = document.getElementById('gridContainer');
  if (!container) return;
  const filtered = getFilteredProducts();
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: #8e7a9e;">
        <div style="font-size: 32px; margin-bottom: 8px;">🌸</div>
        <p>ยังไม่มีรายการสินค้าในหมวดหมู่นี้</p>
      </div>
    `;
    return;
  }

  filtered.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'grid-product-card';
    card.innerHTML = `
      <div class="grid-img-wrap" onclick="openLightbox('${prod.image}')">
        <img src="${prod.image}" alt="${prod.name}" class="grid-img" loading="lazy">
        <span class="grid-tag">${prod.tag || '🌸'}</span>
      </div>
      <div class="grid-body">
        <h4 class="grid-title">${prod.name}</h4>
        ${prod.nameTh ? `<div style="font-size: 11px; color: #7b6a8e; margin-bottom: 4px;">${prod.nameTh}</div>` : ''}
        <div class="grid-sku">${prod.sku} • ${getCategoryName(prod.category)}</div>
        <div class="grid-price-row">
          <div class="grid-price">${prod.price}฿</div>
        </div>
        <button class="grid-btn-order" onclick="openOrderModal(${prod.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M24 10.3c0-5.18-5.38-9.4-12-9.4S0 5.12 0 10.3c0 4.64 4.27 8.52 10.05 9.24.39.08.93.26 1.06.6.12.31.08.8-.04 1.25l-.47 1.95c-.15.62-.7 2.45 2.15 1.34 2.84-1.11 7.68-4.52 10.48-7.75 1.84-2.12 2.77-4.27 2.77-6.63z"/>
          </svg>
          <span>สั่งซื้อผ่าน LINE</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Order Modal Logic
function openOrderModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  state.selectedProductForModal = prod;

  const modalImg = document.getElementById('modalProductImg');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalSku = document.getElementById('modalProductSku');
  const modalPrice = document.getElementById('modalProductPrice');
  const msgPreview = document.getElementById('previewMessageText');
  const previewLabel = document.getElementById('previewMessageLabel');
  const currentLineIdText = document.getElementById('currentLineIdText');
  const modal = document.getElementById('orderModal');

  if (modalImg) modalImg.src = prod.image;
  if (modalTitle) modalTitle.textContent = prod.name;
  if (modalSku) modalSku.textContent = `รหัส: ${prod.sku} (${getCategoryName(prod.category)})`;
  if (modalPrice) modalPrice.textContent = `${prod.price}฿`;
  if (currentLineIdText) currentLineIdText.textContent = shopConfig.lineId;
  if (previewLabel) previewLabel.textContent = `ข้อความที่จะส่งไปยัง LINE ร้าน (${shopConfig.lineId}):`;

  const orderMsg = generateLineMessage(prod);
  if (msgPreview) msgPreview.textContent = orderMsg;

  if (modal) modal.classList.add('active', 'open');
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) modal.classList.remove('active', 'open');
  state.selectedProductForModal = null;
}

function generateLineMessage(product) {
  const catName = getCategoryName(product.category);
  const imgUrl = getProductPublicImageUrl(product);
  const imgLine = imgUrl ? `\n🖼️ ลิงก์รูปสินค้า: ${imgUrl}` : '';

  return `สวัสดีค่ะ สนใจสั่งซื้อสินค้าตัวนี้ค่ะ 🌸
------------------------
🛍️ รายการ: ${product.name} ${product.nameTh ? `(${product.nameTh})` : ''}
🏷️ รหัสสินค้า: ${product.sku}
💰 ราคา: ${product.price} บาท
📂 หมวดหมู่: ${catName}${imgLine}
🌐 แคตตาล็อก: https://9sathapornoffice-droid.github.io/Daisy-Day/
------------------------
ต้องการสอบถามข้อมูลเพิ่มเติม / พร้อมสั่งซื้อค่ะ ✨`;
}

function sendOrderToLine() {
  if (!state.selectedProductForModal) return;
  const prod = state.selectedProductForModal;
  const msg = generateLineMessage(prod);
  
  let lineId = shopConfig.lineId || '@ptj5061o';
  if (!lineId.startsWith('@')) lineId = '@' + lineId;
  const cleanId = lineId.replace(/^@/, '');
  const encodedMsg = encodeURIComponent(msg);

  // Auto-copy text message to clipboard as backup
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(msg).catch(() => {});
    }
  } catch (e) {}

  // Open LINE Official Account 1-on-1 chat with prefilled message
  const lineUrl = `https://line.me/R/oaMessage/%40${cleanId}/?${encodedMsg}`;
  window.open(lineUrl, '_blank');
  showToast(`เปิดแชท LINE ${lineId} เรียบร้อยค่ะ 🌸`);
}

function copyOrderMessage() {
  if (!state.selectedProductForModal) return;
  const msg = generateLineMessage(state.selectedProductForModal);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msg).then(() => {
      showToast('คัดลอกข้อความและลิงก์รูปภาพแล้ว นำไปวางใน LINE ได้เลยค่ะ 📋');
    }).catch(() => {
      showToast('คัดลอกข้อความสำเร็จ 📋');
    });
  }
}

function openLineDirect() {
  let lineId = shopConfig.lineId || '@ptj5061o';
  if (!lineId.startsWith('@')) lineId = '@' + lineId;
  const cleanId = lineId.replace(/^@/, '');
  window.open(`https://line.me/ti/p/%40${cleanId}`, '_blank');
}

// Lightbox Modal
function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (lightbox && lightboxImg) {
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active', 'open');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('active', 'open');
}

// Toast Notification
function showToast(text, duration = 3000) {
  const toast = document.getElementById('toastNotice');
  const msg = document.getElementById('toastMessage');
  if (!toast || !msg) return;

  msg.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Switch View Modes
function setViewMode(mode) {
  state.viewMode = mode;
  const flipSection = document.getElementById('flipbookSection');
  const gridSection = document.getElementById('gridSection');

  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === mode);
  });

  if (mode === 'flipbook') {
    if (flipSection) flipSection.style.display = 'block';
    if (gridSection) gridSection.style.display = 'none';
    updateFlipbookView();
  } else {
    if (flipSection) flipSection.style.display = 'none';
    if (gridSection) gridSection.style.display = 'block';
    renderGridProducts();
  }
}

// Setup Touch Swipe for Flipbook
function setupTouchGestures() {
  const book = document.getElementById('bookPagesContainer');
  if (!book) return;

  let startX = 0;
  let startY = 0;

  book.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  book.addEventListener('touchend', (e) => {
    const diffX = e.changedTouches[0].clientX - startX;
    const diffY = e.changedTouches[0].clientY - startY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  }, { passive: true });
}

// ============================================================================
// ADMIN STUDIO LOGIC (จัดการสินค้า, รูปภาพ, หมวดหมู่, ข้อมูลร้าน, อัปเดต GitHub)
// ============================================================================

// ============================================================================
// ADMIN AUTHENTICATION (รหัสผ่านเข้าสู่ระบบแอดมิน)
// ============================================================================
const ADMIN_PASSWORD = 'Daisyday988';

function isAdminAuthenticated() {
  return sessionStorage.getItem('daisy_admin_authenticated') === 'true';
}

// Open & Close Admin Modal
function openAdminModal() {
  if (!isAdminAuthenticated()) {
    openAdminAuthModal();
    return;
  }

  const modal = document.getElementById('adminModal');
  if (!modal) return;
  modal.classList.add('active', 'open');

  populateCategorySelect();
  renderAdminProducts();
  renderAdminCategories();
  loadAdminShopForm();
}

function openAdminAuthModal() {
  const authModal = document.getElementById('adminAuthModal');
  const pwdInput = document.getElementById('adminPasswordInput');
  const errText = document.getElementById('adminAuthError');

  if (errText) errText.style.display = 'none';
  if (pwdInput) {
    pwdInput.value = '';
    setTimeout(() => pwdInput.focus(), 150);
  }
  if (authModal) authModal.classList.add('active', 'open');
}

function closeAdminAuthModal() {
  const authModal = document.getElementById('adminAuthModal');
  if (authModal) authModal.classList.remove('active', 'open');
  if (window.location.hash === '#admin' && !isAdminAuthenticated()) {
    history.replaceState(null, null, window.location.pathname);
  }
}

function submitAdminPassword() {
  const pwdInput = document.getElementById('adminPasswordInput');
  const errText = document.getElementById('adminAuthError');
  const card = document.querySelector('.auth-modal-card');
  const entered = pwdInput ? pwdInput.value.trim() : '';

  if (entered === ADMIN_PASSWORD) {
    sessionStorage.setItem('daisy_admin_authenticated', 'true');
    if (errText) errText.style.display = 'none';
    closeAdminAuthModal();
    openAdminModal();
    showToast('เข้าสู่ระบบแอดมินสำเร็จ 🌸');
  } else {
    if (errText) errText.style.display = 'block';
    if (card) {
      card.classList.remove('auth-shake');
      void card.offsetWidth;
      card.classList.add('auth-shake');
    }
    if (pwdInput) {
      pwdInput.value = '';
      pwdInput.focus();
    }
    showToast('รหัสผ่านไม่ถูกต้อง ❌');
  }
}

function togglePasswordView() {
  const input = document.getElementById('adminPasswordInput');
  const icon = document.getElementById('togglePasswordVisibility');
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (icon) icon.textContent = '🙈';
  } else {
    input.type = 'password';
    if (icon) icon.textContent = '👁️';
  }
}

function adminLogout() {
  sessionStorage.removeItem('daisy_admin_authenticated');
  closeAdminModal();
  showToast('ออกจากระบบแอดมินเรียบร้อยแล้ว 👋');
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (!modal) return;
  modal.classList.remove('active', 'open');
  if (window.location.hash === '#admin') {
    history.replaceState(null, null, window.location.pathname);
  }
}

// Admin Tab Switching
function initAdminTabs() {
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');

      if (targetId === 'tab-products') renderAdminProducts();
      if (targetId === 'tab-categories') renderAdminCategories();
      if (targetId === 'tab-shop') loadAdminShopForm();
    });
  });
}

// Render Admin Products List
function renderAdminProducts() {
  const listContainer = document.getElementById('adminProductList');
  const countEl = document.getElementById('adminProdCount');
  if (countEl) countEl.textContent = products.length;
  if (!listContainer) return;

  listContainer.innerHTML = '';

  products.forEach((prod, index) => {
    const card = document.createElement('div');
    card.className = 'admin-item-card';
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" class="admin-item-thumb" onclick="openLightbox('${prod.image}')">
      <div class="admin-item-info">
        <div class="admin-item-title">${prod.name} ${prod.nameTh ? `(${prod.nameTh})` : ''}</div>
        <div class="admin-item-meta">
          <span>รหัส: <b>${prod.sku}</b></span> • 
          <span>หมวด: <b>${getCategoryName(prod.category)}</b></span> • 
          <span style="color: #9333ea; font-weight: 700;">${prod.price}฿</span>
        </div>
      </div>
      <div class="admin-item-actions">
        <button class="admin-action-btn edit" onclick="openEditProductModal(${prod.id})" title="แก้ไขสินค้านี้">✏️ แก้ไข</button>
        <button class="admin-action-btn" onclick="moveProduct(${prod.id}, -1)" ${index === 0 ? 'disabled' : ''} title="เลื่อนขึ้น">⬆️</button>
        <button class="admin-action-btn" onclick="moveProduct(${prod.id}, 1)" ${index === products.length - 1 ? 'disabled' : ''} title="เลื่อนลง">⬇️</button>
        <button class="admin-action-btn delete" onclick="deleteProduct(${prod.id})" title="ลบสินค้านี้">🗑️</button>
      </div>
    `;
    listContainer.appendChild(card);
  });
}

// Populate Category Dropdown inside Product Editor
function populateCategorySelect() {
  const select = document.getElementById('editProductCategory');
  if (!select) return;
  select.innerHTML = '';
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = `${cat.icon || '🌸'} ${cat.name}`;
    select.appendChild(opt);
  });
}

// Open Product Editor Modal (Add New)
function openAddProductModal() {
  populateCategorySelect();
  state.currentEditorImageBase64 = '';

  document.getElementById('productEditorTitle').textContent = '➕ เพิ่มสินค้าใหม่';
  document.getElementById('editProductId').value = '';
  document.getElementById('editProductName').value = '';
  document.getElementById('editProductNameTh').value = '';
  document.getElementById('editProductSku').value = `SB-${String(products.length + 1).padStart(3, '0')}`;
  document.getElementById('editProductPrice').value = '79';
  document.getElementById('editProductTag').value = 'สินค้าใหม่ ✨';
  document.getElementById('editProductDesc').value = '';

  const defaultImg = (typeof IMAGES !== 'undefined' && IMAGES.purple_lily) ? IMAGES.purple_lily : 'assets/images/purple-lily.jpg';
  const preview = document.getElementById('editProductImgPreview');
  if (preview) {
    preview.src = defaultImg;
  }
  const urlInput = document.getElementById('editProductImageUrl');
  if (urlInput) urlInput.value = '';
  const statusBadge = document.getElementById('uploadStatusText');
  if (statusBadge) statusBadge.style.display = 'none';

  const editorModal = document.getElementById('productEditorModal');
  if (editorModal) editorModal.classList.add('active', 'open');
}

// Open Product Editor Modal (Edit Existing)
function openEditProductModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  populateCategorySelect();
  state.currentEditorImageBase64 = prod.image;

  document.getElementById('productEditorTitle').textContent = `✏️ แก้ไขสินค้า: ${prod.name}`;
  document.getElementById('editProductId').value = prod.id;
  document.getElementById('editProductName').value = prod.name || '';
  document.getElementById('editProductNameTh').value = prod.nameTh || '';
  document.getElementById('editProductSku').value = prod.sku || '';
  document.getElementById('editProductPrice').value = prod.price || '';
  document.getElementById('editProductCategory').value = prod.category || (categories[0] ? categories[0].id : 'single');
  document.getElementById('editProductTag').value = prod.tag || '';
  document.getElementById('editProductDesc').value = prod.description || '';

  const preview = document.getElementById('editProductImgPreview');
  if (preview) preview.src = prod.image;

  const urlInput = document.getElementById('editProductImageUrl');
  if (urlInput) urlInput.value = prod.image || '';

  const statusBadge = document.getElementById('uploadStatusText');
  if (statusBadge) {
    statusBadge.style.display = 'inline';
    statusBadge.style.color = '#16a34a';
    statusBadge.textContent = '✓ มีลิงก์รูปภาพแล้ว';
  }

  const editorModal = document.getElementById('productEditorModal');
  if (editorModal) editorModal.classList.add('active', 'open');
}

function closeProductEditorModal() {
  const editorModal = document.getElementById('productEditorModal');
  if (editorModal) editorModal.classList.remove('active', 'open');
}

// ============================================================================
// CENTRAL PERSISTENCE & GITHUB 1-CLICK SYNC ENGINE
// ============================================================================

// Default GitHub Token for 1-Click Live Sync
const DEFAULT_GITHUB_TOKEN = '';

// Central persistence engine (Saves to LocalStorage + Local Server Disk + GitHub Cloud)
async function persistDataCentrally(customToastMessage) {
  const nowIso = new Date().toISOString();
  localStorage.setItem('daisy_updated_at', nowIso);
  localStorage.setItem('daisy_has_pending_changes', 'true');

  const payload = {
    shopConfig,
    categories,
    products,
    updatedAt: nowIso
  };

  // 1. Keep LocalStorage updated for offline / instant client caching
  try {
    localStorage.setItem('daisy_products_v2', JSON.stringify(products));
    localStorage.setItem('daisy_categories_v2', JSON.stringify(categories));
    localStorage.setItem('daisy_shop_config_v2', JSON.stringify(shopConfig));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  let autoSavedToServer = false;
  let autoSavedToGitHub = false;

  // 2. Auto-save to local server disk (data/catalog.json and app.js)
  try {
    const res = await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      autoSavedToServer = true;
      localStorage.removeItem('daisy_has_pending_changes');
      console.log('✅ Centrally saved to local disk (data/catalog.json, catalog.json & app.js)');
    }
  } catch (e) {
    // Not running on local server or network offline
  }

  // 3. Auto-save to GitHub repository if GitHub Token is present
  const ghToken = localStorage.getItem('daisy_github_token') || DEFAULT_GITHUB_TOKEN;
  if (ghToken && ghToken.trim() !== '') {
    try {
      const ghRes = await syncToGitHubWithToken(ghToken.trim(), payload);
      if (ghRes && ghRes.success) {
        autoSavedToGitHub = true;
        localStorage.removeItem('daisy_has_pending_changes');
      }
    } catch (err) {
      console.warn('GitHub auto-sync error:', err);
    }
  }

  // Update sync banner in admin studio
  updateSyncStatusBadge(!autoSavedToGitHub);

  if (customToastMessage) {
    if (autoSavedToGitHub) {
      showToast(`${customToastMessage} • ซิงค์ขึ้น GitHub เรียบร้อย (กรุณารอประมาณ 30 วินาทีเพื่อให้ข้อมูลอัปเดตบนเว็บจริงนะคะ) 🚀`, 5000);
    } else if (autoSavedToServer) {
      showToast(`${customToastMessage} • บันทึกลงส่วนกลางในเครื่องเรียบร้อย 💾`);
    } else {
      showToast(`${customToastMessage} ✨ (อย่าลืมกดปุ่ม "ส่งขึ้นเว็บจริง" ด้านบนนะคะ)`);
    }
  }
}

// Load Central Data on Startup & Periodic Refresh
async function loadCentralData() {
  try {
    let data = null;
    let sourcePath = './data/catalog.json';

    // 1. Fetch ./data/catalog.json
    try {
      const res = await fetch(`./data/catalog.json?v=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        data = await res.json();
      }
    } catch (e) {}

    // 2. Also check root ./catalog.json (in case admin uploaded to GitHub repo root)
    try {
      const rootRes = await fetch(`./catalog.json?v=${Date.now()}`, { cache: 'no-store' });
      if (rootRes.ok) {
        const rootData = await rootRes.json();
        if (rootData && Array.isArray(rootData.products)) {
          // If root catalog is newer, use it
          if (!data || !data.updatedAt || (rootData.updatedAt && new Date(rootData.updatedAt).getTime() > new Date(data.updatedAt).getTime())) {
            data = rootData;
            sourcePath = './catalog.json';
          }
        }
      }
    } catch (e) {}

    if (data && Array.isArray(data.products)) {
      const localUpdated = localStorage.getItem('daisy_updated_at');
      const hasPendingChanges = localStorage.getItem('daisy_has_pending_changes') === 'true';

      // Only preserve local storage if this device is an admin with unsynced local edits that are newer
      let isLocalNewer = false;
      if (hasPendingChanges && localUpdated && data.updatedAt) {
        if (new Date(localUpdated).getTime() > new Date(data.updatedAt).getTime()) {
          isLocalNewer = true;
        }
      }

      if (isLocalNewer) {
        console.log('🛡️ Preserving local changes because this device has newer unsynced admin edits');
        updateSyncStatusBadge(true);
        return false;
      }

      // Check if data actually changed before re-rendering
      const currentProdsJson = JSON.stringify(products);
      const incomingProdsJson = JSON.stringify(data.products);
      const currentCatsJson = JSON.stringify(categories);
      const incomingCatsJson = data.categories ? JSON.stringify(data.categories) : currentCatsJson;
      const currentShopJson = JSON.stringify(shopConfig);
      const incomingShopJson = data.shopConfig ? JSON.stringify({ ...shopConfig, ...data.shopConfig }) : currentShopJson;

      const hasChanged = (currentProdsJson !== incomingProdsJson) ||
                         (currentCatsJson !== incomingCatsJson) ||
                         (currentShopJson !== incomingShopJson);

      // Server data is authoritative
      products = data.products;
      if (data.categories && Array.isArray(data.categories)) categories = data.categories;
      if (data.shopConfig) shopConfig = { ...shopConfig, ...data.shopConfig };

      try {
        localStorage.setItem('daisy_products_v2', JSON.stringify(products));
        localStorage.setItem('daisy_categories_v2', JSON.stringify(categories));
        localStorage.setItem('daisy_shop_config_v2', JSON.stringify(shopConfig));
        if (data.updatedAt) {
          localStorage.setItem('daisy_updated_at', data.updatedAt);
        }
        localStorage.removeItem('daisy_has_pending_changes');
      } catch (e) {}

      if (hasChanged) {
        updateShopDisplays();
        renderCategoryNav();
        buildFlipbookPages();
        renderGridProducts();
        renderAdminProducts();
        renderAdminCategories();
        console.log(`🌸 Central catalog synced successfully from ${sourcePath} (${products.length} products)`);
      }
      updateSyncStatusBadge(false);
      return true;
    }
  } catch (e) {
    console.log('Notice: Central data load fallback to embedded/local storage', e);
  }
  return false;
}

// Update Sync Status Banner in Admin Studio
function updateSyncStatusBadge(isUnsynced) {
  const bar = document.getElementById('adminSyncNotificationBar');
  const icon = document.getElementById('syncStatusIcon');
  const title = document.getElementById('syncStatusTitle');
  const subtitle = document.getElementById('syncStatusSubtitle');
  const btn = document.getElementById('btnQuickSyncLive');

  if (!bar) return;

  const ghToken = localStorage.getItem('daisy_github_token');

  if (isUnsynced) {
    bar.style.display = 'flex';
    bar.style.background = '#fffbeb';
    bar.style.borderColor = '#fde68a';
    if (icon) icon.textContent = '⚠️';
    if (title) {
      title.textContent = 'มีการเปลี่ยนแปลงสินค้าที่ยังไม่ได้ส่งขึ้นเว็บจริง';
      title.style.color = '#92400e';
    }
    if (subtitle) {
      subtitle.textContent = ghToken 
        ? 'กดปุ่มด้านขวาเพื่อซิงค์ข้อมูลขึ้น GitHub ให้ลูกค้าเห็นทันที' 
        : 'ข้อมูลบันทึกในเครื่องนี้แล้ว แต่ลูกค้าบนเว็บจริงจะยังไม่เห็นจนกว่าจะกดส่ง';
      subtitle.style.color = '#b45309';
    }
    if (btn) {
      btn.style.display = 'inline-flex';
      btn.innerHTML = '<span>🚀 ส่งขึ้นเว็บจริงให้ลูกค้าเห็น</span>';
      btn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
    }
  } else {
    bar.style.display = 'flex';
    bar.style.background = '#f0fdf4';
    bar.style.borderColor = '#bbf7d0';
    if (icon) icon.textContent = '✅';
    if (title) {
      title.textContent = 'ข้อมูลเชื่อมต่อกับเว็บจริงเรียบร้อยแล้ว';
      title.style.color = '#166534';
    }
    if (subtitle) {
      subtitle.textContent = 'บันทึกขึ้น GitHub เรียบร้อยแล้ว (หากเพิ่งบันทึก กรุณารอประมาณ 30 วินาทีเพื่อให้เว็บอัปเดตข้อมูลนะคะ) 🌸';
      subtitle.style.color = '#15803d';
    }
    if (btn) {
      btn.style.display = 'none';
    }
  }
}

// Quick Sync Action from Notification Banner
async function triggerQuickSyncLive() {
  const ghToken = localStorage.getItem('daisy_github_token') || DEFAULT_GITHUB_TOKEN;
  if (ghToken && ghToken.trim() !== '') {
    showToast('⏳ กำลังส่งข้อมูลขึ้น GitHub...');
    const payload = {
      shopConfig,
      categories,
      products,
      updatedAt: new Date().toISOString()
    };
    try {
      const res = await syncToGitHubWithToken(ghToken.trim(), payload);
      if (res && res.success) {
        updateSyncStatusBadge(false);
        showToast('🎉 ส่งข้อมูลขึ้น GitHub สำเร็จแล้ว! กรุณารอประมาณ 30 วินาทีเพื่อให้ข้อมูลอัปเดตบนเว็บจริงนะคะ 🚀', 5000);
        return;
      }
    } catch (e) {
      console.warn('Sync failed:', e);
      alert('การซิงค์ขัดข้อง: ' + e.message + '\nกรุณาตรวจสอบว่า Token ยังใช้งานได้');
    }
  }

  // If no token or sync failed, switch to Tab 4 with focus
  const exportTabBtn = document.querySelector('.admin-tab-btn[data-tab="tab-export"]');
  if (exportTabBtn) exportTabBtn.click();
  const tokenInput = document.getElementById('githubTokenInput');
  if (tokenInput) {
    tokenInput.focus();
    tokenInput.style.borderColor = '#f59e0b';
    tokenInput.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.3)';
    setTimeout(() => {
      tokenInput.style.borderColor = '';
      tokenInput.style.boxShadow = '';
    }, 2500);
  }
}

// GitHub Token Storage & UI Helpers
function loadGithubToken() {
  let token = localStorage.getItem('daisy_github_token');
  if (!token || token.trim() === '') {
    token = DEFAULT_GITHUB_TOKEN;
    try {
      localStorage.setItem('daisy_github_token', token);
    } catch (e) {}
  }
  const input = document.getElementById('githubTokenInput');
  if (input) input.value = token;
  return token;
}

async function saveGithubTokenAndSync() {
  const input = document.getElementById('githubTokenInput');
  const token = input ? input.value.trim() : '';
  if (!token) {
    alert('กรุณากรอก GitHub Personal Access Token ก่อนครับ');
    return;
  }
  localStorage.setItem('daisy_github_token', token);
  showToast('⏳ กำลังซิงค์ข้อมูลขึ้น GitHub...');

  const payload = {
    shopConfig,
    categories,
    products,
    updatedAt: new Date().toISOString()
  };

  try {
    const res = await syncToGitHubWithToken(token, payload);
    if (res && res.success) {
      updateSyncStatusBadge(false);
      showToast('🎉 บันทึกขึ้น GitHub สำเร็จแล้ว! กรุณารอประมาณ 30 วินาทีเพื่อให้ข้อมูลอัปเดตบนเว็บจริง 🚀', 5000);
    }
  } catch (err) {
    console.error('GitHub sync failed:', err);
    alert('การซิงค์ขึ้น GitHub ล้มเหลว: ' + err.message + '\n\nคำแนะนำ: กรุณาตรวจสอบว่า Token มีสิทธิ์ "repo" หรือ "Contents (read and write)"');
  }
}

async function syncToGitHubWithToken(token, payload) {
  const owner = '9sathapornoffice-droid';
  const repo = 'Daisy-Day';

  async function commitFileToGitHub(filePath, commitMsg) {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    let sha = null;
    try {
      const checkRes = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (checkRes.ok) {
        const data = await checkRes.json();
        sha = data.sha;
      }
    } catch (e) {}

    const jsonStr = JSON.stringify(payload, null, 2);
    const utf8Bytes = new TextEncoder().encode(jsonStr);
    let binaryStr = '';
    const chunkSize = 8192;
    for (let i = 0; i < utf8Bytes.length; i += chunkSize) {
      binaryStr += String.fromCharCode.apply(null, utf8Bytes.subarray(i, i + chunkSize));
    }
    const base64Content = btoa(binaryStr);

    const body = {
      message: commitMsg,
      content: base64Content,
      branch: 'main'
    };
    if (sha) body.sha = sha;

    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!putRes.ok) {
      const errData = await putRes.json().catch(() => ({}));
      throw new Error(errData.message || `HTTP status ${putRes.status}`);
    }
  }

  const timeStr = new Date().toLocaleString('th-TH');
  // Commit directly to primary catalog file (Single fast commit, no duplicate queue wait)
  await commitFileToGitHub('data/catalog.json', `Daisy Day Admin: Update catalog [${timeStr}]`);

  return { success: true };
}

function exportCatalogJson() {
  try {
    const payload = {
      shopConfig,
      categories,
      products,
      updatedAt: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'catalog.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('ดาวน์โหลด data/catalog.json สำเร็จแล้ว! 🚀');
  } catch (err) {
    alert('เกิดข้อผิดพลาด: ' + err.message);
  }
}

// Save Product (Add or Edit)
function saveProductData() {
  const idVal = document.getElementById('editProductId').value;
  const name = document.getElementById('editProductName').value.trim();
  const nameTh = document.getElementById('editProductNameTh').value.trim();
  const sku = document.getElementById('editProductSku').value.trim();
  const price = parseFloat(document.getElementById('editProductPrice').value) || 0;
  const category = document.getElementById('editProductCategory').value;
  const tag = document.getElementById('editProductTag').value.trim();
  const desc = document.getElementById('editProductDesc').value.trim();

  if (!name) {
    alert('กรุณากรอกชื่อสินค้า');
    return;
  }

  const urlInput = document.getElementById('editProductImageUrl');
  let imgUrl = urlInput ? urlInput.value.trim() : '';
  if (!imgUrl) {
    imgUrl = state.currentEditorImageBase64;
  }
  if (!imgUrl) {
    const preview = document.getElementById('editProductImgPreview');
    imgUrl = preview ? preview.src : '';
  }

  if (idVal) {
    // Edit existing product
    const prodId = parseInt(idVal, 10);
    const index = products.findIndex(p => p.id === prodId);
    if (index !== -1) {
      products[index] = {
        ...products[index],
        name,
        nameTh,
        sku,
        price,
        category,
        tag,
        description: desc,
        image: imgUrl || products[index].image
      };
    }
  } else {
    // Add new product
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct = {
      id: newId,
      name,
      nameTh,
      sku: sku || `SB-${String(newId).padStart(3, '0')}`,
      price,
      category,
      tag: tag || 'แนะนำ 🌸',
      description: desc,
      meaning: 'มอบความสุขและความสดใส',
      badges: ['แฮนด์เมด', 'พร้อมส่ง'],
      image: imgUrl || (typeof IMAGES !== 'undefined' ? IMAGES.purple_lily : '')
    };
    products.push(newProduct);
  }

  // Refresh views immediately (instant UI response, no waiting)
  closeProductEditorModal();
  renderAdminProducts();
  buildFlipbookPages();
  renderGridProducts();

  // Save centrally in background (LocalStorage + Local Server + GitHub)
  const actionMsg = idVal ? 'แก้ไขข้อมูลสินค้าเรียบร้อยแล้ว 🌸' : 'เพิ่มสินค้าใหม่เรียบร้อยแล้ว ✨';
  persistDataCentrally(actionMsg);
}

// Delete Product
function deleteProduct(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  if (!confirm(`คุณต้องการลบสินค้า "${prod.name}" ใช่หรือไม่?`)) return;

  products = products.filter(p => p.id !== productId);
  persistDataCentrally('ลบสินค้าเรียบร้อยแล้ว 🗑️');

  renderAdminProducts();
  buildFlipbookPages();
  renderGridProducts();
}

// Move Product Order Up / Down
function moveProduct(productId, direction) {
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) return;
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= products.length) return;

  const temp = products[index];
  products[index] = products[targetIndex];
  products[targetIndex] = temp;

  persistDataCentrally('สลับลำดับสินค้าเรียบร้อย ↕️');
  renderAdminProducts();
  buildFlipbookPages();
  renderGridProducts();
}

// Copy Product Image URL to Clipboard
function copyProductImageUrl() {
  const input = document.getElementById('editProductImageUrl');
  if (!input || !input.value.trim()) {
    showToast('ยังไม่มีลิงก์รูปภาพให้คัดลอก');
    return;
  }
  navigator.clipboard.writeText(input.value.trim()).then(() => {
    showToast('คัดลอกลิงก์รูปภาพเรียบร้อย 📋');
  }).catch(() => {
    input.select();
    document.execCommand('copy');
    showToast('คัดลอกลิงก์รูปภาพเรียบร้อย 📋');
  });
}

// Compress and Resize Image File using Canvas (prevent bloated Base64)
function compressImageFile(file, maxWidth = 1200, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Upload Image File directly to GitHub assets/images/
async function uploadImageFileToGitHub(token, filename, base64Data) {
  const owner = '9sathapornoffice-droid';
  const repo = 'Daisy-Day';
  const filePath = `assets/images/${filename}`;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  const pureBase64 = base64Data.replace(/^data:image\/[a-zA-Z]+;base64,/, '');
  const body = {
    message: `Daisy Day Admin: Upload product image ${filename}`,
    content: pureBase64,
    branch: 'main'
  };

  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (res.ok) {
    const fullUrl = `https://9sathapornoffice-droid.github.io/Daisy-Day/${filePath}`;
    return { success: true, url: filePath, fullUrl: fullUrl };
  } else {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `HTTP ${res.status}`);
  }
}

// Setup Product Image Upload Listener & Link Conversion
function setupProductImageUpload() {
  const fileInput = document.getElementById('editProductFileInput');
  const urlInput = document.getElementById('editProductImageUrl');
  const preview = document.getElementById('editProductImgPreview');
  const statusBadge = document.getElementById('uploadStatusText');

  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      state.currentEditorImageBase64 = url;
      if (preview) {
        preview.src = url || (typeof IMAGES !== 'undefined' ? IMAGES.purple_lily : '');
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (statusBadge) {
        statusBadge.style.display = 'inline';
        statusBadge.style.color = '#f59e0b';
        statusBadge.textContent = '⏳ กำลังแปลงรูปเป็นลิงก์...';
      }
      showToast('⏳ กำลังประมวลผลรูปภาพ...');

      try {
        const compressedBase64 = await compressImageFile(file);

        // 1. Try local server upload API (/api/upload)
        let uploadedUrl = null;
        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              filename: file.name,
              imageBase64: compressedBase64
            })
          });
          if (res.ok) {
            const data = await res.json();
            if (data.success && data.url) {
              uploadedUrl = data.url;
            }
          }
        } catch (serverErr) {
          // Local server not reachable
        }

        // 2. If not saved via local server, try GitHub API if token available
        if (!uploadedUrl) {
          const ghToken = localStorage.getItem('daisy_github_token');
          if (ghToken && ghToken.trim() !== '') {
            try {
              const cleanFileName = 'prod-' + Date.now() + '.jpg';
              const ghRes = await uploadImageFileToGitHub(ghToken.trim(), cleanFileName, compressedBase64);
              if (ghRes && ghRes.url) {
                uploadedUrl = ghRes.url;
              }
            } catch (ghErr) {
              console.warn('GitHub image upload failed:', ghErr);
            }
          }
        }

        // 3. Fallback: If no server/GitHub, use optimized compressed data URL
        const finalUrl = uploadedUrl || compressedBase64;

        state.currentEditorImageBase64 = finalUrl;
        if (urlInput) urlInput.value = finalUrl;
        if (preview) preview.src = finalUrl;

        if (statusBadge) {
          statusBadge.style.display = 'inline';
          statusBadge.style.color = '#16a34a';
          statusBadge.textContent = uploadedUrl ? '✓ ได้ลิงก์ไฟล์แล้ว' : '✓ บีบอัดรูปพร้อมใช้งาน';
        }

        if (uploadedUrl) {
          showToast(`📷 แปลงไฟล์เป็นลิงก์สำเร็จ: ${uploadedUrl}`);
        } else {
          showToast('📷 อัปโหลดรูปเรียบร้อย (บีบอัดขนาดเบา) ✨');
        }
      } catch (err) {
        console.error('Image upload failed:', err);
        showToast('เกิดข้อผิดพลาดในการโหลดรูปภาพ: ' + err.message);
        if (statusBadge) statusBadge.style.display = 'none';
      }
    });
  }
}

// Render Admin Categories List
function renderAdminCategories() {
  const container = document.getElementById('adminCategoryList');
  if (!container) return;
  container.innerHTML = '';

  categories.forEach((cat) => {
    const prodCount = products.filter(p => p.category === cat.id).length;
    const item = document.createElement('div');
    item.className = 'admin-category-item';
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'space-between';
    item.style.padding = '10px 14px';
    item.style.background = '#faf5fc';
    item.style.borderRadius = '12px';
    item.style.border = '1px solid #ebdcf5';

    item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 20px;">${cat.icon || '🌸'}</span>
        <div>
          <div style="font-weight: 700; color: #4a2868; font-size: 14px;">${cat.name}</div>
          <div style="font-size: 11px; color: #8e7a9e;">รหัสหมวด: <code>${cat.id}</code> • มีสินค้า ${prodCount} รายการ</div>
        </div>
      </div>
      <div>
        <button class="admin-action-btn delete" onclick="deleteCategory('${cat.id}')" title="ลบหมวดหมู่">🗑️</button>
      </div>
    `;
    container.appendChild(item);
  });
}

// Add New Category
function addNewCategory() {
  const input = document.getElementById('newCategoryInput');
  if (!input) return;
  const name = input.value.trim();
  if (!name) {
    alert('กรุณากรอกชื่อหมวดหมู่');
    return;
  }

  // Random cute icon
  const icons = ['🌸', '🌷', '🌹', '🌻', '🌼', '🌺', '🍀', '🌿', '🎀'];
  const icon = icons[Math.floor(Math.random() * icons.length)];
  const id = 'cat_' + Date.now().toString(36);

  categories.push({ id, name, icon });
  persistDataCentrally('เพิ่มหมวดหมู่ใหม่สำเร็จแล้ว 📂');

  input.value = '';
  renderAdminCategories();
  renderCategoryNav();
  populateCategorySelect();
}

// Delete Category
function deleteCategory(catId) {
  const prodCount = products.filter(p => p.category === catId).length;
  if (prodCount > 0) {
    if (!confirm(`มีสินค้า ${prodCount} รายการอยู่ในหมวดหมู่นี้ คุณต้องการลบจริงหรือไม่?`)) return;
  } else {
    if (!confirm('คุณต้องการลบหมวดหมู่นี้ใช่หรือไม่?')) return;
  }

  categories = categories.filter(c => c.id !== catId);
  if (state.activeCategory === catId) state.activeCategory = 'all';

  persistDataCentrally('ลบหมวดหมู่เรียบร้อยแล้ว 🗑️');

  renderAdminCategories();
  renderCategoryNav();
  populateCategorySelect();
  buildFlipbookPages();
  renderGridProducts();
}

// Load Shop Form Values
function loadAdminShopForm() {
  const nameInput = document.getElementById('adminShopNameInput');
  const taglineInput = document.getElementById('adminShopTaglineInput');
  const lineInput = document.getElementById('adminLineIdInput');
  const logoPreview = document.getElementById('adminLogoPreview');
  const bannerPreview = document.getElementById('adminBannerPreview');
  const logoUrlInput = document.getElementById('adminLogoUrlInput');
  const bannerUrlInput = document.getElementById('adminBannerUrlInput');

  if (nameInput) nameInput.value = shopConfig.name;
  if (taglineInput) taglineInput.value = shopConfig.tagline;
  if (lineInput) lineInput.value = shopConfig.lineId;
  if (logoPreview) logoPreview.src = shopConfig.logo || (typeof IMAGES !== 'undefined' ? IMAGES.logo : '');
  if (bannerPreview) bannerPreview.src = shopConfig.banner || (typeof IMAGES !== 'undefined' ? IMAGES.banner : '');
  if (logoUrlInput) logoUrlInput.value = shopConfig.logo || '';
  if (bannerUrlInput) bannerUrlInput.value = shopConfig.banner || '';
}

// Save Shop Settings
function saveShopSettings() {
  const nameInput = document.getElementById('adminShopNameInput');
  const taglineInput = document.getElementById('adminShopTaglineInput');
  const lineInput = document.getElementById('adminLineIdInput');
  const logoPreview = document.getElementById('adminLogoPreview');
  const bannerPreview = document.getElementById('adminBannerPreview');
  const logoUrlInput = document.getElementById('adminLogoUrlInput');
  const bannerUrlInput = document.getElementById('adminBannerUrlInput');

  if (nameInput) shopConfig.name = nameInput.value.trim() || 'Daisy Day';
  if (taglineInput) shopConfig.tagline = taglineInput.value.trim() || 'Handmade Flowers • Bloom Happiness ♡';
  if (lineInput) {
    let rawLine = lineInput.value.trim();
    if (rawLine && !rawLine.startsWith('@')) rawLine = '@' + rawLine;
    shopConfig.lineId = rawLine || '@ptj5061o';
  }

  const logoUrl = logoUrlInput ? logoUrlInput.value.trim() : '';
  const bannerUrl = bannerUrlInput ? bannerUrlInput.value.trim() : '';

  if (logoUrl) {
    shopConfig.logo = logoUrl;
  } else if (logoPreview && logoPreview.src) {
    shopConfig.logo = logoPreview.src;
  }

  if (bannerUrl) {
    shopConfig.banner = bannerUrl;
  } else if (bannerPreview && bannerPreview.src) {
    shopConfig.banner = bannerPreview.src;
  }

  persistDataCentrally('บันทึกข้อมูลร้านค้าเรียบร้อยแล้ว 💖');

  updateShopDisplays();
  buildFlipbookPages();
}

// Setup Shop Image Upload Listeners
function setupShopImageUploads() {
  const logoInput = document.getElementById('adminLogoFileInput');
  const logoPreview = document.getElementById('adminLogoPreview');
  const logoUrlInput = document.getElementById('adminLogoUrlInput');
  const logoStatus = document.getElementById('logoStatusText');

  if (logoUrlInput) {
    logoUrlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (logoPreview) logoPreview.src = url || (typeof IMAGES !== 'undefined' ? IMAGES.logo : '');
    });
  }

  if (logoInput) {
    logoInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (logoStatus) {
        logoStatus.style.display = 'inline';
        logoStatus.style.color = '#f59e0b';
        logoStatus.textContent = '⏳ กำลังแปลงลิงก์...';
      }
      try {
        const compressed = await compressImageFile(file, 800, 0.85);
        let link = null;
        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: 'logo-' + file.name, imageBase64: compressed })
          });
          if (res.ok) {
            const data = await res.json();
            if (data.success && data.url) link = data.url;
          }
        } catch (e) {}

        const finalUrl = link || compressed;
        if (logoPreview) logoPreview.src = finalUrl;
        if (logoUrlInput) logoUrlInput.value = finalUrl;
        if (logoStatus) {
          logoStatus.style.display = 'inline';
          logoStatus.style.color = '#16a34a';
          logoStatus.textContent = link ? '✓ ได้ลิงก์ไฟล์แล้ว' : '✓ บีบอัดรูปพร้อมใช้งาน';
        }
        showToast('อัปโหลดโลโก้สำเร็จ 🌸 อย่าลืมกดบันทึก');
      } catch (err) {
        console.error(err);
        if (logoStatus) logoStatus.style.display = 'none';
      }
    });
  }

  const bannerInput = document.getElementById('adminBannerFileInput');
  const bannerPreview = document.getElementById('adminBannerPreview');
  const bannerUrlInput = document.getElementById('adminBannerUrlInput');
  const bannerStatus = document.getElementById('bannerStatusText');

  if (bannerUrlInput) {
    bannerUrlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (bannerPreview) bannerPreview.src = url || (typeof IMAGES !== 'undefined' ? IMAGES.banner : '');
    });
  }

  if (bannerInput) {
    bannerInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (bannerStatus) {
        bannerStatus.style.display = 'inline';
        bannerStatus.style.color = '#f59e0b';
        bannerStatus.textContent = '⏳ กำลังแปลงลิงก์...';
      }
      try {
        const compressed = await compressImageFile(file, 1400, 0.85);
        let link = null;
        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: 'banner-' + file.name, imageBase64: compressed })
          });
          if (res.ok) {
            const data = await res.json();
            if (data.success && data.url) link = data.url;
          }
        } catch (e) {}

        const finalUrl = link || compressed;
        if (bannerPreview) bannerPreview.src = finalUrl;
        if (bannerUrlInput) bannerUrlInput.value = finalUrl;
        if (bannerStatus) {
          bannerStatus.style.display = 'inline';
          bannerStatus.style.color = '#16a34a';
          bannerStatus.textContent = link ? '✓ ได้ลิงก์ไฟล์แล้ว' : '✓ บีบอัดรูปพร้อมใช้งาน';
        }
        showToast('อัปโหลดแบนเนอร์สำเร็จ ✨ อย่าลืมกดบันทึก');
      } catch (err) {
        console.error(err);
        if (bannerStatus) bannerStatus.style.display = 'none';
      }
    });
  }
}

// Reset Everything to Defaults
function resetToDefaults() {
  if (!confirm('คุณต้องการล้างข้อมูลที่แก้ไขทั้งหมด และคืนค่ากลับสู่เริ่มต้นใช่หรือไม่?')) return;
  localStorage.removeItem('daisy_products_v2');
  localStorage.removeItem('daisy_categories_v2');
  localStorage.removeItem('daisy_shop_config_v2');
  localStorage.removeItem('daisy_github_token');
  location.reload();
}

// Export Updated app.js for GitHub
function exportUpdatedAppJs() {
  try {
    const exportImages = (typeof IMAGES !== 'undefined') ? IMAGES : {};
    const scriptHeader = `// Auto-generated Daisy Day Catalog Bundle with Admin Updates\n` +
      `const IMAGES = ${JSON.stringify(exportImages, null, 2)};\n\n`;

    let logicText = logicScriptContent || '';

    // Serialize current active data into default variables
    const prodJson = JSON.stringify(products, null, 2);
    const catJson = JSON.stringify(categories, null, 2);
    const shopJson = JSON.stringify(shopConfig, null, 2);

    logicText = logicText.replace(/const DEFAULT_PRODUCTS = \[[\s\S]*?\];/, () => `const DEFAULT_PRODUCTS = ${prodJson};`);
    logicText = logicText.replace(/const DEFAULT_CATEGORIES = \[[\s\S]*?\];/, () => `const DEFAULT_CATEGORIES = ${catJson};`);
    logicText = logicText.replace(/const DEFAULT_SHOP_CONFIG = \{[\s\S]*?\};/, () => `const DEFAULT_SHOP_CONFIG = ${shopJson};`);

    const fullBundle = scriptHeader + logicText;

    const blob = new Blob([fullBundle], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = 'app.js';
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(url);

    showToast('ดาวน์โหลด app.js ที่อัปเดตข้อมูลสินค้าแล้วสำเร็จ! 🚀');
  } catch (err) {
    console.error('Export error:', err);
    alert('เกิดข้อผิดพลาดในการดาวน์โหลดไฟล์: ' + err.message);
  }
}

let logicScriptContent = '';

// Check URL Hash for Admin Access
function checkAdminHash() {
  if (window.location.hash === '#admin') {
    openAdminModal();
  }
}

// ============================================================================
// APP INITIALIZATION
// ============================================================================
function initApp() {
  updateShopDisplays();
  renderCategoryNav();
  buildFlipbookPages();
  renderGridProducts();
  setupEventListeners();
  setupTouchGestures();
  setupProductImageUpload();
  setupShopImageUploads();
  initAdminTabs();
  createFloatingPetals();
  loadGithubToken();

  // Load central data asynchronously from data/catalog.json or catalog.json
  loadCentralData();

  // Refresh data automatically when user switches back to this tab
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      loadCentralData();
    }
  });
  // Auto-sync check every 60 seconds
  setInterval(loadCentralData, 60000);

  // Check URL hash for direct admin access
  checkAdminHash();
  window.addEventListener('hashchange', checkAdminHash);
  setTimeout(checkAdminHash, 150);

  // Capture current logic script text for GitHub export
  try {
    fetch('./app.js')
      .then(res => res.text())
      .then(text => {
        const imgEndMatch = text.indexOf('// DAISY DAY - COMPREHENSIVE STOREFRONT');
        if (imgEndMatch !== -1) {
          logicScriptContent = text.substring(imgEndMatch);
        } else {
          logicScriptContent = text;
        }
      })
      .catch(() => {});
  } catch (e) {}
}

function setupEventListeners() {
  // Navigation buttons
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  if (prevBtn) prevBtn.addEventListener('click', prevPage);
  if (nextBtn) nextBtn.addEventListener('click', nextPage);

  const cornerCue = document.getElementById('cornerCurlCue');
  if (cornerCue) cornerCue.addEventListener('click', nextPage);

  // View mode switcher buttons
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setViewMode(btn.dataset.view);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
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
      closeAdminModal();
      closeProductEditorModal();
      closeAdminAuthModal();
    }
  });

  // Order modal events
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const orderModal = document.getElementById('orderModal');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeOrderModal);
  if (orderModal) {
    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) closeOrderModal();
    });
  }

  // Admin Auth Modal click outside to close
  const adminAuthModal = document.getElementById('adminAuthModal');
  if (adminAuthModal) {
    adminAuthModal.addEventListener('click', (e) => {
      if (e.target === adminAuthModal) closeAdminAuthModal();
    });
  }

  const btnOpenLineDirect = document.getElementById('btnOpenLineDirect');
  const btnCopyLineMsg = document.getElementById('btnCopyLineMsg');
  if (btnOpenLineDirect) btnOpenLineDirect.addEventListener('click', sendOrderToLine);
  if (btnCopyLineMsg) btnCopyLineMsg.addEventListener('click', copyOrderMessage);

  // Discreet Admin Open Trigger
  const openAdminTrigger = document.getElementById('openAdminTrigger');
  const adminCloseBtn = document.getElementById('adminCloseBtn');
  const adminModal = document.getElementById('adminModal');

  if (openAdminTrigger) openAdminTrigger.addEventListener('click', openAdminModal);
  if (adminCloseBtn) adminCloseBtn.addEventListener('click', closeAdminModal);
  if (adminModal) {
    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal) closeAdminModal();
    });
  }

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.addEventListener('click', closeLightbox);

  // Header toggles
  const toggleSoundBtn = document.getElementById('toggleSoundBtn');
  if (toggleSoundBtn) {
    toggleSoundBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      toggleSoundBtn.textContent = state.soundEnabled ? '🔊' : '🔇';
      showToast(state.soundEnabled ? 'เปิดเสียงเอฟเฟกต์สมุด' : 'ปิดเสียงเอฟเฟกต์');
    });
  }

  const toggleDesktopBtn = document.getElementById('toggleDesktopBtn');
  if (toggleDesktopBtn) {
    toggleDesktopBtn.addEventListener('click', () => {
      const container = document.querySelector('.app-container');
      if (container) {
        container.classList.toggle('desktop-mode');
        const isDesktop = container.classList.contains('desktop-mode');
        toggleDesktopBtn.textContent = isDesktop ? '📱' : '💻';
        showToast(isDesktop ? 'ขยายหน้าจอมุมมองกว้าง' : 'มุมมองหน้าจอมือถือ (Mobile View)');
      }
    });
  }
}

// Floating Petals
function createFloatingPetals() {
  const container = document.getElementById('petalCanvas');
  if (!container) return;
  const count = 16;
  container.innerHTML = '';

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

// Start App when DOM ready
document.addEventListener('DOMContentLoaded', initApp);