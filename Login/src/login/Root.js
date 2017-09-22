import React,{Component}from 'react';
import LoginApp from './page/index';
import SQLite from './sqlite/sqlite';
<<<<<<< HEAD
=======
import ContentPage from './component/contentPage';
>>>>>>> chenzhengliang
let sqlite = new SQLite();
let db;
var isLogged = false;
export default function App(){
<<<<<<< HEAD
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
=======
    // init().then(function(data){
    //         console.log(data);
    //         return LoginApp;
    // })
    return <LoginApp isLogged = {false}/>;
}

function init(){
    
    var p = new Promise(function(resolve,reject){
        if (!db) {
            db = sqlite.open();
         }
        //执行数据库操作
        db.transaction((tx)=>{
            tx.executeSql("select * from user",[],(tx,results)=>{
                var b = {};
                s=[];
                var u = results.rows.item(0);
                b.userName = u.userName;
                b.passWord = u.passWord;
                s.push(b);
                if(s) {
                    isLogged = true;
                }else {
                    isLogged = false;
                }
                console.log(s);
                resolve(isLogged);
            })
        })
    })
    return p;
>>>>>>> chenzhengliang
}