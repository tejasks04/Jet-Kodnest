const section = document.querySelector('.sub6-section');

    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element

      const moveX = (x < rect.width / 2) ? 30 : -30;
      const moveY = (y < rect.height / 2) ? 30 : -30;

      section.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    section.addEventListener('mouseleave', () => {
      section.style.transform = 'translate(0, 0)';
    });

    