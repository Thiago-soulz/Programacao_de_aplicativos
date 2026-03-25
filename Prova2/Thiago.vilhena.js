class Veiculo {
    #id;
    #marca;
    #modelo;
    #preco;
    #disponivel;

    constructor(id, marca, modelo, preco) {
        if (!marca || marca.length < 2) {
            throw new Error("Marca inválida");
        }

        if (!modelo || modelo.length < 2) {
            throw new Error("Modelo inválido");
        }

        if (preco <= 0) {
            throw new Error("Preço inválido");
        }

        this.#id = id;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#preco = preco;
        this.#disponivel = true;
    }

    
    getId() {
        return this.#id;
    }

    getMarcaModelo() {
        return `${this.#marca} ${this.#modelo}`;
    }

    getPreco() {
        return this.#preco;
    }

    isDisponivel() {
        return this.#disponivel;
    }

   
    alterarPreco(novoPreco) {
        if (!this.#disponivel) {
            console.log("nao pode alterar o preco do veiculo ");
            return;
        }

        if (novoPreco <= 0) {
            console.log("preco invalido");
            return;
        }

        this.#preco = novoPreco;
        console.log("Preço alterado com sucesso");
    }

   
    vender() {
        if (!this.#disponivel) {
            console.log("Veículo já foi vendido");
            return;
        }

        this.#disponivel = false;
        console.log("Veículo vendido com sucesso");
    }

    
    retornarEstoque() {
        if (this.#disponivel) {
            console.log("Veículo já está em estoque");
            return;
        }

        this.#disponivel = true;
        console.log("Veículo retornou ao estoque");
    }

   
    exibirDados() {
        const status = this.#disponivel ? "Disponível" : "Vendido";

        console.log("ID:", this.#id);
        console.log("Marca/Modelo:", this.#marca, this.#modelo);
        console.log("Preço:", this.#preco);
        console.log("Status:", status);
    }
}


class Carro extends Veiculo {
    #portas;

    constructor(id, marca, modelo, preco, portas) {
        super(id, marca, modelo, preco);

        if (!Number.isInteger(portas) || portas <= 0) {
            throw new Error("Número de portas inválido");
        }

        this.#portas = portas;
    }

    exibirDados() {
        super.exibirDados();
        console.log("Portas:", this.#portas);
        console.log("----------------------");
    }
}


class Moto extends Veiculo { #cilindradas;
    constructor(id, marca, modelo, preco, cilindradas) {
        super(id, marca, modelo, preco);

        if (!Number.isInteger(cilindradas) || cilindradas <= 0) {
            throw new Error("Cilindradas inválidas");
        }

        if (cilindradas < 50 || cilindradas > 2000) {
            throw new Error("Cilindradas fora do intervalo permitido");
        }

        this.#cilindradas = cilindradas;
    }

    exibirDados() {
        super.exibirDados();
        console.log("Cilindradas:", this.#cilindradas);
        console.log("----------------------");
    }
}
//class Admin extends User {
// constructor(id, name, email, password){
//super(id, name, email, password)
//}

//showAllUsers(){
//  return users
//}

//}
///const c1 = new Client(1, "Diego", "Diego@email.com", "123456")
//console.log(c1.showData());
//const a1 = new Admin(1, "Admin", "admin@gmail.com", "123456")
//console.log(a1.showAllUsers())
