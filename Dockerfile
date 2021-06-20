# base image
FROM node:12-alpine
# create the working dir
RUN mkdir -p /src/autochek_location_service
# set working dir
WORKDIR /src/autochek_location_service
#copy the package.json file over
COPY ./package.json /src/autochek_location_service
# install dependencies
RUN npm install --only=prod
# copy the app over
COPY . /src/autochek_location_service
# expose a port
EXPOSE 8082
# set default cmd
CMD [ "yarn", "start:prod" ]
