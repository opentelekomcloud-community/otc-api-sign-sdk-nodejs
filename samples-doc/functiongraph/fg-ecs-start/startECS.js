const https = require("https");
const { Signer, HttpRequest } = require("otc-api-sign-sdk-nodejs");

exports.handler = function (event, context, callback) {
  const error = null;

  // get project ID from environment variables
  const project_id = process.env["RUNTIME_PROJECT_ID"];

  // get endpoint and instance ID from user data
  const endpoint = context.getUserData("ECS_ENDPOINT") || "ecs.eu-de.otc.t-systems.com";
  const instance_id = context.getUserData("INSTANCE_ID");

  // get logger from context
  const log = context.getLogger();

  log.info("Starting ECS instance:" + instance_id);
  log.info("Using project ID:" + project_id);

  // prepare signed request to start ECS instance
  const signer = new Signer();
  // user temporary credentials from agency for signing
  signer.Key = context.getSecurityAccessKey();
  signer.Secret = context.getSecuritySecretKey();
  signer.SecurityToken = context.getSecurityToken();

  // see https://docs.otc.t-systems.com/elastic-cloud-server/api-ref/apis_recommended/batch_operations/starting_ecss_in_a_batch.html#en-us-topic-0020212207
  url = "https://" + endpoint + "/v1/" + project_id + "/cloudservers/action";

  method = "POST";

  body = {
    "os-start": {
      servers: [{ id: instance_id }],
    },
  };

  headers = {
    "Content-Type": "application/json;charset=utf8",
  };

  if (project_id != undefined) {
    // To access resources in a sub-project (e.g. eu_de/myproject)
    // by calling APIs, X-Project-Id of "eu_de/myproject" is needed
    headers["X-Project-Id"] = project_id;
  } 

  // create HTTP request
  const request = new HttpRequest(method, url, headers, JSON.stringify(body));

  // sign the request
  const signedRequest = signer.Sign(request);

  // send the signed request
  const req = https.request(signedRequest, function (res) {
    res.setEncoding("utf8");

    let data = "";
    res.on("data", function (chunk) {
      data += chunk.toString();
    });

    res.on("end", function () {
      log.info("Response:" + data);
      const output = {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        isBase64Encoded: false,
        body: data,
      };
      callback(error, output);
    });
  });

  req.on("error", function (err) {
    log.info("Error:" + err.message);
    callback(Error(err));
  });

  req.write(JSON.stringify(body));
  req.end();
};
