import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import lotto from "./lotto.png";
import snake from "./snake.png";
import chip from "./chip.png";
import plus from "./plus.png";
import suit from "./s.png";
import './Lotto.css';
class Lotto extends Component {

constructor(props) {
super(props);
this.state = {
data:[],
testnumber:10,
checknumber:[],
number:[],
mylotto:'',
redirectToReferrer: false,
totalchips:0,
chips:'',
name:'',
num1:1,
num2:2,
num3:3,
num4:4,
num5:5,
num6:6,
num7:7,
num8:8,
num9:9,
num10:10,
num11:11,
num12:12,
num13:13,
num14:14,
num15:15,
num16:16,
num17:17,
num18:18,
num19:19,
num20:20,
num21:21,
num22:22,
num23:23,
num24:24,
num25:25,
num26:26,
num27:27,
num28:28,
num29:29,
num30:30,
num31:31,
num32:32,
num33:33,
num34:34,
num35:35,
num36:36,
num37:37,
num38:38,
num39:39,
num40:40,
num41:41,
num42:42,
num43:43,
num44:44,
num45:45,
num46:46,
num47:47,
num48:48,
num49:49,
num50:50,

};
this.getuserChips=this.getuserChips.bind(this);
this.logout = this.logout.bind(this);
this.lotto = this.lotto.bind(this);
this.addlotto = this.addlotto.bind(this);
this.getNumber = this.getNumber.bind(this);

}


componentWillMount() {

if(sessionStorage.getItem("userData")){

this.getuserChips();
this.getNumber();

}

else{
this.setState({redirectToReferrer: true});
}

}
//---------------------------Add Product----------------------------

feedUpdate1(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed1,price: this.state.price1};
    if (this.state.userFeed1) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});

    });
    }
}

addlotto(e){
e.preventDefault();
let data = JSON.parse(sessionStorage.getItem("userData"));

let postData = {user_id: data.userData.user_id, number: this.state.number.map};
if (postData) {

PostData('addlotto', postData).then((result) => {

if(result.success){

alert(result.success);
}
else
alert(result.error);

});
}
}



//---------------------------------------------------------
//-------------เหลือการ set state เปลี่ยนให้เรารู้ว่าเลือกอะไรอาจใข้ if elseif เเทนในการ setstate
lotto(evt){
  var num=evt.target.dataset.value;
  var target="num"+num;
  console.log(target);
if(this.state.num1==num){this.setState({[target]: "x"});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num2==num){this.setState({[target]: "x"});this.setState({number: [num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num3==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num4==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num5==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num6==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num7==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num8==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num9==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num10==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num11==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num12==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num13==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num14==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num15==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num16==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num17==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num18==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num19==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num20==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num21==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num22==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num23==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num24==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num25==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num26==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num27==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num28==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num29==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num30==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num31==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num32==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num33==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num34==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num35==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num36==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num37==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num38==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num39==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num40==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num41==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num42==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num43==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num44==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num45==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num46==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num47==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num48==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num49==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else if (this.state.num50==num){this.setState({[target]: "x"});this.setState({number:[num]});this.setState({
number: [...this.state.number, num]});this.setState({totalchips: this.state.totalchips + 10});}
else {
    this.setState({[target]:num});
    this.state.number.splice(this.state.number.indexOf(num), 1);
    ;this.setState({totalchips: this.state.totalchips - 10});
  }
console.log(this.state.number);
}
getuserChips() {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};


    if (data) {
    PostData('chips', postData).then((result) => {
    let responseJson = result;
    this.setState({chips: responseJson.chips});
    });
    }

}
getNumber(evt) {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};
    if (data) {
    PostData('checknumber', postData).then((result) => {
    let responseJson = result;
    //this.setState({checknumber: responseJson.numberc});
    this.setState({checknumber: [...this.state.checknumber, responseJson.numberc]});
    });

    }
}


logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
    return (<Redirect to={'/login'}/>)
}

return (

<div className="row" id="Body" >
<a style={{marginTop:"-35px",color:"white"}} href="#" onClick={this.logout} className="logout">LOGOUT</a>
<div className="medium-12 contentlotto ">
<div className="name">Welcome,{this.state.name}</div>
<div className="chip">
<i style={{marginRight:"10px"}}><img src={chip} width="30px" height="30px" /></i>
CHIPS:&nbsp;{this.state.chips}
<a href="/Payment" ><img style={{marginLeft:"20px"}} src={plus} width="20px" height="20px" /></a>
</div>

<hr/>


<br/>
<div className="Gamepanel">
<label>First prize=100 Chips</label>
<label>Second prize=60 Chips</label>
<label>Third prize=40 Chips</label>
<label>YourNumber:{'  '}{this.state.number.map(item => (<span key={item}>{item}{'  '}</span>))}
{this.state.checknumber.map(item => (<span key={item}>{item}{'  '}</span>))}
</label>
<label style={{color:"red"}}>10 Chips per number</label>
<label>Total:{'  '}{this.state.totalchips}{'  '}Chips</label>


  <button style={{color:"white",width:"250px"}} className="button" onClick={this.checknumber}>SUBMIT</button>
</div>
<div className="Gamepanelprize">
<label>1ST number=</label>
<label>2ND number=</label>
<label>3RD number=</label>
</div>
<div className="Gamedisplay1">
<center>
<table>
<button type="button">
<tr>
<th colSpan={10} id="th1" >
<p>MIRACLE LOTTO</p>
</th>
</tr>
<tr>
<th  onClick={this.lotto} data-value="1">
{this.state.num1}
</th>
<th onClick={this.lotto} data-value="2" >
{this.state.num2}
</th >
<th onClick={this.lotto} data-value="3" >
{this.state.num3}
</th>
<th onClick={this.lotto} data-value="4" >
{this.state.num4}
</th >
<th onClick={this.lotto} data-value="5" >
{this.state.num5}
</th>
<th onClick={this.lotto} data-value="6" >
{this.state.num6}
</th>
<th onClick={this.lotto} data-value="7" >
{this.state.num7}
</th>
<th onClick={this.lotto} data-value="8" >
{this.state.num8}
</th>
<th onClick={this.lotto} data-value="9" >
{this.state.num9}
</th>
<th onClick={this.lotto} data-value="10" >
{this.state.num10}
</th>
</tr>
<tr>
<th onClick={this.lotto} data-value="11" >
{this.state.num11}
</th>
<th onClick={this.lotto} data-value="12" >
{this.state.num12}
</th>
<th onClick={this.lotto} data-value="13" >
{this.state.num13}
</th>
<th onClick={this.lotto} data-value="14" >
{this.state.num14}
</th>
<th onClick={this.lotto} data-value="15" >
{this.state.num15}
</th>
<th onClick={this.lotto} data-value="16" >
{this.state.num16}
</th>
<th onClick={this.lotto} data-value="17" >
{this.state.num17}
</th>
<th onClick={this.lotto} data-value="18" >
{this.state.num18}
</th>
<th onClick={this.lotto} data-value="19" >
{this.state.num19}
</th>
<th onClick={this.lotto} data-value="20" >
{this.state.num20}
</th>
</tr>
<tr>
<th onClick={this.lotto} data-value="21" >
{this.state.num21}
</th>
<th onClick={this.lotto} data-value="22" >
{this.state.num22}
</th>
<th onClick={this.lotto} data-value="23" >
{this.state.num23}
</th>
<th onClick={this.lotto} data-value="24" >
{this.state.num24}
</th>
<th onClick={this.lotto} data-value="25" >
{this.state.num25}
</th>
<th onClick={this.lotto} data-value="26" >
{this.state.num26}
</th>
<th onClick={this.lotto} data-value="27" >
{this.state.num27}
</th>
<th onClick={this.lotto} data-value="28" >
{this.state.num28}
</th>
<th onClick={this.lotto} data-value="29" >
{this.state.num29}
</th>
<th onClick={this.lotto} data-value="30" >
{this.state.num30}
</th>
</tr>
<tr>
<th onClick={this.lotto} data-value="31" >
{this.state.num31}
</th>
<th onClick={this.lotto} data-value="32" >
{this.state.num32}
</th>
<th onClick={this.lotto} data-value="33" >
{this.state.num33}
</th>
<th onClick={this.lotto} data-value="34" >
{this.state.num34}
</th>
<th onClick={this.lotto} data-value="35" >
{this.state.num35}
</th>
<th onClick={this.lotto} data-value="36" >
{this.state.num36}
</th>
<th onClick={this.lotto} data-value="37" >
{this.state.num37}
</th>
<th onClick={this.lotto} data-value="38" >
{this.state.num38}
</th>
<th onClick={this.lotto} data-value="39" >
{this.state.num39}
</th>
<th onClick={this.lotto} data-value="40" >
{this.state.num40}
</th>
</tr>
<tr>
<th onClick={this.lotto} data-value="41" >
{this.state.num41}
</th>
<th onClick={this.lotto} data-value="42" >
{this.state.num42}
</th>
<th onClick={this.lotto} data-value="43" >
{this.state.num43}
</th>
<th onClick={this.lotto} data-value="44" >
{this.state.num44}
</th>
<th onClick={this.lotto} data-value="45" >
{this.state.num45}
</th>
<th onClick={this.lotto} data-value="46" >
{this.state.num46}
</th>
<th onClick={this.lotto} data-value="47" >
{this.state.num47}
</th>
<th onClick={this.lotto} data-value="48" >
{this.state.num48}
</th>
<th onClick={this.lotto} data-value="49" >
{this.state.num49}
</th>
<th onClick={this.lotto} data-value="50" >
{this.state.num50}
</th>
</tr>
</button>
</table>

</center>
</div>



</div>

</div>
);
}
}

export default Lotto;
