FROM node as react-build
WORKDIR /app
COPY . ./

RUN npm i

RUN --mount=type=secret,id=REACT_APP_EMAIL_SERVICE \
  --mount=type=secret,id=REACT_APP_CAPTCHA_SITE_KEY \
  export REACT_APP_EMAIL_SERVICE=$(cat /run/secrets/REACT_APP_EMAIL_SERVICE ) && \
  export REACT_APP_CAPTCHA_SITE_KEY=$(cat /run/secrets/REACT_APP_CAPTCHA_SITE_KEY ) &&
  
RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

COPY --from=react-build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
