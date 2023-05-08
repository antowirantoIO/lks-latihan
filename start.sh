#!/bin/bash
# Start the backend and frontend servers
sudo service mysql start

cd wordpress
sudo php -S localhost:8002 &
cd ..

cd pilihyuk-backend
php artisan serve &
cd ..

cd pilihyuk-reactjs
npm start
