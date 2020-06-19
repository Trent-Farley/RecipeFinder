import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, ScrollView, TextInput, Alert } from 'react-native';
import Constants from 'expo-constants';
export class Renders {
    private ingrediants: Set<string> = new Set();
    private meatInput:string = "";
    public readonly styles = StyleSheet.create({
      title: {
        textAlign: 'center',
        marginTop: Constants.statusBarHeight,
        fontSize: 20,
        backgroundColor: '#54BEFF',
        padding: 3,
      },
      title2: {
        textAlign: 'center',
        marginTop: Constants.statusBarHeight,
        fontSize: 20,
        backgroundColor: '#01841E',
        padding: 3,
      },
      buttons:{
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
        padding: 15,
        margin: 10,
      },
      buttonText:{
        fontSize: 16,
      }
    });
    clearValue: TextInput | null | undefined;
    clearValue2: TextInput | null | undefined;
    otherInput: string = "";

    addIngrediant(ingrediant:string):void{
      this.ingrediants.add(ingrediant);
    }
    
    checkInput(){
  
    }
    showIngrediants():void{
      this.ingrediants.add(this.meatInput);
      this.ingrediants.add(this.otherInput);
      this.clearValue?.clear();
      this.clearValue2?.clear();
      Alert.alert(Array.from(this.ingrediants).toString());
    }
    public homeScreenRender(){
        return(
          <View>
            <Text style={this.styles.title}>Select type of protein or add a custom one</Text>
            <ScrollView horizontal={true}>
            <TouchableHighlight onPress={() => this.addIngrediant("Beef")} style = {this.styles.buttons} underlayColor={'red'} >
              <Text style={this.styles.buttonText}>Beef</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.addIngrediant("Chicken")} style = {this.styles.buttons} underlayColor={'yellow'} >
              <Text style={this.styles.buttonText}>Chicken</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.addIngrediant("Fish")} style = {this.styles.buttons} underlayColor={'blue'} >
              <Text style={this.styles.buttonText}>Fish</Text>
            </TouchableHighlight>
              <TextInput style={this.styles.buttonText} ref={input =>{this.clearValue = input}} onChangeText= {text => this.otherInput = text} placeholder="Custom" />
            </ScrollView>
            {this.renderOtherIngredients()}
          </View>
        );
    }

    private renderOtherIngredients(){
      return(
        <View>
          <Text style={this.styles.title2}> Sides or other ingredients</Text>
          <ScrollView horizontal={true}>
          <TouchableHighlight onPress={() => this.addIngrediant("broccoli")} style = {this.styles.buttons} underlayColor={'green'} >
            <Text style={this.styles.buttonText}>Broccoli</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.addIngrediant("Corn")} style = {this.styles.buttons} underlayColor={'yellow'} >
            <Text style={this.styles.buttonText}>Corn</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.addIngrediant("Carrots")} style = {this.styles.buttons} underlayColor={'orange'} >
            <Text style={this.styles.buttonText}>Carrots</Text>
          </TouchableHighlight>
            <TextInput style={this.styles.buttonText} ref={input =>{this.clearValue2 = input}} onChangeText= {text => this.meatInput = text} placeholder="Custom" />
          </ScrollView>
          <TouchableHighlight onPress={() => this.showIngrediants()} style = {this.styles.buttons} underlayColor={'green'} >
            <Text style={this.styles.buttonText}>Add to list</Text>
          </TouchableHighlight>
        </View>
      );
    }
}