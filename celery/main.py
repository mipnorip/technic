from os import environ as env
from logging import info, critical
from json import loads
from datetime import datetime, timezone
from time import tzset

from celery import Celery
from requests import post

# set timezone
env['TZ'] = 'Europe/Moscow'
tzset()

# get settings
USERS = loads(env.get('USERS', '[]'))
EMAILS = loads(env.get('EMAILS', '[]'))
API_KEY = env.get('API_KEY')

celery = Celery(__name__)
celery.conf.broker_url = env.get("CELERY_BROKER_URL", "redis://localhost:6379")
celery.conf.result_backend = env.get(
    "CELERY_RESULT_BACKEND", "redis://localhost:6379")


@celery.task(name="send_data")
def send_data(name, phone, other=False, **kwargs):
    info([name, phone, other])
    celery.send_task('alert_telegram', [name, phone, other])
    # mail_message = celery.send_task('alert_mail', [name, phone])
    return True


@celery.task(name="alert_telegram")
def telegram(name, phone, other, **kwargs):
    text = f"НОВАЯ ЗАЯВКА в {datetime.now()} от пользователя '{name}': {phone}"

    if other:
        text += f'\n\n{other}'

    apiURL = f'https://api.telegram.org/bot{API_KEY}/sendMessage'
    for user in USERS:
        try:
            post(apiURL, json={'chat_id': user, 'text': text})
        except Exception as e:
            critical(e)
            critical(f'{name} --> {phone}')
    return True


@celery.task(name="alert_mail")
async def mail(name, phone, other=False, **kwargs):
    for email in EMAILS:
        pass

    return True
