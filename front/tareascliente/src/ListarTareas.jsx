import { faCheckCircle, faClock, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from "react";

const ListarTareas = ({tareas, onDelete, onEdit}) =>{
    return (
        <>
            <h3>Mi lista de tareas</h3>

            {
                tareas.map(tarea =>
                    <div className="mb-3 shadow border rounded p-3" key={tarea.id}>
                        <div className="d-Flex justify-content-between mb-1">
                            <div className="fw-bold">{tarea.nombre}</div>
                            <div className="text-muted small">
                                <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={()=>onEdit(tarea)} />
                                <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2" onClick={()=>onDelete(tarea)}/>
                            </div>
                        </div>
                        <div>
                            {
                                tarea.completado ?
                                <div className="text-success samll">
                                   <FontAwesomeIcon icon={faCheckCircle} />{" "} 
                                   Completado
                                </div>
                                :
                                <div className="text-secondary samll">
                                   <FontAwesomeIcon icon={faClock} />{" "} 
                                   Pendiente
                                </div>
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ListarTareas;


