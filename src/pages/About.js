import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src="https://opengraph.githubassets.com/8da7449f1f85456e8ad30b6f161569bf38d0fab36d5494d0180be648b5d89a0b/tryber/sd-011-project-movie-cards-library-stateful"
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Movie Card Library CRUD</h1>
              <p class="lead">
                This is a Movie Card Library template. CRUD is an acronym to{' '}
                <span className="fw-bold">Create</span>, <span className="fw-bold">Read</span>,
                <span className="fw-bold">Update</span> and <span className="fw-bold">Delete</span>
              </p>
              <p className="lead">
                It's possible to to make the following operations within this project:
                <br />
                Add a new movie to the list - <span className="fw-bold">CREATE</span> <br />
                List all the registered movies, with a summary page about every movie and a detailed
                info page about the selected movie - <span className="fw-bold">READ</span>. <br />
                Edit a movie on the list - <span className="fw-bold">UPDATE</span>
                <br />
                Delete a movie on the list - <span className="fw-bold">DELETE</span>
                <br />
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button
                  href="https://github.com/imphassis/"
                  type="button"
                  variant="secondary"
                  size="lg"
                  class="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Dev GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
