FROM node:12-alpine
WORKDIR /home/node/app
COPY ./server/package*.json ./
COPY ./server/yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["node", "index"]