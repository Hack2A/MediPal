FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS deps
RUN npm ci --only=production

FROM node:18-alpine AS release
WORKDIR /app


COPY --from=deps /app/node_modules ./node_modules

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
