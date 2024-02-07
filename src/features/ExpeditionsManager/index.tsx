import ExpeditionList from "./components/ExpeditionsList/ExpeditionList"
import useFetchExpeditions from "./hooks/useFetchExpeditions"

function ExpeditionsManager() {

  const {expeditions, loading} = useFetchExpeditions()

  return (
    <>
      <div>
        {loading ? "Loading..." : <ExpeditionList expeditions={expeditions}/> }
      </div>
    </>
  )
}

export default ExpeditionsManager
