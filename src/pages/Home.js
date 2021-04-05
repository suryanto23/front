import '../App.css';
import React from 'react'
import {Container , Row , Col , Carousel , Jumbotron , Card , Button} from 'react-bootstrap'

function Home() {
    return (
        <Container fluid className="w-100 p-0 m-0">
           
          <Carousel>
            <Carousel.Item>
                <img
                id="carouselImg"
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                  alt="First slide"
                />
              <Carousel.Caption>
                  <h3 >First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                id="carouselImg"
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                id="carouselImg"
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1587738108336-bb28b49d6c62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Jumbotron className="w-100"> 
            <Row className="text-center d-flex justify-content-center"> 
              <Col xs={12}>
                <h3 className="display-3 mb-5">Welcome to GetBeans</h3>
              </Col>
              <Col xs={9}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum unde in hic. Perspiciatis, culpa iste id dolorum modi 
                    corrupti beatae accusamus quod animi quasi natus! At nisi cupiditate, ratione asperiores esse est eum omnis velit sequi 
                    officia assumenda sint, placeat modi. Est laboriosam consequatur maxime odio nemo consectetur culpa sit, minus libero 
                    commodi quaerat, aperiam placeat, vitae nostrum repellendus pariatur accusantium animi itaque nesciunt cupiditate? 
                    Soluta natus vero nisi? Provident illum dignissimos nostrum sunt rerum, ex dolore laborum consequuntur beatae vitae 
                    rem aperiam numquam  corrupti alias praesentium iste ullam optio. Tenetur ex sint ipsa aliquam sequi consequuntur 
                    officiis. Odio, assumenda!
                </p>
              </Col>
            </Row>
          </Jumbotron>


          <Container fluid>
         
            <Row className=" d-flex justify-content-center mb-5">
              <Col xs={3}>
                <Card className="w-100 h-100 p-0 mb-5" border="secondary">
                  <Card.Img 
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  />
                  <Card.Body>
                    <Card.Title>
                      Title
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  <Button variant="primary">Example</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="w-100 h-100 p-0 mb-5" border="secondary">
                  <Card.Img 
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  />
                  <Card.Body>
                    <Card.Title>
                      Title
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  <Button variant="primary">Example</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="w-100 h-100 p-0 mb-5" border="secondary">
                  <Card.Img 
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                  />
                  <Card.Body>
                    <Card.Title>
                      Title
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  <Button variant="primary">Example</Button>
                  </Card.Body>
                </Card>
              </Col>     
            </Row>

          </Container>

        </Container>
    )
}

export default Home
