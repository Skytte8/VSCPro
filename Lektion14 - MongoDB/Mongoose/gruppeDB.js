// gruppeDB.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gruppeDB',
    { useNewUrlParser: true, useUnifiedTopology: true });

const gruppeSchema = new mongoose.Schema({
    navn: String,
    medlemmer: [{ type: mongoose.ObjectId, ref: 'Person' }] // 0..* link til Person
});
const Gruppe = mongoose.model('Gruppe', gruppeSchema);

const personSchema = new mongoose.Schema({
    navn: String,
    alder: Number,
    gruppe: { type: mongoose.ObjectId, ref: 'Gruppe' } // 0..1 link til Gruppe
});
const Person = mongoose.model('Person', personSchema);

async function createGruppe(navn) {
    return gruppe = await Gruppe.create({ navn });
}

async function createPerson(navn, alder) {
    return await Person.create({ navn, alder });
}

async function addPersonTilGruppe(person, gruppe) {
    person.gruppe = gruppe;
    gruppe.medlemmer.push(person);
    return await Promise.allSettled([person.save(), gruppe.save()]);
}

async function getGruppe(navn) {
    return await Gruppe.findOne().populate('medlemmer').where('navn').eq(navn).exec();
}

async function getGrupper() {
    return await Gruppe.find().populate('medlemmer').exec();
}

async function getPerson(navn) {
    return await Person.findOne().populate('gruppe').where('navn').eq(navn).exec();
}

async function getPersoner() {
    return await Person.find().populate('gruppe').exec();
}

async function updatePerson(person, alder) {
    person.alder = alder;
    return await person.save();
}

async function deletePerson(person) {
    let gruppe = await Gruppe.findById(person.gruppe).exec();
    let medlemmer = gruppe.medlemmer;
    let index = medlemmer.indexOf(person._id);
    medlemmer.splice(index, 1);
    return await Promise.allSettled(
        [gruppe.save(), Person.deleteOne().where('_id').eq(person._id).exec()]
    );
}

async function deleteGruppe(gruppe) {
    let medlemmer = gruppe.medlemmer;
    for (let person of medlemmer) {
        person.gruppe = undefined;
        await person.save();
    }
    return await Gruppe.deleteOne().where('_id').equals(gruppe._id).exec();
}

async function main() {
    try {
        let yatzy = await createGruppe('Yatzy');
        let ida = await createPerson('Ida', 23);
        await addPersonTilGruppe(ida, yatzy);
        let viggo = await createPerson('Viggo', 34);
        await addPersonTilGruppe(viggo, yatzy);

        console.log(await getGrupper());
        console.log(await getPersoner());

        let ida = await getPerson('Ida');
        ida = await updatePerson(ida, 24);

        // let ida = await getPerson('Ida');
        // await deletePerson(ida);

        // let yatzy = await getGruppe('Yatzy');
        // await deleteGruppe(yatzy);
    } catch (e) {
        console.log(e);
    }
    process.exit();
}

main();