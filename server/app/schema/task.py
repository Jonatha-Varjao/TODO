from uuid import UUID

from app.schema.base import Base

class TaskBase(Base):
    name: str

class TaskInDB(TaskBase):
    id: UUID

class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    pass
