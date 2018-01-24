import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Related from '../components/related';

import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errors/containers/handleError';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
	state = {
		modalVisible: false
	}
	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	handleOpenModal = (event) => {
		this.setState({
			modalVisible: true,
		})
	}
	render() {
		return (
			<HandleError>
				<HomeLayout>
					<Related />
					<VideoPlayer />
					<Categories 
						categories={this.props.data.categories} 
						handleOpenModal={this.handleOpenModal}
						/>
					{
						this.state.modalVisible && 
						<ModalContainer>
							<Modal
								handleClick={this.handleCloseModal}
							>
								<h1>Esto es un portal</h1>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}

export default Home;