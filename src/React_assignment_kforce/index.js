class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Nothing is checked'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(event.target.value);
      alert('Your favorite flavor is: ' + event.target.value);
    }
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
     
    render() {
      const data = {
         sonia: true,
         maria: false,
      john: false,
      michael: true
      };
      
      
    const listItems = Object.keys(data).map((num,index) =>
    <div>
  <input type="checkbox" value={num} index/>{num}<br/>   
     </div>
  );
      return (
      <form onSubmit={this.handleSubmit}>
       <div>                                       
           <h4 onClick={this.handleChange} >{listItems}</h4>
      </div>
      <input type="submit" value="Submit"/>
    </form>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );