# AZ-104 Examinator

Simulatore d'esame per la certificazione Microsoft AZ-104, con un question bank di 606 domande.

## Struttura del progetto

```
AZ-104.Examinator.BE/          Backend .NET (API + progetto di test)
AZ-104.Examinator.Database/    Schema SQL e importer del question bank
AZ-104.QuestionsDataset/       Dati sorgente (JSON + versione leggibile in Markdown)
docker-compose.yml
```

## Avvio

### Primo avvio

```bash
docker compose --profile setup run --rm importer
docker compose up -d
```

Il primo comando crea da solo tutto il necessario — volume, database, schema — aspetta che sia pronto e importa le 606 domande: non serve avviare prima nient'altro a mano. Il secondo comando avvia l'API, che a questo punto trova già il database popolato.

L'API è raggiungibile su **http://localhost:5080**, con la documentazione interattiva su **http://localhost:5080/swagger**.

### Avvii successivi

```bash
docker compose up -d
```

Il database e le domande restano nel volume Docker: basta questo comando, senza rieseguire l'importer. Va rilanciato solo dopo un `docker compose down -v` (che azzera il volume) o se si vuole ricaricare il question bank da un JSON aggiornato.

### Importazione del question bank

```bash
docker compose --profile setup run --rm importer
```

Legge `AZ-104.QuestionsDataset/az104_606_domande.json` e popola il database con le 606 domande, sostituendo quelle già presenti. A differenza di `db` e `api`, l'importer non fa parte dei servizi avviati automaticamente da `docker compose up` e non riparte da solo a ogni riavvio: va lanciato esplicitamente ogni volta che serve.

### Servizi opzionali

```bash
docker compose --profile dev up -d pgweb
```

Client SQL via browser su http://localhost:8081, utile per ispezionare il database senza installare nulla.

## Test

```bash
cd AZ-104.Examinator.BE/AZ-104.Examinator.Api.Tests
dotnet test
```

## Comandi utili

```bash
docker compose down -v          # azzera tutto, incluso il volume del database
docker compose stop pgweb       # ferma un servizio dietro profilo (va nominato esplicitamente)
docker compose --profile dev down   # pulizia completa includendo i servizi dietro profilo
```
