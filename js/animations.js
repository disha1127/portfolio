// Animation functionality
function initAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    const profileImage = document.querySelector('.profile-image');
    profileImage.addEventListener('mouseover', () => {
        profileImage.style.transform = 'scale(1.05) rotate(5deg)';
    });
    profileImage.addEventListener('mouseout', () => {
        profileImage.style.transform = 'scale(1)';
    });
}