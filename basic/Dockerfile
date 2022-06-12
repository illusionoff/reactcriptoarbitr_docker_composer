FROM node:14.19.3-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

CMD ["node", "app.js"]