<?php
    /*第一步，连接Mysql数据库，查询当前用户的所有订单信息。
            四步
            1.与Mysql数据库连接。
                mysql_connect(url,ussername,pswd,dbname,port);
                返回Mysql数据库的连接对象
            2.定义sql语句-字符串类型
            3.将sql语句发送到Mysql数据库进行执行。
                解决中午乱码，在执行sql语句前，先指定编码。
                mysqli_query("SETNAMES　utf8");
                mysqli_query(link,sql);
            4.如果得到结果集对象，进行解析。
            5.关闭与数据库的连接
            mysqliclose(link)

    */
    $con = mysqli_connect('127.0.0.1','root','','jd','3306');
    $sql ="select o.order_num, o.shop_name, o.shop_url, o.price, "
                    ."o.payment_mode, o.submit_time, o.order_state, p.product_name,"
                    ."p.product_url, p.product_img "
                    ."from jd_orders o,jd_order_product_detail d,jd_products p "
                    ."where o.order_id=d.order_id and p.product_id=d.product_id "
                    ."and o.user_name='aaa'";
    mysqli_query($con,'SET NAMES utf8');
    $result = mysqli_query($con,$sql);
    $arr = array();
    while($row = mysqli_fetch_assoc($result)){

            array_push($arr,$row);
    }
    $json = json_encode($arr);
     /*
    *解析结果集对象，不能使用json_encode 函数直接对result类型对象进行转换
    */



    mysqli_close($con);
    echo $json;
?>