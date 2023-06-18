### Le statut lors de la livraison    
- Étape 1 : Done  
- Étape 2 : Done  
- Étape 3 : Done  
- Étape 4 : Non commencé  

### Les healthchecks utilisées par chaque service  
- backend : on vérifie que la route du backend qui donne le status renvoie bien "ok"  
- frontend : on vérifie que le lien de base du frontend fonctionne, que l'on puisse y accéder 

### L'utilisateur utilisé par service    
- backend: node   
- frontend: nginx     
- playwright: pwuser  

### Une explication sur les services accessibles et les domaines/ports     
- docker compose de base:     
    - backend: localhost , 8000   
    - frontend: localhost , 8080
- docker compose de test:  
  - playwright accède au frontend par frontend:4200
  et au backend par backend:9428

### Comment lancer les docker compose
Nous avons 2 fichiers de scripts shells:
- run.sh qui lance le compose de base
- run-e2e.sh qui lance le compose des tests

### Informations supplémentaires
Le default.conf de nginx pour le frontend utilise le port 4200
et le domaine du compose.   
Le script de configuration de playwright envoie les logs des tests dans un fichier json
dans le dossier playwright-report et on active les screenshots et videos tout le temps, pas seulement en cas d'erreur   

