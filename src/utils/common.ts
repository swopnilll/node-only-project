import { ServerResponse } from "http";

export const sendErrorResponse = (
  res: ServerResponse,
  statusCode: number,
  message: string
) => {
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(JSON.stringify({ message }));
};
