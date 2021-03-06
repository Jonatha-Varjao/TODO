import json

from sqlalchemy.exc import SQLAlchemyError
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response

from app.core.return_messages import codes


class DBException(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        try:
            response = await call_next(request)
            request.state.db.close()
            return response
        except SQLAlchemyError as error:
            print(error)
            error_json = str(error.__dict__['orig'])
            return Response(
                json.dumps(
                    {"messageCode": codes['db'], "title": "Erro no Banco de Dados", "error": error_json}),
                status_code=422)
