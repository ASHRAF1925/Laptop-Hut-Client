import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        {" "}
        13.1 What are the different ways to manage a state in a React
        application?
      </h1>
      <h2 className="text-xl font-bold">ANS:</h2>
      <p>
        There are four main types of state you need to properly manage in your
        React apps: Local state Global state Server state URL state Let's cover
        each of these in detail: Local (UI) state – Local state is data we
        manage in one or another component. Local state is most often managed in
        React using the useState hook. For example, local state would be needed
        to show or hide a modal component or to track values for a form
        component, such as form submission, when the form is disabled and the
        values of a form’s inputs. Global (UI) state – Global state is data we
        manage across multiple components. Global state is necessary when we
        want to get and update data anywhere in our app, or in multiple
        components at least. A common example of global state is authenticated
        user state. If a user is logged into our app, it is necessary to get and
        change their data throughout our application. Sometimes state we think
        should be local might become global. Server state – Data that comes from
        an external server that must be integrated with our UI state. Server
        state is a simple concept, but can be hard to manage alongside all of
        our local and global UI state. There are several pieces of state that
        must be managed every time you fetch or update data from an external
        server, including loading and error state. Fortunately there are tools
        such as SWR and React Query that make managing server state much easier.
        URL state – Data that exists on our URLs, including the pathname and
        query parameters. URL state is often missing as a category of state, but
        it is an important one. In many cases, a lot of major parts of our
        application rely upon accessing URL state. Try to imagine building a
        blog without being able to fetch a post based off of its slug or id that
        is located in the URL! There are undoubtedly more pieces of state that
        we could identify, but these are the major categories worth focusing on
        for most applications you build.
      </p>
      <h2 className="text-2xl font-bold">
        13.2 How does prototypical inheritance work?
      </h2>
      <h2 className="text-xl font-bold">ANS:</h2>
      <p>
        JavaScript is a prototype-based, Object Oriented programming language.
        After the ES6 updates, JavaScript allowed for “prototypal inheritance”,
        meaning that objects and methods can be shared, extended, and copied.
        Sharing amid objects makes for easy inheritance of structure (data
        fields), behavior (functions / methods), and state (data values).
        JavaScript is the most common of the prototype-capable languages, and
        its capabilities are relatively unique. When used appropriately,
        prototypical inheritance in JavaScript is a powerful tool that can save
        hours of coding. Today, we want to get you acquainted with prototypal
        inheritance in JavaScript to get you up to date with the ES6
        capabilities.
        <br />
        <p>
          In a class-based model, you have Classes, which are represented by the
          triple “Parents, Variables, Methods”. Where: Parents is the list of
          classes you’re extending. Classes may only extend other classes;
          Variables is the number of variable slots that instances will have.
          For example, a “class Point2d(int x, int y)” has 2 instance variables;
          Methods is a table of “name → function” that describes which services
          each instance of the class will support; Instances (or Objects) in a
          class-based model are represented with the tuple “Class, Values”.
          Where: Class is a pointer to the class triple that defines how many
          variables this instance supports, and what methods you can call on it;
          Values is a list of the values for each variable the instance has. In
          this model, Classes only describe how instances look like, and
          Instances are the only thing you can interact with. Classes cannot be
          instances, and you can’t inherit from Instances.
        </p>
      </p>
      <h1 className="text-2xl font-bold">
        13.3 What is a unit test? Why should we write unit tests?
      </h1>
      <h2 className="text-xl font-bold">ANS:</h2>
      <p>
        Unit testing is a software development process in which the smallest
        testable parts of an application, called units, are individually and
        independently scrutinized for proper operation. This testing methodology
        is done during the development process by the software developers and
        sometimes QA staff. The main objective of unit testing is to isolate
        written code to test and determine if it works as intended. Unit testing
        is an important step in the development process, because if done
        correctly, it can help detect early flaws in code which may be more
        difficult to find in later testing stages. Unit testing is a component
        of test-driven development (TDD), a pragmatic methodology that takes a
        meticulous approach to building a product by means of continual testing
        and revision. This testing method is also the first level of software
        testing, which is performed before other testing methods such as
        integration testing. Unit tests are typically isolated to ensure a unit
        does not rely on any external code or functions. Testing can be done
        manually but is often automated.
      </p>
      <h1 className="text-2xl font-bold">13.4 React vs. Angular vs. Vue?</h1>
      <h2 className="text-xl font-bold">ANS:</h2>
      <p>
        Angular vs React If the choice you’re making is based on Angular vs
        React alone, then you’ll simply need to consider the pros and cons
        discussed for those libraries in this post. But overall, keep in mind
        that both libraries can be used for mobile and web apps, while Angular
        is generally better for more complex apps that are enterprise-ready.
        React often requires extra modules and components, which keeps the core
        library small, but means there’s extra work involved when incorporating
        outside tools. Angular, on the other hand, is more of a full-fledged
        solution that doesn’t require extras like React often does, though it
        does have a steeper learning curve for its core compared to React. React
        is more suitable for intermediate to advanced JavaScript developers who
        are familiar with concepts from ES6 and up, while Angular favors those
        same developers who are also familiar with TypeScript. React vs Vue The
        choice between React vs Vue is often debated and it’s not an easy one.
        Vue has a vibrant and ever-growing community and has taken over
        popularity vs. React in many respects. React developers are still
        churning out lots of new components and extras, so there’s no sign that
        React is on the decline either. Vue is generally more suited to smaller,
        less complex apps and is easier to learn from scratch compared to React.
        Vue can be easier to integrate into new or existing projects and many
        feel its use of HTML templates along with JSX is an advantage. Overall,
        Vue might be the best choice if you’re a newer developer and not as
        familiar with advanced JavaScript concepts, while React is quite well
        suited for experienced programmers and developers who have worked with
        object-oriented JavaScript, functional JavaScript, and similar concepts.
        Angular vs Vue In most cases, you probably wouldn’t be deciding between
        only Angular and Vue. They are vastly different libraries with very
        different feature sets and learning curves. Vue is the clear choice for
        less experienced developers, and Angular would be preferred for those
        working on larger apps. A large library like Angular would require more
        diligence in keeping up with what’s new, while Vue would be less
        demanding in this regard and the fact that the two most recent major
        releases of Vue are in separate repositories helps. It should also be
        noted that Vue was created by a developer who formerly worked on Angular
        for Google, so that’s another thing to keep in mind, though that
        wouldn’t have a huge impact on your decision.
      </p>
    </div>
  );
};

export default Blogs;
