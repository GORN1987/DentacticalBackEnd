import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'azure',
      port: 53046,
      password: process.env.USER_KEY,
      database: 'localdb',
    });

    connection.connect();

    connection.query(
      'SELECT 1 + 1 AS solution',
      function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
      },
    );
    console.log(process.env.USER_KEY);
    connection.end();
    return "test 1";

  }
}
