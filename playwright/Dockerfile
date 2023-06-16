FROM mcr.microsoft.com/playwright:v1.34.0-jammy

COPY ./../front-end ../front-end/

appeler http back 9428

ENTRYPOINT ["npm", "run", "start:e2e"]
