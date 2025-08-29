import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, PutCommand} from "@aws-sdk/lib-dynamodb";
import {randomUUID} from "crypto";


const client = new DynamoDBClient({
    region: "us-east-1"
});

const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event, context) => {
  try {
    const nuevoItem = JSON.parse(event.body);

    const ingreso = {
      ... 
      nuevoItem,
      id: randomUUID()
    };

    await docClient.send(new PutCommand({
      TableName: "clase3",
      Item: ingreso
    }));


    return {
        statusCode: 200,
        body: JSON.stringify(ingreso)
      };
    
  } catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify(error)
      }
  }

}


