import uuid

from sqlalchemy import Column, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.types import String, Boolean
from sqlalchemy_utils import Timestamp

from app.db_config.base import Base


class Task(Base, Timestamp):
    __tablename__ = 'tasks'
    id = Column('id', String(36), default=lambda: str(uuid.uuid4()), primary_key=True)
    name = Column(String(25))
    

class Action(Base, Timestamp):
    __tablename__ = 'actions'
    id = Column('id', String(36), default=lambda: str(uuid.uuid4()), primary_key=True)
    name = Column(String(25))
    task_id = Column(ForeignKey('tasks.id'))
    
    task_parent = relationship('Task', back_populates="actions")
    