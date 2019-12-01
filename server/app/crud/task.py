from typing import List, Optional

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.db_models.models import Task, Action
from app.schema.task import TaskCreate, TaskInDB, TaskUpdate

def get_tasks(
    db: Session,
    *,
    skip: int = 0,
    limit: int = 0,
    is_completed: bool = False
) -> List[Optional[Task]]:
    tasks = db.query(Task).filter(Task.is_completed == is_completed)\
        .order_by(Task.name).offset(skip).limit(limit).all()
    [ task.actions for task in tasks]
    return tasks

def get_task(
    db: Session,
    *,
    id: str
) -> Task :
    return db.query(Task).filter(Task.id==id).first()

def create_task(
    db: Session,
    *,
    task_in: TaskCreate
) -> Task :
    task_data = jsonable_encoder(task_in)
    task = Task(**task_data)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

def update_task(
    db: Session,
    *,
    task_on: Task,
    task_in: TaskUpdate,
) -> Task :
    task_data = jsonable_encoder(task_on)
    update_data = task_in.dict(skip_defaults=True)
    for field in task_data:
        if field in update_data:
            setattr(task_on, field, update_data[field])
    db.add(task_on)
    db.commit()
    db.refresh(task_on)
    return task_on

def complete_task(
    db: Session,
    *,
    id: str
) -> Task :
    task = db.query(Task).filter(Task.id == id).first()
    task.is_completed = True
    db.commit()
    db.refresh(task)
    return task

def delete_task(
    db: Session,
    *,
    id: str
) -> Task:
    task = db.query(Task).filter(Task.id == id).first()
    db.delete(task)
    db.commit()
    return task