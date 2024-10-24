import db, { DB } from "../../db/db";
import type { Result } from "../../types";
import { Student, StudentDB } from "./student.type";

type StudentRepository = {
  list: (query?: Record<string, string>) => Promise<Result<Student[]>>;
  create: (data: Student) => Promise<Result<Student>>;
};

export const createStudentRepository = (db: DB): StudentRepository => {
  const create = (data: Student) => {
    try {
      const studentToDb: StudentDB = {
        id: data.id,
        name: data.name,
        created_at: data.createdAt,
        updated_at: data.updatedAt,
      };

      const query = db.prepare(`
      INSERT INTO students (id, name, created_at, updated_at)
      VALUES (?, ?, ?, ?)
      `);

      const result = query.run(
        studentToDb.id,
        studentToDb.name,
        studentToDb.created_at,
        studentToDb.updated_at
      );

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed creating student.",
        },
      };
    }
  };

  const list = async (query?: Record<string, string>) => {
    try {
      const statement = db.prepare(`SELECT * FROM students`);
      const data = statement.all() as StudentDB[];
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "SOME_CODE_HERE",
          message: "Failed getting students",
        },
      };
    }
  };
  return {
    list,
    create,
  };
};

export const studentRepository = createStudentRepository(db);
