document.addEventListener('DOMContentLoaded', () => {

    const recommendationForm = document.getElementById('recommendationForm');
    const recommendationsContainer = document.getElementById('recommendationsContainer');
    const popupMessage = document.getElementById('popupMessage');

    recommendationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // stop the page from reloading

        const name = document.getElementById('recName').value.trim();
        const text = document.getElementById('recText').value.trim();

        if (name === '' || text === '') {
            return;
        }

        const newBox = document.createElement('div');
        newBox.className = 'recommendation-box';
        newBox.innerHTML = `
            <p class="rec-text">"${text}"</p>
            <h4 class="rec-author">— ${name}</h4>
        `;

        recommendationsContainer.appendChild(newBox);
        showPopup();

        recommendationForm.reset();
    });

    function showPopup() {
        popupMessage.classList.add('show');
        setTimeout(() => {
            popupMessage.classList.remove('show');
        }, 3000);
    }
});