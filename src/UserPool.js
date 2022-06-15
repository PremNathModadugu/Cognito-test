import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_NxYzEkG7l",
    ClientId: "4e8e42hejaeoqeqvahndd16fgf"
}

export default new CognitoUserPool(poolData);