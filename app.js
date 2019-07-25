var app = require('request');

app.get('https://interview.adpeai.com/api/v1/get-task', (error, res, body) => {
  let task = JSON.parse(body);
  console.log(task); 

  if (task.operation === 'addition')
        console.log(task.left + task.right);

  if (task.operation === 'subtraction')
       console.log(task.left - task.right);

   if (task.operation === 'multiplication')
       console.log(task.left * task.right);

  if (task.operation === 'division')
        console.log(task.left / task.right);

   if (task.operation === 'remainder')
        console.log(task.left % task.right);
});


// app.post('https://interview.adpeai.com/api/v1/submit-task', {
//   json: {
//     id: 'fac832de-ceb4-44e5-a6e5-315299ebf389',
//     result: 8531629869710552
//   }
// }, (error, res, body) => {
//   console.log(`Status Code: ${res.statusCode}`);
//   console.log(`Description: ${body}`);
// });

