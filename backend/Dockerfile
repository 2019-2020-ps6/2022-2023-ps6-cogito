FROM node:16.16.0-alpine as build

RUN apk add curl

USER node

WORKDIR /home/node

COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node ./app app/
COPY --chown=node:node ./database database/

RUN npm install

EXPOSE 9428

ENTRYPOINT ["npm", "run", "start"]

