document.addEventListener('DOMContentLoaded', () => {

    // ======== FUNGSI UNTUK NAVBAR MOBILE (HAMBURGER) ========
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Tampilkan/sembunyikan menu saat hamburger diklik
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animasi ikon hamburger (opsional, ganti ikon)
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Sembunyikan menu saat salah satu link diklik (untuk SPA)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            // Kembalikan ikon hamburger
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });


    // ======== FUNGSI UNTUK ACTIVE LINK SAAT SCROLL (SCROLLSPY) ========
    const sections = document.querySelectorAll('section[id]'); // Ambil semua <section> yang punya ID
    const headerHeight = document.querySelector('.navbar').offsetHeight;

    function activateNavLink() {
        let currentSection = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Beri sedikit offset
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });

        // Hapus 'active' dari semua link
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Tambah 'active' ke link yang sesuai
        const activeLink = document.querySelector(`.nav-menu a[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Panggil fungsi saat scroll
    window.addEventListener('scroll', activateNavLink);

    
    // ======== SIMULASI TAMBAH KE KERANJANG ========
    const addToCartButtons = document.querySelectorAll('.product-card .btn-secondary');
    const cartCounter = document.querySelector('.cart-counter');
    let itemsInCart = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            itemsInCart++;
            cartCounter.textContent = itemsInCart;
            
            // Beri feedback visual ke tombol
            button.textContent = 'Ditambahkan!';
            button.style.backgroundColor = 'var(--primary-color)';
            button.style.color = 'var(--text-primary)';

            setTimeout(() => {
                button.textContent = 'Tambah ke Keranjang';
                button.style.backgroundColor = 'transparent';
                button.style.color = 'var(--primary-color)';
            }, 1500); // Kembalikan setelah 1.5 detik
        });
    });

});