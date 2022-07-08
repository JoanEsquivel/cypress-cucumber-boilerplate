const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonreport", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "96",
    },
    device: "Local test machine",
    platform: {
      name: "MAC",
      version: "Monterrey",
    },
  },
});
