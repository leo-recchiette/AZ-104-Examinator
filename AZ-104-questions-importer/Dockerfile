# Il build context e' la radice del repo, cosi' si puo' copiare il JSON che
# sta accanto a questa cartella.
FROM python:3.13-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    QUESTIONS_JSON=/data/questions.json

WORKDIR /app

COPY AZ-104-questions-importer/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY AZ-104-questions-importer/import_questions.py ./
COPY az104_606_domande.json /data/questions.json

ENTRYPOINT ["python", "import_questions.py"]
