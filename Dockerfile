FROM node:16

ENV MONGO_DB_USERNAME=admin 
ENV MONGO_DB_PWD=admin

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "/home/app/index.js"]
