import xhr from "xhr";


export let getData = function(uri, request = {}) {
  return new Promise((resolve, reject) => {
    xhr({
      uri: uri,
      json: request,
      method: "POST"
    }, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};