import express from "express"; // Mengimpor modul Express untuk membuat router
import exampleController from "../controllers/example.controller"; // Mengimpor controller yang menangani request

const router = express.Router(); // Membuat instance router dari Express

router.get("/example", exampleController.example); // Menangani request GET ke endpoint '/example' dan memanggil metode example dari exampleController

export default router; // Mengekspor router agar bisa digunakan di file lain
