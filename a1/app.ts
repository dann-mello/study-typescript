const numero: number = 15;
if (numero > 15) {
    console.log('Numero maior que 15');
} else if (numero === 15) {
    console.log('Numero igual 15');
} else {
    console.log('Numero menor que 15');
}

const typeUser = {
    admin: 'Seja bem vindo',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
}

const usuario = 'admin';

function validateUser(user:string){
    console.log(typeUser[user as keyof typeof typeUser])
}

validateUser(usuario)