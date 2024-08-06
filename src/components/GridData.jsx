import { db } from "@/db";
export default async function GridData() {
  const response = await db.query(`
       SELECT * FROM quiz_questions
        `);
  const data = response.rows;
  console.log(data);
  return data;
}
