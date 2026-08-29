# Demo Padel — Design Brief & Build Prompt

> Dokumen ini berisi konsep desain website "Demo Padel" (demo booking + informasi layanan padel untuk klien door-to-door) yang **terinspirasi** dari struktur situs Padel Pro, tapi dibedakan dari sisi branding, tone konten, palet warna, tipografi, dan susunan komponen — supaya tidak dianggap plagiat/copy 1:1.

---

## 1. Konsep & Positioning

- **Nama brand:** Demo Padel
- **Tagline:** "Main Padel, Booking Gampang" (gaya lokal, santai, bukan puitis ala Padel Pro)
- **Positioning:** Bukan klub premium eksklusif, tapi platform booking lapangan padel + info layanan yang praktis, cocok untuk demo ke calon klien (klub, venue, komunitas) yang belum punya website.
- **Diferensiasi dari Padel Pro:**
  - Padel Pro = brand storytelling panjang, warna biru elektrik + lime neon, font custom mahal (Druk, Carnas).
  - Demo Padel = fokus fungsional (booking cepat, jadwal, harga transparan), tone lebih ramah & lokal, warna & font berbeda total.

---

## 2. Identitas Visual (Design System)

| Elemen | Padel Pro (referensi) | Demo Padel (baru) |
|---|---|---|
| Warna utama | Biru elektrik `#0000E5` | Hijau tosca gelap `#0F5C4C` |
| Warna aksen | Lime neon `#CCFF00` | Oranye hangat `#FF7A3D` |
| Warna netral | Putih/hitam polos | Krem `#F6F1E7` + abu gelap `#22221F` |
| Font judul | Druk Web Bold (custom) | Poppins ExtraBold / Space Grotesk |
| Font body | Carnas W03 Light (custom) | Inter / Plus Jakarta Sans |
| Bentuk tombol | Rounded-full, uppercase | Rounded-xl (bukan pill), sentence case |
| Gaya foto | Studio look, high-contrast | Foto natural venue lokal, warm tone |
| Ikon | Minimal, monokrom | Line icon dengan aksen oranye |

**Prinsip layout:** grid 12 kolom, section bergantian background krem/hijau gelap (bukan pattern putih repetitif seperti referensi), whitespace lebih longgar.

---

## 3. Sitemap

1. **Home** — hero, value proposition singkat, CTA booking, preview layanan, preview venue, testimoni
2. **Booking** — kalender pilih tanggal/jam, pilih venue & lapangan, ringkasan harga, form data diri, konfirmasi
3. **Layanan / Informasi** — sewa lapangan, sewa alat, coaching, event/tournament, F&B
4. **Venue / Lokasi** — daftar venue + peta (embed Google Maps, bukan Leaflet custom)
5. **Event & Turnamen** — jadwal event, cara daftar
6. **Tentang Kami** — cerita singkat, kenapa pilih Demo Padel
7. **Kontak / FAQ** — nomor WA, email, FAQ seputar booking

---

## 4. Fitur Utama (Fungsional)

### A. Booking Lapangan
- Pilih venue → pilih lapangan → pilih tanggal & slot jam (grid ketersediaan real-time/dummy)
- Ringkasan harga otomatis (per jam × durasi)
- Form pemesan: nama, no. HP, email
- Metode pembayaran demo: transfer/QRIS (upload bukti bayar, dummy)
- Halaman konfirmasi + notifikasi (dummy email/WA)

### B. Layanan Informasi
- Katalog layanan (sewa lapangan, sewa raket, coaching pribadi, event corporate)
- Setiap layanan: deskripsi singkat, harga mulai dari, tombol "Tanya via WhatsApp"
- FAQ interaktif (accordion)

### C. Konten Pendukung
- Blog/tips singkat (opsional, untuk SEO)
- Galeri foto venue
- Testimoni pelanggan (carousel sederhana)

---

## 5. Struktur Halaman Home (contoh wireframe teks)

```
[Navbar: Logo | Layanan | Booking | Venue | Event | Kontak | Tombol "Booking Sekarang"]

[Hero]
Judul besar: "Booking Lapangan Padel dalam 60 Detik"
Subjudul: penjelasan singkat + CTA "Cek Jadwal"
Gambar: venue lokal, natural light

[Section: Kenapa Demo Padel]
3-4 kartu: Booking Cepat | Harga Transparan | Coach Berpengalaman | Komunitas Aktif

[Section: Layanan]
Grid kartu layanan (sewa lapangan, coaching, event, F&B)

[Section: Venue Unggulan]
Preview 2-3 venue dengan foto + tombol "Lihat Detail"

[Section: Testimoni]
Slider kutipan pelanggan

[Section: CTA Booking]
Banner ajakan booking + tombol besar

[Footer]
Kontak, alamat, sosial media, link T&C dan Privacy Policy
```

---

## 6. Prompt Siap Pakai (untuk AI code generator / developer)

Gunakan prompt di bawah ini saat meminta Claude (atau tools lain) membuat kode website-nya:

```
Buatkan saya website demo bernama "Demo Padel" untuk platform booking lapangan padel
dan informasi layanan, dengan spesifikasi berikut:

BRAND
- Nama: Demo Padel
- Tagline: "Main Padel, Booking Gampang"
- Warna utama: hijau tosca gelap (#0F5C4C), aksen oranye hangat (#FF7A3D),
  background krem (#F6F1E7), teks gelap (#22221F)
- Font judul: Poppins ExtraBold atau Space Grotesk
- Font body: Inter atau Plus Jakarta Sans
- Tombol: rounded-xl (bukan pill), sentence case (bukan uppercase)

HALAMAN
1. Home: hero + CTA booking, kenapa pilih kami, preview layanan, preview venue,
   testimoni, CTA akhir
2. Booking: form pilih venue, lapangan, tanggal, jam, ringkasan harga,
   data pemesan, konfirmasi
3. Layanan: katalog (sewa lapangan, sewa alat, coaching, event/turnamen, F&B)
   dengan harga mulai dari dan tombol tanya via WhatsApp
4. Venue: daftar venue dengan foto, alamat, jam operasional, peta
5. Event: jadwal turnamen & cara daftar
6. Tentang Kami: cerita singkat & value
7. Kontak/FAQ: nomor WA, email, FAQ accordion

FUNGSI
- Kalender ketersediaan lapangan (bisa dummy data)
- Kalkulasi harga otomatis berdasarkan durasi
- Form booking tersimpan sementara (state/local, bukan database sungguhan
  untuk demo)
- Tombol floating WhatsApp
- Responsive (mobile-first)

TONE KONTEN
- Santai, praktis, ramah, bahasa Indonesia sehari-hari (bukan bahasa
  marketing formal ala klub premium)

Jangan meniru layout, warna, font, atau teks dari situs padel manapun yang
sudah ada — desain dan copywriting harus orisinal berdasarkan brief di atas.
```

---

## 7. Catatan Penting soal Orisinalitas

Supaya hasil akhir tidak dianggap plagiat dari Padel Pro atau situs padel lain:

- ✅ Ganti total palet warna, font, dan gaya tombol (sudah di atas)
- ✅ Tulis ulang semua copywriting dengan kata-kata sendiri — jangan salin kalimat dari situs referensi
- ✅ Gunakan foto/ilustrasi milik sendiri atau stok foto berlisensi, bukan gambar dari situs Padel Pro
- ✅ Susun ulang urutan section agar struktur halaman terasa berbeda, bukan hanya ganti warna
- ✅ Buat logo & nama brand sendiri ("Demo Padel") — jangan pakai logo/nama Padel Pro
- ⚠️ Hindari copy source code HTML/CSS mentah dari situs orang lain; tulis kode dari nol mengikuti brief desain di atas

---

*Dokumen ini siap dipakai sebagai acuan brief ke developer atau sebagai prompt untuk membuat prototipe website Demo Padel.*
