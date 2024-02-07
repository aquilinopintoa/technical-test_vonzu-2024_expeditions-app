
import ExpeditionApi from '../../infrastructure/expeditions.api';
import { ExpeditionDTO } from '../../infrastructure/expedition.dto.type';
import fetchExpeditionService from '../fetchExpeditions.service';

jest.mock('../../infrastructure/expeditions.api', () => ({
  fetchExpeditions: jest.fn()
}))

describe('Expeditions', () => {
  it('should return expeditions sent by expedition.api', async () => {
    const expeditionsFromApi: ExpeditionDTO[] = [generateExpeditionInstance(101878, '0675IVKYM8HNS')];

    (ExpeditionApi.fetchExpeditions as jest.Mock).mockResolvedValue(expeditionsFromApi);

    const expeditions = await fetchExpeditionService();

    expect(expeditions).toHaveLength(expeditionsFromApi.length);
  })
})

const generateExpeditionInstance = (id: number, reference: string) => ({
  id,
  reference,
  type: "delivery",
  date: 1659398400000,
  statusCode: "incidence",
  street: "Gran Via de les Corts Catalanes 645",
  postalCode: "Spain",
  city: "08010",
  country: "españa",
  createdAt: "2022-07-27T14:52:14Z",
  updatedAt: "2022-07-27T15:52:22Z",
  description: "Veg It",
  barcodes: ["1018831029UHVH3GWAS001"],
  client: {
    username: "clienttest",
    profile: {
      emails: ["clienttest@vonzu.es"],
      phones: ["637492532"],
      name: "client test"
    }
  }
});