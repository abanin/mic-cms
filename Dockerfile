FROM strapi/base:latest

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV=production

RUN yarn build 

CMD ["yarn", "start"]