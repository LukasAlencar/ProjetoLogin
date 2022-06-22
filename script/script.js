class User{
    constructor(){
        this.id = 1;
        this.arrayUser = [];
    }
    adicionar(){
        let user = this.lessenData();

        if(this.validaCampos(user)){
            this.salvar(user);
        }

        console.log(this.arrayUser);
        
    }

    salvar(user){
        this.arrayUser.push(user);
        this.id++;
    }

    lessenData(){
        let user = {};
        
        user.id = this.id;
        user.userName = document.getElementById('name').value;
        user.userLastName = document.getElementById('lastName').value;
        user.userEmail = document.getElementById('email').value;
        user.userPassword = document.getElementById('password').value;
        user.userTerms = document.getElementById('terms').value;
        user.userNewsletter = document.getElementById('newsLetter').value;


        
        return user;

    }

    validaCampos(user){
        let msg = ''
        
        if(user.userName == ''){
            msg += '- Informe o nome do usuario \n'
        }

        if(user.userLastName == ''){
            msg += '- Informe o sobrenome do usuario \n'
        }

        if(user.userEmail == ''){
            msg += '- Informe o Email do usuario \n'
        }

        if(user.userPassword == ''){
            msg += '- Informe a senha do usuario'
        }


        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    delet(){
        alert('detetado');
    }
}

var user = new User();

/* this.nome = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
        this.terms = '';
        this.newsletter = '';*/