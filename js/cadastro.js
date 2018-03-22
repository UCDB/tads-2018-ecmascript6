'use strict';

import ClienteRepository from '../js/cliente-repository.js';

class Cadastro{

    constructor(){
        this.repository = new ClienteRepository();
      
    }
   

    leitura(){
            //Lendo

            let campoId= document.getElementById("id");
            let valorId = campoId.value;

            let campoNome= document.getElementById("nome");
            let valorNome = campoNome.value;

            let campoEmail = document.getElementById("email");
            let valorEmail =  campoEmail.value;
            //objeto
            let cliente = {};

            cliente.id=valorId;
            cliente.nome= valorNome;
            cliente.email= valorEmail;
            
            return  cliente;
    }

    validar (cliente){

       
        let errors = [];

         if ( cliente.nome =="") {
            errors.push( {msg:"Campo nome Vazio"} );
         }else {
            //Validar Nome
            let arrNome = cliente.nome.split(" ");
            
            if ( arrNome.length <2 ){
                    errors.push( {msg:"Apenas o primeiro nome encontrado"} );
            }
            for (let i = 0 ; i< arrNome.length ; i++){
                if(arrNome[i].length==0){
                    errors.push( {msg:"Sobrenome Invalido"} );
                }
    
            }
        }

         return errors; 

    }


    salvar (){
        //leitura
       let cliente =  this.leitura();
        //Valida
       let errors = this.validar (cliente);

       if(errors.length==0){
         this.repository.salvar(cliente);
         //Gerar a lista da tela
        this.atualizarLista();
        //Limpar o form
         this.limparForm();
       }else{
         this.mensagem (errors);
       }

    }

    //DOM
    mensagem(errors){

        let msg = document.getElementById("mensagem");
     
        if (errors.length==0){
            msg.innerHTML = "Sucesso!";
        }    else {

            for (let i =0 ; i< errors.length ; i++){
                msg.innerHTML += errors[i].msg + "<br>";
            }
        }

    }

     //DOM
    limparForm(){
      

        let campoId= document.getElementById("id");
        campoId.value="";

        let campoNome= document.getElementById("nome");
        campoNome.value="";

        let campoEmail = document.getElementById("email");
         campoEmail.value="";

         
    }

   

    excluir(id){
      if ( window.confirm('Confirma exclusão?')){
       this.repository.excluir(id);
       this. atualizarLista();
       this.limparForm();
      }
    }

    editar (id){
           let cli = this.repository.buscarPorId(id);


           let campoId= document.getElementById("id");
           campoId.value=cli.id;


           let campoNome= document.getElementById("nome");
           campoNome.value=cli.nome;
   
           let campoEmail = document.getElementById("email");
            campoEmail.value=cli.email;

    }


    atualizarLista(){
        let table  = document.getElementById("tbcli"); 
        let arrClientes = this.repository.buscarTodos();
        const str = 
        `<table>
            <thead>
                <td> Nome </td>
                <td> E-mail </td>
                <td> Ação</td>
            </thead>

            <tbody>
            ${ arrClientes.map(function (cli, index) {
                return `<tr> 
                    <td> ${cli.nome} </td>
                    <td> ${cli.email}  </td>
                    <td> 
                        <button onclick='cad.excluir(${cli.id})'>Excluir</button>
                        <button onclick='cad.editar(${cli.id})'>Editar</button>
                    </td>
                </tr>`

             }).join('')
            }
               
            
            </tbody>
        </table>`;
       
       
       
         table.innerHTML= str;
        
    }
    
}

export default Cadastro;

