#!/bin/sh

# nginx -g daemon off;

echo START
echo "$PWD"
# ls
cd app

# npm start
# node -v  Нет ноды сейчас!!!

echo "$PWD 2"
# echo "daemon off;" >> /etc/nginx.conf
# echo "-g" >> /etc/nginx.conf
nginx -g "daemon off;"
# nginx -g
# nginx
echo END
# cd /etc/nginx
# echo "daemon off;" >> /etc/nginx.conf
# echo "-g" >> /etc/nginx.conf

# nginx -g daemon off

# nginx
# mkdir /root/.ssh
# echo "Something"
# cd tmp
# ls
# ...