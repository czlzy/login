import React,{Component}from 'react';
import {StackNavigator} from 'react-navigation';
import Login from '../component/phoneLogin';
import Main from '../component/main';
import Register from '../component/register';
import emailLogin from '../component/emailLogin';
import ContentPage from '../component/contentPage';
import {
    Navigator,
} from 'react-native-deprecated-custom-components';
<<<<<<< HEAD
let isLogged = false;
=======
>>>>>>> chenzhengliang
    class LoginApp extends Component {
        componentWillUnmount() {
            sqlite.close();
        }
    	render(){
    		return (
    			<Navigator 
    				initialRoute={{component:Main}}
    				configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }}
                    renderScene={(route, navigator) =>{
                        let DefaultComponent=route.component;
                        console.log(DefaultComponent.name)
<<<<<<< HEAD
                        console.log(isLogged)
                        if(DefaultComponent.name == 'Main'&& isLogged === true){
=======
                        if(DefaultComponent.name == 'Main'&& this.props.isLogged === true){
>>>>>>> chenzhengliang
                            return <ContentPage navigator = {navigator}/>
                        }else {
                            return <DefaultComponent  navigator={navigator}/>
                        }
                    }
                  }
    			/>
    		)
    	}
    }
//  const LoginApp = StackNavigator({
//   Main:{screen:Main},
//   Login:{screen:Login},
//   Register:{screen:Register},
//   emailLogin:{screen:emailLogin},
//   contentPage:{screen:contentPage}
// });
<<<<<<< HEAD

=======
>>>>>>> chenzhengliang
export default LoginApp;