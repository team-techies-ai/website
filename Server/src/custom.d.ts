// custom.d.ts
import * as multer from "multer";

declare global {
  namespace Express {
    interface Request {
      files: multer.File[] | undefined;
    }
  }
}
