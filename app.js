var app = require('request');

/* GET all tasks and perform calculations */

  app.get('https://interview.adpeai.com/api/v1/get-task', (error, res, body) => {
      let task = JSON.parse(body);
      let id = task.id;
      let result = 0;
  
      if (task.operation === 'addition')
            result = task.left + task.right;
    
      if (task.operation === 'subtraction')
            result = task.left - task.right;
    
      if (task.operation === 'multiplication')
            result = task.left * task.right;
    
      if (task.operation === 'division')
            result = task.left / task.right;
    
      if (task.operation === 'remainder')
            result = task.left % task.right;
  
      console.log(task); 
      console.log(result);
      submitTask.apply(this, [id, result]); // passing arguments to submitTask() function 
    });

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