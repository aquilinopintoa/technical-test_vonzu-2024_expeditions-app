import { Expedition } from "../../../../Expeditions/domain/expedition.type";
import ExpeditionItem from "../ExpeditionItem";
import './index.css';

const ExpeditionsList: React.FC<{expeditions: Expedition[]}> = ({expeditions}) => 
  <div className="expedition-list-wrapper" role="grid">
    { expeditions.map((expedition, iter) => 
        <div key={iter} role="row" className="expedition-item-wrapper"><ExpeditionItem expedition={expedition}/></div>
      )
    }
  </div>;

export default ExpeditionsList