// Mobile menu toggle functionality
        const mobileMenuButton = document.querySelector('.md\\:hidden');
        const mobileMenuItems = document.querySelector('.hidden.md\\:flex');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuItems.classList.toggle('hidden');
            mobileMenuItems.classList.toggle('flex');
            mobileMenuItems.classList.toggle('flex-col');
            mobileMenuItems.classList.toggle('absolute');
            mobileMenuItems.classList.toggle('top-16');
            mobileMenuItems.classList.toggle('left-0');
            mobileMenuItems.classList.toggle('right-0');
            mobileMenuItems.classList.toggle('bg-white');
            mobileMenuItems.classList.toggle('shadow-lg');
            mobileMenuItems.classList.toggle('p-4');
            mobileMenuItems.classList.toggle('space-y-4');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.tech-card, .timeline-item').forEach(el => {
            observer.observe(el);
        });
