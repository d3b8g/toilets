//ПРИВЕТ ПАША

import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader} from "@vkontakte/vkui"

class HomePanelBase extends React.Component {

    state = {

    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    style: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Вопрос значит</h2>
                <p>Вас роняли в детстве?</p>
            </Alert>
        );
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Калькулятор туалетной бумаги</PanelHeader>
                <Group>

                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
