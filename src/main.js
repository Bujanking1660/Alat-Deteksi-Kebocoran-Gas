/**
 * SIGAS Landing Page Application Logic (V2 - Official Brand & Clean Modern Tech)
 * Features: Mobile Navigation, Live Sensor Simulator, CAD Callout Switcher,
 * Flutter App Mockup Switcher, Modal Dialog, Bilingual i18n.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNavDropdown();
  initSensorSimulator();
  initCadComponentSwitch();
  initAppScreenSwitch();
  initConsultationModal();
  initI18n();
});

/* ==========================================================================
   1. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('btnMobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const btnMobileConsult = document.getElementById('btnMobileConsultation');

  if (!toggleBtn || !drawer) return;

  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggleBtn.addEventListener('click', () => toggleDrawer());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  if (btnMobileConsult) {
    btnMobileConsult.addEventListener('click', () => {
      toggleDrawer(false);
      openModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleDrawer(false);
    }
  });
}

function initNavDropdown() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach(dd => {
    const toggle = dd.querySelector('.nav-drop-toggle');
    const menu = dd.querySelector('.nav-drop-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        dd.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }));
    });

    dd.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dd.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  });

  document.addEventListener('click', (e) => {
    dropdowns.forEach(dd => {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        const t = dd.querySelector('.nav-drop-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   2. LIVE SENSOR STATUS SIMULATOR
   ========================================================================== */
function initSensorSimulator() {
  const simBtns = document.querySelectorAll('.sim-btn');
  const simPpmVal = document.getElementById('simPpmVal');
  const simValveVal = document.getElementById('simValveVal');

  if (!simPpmVal || !simValveVal) return;

  const modeData = {
    normal: {
      ppm: '71 PPM',
      valve: 'MENGALIR',
      valveColor: 'var(--color-safe)'
    },
    warning: {
      ppm: '275 PPM',
      valve: 'WASPADA',
      valveColor: 'var(--color-warn)'
    },
    danger: {
      ppm: '1.479 PPM',
      valve: 'DITUTUP (<0.4s)',
      valveColor: 'var(--color-danger)'
    }
  };

  simBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      simBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const mode = btn.dataset.mode;
      const data = modeData[mode];
      if (data) {
        simPpmVal.textContent = data.ppm;
        simValveVal.textContent = data.valve;
        simValveVal.style.color = data.valveColor;

        // Sync with phone mockup screen
        syncAppScreenFromMode(mode);
      }
    });
  });
}

/* ==========================================================================
   3. CAD HARDWARE COMPONENT SWITCHER
   ========================================================================== */
function initCadComponentSwitch() {
  const compItems = document.querySelectorAll('.component-item');

  compItems.forEach(item => {
    item.addEventListener('click', () => {
      compItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* ==========================================================================
   4. FLUTTER APP SCREEN SWITCHER
   ========================================================================== */
function syncAppScreenFromMode(mode) {
  const screenMap = {
    normal: 'app-screen-normal.jpg',
    warning: 'app-screen-warning.jpg',
    danger: 'app-screen-emergency.jpg'
  };
  const phoneImg = document.getElementById('phoneAppImg');
  const appTabs = document.querySelectorAll('.app-tab-btn');

  if (phoneImg && screenMap[mode]) {
    phoneImg.src = `/assets/images/${screenMap[mode]}`;
  }

  appTabs.forEach(tab => {
    const tabMode = tab.dataset.screen === 'emergency' ? 'danger' : tab.dataset.screen;
    tab.classList.toggle('active', tabMode === mode);
  });
}

function initAppScreenSwitch() {
  const appTabs = document.querySelectorAll('.app-tab-btn');
  const phoneImg = document.getElementById('phoneAppImg');

  const screens = {
    normal: 'app-screen-normal.jpg',
    warning: 'app-screen-warning.jpg',
    emergency: 'app-screen-emergency.jpg'
  };

  appTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      appTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const screenKey = tab.dataset.screen;
      if (phoneImg && screens[screenKey]) {
        phoneImg.src = `/assets/images/${screens[screenKey]}`;
      }

      // Sync top simulator
      const simMode = screenKey === 'emergency' ? 'danger' : screenKey;
      const simBtn = document.querySelector(`.sim-btn[data-mode="${simMode}"]`);
      if (simBtn) {
        simBtn.click();
      }
    });
  });
}

/* ==========================================================================
   5. CONSULTATION & PILOT MODAL
   ========================================================================== */
function openModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.add('open');
    const firstInput = modal.querySelector('input');
    if (firstInput) firstInput.focus();
  }
}

function closeModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function initConsultationModal() {
  const btnOpen = document.getElementById('btnOpenConsultation');
  const btnCta = document.getElementById('btnCtaOpenModal');
  const btnClose = document.getElementById('btnCloseModal');
  const modal = document.getElementById('consultationModal');
  const form = document.getElementById('consultationForm');

  if (btnOpen) btnOpen.addEventListener('click', openModal);
  if (btnCta) btnCta.addEventListener('click', openModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      alert(`Terima kasih, ${name}! Pesan dan permohonan Anda telah diterima oleh tim riset SIGAS SMK Telkom Purwokerto.`);
      form.reset();
      closeModal();
    });
  }
}

/* ==========================================================================
   6. BILINGUAL I18N SUPPORT (ID / EN)
   ========================================================================== */
function initI18n() {
  const langIdBtn = document.getElementById('lang-id');
  const langEnBtn = document.getElementById('lang-en');

  const dict = {
    en: {
      'nav.problem': 'Field Problem',
      'nav.solution': 'Solution & Workflow',
      'nav.product': 'Product',
      'nav.business': 'Business & Team',
      'nav.hardware': 'CAD Hardware',
      'nav.app': 'Flutter App',
      'nav.advantages': 'Advantages',
      'nav.specs': 'Specifications',
      'nav.pricing': 'Business Model',
      'nav.team': 'Research Team',
      'nav.cta': 'Contact Team',
      'hero.badge1': 'developerday.id 2026 • Road to APICTA',
      'hero.badge2': 'Clamps On, No Pipe Damage',
      'hero.title': 'Gas Leaking While the Stall Is Closed? <mark>This Device Shuts the Valve Automatically</mark>',
      'hero.lead': 'SIGAS clamps onto standard SNI LPG regulators without cutting any pipe or hose. Once the sensor detects a leak, the valve closes automatically within 15 seconds — working even if the power or internet is out.',
      'hero.ctaPrimary': 'See How It Works',
      'hero.ctaSecondary': 'See the Device Design',
      'sim.title': 'LIVE TELEMETRY SIMULATOR',
      'sim.normal': 'Normal',
      'sim.warning': 'Early Leak',
      'sim.danger': 'Emergency',
      'sim.ppm': 'LPG Gas Concentration',
      'sim.valve': 'Regulator Valve Status',
      'stats.time': 'From Leak Detected to Gas Cut Off',
      'stats.torque': 'Motor Strength to Turn the Valve',
      'stats.pipe': 'Zero Pipe / Hose Cutting',
      'stats.trl': 'Environment-Validated Prototype',
      'prob.kicker': 'GROUND TRUTH & FIELD EVIDENCE',
      'prob.title': 'Why Conventional Detectors Fail to Prevent Gas Fires',
      'prob.desc': 'Based on field surveys with culinary MSMEs in South Purwokerto, gas fires occur not merely due to open flames, but due to silent overnight accumulation when pressurized regulators are left clamped after closing hours.',
      'sol.kicker': 'AUTONOMOUS SOLUTION & WORKFLOW',
      'sol.title': 'How It Works: Detect, Close, Alert',
      'sol.desc': 'SIGAS (Smart IoT Gas Autonomous Safety) is engineered non-invasively to mechanically shut off LPG regulators before fire can ignite.',
      'hw.kicker': 'MECHANICAL ENGINEERING & CAD',
      'hw.title': 'SIGAS Hardware Anatomy',
      'hw.desc': 'SIGAS hangs onto the neck of a 3 kg LPG cylinder like a large keychain — clamped on the outside without removing the official SNI regulator seal. Attach or remove by hand, no tools needed.',
      'app.kicker': 'DASHBOARD ON YOUR PHONE',
      'app.title': 'SIGAS Kitchen Safety Mobile App',
      'app.desc': 'An Android app that shows your kitchen gas conditions in real time: safe, warning, or emergency — including alarm history. Tech stack: Flutter 3 + Firebase.',
      'adv.kicker': 'PRODUCT ADVANTAGES',
      'adv.title': '4 Core Competitive Advantages',
      'adv.desc': 'Four advantages that set SIGAS apart from ordinary gas detectors.',
      'spec.kicker': 'TECHNICAL PARAMETERS',
      'spec.title': 'Hardware & System Specifications',
      'spec.desc': 'Detailed component specifications and operating tolerances of the SIGAS device from official documents.',
      'biz.kicker': 'BUSINESS MODEL & DISTRIBUTION',
      'biz.title': 'Cost Structure & Service Model',
      'biz.desc': 'Two ways to use SIGAS: buy the device outright (ready-to-install kit), or subscribe to a monitoring service for multi-stall operators.',
      'team.kicker': 'RESEARCH & INNOVATION TEAM',
      'team.title': 'SMK Telkom Purwokerto Developers',
      'team.desc': 'Innovators representing developerday.id 2026 (Road to APICTA) supported by ASPILUKI and FTII.'
    },
    id: {
      'nav.problem': 'Masalah Lapangan',
      'nav.solution': 'Solusi & Cara Kerja',
      'nav.product': 'Produk',
      'nav.business': 'Bisnis & Tim',
      'nav.hardware': 'Hardware CAD',
      'nav.app': 'Aplikasi Flutter',
      'nav.advantages': 'Keunggulan',
      'nav.specs': 'Spesifikasi',
      'nav.pricing': 'Biaya & Model',
      'nav.team': 'Tim Riset',
      'nav.cta': 'Kontak Tim Peneliti',
      'hero.badge1': 'developerday.id 2026 • Road to APICTA',
      'hero.badge2': 'Dipasang Tanpa Merusak Pipa',
      'hero.title': 'Gas Bocor Saat Kios Tutup? <mark>Alat Ini Menutup Kerannya Otomatis</mark>',
      'hero.lead': 'SIGAS dipasang mengapit keran gas LPG standar SNI tanpa memotong pipa atau selang. Begitu sensor mengenali gas bocor, keran diputar tertutup otomatis dalam waktu di bawah 15 detik — tetap bekerja walau listrik padam atau internet mati.',
      'hero.ctaPrimary': 'Lihat Cara Kerjanya',
      'hero.ctaSecondary': 'Lihat Desain Alat',
      'sim.title': 'SIMULASI TELEMETRI KONTROL',
      'sim.normal': 'Normal',
      'sim.warning': 'Waspada',
      'sim.danger': 'Darurat',
      'sim.ppm': 'Konsentrasi Gas LPG',
      'sim.valve': 'Status Tuas Regulator',
      'stats.time': 'Dari Tercium Gas Sampai Gas Terputus',
      'stats.torque': 'Kekuatan Motor Pemutar Keran Gas',
      'stats.pipe': 'Nol Pemotongan Pipa / Selang',
      'stats.trl': 'Sudah Diuji di Kondisi Nyata',
      'prob.kicker': 'FAKTA LAPANGAN & MASALAH NYATA',
      'prob.title': 'Mengapa Detektor Konvensional Gagal Mencegah Kebakaran?',
      'prob.desc': 'Berdasarkan survei dan wawancara lapangan pada UMKM kuliner di Purwokerto Selatan, bahaya gas LPG 3 kg bukan semata-mata api saat memasak, melainkan kebocoran senyap saat warung tutup malam hari.',
      'sol.kicker': 'SOLUSI & ALUR KERJA MANDIRI',
      'sol.title': 'Cara Kerjanya: Cium, Tutup, Alarm',
      'sol.desc': 'SIGAS (Smart IoT Gas Autonomous Safety) dirancang non-invasif untuk memutus regulator LPG secara mandiri sebelum gas sempat menyulut api.',
      'hw.kicker': 'REKAYASA MEKANIK & CAD',
      'hw.title': 'Anatomi Perangkat Keras SIGAS',
      'hw.desc': 'SIGAS dipasang di leher tabung gas 3 kg seperti "gantungan kunci" besar — dijepit di luar, tanpa mencopot segel resmi regulator SNI. Lepas-pasang cukup pakai tangan, tanpa perkakas.',
      'app.kicker': 'DASBOR DI HP ANDA',
      'app.title': 'Aplikasi SIGAS Kitchen Safety',
      'app.desc': 'Aplikasi Android yang menampilkan kondisi gas dapur secara waktu-nyata: aman, waspada, atau darurat — lengkap dengan riwayat alarm. Teknisnya: Flutter 3 + Firebase.',
      'adv.kicker': 'NILAI UNGGUL PRODUK',
      'adv.title': '4 Keunggulan Kompetitif SIGAS',
      'adv.desc': 'Empat keunggulan yang membedakan SIGAS dari detektor gas biasa.',
      'spec.kicker': 'DATA SPESIFIKASI',
      'spec.title': 'Spesifikasi Teknis Perangkat',
      'spec.desc': 'Rincian parameter komponen dan toleransi operasional perangkat SIGAS berdasarkan dokumen resmi.',
      'biz.kicker': 'MODEL BISNIS & DISTRIBUSI',
      'biz.title': 'Struktur Biaya & Skema Layanan',
      'biz.desc': 'Dua cara memakai SIGAS: beli langsung perangkatnya (kit siap pasang), atau berlangganan layanan pemantauan untuk pengelola banyak kios.',
      'team.kicker': 'TIM RISET & INOVASI',
      'team.title': 'Pengembang SMK Telkom Purwokerto',
      'team.desc': 'Inovasi yang mewakili ajang developerday.id 2026 (Road to APICTA) didukung oleh ASPILUKI dan FTII.'
    }
  };

  function setLanguage(lang) {
    langIdBtn.classList.toggle('active', lang === 'id');
    langEnBtn.classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang;

    const currentDict = dict[lang];
    if (!currentDict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (currentDict[key]) {
        el.innerHTML = currentDict[key];
      }
    });
  }

  if (langIdBtn && langEnBtn) {
    langIdBtn.addEventListener('click', () => setLanguage('id'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));
  }
}
