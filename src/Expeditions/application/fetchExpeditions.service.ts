import { Expedition } from '../domain/expedition.type'
import ExpeditionApi from '../infrastructure/expeditions.api'

const fetchExpeditionService = async (): Promise<Expedition[]> => 
  ExpeditionApi.fetchExpeditions()

export default fetchExpeditionService

