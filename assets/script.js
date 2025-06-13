document.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const pour = document.querySelector('.pour');
    const liquidFill = document.getElementById('liquid-fill');

    const speed = parseFloat(pour.dataset.speed);
    pour.style.transform = `translate(-50%, ${scrollY * speed}px)`;

    const maxFillHeight = 300;
    const baseFill = 0.10 * maxFillHeight;

    const scrollMax = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollY / scrollMax, 1);

    const extraFill = scrollPercent * (maxFillHeight - baseFill) * 2;
    const newHeight = Math.min(baseFill + extraFill, maxFillHeight);

    liquidFill.style.height = `${newHeight}px`;

    // const baseOffsetX = 80;

    // document.querySelectorAll('.fall-away').forEach(el => {
    //     const speed = parseFloat(el.dataset.speed);
    //     const offset = baseOffsetX + scrollY * speed;
    //     const rotateDeg = scrollPercent * 15;

    //     if (el.classList.contains('fall-left')) {
    //         el.style.transform = `translateX(-${offset}px) rotate(-${rotateDeg}deg)`;
    //     } else {
    //         el.style.transform = `translateX(${offset}px) rotate(${rotateDeg}deg)`;
    //     }

    //     el.style.opacity = `${1 - scrollPercent * 3}`;
    // });
});
