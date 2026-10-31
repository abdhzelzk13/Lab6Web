
const formWorkshop = document.getElementById("formWorkshop");

const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

const jumlahNama = document.getElementById("jumlahNama");
const pilihanSesi = document.getElementById("pilihanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

// Menghitung karakter nama
namaWorkshop.addEventListener("input", function() {
    jumlahNama.textContent = namaWorkshop.value.length;
});

// Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function() {
    pilihanSesi.textContent =
        "Sesi dipilih: " + sesiWorkshop.value;
});

// Validasi pendaftaran
formWorkshop.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanWorkshop.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent = "Email tidak valid.";
    } else if (sesi === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop.";
    } else {
        pesanWorkshop.textContent =
            "Pendaftaran berhasil! Selamat mengikuti workshop.";
    }
});

// Tombol reset
formWorkshop.addEventListener("reset", function() {
    jumlahNama.textContent = "0";
    pilihanSesi.textContent = "";
    pesanWorkshop.textContent = "";
});
sesiWorkshop.addEventListener("change", function() {
    console.log("Sesi dipilih:", sesiWorkshop.value);
});