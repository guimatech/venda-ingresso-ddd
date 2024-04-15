import { Customer } from '../../../events/domain/entities/customer.entity';
import { Name } from './name.vo';

test('deve criar um nome válido', () => {
  const name = new Name('aaaaa');
  expect(name.value).toBe('aaaaa');

  const customer = new Customer({
    cpf: '123.456.789-00',
    name,
  });

  customer.name = new Name('bbbb');
});
