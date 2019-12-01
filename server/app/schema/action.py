from uuid import UUID

from app.schema.base import Base

class ActionBase(Base):
    name: str
    taks_id: UUID

class ActionInDB(ActionBase):
    id: UUID

class ActionCreate(ActionBase):
    pass

class ActionUpdate(ActionBase):
    pass
