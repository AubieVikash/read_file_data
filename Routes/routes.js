const express = require('express');
const router = express.Router();
const xmlReader = require('read-xml')
const fs = require('fs')
const path = require('path')
const {parseString} = require('xml2js')
const cusines = require('../Models/cusines')
const restaurants = require('../Models/restaurantDetails')


router.get('/', (req, res)=> {
    res.status(200).send("loaded successfully");
});

router.post('/cusines', async(req, res)=> {

    const filedata = req.body;
    // console.log(path.join(__dirname, '../Files/result.json'))
    const filepath = path.join(__dirname, '../Files/cusines.json')

    try {
            await parseString(filedata, (error, result)=>{
                if(error)
                    return 0;
                 filedata = result;
                });

                // console.log(JSON.stringify(filedata.root.row))
            const finalData = JSON.stringify(filedata.root.row)
            // console.log("data=========",JSON.parse(finalData))

            const parsedData = JSON.parse(finalData)

            

            for(let i=0; i<parsedData.length; i++){
                parsedData[i].id[0] = JSON.parse(parsedData[i].id[0]);
                let cusine = new cusines({
                    is_deleted: parsedData[i].is_deleted[0],
                    status: parsedData[i].status[0],
                    name: parsedData[i].name[0],
                    cusine_image: parsedData[i].cusine_image[0],
                    _id: parsedData[i].id[0]
                })
                await cusine.save();
            }

            fs.writeFile(filepath, finalData, (err)=>{
                if(err){
                    console.log(err)
                    return 0;
                }

                console.log("file saved!!")
            })
                
            res.status(200).send("file created successfully")
} catch (error) {
        res.status(400).send(error);
    }
});

router.post('/restaurants', async(req, res)=> {

    const filedata = req.body;
    // console.log(path.join(__dirname, '../Files/result.json'))
    const filepath = path.join(__dirname, '../Files/restaurants.json')

    try {
            await parseString(filedata, (error, result)=>{
                if(error)
                    return 0;
                 filedata = result;
                });

                // console.log(JSON.stringify(filedata.root.row))
            const finalData = JSON.stringify(filedata.root.row)
            // console.log("data=========",JSON.parse(finalData))

            const parsedData = JSON.parse(finalData)


            for(let i=0; i<parsedData.length; i++){
                // console.log(parsedData[i])
                let restaurant = new restaurants({
                    is_deleted: parsedData[i].is_deleted[0],
                    status: parsedData[i].status[0],
                    name: parsedData[i].name[0],
                    cusines: parsedData[i].cusines,
                    id: parsedData[i].id[0],
                    latitude: parsedData[i].latitude[0],
                    longitude: parsedData[i].longitude[0],
                    homeDelivery: parsedData[i].home_delivery[0],
                    miles: parsedData[i].miles[0],
                    isRestaurantVerified: parsedData[i].is_restaurant_verified[0],
                    pos_rest_id: parsedData[i].pos_rest_id[0],
                    minimumOrder: parsedData[i].minimum_order[0],
                    maxPeople: parsedData[i].max_people[0],
                    dineIn: parsedData[i].dine_in[0],
                    email: parsedData[i].email[0],
                    mobileNumber: parsedData[i].mobile_number[0],
                    restaurantLocation: parsedData[i].restaurant_location[0],
                    tiiNumber: parsedData[i].till_number[0],
                    preparationTimeId: parsedData[i].preparation_time_id[0],
                    opentime: parsedData[i].open_time[0],
                    closeTime: parsedData[i].close_time[0]
                })
                await restaurant.save();
            }

            fs.writeFile(filepath, finalData, (err)=>{
                if(err){
                    console.log(err)
                    return 0;
                }

                console.log("file saved!!")
            })
                
            res.status(200).send("file created successfully")
} catch (error) {
        res.status(400).send(error);
    }
});

router.post('/fooditems', async(req, res)=> {

    const filedata = req.body;
    // console.log(path.join(__dirname, '../Files/result.json'))
    const filepath = path.join(__dirname, '../Files/foodItems.json')

    try {
            await parseString(filedata, (error, result)=>{
                if(error)
                    return 0;
                 filedata = result;
                });

                // console.log(JSON.stringify(filedata.root.row))
            const finalData = JSON.stringify(filedata.root.row)
            // console.log("data=========",JSON.parse(finalData))

            const parsedData = JSON.parse(finalData)


            // for(let i=0; i<parsedData.length; i++){
            //     // console.log(parsedData[i])
            //     let cusine = new cusines({
            //         is_deleted: parsedData[i].is_deleted[0],
            //         status: parsedData[i].status[0],
            //         name: parsedData[i].name[0],
            //         cusine_image: parsedData[i].cusine_image[0],
            //         id: parsedData[i].id[0]
            //     })
            //     await cusine.save();
            // }

            fs.writeFile(filepath, finalData, (err)=>{
                if(err){
                    console.log(err)
                    return 0;
                }

                console.log("file saved!!")
            })
                
            res.status(200).send("file created successfully")
} catch (error) {
        res.status(400).send(error);
    }
});

router.get('/download', (req, res)=> {
    const filepath = 

        res.download(path.join(__dirname, '../Files/result.json') , (err)=>{
            if(err){
                console.log(err)
                return new Error()
            }else{
                console.log("file downloaded successfully")
            }
        })    
})

module.exports = router;