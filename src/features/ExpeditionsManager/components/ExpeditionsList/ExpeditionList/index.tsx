import { Expedition } from "../../../../../Expeditions/domain/expedition.type";
import ExpeditionItem from "../../ExpeditionItem";

const ExpeditionsList: React.FC<{expeditions: Expedition[]}> = ({expeditions}) => 
  <div role="grid">
    { expeditions.map((expedition, iter) => 
      <div key={expedition.id} role="row"><ExpeditionItem expedition={expedition}/></div>
      )
    }
  </div>;

export default ExpeditionsList