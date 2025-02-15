# Layer 1: Build the frontend
FROM node:latest AS builder
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app/ ./
RUN npm run build 
# Output will be in /dist

# Layer 2: Backend & Web Server
FROM debian:bookworm-slim

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    nginx \
    nodejs \
    npm \
    && apt-get clean

RUN npm install -g pm2

WORKDIR /app

## API
COPY ./api/index.js /app/
COPY ./api/package*.json /app/
RUN npm install

COPY --from=builder /app/dist /var/www/html

COPY ./default.conf /etc/nginx/sites-available/default

RUN sed -i 's/listen 8080;/listen 80;/' /etc/nginx/sites-available/default

RUN echo "API_PORT=80" >> /app/.env

EXPOSE 80

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

