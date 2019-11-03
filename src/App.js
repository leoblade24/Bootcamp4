import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      dataarray:this.props.data,
      length:this.props.data.length
    };
  }
  addToArray(val){
    var array=this.state.dataarray
    array.push(val)
    this.setState({dataarray:array})
    this.setState({length:this.state.length+1})
  }
  delete(){
    console.log("hello")
    var array=this.state.dataarray
    var toBeDeleted=this.state.dataarray.findIndex(x=>x.id===this.state.selectedBuilding)
    array.splice(toBeDeleted,1);
    this.setState({dataarray:array})
    this.setState({selectedBuilding:0})
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText:value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding:id
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.dataarray}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.dataarray}
              />
              <RemoveBuilding
              dataaray={this.state.dataaray}
              selectedBuilding={this.state.selectedBuilding}
              delete={this.delete.bind(this)}
              />
              <h1>
                To Add A Building
              </h1>
              <AddBuilding
              dataarray={this.state.dataarray}
              addToArray={this.addToArray.bind(this)}
              length={this.state.length}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
