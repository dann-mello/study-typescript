//Objetos e interfaces

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Daniel',
    idade: 19
}

const pessoa2: Pessoa = {
    nome: 'Paulo',
    idade: 78,
    profissao: 'Desenvolvedor'
}

const arrayPessoa: Pessoa[] = [
    pessoa, 
    pessoa2
] 

const arrayNumeros: number[] = [
    1, 
    2
]

const arrayString: string[] = [
    'pessoa', 
    'pessoa2'
]