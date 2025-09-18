FROM node:20-alpine

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 3211


CMD ["npm", "run", "dev"]