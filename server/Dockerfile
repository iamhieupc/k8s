FROM node:12-alpine
WORKDIR /home/node/app
COPY ./package*.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["node", "index"]