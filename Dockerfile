FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 8081

CMD ["npm", "run", "start"]