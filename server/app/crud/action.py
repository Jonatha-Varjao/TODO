from itertools import accumulate
from typing import List, Optional

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.db_models.models import Action
from app.schema.action import ActionCreate, ActionUpdate, ActionInDB


def get_action(
    db,
    *,
    action_id: str
) -> Action :
    return db.query(Action).filter(Action.id==action_id).first()
    

def create_action(
    db,
    *,
    action_in: ActionCreate,
    task_id: str
) -> Action:
    action_data = jsonable_encoder(action_in)
    action = Action(**action_data)
    action.task_id = task_id
    db.add(action)
    db.commit()
    db.refresh(action)
    return action


def update_action(
    db,
    *,
    action_on: Action,
    action_in: ActionUpdate
) -> Action:
    action_data = jsonable_encoder(action_on)
    update_data = action_in.dict(skip_defaults=True)
    for field in action_data:
        if field in update_data:
            setattr(action_on, field, update_data[field])
    db.add(action_on)
    db.commit()
    db.refresh(action_on)
    return action_on

def complete_action(
    db,
    *,
    action_id: str
) -> Action:
    action = get_action(db, action_id=action_id)
    action.is_completed = not action.is_completed
    db.commit()
    db.refresh(action)
    return action

def delete_action(
    db,
    *,
    action_id: str
) -> Action:
    action = get_action(db, action_id=action_id)
    db.delete(action)
    db.commit()
    return action
