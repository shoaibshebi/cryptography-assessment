const supertest = require("supertest");

test("successful Response", async () => {
  await supertest("http://localhost:4000/")
    .post("apiV1/getHash")
    .send({
      inputHex:
        "54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107",
    })
    .expect(200);
});

test("should expect 200", async () => {
  await supertest("http://localhost:4000/")
    .post("apiV1/getHash")
    .send({
      inputHex:
        "54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107",
    })
    .expect(200);
});

test("should be struct equal to first response", async () => {
  //   await supertest(app)
  const res = await supertest("http://localhost:4000/")
    .post("apiV1/getHash")
    .send({
      inputHex:
        "54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107",
    })
    .expect(200);

  expect(res?._body).toStrictEqual({
    code: 200,
    hash: "34b954d14eeb0f6f656f19139de23d096d9cf7db91a211e398a54e6673c2de1b",
    nounce: 3,
  });
});

test("should be struct equal to second response", async () => {
  //   await supertest(app)
  const res = await supertest("http://localhost:4000/")
    .post("apiV1/getHash")
    .send({
      //hex is changed at end
      inputHex:
        "54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0100",
    })
    .expect(200);

  //hash is changed at end
  expect(res?._body).toStrictEqual({
    code: 200,
    hash: "0f3ba7f34e25c86bfb60e254a941bf183cf35bca73dbe36f6cbab2d580eba6ff",
    nounce: 3,
  });
});
