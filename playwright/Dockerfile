FROM mcr.microsoft.com/playwright:v1.34.0-jammy

COPY ./../package.json ../package.json/
COPY ./../src ../src/
COPY ./../e2e ../e2e/

ENTRYPOINT ["npm", "run", "start:e2e"]
