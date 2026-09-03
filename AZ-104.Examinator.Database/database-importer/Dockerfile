# Il build context e' la radice del repo: da li' si copiano sia questa cartella
# sia il JSON sorgente, che sta in AZ-104.QuestionsDataset/.
FROM python:3.13-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    QUESTIONS_JSON=/data/questions.json

WORKDIR /app

COPY AZ-104.Examinator.Database/database-importer/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY AZ-104.Examinator.Database/database-importer/import_questions.py ./
COPY AZ-104.QuestionsDataset/az104_606_domande.json /data/questions.json

ENTRYPOINT ["python", "import_questions.py"]
