FROM node:18-alpine
WORKDIR /code
COPY package.json package-lock.json ./

RUN npm install

COPY data/ data/
COPY pokedex.js ./

CMD ["npm", "start"]