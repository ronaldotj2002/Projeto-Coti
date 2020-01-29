export class Produto {

    id: number;
    nome: string;
    preco: number;
    descricao: string;
    categoria: string;
    favorito: boolean;
    imagem: string;

    constructor(id ?: number, nome ?: string, preco ?: number, descricao ?: string, 
                categoria ?: string, vavorito ?: boolean, imagem ?: string) {

                    this.id = id;
                    this.nome = nome;
                    this.preco = preco;
                    this.descricao = descricao;
                    this.categoria = categoria;
                    this.favorito = this.favorito;
                    this.imagem = imagem;

    }
}

