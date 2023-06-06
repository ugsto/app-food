# Build stage
FROM node:18-alpine3.14 as builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile && yarn build

# Production stage
FROM node:18-alpine3.14

WORKDIR /app

COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/package.json ./
COPY --from=builder --chown=node:node /app/yarn.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

CMD ["yarn", "start:prod"]
