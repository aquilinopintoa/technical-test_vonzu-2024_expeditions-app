import { useEffect, useState } from "react"
import { Expedition } from "../../../Expeditions/domain/expedition.type"

export type SortField = 'date' | 'updatedAt' | 'createdAt'

const filterByReference = (expeditions: Expedition[], searchValue: string) => 
  expeditions.filter((expedition) => expedition.reference.toLocaleLowerCase().includes(searchValue))

const sortByDateFields = (expeditions: Expedition[], sortField: SortField) => 
  expeditions.sort((expeditionA, expeditionB) => expeditionB[sortField].getTime() - expeditionA[sortField].getTime())
    

const useExpeditionList = (allExpeditions: Expedition[]) => {
  const [expeditions, setExpeditions] = useState<Expedition[]>([])
  const [referenceSearch, setReferenceSearch] = useState<string | ''>('')
  const [sortField, setSortField] = useState<SortField | ''>('')


  useEffect(() => {
    const filteredData = referenceSearch ? 
      filterByReference(allExpeditions, referenceSearch.toLocaleLowerCase()) : [...allExpeditions]
    const orderedData = sortField ? sortByDateFields(filteredData, sortField) : filteredData

    setExpeditions(orderedData)
  }, [allExpeditions, sortField, referenceSearch])

  return {
    referenceSearch,
    setReferenceSearch,
    sortField,
    setSortField,
    expeditions
  }
}

export default useExpeditionList