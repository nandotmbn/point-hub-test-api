FROM node:14
WORKDIR /usr/src/orlando-point-api
COPY package.json package*.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]
