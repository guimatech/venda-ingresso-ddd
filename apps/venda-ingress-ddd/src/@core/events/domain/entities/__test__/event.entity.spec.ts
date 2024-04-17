import { EventSection } from '../event-section';
import { EventSpot } from '../event-spot';
import { Event } from '../event.entity';
import { PartnerId } from '../partner.entity';

test('deve criar um evento válido', () => {
  const event = Event.create({
    name: 'Evento 1',
    description: 'Descrição do evento 1',
    date: new Date('2021-12-01T00:00:00Z'),
    partiner_id: new PartnerId(),
  });

  const section = EventSection.create({
    name: 'Setor 1',
    description: 'Descrição do setor 1',
    total_spots: 100,
    price: 1000,
  });

  event.sections.add(section);

  const spot = EventSpot.create();

  section.spots.add(spot);

  console.dir(event.toJSON(), { depth: 10 });
});
