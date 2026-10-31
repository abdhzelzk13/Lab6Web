# Lab6Web

## PRAKTIKUM 6: JavaScript DOM dan Event Handling

**Nama:** Abid Hazel Zaki  
**NIM:** 312510018  
**Kelas:** I.25.3A

## Hasil Praktikum
- Mengubah teks dengan DOM
![Gambar 1](Screenshot/Mengubah%20teks%20dengan%20DOM.png)
- Event Click
![Gambar 2](Screenshot/Event%20Click.png)
- Mengubah kelas dan gaya CSS
![Gambar 3](Screenshot/Mengubah%20kelas%20dan%20gaya%20CSS.png)
- Event input dan penghitung karakter
![Gambar 4](Screenshot/Event%20input%20dan%20pengitung%20karakter.png)
- Validasi form pendaftaran
![Gambar 5](Screenshot/Validasi%20form%20pendaftaran.png)
- Daftar tugas sederhana (To-do list)
![Gambar 6](Screenshot/Dafttra%20tugas%20sederhana%20(To-do%20list).png)
- Mini Project - Form Pendaftaran Workshop
![Gambar 7](Screenshot/Mini%20Project%20-%20Form%20Pendaftaran%20Workshop.png)

## Eksperimen Mandiri
- Hapus Tugas
![Gambar 8](Screenshot/Eksperimen%201%20-%20Hapus%20Tugas.png)
- Validasi Nama
![Gambar 9](Screenshot/Eksperimen%202%20-%20Validasi%20Nama.png)
- Dropdown Sesi
![Gambar 10](Screenshot/Eksperimen%203%20-%20Dropdown%20Sesi.png)
- Sembunyi Paragraf
![Gambar 11](Screenshot/Eksperimen%204%20-%20Sembunyi%20Paragraf.png)
- Script Tanpa Defer
![Gambar 12](Screenshot/Eksperimen%205%20-%20Script%20Tanpa%20Defer.png)

## Pertanyaan Evaluasi
1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (Document Object Model) adalah representasi dokumen HTML dalam bentuk objek yang dapat diakses dan dimanipulasi JavaScript. Manfaatnya adalah mengubah konten, tampilan, dan merespons tindakan pengguna.

2. Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?
    - getElementById() memilih elemen berdasarkan ID.
    - querySelector() memilih elemen pertama yang cocok dengan selector CSS.
    - querySelectorAll() memilih semua elemen yang cocok dengan selector CSS.
3. Apa fungsi addEventListener() dan sebutkan tiga contoh event?

addEventListener() digunakan untuk mendeteksi kejadian dan menjalankan fungsi ketika kejadian tersebut terjadi.

Contoh event:
    - click: ketika tombol diklik.
    - input: ketika pengguna mengetik.
    - change: ketika nilai input berubah.
4. Mengapa event.preventDefault() digunakan pada event submit form?

Untuk mencegah perilaku bawaan browser, seperti halaman dimuat ulang, sehingga JavaScript dapat melakukan validasi terlebih dahulu.

5. Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?

textContent digunakan untuk menampilkan teks biasa dan lebih aman untuk teks dari pengguna. innerHTML digunakan untuk memasukkan markup HTML, tetapi berisiko jika memasukkan konten pengguna yang tidak dipercaya.

6. Bagaimana classList.toggle() membantu mengubah tampilan elemen?

classList.toggle() digunakan untuk menambahkan class jika belum ada atau menghapusnya jika sudah ada. Dengan demikian, tampilan elemen dapat diubah secara bergantian.

7. Sebutkan minimal tiga skenario pengujian validasi form.
    - Semua kolom kosong: menampilkan pesan nama wajib diisi.
    - Email tidak valid: menampilkan pesan email tidak valid.
    - Usia di bawah 17 tahun: menampilkan pesan usia tidak valid.