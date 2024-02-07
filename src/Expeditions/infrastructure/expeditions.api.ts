import axios from 'axios'
import { Expedition } from '../domain/expedition.type'
import expeditionToDomain from './expedition.parser'
import { ExpeditionDTO } from './expedition.dto.type'

export const EXPEDITIONS_URL = `http://vonzu.api/expeditions`

const ExpeditionApi = {
  async fetchExpeditions(): Promise<Expedition[]> {
    const { data: expeditionDTOs } = await axios.get<ExpeditionDTO[]>(EXPEDITIONS_URL)

    return expeditionDTOs.map(expeditionToDomain)
  }
}

export default ExpeditionApi