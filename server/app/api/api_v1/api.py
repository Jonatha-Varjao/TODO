from fastapi import APIRouter

from app.api.api_v1.endpoints.action import router as action_router
from app.api.api_v1.endpoints.task import router as task_router


api_routers = APIRouter()

api_routers.include_router(action_router, prefix="/actions", tags=["Action"])
api_routers.include_router(task_router, prefix="/tasks", tags=["Task"])