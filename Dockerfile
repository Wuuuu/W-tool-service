###################
# BUILD FOR LOCAL DEVELOPMENT
###################


FROM node:18 As development
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm


WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

ENV MONGODB_DATABASE_URL='mongodb+srv://maxeyWu:wswyk@cluster0.06knjy2.mongodb.net/?retryWrites=true&w=majority' 
ENV JWT_SECRET='w-tool-secret' 
ENV COS_SECRET_ID='AKIDoUvysXXhNp2Yw7yuidIPr5DwYxDHpfql' 
ENV COS_SECRET_KEY='uYx6yJjGXYpshHtHC7sDH6g69RUnzXx9' 
ENV COS_REGION='ap-chengdu' 
ENV COS_BUCKET_NAME='w-tool-1256299075'

RUN pnpm fetch --prod

COPY --chown=node:node . .
RUN pnpm install

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As build
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

# COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN pnpm build

ENV NODE_ENV production

RUN pnpm install --prod

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

# COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]

