# Solo sviluppo: nessuna build di produzione. Le dependency si installano
# all'avvio del container (vedi CMD), non in fase di build: non esiste ancora
# un package-lock.json, e il primo 'docker compose up' lo genera scrivendolo
# sull'host via bind mount, mentre node_modules resta in un volume nominato
# (mai sull'host). Aggiungere una dependency a package.json in futuro richiede
# solo un riavvio del container, non un rebuild dell'immagine.
FROM node:22-alpine
WORKDIR /app
EXPOSE 5173
CMD ["sh", "-c", "npm install && npm run dev"]
