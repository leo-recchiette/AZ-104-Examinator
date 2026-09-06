# AZ-104 Examinator

Simulatore d'esame per la certificazione Microsoft AZ-104, con un question bank di 606 domande.

## Struttura del progetto

```
AZ-104.Examinator.BE/          Backend .NET (API + progetto di test)
AZ-104.Examinator.FE/          Frontend React + TypeScript
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

Il primo comando crea da solo tutto il necessario — volume, database, schema — aspetta che sia pronto e importa le 606 domande: non serve avviare prima nient'altro a mano. Il secondo comando avvia API e frontend, che a questo punto trovano già il database popolato.

L'API è raggiungibile su **http://localhost:5080**, con la documentazione interattiva su **http://localhost:5080/swagger**. Il frontend è su **http://localhost:5173** (server di sviluppo Vite con hot reload — non serve Node installato in locale, gira tutto nel container `web`; niente build di produzione per ora).

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

### Ripartire da zero (in caso di problemi)

Quando qualcosa si incastra — un'immagine che non si aggiorna, il frontend che continua a servire codice vecchio,
un `node_modules` corrotto nel volume — la via più rapida è buttare giù tutto e ricostruire:

```bash
docker compose --profile dev --profile setup down -v --rmi local --remove-orphans
```

Rimuove in un colpo solo container, volumi (`pgdata` e `web_node_modules`) e le immagini costruite in locale
(`api`, `web`, `importer`). I profili vanno nominati entrambi, altrimenti `importer` e `pgweb` restano fuori dalla
pulizia. Le immagini scaricate da registri esterni (`postgres`, `pgweb`, le base image .NET e Node) non vengono
toccate: per togliere anche quelle si usa `--rmi all`, ma il primo avvio successivo dovrà riscaricarle.

Se un `docker rmi` si rifiuta di procedere con un errore tipo `image is being used by stopped container`, significa
che esiste ancora un container fermo che la usa — spesso avviato a mano con `docker run`, quindi invisibile a
`docker compose down`, che gestisce solo i propri servizi:

```bash
docker ps -a                  # elenca ANCHE i container fermi, con il nome dell'immagine che occupano
docker rm <container>         # rimuove il container che la trattiene
docker rmi <immagine>         # ora l'immagine si elimina
```

Per ricominciare dopo la pulizia servono entrambi i passaggi del primo avvio, non solo `up`: le immagini vanno
ricostruite e il question bank reimportato, dato che `-v` ha azzerato il volume del database.

```bash
docker compose build --no-cache                    # opzionale: forza una ricostruzione senza cache
docker compose --profile setup run --rm importer   # ricrea schema e ricarica le 606 domande
docker compose up -d
```

## Test

```bash
cd AZ-104.Examinator.BE/AZ-104.Examinator.Api.Tests
dotnet test
```

## Comandi utili

```bash
docker compose --profile dev up -d    # avvia tutti i servizi, pgweb compreso (senza --profile resta spento)
docker compose down -v                # azzera tutto, incluso il volume del database
docker compose stop pgweb             # ferma un servizio dietro profilo (va nominato esplicitamente)
docker compose --profile dev down     # pulizia completa includendo i servizi dietro profilo
```