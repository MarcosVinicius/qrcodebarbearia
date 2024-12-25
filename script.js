
   const galleryItems = document.querySelectorAll('.gallery-item img');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImg.src = item.src;
                modalImg.alt = item.alt;
            });
        });

        function closeModal() {
            modal.style.display = 'none';
        }

        function copyCode(code) {
            navigator.clipboard.writeText(code).then(() => {
                alert('Código copiado: ' + code);
            });
        }