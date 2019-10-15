
export const main = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    body: JSON.stringify({
      hello: "world",
    })
  };
};
