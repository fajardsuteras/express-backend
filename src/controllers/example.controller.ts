import { Request, Response } from "express"; // Mengimpor tipe Request dan Response dari Express untuk TypeScript

export default {
    // Mendefinisikan fungsi example sebagai handler untuk endpoint '/example'
    example(req: Request, res: Response) {
        res.status(200).json({ // Mengirimkan response dengan status 200 (OK) dalam format JSON
            message: "Success hit endpoint /example", // Pesan respons yang menunjukkan bahwa request berhasil
            data: "OK" // Data tambahan yang bisa dikembangkan sesuai kebutuhan
        });
    },
};
