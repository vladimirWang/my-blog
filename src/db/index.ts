import { PrismaClient } from "@prisma/client";
declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}
export const db = prisma;
// const { DATABASE_URL } = process.env;

// // console.log(result.parsed, '---parsed');
// const prisma = new PrismaClient({
//   log: ["info", "error"],
//   datasources: {
//     db: {
//       url: DATABASE_URL,
//     },
//   },
// });

// prisma
//   .$connect()
//   // .then(() => {console.log('connected')})
//   .catch((err: any) => {
//     console.log("disconnected, because: ", err.message);
//   });
// export default prisma;
