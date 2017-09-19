
import {StackNavigator} from 'react-navigation';
import Login from '../component/phoneLogin';
import Main from '../component/main';
import Register from '../component/register';
import emailLogin from '../component/emailLogin';
import contentPage from '../component/contentPage';

 const loginApp = StackNavigator({
  Main:{screen:Main},
  Login:{screen:Login},
  Register:{screen:Register},
  emailLogin:{screen:emailLogin},
  contentPage:{screen:contentPage}
},{
	
});
 export default loginApp;