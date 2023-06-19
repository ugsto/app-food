FROM node:18-alpine AS build

USER node

COPY --chown=node:node . /app
WORKDIR /app

RUN yarn install --frozen-lockfile && yarn build:prod

FROM nginx:stable-alpine-slim

RUN > /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /var/run/nginx.pid

USER nginx

COPY --chown=nginx:nginx --from=build /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080 8443

CMD ["nginx", "-g", "daemon off;"]
