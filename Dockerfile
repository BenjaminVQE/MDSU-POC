# Build Next.js en statique
FROM node:20-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --include=dev

COPY . .

ENV NODE_ENV=production
RUN npm run build

# Servir le contenu exporté via Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/out ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]