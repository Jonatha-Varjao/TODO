from uuid import UUID
from typing import List, Optional

from app.schema.base import Base
from app.schema.action import ActionInDB

class TaskBase(Base):
    name: str
    is_completed: Optional[bool]

class TaskInDB(TaskBase):
    id: UUID
    actions: List[ActionInDB] = None

class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    pass

