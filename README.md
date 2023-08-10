
# Image analysis API

An image analysis API using serverless computing.


## Running

Ensure that the [Serverless framework](https://www.serverless.com/framework/docs/getting-started) is already installed on your machine. Then clone project:

```bash
  git clone https://link-of-this-repo
```

Go into directory:

```bash
  cd image-analysis
```

Instal all dependencies:

```bash
  yarn install
```

Deploy the service on AWS

```bash
  sls deploy
```

Call the created endpoint

```bash
  curl https://xxxxxxx.execute-api.[aws-region-chosen].amazonaws.com/analyse?imageUrl=[image-address-of-your-image]
```


## Technologies

**Back-end:** Node, Jest, Serverless Framework, AWS Lambda, AWS Rekognition and AWS Translate.


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

