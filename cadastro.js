class Cadastro{

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
        //Saida
       this.mensagem (errors);
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
}

var cad = new Cadastro();

