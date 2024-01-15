# Use an official Python image as the base
FROM python:3.8

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app/
# Use the modified entrypoint script
#CMD ["./entrypoint.sh"]


# Expose the port that Django runs on
EXPOSE 8000

# Start the Django development server
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
