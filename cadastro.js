class Cadastro{

    constructor(){
     this.arrClientes = [];
    }
   

    leitura(){
            //Lendo
            let campoNome= document.getElementById("nome");
            let valorNome = campoNome.value;

            let campoEmail = document.getElementById("email");
            let valorEmail =  campoEmail.value;
            //objeto
            let cliente = {};

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

        //Incluindo do vetor
        if (errors.length==0){
            this.arrClientes.push(cliente);
        }

        //Limpar o form
        this.limparForm();
       //Saida
       this.mensagem (errors);

        //Gerar a lista da tela
       this.atualizarLista();
    }

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

    limparForm(){
        let campoNome= document.getElementById("nome");
        campoNome.value="";

        let campoEmail = document.getElementById("email");
         campoEmail.value="";
    }

    atualizarLista(){
        let table  = document.getElementById("tbclientes"); 
      
        table.innerHTML= "";
       
        for (let i=0; i< this.arrClientes.length; i++){

            let cliente =  this.arrClientes[i];
            let tr = document.createElement("tr");  
          
            //TD - NOME
            let td = document.createElement("td");  
            let texto=  document.createTextNode(cliente.nome) ; 
            td.appendChild(texto);
            tr.appendChild(td);
          

            let td2 = document.createElement("td");  
            let texto2=  document.createTextNode(cliente.email) ; 
            td2.appendChild(texto2);
            tr.appendChild(td2);
           
            //TD - EMAL


            table.appendChild(tr); 
        }
    
    }
}

var cad = new Cadastro();

