from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from celery import Celery

app = FastAPI()
celery_app = Celery('worker', broker='redis://redis:6379/0')


class Person(BaseModel):
    name: str
    phone: str
    other: Optional[str] = ''


@app.post("/send")
def process_data_endpoint(data: Person):
    print(data)
    celery_app.send_task('send_data', kwargs=dict(data))
    return True
