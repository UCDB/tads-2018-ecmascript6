'use strict';

class ClienteRepository{

    constructor(){
        this.clientes =[];
    }

    incluirNovo(cliente){
        this.clientes.push(cliente);
    }
}

export default ClienteRepository;