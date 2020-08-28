const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('5 * 20 * * 4', () => 
    console.log('Executando tarefa 1: ', new Date().getSeconds()))