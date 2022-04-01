FROM node:16.13.2

WORKDIR /src

COPY package.json package.json
#COPY package-lock.json package-lock.json

#RUN npm ci
RUN npm install
COPY . .
RUN npm run build
ENTRYPOINT [ "npm", "run", "serve" ]