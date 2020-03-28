var app = new Vue({
    el: '#id_main',
    data: {
        noOfTask: 0,
        tasks: [],
        inputTask: ''
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = '';
            this.noOfTask += 1;
        }
    }
});