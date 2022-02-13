class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            names: [
                "Neelkanth",
                "Ravindra",
                "Simon",
                "Aayush",
            ]
        }
    }

    increaseCounter = () => {
        // This is incorrect way to set state.
        // this.setState({counter: this.state.counter + 1});
        // this.setState({counter: this.state.counter + 1});
        // this.setState({counter: this.state.counter + 1});
        
        // This is correct way to set state.
        this.setState((previousState) => {
            return {
                counter: previousState.counter + 1,
                names: previousState.names,
            }
        });
        // this.setState((previousState) => {
        //     return {
        //         counter: previousState.counter + 1,
        //         names: previousState.names,
        //     }
        // });
        // this.setState((previousState) => {
        //     return {
        //         counter: previousState.counter + 1,
        //         names: previousState.names,
        //     }
        // });
    }

    decreaseCounter = () => {
        this.setState((prev) => {
            return {
                counter: prev.counter - 1,
                names: prev.names,
            }
        });
    }

    render() {
        // console.log(this.state.names);
        return(
            <div>
                <h2>Like/Dislike Counter</h2>
                <LikeDislikeButton func={this.decreaseCounter} purpose="dislike" />
                <ShowCounter counterValue={this.state.counter} />
                <LikeDislikeButton func={this.increaseCounter} purpose="like" />
                
                {this.state.names.map((single_name) => {
                    return(
                        <GreetPerson name={single_name} />
                    )
                })}

            </div>
        )
    }
}