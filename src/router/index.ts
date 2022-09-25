import { IncomingMessage, ServerResponse } from "http";

import { router as userRouter } from "./userRouters";

export const router = (req: IncomingMessage, res: ServerResponse) => {
  switch (true) {
    case !!req.url?.match(/^\/users/g):
        userRouter(req, res);
        break;

    default: 
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify({message: 'Route nor found'}));
  }

 
};
