FROM 18-alpine

ENV NODE_ENV=production

USER node

COPY --chown=node:node . /app

WORKDIR /app

RUN yarn install --frozen-lockfile --non-interactive --production \
    && yarn build

CMD ["yarn", "start:prod"]
