import { Event } from '../event.entity';
import { PartnerId } from '../partner.entity';

test('deve criar um evento válido', () => {
  const event = Event.create({
    name: 'Evento 1',
    description: 'Descrição do evento 1',
    date: new Date('2021-12-01T00:00:00Z'),
    partiner_id: new PartnerId(),
  });

  event.addSection({
    name: 'Setor 1',
    description: 'Descrição do setor 1',
    total_spots: 100,
    price: 1000,
  });

  expect(event.sections.size).toBe(1);
  expect(event.total_spots).toBe(100);

  const [section] = event.sections;

  expect(section.spots.size).toBe(100);
});

test('deve publicar todos os itens do evento', () => {
  const event = Event.create({
    name: 'Evento 1',
    description: 'Descrição do evento 1',
    date: new Date('2021-12-01T00:00:00Z'),
    partiner_id: new PartnerId(),
  });

  event.addSection({
    name: 'Setor 1',
    description: 'Descrição do setor 1',
    total_spots: 100,
    price: 1000,
  });

  event.addSection({
    name: 'Setor 2',
    description: 'Descrição do setor 2',
    total_spots: 100,
    price: 50,
  });

  event.publishAll();

  expect(event.is_published).toBe(true);

  const [section1, section2] = event.sections;

  expect(section1.is_published).toBe(true);
  expect(section2.is_published).toBe(true);

  [...section1.spots, ...section2.spots].forEach((spot) => {
    expect(spot.is_published).toBe(true);
  });
});
