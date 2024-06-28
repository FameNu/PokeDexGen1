FROM node:lts-alpine
WORKDIR /code
COPY package.json package-lock.json ./

RUN npm install

COPY data/ data/
COPY pokedex.js ./

CMD ["npm", "start"]