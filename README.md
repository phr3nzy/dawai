# Dawai - Medicine Locator and Pharmacy Management Software for Sudan 💊🇸🇩✨

Dawai is a project with an ambition of providing aid to the Sudanese populous in finding medicine. It locates the medicine using a DB with over 4000 medicine records (including brands, categories, manufacturer etc.) that are sold by pharmacies in Sudan, a management UI for Pharmacies to manage their inventory and gives them control over their products' exposure to the public (not a single byte of info is displayed without the pharmacies' owners consent).

To even contribute more to the Sudanese populous, Dawai is completely Open Source and commits 100% transparency on all levels. Even our backend is, check it out [here](https://www.github.com/phr3nzy/dawai-backend).

This repository contains the Frontend of Dawai (not the landnig page, it's [here](https://www.github.com/phr3nzy/dawai-landing)). Built using Vue, Vuetify & Nuxt!

## How to contribute to Dawai?

Fire up a fork and do any and all contributions you'd like, even the smallest things count. When you're done, hit the New PR button and you're all set to go! Currently what needs to be done is:

- Contributions & community guidelines
- General Documentation
- Arabic translations (Website & Pharmacy Frontend)

That's all! Good fortune.

## Dawai Hosting Costs

To be able to host Dawai efficiently, we opted to use Heroku. They provide a PaaS (Platform-as-a-Service) that gives us many features and addons that saves us time.

|          | Plan Name             | Plan Quantity | Plan Price |
|----------|-----------------------|---------------|------------|
| Frontend | `STANDARD 1X`         |       1       |    $25/m   |
| Backend  | `STANDARD 2X`         |       2       |    $50/m   |
| Database | `POSTGRES STANDARD 2` |       1       |   $200/m   |
| Total    | --------------------- | ------------- |   $325/m   |

If you feel this is overkill, send us a suggestion on a better PaaS. We appreciate all the adivce we can get!

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
