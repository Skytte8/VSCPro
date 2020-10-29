// testDB.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testDB',
    { useNewUrlParser: true, useUnifiedTopology: true });

const testSchema = new mongoose.Schema({
    tekst: String,
    tal: [Number],
    objekt: { dato: Date, ok: Boolean }
});

const Test = mongoose.model('Test', testSchema);

async function createTests() {
    for (let i = 1; i < 6; i++) {
        const test = await Test.create({
            tekst: 'nr-' + i,
            tal: [i, i + 1, i + 2],
            objekt: { dato: new Date(), ok: i % 2 }
        });
        console.log(test);
    }
}

async function findTests() {
    console.log(await Test.find().exec());
    console.log(await Test.find().select('-_id -__v').exec());
    console.log(await Test.findOne().where('tekst').eq('nr-2').exec());
    console.log(await Test.find().select('tekst tal').exec());
    console.log(await Test.find().select('tekst -_id').where('tekst').gt('nr-2').exec());
    console.log(await Test.find().select('tal -_id').where('tal.1').in([1, 2, 3]).exec());
    console.log(await Test.find().where('tekst').regex(/nr-[2-4]/).exec());
    console.log(await Test.find().distinct('tekst').exec());
    console.log(await Test.find().sort('-tekst').select('tekst -_id').exec());
    console.log(await Test.findOne().sort('-tekst').exec());
}

async function updateTest() {
    let test = await Test.findById('5f80ab20dbc761677d8ade94').exec();
    test.tekst += '-ny';
    console.log(await test.save());
}

async function deleteTests() {
    console.log(await Test.deleteOne().where('tekst').equals('nr-3').exec());
    console.log(await Test.deleteMany().exec());
}

async function main() {
    try {
        await createTests();
        await findTests();
        await updateTest()
        // await deleteTests();
    } catch (e) {
        console.log(e);
    }
    process.exit();
}
main();