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
    },

    removeTodo(index) {
        const data = this.getData();
        console.log(data);
        data.splice(index, 1);
        console.log(data);
        this.setData(data);
    }
};

export default Api;