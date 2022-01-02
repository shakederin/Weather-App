FROM node:16-alpine3.12

WORKDIR /user/src/app

COPY --chown=node:node . .

RUN npm ci --only-production

EXPOSE 3000

CMD [ "npm" , "run" , "start" ]