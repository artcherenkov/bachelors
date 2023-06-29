const express = require("express");
const dotenv = require("dotenv");
const { getPaths } = require("./generator");
const cors = require("cors");
const asyncFs = require("fs/promises");
const dataUtils = require("./data/utils");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());

const pathToJson = path.join(__dirname, "data", "cars.json");

app.get("/cars/get-cars", async (req, res) => {
  // получаем порядковый номер страницы для пагинации
  const page = parseInt(req.query.page) || 1;
  // с помощью набора утилит dataUtils получаем данные из базы
  const data = await dataUtils.getPaginatedData(pathToJson, page);
  // имитируем задержку сервера
  setTimeout(() => {
    // отправляем данные в ответ на запрос
    res.json({ cars: data, page });
  }, 1500);
});

app.get("/schemas", async (req, res) => {
  const paths = await getPaths();
  const result = {};

  await (async function () {
    let i = 0;
    for (let pathname of paths) {
      result[i] = await asyncFs.readFile(pathname, { encoding: "utf8" });
      i++;
    }
  })();

  return res.json(result);
});

app.listen(3030, null, () => {
  console.log(`listening on port ${3030}`);
});
