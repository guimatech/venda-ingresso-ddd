import { Customer } from '../customer.entity';

test('deve criar um cliente válido', () => {
  Customer.create({
    name: 'Fulano',
    cpf: '625.377.440-98',
  });
});
