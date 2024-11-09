const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

const settings = {
  viewport: {
    width: 1280,
    height: 900,
  },
  serverPath: "http://localhost:8080",
  imageSnapshot: {
    failureThreshold: 0.02,
    failureThresholdType: "percent",
    allowSizeMismatch: true,
  },
};

describe("Feedback Form", () => {
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto(settings.serverPath);
    await page.setViewport(settings.viewport);
  });

  it("Form with a viewport of 1280px", async () => {
    const template = await page.$("html");

    const image = await template.screenshot();
    expect(image).toMatchImageSnapshot(settings.imageSnapshot);
  });
});
