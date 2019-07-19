import React, {Fragment} from 'react';
import { DrawerComp, ButtonComp, IconComp } from '../../../components/components';
import SpeakersRegister from './speakers-register.container';
import SpeakersList from './speakers-list.container';


class MainSpeakersContainer extends React.Component{
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render(){
        return(
            <Fragment>
                <ButtonComp className="button drawer-button" type="primary" onClick={this.showDrawer}>
                    <IconComp type="plus" /> Novo palestrante
                </ButtonComp>
                <DrawerComp
                       title="Adicionar Palestrante"
                       width={480}
                       onClose={this.onClose}
                       visible={this.state.visible}>
                    <SpeakersRegister />
                </DrawerComp>
                 <SpeakersList />
            </Fragment>
        );
    }
}

export default MainSpeakersContainer;