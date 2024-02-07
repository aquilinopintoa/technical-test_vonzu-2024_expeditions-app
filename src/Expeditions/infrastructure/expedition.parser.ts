import { Expedition } from "../domain/expedition.type";
import { ExpeditionDTO } from "./expedition.dto.type";

const expeditionToDomain = (expeditionDto: ExpeditionDTO): Expedition => ({
  ...expeditionDto,
  createdAt: new Date(expeditionDto.createdAt),
  updatedAt: new Date(expeditionDto.updatedAt),
  date: new Date(expeditionDto.date)
})

  export default expeditionToDomain