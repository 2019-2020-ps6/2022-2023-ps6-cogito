FROM node:16.16.0-alpine as build

ARG FRONTEND_DOMAIN
ARG BACKEND_DOMAIN
ARG BACKEND_PORT
ARG ENVIRONMENT

WORKDIR /usr/local/app

COPY .editorconfig angular.json default.conf package*.json tsconfig*.json ./
COPY ./src src/

RUN apk add sed
RUN sed -i "s/<BACKEND_PORT>/${BACKEND_PORT:-9428}/g" /usr/local/app/src/environments/environment.prod.ts
RUN sed -i "s/<BACKEND_DOMAIN>/${BACKEND_DOMAIN:-localhost}/g"  /usr/local/app/src/environments/environment.prod.ts
RUN sed -i "s/<FRONTEND_DOMAIN>/${FRONTEND_DOMAIN:-localhost}/g"  /usr/local/app/default.conf

RUN npm install
RUN npm run build:$ENVIRONMENT

FROM nginxinc/nginx-unprivileged:latest

COPY --from=build /usr/local/app/dist/front-end /usr/share/nginx/html/
COPY --from=build /usr/local/app/default.conf /etc/nginx/conf.d/

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]

# docker build -t frontend:16.16.0 .
# docker run -p 8080:4200 frontend:16.16.0
