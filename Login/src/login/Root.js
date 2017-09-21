import React,{Component}from 'react';
import LoginApp from './page/index';
import SQLite from './sqlite/sqlite';
let sqlite = new SQLite();
let db;
var isLogged = false;
export default function App(){
   return init(function(){
        return LoginApp;
    })
}

function init(callback){
     if (!db) {
            db = sqlite.open();
         }
        //执行数据库操作
    db.transaction((tx)=>{
        tx.executeSql("select * from user",[],(tx,results)=>{
            var b = {};
            var u = results.rows.item(0);
            b.userName = u.userName;
            b.passWord = u.passWord;
            s.push(b);
            if(s) {
                isLogged = true;
            }else {
                isLogged = false;
            }
          
        })
    })
    return callback && callback();
}