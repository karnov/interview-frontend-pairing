FROM node:14.4-slim 

RUN node -v
RUN npm -v

WORKDIR /app
RUN mkdir /app/node_modules

RUN yarn -v

COPY package.json .
COPY yarn.lock .

RUN yarn install

