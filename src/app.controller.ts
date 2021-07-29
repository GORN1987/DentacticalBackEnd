import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//const { Pool, Client } = require('pg');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    /*const client = new Client({
  user: 'hfzrndkukrmnop',
  host: 'ec2-3-218-71-191.compute-1.amazonaws.com',
  database: 'd1c4j478ci34c3',
  password: '31c92def57c3176d2ab5fc1e777b2ddf4aa780478830e6c46321e77a9af29686',
  port: 5432,
  ssl: true
})
client.connect();
client.query('SELECT * FROM TEST', (err, res) => {
  console.log(err, res);
  client.end();
})
    return this.appService.getHello();
*/
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
