FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

EXPOSE 80

COPY .env /app
COPY ./app /app/app

CMD ['pwd']
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]