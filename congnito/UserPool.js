import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-2_6da9Zs8Ks",
    ClientId: "2g1ntpmpm28idsie7qu815r2bn",
}

export default new CognitoUserPool(poolData)
