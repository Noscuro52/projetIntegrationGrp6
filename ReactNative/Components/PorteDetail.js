import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export default class PorteDetail extends React.Component {

  constructor(props){
    super(props)
    this.state={ 
      doors : [],
      isLoading: true
    }
  }

  getStatus(boolStatus) {
    if(boolStatus == true) {
      return "Ouvert";
    }
    else {
      return "Fermé";
    }
  }

  changeStatus(doorId, actualStatus) {
    this.setState({isLoading: true})
    var newStatus;
    if(actualStatus == 0) {
      newStatus = 1;
    } else {
      newStatus = 0;
    }

    const param = {id: doorId, status: newStatus};

    axios.put(`http://localhost:8081/doorStatus`, {param})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));

    this.setState({isLoading: false})
  }

  getDoorById(doorId) {
    for(var j=0; j<this.state.doors.length; j++) {
      if(this.state.doors[j].id == doorId) {
        return Object.values(this.state.doors[j]);
      }
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/doors`)
      .then(res => {
        this.setState({isLoading: false, doors: res.data});
      var dataDoor =  this.getDoorById(doorIdParam);
      var statusString = this.getStatus(dataDoor[2]);
      })
      .catch(error => {
        console.log(error)
    })
  }

  render() {
    if(this.state.isLoading) {
      return <Text>Loading...</Text>
    }
    else {
      console.log(this.props.route);
      const { doorIdParam } = this.props.route.params;
      var dataDoor =  this.getDoorById(doorIdParam);
      console.log(dataDoor);
      var statusString = this.getStatus(dataDoor[2]);
      return (
        <View style={styles.container}>
          <Button
            title="Essai"
            //onPress={() => this.changeStatus(doorIdParam, this.state.doors[doorIdParam].status)}
            onPress={() => alert('To do')}
          />
          <Text>Détails de la porte {doorIdParam} :</Text>
          <Text>Mot de passe : {dataDoor[1]}</Text>
          <Text>Status : {statusString}</Text>
          <Button
            title="Change state"
            onPress={() => this.changeStatus(doorIdParam, dataDoor[2])}
          />
          <Button
            title="Historique"
            onPress={() => navigation.navigate("Historique")}
          />
          <Button
            title="Paramètres"
            onPress={() => navigation.navigate("PorteParametres")}
            />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
