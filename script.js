document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('webcamFeed');
    const startButton = document.getElementById('startButton');
    const statusMessage = document.getElementById('statusMessage');
    const arOverlay = document.getElementById('arOverlay');
    const landmarkInfo = document.getElementById('landmarkInfo');

    // Fungsi untuk memulai streaming video dari kamera
    async function startCamera() {
        // Objek konfigurasi yang meminta video dari perangkat
        const constraints = { video: true };

        try {
            // Meminta izin akses kamera
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            
            // Menampilkan stream ke elemen <video>
            video.srcObject = stream;
            
            // Sembunyikan tombol dan update status
            startButton.style.display = 'none';
            statusMessage.textContent = 'Kamera aktif. Silakan arahkan ke landmark...';

            // *** TEMPAT IMPLEMENTASI AI UNTUK LANDMARK RECOGNITION ***
            // Di sini nanti Anda akan menggunakan TensorFlow.js atau library AI lainnya
            // untuk memproses setiap frame dari 'video' dan melakukan deteksi.

            // Contoh Simulasi Deteksi (Hanya Simulasi)
            setTimeout(() => {
                statusMessage.textContent = 'Landmark Lawang Sewu Dikenali!';
                landmarkInfo.textContent = 'Lawang Sewu adalah gedung bersejarah di Semarang yang dulunya kantor pusat NIS.';
                arOverlay.classList.remove('hidden');
            }, 5000); // Simulasi deteksi setelah 5 detik

        } catch (error) {
            // Penanganan jika pengguna menolak izin atau kamera tidak ditemukan
            console.error('Terjadi kesalahan saat mengakses kamera:', error);
            statusMessage.textContent = 'Error: Gagal mengakses kamera. Pastikan izin telah diberikan.';
            startButton.style.display = 'block'; // Tampilkan lagi tombol
        }
    }
       // Menambahkan event listener ke tombol
    startButton.addEventListener('click', startCamera);
});