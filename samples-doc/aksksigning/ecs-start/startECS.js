const https = require("https");
const { HttpsProxyAgent } = require("https-proxy-agent");

const { Signer, HttpRequest } = require("otc-api-sign-sdk-nodejs");

// Function to start an ECS instance
function startECS() {
  const project_id = process.env.OTC_SDK_PROJECT_ID;
  const endpoint = "ecs.eu-de.otc.t-systems.com";

  const instance_id = process.env.ECS_INSTANCE_ID;

  const signer = new Signer();
  signer.Key = process.env.OTC_SDK_AK;
  signer.Secret = process.env.OTC_SDK_SK;

  console.log("Starting ECS instance:" + instance_id);

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
    // "x-sdk-content-sha256": "UNSIGNED-PAYLOAD",
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

  // use proxy if defined in environment
  if (process.env.HTTP_PROXY !== undefined) {
    console.log("Using HTTP proxy:", process.env.HTTP_PROXY);
    signedRequest.agent = new HttpsProxyAgent(process.env.HTTP_PROXY);
  }

  console.log(
    "signedRequest Headers:",
    JSON.stringify(signedRequest.headers, null, 2)
  );
  // send the signed request
  const req = https.request(signedRequest, function (res) {
    console.log("Status Code:", res.statusCode);
    console.log("Headers:", JSON.stringify(res.headers, null, 2));
    res.setEncoding("utf8");

    console.log("Status Code:", res.statusCode);
    console.log("Headers:", JSON.stringify(res.headers, null, 2));

    let data = "";
    res.on("data", function (chunk) {
      data += chunk.toString();
    });

    res.on("end", function () {
      console.log("Response Body:", data);
    });
  });

  req.on("error", function (err) {
    console.log("Error:", err.message);
  });

  // send the request body
  req.write(JSON.stringify(body));
  req.end();
}

// Run all methods
async function runAllMethods() {
  startECS();
}

// Run the examples
if (require.main === module) {
  runAllMethods().catch(console.error);
}
