import React from "react";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          id: 1,
          LinkUrl: "hats"
        },
        {
            title: "jackets",
            imageUrl:
              "https://images.unsplash.com/photo-1597510257633-5cb8affdf905?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            id: 2,
            LinkUrl: ""
          },
          {
            title: "sneakers",
            imageUrl:
              "https://images.unsplash.com/photo-1589187832032-3e560ed4e6b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
            id: 3,
            LinkUrl: ""
          },
          {
            title: "womens",
            imageUrl:
              "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            id: 4,
            LinkUrl: ""
          },
          {
            title: "mens",
            imageUrl:
              "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            id: 5,
            LinkUrl: ""
          },
      ],
    };
  }

  render(){
      return(
        <div className="directory-menu row justify-content-center">
            {
                this.state.sections.map(({id, ...otherSection})=>(
                    <MenuItem key={id} {...otherSection}/>
                ))
            }
        </div>
      );
  }
}

export default Directory;
