FROM node:16.19.0-alpine

ARG APPDIR

# Copy packages
COPY ./packages ${APPDIR}

RUN apk update && \
    apk upgrade && \
    mkdir -p ${APPDIR} && \
    npm install pm2 -g && \
    cd /usr/local/lib/node_modules/pm2 && \
    npm install typescript ts-node && \
    cd ${APPDIR}/restapi && \
    npm install

WORKDIR ${APPDIR}/restapi

ENTRYPOINT ["/usr/local/bin/pm2-runtime"]
CMD [ "start", "index.ts" ]
