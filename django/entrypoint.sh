#!/bin/sh
# entrypoint.sh

# Apply migrations
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 0.0.0.0:8000

# Keep the container running by using tail
tail -f /dev/null
