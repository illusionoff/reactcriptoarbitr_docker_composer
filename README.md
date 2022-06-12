<a id="anchor"></a>
##### README.markdown

# Использование Docker, Docker-compose на примере проекта Criptoarbitr

#### Данный репозиторий предназначен для тестирования и создания образов docker для последующего деплоя на сервер

###### Репозиторий оригинального проекта:
https://github.com/illusionoff/reactcriptoarbitr_test_squeeze

###### Репозиторий непосредственно для деплоя на сервере:
https://github.com/illusionoff/reactcriptoarbitr_docker_composer_prod  
Сайт проекта оригинальный без docker: [Criptoarbitr](http://criptoarbitr.178.20.42.150.sslip.io/)  
  Сайт проекта c docker-compose: [Criptoarbitr](http://62.113.119.244/)

#### Проект состоит из четырех контейнеров три из которых размещаются на docker hub, а один создается в момент запуска docker-composer

* docker контейнер "basic" это основное back-end приложение из оригинального проекта:
[criptoarbitr_test](https://github.com/illusionoff/criptoarbitr_test) 
* docker контейнер "client" это front-end приложение из оригинального проекта:
[testsqueezebith](https://github.com/illusionoff/testsqueezebith)
В оригинальном проекте это приложение содержит так же небольшую часть back-end для загрузки .csv  файлов данных для построения графиков.
В этом проекте этот проект разделен на два контейнера, собственно "client" и "server" ( "api" - название контейнера)
* docker контейнер "server" ( "api" - название контейнера)
* docker контейнер "nginx" этоn контейнер создается в момент запуска docker-composer


##### Для разработки  и тестирования запускаем на локальной машине:
* > docker-compose -f  'docker-compose-dev.yml' up --build -d

##### Для размежения контейнеров "basic", "client", "api" в Docker hub на вашем сервере:
* > docker-compose -f  'docker-compose-dev.yml' push

##### Для деплоя на сервере создаем рабочую директорию и в ней :
* > git clone https://github.com/illusionoff/reactcriptoarbitr_docker_composer_prod.git .
* > docker-compose up -d

 Контейнер "nginx" используется как proxy сервер для маршрутизации запросов для "client" и "api"
 В контейнере "client" создается web server на основе nginx для запуска front-end в продакшен режиме

Ссылки на контейнеры в Docker hub:
* "basic" https://hub.docker.com/repository/docker/siniakoualex/reactcriptoarbitr_docker_composer_basic_1
* "client" https://hub.docker.com/repository/docker/siniakoualex/reactcriptoarbitr_docker_composer_client_1
* "api" https://hub.docker.com/repository/docker/siniakoualex/reactcriptoarbitr_docker_composer_api_1

[Вверх](#anchor)
