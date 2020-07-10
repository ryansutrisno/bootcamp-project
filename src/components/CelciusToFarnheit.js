import React from 'react';

class TemperatureInput extends React.Component {
  handleChange = (e) => {
    this.props.onChangeTemperature(e.target.value);
  };

  render() {
    const { tempLabel, temperature } = this.props;
    return (
      <>
        <label>
          {tempLabel === 'C' ? 'Celcius:' : 'Farenheit:'}
          <input
            type="number"
            value={temperature}
            onChange={this.handleChange}
          />
          <br />
        </label>
      </>
    );
  }
}

class CelciusToFarnheit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celcius: 0,
      farenheit: 0,
    };
  }
  onChangeCelcius = (celcius) => {
    let farenheit = ((parseFloat(celcius) * 9) / 5 + 32).toString();
    this.setState({ celcius, farenheit });
  };

  onChangeFarnheit = (farenheit) => {
    let celcius = (parseFloat(farenheit) - (32 * 5) / 9).toString();
    this.setState({ celcius, farenheit });
  };

  render() {
    const { celcius, farenheit } = this.state;
    return (
      <>
        <form>
          <TemperatureInput
            tempLabel="C"
            temperature={celcius}
            onChangeTemperature={this.onChangeCelcius}
          />
          <TemperatureInput
            tempLabel="F"
            temperature={farenheit}
            onChangeTemperature={this.onChangeFarnheit}
          />
        </form>
      </>
    );
  }
}

export default CelciusToFarnheit;
