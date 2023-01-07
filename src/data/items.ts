import expressoTradicional from '../assets/expresso.png'
import expressoAmericano from '../assets/americano.png'
import expressoCremoso from '../assets/expresso-cremoso.png'
import cafeGelado from '../assets/cafe-gelado.png'
import cafeLeite from '../assets/cafe-com-leite.png'
import latte from '../assets/latte.png'
import capuccino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mochaccino from '../assets/mochaccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import havaiano from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export const items = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    image: expressoTradicional,
    types: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    image: expressoAmericano,
    types: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '3',
    name: 'Expresso ',
    image: expressoCremoso,
    types: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '4',
    name: 'Expresso ',
    image: cafeGelado,
    types: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '5',
    name: 'Expresso ',
    image: cafeLeite,
    types: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '6',
    name: 'Latte',
    image: latte,
    types: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '7',
    name: 'Capuccino',
    image: capuccino,
    types: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '8',
    name: 'Macchiato',
    image: macchiato,
    types: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '9',
    name: 'Mocaccino',
    image: mochaccino,
    types: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    image: chocolateQuente,
    types: ['Tradicional', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '11',
    name: 'Cubano',
    image: cubano,
    types: ['Tradicional', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '12',
    name: 'Havaiano',
    image: havaiano,
    types: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '13',
    name: 'Árabe',
    image: arabe,
    types: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '14',
    name: 'Irlandês',
    image: irlandes,
    types: ['Tradicional', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
