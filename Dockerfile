FROM node:12.18.4
RUN mkdir -p /login
WORKDIR /login
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "index" ]