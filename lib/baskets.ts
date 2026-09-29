export type Basket = {
  id: string;
  name: string;
  price: number;
  highlight?: string;
  image?: string;
  subtitle?: string;
  items: string[];
};

export const BASKETS: Basket[] = [
  {
    id: "cesta-basica",
    name: "Cesta Básica",
    price: 210,
    highlight: "Mais vendida",
    image: "/cesta-basica.jpg",
    subtitle: "Tudo o que sua família precisa, em um só lugar!",
    items: [
      "1 cartela de ovo",
      "1 arroz 5kg",
      "2 feijão",
      "1 macarrão",
      "1 farinha",
      "1 flocão",
      "1 sal",
      "2 açúcar",
      "1 leite",
      "1 café",
      "1 leite em pó",
      "1 Mirabel",
      "1 Coca-Cola",
      "2 óleo",
      "1 margarina",
      "2 molho",
      "1 sabão em pó",
      "2 papel higiênico",
      "1 Kiboa",
      "2 detergente",
      "1 sabão em barra",
      "1 amaciante",
      "1 desinfetante",
      "2 sabonete",
      "1 creme dental",
    ],
  },
];

export function formatBasketPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
