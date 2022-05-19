/*
To generate a code coverage report:

Run yarn cypress:run --env coverage=true and wait for the test run to complete.
Once the test run is complete, you can view the report at coverage/index.html.

file:///D:/WS/Pro%20Tips/preparedemo/cypress-realworld-app/coverage/index.html

*/
describe("Code Coverage", () => {
  it(" yarn cypress:run --env coverage=true ", () => {
    expect(true).to.equal(true);
  });
});
