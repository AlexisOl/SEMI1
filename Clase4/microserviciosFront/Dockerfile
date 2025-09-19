# =========================
# Etapa 1: Build Angular
# =========================
FROM node:20-alpine AS build
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./
RUN npm install

# Copiar todo el código fuente
COPY . .

# Build de Angular con valores cualquiera
RUN npm run build --prod

# =========================
# Etapa 2: Servir Angular con Nginx
# =========================
FROM nginx:alpine

# Copiamos los archivos compilados de Angular
COPY --from=build /usr/src/app/dist/microservicios-front/browser /usr/share/nginx/html/

# Exponemos el puerto de Nginx
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
