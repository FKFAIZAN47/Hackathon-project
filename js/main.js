const menuIcon = document.getElementById('menu-icon');
        const mobileMenu = document.getElementById('mobile-menu');

        menuIcon.addEventListener('click', () => {
          mobileMenu.querySelector('ul').classList.toggle('show');
        });