import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createProduct, categories } from '../actions/actionfile';
import CreateProductsDisplay from '../components/CreateProductsDisplay';


class CreateProducts extends React.Component {
    constructor() {
        super()

        this.state = {
            asin: '', 
            category: '', 
            product: '', 
            type: '', 
            price: {
                discounted: false,
                current_price: 0,
                currency: "INR",
                before_price: 0,
                savings_amount: 0,
                savings_percent: 0
            }, 
            reviews: { 
                total_reviews:  0,
                rating: 0.0
            },
            title: '',
            thumbnailFile: '', 
            thumbnail: '', 
            description: '', 
            images: {
                image1:'',
                image2:'',
                image3:'',
                image4:''                
            }, 
            dimensions: '', 
            weight: '', 
            manufacturer: '', 
            model_number: '', 
            sold_by: '', 
            brand: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(categories());
    }

    changeImageHandler = (name, value) => {
        console.log(name, value)
        this.setState({
            images:{
                ...this.state.images,
                [name]: value
            }
            
        })
    }

    renderPriceChange = (name, value) => {
        console.log(name, value)
        this.setState({
            price:{
                ...this.state.price,
                [name]: value
            }
            
        })
    }
    
    renderChange = (name, value) => {
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    submit = async() => {
        console.log(this.state)
        const { asin, category, product, type, price, reviews, title, thumbnail, description, images, dimensions, weight, manufacturer, model_number, sold_by, brand } = this.state;
        if(asin && category && product && type && price && title) {

            const data = new FormData()	
            data.append("file",this.state.thumbnailFile)	
            data.append("upload_preset","image-uploader")	
            data.append("clone_name","sunitta")	
            console.log(data)	
            try{	
                const resp = await fetch('https://api.cloudinary.com/v1_1/sunitta/image/upload',{	
                method:'POST',	
                body:data	
            })	
            const respdata = await resp.json();	
            this.setState({ 	
                ...this.state,           	
                thumbnail:respdata.url})
            // console.log(this.state)
            this.props.dispatch(createProduct(this.state));

            setTimeout(() => {
                this.props.history.push('/products')
            }, 1000)
        }
    	
        catch (err) {	
            this.setState({error:"Invalid User details"})	
        }
    }}

    render() {
        return (
            <CreateProductsDisplay
                categories={ this.props.categories }
                changeHandler= { (name, value) => {this.renderChange(name, value)} }
                submitHandler= { () => {this.submit()} }
                renderPriceChange ={ this.renderPriceChange }
                changeImageHandler = { this.changeImageHandler }
            />
        );
    }
}

CreateProducts.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.Categories
    }
}

export default connect(mapStateToProps)(CreateProducts);