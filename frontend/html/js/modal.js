function openModal(title, description) {
    var modal = document.getElementById('myModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');
    var body = document.body;

    modal.style.display = 'block';
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.classList.add('modal-open');
    body.style.marginRight = scrollbarWidth + 'px'; // Учитываем ширину полосы скролла
}

function closeModal() {
    var modal = document.getElementById('myModal');
    var body = document.body;

    modal.style.display = 'none';

    body.classList.remove('modal-open');
    body.style.marginRight = '0';
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '0';
    }
}
