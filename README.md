## Проект
### На тему "Автоматизация генерации данных для функционального тестирования фронтенда веб-приложений"

### Запуск приложений

#### Бэкенд
1. `cd ./bachelors-backend/`
2. `npm i`
3. `npm start`
4. Сервис развернут по адресу http://localhost:3030

#### Фронтенд
! Убедитесь, что бэкенд запущен !
1. `cd ./bachelors-frontend/`
2. `npm i`
3. `npm start`
4. Сервис развернут по адресу http://localhost:3000

#### Установка генератора
1. `cd ./bachelors-generator`
2. `npm i`
3. `sudo npm install -g .`
4. Генератор готов к работе

#### Пример генерации данных
1. `cd ./bachelors-tests/`
2. `npm i`
3. `tdg generate --url http://localhost:3030`

#### Запуск тестирования
! Убедитесь, что данные сгенерированы !
1. `cd ./bachelors-tests/`
2. `npm test`
