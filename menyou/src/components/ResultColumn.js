import React, { Component, useState, useCallback } from 'react'
import { Grid, Container, Button, Image, Segment } from "semantic-ui-react"
import { Spin } from 'antd'
import Map from "./Map.js"
const queryString = require('query-string');
const api = require("../api.js")
const img1 = require('../imgs/sidebar/A.png')
const img2 = require('../imgs/sidebar/B.png')
const img3 = require('../imgs/sidebar/C.png')
const img4 = require('../imgs/sidebar/D.png')
const img5 = require('../imgs/sidebar/F.png')
const hand = require('../imgs/sidebar/hand.png')
const book = require('../imgs/sidebar/open-book.png')
const population= require('../imgs/sidebar/population.png')
const cloud = require('../imgs/sidebar/cloud.png')


// http://127.0.0.1:5000/score?lat=33.5722&lon=-112.0891&job=test&salary=70000&weather=80&kids=0&outdoors=1&population=1&num_schools=8&num_parks=2

const data = {
 "average_weather": 86.6,
 "city_name": "Phoenix",
 "cost_of_living": 68.64,
 "density": 1212.0,
 "grade": "C",
 "map_lat": "33.5722",
 "map_lng": "-112.0891",
 "population": 4081849,
 "state_id": "AZ",
 "total_school_rank": 40.0,
 "total_score": 59.83100233100234
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class ResultColumn extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    return (
          <div>
          {
            this.props.ready ?
              this.props.data?
                <div>
                  <Segment style={{textAlign:"center", marginTop: 10}}>
                  <h1 style={{fontSize: 48}}>{this.props.data.city_name}, {this.props.data.state_id}</h1>
                  <h1 style={{fontSize: 144, fontWeight: "bold"}}>{this.props.data.grade}</h1>
                  </Segment>
                  <p style={{fontSize: 25, marginTop: 20,}}>CityScore: { Number((this.props.data.total_score).toFixed(2))} / 100</p>

                  <Grid stackable columns={2} style={{fontSize: 25}}>
                  <Grid.Column>
                  <Image src={cloud} size='tiny' />
                  </Grid.Column>
                  <Grid.Column>
                  <p centered>Average Weather: {this.props.data.average_weather}</p>
                  </Grid.Column>

                  <Grid.Column>
                  <Image src={population} size='tiny' />
                  </Grid.Column>
                  <Grid.Column>
                  <p centered>Population: {this.props.data.population}</p>
                  <p centered>Density: {this.props.data.density}</p>
                  </Grid.Column>

                  <Grid.Column>
                  <Image src={book} size='tiny' />
                  </Grid.Column>
                  <Grid.Column>
                  <p centered>Education Score: {Math.floor(this.props.data.total_school_rank)}</p>
                  </Grid.Column>
                  <Grid.Column>
                  <Image src={hand} size='tiny' />
                  </Grid.Column>
                  <Grid.Column>
                  <p centered>Cost of Living Index: {Math.floor(this.props.data.cost_of_living)}</p>
                  </Grid.Column>
                  </Grid>
                </div> :
                <div style={{textAlign: "center", marginTop: 50 }}>
                  <h1> No results found. Data for this location is coming soon! </h1>
                </div>
            :
            <div style={{textAlign: "center", marginTop: 50 }}>
              <p> Gathering results, please wait.. </p>
              <Spin size="large"/>
            </div>
          }
        </div>
    )
  }
}
