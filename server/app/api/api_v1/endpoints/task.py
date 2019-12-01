from typing import List, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import crud
from app.api.utils.db import get_db
from app.db_models.models import Task
from app.schema.task import TaskCreate, TaskInDB, TaskUpdate
from app.schema.action import ActionCreate, ActionInDB

router = APIRouter()

@router.get('/', response_model=List[TaskInDB])
def get_tasks(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    is_completed: bool = False
) -> List[Optional[TaskInDB]] :
    task = crud.task.get_tasks(db, skip=skip, limit=limit, is_completed=is_completed)
    print(task)
    return task

@router.post('/', response_model=TaskInDB)
def create_task(
    db: Session = Depends(get_db),
    *,
    task_in: TaskCreate
) -> TaskInDB :
    task = crud.task.create_task(db, task_in=task_in)
    return task

@router.put('/{id}', response_model=TaskInDB)
def update_task(
    db: Session = Depends(get_db),
    *,
    id: str,
    task_in: TaskCreate
) -> TaskInDB :
    task = crud.task.update_task(
        db,
        task_on = crud.task.get_task(db,id=id),
        task_in=task_in
    )
    return task

@router.delete('/{id}', response_model=TaskInDB)
def delete_task(
    db: Session = Depends(get_db),
    *,
    id: str
) -> TaskInDB:
    task = crud.task.delete_task(db, id=id)
    return task

@router.post('/{id}', response_model=TaskInDB)
def complete_task(
    db: Session = Depends(get_db),
    *,
    id: str
) -> TaskInDB:
    task = crud.task.complete_task(db, id=id)
    return task

@router.post('/{id}/actions/', response_model=TaskInDB)
def create_action(
    db: Session = Depends(get_db),
    *,
    id: str,
    action_in: ActionCreate
) -> ActionInDB :
    action = crud.action.create_action()
    return action