export interface IItem {
  nome: string;
  rfid: string;
  imagem?: string;
  categoria: number;
  preco: number;
}

export interface Ibasket {
  id: number;
  nome: string;
  created_at?: Date;
  basket_items?: IItem[];
}

export interface IbasketItem {
  id: number;
  id_item: number[];
  id_basket: number;
}
