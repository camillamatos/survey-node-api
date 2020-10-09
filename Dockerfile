FROM node:12
WORKDIR /usr/src/survey-node-api
COPY ./package.json .
RUN npm install --only=prod