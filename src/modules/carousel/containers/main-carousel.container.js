import React, {Fragment} from 'react';
import { DrawerComp, ButtonComp, IconComp } from '../../../components/components';
import CarouselRegister from './carousel-register.container';
import CarouselList from './carousel-list.container';


class MainCarouselContainer extends React.Component{
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
                    <IconComp type="plus" /> Novo slide
                </ButtonComp>
                <DrawerComp
                       title="Adicionar slide"
                       width={480}
                       onClose={this.onClose}
                       visible={this.state.visible}>
                    <CarouselRegister />
                </DrawerComp>
                <CarouselList />
            </Fragment>
        );
    }
}

export default MainCarouselContainer;