function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

 // Tabs
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContend = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContend() {
        tabsContend.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContend(i = 0) {
        tabsContend[i].classList.add('show', 'fade');
        tabsContend[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContend();
    showTabContend();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContend();
                    showTabContend(i);
                }
            });
        }
    });
}

export default tabs;