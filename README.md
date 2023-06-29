## Дипломная работа 
### на тему "Автоматизация генерации данных для функционального тестирования фронтенда веб-приложений"

### Запуск приложений
#### Фронтенд
1. `cd ./bachelors-backend/`
2. `npm i`
3. `npm start`
4. Сервис развернут по адресу http://localhost:3000

#### Бэкенд
1. `cd ./bachelors-backend/`
2. `npm i`
3. `npm start`
4. Сервис развернут по адресу http://localhost:3030

#### Установка генератора
1. `cd ./bachelors-generator`
2. `sudo npm install -g .`
Генератор готов к работе

#### Пример генерации данных
1. `cd ./bachelors-test/`
2. `tdg generate --url http://localhost:3030`

#### Запуск тестирования
! Убедитесь, что данные сгенерированы !
1. `cd ./bachelors-test/`
2. `npm test`