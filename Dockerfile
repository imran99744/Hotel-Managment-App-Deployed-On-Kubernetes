
FROM node:19-alpine3.15

WORKDIR /hotel-ui

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm","start"]

