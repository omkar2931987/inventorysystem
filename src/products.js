import React from 'react';
import axios from 'axios';

class Products extends React.Component{

    constructor(props) {
        super(props);
        this.state = {productname: '',categoryname:'', suppliername:'', costpricename:'', pricename:"",unitname:""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({[event.target.name]:event.target.value});        
      }
    
      handleSubmit(event) {
        event.preventDefault();

        console.log(this.state);

        const { productname, categoryname, suppliername, costpricename, pricename, unitname } = this.state;


        const productdata = {
            productname,
            categoryname,
            suppliername,
            costpricename,
            pricename,
            unitname
        };

    axios
      .post('http://localhost:3001/createproduct',productdata)
      .then(() => console.log('Product Created'))
      .catch(err => {
        console.error(err);
      });
      }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" name="productname" value={this.state.namevalue} onChange={this.handleChange} />
              </label>
              <label>
                Category:
                <input type="text" name="categoryname" value={this.state.categoryvalue} onChange={this.handleChange} />
              </label>
              <label>
                Supplier Name:
                <input type="text" name="suppliername" value={this.state.suppliervalue} onChange={this.handleChange} />
              </label>
              <label>
                Cost Price:
                <input type="text" name="costpricename" value={this.state.costpricevalue} onChange={this.handleChange} />
              </label>
              <label>
                Price:
                <input type="text" name="pricename" value={this.state.pricevalue} onChange={this.handleChange} />
              </label>
              <label>
                Unit:
                <input type="text" name="unitname" value={this.state.unitvalue} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
    }

}

export default Products