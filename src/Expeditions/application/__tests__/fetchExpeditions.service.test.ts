import { HttpResponse, http } from 'msw';
import { server } from "../../../api-mocks/server";
import { EXPEDITIONS_URL } from '../../infrastructure/expeditions.api';
import { ExpeditionDTO } from '../../infrastructure/expedition.dto.type';
import fetchExpeditionService from '../fetchExpeditions.service';

describe('Expeditions', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());
  
  afterAll(() => server.close());

  it('should return expeditions sent by expedition.api', async () => {
    const expeditionsFromApi: ExpeditionDTO[] = [generateExpeditionInstance(101878, '0675IVKYM8HNS')]

    server.use(
      http.get(EXPEDITIONS_URL, () => {
        return HttpResponse.json(expeditionsFromApi)
      })
    )

    const expeditions = await fetchExpeditionService()

    expect(expeditions).toHaveLength(expeditionsFromApi.length)
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
})