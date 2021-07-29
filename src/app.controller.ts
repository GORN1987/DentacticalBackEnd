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
      password: '6#vWHD_$',
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

    connection.end();
    return "test 1";

  }
}
