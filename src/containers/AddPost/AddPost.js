import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Input } from "../../components";
import { addUserPost } from "../../store";
import { updateObject, checkValidity } from "../../shared/";
import classes from "./AddPost.css";

class AddPost extends Component {
  state = {
    postForm: {
      image: {
        elementType: "input",
        elementConfig: {
          name: "image",
          type: "text",
          placeholder: "Choose Image"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      caption: {
        elementType: "input",
        elementConfig: {
          name: "caption",
          type: "text",
          placeholder: "Write a caption..."
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      location: {
        elementType: "input",
        elementConfig: {
          name: "location",
          type: "text",
          placeholder: "Add location"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      type: {
        elementType: "select",
        elementConfig: {
          name: "post type",
          options: [
            { value: "vedio", displayValue: "Vedio" },
            { value: "gallery", displayValue: "Gallery" }
          ]
        },
        value: "vedio",
        validation: {},
        valid: true
      }
    }
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.postForm[inputIdentifier],
      {
        value: event.target.value,
        touched: true,
        valid: checkValidity(
          event.target.value,
          this.state.postForm[inputIdentifier].validation
        )
      }
    );

    const updatedPostForm = updateObject(this.state.postForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedPostForm) {
      formIsValid = updatedPostForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ postForm: updatedPostForm, formIsValid: formIsValid });
  };

  addPostHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.postForm) {
      formData[formElementIdentifier] = this.state.postForm[
        formElementIdentifier
      ].value;
    }
    this.props.onAddUserPost(formData);
  };

  render() {
    let FormElementsArray = [];
    for (let key in this.state.postForm) {
      FormElementsArray.push({ id: key, config: this.state.postForm[key] });
    }

    let formElements = FormElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={event => this.inputChangedHandler(event, formElement.id)}
        invalid={!formElement.config.valid}
        touched={formElement.config.touched}
        shouldValidate={formElement.config.validation}
      />
    ));

    return (
      <div className={classes.AddPost}>
        <h1> Add New Post</h1>
        <form>
          {formElements}
          <Button
            btnType="Success"
            disabled={!this.state.formIsValid}
            clicked={this.addPostHandler}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onAddUserPost: addUserPost }, dispatch);
};

export default connect(
  null,
  mapDisatchToProps
)(AddPost);
