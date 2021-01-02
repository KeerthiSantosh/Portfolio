import React, { Component} from 'react'
import Auxiliary from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES={
        salad:3.00,
        bacon:10.00,
        cheese:10.00
}
class BurgerBuilder extends Component {   
    state={
      ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
      }, 
      counter:{
        cheese:0,
        bacon:0,
        salad:0
    }, 
   
      totalPrice:0.00,    
      purchase:false,
      purchasing:false,
    }

    updatePurchaseState (ingredients) {
        const sum=Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
           return sum + el;
        },0);
        this.setState({purchase:sum>0});
    }

    addIngredientsHandler = (type)=>{
        let oldCount=this.state.ingredients[type];
        let updatedCount=oldCount+1;
        let updatedIngredients={
            ...this.state.ingredients
        };
    
         updatedIngredients[type]=updatedCount;
         let priceAddition = INGREDIENTS_PRICES[type];
         let oldPrice=this.state.totalPrice;
         let newPrice=oldPrice+priceAddition;
         this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
         this.updatePurchaseState(updatedIngredients);

        //counter    
        let oldCounter=this.state.counter;
        let updatedCounter=oldCounter[type]+1;
        oldCounter[type]=updatedCounter;
        this.setState({counter:oldCounter});
       
    }
    removeIngredientsHandler = (type) =>{
        let oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        let updatedCount=oldCount-1;
        let updatedIngredients={
            ...this.state.ingredients
        };
         updatedIngredients[type]=updatedCount;
         let priceremove =  INGREDIENTS_PRICES[type];
         let oldPrice=this.state.totalPrice;
         let newPrice=oldPrice-priceremove;
         this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
         this.updatePurchaseState(updatedIngredients);

        //counter
        let oldCounter=this.state.counter;
        let updatedCounter=oldCounter[type]-1;
        oldCounter[type]=updatedCounter;
        this.setState({counter:oldCounter})
    }
     purchaseHandler = () =>{
         this.setState({purchasing:true});
     }
     purchaseCancelHandler = () =>{
         this.setState({purchasing:false});
        
     }
    render() { 
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return ( 
            <Auxiliary>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}
                                   price={this.state.totalPrice}
                                   ok={this.purchaseCancelHandler}
                                   />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                counter={this.state.counter}
                ingredientsAdded={this.addIngredientsHandler}
                ingredientsRemove={this.removeIngredientsHandler}
                purchasable={this.state.purchasable}
                purchase={this.state.purchase}
                ordered={this.purchaseHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}/>
            </Auxiliary>
         );
    }     
}
 
export default BurgerBuilder;