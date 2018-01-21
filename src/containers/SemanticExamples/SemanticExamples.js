import React, { Component } from 'react';
import './SemanticExamples.css'
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Item,
  Form,
  Message,
  Segment
} from 'semantic-ui-react';

class SemanticExamples extends Component {
  render() {
    const liturgistsLogo = 'https://static1.squarespace.com/static/52fd5845e4b074ebcf586e7b/t/56f8a038ac962c8475242e8e/1459134527782/?format=300w';

    const LoginForm = (
      <Grid
        textAlign='center'
        verticalAlign='middle'
        className='login-form'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            {' '}Log-in to your account
          </Header>
          <Form size='large'>
            <Segment>
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
    );


    return (
      <Container className='SemanticExamples'>
        <Header as='h1'>Semantic UI Component Examples</Header>

        <Header block as='h3'>Buttons</Header>
        <Button>Get Happy</Button>
        <Button className='hollow'>Get Sad</Button>

        <Header block as='h3'>Login Form (<a href='https://react.semantic-ui.com/layouts/login'>copied &amp; tweaked from here</a>)</Header>
        {LoginForm}

        <Header block as='h3'>Item</Header>
        <Grid>
          <Grid.Column width={10}>
            <Item.Group unstackable>
              <Item>
                <Item.Image size='small' src={liturgistsLogo} />

                <Item.Content>
                  <Item.Header as='a'>Enemies - Live from Los Angeles</Item.Header>
                  <Item.Meta>
                    <span className='cinema'></span>
                  </Item.Meta>
                  <Item.Description>This is a special live episode recorded at The Liturgists Gathering in LA where we had…</Item.Description>
                  <Item.Extra>
                    <span className='date-time'>88 min • 10 days ago</span>
                    <span className='item-icons'>
                      <Icon name='heart'/> 802 <Icon name='chat' /> 82
                    </span>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid>


        <Header block as='h3'>Card</Header>
        <Card
          image={liturgistsLogo}
          header='The Liturgists Podcast'
          meta='88 min • 10 days ago'
          description='Michael Gungor, Science Mike, and a revolving cast of thinkers and creators discuss topics through the lenses of science, art, and faith.'
        />
      </Container>
    );
  }
}

export default SemanticExamples;
