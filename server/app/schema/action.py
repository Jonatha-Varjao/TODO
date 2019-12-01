from uuid import UUID
from typing import List, Optional

from app.schema.base import Base

class ActionBase(Base):
    name: str
    task_id: UUID
    is_completed: Optional[bool]

class ActionInDB(ActionBase):
    id: UUID
    

class ActionCreate(ActionBase):
    pass

class ActionUpdate(ActionBase):
    pass
