import { Router, Request, Response, NextFunction } from "express";
const router = Router();

//Courses Route: api/course
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("Something bad happen");
  } catch (error) {
    next(error);
  }
});

//Exporting Courses Route
export default router;
