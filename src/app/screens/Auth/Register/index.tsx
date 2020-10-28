import React, {
    Component
} from 'react';

export interface IRegisterProps {
}

export interface IRegisterState {
}

export default class Register extends Component<IRegisterProps, IRegisterState> {
  constructor(props: IRegisterProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        Register
      </div>
    );
  }
}
