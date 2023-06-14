FROM node:16.16.0-alpine as first-build

ARG ENVIRONMENT
ARG TEST_URL
ARG DOMAIN

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

# Check les environnements

RUN apk add sed
RUN sed -i "s/<TEST_URL>/$.{TEST_URL}/g" /usr/local/app/src/environments/environment.ts
RUN cat /usr/local/app/src/environments/environment.ts

COPY ./editorconfig /usr/local/app/editorconfig
RUN sed -i "s/<DOMAIN>/${DOMAIN:-localhost}/g" /usr/local/app/editorconfig
RUN cat /usr/local/app/editorconfig

RUN npm install
RUN npm run build:$ENVIRONMENT

# On passe à la deuxième partie

FROM nginxinc/nginx-unprivileged:latest

USER nginx

COPY --from=first-build /usr/local/app/dist/starter-quiz-two /usr/share/nginx/html
COPY --from=first-build /usr/local/app/editorconfig /etc/nginx/conf.d/editorconfig

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]




