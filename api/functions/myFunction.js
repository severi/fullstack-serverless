
export const main = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "world",
    })
  };
};
