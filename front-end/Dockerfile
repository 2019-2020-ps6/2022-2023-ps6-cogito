FROM node:16.16.0-alpine as first-build

WORKDIR /usr/local/app

COPY package.json .
COPY package-lock.json .
COPY angular.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY tsconfig.spec.json .

RUN npm install

COPY . .

RUN npm run build

# Path: front-end\Dockerfile

FROM nginx:1.21.1-alpine

COPY --from=first-build /usr/local/app/dist/front-end  /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]  