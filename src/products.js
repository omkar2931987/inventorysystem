import React from 'react';
import axios from 'axios';

class Products extends React.Component{

    constructor(props) {
        super(props);
        this.state = {productname: '',categoryname:'', suppliername:'', costpricename:'', pricename:"",unitname:"",file: null};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
      }

      onChange(e) {
        this.setState({file:e.target.files[0]});
      }

      handleChange(event) {
        this.setState({[event.target.name]:event.target.value});        
      }
    
      handleSubmit(event) {
        event.preventDefault();

        //console.log(this.state);

        const { productname, categoryname, suppliername, costpricename, pricename, unitname, file } = this.state;
       
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

    const formData = new FormData();
   
      //console.log(formData);
   
     formData.append('myImage',this.state.file);

     const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    };
    
    axios.post("http://localhost:3001/upload",formData,config)
      .then((response) => {
          alert("The file is successfully uploaded");
      }).catch((error) => {
    });
    
    } // End of Submit Function

    


    render(){
        return (
            <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
              <label>Name:</label>
                <input type="text" name="productname" value={this.state.namevalue} onChange={this.handleChange} />
              
              <label>Category:</label>
                <input type="text" name="categoryname" value={this.state.categoryvalue} onChange={this.handleChange} />
              
              <label>Supplier Name:</label>
                <input type="text" name="suppliername" value={this.state.suppliervalue} onChange={this.handleChange} />
              
              <label>Cost Price:</label>
                <input type="text" name="costpricename" value={this.state.costpricevalue} onChange={this.handleChange} />
              
              <label>Price:</label>
                <input type="text" name="pricename" value={this.state.pricevalue} onChange={this.handleChange} />
              
              <label>Unit:</label>
                <input type="text" name="unitname" value={this.state.unitvalue} onChange={this.handleChange} />

              <input type="file" name="myImage" onChange= {this.onChange} />              
              
              <input type="submit" value="Submit" />
              
            </form>
          );
    }

}

export default Products