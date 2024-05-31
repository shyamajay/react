/*  Create element in react
  const heading = React.createElement("h1",{
     className:'heading'
  },"hello shyam");
  Creating root element in react is job of ReactDOM

 const root = ReactDOM.createRoot(document.getElementById("root"));
 
The object is then taken inside render and then the h1 tag is created and then put in the DOM
root.render(heading);
*/

// const parent = React.createElement("div",{
//     id:'parent'
//  },
// React.createElement("div",
//     {id:'child'},
//     React.createElement("h1",{},"I'm Shyam Nehruji")
// ));

// const root = ReactDOM.createRoot(document.getElementById("root"));
 
// root.render(parent);

const container = React.createElement("div",
    {id:"parent"},[
    React.createElement("div",
        {id:'child1'},[
            React.createElement("h1",{},
                "My name is Shyam"
            ),
            React.createElement("h1",{},
                "I am great fan of virat kohli"
            )
        ]
    ),
    React.createElement("div",
        {id:'child1'},[
            React.createElement("h1",{},
                "My name is Shyam"
            ),
            React.createElement("h1",{},
                "I am great fan of virat kohli"
            )
        ]
    )
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);