import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apiGateway from 'aws-cdk-lib/aws-apigateway';


export class BrandgenieInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const layer = new lambda.LayerVersion(this, "BaseLayer", {
      code: lambda.Code.fromAsset("./lambda_base_layer/layer.zip"),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_9]
    });

    const apiLambda = new lambda.Function(this, "ApiFunction", { 
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset("../app/"),
      handler: "brandgenie_api.handler",
      layers: [layer],
    });

    const brandgenieApi = new apiGateway.RestApi(this, "RestApi", {
      restApiName: "BrandGenie API"
    });

    brandgenieApi.root.addProxy({
      defaultIntegration: new apiGateway.LambdaIntegration(apiLambda)
    })

  }
}
