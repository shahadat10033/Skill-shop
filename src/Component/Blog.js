import React from "react";

const Blog = () => {
  return (
    <div className="mb-5">
      <h3 className="text-center my-5">Important Blog</h3>
      <div className="container bg-dark rounded text-white">
        <p className="pt-4">
          Q1. What is the different between props and state?
        </p>
        <br />
        <p>
          A1. Props are known as properties it can be used to pass data from one
          component to another. Props cannot be modified, Immutable and read
          only and the state represents parts of an Application that can change.
          Each component can have its State. The state is Mutable and It is
          local to the component only.
        </p>
        <br />
        <p> Q2. How does useState works? </p>
        <br />
        <p>
          A2. Creating a functional component and throw some React hook at it
          that tracks state, can also update it, and it just works on its
          way.The React useState Hook allows us to have state variables in
          functional components. We pass the initial state to this function, and
          it returns a variable with the current state value and another
          function to update this value.
        </p>
        <br />
        <p>Q3. What is the Purpose of useEffect other than fetching data?</p>
        <br />
        <p>
          A3. Besides fetch API data useEffect works on validating input field ,
          live filtering and trigger animation on new array value.
        </p>
        <br />
        <p> Q4. How does react work?</p>
        <br />
        <p className="pb-4">
          A4. React library is contains a large number of elements that we
          couple together to display the UI while also maintaining the app
          state.When App first starts, there is nothing in the Virtual DOM and
          the real DOM. As a result, the set of instructions supplied to
          ReactDOM must include instructions for creating everything from the
          start. However, when we interact with the user interface, such as by
          clicking a button, the application state is modified. in the further
          steps, the importance of the Virtual DOM becomes more prominent. When
          a Components state value changes, the tree will incorporate a new
          Element to symbolize the new objects. React now has an old tree that
          describes what it currently looks like and a new tree that represents
          how the updated page should look. React must now compare these two
          trees and provide ReactDOM with instructions to sync anything that has
          changed, which results in adding items to the UI. This is How React
          works.
        </p>
      </div>
    </div>
  );
};

export default Blog;
