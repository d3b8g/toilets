import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, FormLayout, Slider, RangeSlider, Cell, Header} from "@vkontakte/vkui"

import {metersInRoll, metersVisit} from '../../components/modals/HomeBotsListModal';

class HomePanelBase extends React.Component {

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
        const {id, setPage, withoutEpic} = this.props;

        var days_finish = Math.round( (this.state.metersInRoll*this.state.rolls ) / (this.state.metersVisit*this.state.visits.toString().split(',')[0].replace(',','')));
        var days_start = Math.round((this.state.metersInRoll*this.state.rolls ) / (this.state.metersVisit*this.state.visits.toString().split(',')[1]));
        var days = days_start + " - " + days_finish ;

        var keyword = "дней";

        var keyHeader = "Вам останется на: " + days + " " + keyword;

        if(days_finish >= 20 ){
          switch (days_finish.toString().slice(-1)) {
            case '0':
              keyword = "дней";
              break;
            case '1':
              keyword = "день";
              break;
            case '2','3','4':
              keyword = "дня";
              break;
            default:
              keyword = "дней";
              break;
          }
        }
        else {
          switch (days) {
            case 0:
              keyword = "дней";
              break;
            case 1:
              keyword = "день";
              break;
            case 2,3,4:
              keyword = "дня";
              break;
            default:
              keyword = "дней";
              break;
          }
        }

        if(days_start==0) keyHeader = "Вам нужно отправиться в магазин!";

        return (
            <Panel id={id}>
                <PanelHeader>Калькулятор туалетной бумаги</PanelHeader>
                <Group>
                  <Header>{keyHeader}</Header>
                </Group>
                <Group>
                  <FormLayout>
                    <Slider
                      step={1}
                      min={0}
                      max={120}
                      value={Number(this.state.rolls)}
                      onChange={rolls => this.setState({rolls})}
                      top={"Количество рулонов туалетной бумаги: " + this.state.rolls}
                    />
                      <RangeSlider
                        top={"Посещений туалета: от " + this.state.visits.toString().replace(',',' до ')}
                        min={1}
                        max={60}
                        step={1}
                        onChange={visits => this.setState({visits})}
                        defaultValue={[3, 5]}
                      />
                  </FormLayout>
                </Group>
                {!this.state.visibleSettings ? <Div><Button onClick={() => this.setState({visibleSettings: true})} size="xl" mode="secondary">Расширенные настройки</Button></Div> : <Div><Button onClick={() => this.setState({visibleSettings: false})} size="xl" mode="secondary">Расширенные настройки</Button></Div>}
                {this.state.visibleSettings &&
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
                  </FormLayout>}
                  <Group>
                    <Div><Button onClick={() => setPage('home','washHands')} size="xl" mode="secondary">Правила гигиены</Button></Div>
                  </Group>
                  <Footer>Версия 1.0</Footer>
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
