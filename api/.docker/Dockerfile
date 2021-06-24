FROM node:16

WORKDIR /usr/src/app

RUN npm install -g newman && \
    npm install -g newman-reporter-htmlextra

EXPOSE 3000

CMD tail -f /dev/null