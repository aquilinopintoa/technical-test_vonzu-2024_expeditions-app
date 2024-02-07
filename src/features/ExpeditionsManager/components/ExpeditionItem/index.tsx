import { Expedition } from "../../../../Expeditions/domain/expedition.type";

const ExpeditionItem: React.FC<{expedition: Expedition}> = ({expedition}) => (
  <div>
    <div>{expedition.id}</div>
    <div>{expedition.reference}</div>
    <div>{expedition.client.username}</div>
    <div>{expedition.statusCode}</div>
  </div>
);

export default ExpeditionItem