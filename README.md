# Dawai — The Medicine Platform for Sudan 💊🇸🇩✨

Dawai is a project with an ambition of providing aid to the Sudanese populous in finding medicine. It locates the medicine using a DB with over 4000 medicine records (including brands, categories, manufacturer etc.) that are sold by pharmacies in Sudan, a management UI for Pharmacies to manage their inventory and gives them control over their products' exposure to the public (not a single byte of info is displayed without the pharmacies' owners consent), and a public GraphQL API to use the 4000+ medicine records for research purposes.

To even contribute more to the Sudanese populous, Dawai is completely Open Source and commits 100% transparency on all levels. Even our backend is, ~~check it out [here](https://www.github.com/phr3nzy/dawai-backend).~~ __STILL A WIP__

This repository contains the [Frontend](https://dawai-ph.herokuapp.com/) of Dawai (not the landing page, it's [here](https://www.github.com/phr3nzy/dawai-landing)). Built using Vue, Vuetify & Nuxt!

## Dawai's Hosting Costs

To be able to host Dawai efficiently, we opted to use Heroku. They provide a PaaS (Platform-as-a-Service) that gives us many features and addons that saves us time.

### Resources that will be provisioned

|          | Plan Name             | Plan Quantity | Plan Price |
|----------|-----------------------|---------------|------------|
| Frontend | `STANDARD 1X`         |       1       |    $25/m   |
| Backend  | `STANDARD 2X`         |       2       |    $50/m   |
| Database | `POSTGRES STANDARD 2` |       1       |   $200/m   |
| Total    |                       |               |   $325/m   |


Learn more about Heroku's pricing [here](https://www.heroku.com/pricing).

If you feel this is overkill, send us a suggestion on a better PaaS. We appreciate all the advice we can get!

## Prerequisites
- Node >= v10
- NPM >= v6

## Getting started

```bash
$ yarn install
# install dependencies

$ yarn dev
# start a Nuxt development server @ port 3000

$ yarn test
# run tests

$ yarn build
# build files ready for production

$ yarn generate
# generate static pages
```

## Contributions

Helps us make the process of finding medicine easier, anything helps! Currently what needs to be done is:

- [x] Contributions & community guidelines
- [ ] General Documentation
- [ ] Arabic translations (~~Website &~~ Pharmacy Frontend)
- [ ] Writing Tests (Unit, Integration, e2e etc.)

That's all! Good fortune.

## Licensing

MIT © Osama Adil
