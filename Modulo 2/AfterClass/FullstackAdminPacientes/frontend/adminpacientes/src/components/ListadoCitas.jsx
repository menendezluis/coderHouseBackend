import React from 'react'

export default function ListadoCitas({registro, eliminarCita}){
    return(
     <div className="cita">
         <p>Mascota: <span>{registro.name}</span></p>
         <p>Dueño: <span>{registro.lastname}</span></p>
         <p>Phone: <span>{registro.phone}</span></p>
         <p>Fecha: <span>{registro.date}</span></p>
         <p>Hora: <span>{registro.time}</span></p>
         <p>Sintomas: <span>{registro.sintomas}</span></p>
         <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(registro.id)}
            >
             Eliminar &times;
         </button>
     </div>
    )
}