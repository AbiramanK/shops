import React, {
    Component
} from 'react';

export interface ILoginProps {
}

export interface ILoginState {
}

export default class Login extends Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        Login
      </div>
    );
  }
}