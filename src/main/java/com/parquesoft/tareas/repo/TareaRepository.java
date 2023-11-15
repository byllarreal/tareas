package com.parquesoft.tareas.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.parquesoft.tareas.model.Tarea;

public interface TareaRepository extends MongoRepository<Tarea, String> {
}
