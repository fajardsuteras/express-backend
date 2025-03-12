import express from "express"; // Mengimpor modul Express untuk membuat aplikasi web
import router from "./routes/api"; // Mengimpor router dari file api.js yang berisi rute aplikasi

const app = express(); // Membuat instance aplikasi Express
const PORT = 3000; // Menentukan port yang akan digunakan server

app.use('/api', router); // Menggunakan router yang diimpor untuk menangani rute dengan prefix '/api'

app.listen(PORT, () => { // Menjalankan server dan mendengarkan permintaan pada port yang ditentukan
    console.log(`Server is running on http://localhost:${PORT}`); // Menampilkan pesan ketika server berhasil berjalan
});