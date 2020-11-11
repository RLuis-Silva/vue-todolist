// console.log("Js funziona!", Vue);

const vue = new Vue({
    el: '#vue',
    data: {
    //   toDoPred1  : 'Fare i compiti',
    //   toDoPred2  : 'Fare la spesa',
    //   toDoPred3  : 'Fare il bucato'

      toDos: [
        'Fare i compiti',
        'Fare la spesa',
        'Fare il bucato'
      ],

      newToDo: ''
    },

    methods: {
        // cliccando il bottone 'aggiungi' la funzione aggiunge un To-do alla lista
        aggiungiTodo(){
            // gestisco il caso di input vuoto e dell' input con lo spazio (l'ultimo caso con trim())
            if(this.newToDo.trim() != ""){
                this.toDos.push(this.newToDo);
                // ripulisco l' input una volta aggiunto il nuovo Todo
                this.newToDo = "";
            }
           
        }
    }
});