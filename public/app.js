function getName(name){
	alert(name);
}

//Khởi tạo component
var Tname = React.createClass({
	addStudent:function(){
		this.state.tongHV = parseInt(this.state.tongHV)+1;
		this.setState(this.state);
	},
	layThongTin:function(){
		alert(this.props.children);
	},
	getInitialState(){
		return{
			tongHV:this.props.tongHV
		};
	},
	render:function(){
		return(
			<div>
				<h1 className="yellow">{this.props.ten}-{this.props.gv}</h1> 
				<div>So HV:{this.state.tongHV}</div>
				<p>{this.props.children}</p>
				<button onClick={()=>{var str=this.props.ten+this.props.gv;getName(str)}}>Thong Tin</button>	
				<button onClick={this.addStudent}>addStudent</button>				
			</div>
		);
	}
});

// var Khoahoc = React.createClass({
// 	render:function(){
// 		return(
// 			<h3>Lap Trinh ReacJS</h3>
// 		);
// 	}
// })
var InputTag = React.createClass(
	{
		show(){
			var text=this.refs.sl.value;
			alert(text);
		},
		render(){
			return(
				<div>
					<select ref="sl">
						<option value="a">AAA</option>
						<option value="b">BBB</option>
						<option value="c">CCC</option>
					</select>
					<input type="text" ref="txt"/>
					<button onClick={this.show}>Hien Thi</button>
				</div>
			)
		}
	}
)

ReactDOM.render(
	<div>
		<InputTag/>
		<Tname ten="ReactJS" gv="MR.Khoa" tongHV="10">TrungML</Tname>
		<Tname ten="ReactJS" gv="MR.Khoa" tongHV="10">Nodejs</Tname>
	</div>
    ,document.getElementById("root")
);

