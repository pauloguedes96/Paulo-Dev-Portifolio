let modal = document.querySelector('#modal');
modal.style.display = 'none';

function mostraModal() {

    if (modal.style.display == 'none') {
        modal.style.display = 'flex';
    }
    else {
        modal.style.display = 'none';
    }
}

