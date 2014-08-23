//TODO: Please write code in this file.


var allItems;
var inputs;
allItems = loadAllItems();
inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];
function printInventory(inputs) {
   inputs = get_normal_barcode_array(inputs);
    var new_inputs=[];
    var new_inputsCount = [];
    for(var i= 0;i<inputs.length ;i++) {
        for (var j = 0; j < allItems.length; j++) {
            if (inputs[i] == allItems[j].barcode) {
                new_inputs.push(allItems[j])
            }
        }
    }
    for (var f = 0; f < new_inputs.length; f++) {
        var consist_in = false;
        for (var h = 0; h < new_inputsCount.length; h++) {
            if (new_inputsCount[h].name == new_inputs[f].name) {
                consist_in = true;
                new_inputsCount[h].count++;
                break;
            }
        }

        if (!consist_in) {
            var item = {};
            item.name = new_inputs[f].name;
            item.barcode = new_inputs[f].barcode;
            item.price = new_inputs[f].price;
            item.unit = new_inputs[f].unit;
            item.count = 1;
            item.mot =0;
            new_inputsCount.push(item);
        }
    }
    console.info(JSON.stringify(new_inputsCount));
    for(var i= 0;i<new_inputsCount.length;i++){
        var prom=[
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ];
        for(var k=0;k<prom.length;k++){
          if (prom[k] == new_inputsCount[i].barcode ){
              var pro_count=new_inputsCount[i].count;
              var mot=Math.floor(pro_count/3);
              new_inputsCount[i].mot=mot;
          }
        }
    }

    var array_print = "";
    var total_price = 0;
    for (var f = 0; f < new_inputsCount.length; f++) {
        var print_format =
            '名称：' + new_inputsCount[f].name +
            '，数量：' + new_inputsCount[f].count + new_inputsCount[f].unit +
            '，单价：' + new_inputsCount[f].price +
            '.00(元)，小计：' + new_inputsCount[f].price * (new_inputsCount[f].count-new_inputsCount[f].mot) + '.00(元)\n';

        array_print = array_print + print_format;

        var num = new_inputsCount[f].price * (new_inputsCount[f].count-new_inputsCount[f].mot);
        total_price = total_price + num;//迭代计算总价。
    }
    var expectText =
        '***<没钱赚商店>购物清单***\n' +
        array_print +
        '----------------------\n' +
        '总计：' + total_price + '.00(元)\n' +
        '**********************';
    console.info(expectText);
    console.log(expectText);
}
/*
function loadPromotions() {
return [
    {
        type: 'BUY_TWO_GET_ONE_FREE',
        barcodes: [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ]
    }
]
}
*/
function get_normal_barcode_array(inputs) {
    for (i=0;i<inputs.length;i++){
        var num = inputs[i].search("-");
        if( num >0){
            var last = inputs[i].substring(num+1);
            var code = inputs[i].substring(0,num);
            console.log(last);
            inputs[i]=code;
        }

    }
    for (var j=1;j<last;j++){
        inputs.push(code);
    }
    return inputs;


}

