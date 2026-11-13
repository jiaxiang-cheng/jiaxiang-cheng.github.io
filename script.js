document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.bib-toggle');

    toggles.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const box = document.getElementById(targetId);

            if (box.classList.contains('hidden')) {
                box.classList.remove('hidden');
                button.textContent = 'Hide BibTeX';
            } else {
                box.classList.add('hidden');
                button.textContent = 'BibTeX';
            }
        });
    });
});