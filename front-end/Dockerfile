FROM node:16.16.0-alpine as build

WORKDIR /usr/local/app

COPY .editorconfig angular.json default.conf package*.json tsconfig*.json ./
COPY ./src src/

RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged:latest

COPY --from=build /usr/local/app/dist/front-end /usr/share/nginx/html/
COPY --from=build /usr/local/app/default.conf /etc/nginx/conf.d/

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]

# docker build -t frontend:16.16.0
# docker run -p 8080:4200 frontend:16.16.0
