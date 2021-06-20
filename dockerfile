FROM node:14.17-alpine
WORKDIR /user/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "start" ]