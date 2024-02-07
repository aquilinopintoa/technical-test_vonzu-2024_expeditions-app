import { useEffect, useState } from "react"
import fetchExpeditionService from "../../../Expeditions/application/fetchExpeditions.service"
import { Expedition } from "../../../Expeditions/domain/expedition.type"

export const DEFAULT_SORT_FIELD = 'date'

const useFetchExpeditions = () => {
  const [expeditions, setExpeditions] = useState<Expedition[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchExpeditionService()
      .then((expeditionsData) => {
        setExpeditions(expeditionsData)
      })
      .finally(() => setLoading(false))
  }, [])

  return {
    expeditions,
    loading,
  }
}

export default useFetchExpeditions