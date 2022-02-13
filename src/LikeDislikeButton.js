class LikeDislikeButton extends React.Component {
    render() {
        // console.log(this.props.purpose);
        // () ? true : false
        return (
            this.props.purpose == "dislike" ? 
                <button onClick={this.props.func}>👎🏻</button> 
            : 
                <button onClick={this.props.func}>👍🏻</button>
            
            // React.createElement('button', {}, "👎🏻")
        )
    }
}