import Cpf from '../../../../common/domain/value-objects/cpf.vo';
import { Customer, CustomerId } from '../customer.entity';

test('deve criar um cliente válido', () => {
  const customer = Customer.create({
    name: 'Fulano',
    cpf: '625.377.440-98',
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.name).toBe('Fulano');
  expect(customer.cpf.value).toBe('62537744098');

  const customer2 = new Customer({
    id: new CustomerId(customer.id.value),
    name: 'Ciclano',
    cpf: new Cpf('847.169.630-47'),
  });

  expect(customer.equals(customer2)).toBe(true);
});
