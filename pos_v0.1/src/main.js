//TODO: Please write code in this file.

var inputs = [
    {
        barcode: 'ITEMn000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00

    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    }
];
var new_inputs = [];

for (var i=0;i<inputs.length;i++) {
    var consist_in = false;
    for (var j = 0; j < new_inputs.length; j++) {
        if (new_inputs[j].name == inputs[i].name) {
            consist_in = true;
            new_inputs[j].count++;
            break;
        }
    }

    if (!consist_in) {
        var item = {};
        item.name = inputs[i].name;
        item.barcode = inputs[i].barcode;
        item.price = inputs[i].price;
        item.unit = inputs[i].unit;
        item.count = 1;
        new_inputs.push(item);
    }

}

 function printInventory(new_inputs) {
    var array_print = "";
    var total_price =0;
    for (var i = 0; i <  new_inputs.length; i++) {
        var print_format =
            '名称：' +  new_inputs[i].name +
            '，数量：' +  new_inputs[i].count +  new_inputs[i].unit +
            '，单价：' +  new_inputs[i].price +
            '.00(元)，小计：' +  new_inputs[i].price * new_inputs[i].count + '.00(元)\n';

        array_print = array_print + print_format;

        var num =  new_inputs[i].price * new_inputs[i].count;
        total_price = total_price+num;
    }
    var expectText =
        '***<没钱赚商店>购物清单***\n' +
        array_print+
        '----------------------\n' +
        '总计：'+ total_price+'.00(元)\n' +
        '**********************';
    console.info(expectText);
    console.log(expectText);
 }






















