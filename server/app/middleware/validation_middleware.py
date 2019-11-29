import json

from pydantic import ValidationError
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response

from app.core.return_messages import codes


class FieldValidation(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        try:
            response = await call_next(request)
            return response

        except ValidationError as error:
            print(error)
            error_json = error.json()
            return Response(json.dumps({
                        "messageCode": codes['validation'], 
                        "title": "Validation Error", 
                        "message": error_json
                    }),
                        status_code=422)
