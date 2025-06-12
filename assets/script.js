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

    const maxFillHeight = 300; // Total height of container
    const baseFill = 0.10 * maxFillHeight; // 10% starting fill

    const scrollMax = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollY / scrollMax, 1);

    // Increase fill speed (e.g. 2x)
    const extraFill = scrollPercent * (maxFillHeight - baseFill) * 2;
    const newHeight = Math.min(baseFill + extraFill, maxFillHeight);

    liquidFill.style.height = `${newHeight}px`;
});