# Contributing to `Formoose`

As the creators and maintainers of this project, we want to ensure that `formoose` lives and continues to grow and evolve. We would like to encourage everyone to help and support this library by contributing.

## Code contributions

Here is a quick guide to doing code contributions to the library.

1. Fork and clone the repo to your local machine `git clone https://github.com/YOUR_GITHUB_USERNAME/formoose.git`

2. Create a new branch from `main` with a meaningful name for a new feature or an issue you want to work on: `git checkout -b your-meaningful-branch-name`

3. Install packages by running:

   ```shellscript
   yarn
   ```

4. If you've added a code that should be tested, ensure the test suite still passes.

   ```shellscript
   yarn test
   ```

5. Try to write some unit tests to cover as much of your code as possible.

6. Ensure your code lints without errors.

   ```shellscript
   yarn lint
   ```

7. Type Script will compile to `dist` folder, use `yarn link`.

Go to the [example repository](https://github.com/romulobordezani/formoose-examples) and run:

```shell
yarn link formoose
```
Run `yarn start` and the browser should open with some examples using your local Formoose's code. Now you can test and debug your changes.

8. Ensure build passes.

   ```shellscript
   yarn build
   ```

9. Push your branch: `git push -u origin your-meaningful-branch-name`

10. Submit a pull request to the upstream formoose repository.

11. Choose a descriptive title and describe your changes briefly.

## Coding style

Please follow the coding style of the project. Formoose uses eslint and prettier. If possible, enable their respective plugins in your editor to get real-time feedback. The linting can be run manually with the following command: `yarn lint`.

## License

By contributing your code to the formoose GitHub repository, you agree to license your contribution under the MIT license.

### Contributors

Thank you to all the people who have already contributed to Formoose!

<img src="https://opencollective.com/formoose/contributors.svg?width=950" />
