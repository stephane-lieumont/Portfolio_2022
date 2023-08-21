FROM node as react-build
WORKDIR /app
COPY . ./

RUN yarn

ARG REACT_APP_EMAIL_SERVICE
ARG REACT_APP_CAPTCHA_SITE_KEY
ENV REACT_APP_EMAIL_SERVICE ${REACT_APP_EMAIL_SERVICE}
ENV REACT_APP_CAPTCHA_SITE_KEY ${REACT_APP_CAPTCHA_SITE_KEY}

RUN yarn build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

COPY --from=react-build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
