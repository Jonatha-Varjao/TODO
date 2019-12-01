from typing import List, Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import crud
from app.api.utils.db import get_db
from app.db_models.models import Action
from app.schema.action import ActionCreate, ActionInDB

router = APIRouter()

# add action em alguma task
# remover action

@router.delete('/{id}', response_model=ActionInDB)
def delete_action(
    db: Session = Depends(get_db),
    *,
    id: str
) -> ActionInDB :
    pass

@router.put('/{id}', response_model=ActionInDB)
def update_action(
    db: Session = Depends(get_db),
    *,
    id: str
) -> ActionInDB :
    pass
