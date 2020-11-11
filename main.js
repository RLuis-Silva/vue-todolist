// console.log("Js funziona!", Vue);

const vue = new Vue({
    el: '#vue',
    data: {
    //   toDoPred1  : 'Fare i compiti',
    //   toDoPred2  : 'Fare la spesa',
    //   toDoPred3  : 'Fare il bucato'

      toDos: [
        'Fare i compiti1',
        'Fare la spesa2',
        'Fare il bucato3'
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
           
        },


        cancellaTodo(index){
            // con pop() si cancella sempre l' ultimo elemento dell' array
            this.toDos.splice(index, 1);
            
            /* non funziona esattamente come vogliamo noi...
            cancella elementi un po' a cazzo di cane!
            index index
             */
            
        
        }
    }
});