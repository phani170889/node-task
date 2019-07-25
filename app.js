var app = require('request');

/* GET all tasks and perform calculations */

 const getTask = () => {
  app.get('https://interview.adpeai.com/api/v1/get-task', (error, res, body) => {
    let task = JSON.parse(body);
    let id = task.id;
    let operation = task.operation;

    const result = (operation === 'addition') ? task.left + task.right :
                   (operation === 'subtraction') ? task.left - task.right :
                   (operation === 'multiplication') ? task.left * task.right :
                   (operation === 'division') ? task.left / task.right :
                   (operation === 'remainder') ? task.left % task.right : null;

    console.log(task); 
    console.log(result);
    submitTask.apply(this, [id, result]); // passing arguments to submitTask() function 
  });
}   
getTask();

  /* POST a task */

  const submitTask = (id, result) => {
    app.post('https://interview.adpeai.com/api/v1/submit-task', {
      json: {
        id,
        result
      }
    }, (error, res, body) => {
      console.log(`Status Code: ${res.statusCode} | Description: ${body}`);
    });
  }