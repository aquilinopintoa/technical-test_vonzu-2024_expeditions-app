
import ExpeditionApi from '../../infrastructure/expeditions.api';
import { ExpeditionDTO } from '../../infrastructure/expedition.dto.type';
import fetchExpeditionService from '../fetchExpeditions.service';
import { generateExpeditionInstance } from '../../infrastructure/mocks/fake-expedition.factory';

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


  it.todo('should return domain execption in error case')
})
