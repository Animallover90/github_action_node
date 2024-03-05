FROM node:20.9.0

COPY . /app
WORKDIR /app

VOLUME ["/app"]

RUN npm install

RUN npm install -g pm2

EXPOSE 8080

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]