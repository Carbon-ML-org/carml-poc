export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "carmlpoc": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "carmlpocCommonDependencies": {
            "Arn": "string"
        },
        "getProduct": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "api3f80812f": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}