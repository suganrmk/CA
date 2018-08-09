import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Label, Button } from 'native-base';
import {
    Text, ImageBackground, StyleSheet, View
} from 'react-native';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';
class LoginForm extends Component {
    handleSubmit(val) {
        // Do anything you want with the form value
        console.log(val);
      }
 
      
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    {/* <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel >
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item>
                            <Button style={styles.loginbtn} primary>
                                <Text style={styles.loginbtntext} > Submit </Text>
                            </Button>
                        </Item>  

                    </Form> */}
                   
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    loginbtn: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30
    },
    loginbtntext: {
        color: '#fff',
        fontSize: 22,

    }
});

export default LoginForm;
