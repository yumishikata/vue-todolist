var app = new Vue ({
    el: '#root',
    data: {
        lista: [
            'Fare la spesa',
            'Fare il bucato',
            'Fare i compiti'
        ],
        temp: '',
        input: ''
    },
    methods: {
        insertTodo: function(input, lista) {
            this.lista.push(this.input);
            this.input ="";
            this.temp = this.lista[this.lista.length-1];
        },
        deleteTodo: function(index,lista) {
            this.temp = this.lista[index];
            this.lista.splice(index, 1);
        },
        unDo: function(lista) {
            if(this.temp!=''){
                if(this.temp==this.lista[this.lista.length-1]){
                this.lista.splice(this.lista.length-1,1);
                this.temp= '';
                }
                else {
                    this.lista.push(this.temp);
                    this.temp= '';
                }
            }
        }
    }
})

