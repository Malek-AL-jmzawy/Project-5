const connection = require("../db") 

const addProduct= (req,res)=>{
const {store_id,product_name,product_descripition,quantity_per_unit,unit_price,available_product,picture}=req.body
const data = [product_name,product_descripition,quantity_per_unit,unit_price,available_product,picture]
const query = `INSERT INTO products (product_name,product_descripition,quantity_per_unit,unit_price,available_product,picture)
VALUES (?,?,?,?,?,?) `
connection.query(query,data,(err,results)=>{
    if (err) {
        console.log(err);
    }  
    console.log(results);
    res.json(results)
})
}
const updateProduct= (req,res)=>{
    const {store_id,product_name,product_descripition,quantity_per_unit,unit_price,available_product,picture,product_id}=req.body
    const data = [product_name,product_descripition,quantity_per_unit,unit_price,available_product,picture,product_id]
    const query = `UPDATE products SET product_name=?,product_descripition=?,quantity_per_unit=?,
        unit_price=?,available_product=?,picture=? WHERE product_id=${product_id} `
    connection.query(query,data,(err,results)=>{
        if (err) {
            console.log(err);
        }  
        console.log(results);
        res.json(results)
    })
    }
const getproducts= (req,res)=>{
    const query = `SELECT * from products`
    connection.query(query,(err,results)=>{
        if (err) {
            console.log(err);
        }  
        console.log(results);
        res.json(results)
    })
    }
    const deleteProduct= (req,res)=>{
        const query = `DELETE FROM products WHERE product_id=?`
        const data = [req.body.product_id]
        connection.query(query,data,(err,results)=>{
            if (err) {
                console.log(err);
            }  
            console.log(results);
            res.json(results)
        })
        }

//******************** */
const addStore= (req,res)=>{
    const {store_name,store_category,store_pic}=req.body
    const data = [store_name,store_category,store_pic]
    const query = `INSERT INTO store (store_name,store_category,store_pic)
    VALUES (?,?,?) `
    connection.query(query,data,(err,results)=>{
        if (err) {
            console.log(err);
        }  
        console.log(results);
        res.json(results)
    })
    }
    
    const updateStore= (req,res)=>{
        const {store_name,store_category,store_pic,store_id}=req.body
        const data = [store_name,store_category,store_pic]
        const query = `UPDATE store SET store_name=?,store_category=?,store_pic=? WHERE store_id=${store_id} `
        connection.query(query,data,(err,results)=>{
            if (err) {
                console.log(err);
            }  
            console.log(results);
            res.json(results)
        })
        }
    const getStores= (req,res)=>{
        const query = `SELECT * from store `
        connection.query(query,(err,results)=>{
            if (err) {
                console.log(err);
            }  
            console.log(results);
            res.json(results)
        })
        }
        const deleteStore= (req,res)=>{
            const query = `DELETE FROM store WHERE store_id=?`
            const data = [req.body.store_id]
            connection.query(query,data,(err,results)=>{
                if (err) {
                    console.log(err);
                }  
                console.log(results);
                res.json(results)
            })
            }        
module.exports={addProduct,getproducts,deleteProduct,updateProduct,addStore,updateStore,getStores,deleteStore}