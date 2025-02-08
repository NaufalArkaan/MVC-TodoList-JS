//Proses Argv : bisa mengambil input dari terminal
//Note : show, add, delete, update
const command = process.argv[2];
const params = process.argv.slice(3);
const Controller = require('./controller/Controller');

switch(command){
    case 'show':
        // console.log('Show success');
     
        Controller.show();
        break;
    case 'add':
        // console.log('Add success');
        Controller.add(params);
        break;
    case 'delete':
        // console.log('Delete success');
        Controller.delete(params);
        break;
    case 'update':
        // console.log('Update success');
        Controller.update(params);
        break;
    default:
        Controller.message('System invalid!');
        break;
}