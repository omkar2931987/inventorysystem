import React from 'react';
import axios from 'axios';

class ListProducts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {response:''};   
    }

    componentDidMount() {            
        axios
            .get('http://localhost:3001/listproducts')
            .then(res => this.setState({response:res}))
            .catch(err => console.log(err))

        //console.log(res.data[0].name)    
    }

    render(){            
        //console.log(this.state.response.data);        
        if(this.state.response.data){
        return (
        <div>
            <h2>List Products</h2>            
            <table border='1'>
                <thead></thead>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Supplier</th>
                        <th>Product Cost Price</th>
                        <th>Product Price</th>
                        <th>Product Unit</th>
                    </tr>   
                    {this.state.response.data.map((item,i)=>
                    <tr id={i}>                
                        <td style={{textAlign:'center'}}>{item.id}</td>
                        <td style={{textAlign:'center'}}>{item.name}</td>
                        <td style={{textAlign:'center'}}>{item.category}</td>
                        <td style={{textAlign:'center'}}>{item.supplier_name}</td>
                        <td style={{textAlign:'center'}}>{item.cost_price}</td>
                        <td style={{textAlign:'center'}}>{item.price}</td>
                        <td style={{textAlign:'center'}}>{item.unit}</td>
                    </tr>
                    )}

                
                </tbody>
            </table>
        </div>        
        );
        }
        else{
            return (<h2>Product List</h2>)
        }
    }
}
export default ListProducts