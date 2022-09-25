import { IncomingMessage, ServerResponse } from "http";

import * as userServices from "../services/userServices";
import { sendErrorResponse } from "../utils/common";

export const getAllUsers = (req: IncomingMessage, res: ServerResponse) => {
  userServices
    .getAllUsers()
    .then(data => res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify(data)))
    .catch(err => sendErrorResponse(res, err.statusCode, err.message));
};