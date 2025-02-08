const Model = require('../model/Model');
const View = require('../view/View');

class Controller {
    static show() { //static berguna pada saat mengambil method tidak pernlu instance
        // console.log('Hallo semeton');
        let todos = Model.show();
        View.show(todos);
    }
    static add(todo) { //static berguna pada saat mengambil method tidak pernlu instance
        Model.add(todo);
    }
    static delete(todo) {
        Model.delete(todo);
    }
    static update(todo) {
        Model.update(todo);
    }
    static message(msg) {
        View.message(msg);
    }
}


module.exports = Controller;