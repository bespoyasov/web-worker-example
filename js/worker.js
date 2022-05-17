self.importScripts("./calc.js");

self.onmessage = (e) => {
  if (e.data.action === "doCalc") {
    const result = doCalc();

    self.postMessage({
      action: e.data.action,
      result,
    });
  }
};
