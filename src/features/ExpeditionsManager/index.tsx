import ExpeditionList from "./components/ExpeditionsList/ExpeditionList"
import useExpeditionList, { SortField } from "./hooks/useExpeditionList"
import useFetchExpeditions from "./hooks/useFetchExpeditions"

const sortFieldOptions = {
  '': 'Seleccione',
  'date': 'Fecha',
  'createdAt': 'Fecha de creacion',
  'updatedAt': 'Fecha de actualizacion'
}

function ExpeditionsManager() {

  const {expeditions: allExpeditions, loading} = useFetchExpeditions()
  const { 
    referenceSearch,
    setReferenceSearch,
    sortField,
    setSortField,
    expeditions
  } = useExpeditionList(allExpeditions)

  const listQueryChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => 
    {setReferenceSearch(e.target.value)}
  // todo :: review after [as] [zod]
  const listSortChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => 
    {setSortField(e.target.value as SortField)}

  return (
    <>
      <div>
        <input name="referenceSearch" type="text" onChange={listQueryChangeHandler} value={referenceSearch || ''}/>
      </div>  
      <div>
        <select name="sortFieldSelector" value={sortField || ''} onInput={listSortChangeHandler}>
          {
            Object
              .entries(sortFieldOptions)
              .map(([value, label], idx) => <option key={idx} value={value}>{label}</option>)
          }
        </select>
      </div>
      <div>
        {loading ? "Loading..." : <ExpeditionList expeditions={expeditions}/> }
      </div>
    </>
  )
}

export default ExpeditionsManager
