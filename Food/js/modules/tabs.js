function tabs() {

 // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContend = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

    function hideTabContend() {
        tabsContend.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContend(i = 0) {
        tabsContend[i].classList.add('show', 'fade');
        tabsContend[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContend();
    showTabContend();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContend();
                    showTabContend(i);
                }
            });
        }
    });
}

module.exports = tabs;