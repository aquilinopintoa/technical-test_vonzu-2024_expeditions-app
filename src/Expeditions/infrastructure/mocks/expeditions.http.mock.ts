import { http, HttpResponse } from 'msw'
import { data as fakeData } from './fake-expeditions-data'
import { EXPEDITIONS_URL } from "../expeditions.api"

const ExpeditionApiMocks = [
  http.get(EXPEDITIONS_URL, () => {
    return HttpResponse.json(fakeData.found)
  }),
]

export default ExpeditionApiMocks
