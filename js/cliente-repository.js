'use strict';

class ClienteRepository{

    constructor(){
        this.clientes =[];
        this.sequenceId=1;
    }

    salvar(cliente){  //{id:10, nome:"jao"}
        if (cliente.id!=undefined && cliente.id!=""){
            //edicao
            let arrCli = this.clientes.filter(function (obj)  {  if (obj.id==cliente.id) return true } );
            arrCli[0].nome= cliente.nome;
            arrCli[0].email= cliente.email;
            
        }else{
            //novo
            cliente.id = this.sequenceId++;
            this.clientes.push(cliente);
        }
    }

    excluir(pId){
            
        let index=  this.clientes.findIndex(  (obj)   =>  obj.id===pId  );            
        this.clientes.splice(index, 1);
    }

    buscarPorId(pId){
            
        let arr=  this.clientes.filter(  (obj)   =>  obj.id===pId  );      
        return arr[0];
       
    }

    buscarTodos(){
        return this.clientes;
    }
}

export default ClienteRepository;