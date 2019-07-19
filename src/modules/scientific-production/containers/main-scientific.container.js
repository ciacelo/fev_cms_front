import React, {Fragment} from 'react';
import { DrawerComp, ButtonComp, IconComp } from '../../../components/components';
import StepsRegister from './steps-register.container';
import StepsList from './steps-list.container';


class ScientificContainer extends React.Component{
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
                <div>
                    A caceta do formulário aqui
                </div>
                <ButtonComp className="button drawer-button" type="primary" onClick={this.showDrawer}>
                    <IconComp type="plus" /> Adicionar Passo
                </ButtonComp>
                <DrawerComp
                       title="Adicionar Passo"
                       width={480}
                       onClose={this.onClose}
                       visible={this.state.visible}>
                    <StepsRegister />
                </DrawerComp>
                <StepsList />
            </Fragment>
        );
    }
}

export default ScientificContainer;