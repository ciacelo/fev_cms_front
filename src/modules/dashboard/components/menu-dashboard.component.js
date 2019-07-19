import React from 'react';
import { IconComp } from '../../../components/components';
import Menu from '../../../components/menu.component'; 
import { Link } from 'react-router-dom';
import { childrenRoute } from '../../../utils/router.utils';

export function MenuSider(){

    const ItemsMenu = [
        {
            content: <Link to={childrenRoute('dashboard','carousel').path}>
                <IconComp type="pie-chart" />
                <span>Slider Home</span>
            </Link>
        },
        {
            content: <Link to={childrenRoute('dashboard','aboutEvent').path}>
                <IconComp type="desktop" />
                <span>Sobre o evento</span>
            </Link>
        },
        {
            content: <Link to={childrenRoute('dashboard','speakers').path}>
                <IconComp type="file" />
                <span>Palestrantes</span>
            </Link>
        },
        {
            content:<Link to={childrenRoute('dashboard','partners').path}>
                <IconComp type="file" />
                <span>Parceiros</span>
            </Link>
        },
        {
            content: <Link to={childrenRoute('dashboard','contact').path}>
                <IconComp type="file" />
                <span>Contato</span>
            </Link>
        },
        {
            content: <Link to={childrenRoute('dashboard','settings').path}>
                <IconComp type="file" />
                <span>Configurações</span>
            </Link>
        },
        {
            content: <Link to={childrenRoute('dashboard','scientific').path}>
                <IconComp type="file" />
                <span>Produção científica</span>
            </Link>
        }
    ];

    return <Menu extraProp={{'className':'menu'}} mode="vertical" theme="dark" items={ItemsMenu} />
}


export function MenuHeader(){
    const ItemsMenu = [
        {
            content: "Foto",
        },
        {
            content: "Nome",
        },
        {
            content: "Sair"
        }
        
    ];

    return <Menu extraProp={{'className':'menu', 'selectable':false, style:{'textAlign':'end'}}}
            mode="horizontal" theme="dark" items={ItemsMenu} />
}


