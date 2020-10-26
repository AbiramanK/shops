import React, {
    Component
} from 'react';

export interface IHomeProps {
}

export interface IHomeState {
}

export default class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        Home
      </div>
    );
  }
}
