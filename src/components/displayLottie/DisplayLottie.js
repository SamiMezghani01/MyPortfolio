import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  handleAnimationLoad = () => {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          onDOMLoaded={this.handleAnimationLoad}
        />
      </Suspense>
    );
  }
}
