auto.waitFor();//判断和等待开启无障碍
//打开soul软件
launchApp('Soul')
toastLog('2735106525')
let see_count = rawInput('请输入你想要打招呼的内容', '');
sleep(5000)
//点击到星球界面
id("main_tab_planet").findOne().click()
//如果在星球界面
if (id("img_logo").exists()) {
    // while (true) {
    //     //点击灵魂匹配
    //     id("tv_title").text('灵魂匹配').findOne().parent().parent().click()
    //     //等待聊天界面出现
    //     id("tv_follow").className("android.widget.TextView").text("  关注  ").waitFor()
    //     //如果聊天界面出现并且在聊天界面
    //     if (id("tv_follow").className("android.widget.TextView").text("  关注  ").exists()) {
    //         //输入想要发送的信息
    //         id("et_sendmessage").findOne().setText(see_count)
    //         sleep(200)
    //         //点击发送
    //         id("btn_send").findOne().click()
    //         sleep(200)
    //         //返回到主页面
    //         id("left_layout").findOne().click()
    //     }
    //     sleep(60000)
    // }
    while (true) {
        id("starview").findOne().click()
        sleep(1000)
        id("rl_user_bottom_chat").findOne().click()
        sleep(1000)
        //判断是否发送过,如果发送过就直接不发了,没发送过的就发送
        if (id("container").exists()) {
            id("left_layout").findOne().click()
            sleep(500)
            id("titlebar_back_ivbtn").findOne().click()
            id("text_filter").findOne().click()
            id("filter_male").findOne().click()
            id("filter_confirm").findOne().click()
        } else {
            id("et_sendmessage").findOne().setText('你好')
            id("btn_send").findOne().click()
            id("left_layout").findOne().click()
            sleep(500)
            id("titlebar_back_ivbtn").findOne().click()
            id("text_filter").findOne().click()
            id("filter_male").findOne().click()
            id("filter_confirm").findOne().click()
            sleep(5000)
        }
    }
}