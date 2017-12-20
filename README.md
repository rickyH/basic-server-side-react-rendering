
# basic-server-side-react
-----------------

## Dev Setup

Get your gear:

`npm install` or `yarn install`

Run dev:

`npm run dev` or `yarn dev`


## Prod

Build front-end:

`npm run build:prod` or `yarn build:prod`

Run Prod:

`npm run prod` or `yarn prod`

## Terminate the application

PM2 will try and restart the application if it goes down to terminate the application:

`npm run stop` or `yarn stop`

## Monitor

We use PM2 for monitoring, run the following command to see how the application is running:
```
pm2 monit
```

## Viewing the logs
PM2 adds logs to the following directory:
```
/home/user/.pm2/logs/
```
