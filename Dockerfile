FROM node:12.16.1-stretch

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --quiet

COPY . .

EXPOSE 3000 10000
