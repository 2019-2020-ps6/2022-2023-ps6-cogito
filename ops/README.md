Le statut lors de la livraison :
Étape 1 : Done
Étape 2 : Done
Étape 3 : Done
Étape 4 : Non Commencé

Les healthchecks utilisées par chaque service:
backend : on vérifie que la route du backend qui donne le status ressorte bien "ok"
frontend : on vérifie que le lien de base du frontend fonctionne, que l'on puisse y accéder 

L'utilisateur avec lequel chaque service tourne:
backend: node
frontend: nginx
playwright: pwuser

Une explication sur les services accessibles et les urls /ports:
docker compose de base:
backend: localhost , 8000
frontend: localhost , 8080

docker compose de test:
à l'intérieur le playwright accède au frontend par frontend:4200
et au backend par backend:9428

Le default.conf de nginx pour le frontend utilise le port 4200 
et le domaine du compose.
Et le script de configuration de playwright envoie les logs des test dans un fichiers json
dans le dossier playwright-report et on active les screenshot et video tout le temps et donc pas que en cas d'erreurs

