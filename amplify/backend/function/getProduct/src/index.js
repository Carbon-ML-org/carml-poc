const productExample = {
  product: {
    name: "LEGO Star Wars Set",
    isVerified: true,
    hasCarbonCredit: true,
    id: "67341934C267",
    volume: {
      amount: 0.015,
      descriptor: "CO2e",
      units: "KG",
    },
    identifier: {
      source: "GS1",
      type: "Bar Code",
      id: "67341934C267",
    },
    reporter: {
      source: "CarbonSig",
    },
    measurement: {
      address: "7190 Billund, Dinamarca",
      date: "Tue Mar 08 2022 11:50:00 GMT-0600 (Central Standard Time)",
      location: {
        lat: 55.7284,
        lng: 9.1124,
      },
      source: "LCI",
      origin: "EU",
      method: "Toy 12345",
      calculation: "Cradle to gate",
    },
    verifier: {
      source: "Reuters",
      origin: "UK",
      company: "The LEGO Group 12345",
    },
    carbonCredit: {
      vintageYear: "Mon Jan 01 2018 01:00:00 GMT-0600 (Central Standard Time)",
      id: "123456789",
      carbonOffsetAmount: 0.015,
    },
  },
};

exports.handler = async (e) => {
  console.log(">>> e:", JSON.stringify(e, null, 2));
  if (e.pathParameters.productId === productExample.product.id) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify(productExample),
    };
  } else {
    return {
      statusCode: 400,
      body: "Product not found!",
    };
  }
};

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };
