# travis-ci-sample
[![Build Status](https://travis-ci.org/labarilem/travis-ci-sample.svg?branch=develop)](https://travis-ci.org/labarilem/travis-ci-sample)

Example of a Javascript package project using Travis CI.

## Notes

- This project represents a *Hello world!* Javascript package published as `travis-ci-sample` on the public NPM registry.
- The `.travis.yml` file references calls only to scripts defined in `package.json`. This makes the Travis CI configuration file reusable.
- Travis CI will deploy the package only when a tagged commit is pushed to the `master` branch of this repository.
- The `skip_cleanup` option is enabled because the distribution folder is not included in source control thus it could be cleaned up by the Travis CI agent before the deploy phase.
- There is an empty `.npmignore` file in this project because otherwise the Travis CI agent would fall back to the `.gitignore` settings when deploying the package: this would be a problem since the distribution folder is not included in source control.
