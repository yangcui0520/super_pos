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
    for (var f = 0; f < new_inputs.length; f++) {               //合并重复列出的同种类商品信息；将带有count信息的商品信息块放进new_inputsCount。
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
                  //把mot加进item里。
            new_inputsCount.push(item);
        }
    }
    console.info(JSON.stringify(new_inputsCount));
    for(var i= 0;i<new_inputsCount.length;i++){                 //在new_inputsCount中遍历出是否有促销商品；计算出赠送商品信息。
        var prom=[
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ];
        for(var k=0;k<prom.length;k++){
          if (prom[k] == new_inputsCount[i].barcode ){          //在优惠商品条码数组prom里遍历出与购物车中的优惠商品.
              var pro_count=new_inputsCount[i].count;
              var mot=Math.floor(pro_count/3);                  //优惠商品的数量为mot.
              new_inputsCount[i].mot=mot;
              var print_promotion =
                  '名称：' + new_inputsCount[i].name +
                  '，数量：' + new_inputsCount[i].mot;                                                 //把mot加进new_inputsCount数组里。
              }
        }
    }
   var array_print = "";
    var total_price = 0;
    var init_price=0;
    for (var f = 0; f < new_inputsCount.length; f++) {               //在new_inputsCount中遍历出需要打印的信息 array_print；按格式排列打印清单。
        var print_format =
            '名称：' + new_inputsCount[f].name +
            '，数量：' + new_inputsCount[f].count + new_inputsCount[f].unit +
            '，单价：' + new_inputsCount[f].price.toFixed(2)+
        '(元)，小计：' + (new_inputsCount[f].price * (new_inputsCount[f].count-new_inputsCount[f].mot)).toFixed(2)+ '(元)\n';

        array_print = array_print + print_format;         //迭代打印商品信息。
        var num = new_inputsCount[f].price * (new_inputsCount[f].count-new_inputsCount[f].mot);
        total_price = total_price + num;//迭代计算总价。
        var init_num = new_inputsCount[f].price * new_inputsCount[f].count;
         init_price =init_price + init_num;
    }
        var saving_money = init_price - total_price ;
    var promotionTest =
        '挥泪赠送商品：\n' ;

     for (var g= 0;g<new_inputsCount.length;g++){
            if(new_inputsCount[g].mot>0){
              var promotionBody ='名称：'+new_inputsCount[g].name+'，数量：'
                           +new_inputsCount[g].mot
                           +new_inputsCount[g].unit+'\n';
                promotionTest=promotionTest+promotionBody;
           }
     }



      var expectText =
        '***<没钱赚商店>购物清单***\n' +
        array_print +
        '----------------------\n' +
            promotionTest +
        '----------------------\n' +
        '总计：' + total_price.toFixed(2) + '(元)\n' +
            '节省：'+ saving_money.toFixed(2) +  '(元)\n' +
        '**********************';
    console.info(expectText);
    console.log(expectText);
}

/*'挥泪赠送商品：\n' +
'名称：雪碧，数量：1瓶\n' +
'名称：方便面，数量：1袋\n' +
'----------------------\n' +
'总计：51.00(元)\n' +
'节省：7.50(元)\n' +
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
    for (i = 0; i < inputs.length; i++) {
        var num = inputs[i].search("-");
        if (num > 0) {
            var last = inputs[i].substring(num + 1);
            var code = inputs[i].substring(0, num);
            console.log(last);
            inputs[i] = code;
        }

    }
    for (var j = 1; j < last; j++) {
        inputs.push(code);
    }
    return inputs;


}


