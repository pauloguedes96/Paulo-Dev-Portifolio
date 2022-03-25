let tabs = document.querySelectorAll('.tabs h3');
let tabContent = document.querySelectorAll('.tab-content div');

tabs.forEach((tab,index, array) => { 

    tab.addEventListener('click', () => {
        tabContent.forEach((content) => {
            content.classList.toggle('active');
        });
        tabs.forEach((tab) => {
            tab.classList.toggle('active');
        });
    });
});