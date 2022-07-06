import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://images.search.yahoo.com/images/view;_ylt=AwrNYV6DqsViAwsUMYE2nIlQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzUyZGE0NGY0NzdlZjczMmJiNGU0NGZiOWFmYWY1ZTI5BGdwb3MDMjUEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Dprofile%2Bpic%26ei%3DUTF-8%26type%3Dasbw_8923_CHW_US_tid20084%26fr%3Dyhs-iba-syn%26hsimp%3Dyhs-syn%26hspart%3Diba%26param1%3DSg2CHUjQPhmmAPXYiyhp%252FK2%252BHHPurbjrwYbIy2wiIswxFcfvl3bs2IwIbuG7J%252Byv%26param2%3D9dUI1n2R0BLDxNuWfiP4aSFOTltNdSPoIx38%252BUf%252FiXrvPdoGmStdlfwLFZYDvqkAJrWWk4yNReCLnBD%252FqPsDZd7olTZcV8HMx1G%252Fk786sE2Tis1g8dJd8zxVWs%252BbKztBnq1TfqUiqPYK9pXifXmJFyorDuCsYXJE71Y6G5tfejDrV2vccE0cHbLK%252F%252FVhyRpgN83qXTMrT2O6X9smpquse0%252FLGWgmn7BFfGgvcju%252Bqx0Garf5hAMQZwjRaRWp8DlcrBfsIJPD2U7QKwtoG%252Fe7gw%253D%253D%26param3%3DNwVEMR%252FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloIYNIhURx5ygk43IbuWBmnfLApzQNuNyJQuCIFEosygzUObTBvpAdBKtFCFkedGtzXg8BZPONEY8XN9MMyOktF0mvBaNfDjxiwlZUCCmeQaFUZPVwUYNlPFpEgzZYPNjAaZI2FajexIk1zlEhfVyxfEeo14L1eMQRb4Ciz09kx8u3uuvTBMkmUcZx5eUicZCnZk11BLZO4OcjfGG2eZDQq0FMwJXMex0xOw3k0GTGuMQUtIlJxf%252FSN6ZxuSpCuJb8p2W7V0CCWf1qbsPWaQ%252BVIm4KhBiW1HTuVl7CyqjFej5WubAuWAaeHd17%252BL%252BlaEDHJ%252BNyCZRIh%252FAzHP7izrvvyuqDLklR5zqCciV%252FW4Fjwj0%253D%26param4%3DmLo66LmhwKAlXCh%252F0q1JmRWCY1FRu3BQgsegZvLd7Tg%253D%26tab%3Dorganic%26ri%3D25&w=968&h=1024&imgurl=www.osmpic.com%2Fwp-content%2Fuploads%2F2019%2F03%2FPicsArt_03-21-10.29.33-968x1024.jpg&rurl=http%3A%2F%2Fwww.osmpic.com%2Fsweet-whatsapp-images-profile%2F&size=39.1KB&p=profile+pic&oid=52da44f477ef732bb4e44fb9afaf5e29&fr2=&fr=yhs-iba-syn&tt=100+Sweet+Whatsapp+Images+Profile+Pictures+Sweet+Images+For+Dp+Pic&b=0&ni=180&no=25&ts=&tab=organic&sigr=B6ct4Ppp8_7v&sigb=_0kjqedXPTNq&sigi=.xC25wb1HjJ9&sigt=IRECW2PcwytK&.crumb=ppNQTkCmzpd&fr=yhs-iba-syn&hsimp=yhs-syn&hspart=iba&type=asbw_8923_CHW_US_tid20084&param1=Sg2CHUjQPhmmAPXYiyhp%2FK2%2BHHPurbjrwYbIy2wiIswxFcfvl3bs2IwIbuG7J%2Byv&param2=9dUI1n2R0BLDxNuWfiP4aSFOTltNdSPoIx38%2BUf%2FiXrvPdoGmStdlfwLFZYDvqkAJrWWk4yNReCLnBD%2FqPsDZd7olTZcV8HMx1G%2Fk786sE2Tis1g8dJd8zxVWs%2BbKztBnq1TfqUiqPYK9pXifXmJFyorDuCsYXJE71Y6G5tfejDrV2vccE0cHbLK%2F%2FVhyRpgN83qXTMrT2O6X9smpquse0%2FLGWgmn7BFfGgvcju%2Bqx0Garf5hAMQZwjRaRWp8DlcrBfsIJPD2U7QKwtoG%2Fe7gw%3D%3D&param3=NwVEMR%2FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloIYNIhURx5ygk43IbuWBmnfLApzQNuNyJQuCIFEosygzUObTBvpAdBKtFCFkedGtzXg8BZPONEY8XN9MMyOktF0mvBaNfDjxiwlZUCCmeQaFUZPVwUYNlPFpEgzZYPNjAaZI2FajexIk1zlEhfVyxfEeo14L1eMQRb4Ciz09kx8u3uuvTBMkmUcZx5eUicZCnZk11BLZO4OcjfGG2eZDQq0FMwJXMex0xOw3k0GTGuMQUtIlJxf%2FSN6ZxuSpCuJb8p2W7V0CCWf1qbsPWaQ%2BVIm4KhBiW1HTuVl7CyqjFej5WubAuWAaeHd17%2BL%2BlaEDHJ%2BNyCZRIh%2FAzHP7izrvvyuqDLklR5zqCciV%2FW4Fjwj0%3D&param4=mLo66LmhwKAlXCh%2F0q1JmRWCY1FRu3BQgsegZvLd7Tg%3D"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
//module.exports=TopBar