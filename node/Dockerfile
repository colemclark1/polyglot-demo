FROM node:14.15.0-alpine
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY app.ts ./
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["npm","run","start"]
