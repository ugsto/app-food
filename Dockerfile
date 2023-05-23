FROM node:18-alpine as builder

ENV NODE_ENV=development
USER node

COPY --chown=node:node . /app
WORKDIR /app

RUN yarn install && yarn build

#############################################

FROM node:18-alpine

ENV NODE_ENV=production

RUN mkdir /app && chown node:node /app

USER node

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/yarn.lock /app/yarn.lock

WORKDIR /app

RUN yarn install --production --frozen-lockfile && yarn cache clean

CMD ["yarn", "start:prod"]
