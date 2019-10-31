# Dawai — The Medicine Platform for Sudan 💊🇸🇩✨

Dawai is a project with an ambition of providing aid to the Sudanese populous in finding medicine. It locates the medicine using a DB with over 4000 medicine records (including brands, categories, manufacturer etc.) that are sold by pharmacies in Sudan, a management UI for Pharmacies to manage their inventory and gives them control over their products' exposure to the public (not a single byte of info is displayed without the pharmacies' owners consent), and a public GraphQL API to use the 4000+ medicine records for research purposes.

To even contribute more to the Sudanese populous, Dawai is completely Open Source and commits 100% transparency on all levels. Even our backend is, ~~check it out [here](https://www.github.com/phr3nzy/dawai-backend).~~ __STILL A WIP__

This repository contains the [Frontend](https://dawai-ph.herokuapp.com/) of Dawai (not the landing page, it's [here](https://www.github.com/phr3nzy/dawai-landing)). Built using Vue, Vuetify & Nuxt!

## Dawai's Hosting Costs

To be able to host Dawai efficiently, ~~we opted to use Heroku. They provide a PaaS (Platform-as-a-Service) that gives us many features and addons that saves us time.~~ we are considering a new option that is marginally superior.

### Resources that will be provisioned

We are working on the infrastrucutre strategy, will update as soon as we reach solid grounds.
> Hint: Famous river

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

## How to contribute
### Steps
  1. Check that no one else is working on the thing you want to do in the issues page
  2. Create a new issue with an appropiate name describing what you will be doing
  3. [Fork and Setup Repo](#fork-and-setup-repo), do your work, then submit a pull request

### Fork and Setup Repo
  1. Fork repo.
  2. Clone forked repo on your local machine.
  3. `git remote add upstream https://github.com/phr3nzy/dawai.git` to add original repo as upstream.
  4. `yarn install` to install the website's npm dependencies.

### Create a branch
  1. `git checkout master` from any folder in your local 1dawai` repository
  2. `git pull upstream master` to ensure you have the latest main code
  3. `git checkout -b the-name-of-my-branch` (replacing the-name-of-my-branch with a suitable name) to create a branch
  4. Make your changes.

### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Added Search Unit test`) to stage and commit your changes,
2. `git push my-fork-name the-name-of-my-branch`
3. Go to the [dawai repo](https://github.com/phr3nzy/dawai) and you should see recently pushed branches.
4. Follow GitHub's instructions to submit the pull request.

## Licening

MIT © Osama Adil
