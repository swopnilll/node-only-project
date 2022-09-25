import { IncomingMessage, ServerResponse } from "http";

import * as userController from '../controller/userController'

export const router = (req: IncomingMessage, res: ServerResponse) => {
  switch (true) {
    case req.url === "/users" && req.method === "GET":
        userController.getAllUsers(req, res);
        break

    default:
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
  }
};
