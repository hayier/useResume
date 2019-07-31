

//产品列表 右侧隐藏列表选择高亮效果
var Right_Box_list_three_Children = document.getElementsByClassName('Right_Box_list_three')[0].children;

//季节
function jijeActiveBG(ltab_num) {
    for (var i = 0; i < Right_Box_list_three_Children.length; i++) {
        document.getElementById('jije_activeBG_' + i).className = 'activeBG';
        if (i == ltab_num) {
            document.getElementById('jije_activeBG_' + i).className = 'activeTwo'
        }
    }
}

//产品列表 右侧隐藏列表 重置筛选按钮事件
function czsx() {
    for (var i = 0; i < Right_Box_list_three_Children.length; i++) {
        document.getElementById('jije_activeBG_' + i).className = 'activeBG';
        if (i == 0) {
            document.getElementById('jije_activeBG_0').className = 'activeTwo'
        }
    }
}
