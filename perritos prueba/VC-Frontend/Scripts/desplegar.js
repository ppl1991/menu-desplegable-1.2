let listeElements = document.querySelectorAll('.list__button--click');

listeElements.forEach(listeElement => {
    listeElement.addEventListener('click', ()=> {

        listeElement.classList.toggle('arrow');

        let height = 0;
        let menu = listeElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});