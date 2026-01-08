FROM node:24-alpine AS development

WORKDIR /src

COPY . .

COPY package*.json ./

RUN npm install --force

CMD [ "npm", "run", "dev" ]