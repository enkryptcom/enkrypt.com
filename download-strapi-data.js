const { writeFileSync } = require("fs");
const fetch = require("node-fetch");

const StrapiData = async () => {
  await fetch(
    `https://strapi.mewapi.io/api/enkrypt-networks?populate=*&pagination[pageSize]=100`
  )
    .then((res) => res.json())
    .then((json) =>
      writeFileSync(`src/networks/networks.json`, JSON.stringify(json))
    );
};

StrapiData();
