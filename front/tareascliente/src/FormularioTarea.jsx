import { AvForm, AvField, AvInput, AvGroup } from "availity-reactstrap-validation";
import {Button, Label} from 'reactstrap';
import React, { useRef } from "react";

const FormularioTarea = ({ tarea, onSubmit }) =>{
    let form=useRef();

    const _onSubmit=(values)=>{
        onSubmit(values);
        form.reset();
    }
    
    return(
        <>
            <h3 className="mb-3">{tarea ? 'Editar tarea' : 'Nueva tarea'}</h3>

            <AvForm ref={c=>(form=c)} onValidSubmit={(_,values)=> _onSubmit(values)}>
                <AvGroup className="mb-3">
                    <AvField name="nombre" label="Nombre" required value={tarea ? tarea.nombre:''}/>
                </AvGroup>
                <AvGroup check className="mb-3">
                    <AvInput type="checkbox" name="completado" checked={tarea ? tarea.completado:false}/>
                    <Label check for="completado">Comletado</Label>                    
                </AvGroup>
                <div className="text-end">
                    <Button color="primary">Guardar</Button>
                </div>
            </AvForm>
        </>
    )
}
export default FormularioTarea;