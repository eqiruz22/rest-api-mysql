'use strict';

exports.ok = (values, res) => {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
}

// exports.nestedData = (values, res) => {
//     const hasil = values.reduce((acc,items) => {
//         if(acc[items.nama_user]){
//             const group = acc[items.nama_user];
//             if(Array.isArray(group.pakai_asset)){
//                 group.pakai_asset.push(items.pakai_asset)
//             } else {
//                 group.pakai_asset = [group.pakai_asset, items.pakai_asset]
//             }
//         } else {
//             acc[items.nama_user] = items;
//         }
//         return acc;
//     }, {});
//     var data = {
//         'status':201,
//         'values':hasil
//     }
//     res.json(data);
//     res.end();
// }