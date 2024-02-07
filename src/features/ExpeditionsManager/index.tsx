import ExpeditionList from "./components/ExpeditionsList"
import Loading from "./components/Loading"
import useExpeditionList, { SortField } from "./hooks/useExpeditionList"
import useFetchExpeditions from "./hooks/useFetchExpeditions"

import './index.css'

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
  // todo :: review after [as] [zod?]
  const listSortChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => 
    {setSortField(e.target.value as SortField)}

  return (
    <>
      <div className="list-tools-wrapper">
        <input name="referenceSearch" 
              type="text" 
              onChange={listQueryChangeHandler} 
              placeholder="Buscar"
              value={referenceSearch || ''}/>
        <div className='sort-field_selector'>
          <label htmlFor="sortFieldSelector" > Ordenar por:</label>
          <select name="sortFieldSelector" 
                  value={sortField || ''} 
                  onInput={listSortChangeHandler}>
              {
                Object
                  .entries(sortFieldOptions)
                  .map(([value, label], idx) => 
                    <option key={idx} value={value}>{label}</option>)
              }
          </select>
        </div>
      </div>
      <div>
        {loading ? <Loading /> : <ExpeditionList expeditions={expeditions}/> }
      </div>
    </>
  )
}

export default ExpeditionsManager
