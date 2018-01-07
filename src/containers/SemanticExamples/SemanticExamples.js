import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Form,
  Message,
  Segment
} from 'semantic-ui-react';

class SemanticExamples extends Component {
  render() {
    const LoginForm = (
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
        className="login-form"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            {' '}Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/semantic-examples'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )


    return (
      <Container className="SemanticExamples">
        <h1>Semantic UI Component Examples</h1>
        <Header block>Buttons</Header>
        <Button>Get Happy</Button>
        <Button className="hollow">Get Sad</Button>
        <Header block>Login Form (<a href="https://react.semantic-ui.com/layouts/login">copied &amp; tweaked from here</a>)</Header>
        {LoginForm}
      </Container>
    );
  }
}

export default SemanticExamples;
