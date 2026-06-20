
---

# WuzzKang Landing Page Template

> A high-performance, zero-build-step landing page template designed for automated deployment.

Template ini adalah "canvas" yang digunakan oleh sistem **WuzzKang** untuk men-generate landing page secara otomatis. Template ini menggunakan arsitektur *Decoupled* (pemisahan data dan tampilan) untuk memastikan performa maksimal di GitHub Pages.

## 🚀 Key Features

* **Zero-Build Step:** Tidak memerlukan `npm install`, `webpack`, atau `vite`. Langsung jalan di browser.
* **Performance First:** Menggunakan Tailwind CSS via CDN. Sangat ringan dan cepat.
* **Data-Driven:** Seluruh konten (teks, heading, fitur) dikelola melalui file `content.json`.
* **Responsive:** Sudah optimal untuk tampilan mobile, tablet, dan desktop.

---

## ⚙️ Configuration (The Source of Truth)

Seluruh isi konten landing page dikendalikan oleh file **`content.json`**. Sistem backend WuzzKang akan menulis ulang file ini setiap kali ada pembaruan konten.

### JSON Structure

Berikut adalah kontrak data yang harus dipatuhi:

```json
{
  "meta": {
    "title": "Judul Halaman Anda",
    "theme": "light"
  },
  "content": {
    "hero": {
      "heading": "Headline Utama",
      "subheading": "Penjelasan detail produk.",
      "cta_text": "Tombol Aksi"
    },
    "features": [
      {
        "title": "Fitur Unggulan",
        "desc": "Penjelasan singkat fitur.",
        "icon": "🚀"
      }
    ]
  }
}

```

> **Warning:** Jangan mengubah struktur JSON secara manual jika Anda ingin sistem otomasi WuzzKang tetap berjalan.

---

## 🛠️ Development & Customization

Jika Anda ingin melakukan kustomisasi desain secara manual:

1. **HTML/CSS:** Anda dapat memodifikasi `index.html` menggunakan kelas-kelas dari [Tailwind CSS](https://tailwindcss.com/).
2. **Logic:** Jika Anda ingin menambah fitur interaktif (seperti form submission), edit file `script.js`.
3. **Local Preview:** Untuk melihat perubahan secara lokal, cukup buka file `index.html` langsung di browser Anda (atau gunakan *Live Server* extension di VS Code).

---

## 🚀 Deployment

Template ini dirancang untuk di-deploy di **GitHub Pages**.

1. Push perubahan Anda ke branch `main`.
2. Pastikan GitHub Pages sudah aktif di **Settings > Pages**.
3. Situs Anda akan langsung ter-deploy secara otomatis.

---

## 📜 License

Template ini dilisensikan di bawah [MIT License](https://www.google.com/search?q=LICENSE). Anda bebas menggunakannya untuk proyek pribadi maupun komersial.

---

*Powered by [WuzzKang Automation System*](https://www.google.com/search?q=https://wuzzkang.com)

---

### Tips Tambahan dari Arsitek:

1. **Gambar:** Jika Anda ingin menambahkan dukungan gambar, ingatkan user untuk menaruh gambar di folder `/assets/img/` dan merujuknya di `content.json`.
2. **Custom Font:** Jika Anda ingin branding yang lebih kuat, Anda bisa menginstruksikan mereka untuk menambahkan link Google Fonts di dalam tag `<head>` di `index.html`.
