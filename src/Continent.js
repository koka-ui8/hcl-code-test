import React, { PureComponent, Fragment } from 'react';
import continents from './continents.json';
import Select from './Select';
import Flag from './Flags';

class Continent extends PureComponent {
  constructor() {
    super();
    this.state = {
      selectedContinent: '',
      countries: [],
      selectedCountry: '',
      selectedCountries: [],
      selectedCountriesObj: [],
    }
    this.imgRef = React.createRef();
  }
  
  onCountryChange = (node) => {
    const { value } = node.target;
    const { countries, selectedCountries, selectedCountriesObj } = this.state;
    this.setState({ selectedCountry: value})
    const selectedCountryObj = countries.find(obj => {
      return obj.value === value
    });
    if(!selectedCountries.includes(value)){
      selectedCountries.push(value);
      selectedCountriesObj.push(selectedCountryObj);
    } else {
      selectedCountries.splice(selectedCountries.indexOf(value), 1)
      selectedCountriesObj.splice(selectedCountriesObj.findIndex(obj => obj.value===value), 1)
      
    }
    this.setState({ selectedCountries,
    selectedCountriesObj });
  }
  clearFlags = () => {
  this.setState({selectedCountries: [], selectedCountriesObj: []});
  }
  onChange = (node) => {
    this.setState({ selectedContinent: node.target.value });
    const countries = continents.find(obj => {
      return obj.continent === node.target.value
    }).countries.map(country => {
      return {
        label: country.name,
        value: country.name,
        flag: country.flag,
      }
    });
    this.setState({countries, selectedCountries: [], selectedCountriesObj: []});
  }
    render() {
      const { selectedContinent, countries, selectedCountries, selectedCountriesObj } = this.state;
      const continentData = continents.map(obj => {
        return {
          label: obj.continent,
          value: obj.continent
        }
      })
      return (
        <Fragment>
        <Select 
          name="continents"
          value={selectedContinent}
          options={continentData}
          defaultOptionText="--Select a Continent--"
          label="Continent"
          step="1"
          onChange={this.onChange}
        />
        {selectedContinent &&
          <Select 
          multiple="true"
          name="countries"
          value={selectedCountries}
          options={countries}
          label="Country"
          step="2"
          defaultOptionText="--Select Countries--"
          onChange={this.onCountryChange}
        />}
        {selectedCountries.length > 0 && 
          <div className="flags">
          <span className="step-text">Selected Country Flags</span>
          {selectedCountriesObj.map(country => {
            return <Flag country={country.value} flagSrc={country.flag} />
          })}
          <button className="clearBtn" onClick={this.clearFlags}>Clear</button>
          </div>
        }
        
        </Fragment>
      );
    }
}
export default Continent;
