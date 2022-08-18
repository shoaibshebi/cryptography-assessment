# Cryptography and Security

<p align="center">
  <img src="/client/public/app-image1.png" alt="Logo">
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Questions</h2></summary>
  <ol>
    <li>
      <a href="#test-the-solution">How would you test the solution?</a>
      <ul>
        <li><a href="#possible-requests">Is it able to cover any possible requests?</a></li>
      </ul>
      <ul>
        <li><a href="#stable-for-long-run">Is it stable for long run?</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

### 🧪 How would you test the solution?

- For testing the solution, I have used the JEST , and Supertest to write some tests.
  I have tested on the following inputs and its successfully giving the output:

inputHes: 54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107
outPutHash: 34b954d14eeb0f6f656f19139de23d096d9cf7db91a211e398a54e6673c2de1b
nounce: 3

inputHes: 54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0100
outPushHash: 0f3ba7f34e25c86bfb60e254a941bf183cf35bca73dbe36f6cbab2d580eba6ff
nounce: 3

- As I've worked on the Blockchain(Web3), please have a look at the portfolio here🚀[https://metaverse-market-virid.vercel.app/], that's why i manupulated the long strings at server side in this way so that the server don't get so much load and easily can do the stuff.
- Of course, code can be improved so much now, for the sake of load which sever will face if the nounce number is not found in the time.
- I have tested the keccak256 using solidity at remix.ethereum.org/ and also using https://stackblitz.com/ and tested the conversion after adding nounce number.
- So In the test cases we are using the Supertest to test the API endpoints, where we are checking the output of the hash and doing comparison between the inputHex and the outPutHash after adding the nounce Number in the inputHex.

### 🔄 Is it able to cover any possible requests?

Yes, it is able to cover the all the planted requests, that I have used in the test cases in the server.test.js file.

### 💪 Is it stable for long run?

- It would be best if we use some sort of DSA search, to find the nounce number that is stable for long run.
- We can run the for loop / or brute force till the range of Hex input , so that we control the infinity loop. Of course we will not be able to find the nounce but can save server going down and serving other servable requests.
- For being on the safe side, I have added the farthest digit to break the loop for saving the server going down, if the server having much load on it.

<!-- GETTING STARTED -->

## 🚀 Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

You'll need Docker and Docker Compose installed on your system or Docker Desktop application installed.
If you don't have Docker, then simple clone the resp, and run these commands

For Frontend:

```sh
cd cryptography-assessment
cd frontend
yarn install
yarn run dev

```

For Backend:

```sh
cd cryptography-assessment
cd backend
yarn install
yarn start

```

Else if you have the Docker and Docker compose or Docker Desktop application follow bellow:

### ⬇️ Installation

1. Clone the repository.

   ```sh
   git clone https://github.com/shoaibshebi/cryptography-assessment.git && cd cryptography-assessment
   ```

2. Build Docker containers locally:

```bash
docker-compose up --build
```

Woohoo 🙌! you are done now.

Go to `http://localhost:3000/` to see the Frontend app.
Server is running on `http://localhost:4000/`

‼️ If some thing dos'nt work, please mail the issue with screen shots on this -> shoaib4030891@gmail.com

## 🤸 Usage

In any case you stoped the docker-compose, run this command

```bash
docker-compose up

NOTE: to stop and remove containers run this
docker-compose down
```

## 🧪 Tests

To run the test cases that we have written, please follow these steps

- Go to the backend dir
- Run this command

```bash
`yarn jest`

```

<!-- improvements -->

## 🔧 Improvements

- Backend: Code can be refactored in queries and mutation files espacially before returing the reponse to resolvers
