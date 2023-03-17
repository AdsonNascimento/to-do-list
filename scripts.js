const toDoList = {
    data() {
        return {
            list: [window.list],
            newItem: {
                active: false
            }
        }
    },
    methods: {
        addItem: function() {
            if (this.newItem.item) {
                this.list.push(this.newItem);
                this.newItem = {
                    active: false
                };

                localStorage.setItem("list", JSON.stringify(this.list));
            } else {
                alert('Preencha o campo antes de adicionar');
            }
        }
    },
    created() {
        this.list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : this.list;
    },
    updated() {
        localStorage.setItem("list", JSON.stringify(this.list));
    }
}

Vue.createApp(toDoList).mount('#app');