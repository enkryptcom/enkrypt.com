const { writeFileSync } = require("fs");
const fetch = require("node-fetch");

const StrapiData = async () => {
  await fetch(
    `https://strapi.mewapi.io/api/enkrypt-networks?populate=*&pagination[pageSize]=100`
  )
    .then((res) => res.json())
    .then((json) => {
      json.data.forEach((item) => {
        if (!item.attributes.icon.data.attributes.colors) {
          console.log(item.attributes.name);
          process.kill(1);
        }
      });
      writeFileSync(`src/networks/networks.json`, JSON.stringify(json));
    });
};

StrapiData();
