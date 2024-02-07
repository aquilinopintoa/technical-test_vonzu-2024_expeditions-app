import { render, screen } from '@testing-library/react'
import ExpeditionsManager from '..'
import { ExpeditionDTO } from '../../../Expeditions/infrastructure/expedition.dto.type';
import ExpeditionApi from '../../../Expeditions/infrastructure/expeditions.api';
import { generateExpeditionInstance } from '../../../Expeditions/infrastructure/mocks/fake-expedition.factory';

jest.mock('../../../Expeditions/infrastructure/expeditions.api', () => ({
  fetchExpeditions: jest.fn()
}))

describe('ExpeditionManager', () => {

  it('should renders expedition items returned by useFetchExpeditions', async () => {
    const expeditionsFromApi: ExpeditionDTO[] = [generateExpeditionInstance(101878, '0675IVKYM8HNS')];

    (ExpeditionApi.fetchExpeditions as jest.Mock).mockResolvedValue(expeditionsFromApi);

    render(<ExpeditionsManager />)

    await screen.findByRole('grid');
    const rows = screen.getAllByRole('row')

    expect(rows.length).toEqual(expeditionsFromApi.length)
  })

  it.todo('should render filtered expeditions applying reference search')
  it.todo('should render sorted expeditions by date')
  it.todo('should render sorted expeditions by updateAt')
  it.todo('should render sorted expeditions by createdAt')

})

