describe("Headless test", () => {
  it("run headless test for all specs", () => {
    expect("yarn cypress run").to.equal("yarn cypress run");
  });

  it("run headless test for a specific spec", () => {
    expect("yarn cypress run --spec cypress/tests/wildTests/3-queryAnElement_spec.js").to.equal(
      "yarn cypress run --spec cypress/tests/wildTests/3-queryAnElement_spec.js"
    );
  });
});
// video are available for all runnable specs:
// D:\WS\Pro Tips\preparedemo\cypress-realworld-app\cypress\videos\
// screenshot are available only for failed specs:
// D:\WS\Pro Tips\preparedemo\cypress-realworld-app\cypress\screenshots\
