import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, FormLayout, Slider, RangeSlider, Cell, Header, PanelHeaderBack} from "@vkontakte/vkui"

import {metersInRoll, metersVisit} from '../../components/modals/HomeBotsListModal';

class WashHandsPanelBase extends React.Component {

  constructor(props) {
      super(props);

    this.state = {
      rolls: 1,
      visits: [2,4],
      metersVisit: 3,
      metersInRoll  : 20,
      visibleSettings: false
    };

  }

    render() {
        const {id, setPage, withoutEpic, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>Правила гигиены</PanelHeader>
                <img width="100%" src="https://psv4.userapi.com/c856436/u217316142/docs/d13/a631356bde2f/5ce1912942e46e7baa4e8e5f1d74305f.jpg?extra=PxAp5snJ0bG_qKcs4dZN_R8tpmkqb_JOySL1rLCl_WmYy2LjKBSBREElbgYmLtEyG8snUnuhcgCR35dWjbyMz0r_ywPZDy3w401obHOzR3Ed9N1f77NCKumFNkWHuMLEgBtrkTFOSwvbcVb5K2IrbQX6"/>
                <Group description="Вся информация взяна с сайта ria.ru">
                  <Cell multiline>Меры профилактики - основное, что нужно знать для сдерживания коронавируса, мыть руки лучше теплой водой и не менее 20 секунд, заявила главный терапевт Минздрава России Оксана Драпкина.</Cell>
                  <Cell multiline>Она уточнила, что мыть руки надо долго и тщательно, лучше горячей или теплой водой от 20 до 60 секунд, обрабатывая кожу между пальцами, большие пальцы, внутренние поверхности.</Cell>
                  <Cell multiline>Главный инфекционист Минздрава РФ Елена Малинникова также рассказала, что существует кашлевая гигиена, отметив, что чихать в руки нельзя, кашлять правильно в локоть.</Cell>
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

export default connect(null, mapDispatchToProps)(WashHandsPanelBase);
