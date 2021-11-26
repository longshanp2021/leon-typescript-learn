const mongoose = require('mongoose');
let a = mongoose.connect('mongodb://leon:Leon.pu199139!@1.116.37.43:9702/school',
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
    gender: String
});



var Teacher = mongoose.model('teachers', TeacherSchema);

// Teacher.find({age:{$lte:10}}, function (err: any, doc: any) {
//     if (err) {
//         console.log(1111, err);
//         return
//     } else {
//         console.log(doc);
//     }
// });
//查询年龄小于或者等于10岁的老师;

// Teacher.find({ age: { $gte: 95 } }, function (err: string, doc: Array<object>) {
//     if (err) {
//         console.log(err);
//         return
//     } else {
//         console.log(doc);
//     }
// })
//查询年龄年龄大于或者等于95岁的老师;

// Teacher.find({},
//     function (err, doc) {
//         if (err) {
//             console.log(err);
//             return
//         } else {
//             console.log(doc);
//         }
//     }
// );
//查询所有的老师;


// for (let i = 1; i < 100; i++) {
//     var t = new Teacher({
//         name: `老师${i}`,
//         age: i,
//         gender: '男'
//     });

//     t.save(function (err) {
//         if (err) {
//             console.log(err);
//             return
//         }
//         console.log('添加成功!');
//     })
// }
// 添加一百个老师的数据

// var t = new Teacher({
//     name: '衢老师',
//     age: 36,
//     gender: '男'
// });
// t.save(function (err: string) {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('添加成功!');

// })
//添加一个老师数据

// Teacher.find({ age: { $gte: 30, $lte: 35 } }, function (err: string, doc: Array<object>) {
//     if (err) {
//         console.log(err);
//         return
//     } else {
//         console.log(doc);

//     }
// })
//查询年龄在30到35岁的老师(包括30和35)

// Teacher.find({ age: { $gt: 30, $lte: 3 } }, function (err: string, doc: Array<object>) {
//     if (err) {
//         console.log(err);
//         return
//     } else {
//         console.log(doc);

//     }
// })
//查询年龄在30到35岁的老师(不包括30和35)









