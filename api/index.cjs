

const express = require("express");
const app  = express();
const cors = require("cors");



const dotenv = require("dotenv");
dotenv.config();


app.use(express.json());


app.use(
    cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
    })
  );
  


const mongoose = require("mongoose");

const client = mongoose.connect(process.env.MONGO_KEY).then(()=>{console.log("Connected to Mongo");})
const centerModel = require("./models/ewasteCenters.model.cjs")


app.get("/search" , async (req , res)=>{
        const testdata = await centerModel.find({})
        res.send(testdata);
})

const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    console.log(`server started at ${PORT} `);
});










// ******************* DO NOT RUN THIS CODE ********************


// CODE TO POPULATE THE DATABASE

// app.get("/sendall" , async (req , res)=>{

//        const testdata =  await centerModel.insertMany(
//             [ {
//                 "Sno": 1,
//                 "Name_Address": "M/s. Tritech Systems, No.165/3, Porur, Chennai- 116,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 420,
//                 "_id": "6506b0b361ff62b9ca26c780"
//                 },
//                 {
//                 "Sno": 2,
//                 "Name_Address": "M/s. Genbruze Solutions Pvt. ltd., S. F. No. 9.28, 29pt, Athipattu Village, Ambattur Taluk,Chennai District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 1100,
//                 "_id": "6506b0b361ff62b9ca26c781"
//                 },
//                 {
//                 "Sno": 3,
//                 "Name_Address": "M/s. Ecosible Recyclers Pvt Ltd, No.154A/B,8th Mahatma Gandhi Road, Tass Industrial Estate, Ambattur, Chennai – 600098.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 6000,
//                 "_id": "6506b0b361ff62b9ca26c782"
//                 },
//                 {
//                 "Sno": 4,
//                 "Name_Address": "M/s. Green Era Recyclers 37, Sivanandha Industries Estate, Dr. M.S. Udhayamurthy Nagar,Thadagam Road, Edayarpalayam, Coimbatore District - 641025,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 146,
//                 "_id": "6506b0b361ff62b9ca26c783"
//                 },
//                 {
//                 "Sno": 5,
//                 "Name_Address": "M/s. Green India Recyclers, SF. No. 26/1B, Kovilpalayam Road, Soolakal Village,Coimbatore District.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 456,
//                 "_id": "6506b0b361ff62b9ca26c784"
//                 },
//                 {
//                 "Sno": 6,
//                 "Name_Address": "M/s. A. K. Enterprises, No:12, Chakarapani St, Velacherry, Chennai-32.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 170,
//                 "_id": "6506b0b361ff62b9ca26c785"
//                 },
//                 {
//                 "Sno": 7,
//                 "Name_Address": "M/s. Shri Raaam Recycling, No. DP-29, SIDCO Industrial Estate, SIPCOT Industrial Complex, Gummidipoondi- 601201,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 504,
//                 "_id": "6506b0b361ff62b9ca26c786"
//                 },
//                 {
//                 "Sno": 8,
//                 "Name_Address": "M/s. JADG India E-Waste Recyclers Pvt. Ltd., SF No. 256/1A1, Kollur Village, Kilikodi Post, Ponneri Taluk, Tiruvallur- 601206,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 600,
//                 "_id": "6506b0b361ff62b9ca26c787"
//                 },
//                 {
//                 "Sno": 9,
//                 "Name_Address": "AER Worldwide india Pvt Ltd, No.774,Elandandheri ,sadayankuppam village, near andar kuppam Check Post, Manali New Town, Chennai – 600103.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 12000,
//                 "_id": "6506b0b361ff62b9ca26c788"
//                 },
//                 {
//                 "Sno": 10,
//                 "Name_Address": "M/s. Abishek Enterprises, SF No. 2G, 2nd Ambattur, Chennai-600098,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 6000,
//                 "_id": "6506b0b361ff62b9ca26c789"
//                 },
//                 {
//                 "Sno": 11,
//                 "Name_Address": "M/s. Virogreen India Pvt. Ltd., No. 297/1B2, No. 49, Pappankuppam Village, SR Kandigai Road, Gummidipoondi Taluk, Tiruvallur-601201,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 15000,
//                 "_id": "6506b0b361ff62b9ca26c78a"
//                 },
//                 {
//                 "Sno": 12,
//                 "Name_Address": "M/s. Earth Sense Recycle Private Limited, Survey No.247,Kanttankulathur Panchayat,Thenmelpakkam Village,Singaperumal Kovil, Kanchipuram, Tamil Nadu- 603204,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 4248,
//                 "_id": "6506b0b361ff62b9ca26c78b"
//                 },
//                 {
//                 "Sno": 13,
//                 "Name_Address": "M/s. Envirogreen E waste recycling Solutions, S.F.No. 2134, Plot No. 65, Palur Village, Chengalpattu Taluk & District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 1900,
//                 "_id": "6506b0b361ff62b9ca26c78c"
//                 },
//                 {
//                 "Sno": 14,
//                 "Name_Address": "M/s. Leela Traders., Plot No. C-15/1, CMDA Industrial Complex Maraimalai Nagar, Kancheepuram District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 2640,
//                 "_id": "6506b0b361ff62b9ca26c78d"
//                 },
//                 {
//                 "Sno": 15,
//                 "Name_Address": "M/s.SEZ Recycling,TP-7,IVth Avenue,mahindra World City Developers Limited,Industrial Estate,SEZ Area,Thenmelpakkam Village,Chengalpattu Taluk,Kancheepuram District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 1500,
//                 "_id": "6506b0b361ff62b9ca26c78e"
//                 },
//                 {
//                 "Sno": 16,
//                 "Name_Address": "M/s Trishyiraya Recycling India Pvt. Ltd., Plot No.A-7, Phase-I, MEPZ-SEZ, Tambaram, Chennai-600 045,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 3100,
//                 "_id": "6506b0b361ff62b9ca26c78f"
//                 },
//                 {
//                 "Sno": 17,
//                 "Name_Address": "M/s. S. P. P. Enterprises, S. No. 184-4C, Mambakkam Village and Post Sriperumbudur Taluk Kanchipuram District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 1080,
//                 "_id": "6506b0b361ff62b9ca26c790"
//                 },
//                 {
//                 "Sno": 18,
//                 "Name_Address": "M/s. RBIA Minerals and Metals Pvt. Ltd., S. F. No. 205-1B2A, Knadur Village, Sriperumbudur Taluk, Kancheepuram District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 1400,
//                 "_id": "6506b0b361ff62b9ca26c791"
//                 },
//                 {
//                 "Sno": 19,
//                 "Name_Address": "M/s. Punithan Enterprises Unit –II, No. 113/19 part, Rajiv Nagar, Peinjambakkam, Gundu Perumbedu Post SPR Talu, Kancheepuram Dt- 601301,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 300,
//                 "_id": "6506b0b361ff62b9ca26c792"
//                 },
//                 {
//                 "Sno": 20,
//                 "Name_Address": "M/s. K. P. P Enterprises, No. 535-3C, Santhavellore Village, Sunguvarchatram Post, Sriperumbudur Taluk, Kancheepuram District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 1000,
//                 "_id": "6506b0b361ff62b9ca26c793"
//                 },
//                 {
//                 "Sno": 21,
//                 "Name_Address": "M/s. G S ENTERPRISES S.F NO:254/2A2A, evalurkuppam Village,Sriperumbudur Taluk,Kancheepuram Dist 602105.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 8400,
//                 "_id": "6506b0b361ff62b9ca26c794"
//                 },
//                 {
//                 "Sno": 22,
//                 "Name_Address": "M/s.Enviro Metals Recyclers Private Limited Pvt Limited Aluminium Division S.No.104 and 106,Ezichur Village,Sriperumbudur Tk,Kancheepuram District.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 12000,
//                 "_id": "6506b0b361ff62b9ca26c795"
//                 },
//                 {
//                 "Sno": 23,
//                 "Name_Address": "M/s. World Scrap Recycling Solutions Pvt. Ltd.,S.No.351/7,Beemanthangal Village, Sriperumbudur Taluk, Kancheepuram District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 720,
//                 "_id": "6506b0b361ff62b9ca26c796"
//                 },
//                 {
//                 "Sno": 24,
//                 "Name_Address": "M/s. Green E Waste Private Limited, S. F. No. 294/pt, Ayanambakkam Village, Poonamallee Taluk, Tiruvallur District.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 422,
//                 "_id": "6506b0b361ff62b9ca26c797"
//                 },
//                 {
//                 "Sno": 25,
//                 "Name_Address": "M/s. Southern Alloys, DP No. S-105 and 106, SIDCO Industrial Estate, Kakallur Village Taluk and District,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 540,
//                 "_id": "6506b0b361ff62b9ca26c798"
//                 },
//                 {
//                 "Sno": 26,
//                 "Name_Address": "M/s. Micro E-Waste Recyclers, SF No. 301/3, Varaganeri Village, Trichy East Taluk, Trichy District.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 900,
//                 "_id": "6506b0b361ff62b9ca26c799"
//                 },
//                 {
//                 "Sno": 27,
//                 "Name_Address": "M/s. M. G. Traders, No. 86, Nehru Street, Teachers Colony, Ambattur, Chennai - 600053,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 600,
//                 "_id": "6506b0b361ff62b9ca26c79a"
//                 },
//                 {
//                 "Sno": 28,
//                 "Name_Address": "M/s. Udhaya Traders, No. 242, Tiny Sector Ambattur Industrial Estate, Chennai – 600058,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 84,
//                 "_id": "6506b0b361ff62b9ca26c79b"
//                 },
//                 {
//                 "Sno": 29,
//                 "Name_Address": "M/s Victory Recovery & Recycle Technologies India Pvt.Ltd., 672/2, Doubal Dragon Industrial Park,KannuR Village & Post Kottaiyur,Thiruvallur,District-Tamil Nadu -602 108,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 100,
//                 "_id": "6506b0b361ff62b9ca26c79c"
//                 },
//                 {
//                 "Sno": 30,
//                 "Name_Address": "M/s. TES AMM Private Limited,Plot No.A-18, SIPCOT Industrial Growth,Centre Oragadam,Panruti ‘A’ Village, Sriperumpudur,Kanchipuram District Tamil Nadu – 630 304,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 30000,
//                 "_id": "6506b0b361ff62b9ca26c79d"
//                 },
//                 {
//                 "Sno": 31,
//                 "Name_Address": "M/s Arockia Enterprises, S.F.No.4/1E, Seevaram village, Sholinganallur taluk, Chennai – 600 097,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 216,
//                 "_id": "6506b0b361ff62b9ca26c79e"
//                 },
//                 {
//                 "Sno": 32,
//                 "Name_Address": "M/s Ascent Urban Recyclers Pvt Limited, SF No.62/1B, 2A2, Padur Road, Mevalurkuppam village, Sriperumbudur taluk, Kancheepuram district, Pin - 602 105,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 400,
//                 "_id": "6506b0b361ff62b9ca26c79f"
//                 },
//                 {
//                 "Sno": 33,
//                 "Name_Address": "M/s Blooming Recyclers, Plot. No. D9/2, SIDCO Industrial Estate, Maraimalai Nagar, Kizhikaranai village, Chengalpattu district.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 730,
//                 "_id": "6506b0b361ff62b9ca26c7a0"
//                 },
//                 {
//                 "Sno": 34,
//                 "Name_Address": "M/s E PROCESS House c/o Bharat Electronics Limited, SF No 3 & 10/1 Nanthambakkam village, Alandur taluk, Chengalpattu district,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 435,
//                 "_id": "6506b0b361ff62b9ca26c7a1"
//                 },
//                 {
//                 "Sno": 35,
//                 "Name_Address": "M/s INAA Enterprises, DP No. AC-31/24, Thirumudivakkam village, Kundrathur taluk, Kancheepuram district,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 300,
//                 "_id": "6506b0b361ff62b9ca26c7a2"
//                 },
//                 {
//                 "Sno": 36,
//                 "Name_Address": "M/s John Firm SF No.144/1C2, Kerekodihalli village, Karimangalam taluk, Dharmapuri district.,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 300,
//                 "_id": "6506b0b361ff62b9ca26c7a3"
//                 },
//                 {
//                 "Sno": 37,
//                 "Name_Address": "M/s KGN Electronics, No.48 A, Dr Ambedkar College Road, Erukkenchery village, Perambur taluk, Chennai district,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 250,
//                 "_id": "6506b0b361ff62b9ca26c7a4"
//                 },
//                 {
//                 "Sno": 38,
//                 "Name_Address": "M/s Ponniamman Enterprises, SF No. 216/3, Tiruvallur village, Tiruvallur taluk, Tiruvallur district,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 12000,
//                 "_id": "6506b0b361ff62b9ca26c7a5"
//                 },
//                 {
//                 "Sno": 39,
//                 "Name_Address": "M/s R.M Computers, Plot No.229, 9th Street, Ambattur Chennai – 600098,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 228,
//                 "_id": "6506b0b361ff62b9ca26c7a6"
//                 },
//                 {
//                 "Sno": 40,
//                 "Name_Address": "M/s Sai Sri Waste Management Pvt Ltd, SF No 443/1B2, 443/2A, Padaveedu village, Kumarapalayam taluk, Kumarapalayam district,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 1680,
//                 "_id": "6506b0b361ff62b9ca26c7a7"
//                 },
//                 {
//                 "Sno": 41,
//                 "Name_Address": "M/s SKV E-Waste Recycling Pvt Ltd, Plot No.154 A&B, Tass Industrial Area, Ambattur SIDCO Industrial Estate, Chennai – 600 098,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 560,
//                 "_id": "6506b0b361ff62b9ca26c7a8"
//                 },
//                 {
//                 "Sno": 42,
//                 "Name_Address": "M/s Tharani Electronics Waste, SF No.381/3pt, 381/2pt, 384/2pt, 384/3 pt, Sarkar Samakulam village, Annur taluk, Coimbatore district,tamilnadu,india",
//                 "Installed_Capacity_Metric_Tons_per_Annum_MTA": 207,
//                 "_id": "6506b0b361ff62b9ca26c7a9"
//                 }
//                 ]
//         )
    
    
//     res.send(testdata);
// })
