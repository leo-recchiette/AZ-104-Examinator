"""Pipeline di import del question bank AZ-104 dal PDF a PostgreSQL.

    extraction     PDF        -> righe annotate con lo stile
    segmentation   righe      -> blocchi, uno per domanda
    classification blocco     -> MCQ | HOTSPOT | DRAG_DROP
    parsing        blocco     -> Question (testo, opzioni, answer key, spiegazione)
    images         PDF        -> file PNG su volume + percorsi nella Question
    validation     Question   -> riscontro incrociato dei tre segnali
    persistence    Question   -> tabelle SQL
"""
