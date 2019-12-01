from pathlib import Path
from starlette.config import Config
#from app.models.database import DatabaseURL

p: Path = Path(__file__).parents[2] / ".env"

config: Config = Config(p if p.exists() else None)


SQLALCHEMY_DATABASE_URI = config("SQLALCHEMY_DATABASE_URI")

ALEMBIC_CONFIG = config("SQLALCHEMY_DATABASE_URI")

API_V1_STR = config("API_V1_STR")

PROJECT_NAME = config("PROJECT_NAME")

BACKEND_CORS_ORIGINS = config("BACKEND_CORS_ORIGINS")

print(SQLALCHEMY_DATABASE_URI)