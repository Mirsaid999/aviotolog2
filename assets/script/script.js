 const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dotsContainer = document.querySelector('.dots');
    let currentIndex = 0;

    function updateSlider() {
      const offset = -currentIndex * (slides[0].offsetWidth + 16);
      slidesContainer.style.transform = `translateX(${offset}px)`;
      dotsContainer.querySelectorAll('button').forEach((btn, i) => btn.classList.toggle('active', i === currentIndex));
    }

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.addEventListener('click', () => { currentIndex = i; updateSlider(); });
      dotsContainer.append(dot);
    });

    prevBtn.addEventListener('click', () => { currentIndex = (currentIndex > 0 ? currentIndex - 1 : slides.length - 1); updateSlider(); });
    nextBtn.addEventListener('click', () => { currentIndex = (currentIndex < slides.length - 1 ? currentIndex + 1 : 0); updateSlider(); });

    updateSlider();
    window.addEventListener('resize', updateSlider);

   const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.answer');
        a.style.height = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.height = answer.scrollHeight + 'px';
      }
    });
  });


 document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('auditModal');
    const openBtn = document.getElementById('buyPlanBtn');
    const closeBtn = modal.querySelector('.modal__close');

    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Закрытие по клику на фон
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('secondModal');
    const openButtons = document.querySelectorAll('.open-audit-modal');
    const closeBtn = modal.querySelector('.modal__close');

    openButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.add('active');
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
