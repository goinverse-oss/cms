import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import './TopMenu.css';

export default class TopMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact className="TopMenu">
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item
          name='Podcasts'
          active={activeItem === 'Podcasts'}
          onClick={this.handleItemClick}
        >
          <Link to="/podcasts">Podcasts</Link>
        </Menu.Item>

        <Menu.Item
          name='Meditations'
          active={activeItem === 'Meditations'}
          onClick={this.handleItemClick}
        >
          <Link to="/meditations">Meditations</Link>
        </Menu.Item>
        <Menu.Item
          name='Liturgies'
          active={activeItem === 'Liturgies'}
          onClick={this.handleItemClick}
        >
          <Link to="/liturgies">Liturgies</Link>
        </Menu.Item>
        <Menu.Item
          name='Events'
          active={activeItem === 'Events'}
          onClick={this.handleItemClick}
        >
          <Link to="/events">Events</Link>
        </Menu.Item>
        <Menu.Item
          name='SemanticExamples'
          active={activeItem === 'SemanticExamples'}
          onClick={this.handleItemClick}
        >
          <Link to="/semantic-examples">Semantic UI Examples</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
