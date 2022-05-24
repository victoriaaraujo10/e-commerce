export interface Produto {
    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    preco: number;
    emPromocao: boolean;
    quantidade: number;
    categoria: CategoriaProduto.ELETRO;
  }
  
  export enum CategoriaProduto{
    ELETRO = 'eletro',
  
  
  }