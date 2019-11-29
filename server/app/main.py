import json

from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError

from starlette.middleware.cors import CORSMiddleware
from starlette.responses import Response

#from app.api.api_v1.api import api_routers

from app.core import config
from app.core.return_messages import codes

from app.middleware.db_exception import DBException
from app.middleware.db_middleware import DBConnection

from app.middleware.validation_middleware import FieldValidation


app = FastAPI(title=config.PROJECT_NAME, openapi_url="/api/v1/openapi.json")


# CORS
origins = ["*"]

# Set all CORS enabled origins
if config.BACKEND_CORS_ORIGINS:
    origins_raw = config.BACKEND_CORS_ORIGINS.split(",")
    for origin in origins_raw:
        use_origin = origin.strip()
        origins.append(use_origin)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
# ROUTES
#acl.include_router(api_routers, prefix=config.API_V1_STR)

# MIDDLEWARES
app.add_middleware(DBConnection)
app.add_middleware(DBException)
app.add_middleware(FieldValidation)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    msg = json.loads(exc.json())[0]
    return Response(json.dumps({
        "messageCode": codes['db'],
        "title": "Erro de Validação",
        "message": msg.get('msg')
    }),
        status_code=422)
