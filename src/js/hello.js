const Hello = React.createClass({
  render: function() {
    return (
      <div>Pet</div>
    );
  }
});

const mountNode = document.getElementById('container');

ReactDOM.render(<Hello/>, mountNode);
