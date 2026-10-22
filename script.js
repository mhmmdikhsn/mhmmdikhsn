document.getElementById('year').textContent = new Date().getFullYear();

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
const themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleLightIconMobile.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleDarkIconMobile.classList.remove('hidden');
}

function toggleTheme() {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    themeToggleDarkIconMobile.classList.toggle('hidden');
    themeToggleLightIconMobile.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

document.getElementById('btn-wa').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phoneNumber = '6281315950428';

    if (!name || !message) {
        alert('Harap isi Nama dan Pesan Anda terlebih dahulu.');
        return;
    }

    const text = `Halo, nama saya *${name}*.\n\n${message}`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
});

document.getElementById('btn-email').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const myEmail = 'mhmmdikhsn257@gmail.com';

    if (!name || !message) {
        alert('Harap isi Nama dan Pesan Anda terlebih dahulu.');
        return;
    }

    const subject = encodeURIComponent(`Pesan Portofolio dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\n\nPesan:\n${message}`);
    const mailtoUrl = `mailto:${myEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
});