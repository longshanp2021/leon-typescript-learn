const mongoose = require('mongoose');
let a = mongoose.connect('mongodb://leon:Leon.pu199139!@1.116.37.43:9702/test',
    function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log('数据库连接成功');
    }
);

var TeacherSchema = mongoose.Schema({
    name: String,
    age: Number,
});

    var Teacher = mongoose.model('cars', TeacherSchema);

    Teacher.find({}, function (err: any, doc: any) {
        if (err) {
            console.log(1111,err);
            return
        } else {
            console.log(222222,doc);
        }
    });





