import { Expedition } from "../../../../Expeditions/domain/expedition.type";
import './index.css'

import { format } from 'date-fns'

const formatDate = (date: Date) => format(date, 'dd/MM/yyyy')

const buildAddress = ({street, postalCode, country}: Expedition) => [street, postalCode, country].join(', ') 

const ExpeditionItem: React.FC<{expedition: Expedition}> = ({expedition}) => (
  <div className="expedition-card">
    <div>
      <p>Id: {expedition.id}</p>
      <p>Referencia: {expedition.reference}</p>
      <p>Fecha: {formatDate(expedition.date)}</p>
    </div>

    <div>
      <p>Username del cliente: {expedition.client.username}</p>
      <p>emails: {expedition.client.profile.emails.join(',')}</p>
    </div>

    <div>
      <p>Status: {expedition.statusCode}</p>
      <p>Creado: {formatDate(expedition.createdAt)}</p>
      <p>Actualizado: {formatDate(expedition.updatedAt)}</p>
      <p>Direccion: {buildAddress(expedition)}</p>
    </div>
  </div>
);

export default ExpeditionItem