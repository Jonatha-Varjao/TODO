from typing import List, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import crud
from app.api.utils.db import get_db
from app.db_models.models import Action
from app.schema.action import ActionCreate, ActionInDB, ActionUpdate

router = APIRouter()

# add action em alguma task
# remover action

@router.delete('/{id}', response_model=ActionInDB)
def delete_action(
    db: Session = Depends(get_db),
    *,
    id: str
) -> ActionInDB :
    return crud.action.delete_action(db, action_id=id)

@router.put('/{id}', response_model=ActionInDB)
def update_action(
    db: Session = Depends(get_db),
    *,
    id: str,
    action_in: ActionUpdate
) -> ActionInDB :
    return crud.action.update_action(db, action_on=crud.action.get_action(db, action_id=id), action_in=action_in)


@router.post('/{id}', response_model=ActionInDB)
def complete_action(
    db: Session = Depends(get_db),
    *,
    id: str 
) -> ActionInDB :
    return crud.action.complete_action(db, action_id=id)

@router.get('/{id}', response_model=ActionInDB)
def get_action(
    db: Session = Depends(get_db),
    *,
    id: str
) -> ActionInDB :
    return crud.action.get_action(db, action_id=id)