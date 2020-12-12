# date-formatter-js

#### 介绍

js日期格式化，默认格式：yyyy-MM-dd


#### 安装教程

npm install date-formatter-js --save

#### 使用说明

1.导入

import { getQuarter, dateFormat, getMonthFirstDay, getMonthLastDay, getMonthDays, getMonthDateArr, getDateArr } from "date-formatter-js"

2.方法说明

 （1）getQuarter(date = new Date()) -- 获取季度

 （2）dateFormat(date = new Date(), formated = "yyyy-MM-dd") -- 日期格式化 

 （3）getMonthFirstDay(date = new Date(), formated = "yyyy-MM-dd") -- 获取月份第一天日期

 （4）getMonthLastDay(date = new Date(), formated = "yyyy-MM-dd") -- 获取月份最后一天日期

 （5）getMonthDays(date = new Date()) -- 获取月份天数

 （6）getMonthDateArr(date = new Date(), formated = "yyyy-MM-dd") -- 获取月份第一天和最后一天组成的数组

 （7）getDateArr(step = 6, formated = "yyyy-MM-dd") -- 获取当前日期和当前日期之前某些天的日期组成的数组，默认近一周

3.参数说明

 （1）方法中的date入参可以是Date类型、时间戳、yyyy-MM-dd、yyyy/MM/dd等

 （2）方法中的formated参数为日期的返回格式，默认yyyy-MM-dd。支持yyyy-MM-dd hh:mm:ss相关格式的衍生，请自行组装
