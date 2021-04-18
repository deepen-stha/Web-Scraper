import React, {Component} from 'react';
// import {Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
class Menu extends Component{

    constructor(props){
        super (props);//required whenever you declare class component

        //defining the state for the container
        this.state={

            // initially the state of the selected item is null 
            selectedItem: null
            
        }
    }

    //function to render the details of the selected item when clicked
    renderItem(item){
        if(item !=null){
            return(
                <Card>
                    <CardImg width="100%" src={item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>

                </Card>
            );

        }
        else{
            return(
                //returning an empty div if the item is null
                <div></div>
            );
        }

    }

    //defining the onItemSelect() function here
    onItemSelect(item){
        // using setstate to set the value of the selected item as item which is clicked
        //changing the state of the component
        this.setState({ selectedItem:item});
    }

    //render returns the corresponding view for this component
    render(){
        //iterating over the element and then mapping it to javascript variable
        const menu = this.props.dishes.map((item) =>{
            return (
                // the key attribute can be used later to identify each of these elements uniquely
                <div key={item.id} className="col-12 col-md-5 m-1">
                    {/* each of the elements will act like a list element */}
                    {/* setting on click on the Card view  */}
                    <Card onClick={() => this.onItemSelect(item)}>
                        {/* below media is to display the image */}
                        <CardImg width="100%" src={item.image} alt={item.name}/>
                        
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                            {/* <p>{dish.description}</p> */}
                        </CardImgOverlay>
                    </Card>

                </div>
            );

        });

        return(
            // container is used from the Bootstrap row is also used from the bootstrap
            <div className="container">
                <div className="row">
                        {/* menu is the java script variable */}
                    {menu}
                    
                </div>

                <div className="row">
                    {this.renderItem(this.state.selectedItem)}
                </div>
            </div>

        );
    }
}

//exporting the component so that we can make use of it whereever we want in our project
export default Menu;