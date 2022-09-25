import { IncomingMessage, ServerResponse } from "http";

import * as userServices from "../services/userServices";
import { sendErrorResponse } from "../utils/common";

export const getAllUsers = (req: IncomingMessage, res: ServerResponse) => {
  userServices
    .getAllUsers()
    .then(data => res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify(data)))
    .catch(err => sendErrorResponse(res, err.statusCode, err.message));
};

export const getUser = (req:IncomingMessage, res: ServerResponse) => {

  const id = req.url?.split('/')[2];

  if (!id) {
    sendErrorResponse(res, 400, 'User id is required');

    return;
  }

  userServices
  .getUser(+id)
  .then(data => res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data)))
  .catch(err => sendErrorResponse(res, err.statusCode,err.message))
}