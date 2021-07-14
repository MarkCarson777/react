import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        {/* this is JSX not a DOM element */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
        }
      </div>
    );
  }
}

export default ImageCard;