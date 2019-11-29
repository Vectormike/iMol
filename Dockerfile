FROM node:12.13.1-alpine

WORKDIR /usr/src/imol

COPY ./ ./

RUN npm install

CMD ["bin/bash"]