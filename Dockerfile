FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install 
EXPOSE 3000/tcp

COPY . .

CMD ["npm", "start"]