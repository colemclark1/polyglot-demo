FROM python:3.9
RUN pip install --upgrade pip
WORKDIR /app
ENV\
 FLASK_APP="app.py"\
 FLASK_DEBUG="True"
COPY requirements.txt ./
RUN pip3 install --quiet --requirement requirements.txt
COPY app.py db.py ./
EXPOSE 5000
CMD flask run --host 0.0.0.0