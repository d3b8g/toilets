import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, FormLayout, Slider, RangeSlider, Cell, Header} from "@vkontakte/vkui"

class HomePanelBase extends React.Component {

  constructor(props) {
      super(props);

    this.state = {
      rolls: 1,
      visits: [3,5]
    };
  }

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

        var days_counter = Math.round( (184 * this.state.rolls) / (3 * Number.parseInt(this.state.visits.toString().split(',')[0].replace(',',''))));
        var days = Math.round( (184*this.state.rolls) / (3*Number.parseInt(this.state.visits.toString().split(',')[1]))) + " - " days_counter;
        var keyword = "дней";

        if(days_counter >= 20 ){
          switch (days_counter.toString().slice(-1)) {
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

        return (
            <Panel id={id}>
                <PanelHeader>Калькулятор туалетной бумаги</PanelHeader>
                <Group>
                  <Header>Вам останется на {days} {keyword} </Header>
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
                        top={"Посещений в туалет: от " + this.state.visits.toString().replace(',',' до ')}
                        min={1}
                        max={60}
                        step={1}
                        onChange={visits => this.setState({visits})}
                        defaultValue={[3, 5]}
                      />
                  </FormLayout>
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
