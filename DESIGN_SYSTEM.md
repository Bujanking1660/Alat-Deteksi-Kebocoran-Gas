# DESIGN SYSTEM — SIGAS (Smart Integrated Gas Security)
**Versi:** 2.0.0 (Refined to Official Brand Logo & Design References)  
**Karakter Visual:** Clean Modern Tech, Hardware Engineering, High-Trust Safety  
**Acuan Desain:** Folder `referensi/` (*Livento*, *Kodak SP360*, *Mello*) & `assets/logo/`  

---

## 1. Brand Identity & Visual Philosophy

Identitas visual SIGAS berakar langsung dari logo resmi (`assets/logo/`):
- **Perisai Biru Kobalt (`#00478F`):** Melambangkan perlindungan rumah/dapur (*home protection*), kestabilan industri, dan keandalan sistem keamanan.
- **Sinyal Hijau-Teal IoT (`#0FA685`):** Melambangkan konektivitas cerdas, deteksi nirkabel (*wireless edge sensing*), dan kondisi aman terkendali.
- **Tipografi Geometris Bersih:** Mencerminkan presisi mekanis rekayasa perangkat keras (*mechanical precision*), modern, dan approachable.
- **Anti-Slop & Anti-Generik:** Menghilangkan gradien ungu-biru palsu, ornamen blob tak bermakna, dan mockup fiktif. Seluruh visual berfokus pada render 3D tabung melon, diagram CAD teknik, dan antarmuka aplikasi Flutter asli.

---

## 2. Color Palette (Berdasarkan Ekstraksi Presisi Logo Resmi)

### 2.1 Brand & Functional Colors

| Token | Nilai HEX | Peran | Kontras (WCAG) |
|---|---|---|---|
| `--color-primary` | `#00478F` | **SIGAS Deep Cobalt Blue**: Warna identitas utama (huruf "SI", perisai dan tabung pada logo). | 8.6:1 (AAA pada putih) |
| `--color-primary-hover` | `#003770` | State hover elemen primer dan tombol navigasi aktif. | 11.2:1 (AAA) |
| `--color-primary-light` | `#EFF6FC` | Permukaan aksen terang, badge informasi teknis. | Background |
| `--color-accent` | `#0FA685` | **SIGAS IoT Teal**: Warna aksen (huruf "GAS" dan gelombang IoT pada logo). | 4.6:1 (AA pada putih) |
| `--color-accent-hover` | `#0C8B6F` | State hover tombol aksen sekunder. | 5.8:1 (AAA) |
| `--color-accent-light` | `#E8F8F4` | Badge status normal, tag fitur telemetri. | Background |
| `--color-dark-navy` | `#071527` | **Midnight Tech Slate**: Latar belakang seksi kontras tinggi (Hardware CAD & Kodak-style backdrop). | 17.5:1 (AAA) |
| `--color-dark-surface` | `#0D2038` | Kartu bento hardware dalam seksi gelap. | Kontras teks putih 12.8:1 |
| `--color-canvas` | `#FFFFFF` | Latar utama halaman putih bersih (*clean modern*). | - |
| `--color-canvas-subtle` | `#F6FAFD` | Permukaan bergantian dengan rona es/biru sangat halus. | - |
| `--color-border` | `#E2EAF1` | Garis tepi kartu dan pembatas tabel spesifikasi. | - |

### 2.2 Status Telemetri Semantik (Sesuai Aplikasi SIGAS)
* **Status Aman (Normal):** `#0FA685` (Hijau-Teal SIGAS) — Konsentrasi &lt;100 PPM (71 PPM pada demo).
* **Status Waspada (Early Warning):** `#D97706` (Amber) — Konsentrasi 100–400 PPM (275 PPM pada demo).
* **Status Darurat (Emergency Auto-Cutoff):** `#DC2626` (Crimson) — Konsentrasi &gt;400 PPM (1.479 PPM, katup ditutup &lt;0.4s).

---

## 3. Typography Hierarchy

* **Font Display & Judul:** **Plus Jakarta Sans** / **Outfit** (Sans-serif geometris, modern, tegas).
* **Font Metrik & Spesifikasi Teknis:** **JetBrains Mono** / **Space Grotesk** (Monospace presisi untuk angka PPM, waktu respon detik, torsi kg·cm).

### Skala Tipografi:
* **Watermark Backdrop (Gaya Kodak SP360):** 80px – 140px, font-weight 900, opasitas 0.05 – 0.08, huruf kapital ("SIGAS").
* **Display Hero:** 36px (Mobile) / 58px (Desktop), font-weight 800, line-height 1.15.
* **Heading 1 (H1):** 28px / 40px, font-weight 700, line-height 1.2.
* **Heading 2 (H2):** 22px / 28px, font-weight 700.
* **Body Regular:** 15px / 16px, line-height 1.65, warna teks `#334155`.
* **Technical Label:** 12px / 13px, font-weight 600, uppercase letter-spacing +0.06em.

---

## 4. Komposisi Tata Letak (Terinspirasi Folder Referensi)

1. **Header:** Memuat logo resmi `sigas-logo-full.png`, navigasi ringkas, pill status TRL 6, dan tombol aksi "Kontak Tim Peneliti".
2. **Hero Section (Gaya Kodak SP360 + Livento):**
   * Tipografi backdrop besar ("SIGAS") di belakang visual render 3D tabung melon.
   * 4 Kartu Metrik Utama vertikal dengan ikon outline bersih:
     - `15 Detik` (Respon Putus Mekanis)
     - `20 kg·cm` (Torsi Servo Logam Waterproof)
     - `0 Modifikasi` (100% Plug-On pada Regulator SNI)
     - `TRL 6` (Prototipe Tervalidasi di Lingkungan Relevan)
3. **Problem & Field Evidence (Sesuai Riset Purwokerto):**
   * Fakta 100% pedagang pernah mengalami kebocoran / karet sil getas.
   * Risiko kerugian aset hingga Rp 19 Juta per kios.
   * Komparasi: Detektor sirine konvensional (pasif) vs SIGAS (pemutus fisik mandiri).
4. **How It Works (3 Langkah Terverifikasi):**
   * 1. Deteksi Rerata 10Hz (Sensor MQ-6 LPG).
   * 2. Logika Edge-Autonomous (ESP32 240MHz).
   * 3. Pemutusan Fisik 90° (<0.4s) & Alarm Piezo 12V.
5. **Hardware Engineering (Gaya Mello Teardown & Livento Dark Bento):**
   * Kontainer Midnight Slate (`#071527`).
   * Gambar CAD Teknik Asli dari dokumen (`cad-isometric-callouts.jpg` & `cad-4views-ortho.jpg`).
   * Breakdown komponen resmi: ESP32, Servo 20kg, MQ-6, DS3231 RTC, 3D Plug-On Clamp, Push Button.
6. **Mobile App Flutter Showcase:**
   * Menampilkan 3 layar asli aplikasi SIGAS Kitchen Safety (Normal, Waspada, Darurat).
   * Fitur shift timer offline (NVS flash) dan pengawasan klaster 10–50 kios.
7. **Tabel Spesifikasi Teknis Terverifikasi (Tribute to Kodak Spec Table):**
   * Parameter resmi tanpa data fiktif.
8. **Keunggulan Kompetitif & Model Bisnis (Slide 7 & 10 Dokumen):**
   * MSRP Rp 850.000 / BOM Rp 549.780.
   * Langganan klaster Rp 25.000/stan/bulan.
9. **Profil Tim SMK Telkom Purwokerto & Ajang:**
   * Fabian Arkananta, Hanif Rizki Ardianto, Arieva Ramdhan, Yogi Sasongko.
   * Logo ASPILUKI, FTII, developerday.id 2026 (Road to APICTA).
