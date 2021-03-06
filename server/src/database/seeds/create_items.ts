import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Lâmpada', image: 'lampadas.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
  ]);
}
