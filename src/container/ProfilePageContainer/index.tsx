import * as React from 'react';
import ProfilePage from '../../stories/screens/ProfilePage';
export interface Props {
	navigation: any,
}
export interface State {}
export default class ProfilePageContainer extends React.Component<Props, State> {
	render() {
		return <ProfilePage navigation={this.props.navigation} />;
	}
}
