import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession();

  console.log({ session, status });
  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session?.user?.email}</p>
        <Link href={"/api/auth/signout"}>Signout</Link>
      </>
    );
  }

  //https://dev-10cofkyh78el00pn.us.auth0.com/u/consent?state=hKFo2SB1aE1jWlRzb0xuY1FmdmxRbFJLQmEtS0J5YndIM1JzZqFup2NvbnNlbnSjdGlk2SBqRXpjMHg4MjJSZ3hlZGNUNG1ZNEVtVXMycW13N2ZOb6NjaWTZIG5iNkJabVI5ak9VQWFEQzdKNmFoUmNIT3pPTmFVdDE0

  return (
    <>
      <div></div>
      <Link href={"/api/auth/signin"}>Sign in</Link>
    </>
  );
}

// AUTH0_CLIENT_ID = jPlfOEfyZdho0xMjq3FMcc5KzTA0fASv
// AUTH0_CLIENT_SECRET = FtT10kRRabjxpLItpDE3ViV_rYv23lAB0bDQ45adU4oRQBLHknWnXXJN1s8kL2wp
// AUTH0_ISSUER = https://dev-b530nocl73roqri2.us.auth0.com/

// const bcrypt = require('bcrypt');
// const pg = require("pg");
// var pool = new pg.Pool({
//       user: '**',
//       host: '**',
//       database: '**',
//       password: '**',
//       port: **,
// });

// pool.connect(function (err, client, done) {
//   if (err)
//     console.log('error');
//   { console.log(err); return callback(err); }

//   const query = 'UPDATE auth_user SET email_Verified = true WHERE email_Verified = false AND email = $1';
//   client.query(query, [email], function (err, result) {
//     done();
// console.log(err);
//     return callback(err, result && result.rowCount > 0);
//   });
// });
// }

// function login(email, password, callback) {
//   //this example uses the "pg" library
//   //more info here: https://github.com/brianc/node-postgres

//   const bcrypt = require('bcrypt');
//   const postgres = require('pg');

//   let pool = new pg.Pool({
//         user: 'postgres',
//         host: 'localhost',
//         database: 'postgres',
//         password: '12341234',
//         port: 5432,
//   });

//   //const conString = 'postgres://postgres:12341234@localhost:5432/postgres';
//   const conString = 'postgres://aqnvzgdv:ojejNDbCVzyhbpYerseylLlo239D4aHG@drona.db.elephantsql.com/aqnvzgdv';
//   pool.connect(function (err, client, done) {

//     if (err) return callback(err);

//     const query = 'SELECT id, nickname, email, password FROM users WHERE email = $1';
//     client.query(query, [email], function (err, result) {
//       // NOTE: always call `done()` here to close
//       // the connection to the database
//       done();

//       if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));

//       const user = result.rows[0];

// //      bcrypt.compare(password, user.password, function (err, isValid) {
//   //      if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

//         return callback(null, {
//          	user_id: user.id,
//           email: user.email
//         });
//     //  });
//     });
//   });
// }

// function create(user, callback) {
//   //this example uses the "pg" library
//   //more info here: https://github.com/brianc/node-postgres

//   const bcrypt = require("bcrypt");
//   const postgres = require("pg");

//   let pool = new postgres.Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "postgres",
//     password: "12341234",
//     port: 5432,
//   });

//   // const conString = 'postgres://aqnvzgdv:ojejNDbCVzyhbpYerseylLlo239D4aHG@drona.db.elephantsql.com/aqnvzgdv';
//   pool.connect(function (err, client, done) {
//     if (err) return callback(err);

//     bcrypt.hash(user.password, 10, function (err, hashedPassword) {
//       if (err) return callback(err);

//       const query = "INSERT INTO users(email, password) VALUES ($1, $2)";
//       client.query(query, [user.email, hashedPassword], function (err, result) {
//         // NOTE: always call `done()` here to close
//         // the connection to the database
//         done();

//         return callback(err);
//       });
//     });
//   });
// }
