import React,{Fragment} from 'react';
import { FormComp, InputComp, ButtonComp } from '../../../components/components';
import Uploader from '../../../components/upload.component';
import  { getBase64 } from '../../../utils/file.utils';

const FormItem = FormComp.Item;

class SpeakersRegisterContainer extends React.Component{

    setField = (file)=>{
        getBase64(file, (base64)=>{
            this.props.form.setFieldsValue({'image': base64})
        })
    }

    register = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((error, payload) => {
            if (!error) {
                console.log(payload);
                /*
                let context = this.props.contexts.find(item => item.name === payload.context);
                payload.context = context.id;
                this.props.dispatch(registerChallenge(payload));*/
            }
        });
    }

    render(){

        const { getFieldDecorator } = this.props.form;

        return(
            <Fragment>
                <FormComp>
                    <FormItem>
                        {getFieldDecorator('image', {
                            rules: [{ required: true, message: 'Por favor, insira a imagem!' }],
                        })(
                            <Uploader 
                                numberOfFiles={1}
                                uploadertype="picture-card"
                                fileTypeAllowed={['image/jpeg', 'image/png']}
                                errorMessage="O arquivo deve ser uma imagem"
                                data={this.setField} />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Por favor, insira a descrição!' }],
                        })(
                            <InputComp.TextArea placeholder="Descrição do slide" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('link', {
                            rules: [{ required: false, message: 'Por favor, insira o link!' }],
                        })(
                            <InputComp placeholder="Algum link para este slide" />
                        )}
                    </FormItem>
                    <FormItem>
                        <ButtonComp type="primary" loading={false} onClick={this.register}>Criar Slide</ButtonComp>
                    </FormItem>
                </FormComp>
            </Fragment>
        );
    }
}

export default FormComp.create()(SpeakersRegisterContainer);