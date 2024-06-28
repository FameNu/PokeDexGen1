FROM node:lts-alpine AS build
WORKDIR /code
COPY package.json package-lock.json index.html ./

RUN npm install

COPY tsconfig.json tsconfig.node.json tsconfig.app.json ./
COPY vite.config.ts ./
COPY src/ src/
COPY public/ public/
COPY tailwind.config.js postcss.config.js ./
COPY .env .env.production ./

RUN npm run build

FROM nginx:alpine AS run
COPY --from=build /code/dist/ /dist/
COPY default.conf /etc/nginx/conf.d/default.conf