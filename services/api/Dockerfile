ARG NODE_VERSION=16.13.1

FROM yaroslavx/yaroslavx/docker-app_client AS client

FROM yaroslavx/yaroslavx/docker-app_admin AS admin

FROM node:$NODE_VERSION

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn 

COPY . .

COPY --from=client /client/build /app/client/build

COPY --from=admin /admin/build /app/admin/build

EXPOSE 5000

CMD ["yarn", "start"]