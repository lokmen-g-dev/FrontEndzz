#Stage 1
# pull official base image
FROM node:18 as build
# set working directory
WORKDIR /app
# install app dependencies
COPY package.json .
RUN npm install
# add app
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
