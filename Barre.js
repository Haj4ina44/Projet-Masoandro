document.getElementById('hamburger').addEventListener('click', function() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});
