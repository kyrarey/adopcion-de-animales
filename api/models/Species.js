const {Schema,model} = require("mongoose")

const SpeciesSchema = new Schema ({
    SpeciesName: {
        type : String, 
        required:true,
    },  
})

module.exports = model("Species",SpeciesSchema)