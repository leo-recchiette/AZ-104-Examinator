# Il build context e' la radice del repo, cosi' il Dockerfile puo' copiare sia
# il sorgente in importer/ sia il PDF che sta accanto ad esso.
FROM python:3.13-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PDF_PATH=/data/questions.pdf

WORKDIR /app

COPY importer/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY importer/main.py ./
COPY importer/examinator ./examinator

COPY ["Questions & Explanations.pdf", "/data/questions.pdf"]

ENTRYPOINT ["python", "main.py"]
