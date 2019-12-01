from uuid import uuid4

from sqlalchemy import Column, ForeignKey, UniqueConstraint
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.types import String, Boolean
from sqlalchemy_utils import Timestamp

from app.db_config.base import Base


class Task(Base, Timestamp):
    __tablename__ = 'tasks'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String(32))
    is_completed = Column(Boolean, unique=False, default=False)

    actions = relationship("Action", back_populates="task", cascade="all, delete, delete-orphan")

class Action(Base, Timestamp):
    __tablename__ = 'actions'
    __table_args__ = (UniqueConstraint('name', 'task_id', name='uix_name_task'),)

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String(32))
    task_id = Column(ForeignKey('tasks.id'))
    is_completed = Column(Boolean, unique=False, default=False)

    task = relationship("Task", back_populates="actions")
