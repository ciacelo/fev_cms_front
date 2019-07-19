import React, { Fragment } from 'react';
import TableComponent from '../../../components/table.component';


class SpeakersListContainer extends React.Component{

    details = ()=>{

    }

    update = ()=>{

    }

    delete = ()=>{

    }

    render(){
        return(
            <Fragment>
                <TableComponent 
                    loading = {false}
                    data = {[]}
                    columns = {[]}
                    details = {this.details}
                    update = {this.update}
                    delete = {this.delete}
                    />
            </Fragment>
        )

    }
}

export default SpeakersListContainer;