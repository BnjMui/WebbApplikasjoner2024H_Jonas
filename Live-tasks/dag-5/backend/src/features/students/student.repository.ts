import { Result } from "../../types";

type IRepository = {
  list: (query?: Record<string, string>) => Promise<Result<string[]>>;
  create: (data: Record<string, string>) => Promise<Result<string>>;
};
export const createStudentRepository = (db: unknown): IRepository => {
  return {
    list: () => {},
    create: () => {},
  };
};

export const studentRepository = createStudentRepository({});
