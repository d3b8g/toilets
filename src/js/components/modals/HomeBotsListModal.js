import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import {openModal, closeModal} from "../../store/router/actions";

import {List, Cell, Avatar, ModalPage, ModalPageHeader, PanelHeaderButton, withPlatform, IOS, Slider, FormLayout, RangeSlider, Button} from "@vkontakte/vkui";

import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';

var metersInRoll;
var metersVisit;

class HomeBotsListModal extends React.Component {

      state = {
        metersInRoll: 20,
        metersVisit: 3
      };

    saveSettings() {
        const {closeModal, test} = this.props;
        test();
        closeModal();
    }

    render() {
        const {id, onClose, openModal, platform} = this.props;

        return (
            <ModalPage
                id={id}
                header={
                    <ModalPageHeader
                        left={platform !== IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
                        right={platform === IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
                    >
                        Расширенные настройки
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={80}
            >
            <FormLayout>
              <Slider
                step={1}
                min={1}
                max={70}
                value={Number(this.state.metersInRoll)}
                onChange={metersInRoll => this.setState({metersInRoll})}
                top={"Метров в рулоне: " + this.state.metersInRoll}
              />
              <Slider
                step={1}
                min={1}
                max={10}
                value={Number(this.state.metersVisit)}
                onChange={metersVisit => this.setState({metersVisit})}
                top={"Метров используется(за поход): " + this.state.metersVisit}
              />
              <Button onClick={() => this.saveSettings()} size="xl" mode="commerce">Сохранить данные</Button>
            </FormLayout>
            </ModalPage>
        );
    }

}

const mapDispatchToProps = {
    openModal,
    closeModal
};

export default withPlatform(connect(null, mapDispatchToProps)(HomeBotsListModal));
export var metersInRoll;
export var metersVisit;
