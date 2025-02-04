// Animasi fade-in saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".portfolio-item");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200); // Delay setiap elemen
    });
});

// Modal untuk detail proyek
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

if (modal && modalTitle && modalDescription && closeBtn) {
    // Buka modal saat tombol "Lihat Detail" diklik
    document.querySelectorAll(".view-details").forEach((button) => {
        button.addEventListener("click", (e) => {
            const parent = e.target.closest(".portfolio-item");
            modalTitle.textContent = parent.dataset.title;
            modalDescription.textContent = parent.dataset.description;
            modal.style.display = "block";
        });
    });

    // Tutup modal saat tombol close diklik
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Tutup modal saat area luar diklik
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}