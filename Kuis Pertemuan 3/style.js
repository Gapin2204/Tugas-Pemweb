// Fungsi untuk menambahkan event hover dan click pada tabel
function initTableEvents() {
    const rows = document.querySelectorAll("#tabel-mahasiswa tbody tr");
    
    rows.forEach(row => {
        // Event Hover: Mengubah warna baris saat dihover
        row.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#B2CDE0";  // Ubah warna saat dihover
        });
        row.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";  // Kembalikan ke warna semula
        });

        // Event Click: Highlight baris yang diklik
        row.addEventListener("click", function() {
            highlightRow(rows, this); // Memanggil fungsi highlightRow
            showStudentPopup(this);  // Memanggil fungsi untuk menampilkan popup
        });

        // Event Hover: Menebalkan teks Nama saat dihover
        const nameCell = row.cells[1];  // Ambil kolom Nama
        nameCell.addEventListener("mouseover", function() {
            this.classList.add("bold-text");  // Tambah kelas untuk teks tebal
        });
        nameCell.addEventListener("mouseout", function() {
            this.classList.remove("bold-text");  // Kembalikan ke teks normal setelah hover
        });

        // Event Click: Mengubah Teks NIM Menjadi Italic saat diklik
        const nimCell = row.cells[2];  // Ambil kolom NIM
        nimCell.addEventListener("click", function(event) {
            event.stopPropagation(); // Mencegah event click baris
            this.classList.toggle("italic-text");  // Toggle italic saat NIM diklik
        });
        // Event Baru: Mengubah warna Tanggal Lahir saat diklik
        const dobCell = row.cells[3];  // Ambil kolom Tanggal Lahir
        dobCell.addEventListener("click", function(event) {
            event.stopPropagation(); // Mencegah event click baris
            this.style.color = this.style.color === "red" ? "" : "red";  // Toggle warna merah saat diklik
        });
    });
}

// Fungsi untuk highlight baris yang diklik
function highlightRow(rows, clickedRow) {
    rows.forEach(row => row.classList.remove("click-highlight")); // Menghapus highlight dari semua baris
    clickedRow.classList.add("click-highlight"); // Menambahkan highlight ke baris yang diklik
}

// Fungsi untuk menampilkan popup dengan detail mahasiswa
function showStudentPopup(row) {
    const no = row.cells[0].textContent;
    const nama = row.cells[1].textContent;
    const nim = row.cells[2].textContent;
    const tanggalLahir = row.cells[3].textContent;
    const kelas = row.cells[4].textContent;

    // Menampilkan detail mahasiswa di dalam popup
    const popupContent = document.getElementById("popup-content");
    popupContent.textContent = `No: ${no}\nNama: ${nama}\nNIM: ${nim}\nTanggal Lahir: ${tanggalLahir}\nKelas: ${kelas}`;

    // Menampilkan popup dan overlay
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Memanggil fungsi initTableEvents untuk menginisialisasi event
initTableEvents();

