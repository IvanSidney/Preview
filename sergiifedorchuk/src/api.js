const Api = {

    getData() {
        const items = localStorage.getItem('items') || '[]';
        return JSON.parse(localStorage.getItem('items'));
    },

    setData(todoItems) {
        localStorage.setItem(JSON.stringify(todoItems));
    }
};

export default Api;