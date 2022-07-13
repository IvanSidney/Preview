const Api = {

    getData() {
        try {
            return JSON.parse(localStorage.getItem('items')) || [];
        } catch (e) {
            return [];
        }
        
        
    },

    setData(todoItems) {
        localStorage.setItem('items', JSON.stringify(todoItems));
    },

    addTodo(item) {
        const data = this.getData();
        data.push(item);
        this.setData(data);
        
    }
};

export default Api;